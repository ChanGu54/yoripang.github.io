import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "./firebase";
import "./App.css";

function App() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const rankingsRef = ref(database, "Rankings");
    onValue(rankingsRef, (snapshot) => {
      const data = snapshot.val();
      const formattedData = Object.values(data).sort((a, b) => b.Score - a.Score);
      setRankings(formattedData);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">플레이어 순위</h1>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>사용자 이름</th>
            <th>점수</th>
            <th>등록 시간</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((rank, index) => (
            <tr key={rank.ID}>
              <td>{index + 1}</td>
              <td>{rank.UserName}</td>
              <td>{rank.Score}</td>
              <td>{new Date(rank.TimeStamp).toLocaleString("ko-KR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;