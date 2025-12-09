'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Save, Shield, Bell, Database, Mail } from 'lucide-react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'My Application',
    siteUrl: 'https://example.com',
    adminEmail: 'admin@example.com',
    enableRegistration: true,
    enableNotifications: true,
    maintenanceMode: false,
    maxUploadSize: '10',
    sessionTimeout: '30',
  });

  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Settings</h1>
            <p className="text-muted-foreground">Configure system settings and preferences</p>
          </div>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <div className="rounded-lg border border-border p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input
                  id="siteUrl"
                  value={settings.siteUrl}
                  onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <div className="rounded-lg border border-border p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Enable User Registration</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow new users to register accounts
                  </p>
                </div>
                <Switch
                  checked={settings.enableRegistration}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, enableRegistration: checked })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="rounded-lg border border-border p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send email notifications for important events
                  </p>
                </div>
                <Switch
                  checked={settings.enableNotifications}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, enableNotifications: checked })
                  }
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="rounded-lg border border-border p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Temporarily disable site access for maintenance
                  </p>
                </div>
                <Switch
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, maintenanceMode: checked })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxUploadSize">Max Upload Size (MB)</Label>
                <Input
                  id="maxUploadSize"
                  type="number"
                  value={settings.maxUploadSize}
                  onChange={(e) => setSettings({ ...settings, maxUploadSize: e.target.value })}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
