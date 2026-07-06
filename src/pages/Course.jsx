import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import {
  getCoursesFromDb,
  deleteCourseFromDb,
} from "../utils/firebase";

function Course() {
  const [courses, setCourses] = useState([]);

  // Fetch Courses
  const fetchCourses = async () => {
    const data = await getCoursesFromDb();
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Delete Course
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (!confirmDelete) return;

    await deleteCourseFromDb(id);
    fetchCourses();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Courses</h1>

        <Link
          to="/course/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Add Course
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Course Registration List
        </h2>

        {courses.length === 0 ? (
          <p className="text-gray-500">No Records Found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">First Name</th>
                <th className="border p-3">Last Name</th>
                <th className="border p-3">Contact</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Course</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="border p-3">{course.firstName}</td>
                  <td className="border p-3">{course.lastName}</td>
                  <td className="border p-3">{course.contact}</td>
                  <td className="border p-3">{course.email}</td>
                  <td className="border p-3">{course.course}</td>

                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
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

export default Course;