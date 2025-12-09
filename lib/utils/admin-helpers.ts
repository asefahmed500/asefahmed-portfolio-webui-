// Admin utility functions

import { User, UserRole, UserStatus } from '../types/admin';

export function getUserInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function formatUserStatus(status: UserStatus): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function getUserRoleColor(role: UserRole): string {
  const colors = {
    admin: 'bg-purple-500/10 text-purple-500',
    editor: 'bg-blue-500/10 text-blue-500',
    viewer: 'bg-gray-500/10 text-gray-500',
    user: 'bg-green-500/10 text-green-500',
  };
  return colors[role] || colors.user;
}

export function getUserStatusColor(status: UserStatus): string {
  const colors = {
    active: 'bg-green-500/10 text-green-500',
    inactive: 'bg-gray-500/10 text-gray-500',
    suspended: 'bg-red-500/10 text-red-500',
  };
  return colors[status] || colors.inactive;
}

export function filterUsers(users: User[], query: string): User[] {
  const lowerQuery = query.toLowerCase();
  return users.filter(
    user =>
      user.name.toLowerCase().includes(lowerQuery) ||
      user.email.toLowerCase().includes(lowerQuery) ||
      user.role.toLowerCase().includes(lowerQuery)
  );
}

export function sortUsers(users: User[], sortBy: keyof User, order: 'asc' | 'desc' = 'asc'): User[] {
  return [...users].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    
    if (aVal === undefined || bVal === undefined) return 0;
    
    if (order === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
}
