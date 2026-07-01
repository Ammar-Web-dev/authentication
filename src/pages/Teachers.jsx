import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  getTeachersFromDb,
  deleteTeachersFromDb,
} from "../utils/firebase";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  // Fetch Teachers
  const fetchTeachers = async () => {
    const data = await getTeachersFromDb();
    setTeachers(data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Delete Teacher
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Teacher?"
    );

    if (!confirmDelete) return;

    await deleteTeachersFromDb(id);

    fetchTeachers();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Teachers</h1>

        <Link
          to="/teachers/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Add Teacher
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Teacher List</h2>

        {teachers.length === 0 ? (
          <p className="text-gray-500">No Teachers Added Yet.</p>
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
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="border p-3">{teacher.firstName}</td>
                  <td className="border p-3">{teacher.lastName}</td>
                  <td className="border p-3">{teacher.contact}</td>
                  <td className="border p-3">{teacher.email}</td>

                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleDelete(teacher.id)}
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

export default Teachers;