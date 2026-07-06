import { useState } from "react";
import { addCourseToDb } from "../utils/firebase";

function AddCourse() {
  const courseList = [
    "2D & 3D Animation",
    "3D Animation",
    "3D MAX",
    "3D Modeling",
    "AI for Non Coders",
    "Advance Cyber",
    "Advance Cyber Security",
    "Advance Flutter with AI",
    "Advance UI UX Designing with AI",
    "AI Content Creation",
    "AI to Income Accelerator",
    "Block Chain",
    "Bug Bounty & Penetration Testing",
    "Business Development Growth",
    "CGI Ads",
    "CGI Ads Bootcamp",
    "Cloud Computing",
    "Creative Design",
  ];

  const [courseData, setCourseData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    course: "",
    email: "",
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addCourseToDb({
      ...courseData,
      createdAt: new Date(),
    });

    if (result.success) {
      alert("✅ Course Registration Successful");

      setCourseData({
        firstName: "",
        lastName: "",
        contact: "",
        course: "",
        email: "",
      });
    } else {
      alert(result.message);
    }
  };

  const handleCancel = () => {
    setCourseData({
      firstName: "",
      lastName: "",
      contact: "",
      course: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-red-600 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🚀 Sign Up for a Course
        </h1>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={courseData.firstName}
          onChange={handleChange}
          className="w-full bg-white p-4 rounded-lg mb-5"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={courseData.lastName}
          onChange={handleChange}
          className="w-full bg-white p-4 rounded-lg mb-5"
          required
        />

        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={courseData.contact}
          onChange={handleChange}
          className="w-full bg-white p-4 rounded-lg mb-5"
          required
        />

        <select
          name="course"
          value={courseData.course}
          onChange={handleChange}
          className="w-full bg-white p-4 rounded-lg mb-5"
          required
        >
          <option value="">Select a Course</option>

          {courseList.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={courseData.email}
          onChange={handleChange}
          className="w-full bg-white p-4 rounded-lg mb-8"
          required
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;