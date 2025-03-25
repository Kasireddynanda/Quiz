import React, { useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import "./DetailsPage.css"; // Import the CSS file

export default function DetailsPage({ setPlayer, onStart }) {
  const [player, setLocalPlayer] = useState({ name: "", age: "", email: "" });
  const [errors, setErrors] = useState({ name: false, age: false, email: false });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: false, age: false, email: false };

    if (!player.name.trim()) {
      newErrors.name = true;
      valid = false;
    }
    if (!player.age.trim() || isNaN(player.age) || Number(player.age) <= 0) {
      newErrors.age = true;
      valid = false;
    }
    if (!player.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(player.email)) {
      newErrors.email = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleStart = () => {
    if (validateForm()) {
      setPlayer(player);
      onStart();
    }
  };

  return (
    <div className="details-container">
      <Card className="details-card">
        <Typography variant="h5" gutterBottom>
          Enter Your Details
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            className="details-textfield"
            label="Name"
            variant="outlined"
            fullWidth
            value={player.name}
            error={errors.name}
            helperText={errors.name ? "Name is required" : ""}
            onChange={(e) => setLocalPlayer({ ...player, name: e.target.value })}
          />
          <TextField
            className="details-textfield"
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={player.age}
            error={errors.age}
            helperText={errors.age ? "Enter a valid age" : ""}
            onChange={(e) => setLocalPlayer({ ...player, age: e.target.value })}
          />
          <TextField
            className="details-textfield"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={player.email}
            error={errors.email}
            helperText={errors.email ? "Enter a valid email" : ""}
            onChange={(e) => setLocalPlayer({ ...player, email: e.target.value })}
          />
          <Button 
            className="details-button" 
            variant="contained" 
            color="primary" 
            onClick={handleStart}
            sx={{ mt: 2 }}
          >
            Start Quiz
          </Button>
        </form>
      </Card>
    </div>
  );
}
