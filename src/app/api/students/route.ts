import { NextResponse } from 'next/server';

const students = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
];

export async function GET() {
  return NextResponse.json(students);
}
