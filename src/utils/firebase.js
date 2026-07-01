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
  apiKey: "AIzaSyAfRPlq6dWFJSH8VQpFlsyiZg03Dn_jq9c",
  authDomain: "management-portal-fc4e4.firebaseapp.com",
  projectId: "management-portal-fc4e4",
  storageBucket: "management-portal-fc4e4.firebasestorage.app",
  messagingSenderId: "655149591071",
  appId: "1:655149591071:web:5695ac123c76f67863c32a",
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