import React, { useState, useEffect } from "react";

const EvaluationForm = ({ onSubmit, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState({
    candidate_name: "",
    title: "",
    status: "Pending",
    score: "",
  });

  // Pre-fill form if editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        candidate_name: initialData.candidate_name,
        title: initialData.title,
        status: initialData.status,
        score: initialData.score || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isEditMode = !!initialData;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="rounded-lg p-6 w-full max-w-md shadow-2xl" style={{ backgroundColor: "#1e293b" }}>
        <h2 className="text-2xl font-bold mb-4 text-white">
          {isEditMode ? "Edit Evaluation" : "Create Evaluation"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Candidate Name
            </label>
            <input
              type="text"
              name="candidate_name"
              value={formData.candidate_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded px-3 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
              placeholder="e.g., John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded px-3 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
              placeholder="e.g., Frontend Engineer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded px-3 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
            >
              <option>Pending</option>
              <option>In review</option>
              <option>Completed</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-200">
              Score (Optional)
            </label>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              min="0"
              max="100"
              className="w-full border border-gray-600 rounded px-3 py-2 text-white"
              style={{ backgroundColor: "#0f172a" }}
              placeholder="0-100"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold transition"
            >
              {isEditMode ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700 font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EvaluationForm;
