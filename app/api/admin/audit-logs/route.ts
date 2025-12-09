import { NextRequest, NextResponse } from 'next/server';
import { mockAuditLogs } from '@/lib/data/admin-mock';

// GET audit logs
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '50');
    
    const logs = mockAuditLogs.slice(0, limit);
    
    return NextResponse.json({ 
      success: true, 
      data: logs,
      total: mockAuditLogs.length 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch audit logs' },
      { status: 500 }
    );
  }
}
