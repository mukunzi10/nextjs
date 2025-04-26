'use client';
import { useState } from 'react';
import Link from 'next/link';
import DashboardChart from '../DashboardChart/page';
import EnrollmentPieChart from '../EnrollmentPieChart/page'

export default function AdminPanel({ sidebarOpen, setSidebarOpen }) {
    const [studentOpen, setStudentOpen] = useState(false);
    const [reportsOpen, setReportsOpen] = useState(false);
    const [feesOpen, setFeesOpen] = useState(false);
  
    const handleLinkClick = () => {
      setSidebarOpen(false); // Collapse sidebar on item click
    };
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-white w-64 p-5 shadow-lg z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
      <h2 className="text-2xl font-bold text-blue-700 mb-6">🎓 Admin Panel</h2>
      <nav className="space-y-4 text-gray-700">
        <a href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>🏠 Dashboard</a>

        {/* Students Dropdown */}
        <div>
            <button
            onClick={() => setStudentOpen(!studentOpen)}
            className="w-full flex justify-between items-center hover:text-blue-500"
            >
            👨‍🎓 Students
            <svg
                className={`h-4 w-4 ml-2 transform transition-transform ${studentOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            {studentOpen && (
            <div className="ml-4 mt-2 space-y-2">
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>All Students</Link>
                <Link href="/student" className="block hover:text-blue-500" onClick={handleLinkClick}>Add Student</Link>
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Student Grades</Link>
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Attendance</Link>
            </div>
            )}
        </div>

        <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>📚 Courses</Link>
        <Link href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>👩‍🏫 Staff</Link>
        <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>📝 Exams</Link>

        {/* Reports Dropdown */}
        <div>
            <button
            onClick={() => setReportsOpen(!reportsOpen)}
            className="w-full flex justify-between items-center hover:text-blue-500"
            >
            📈 Reports
            <svg
                className={`h-4 w-4 ml-2 transform transition-transform ${reportsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            {reportsOpen && (
            <div className="ml-4 mt-2 space-y-2">
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Attendance Reports</Link>
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Grades Report</Link>
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Overall Reports</Link>
            </div>
            )}
        </div>

        {/* Fees Dropdown */}
        <div>
            <button
            onClick={() => setFeesOpen(!feesOpen)}
            className="w-full flex justify-between items-center hover:text-blue-500"
            >
            💰 Fees
            <svg
                className={`h-4 w-4 ml-2 transform transition-transform ${feesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            {feesOpen && (
            <div className="ml-4 mt-2 space-y-2">
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Fee Status</Link>
                <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>Pay Fee</Link>
            </div>
            )}
        </div>

        <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>⚙️ Settings</Link>
        <Link  href="#" className="block hover:text-blue-500" onClick={handleLinkClick}>🔓 Logout</Link>
        </nav>

    </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-8">
        {/* Top Bar */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <button
            className="text-2xl md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Matare Technical Secondary School</h1>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-gray-500">Total Students</p>
              <h3 className="text-2xl font-bold text-blue-600">1,234</h3>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-gray-500">Active Courses</p>
              <h3 className="text-2xl font-bold text-green-600">48</h3>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-gray-500">Faculty Members</p>
              <h3 className="text-2xl font-bold text-purple-600">76</h3>
            </div>
            <div className="bg-white rounded-xl p-4 shadow text-center">
              <p className="text-gray-500">Ongoing Exams</p>
              <h3 className="text-2xl font-bold text-red-600">5</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <DashboardChart/>
          </div>
          {/* <div className="bg-white p-6 rounded-xl shadow">
            
            <EnrollmentPieChart />
          </div> */}
        </main>
      </div>
    </div>
  );
}
