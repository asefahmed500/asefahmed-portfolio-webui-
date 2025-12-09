import { NextRequest, NextResponse } from 'next/server';
import { mockRoles } from '@/lib/data/admin-mock';

// GET all roles
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: mockRoles,
      total: mockRoles.length 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch roles' },
      { status: 500 }
    );
  }
}

// POST create new role
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newRole = {
      id: `r${Date.now()}`,
      name: body.name,
      displayName: body.displayName,
      description: body.description,
      permissions: body.permissions || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    mockRoles.push(newRole);
    
    return NextResponse.json({ 
      success: true, 
      data: newRole,
      message: 'Role created successfully' 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create role' },
      { status: 500 }
    );
  }
}
