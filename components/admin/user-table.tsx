'use client';

import { User } from '@/lib/types/admin';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/10 text-green-500';
      case 'inactive': return 'bg-gray-500/10 text-gray-500';
      case 'suspended': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-500/10 text-purple-500';
      case 'editor': return 'bg-blue-500/10 text-blue-500';
      case 'viewer': return 'bg-gray-500/10 text-gray-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-medium">User</th>
              <th className="text-left p-4 font-medium">Email</th>
              <th className="text-left p-4 font-medium">Role</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-left p-4 font-medium">Last Active</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-border hover:bg-muted/30">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-medium">
                      {user.avatar}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground">{user.email}</td>
                <td className="p-4">
                  <Badge className={getRoleColor(user.role)}>
                    {user.role}
                  </Badge>
                </td>
                <td className="p-4">
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </td>
                <td className="p-4 text-muted-foreground">
                  {user.lastActive ? new Date(user.lastActive).toLocaleDateString() : 'Never'}
                </td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(user)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(user)}>
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => onDelete(user.id)}
                          className="text-red-500"
                        >
                          Delete User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
