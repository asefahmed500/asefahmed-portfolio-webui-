'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Settings, BarChart3, Shield } from 'lucide-react';

export function AdminNav() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2 font-bold">
            <Shield className="w-5 h-5" />
            Admin Panel
          </Link>
          <div className="flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
