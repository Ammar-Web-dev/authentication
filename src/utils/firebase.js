import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//
// ==========================
// STUDENTS
// ==========================
//

// Add Student
export const addStudentToDb = async (student) => {
  try {
    await addDoc(collection(db, "students"), student);

    return {
      success: true,
      message: "Student added successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
};

// Get Students
export const getStudentsFromDb = async () => {
  try {
    const snapshot = await getDocs(collection(db, "students"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Delete Student
export const deleteStudentFromDb = async (id) => {
  try {
    await deleteDoc(doc(db, "students", id));
  } catch (error) {
    console.error(error);
  }
};

// Student Count
export const getStudentsCount = async () => {
  try {
    const snapshot = await getDocs(collection(db, "students"));
    return snapshot.size;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

//
// ==========================
// TEACHERS
// ==========================
//

// Add Teacher
export const addTeacherToDb = async (teacher) => {
  try {
    await addDoc(collection(db, "teacher"), teacher);

    return {
      success: true,
      message: "Teacher added successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
};

// Get Teachers
export const getTeachersFromDb = async () => {
  try {
    const snapshot = await getDocs(collection(db, "teacher"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Delete Teacher
export const deleteTeachersFromDb = async (id) => {
  try {
    await deleteDoc(doc(db, "teacher", id));
  } catch (error) {
    console.error(error);
  }
};

// Teacher Count
export const getTeachersCount = async () => {
  try {
    const snapshot = await getDocs(collection(db, "teacher"));
    return snapshot.size;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
//
// ==========================
// COURSES
// ==========================
//

// Add Course
export const addCourseToDb = async (course) => {
  try {
    await addDoc(collection(db, "courses"), course);

    return {
      success: true,
      message: "Course added successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
};

// Get Courses
export const getCoursesFromDb = async () => {
  try {
    const snapshot = await getDocs(collection(db, "courses"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Delete Course
export const deleteCourseFromDb = async (id) => {
  try {
    await deleteDoc(doc(db, "courses", id));
  } catch (error) {
    console.error(error);
  }
};

// Course Count
export const getCoursesCount = async () => {
  try {
    const snapshot = await getDocs(collection(db, "courses"));
    return snapshot.size;
  } catch (error) {
    console.error(error);
    return 0;
  }
};