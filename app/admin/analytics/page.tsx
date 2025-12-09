'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, TrendingUp, Users, Activity, Eye } from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [stats, setStats] = useState({
    totalViews: 12543,
    activeUsers: 342,
    avgSessionTime: '4m 32s',
    bounceRate: '42%',
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Monitor system performance and user activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Views</p>
              <Eye className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-3xl font-bold">{stats.totalViews.toLocaleString()}</p>
            <p className="text-xs text-green-500 mt-2">+12% from last month</p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Active Users</p>
              <Users className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-3xl font-bold">{stats.activeUsers}</p>
            <p className="text-xs text-green-500 mt-2">+8% from last month</p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Avg Session</p>
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-3xl font-bold">{stats.avgSessionTime}</p>
            <p className="text-xs text-red-500 mt-2">-3% from last month</p>
          </div>

          <div className="rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Bounce Rate</p>
              <TrendingUp className="w-4 h-4 text-orange-500" />
            </div>
            <p className="text-3xl font-bold">{stats.bounceRate}</p>
            <p className="text-xs text-green-500 mt-2">-5% from last month</p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="rounded-lg border border-border p-8 text-center">
              <BarChart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Analytics charts will be displayed here</p>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="rounded-lg border border-border p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">User analytics will be displayed here</p>
            </div>
          </TabsContent>

          <TabsContent value="traffic">
            <div className="rounded-lg border border-border p-8 text-center">
              <LineChart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Traffic analytics will be displayed here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
