// Mock data for admin features
import { User, Role, Permission, AdminStats, AuditLog } from '../types/admin';

export const mockPermissions: Permission[] = [
  { id: 'p1', name: 'users.create', description: 'Create users', resource: 'users', action: 'create' },
  { id: 'p2', name: 'users.read', description: 'View users', resource: 'users', action: 'read' },
  { id: 'p3', name: 'users.update', description: 'Update users', resource: 'users', action: 'update' },
  { id: 'p4', name: 'users.delete', description: 'Delete users', resource: 'users', action: 'delete' },
  { id: 'p5', name: 'roles.manage', description: 'Manage roles', resource: 'roles', action: 'manage' },
  { id: 'p6', name: 'content.create', description: 'Create content', resource: 'content', action: 'create' },
  { id: 'p7', name: 'content.update', description: 'Update content', resource: 'content', action: 'update' },
  { id: 'p8', name: 'content.delete', description: 'Delete content', resource: 'content', action: 'delete' },
];

export const mockRoles: Role[] = [
  {
    id: 'r1',
    name: 'admin',
    displayName: 'Administrator',
    description: 'Full system access',
    permissions: mockPermissions,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'r2',
    name: 'editor',
    displayName: 'Editor',
    description: 'Can create and edit content',
    permissions: mockPermissions.filter(p => p.resource === 'content' || p.action === 'read'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'r3',
    name: 'viewer',
    displayName: 'Viewer',
    description: 'Read-only access',
    permissions: mockPermissions.filter(p => p.action === 'read'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

export const mockUsers: User[] = [
  {
    id: 'u1',
    email: 'admin@example.com',
    name: 'Admin User',
    avatar: 'AU',
    role: 'admin',
    status: 'active',
    permissions: ['admin'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-11-19'),
    lastActive: new Date('2024-11-19'),
    metadata: { projects: 15, tasksCompleted: 234, department: 'Engineering' },
  },
  {
    id: 'u2',
    email: 'editor@example.com',
    name: 'Editor User',
    avatar: 'EU',
    role: 'editor',
    status: 'active',
    permissions: ['content.create', 'content.update'],
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-11-18'),
    lastActive: new Date('2024-11-18'),
    metadata: { projects: 8, tasksCompleted: 156, department: 'Content' },
  },
  {
    id: 'u3',
    email: 'viewer@example.com',
    name: 'Viewer User',
    avatar: 'VU',
    role: 'viewer',
    status: 'active',
    permissions: ['users.read', 'content.read'],
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-11-17'),
    lastActive: new Date('2024-11-17'),
    metadata: { projects: 3, tasksCompleted: 45, department: 'Marketing' },
  },
];

export const mockAdminStats: AdminStats = {
  totalUsers: 24,
  activeUsers: 18,
  newUsersThisMonth: 5,
  totalRoles: 4,
  usersByRole: {
    admin: 3,
    editor: 12,
    viewer: 8,
    user: 1,
  },
  activityTrend: [
    { date: '2024-11-13', count: 45 },
    { date: '2024-11-14', count: 52 },
    { date: '2024-11-15', count: 48 },
    { date: '2024-11-16', count: 61 },
    { date: '2024-11-17', count: 55 },
    { date: '2024-11-18', count: 58 },
    { date: '2024-11-19', count: 63 },
  ],
};

export const mockAuditLogs: AuditLog[] = [
  {
    id: 'a1',
    userId: 'u1',
    userName: 'Admin User',
    action: 'USER_CREATED',
    resource: 'users',
    details: 'Created new user: editor@example.com',
    timestamp: new Date('2024-11-19T10:30:00'),
    ipAddress: '192.168.1.1',
  },
  {
    id: 'a2',
    userId: 'u1',
    userName: 'Admin User',
    action: 'ROLE_UPDATED',
    resource: 'roles',
    details: 'Updated permissions for Editor role',
    timestamp: new Date('2024-11-19T09:15:00'),
    ipAddress: '192.168.1.1',
  },
];
