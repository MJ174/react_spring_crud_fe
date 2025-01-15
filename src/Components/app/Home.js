import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Q&A 게시판</h1>
                <p className="lead">
                    Explore and engage with the community. Share your thoughts, ask questions,
                    and connect with others through this SPA board.
                </p>
                <hr className="my-4" />
                <p>
                시작할 준비가 되셨나요? 최신 게시물을 확인하거나 직접 만들어보세요.
                </p>
				<Link to="/bbslist">
					<button className="btn btn-primary btn-lg">게시판 보러가기</button>
				</Link>
				<br></br><br></br>
                <div className="mt-4">
                    <h3>🖥️Source code on GitHub:</h3>
                    <ul>
                        <li>
							- &nbsp;
                            <a href="https://github.com/MJ174" target="_blank" rel="noopener noreferrer">Backend Repository</a>
                        </li>
                        <li>
							- &nbsp;
                            <a href="https://github.com/MJ174" target="_blank" rel="noopener noreferrer">Frontend Repository</a>
                        </li>
                    </ul>
                </div>
				<br></br>
                <div className="mt-4">
                    <h5>📧Contact me email</h5>
						- &nbsp;
						<a href="mailto:jhcode33@gmail.com">audwls714@gmail.com</a>

                </div>
            </div>
        </div>
    );
}

export default Home;