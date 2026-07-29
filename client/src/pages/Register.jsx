export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9f6] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#1D9E75]"></div>
          <span className="text-lg font-semibold text-[#0F6E56]">
            কৃষি স্মার্ট
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          নিবন্ধন করুন
        </h2>
        <p className="mt-2 mb-8 text-sm text-gray-500">
          নতুন অ্যাকাউন্ট তৈরি করুন
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              পূর্ণ নাম
            </label>
            <input
              type="text"
              placeholder="আপনার নাম"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              ফোন নম্বর
            </label>
            <input
              type="tel"
              placeholder="০১XXXXXXXXX"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              ঠিকানা
            </label>
            <input
              type="text"
              placeholder="গ্রাম / উপজেলা / জেলা"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              placeholder="কমপক্ষে ৬ অক্ষর"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#1D9E75] focus:ring-2 focus:ring-[#1D9E75]/20"
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-[#1D9E75] py-3 text-base font-medium text-white transition hover:bg-[#0F6E56]"
          >
            অ্যাকাউন্ট তৈরি করুন →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          আগেই আছেন?{" "}
          <a
            href="/login"
            className="font-medium text-[#1D9E75] hover:underline"
          >
            লগইন করুন
          </a>
        </div>
      </div>
    </div>
  );
}