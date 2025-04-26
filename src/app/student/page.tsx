'use client';

import { useEffect, useState } from 'react';
import { fetchStudents, createStudent, updateStudent } from './studentService';
import Preloader from './Preloader';
import StudentTable from './StudentTable';
import StudentFormModal from './StudentFormModal';

export default function AllStudentsPage() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    setLoading(true);
    const data = await fetchStudents();
    setStudents(data);
    setLoading(false);
  }

  async function handleSave(studentData: any) {
    if (editingStudent) {
      await updateStudent(editingStudent.id, studentData);
    } else {
      await createStudent(studentData);
    }
    setModalOpen(false);
    setEditingStudent(null);
    loadStudents();
  }

  function handleEdit(student: any) {
    setEditingStudent(student);
    setModalOpen(true);
  }

  if (loading) return <Preloader />;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">All Students</h1>
        <button
          onClick={() => { setModalOpen(true); setEditingStudent(null); }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Student
        </button>
      </div>

      <StudentTable students={students} onEdit={handleEdit} />
      <StudentFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={handleSave}
        initialData={editingStudent}
      />
    </div>
  );
}