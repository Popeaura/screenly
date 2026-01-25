import React, { useState, useEffect } from "react";
import { fetchEvaluations, createEvaluation, updateEvaluation, deleteEvaluation } from "../api/evaluations";
import EvaluationForm from "../components/EvaluationForm";
import EvaluationRow from "../components/EvaluationRow";

const EvaluationsListPage = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEvaluation, setEditingEvaluation] = useState(null);

  useEffect(() => {
    loadEvaluations();
  }, []);

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

  const handleCreateEvaluation = async (formData) => {
    try {
      const dataToSubmit = {
        ...formData,
        score: formData.score ? parseInt(formData.score) : null,
      };

      if (editingEvaluation) {
        // Update mode
        await updateEvaluation(editingEvaluation.id, dataToSubmit);
      } else {
        // Create mode
        await createEvaluation(dataToSubmit);
      }

      setShowForm(false);
      setEditingEvaluation(null);
      await loadEvaluations();
    } catch (err) {
      alert("Error saving evaluation: " + err.message);
    }
  };

  const handleEditEvaluation = (evaluation) => {
    setEditingEvaluation(evaluation);
    setShowForm(true);
  };

  const handleDeleteEvaluation = async (id) => {
    try {
      await deleteEvaluation(id);
      await loadEvaluations();
    } catch (err) {
      alert("Error deleting evaluation: " + err.message);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingEvaluation(null);
  };

  if (loading) 
    return <div className="p-4 text-white">Loading evaluations...</div>;
  
  if (error) 
    return <div className="p-4 text-red-400">Error: {error}</div>;

  return (
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

      {evaluations.length === 0 ? (
        <p className="text-gray-300 text-lg">No evaluations found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full border-collapse" style={{ backgroundColor: "#1e293b" }}>
            <thead>
              <tr style={{ backgroundColor: "#334155" }}>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  ID
                </th>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  Candidate Name
                </th>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  Title
                </th>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  Status
                </th>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  Score
                </th>
                <th className="px-6 py-3 text-left font-semibold text-white border-b border-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {evaluations.map((ev, index) => (
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
  );
};

export default EvaluationsListPage;
