import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import "./index.css";

import Dashboard from "./pages/Dashboard.jsx";
import Students from "./pages/Students.jsx";
import Teachers from "./pages/Teachers.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AddTeacher from "./pages/AddTeacher.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} /> {/* Protected Routes */}
          <Route
            element={
              <>
                <SignedIn>
                  <AppLayout />
                </SignedIn>

                <SignedOut>
                  <Navigate to="/" replace />
                </SignedOut>
              </>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/add" element={<AddTeacher />} />
            <Route path="/help" element={<Help />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
);
