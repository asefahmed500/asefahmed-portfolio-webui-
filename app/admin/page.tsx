'use client';

import { useState, useEffect } from 'react';
import { User, AdminStats, Role, AuditLog } from '@/lib/types/admin';
import { StatsCards } from '@/components/admin/stats-cards';
import { UserTable } from '@/components/admin/user-table';
import { UserForm } from '@/components/admin/user-form';
import { RoleTable } from '@/components/admin/role-table';
import { ActivityLog } from '@/components/admin/activity-log';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Download, Filter } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, statsRes, rolesRes, logsRes] = await Promise.all([
        fetch('/api/admin/users'),
        fetch('/api/admin/stats'),
        fetch('/api/admin/roles'),
        fetch('/api/admin/audit-logs'),
      ]);
      
      const usersData = await usersRes.json();
      const statsData = await statsRes.json();
      const rolesData = await rolesRes.json();
      const logsData = await logsRes.json();
      
      if (usersData.success) setUsers(usersData.data);
      if (statsData.success) setStats(statsData.data);
      if (rolesData.success) setRoles(rolesData.data);
      if (logsData.success) setAuditLogs(logsData.data);
    } catch (error) {
      toast.error('Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(undefined);
    setIsDialogOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsDialogOpen(true);
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success('User deleted successfully');
        fetchData();
      } else {
        toast.error(data.error || 'Failed to delete user');
      }
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  const handleSubmitUser = async (formData: Partial<User>) => {
    try {
      const url = editingUser 
        ? `/api/admin/users/${editingUser.id}`
        : '/api/admin/users';
      
      const method = editingUser ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (data.success) {
        toast.success(data.message || 'User saved successfully');
        setIsDialogOpen(false);
        fetchData();
      } else {
        toast.error(data.error || 'Failed to save user');
      }
    } catch (error) {
      toast.error('Failed to save user');
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, roles, and system settings</p>
          </div>
          <Button onClick={handleCreateUser}>
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>

        {stats && <StatsCards stats={stats} />}

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <UserTable
              users={filteredUsers}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          </TabsContent>

          <TabsContent value="roles" className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Manage user roles and permissions
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Role
              </Button>
            </div>
            <RoleTable
              roles={roles}
              onEdit={(role) => toast.info('Edit role: ' + role.displayName)}
              onDelete={(roleId) => toast.info('Delete role: ' + roleId)}
            />
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Recent system activity and audit logs
              </p>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Logs
              </Button>
            </div>
            <ActivityLog logs={auditLogs} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingUser ? 'Edit User' : 'Create New User'}
            </DialogTitle>
          </DialogHeader>
          <UserForm
            user={editingUser}
            onSubmit={handleSubmitUser}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
