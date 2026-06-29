import {
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>We are in App.jsx</h1>

      <SignedOut>
        <SignIn />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <SignOutButton />
        <div>
          <h1>I am Zeeshan Ali</h1>
        </div>
      </SignedIn>
    </div>
  );
}

export default App;