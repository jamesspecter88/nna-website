import { useState } from "react";

export default function InputForm({ onSubmit, loading }) {
  const [url, setUrl] = useState("");
  const [product, setProduct] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState("Professional");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ url, product, goal, tone });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 shadow-md space-y-4">
      <div>
        <label className="block font-semibold mb-1">LinkedIn/Website URL</label>
        <input
          type="url"
          className="w-full border rounded px-3 py-2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://linkedin.com/in/example or company.com"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Product/Service Description</label>
        <textarea
          className="w-full border rounded px-3 py-2"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Describe your product or service"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Goal</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g. Book a meeting, get a reply"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Tone</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Casual</option>
          <option>Bold</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </form>
  );
}