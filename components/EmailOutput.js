export default function EmailOutput({ email, onCopy, onRegenerate, onDownload }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-2">Generated Email</h3>
      <textarea
        className="w-full h-40 p-3 border rounded mb-4 text-gray-800"
        value={email}
        readOnly
      />
      <div className="flex gap-4">
        <button onClick={onCopy} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Copy</button>
        <button onClick={onRegenerate} className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition">Regenerate</button>
        <button onClick={onDownload} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Download</button>
      </div>
    </div>
  );
}