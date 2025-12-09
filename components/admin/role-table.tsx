'use client';

import { Role } from '@/lib/types/admin';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

interface RoleTableProps {
  roles: Role[];
  onEdit: (role: Role) => void;
  onDelete: (roleId: string) => void;
}

export function RoleTable({ roles, onEdit, onDelete }: RoleTableProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-medium">Role</th>
              <th className="text-left p-4 font-medium">Description</th>
              <th className="text-left p-4 font-medium">Permissions</th>
              <th className="text-right p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-t border-border hover:bg-muted/30">
                <td className="p-4">
                  <div className="font-medium">{role.displayName}</div>
                  <div className="text-sm text-muted-foreground">{role.name}</div>
                </td>
                <td className="p-4 text-muted-foreground">{role.description}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 3).map((perm) => (
                      <Badge key={perm.id} variant="secondary" className="text-xs">
                        {perm.name}
                      </Badge>
                    ))}
                    {role.permissions.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{role.permissions.length - 3} more
                      </Badge>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" onClick={() => onEdit(role)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(role.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
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
