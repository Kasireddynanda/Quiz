import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Leaderboard.css"; // Import separate CSS file

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Generate random names and scores
    const randomPlayers = [
      "Alice", "Bob", "Charlie", "David", "Emma", 
      "Frank"
    ];
    
    const randomScores = () => Math.floor(Math.random() * 101); // Scores between 0-100

    const generatedLeaderboard = randomPlayers.map(name => ({
      name,
      score: randomScores(),
    })).sort((a, b) => b.score - a.score); // Sort by highest score

    setLeaderboard(generatedLeaderboard);
  }, []);

  return (
    <div className="leaderboard-container">
      <Card className="leaderboard-card">
        <Typography variant="h4" gutterBottom>
          Leaderboard 🏆
        </Typography>
        <ul className="leaderboard-list">
          {leaderboard.map((entry, index) => (
            <li key={index} className="leaderboard-item">
              <strong>{index + 1}. {entry.name}</strong> - {entry.score} points
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
