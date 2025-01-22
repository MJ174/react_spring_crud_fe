/* 로그인 컴포넌트 */

import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

function Login() {

	const { setAuth } = useContext(AuthContext);
	const { setHeaders } = useContext(HttpHeadersContext);

	const navigate = useNavigate();

	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");

	const changeId = (event) => {
		setId(event.target.value);
	}

	const changePwd = (event) => {
		setPwd(event.target.value);
	}

	const login = async () => {
		const req = {
			email: id,
			password: pwd,
		};

		await axios.post("http://localhost:8989/user/login", req)
			.then((resp) => {
				console.log("[Login.js] login() success :D");
				console.log(resp.data);

				alert(resp.data.email + "님, 성공적으로 로그인 되었습니다 🔐");

				// JWT 토큰 저장
				localStorage.setItem("bbs_access_token", resp.data.token);
				localStorage.setItem("id", resp.data.email);

				setAuth(resp.data.email); // 사용자 인증 정보(아이디 저장)
				setHeaders({ Authorization: `Bearer ${resp.data.token}` }); // 헤더 Authorization 필드 저장

				navigate("/bbslist");
			})
			.catch((err) => {
				console.log("[Login.js] login() error :<");
				console.log(err);

				alert("⚠️ " + err.response.data);
			});
	};

	return (
		<div className="container mt-5">
			<div className="card shadow border-0" style={{ backgroundColor: "#f8f9fa" }}>
				<div className="card-header text-center" style={{ backgroundColor: "#6c757d", color: "white" }}>
					<h3>로그인</h3>
				</div>
				<div className="card-body">
					<form>
						<div className="mb-4">
							<label htmlFor="email" className="form-label" style={{ color: "#495057" }}>아이디</label>
							<input
								type="text"
								id="email"
								className="form-control"
								placeholder="아이디를 입력하세요"
								value={id}
								onChange={changeId}
								style={{
									backgroundColor: "#e9ecef",
									border: "1px solid #ced4da",
									color: "#495057",
								}}
							/>
						</div>

						<div className="mb-4">
							<label htmlFor="password" className="form-label" style={{ color: "#495057" }}>비밀번호</label>
							<input
								type="password"
								id="password"
								className="form-control"
								placeholder="비밀번호를 입력하세요"
								value={pwd}
								onChange={changePwd}
								style={{
									backgroundColor: "#e9ecef",
									border: "1px solid #ced4da",
									color: "#495057",
								}}
							/>
						</div>

						<div className="d-flex justify-content-center">
							<button
								type="button"
								className="btn"
								style={{
									backgroundColor: "#6c757d",
									color: "white",
									width: "100%",
								}}
								onClick={login}
							>
								<i className="fas fa-sign-in-alt"></i> 로그인
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
