import React, { useState } from "react";

const AdminPage = () => {
  // 임시 사용자 데이터
  const [members, setMembers] = useState([
    { id: 1, email: "user1@example.com", username: "User One" },
    { id: 2, email: "audwls714@naver.com", username: "User Two" },
    { id: 3, email: "admin@example.com", username: "Admin User" },
  ]);

  // 임시 게시물 데이터
  const [posts, setPosts] = useState([
    { id: 101, title: "ff", author: "audwls714@naver.com" },
    { id: 102, title: "안뇽", author: "audwls714@naver.com" },
    { id: 103, title: "Admin Post", author: "Admin User" },
    { id: 104, title: "ff", author: "audwls714@naver.com" },
  ]);

  // 사용자 삭제
  const deleteMember = (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;
    setMembers((prev) => prev.filter((member) => member.id !== id));
    alert("Member deleted successfully.");
  };

  // 게시물 삭제
  const deletePost = (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    setPosts((prev) => prev.filter((post) => post.id !== id));
    alert("Post deleted successfully.");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-header text-center" style={{ backgroundColor: "#6c757d", color: "white" }}>
          <h2>Admin Dashboard</h2>
        </div>
        <div className="card-body">
          {/* 사용자 관리 섹션 */}
          <section className="mb-5">
            <h3 className="text-center" style={{ color: "#495057" }}>Manage Members</h3>
            <table className="table table-bordered mt-3">
              <thead className="table-secondary">
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.email}</td>
                    <td>{member.username}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteMember(member.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* 게시물 관리 섹션 */}
          <section>
            <h3 className="text-center" style={{ color: "#495057" }}>Manage Posts</h3>
            <table className="table table-bordered mt-3">
              <thead className="table-secondary">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deletePost(post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
