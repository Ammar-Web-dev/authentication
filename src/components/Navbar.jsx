import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 shadow">

      <h2 className="text-2xl font-bold">
        Admin Dashboard
      </h2>

      <UserButton />

    </div>
  );
}

export default Navbar;