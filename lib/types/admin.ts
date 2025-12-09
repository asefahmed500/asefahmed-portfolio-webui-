// Admin Types and Models

export type UserRole = 'admin' | 'editor' | 'viewer' | 'user';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface Permission {
  id: string;
  name: string;
  description: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
}

export interface Role {
  id: string;
  name: UserRole;
  displayName: string;
  description: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
  lastActive?: Date;
  metadata?: {
    projects?: number;
    tasksCompleted?: number;
    department?: string;
  };
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  totalRoles: number;
  usersByRole: Record<UserRole, number>;
  activityTrend: Array<{ date: string; count: number }>;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  details: string;
  timestamp: Date;
  ipAddress?: string;
}
