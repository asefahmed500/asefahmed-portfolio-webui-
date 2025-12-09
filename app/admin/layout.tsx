import { Metadata } from 'next';
import { AdminNav } from '@/components/admin/admin-nav';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Manage users, roles, and system settings',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AdminNav />
      {children}
    </div>
  );
}
