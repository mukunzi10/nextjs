import axios from 'axios';

export async function fetchStudents() {
  const res = await axios.get('/api/students');
  return res.data;
}

export async function createStudent(student: any) {
  const res = await axios.post('/api/students', student);
  return res.data;
}

export async function updateStudent(id: number, student: any) {
  const res = await axios.put(`/api/students/${id}`, student);
  return res.data;
}
