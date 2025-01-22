import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setAdminAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 임시 어드민 계정
  const adminCredentials = {
    email: "admin@example.com",
    password: "1234",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 입력된 정보와 임시 어드민 계정을 비교
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setAdminAuthenticated(true); // 인증 상태 업데이트
      alert("Login successful!");
      navigate("/admin"); // 관리자 페이지로 이동
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="card-header text-center" style={{ backgroundColor: "#6c757d", color: "white" }}>
          <h2>Admin Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: "#495057" }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "#e9ecef",
                  border: "1px solid #ced4da",
                  color: "#495057",
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: "#495057" }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  backgroundColor: "#e9ecef",
                  border: "1px solid #ced4da",
                  color: "#495057",
                }}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#6c757d",
                  color: "white",
                  width: "100%",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
