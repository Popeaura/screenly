import React from "react";

const EvaluationRow = ({ evaluation, index, onEdit, onDelete }) => {
  return (
    <tr
      style={{
        backgroundColor: index % 2 === 0 ? "#1e293b" : "#0f172a",
      }}
      className="hover:bg-slate-700 transition"
    >
      <td className="px-6 py-3 text-gray-200 border-b border-gray-700">
        {evaluation.id}
      </td>
      <td className="px-6 py-3 text-gray-200 border-b border-gray-700">
        {evaluation.candidate_name}
      </td>
      <td className="px-6 py-3 text-gray-200 border-b border-gray-700">
        {evaluation.title}
      </td>
      <td className="px-6 py-3 border-b border-gray-700">
        <span
          className="px-3 py-1 rounded-full text-sm font-semibold"
          style={{
            backgroundColor:
              evaluation.status === "Completed"
                ? "rgba(34, 197, 94, 0.2)"
                : evaluation.status === "In review"
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(107, 114, 128, 0.2)",
            color:
              evaluation.status === "Completed"
                ? "#86efac"
                : evaluation.status === "In review"
                ? "#93c5fd"
                : "#d1d5db",
          }}
        >
          {evaluation.status}
        </span>
      </td>
      <td className="px-6 py-3 text-gray-200 border-b border-gray-700 font-semibold">
        {evaluation.score ? `${evaluation.score}%` : "-"}
      </td>
      <td className="px-6 py-3 border-b border-gray-700">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(evaluation)}
            className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700 transition font-semibold"
          >
            Edit
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this evaluation?")) {
                onDelete(evaluation.id);
              }
            }}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition font-semibold"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EvaluationRow;
