'use client';

import { AdminStats } from '@/lib/types/admin';
import { Users, UserCheck, UserPlus, Shield } from 'lucide-react';

interface StatsCardsProps {
  stats: AdminStats;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Active Users',
      value: stats.activeUsers,
      icon: UserCheck,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'New This Month',
      value: stats.newUsersThisMonth,
      icon: UserPlus,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Total Roles',
      value: stats.totalRoles,
      icon: Shield,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
            <div className={`${card.bgColor} ${card.color} p-3 rounded-lg`}>
              <card.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
