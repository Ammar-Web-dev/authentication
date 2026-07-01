import { SignIn, SignedIn } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function Login() {
  return (
    <>
      <SignedIn>
        <Navigate to="/dashboard" replace />
      </SignedIn>

      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">
            Student Management System
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Sign in to continue
          </p>

          <SignIn
            routing="path"
            path="/login"
            afterSignInUrl="/dashboard"
            afterSignUpUrl="/dashboard"
          />
        </div>
      </div>
    </>
  );
}

export default Login;