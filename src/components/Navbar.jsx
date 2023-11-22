import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="flex flex-end justify-end pt-5 pr-5">
          <a href="/" className="bg-red-500 px-4 py-2 rounded-md text-white">
            Logout <i class="fa-solid fa-right-from-bracket"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
