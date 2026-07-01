import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  getStudentsFromDb,
  deleteStudentFromDb,
} from "../utils/firebase";

function Students() {
  const [students, setStudents] = useState([]);

  // Fetch Students
  const fetchStudents = async () => {
    const data = await getStudentsFromDb();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete Student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    await deleteStudentFromDb(id);

    fetchStudents();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Students</h1>

        <Link
          to="/students/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Add Student
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Student List</h2>

        {students.length === 0 ? (
          <p className="text-gray-500">No Students Added Yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">First Name</th>
                <th className="border p-3">Last Name</th>
                <th className="border p-3">Contact</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="border p-3">{student.firstName}</td>
                  <td className="border p-3">{student.lastName}</td>
                  <td className="border p-3">{student.contact}</td>
                  <td className="border p-3">{student.email}</td>

                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Students;