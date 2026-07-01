import { useState } from "react";
import { addStudentToDb } from "../utils/firebase";

function AddStudent() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addStudentToDb({
      ...student,
      createdAt: new Date(),
    });

    if (result.success) {
      alert("✅ Student Added Successfully!");

      setStudent({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
      });
    } else {
      alert(result.message);
    }
  };

  const handleCancel = () => {
    setStudent({
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-red-600 rounded-3xl p-8 shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🎓 Add Student
        </h1>

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Contact Number */}
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={student.contact}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-8 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;