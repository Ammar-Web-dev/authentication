import { useState } from "react";
import { addTeacherToDb } from "../utils/firebase";

function AddTeacher() {
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addTeacherToDb({
      ...teacher,
      createdAt: new Date(),
    });

    if (result.success) {
      alert("✅ Teacher Added Successfully!");

      setTeacher({
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
    setTeacher({
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
          👨‍🏫 Add Teacher
        </h1>

        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={teacher.firstName}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={teacher.lastName}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Contact */}
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={teacher.contact}
          onChange={handleChange}
          className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-4 rounded-lg mb-5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={teacher.email}
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
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTeacher;