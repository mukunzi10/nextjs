'use client';

import { useForm } from 'react-hook-form';

export default function StudentFormModal({ isOpen, onClose, onSubmit, initialData }: {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (data: any) => void,
  initialData?: any
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || { name: '', email: '', phone: '' }
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Student' : 'Add Student'}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name', { required: true })} type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
          <input {...register('email', { required: true })} type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input {...register('phone')} type="text" placeholder="Phone" className="w-full p-2 border rounded" />
          
          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-400 rounded" onClick={handleClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
