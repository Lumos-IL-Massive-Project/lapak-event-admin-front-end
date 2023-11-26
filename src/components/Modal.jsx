import React from "react";

export default function Modal({ setOpenModal, children }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          {children}
        </div>
      </div>
    </>
  );
}
