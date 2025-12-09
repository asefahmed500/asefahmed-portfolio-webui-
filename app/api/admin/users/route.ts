import { NextRequest, NextResponse } from 'next/server';
import { mockUsers } from '@/lib/data/admin-mock';

// GET all users
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const role = searchParams.get('role');
    const status = searchParams.get('status');
    
    let filteredUsers = [...mockUsers];
    
    if (role) {
      filteredUsers = filteredUsers.filter(u => u.role === role);
    }
    
    if (status) {
      filteredUsers = filteredUsers.filter(u => u.status === status);
    }
    
    return NextResponse.json({ 
      success: true, 
      data: filteredUsers,
      total: filteredUsers.length 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST create new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newUser = {
      id: `u${Date.now()}`,
      email: body.email,
      name: body.name,
      avatar: body.name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
      role: body.role || 'user',
      status: 'active',
      permissions: body.permissions || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: body.metadata || {},
    };
    
    mockUsers.push(newUser);
    
    return NextResponse.json({ 
      success: true, 
      data: newUser,
      message: 'User created successfully' 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
