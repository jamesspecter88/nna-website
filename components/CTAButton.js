export default function CTAButton({ children, href }) {
  return (
    <a href={href} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      {children}
    </a>
  );
}