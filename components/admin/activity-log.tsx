'use client';

import { AuditLog } from '@/lib/types/admin';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface ActivityLogProps {
  logs: AuditLog[];
}

export function ActivityLog({ logs }: ActivityLogProps) {
  const getActionColor = (action: string) => {
    if (action.includes('CREATE')) return 'bg-green-500/10 text-green-500';
    if (action.includes('UPDATE')) return 'bg-blue-500/10 text-blue-500';
    if (action.includes('DELETE')) return 'bg-red-500/10 text-red-500';
    return 'bg-gray-500/10 text-gray-500';
  };

  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div
          key={log.id}
          className="rounded-lg border border-border p-4 hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getActionColor(log.action)}>
                  {log.action.replace('_', ' ')}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(log.timestamp), { addSuffix: true })}
                </span>
              </div>
              <p className="font-medium mb-1">{log.userName}</p>
              <p className="text-sm text-muted-foreground">{log.details}</p>
              {log.ipAddress && (
                <p className="text-xs text-muted-foreground mt-2">
                  IP: {log.ipAddress}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
