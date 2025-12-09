import { NextResponse } from 'next/server';
import { mockUsers } from '@/lib/data/admin-mock';

// GET export users as CSV
export async function GET() {
  try {
    // Create CSV content
    const headers = ['ID', 'Name', 'Email', 'Role', 'Status', 'Created At'];
    const rows = mockUsers.map(user => [
      user.id,
      user.name,
      user.email,
      user.role,
      user.status,
      new Date(user.createdAt).toISOString(),
    ]);
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');
    
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=users-export.csv',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to export users' },
      { status: 500 }
    );
  }
}
