'use client';

export default function StudentTable({ students, onEdit }: {
  students: { id: number, name: string, email: string }[],
  onEdit: (student: any) => void
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{student.id}</td>
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">
                <button onClick={() => onEdit(student)} className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
