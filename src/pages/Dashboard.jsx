import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getStudentsCount,
  getTeachersCount,
} from "../utils/firebase";

function Dashboard() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const students = await getStudentsCount();
      const teachers = await getTeachersCount();

      setStudentsCount(students);
      setTeachersCount(teachers);
    };

    fetchCounts();
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Students Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg text-gray-600">Total Students</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {studentsCount}
            </p>
          </div>

          {/* Teachers Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg text-gray-600">Total Teachers</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {teachersCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;