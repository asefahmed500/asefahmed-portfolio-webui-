import { NextResponse } from 'next/server';
import { mockAdminStats } from '@/lib/data/admin-mock';

// GET admin statistics
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: mockAdminStats 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
