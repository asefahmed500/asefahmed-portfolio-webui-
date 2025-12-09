import { useState, useEffect } from 'react';
import { User, Role, AdminStats, AuditLog } from '../types/admin';

export function useAdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      
      if (data.success) {
        setUsers(data.data);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData: Partial<User>) => {
    const res = await fetch('/api/admin/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return res.json();
  };

  const updateUser = async (userId: string, userData: Partial<User>) => {
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return res.json();
  };

  const deleteUser = async (userId: string) => {
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'DELETE',
    });
    return res.json();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    createUser,
    updateUser,
    deleteUser,
  };
}

export function useAdminStats() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats');
        const data = await res.json();
        if (data.success) setStats(data.data);
      } catch (error) {
        console.error('Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
}

export function useAdminRoles() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch('/api/admin/roles');
        const data = await res.json();
        if (data.success) setRoles(data.data);
      } catch (error) {
        console.error('Failed to fetch roles');
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return { roles, loading };
}
