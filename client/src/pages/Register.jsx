
export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#1D9E75",
            }}
          ></div>

          <span style={{ fontWeight: 600, color: "#0F6E56" }}>
            কৃষি স্মার্ট
          </span>
        </div>

        <h2>নিবন্ধন করুন</h2>
        <p className="subtitle">নতুন অ্যাকাউন্ট তৈরি করুন</p>

        <form>
          <div className="form-group">
            <label>পূর্ণ নাম</label>
            <input
              type="text"
              placeholder="আপনার নাম"
            />
          </div>

          <div className="form-group">
            <label>ফোন নম্বর</label>
            <input
              type="tel"
              placeholder="০১XXXXXXXXX"
            />
          </div>

          <div className="form-group">
            <label>ঠিকানা</label>
            <input
              type="text"
              placeholder="গ্রাম / উপজেলা / জেলা"
            />
          </div>

          <div className="form-group">
            <label>পাসওয়ার্ড</label>
            <input
              type="password"
              placeholder="কমপক্ষে ৬ অক্ষর"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary btn-full"
          >
            অ্যাকাউন্ট তৈরি করুন →
          </button>
        </form>

        <div className="auth-link">
          আগেই আছেন? <Link to="/login">লগইন করুন</Link>
        </div>
      </div>
    </div>
  );
}