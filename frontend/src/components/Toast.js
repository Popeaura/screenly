import React from "react";

const Toast = ({ message, type = "success" }) => {
  const bg =
    type === "error"
      ? "bg-red-600"
      : type === "info"
      ? "bg-blue-600"
      : "bg-green-600";

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 rounded text-white shadow-lg ${bg} z-50`}>
      {message}
    </div>
  );
};

export default Toast;
