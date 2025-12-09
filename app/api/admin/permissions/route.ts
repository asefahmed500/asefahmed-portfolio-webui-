import { NextResponse } from 'next/server';
import { mockPermissions } from '@/lib/data/admin-mock';

// GET all permissions
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: mockPermissions,
      total: mockPermissions.length 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch permissions' },
      { status: 500 }
    );
  }
}
