// Admin authentication middleware
// This is a placeholder - integrate with your actual auth system

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

export function checkAdminAccess(user: AdminUser | null): boolean {
  if (!user) return false;
  return user.role === 'admin' || user.permissions.includes('admin');
}

export function checkPermission(user: AdminUser | null, permission: string): boolean {
  if (!user) return false;
  if (user.role === 'admin') return true;
  return user.permissions.includes(permission);
}

export function requireAdmin(user: AdminUser | null) {
  if (!checkAdminAccess(user)) {
    throw new Error('Unauthorized: Admin access required');
  }
}

export function requirePermission(user: AdminUser | null, permission: string) {
  if (!checkPermission(user, permission)) {
    throw new Error(`Unauthorized: ${permission} permission required`);
  }
}
