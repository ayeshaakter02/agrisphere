import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
        
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-primary"></div>
          <span className="text-lg font-semibold text-green-dark">
            কৃষি স্মার্ট
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          লগইন করুন
        </h2>

        <p className="mb-8 mt-2 text-sm text-gray-500">
          আপনার অ্যাকাউন্টে প্রবেশ করুন
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              ফোন নম্বর
            </label>

            <input
              type="tel"
              placeholder="০১XXXXXXXXX"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              পাসওয়ার্ড
            </label>

            <input
              type="password"
              placeholder="পাসওয়ার্ড দিন"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
            />
          </div>


          <button
            type="button"
            className="w-full rounded-lg bg-green-primary py-3 text-base font-medium text-white transition hover:bg-green-dark"
          >
            লগইন করুন →
          </button>
        </form>


        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            to="/register"
            className="font-medium text-green-primary hover:underline"
          >
            নিবন্ধন করুন
          </Link>
        </div>

      </div>
    </div>
  );
}