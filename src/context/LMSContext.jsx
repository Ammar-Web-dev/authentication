import { createContext, useEffect, useState } from "react";

export const LMSContext = createContext();

function LMSProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("teachers");
    return savedTeachers ? JSON.parse(savedTeachers) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  return (
    <LMSContext.Provider
      value={{
        students,
        setStudents,
        teachers,
        setTeachers,
      }}
    >
      {children}
    </LMSContext.Provider>
  );
}

export default LMSProvider;