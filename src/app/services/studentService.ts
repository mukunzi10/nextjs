'use server';

import { v4 as uuidv4 } from 'uuid';

// Temporary local student "database"
let students: any[] = [];

export async function fetchStudents() {
  return students;
}

export async function createStudent(data: any) {
  const newStudent = { id: uuidv4(), ...data };
  students.push(newStudent);
  return newStudent;
}

export async function getStudent(id: string) {
  return students.find((student) => student.id === id);
}

export async function updateStudent(id: string, updatedData: any) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedData };
  }
  return students[index];
}

export async function deleteStudent(id: string) {
  students = students.filter((student) => student.id !== id);
}
