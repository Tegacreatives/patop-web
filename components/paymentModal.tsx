"use client";
import React, { useState } from "react";

const PaymentModal = ({ onClose }: { onClose: () => {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Add your modal content here */}
        <h2>Support this Project</h2>
        {/* Add form or any other content for supporting the project */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;
