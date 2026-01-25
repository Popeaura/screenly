import React, { useState, useEffect } from "react";
import {
  fetchEvaluations,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} from "../api/evaluations";
import EvaluationForm from "../components/EvaluationForm";
import EvaluationRow from "../components/EvaluationRow";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

const EvaluationsListPage = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [filteredEvaluations, setFilteredEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEvaluation, setEditingEvaluation] = useState(null);

  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    loadEvaluations();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [evaluations, statusFilter, sortBy, sortOrder]);

  const loadEvaluations = async () => {
    try {
      setLoading(true);
      const data = await fetchEvaluations();
      setEvaluations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = [...evaluations];

    if (statusFilter !== "All") {
      filtered = filtered.filter((ev) => ev.status === statusFilter);
    }

    filtered.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];

      if (sortBy === "score") {
        aVal = aVal || -1;
        bVal = bVal || -1;
      }

      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredEvaluations(filtered);
  };

  const handleCreateEvaluation = async (formData) => {
    try {
      const dataToSubmit = {
        ...formData,
        score: formData.score ? parseInt(formData.score, 10) : null,
      };

      if (editingEvaluation) {
        await updateEvaluation(editingEvaluation.id, dataToSubmit);
        showToast("Evaluation updated");
      } else {
        await createEvaluation(dataToSubmit);
        showToast("Evaluation created");
      }

      setShowForm(false);
      setEditingEvaluation(null);
      await loadEvaluations();
    } catch (err) {
      showToast("Error saving evaluation", "error");
    }
  };

  const handleEditEvaluation = (evaluation) => {
    setEditingEvaluation(evaluation);
    setShowForm(true);
  };

  const handleDeleteEvaluation = async (id) => {
    try {
      await deleteEvaluation(id);
      showToast("Evaluation deleted", "info");
      await loadEvaluations();
    } catch (err) {
      showToast("Error deleting evaluation", "error");
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingEvaluation(null);
  };

  const toggleSortOrder = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  if (loading)
    return (
      <>
        <Navbar />
        <div className="p-4 text-white">Loading evaluations...</div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="p-4 text-red-400">Error: {error}</div>
      </>
    );

  const statusOptions = ["All", "pending", "in_review", "completed", "rejected"];

  return (
    <>
      <Navbar />
      {toast && <Toast message={toast.message} type={toast.type} />}

      <div className="p-6 min-h-screen" style={{ backgroundColor: "#0f172a" }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Evaluations</h1>
          <button
            onClick={() => {
              setEditingEvaluation(null);
              setShowForm(true);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold transition"
          >
            + Create Evaluation
          </button>
        </div>

        {showForm && (
          <EvaluationForm
            onSubmit={handleCreateEvaluation}
            onCancel={handleCloseForm}
            initialData={editingEvaluation}
          />
        )}

        <div
          className="mb-6 p-4 rounded-lg"
          style={{ backgroundColor: "#1e293b" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Filter by Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border border-gray-600 rounded px-3 py-2 text-white"
                style={{ backgroundColor: "#0f172a" }}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === "All"
                      ? "All"
                      : status === "in_review"
                      ? "In review"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-600 rounded px-3 py-2 text-white"
                style={{ backgroundColor: "#0f172a" }}
              >
                <option value="id">ID</option>
                <option value="candidate_name">Candidate Name</option>
                <option value="status">Status</option>
                <option value="score">Score</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Sort Order
              </label>
              <button
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                className="w-full border border-gray-600 rounded px-3 py-2 text-white font-semibold transition"
                style={{ backgroundColor: "#0f172a" }}
              >
                {sortOrder === "asc" ? "↑ Ascending" : "↓ Descending"}
              </button>
            </div>
          </div>

          <div className="mt-4 text-gray-300">
            Showing{" "}
            <span className="font-bold text-white">
              {filteredEvaluations.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-white">
              {evaluations.length}
            </span>{" "}
            evaluations
          </div>
        </div>

        {filteredEvaluations.length === 0 ? (
          <p className="text-gray-300 text-lg">
            {evaluations.length === 0
              ? 'No evaluations found. Click " + Create Evaluation" to add one.'
              : "No evaluations match your filters."}
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table
              className="w-full border-collapse"
              style={{ backgroundColor: "#1e293b" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#334155" }}>
                  <th
                    onClick={() => toggleSortOrder("id")}
                    className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600 cursor-pointer hover:bg-gray-700"
                  >
                    ID {sortBy === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    onClick={() => toggleSortOrder("candidate_name")}
                    className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600 cursor-pointer hover:bg-gray-700"
                  >
                    Candidate Name{" "}
                    {sortBy === "candidate_name" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                    Title
                  </th>
                  <th
                    onClick={() => toggleSortOrder("status")}
                    className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600 cursor-pointer hover:bg-gray-700"
                  >
                    Status{" "}
                    {sortBy === "status" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th
                    onClick={() => toggleSortOrder("score")}
                    className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600 cursor-pointer hover:bg-gray-700"
                  >
                    Score{" "}
                    {sortBy === "score" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEvaluations.map((ev, index) => (
                  <EvaluationRow
                    key={ev.id}
                    evaluation={ev}
                    index={index}
                    onEdit={handleEditEvaluation}
                    onDelete={handleDeleteEvaluation}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default EvaluationsListPage;
