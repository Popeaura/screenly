import React, { useState, useEffect } from "react";
import { fetchEvaluations, createEvaluation } from "../api/evaluations";
import EvaluationForm from "../components/EvaluationForm";

const EvaluationsListPage = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
      // Convert score to number or null
      const dataToSubmit = {
        ...formData,
        score: formData.score ? parseInt(formData.score) : null,
      };

      await createEvaluation(dataToSubmit);
      setShowForm(false);
      
      // Reload evaluations list
      await loadEvaluations();
    } catch (err) {
      alert("Error creating evaluation: " + err.message);
    }
  };

  if (loading) return <div className="p-4">Loading evaluations...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Evaluations</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create Evaluation
        </button>
      </div>

      {showForm && (
        <EvaluationForm
          onSubmit={handleCreateEvaluation}
          onCancel={() => setShowForm(false)}
        />
      )}

      {evaluations.length === 0 ? (
        <p>No evaluations found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Candidate Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {evaluations.map((ev) => (
                <tr key={ev.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{ev.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ev.candidate_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{ev.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{ev.status}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {ev.score ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EvaluationsListPage;
