# Admin Features Documentation

Complete admin panel with user management, role-based access control, analytics, and system settings.

## Features

### 1. User Management
- **CRUD Operations**: Create, read, update, and delete users
- **User Filtering**: Search and filter users by role, status, email, or name
- **Bulk Actions**: Export user data, bulk status updates
- **User Details**: View comprehensive user information including activity history

### 2. Role & Permission Management
- **Role-Based Access Control (RBAC)**: Define custom roles with specific permissions
- **Permission System**: Granular permissions for different resources and actions
- **Role Assignment**: Easily assign and modify user roles

### 3. Analytics Dashboard
- **User Metrics**: Track active users, new registrations, and user activity
- **Activity Trends**: Visualize user engagement over time
- **Performance Metrics**: Monitor system performance and usage statistics

### 4. Audit Logging
- **Activity Tracking**: Log all admin actions and user activities
- **Audit Trail**: Complete history of system changes
- **Security Monitoring**: Track login attempts and security events

### 5. System Settings
- **General Settings**: Configure site name, URL, and basic information
- **Security Settings**: Manage authentication, session timeouts, and access controls
- **Notification Settings**: Configure email notifications and alerts
- **Advanced Settings**: Maintenance mode, upload limits, and system configurations

## API Endpoints

### Users API

#### GET /api/admin/users
Get all users with optional filtering
```typescript
Query Parameters:
- role?: string (admin, editor, viewer, user)
- status?: string (active, inactive, suspended)

Response: {
  success: boolean;
  data: User[];
  total: number;
}
```

#### POST /api/admin/users
Create a new user
```typescript
Body: {
  name: string;
  email: string;
  role: UserRole;
  permissions?: string[];
  metadata?: object;
}

Response: {
  success: boolean;
  data: User;
  message: string;
}
```

#### GET /api/admin/users/[id]
Get a specific user by ID

#### PUT /api/admin/users/[id]
Update a user

#### DELETE /api/admin/users/[id]
Delete a user

### Roles API

#### GET /api/admin/roles
Get all roles

#### POST /api/admin/roles
Create a new role

#### GET /api/admin/roles/[id]
Get a specific role

#### PUT /api/admin/roles/[id]
Update a role

#### DELETE /api/admin/roles/[id]
Delete a role

### Stats API

#### GET /api/admin/stats
Get admin statistics and metrics

### Audit Logs API

#### GET /api/admin/audit-logs
Get audit logs with optional limit

### Permissions API

#### GET /api/admin/permissions
Get all available permissions

## Components

### Admin Components
- `<StatsCards />` - Display key metrics and statistics
- `<UserTable />` - User management table with actions
- `<UserForm />` - Create/edit user form
- `<RoleTable />` - Role management table
- `<ActivityLog />` - Display audit logs and activity
- `<AdminNav />` - Admin navigation bar

### UI Components Used
- Button, Input, Label
- Dialog, Tabs, Badge
- Select, Switch
- Dropdown Menu
- Card components

## Custom Hooks

### useAdminUsers()
```typescript
const {
  users,
  loading,
  error,
  refetch,
  createUser,
  updateUser,
  deleteUser
} = useAdminUsers();
```

### useAdminStats()
```typescript
const { stats, loading } = useAdminStats();
```

### useAdminRoles()
```typescript
const { roles, loading } = useAdminRoles();
```

## Types

### User
```typescript
interface User {
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
  metadata?: object;
}
```

### Role
```typescript
interface Role {
  id: string;
  name: UserRole;
  displayName: string;
  description: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Permission
```typescript
interface Permission {
  id: string;
  name: string;
  description: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
}
```

## Pages

- `/admin` - Main admin dashboard
- `/admin/analytics` - Analytics and metrics
- `/admin/settings` - System settings

## Usage Example

```typescript
'use client';

import { useAdminUsers } from '@/lib/hooks/use-admin';
import { UserTable } from '@/components/admin/user-table';
import { toast } from 'sonner';

export default function MyAdminPage() {
  const { users, loading, deleteUser, refetch } = useAdminUsers();

  const handleDelete = async (userId: string) => {
    const result = await deleteUser(userId);
    if (result.success) {
      toast.success('User deleted');
      refetch();
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <UserTable
      users={users}
      onEdit={(user) => console.log('Edit', user)}
      onDelete={handleDelete}
    />
  );
}
```

## Security Considerations

1. **Authentication**: Implement proper authentication before accessing admin routes
2. **Authorization**: Check user permissions before allowing admin actions
3. **Input Validation**: Validate all user inputs on both client and server
4. **Rate Limiting**: Implement rate limiting on API endpoints
5. **Audit Logging**: Log all sensitive operations for security monitoring

## Next Steps

1. Integrate with a real database (PostgreSQL, MongoDB, etc.)
2. Add authentication middleware
3. Implement real-time updates with WebSockets
4. Add data visualization charts
5. Implement email notifications
6. Add file upload functionality
7. Create backup and restore features
