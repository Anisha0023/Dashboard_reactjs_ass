import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const [userId, setUserId] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setUserId(`USER-${Math.floor(Math.random() * 1000)}`);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ ...formData, userId }));
    setIsDirty(false);
    alert("Data Saved!");
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      <Typography variant="h5">User Data Form</Typography>
      <TextField name="name" label="Name" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="email" label="Email" type="email" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="phone" label="Phone" type="tel" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="address" label="Address" onChange={handleChange} fullWidth margin="normal" />
      {/* <Typography>User ID: {userId}</Typography> */}
      <Button type="submit" variant="contained">Submit</Button>
    </Container>
  );
};

export default UserForm;
