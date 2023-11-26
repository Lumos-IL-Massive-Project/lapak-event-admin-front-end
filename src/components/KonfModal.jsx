import React, { useState } from "react";
import Modal from "./Modal";
import IconPlus from "./IconPlus";

export default function KonfModal({ atribut, valueLabe = IconPlus, children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className={atribut}>
        {valueLabe}
      </button>
      {showModal && <Modal setOpenModal={setShowModal} children={children} />}
    </>
  );
}
