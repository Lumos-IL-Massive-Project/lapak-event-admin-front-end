import React, { useState } from "react";
import Modal from "./Modal";

export default function ButonModal({ setOpenModal }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="bg-[#5925DC] hover:bg-[#4f388f] w-7 text-center rounded-sm inline-block mt-2.5">
        <i class="fa-solid fa-plus text-white"></i>
      </button>

      {showModal && <Modal setOpenModal={setShowModal} />}
    </>
  );
}
