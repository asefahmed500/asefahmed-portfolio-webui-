import { NextRequest, NextResponse } from 'next/server';
import { mockRoles } from '@/lib/data/admin-mock';

// GET single role
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const role = mockRoles.find(r => r.id === id);
    
    if (!role) {
      return NextResponse.json(
        { success: false, error: 'Role not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: role });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch role' },
      { status: 500 }
    );
  }
}

// PUT update role
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const roleIndex = mockRoles.findIndex(r => r.id === id);
    
    if (roleIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Role not found' },
        { status: 404 }
      );
    }
    
    mockRoles[roleIndex] = {
      ...mockRoles[roleIndex],
      ...body,
      updatedAt: new Date(),
    };
    
    return NextResponse.json({ 
      success: true, 
      data: mockRoles[roleIndex],
      message: 'Role updated successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update role' },
      { status: 500 }
    );
  }
}

// DELETE role
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const roleIndex = mockRoles.findIndex(r => r.id === id);
    
    if (roleIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Role not found' },
        { status: 404 }
      );
    }
    
    mockRoles.splice(roleIndex, 1);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Role deleted successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete role' },
      { status: 500 }
    );
  }
}
