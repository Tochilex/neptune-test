"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data: unknown) => {
    // Here you would typically send a request to your backend to handle the password reset
    console.log("Forgot Password:", data);
    setMessage("A password reset link has been sent to your email.");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        mt: 8,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Forgot Password
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message?.toString()}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        Send Reset Link
      </Button>

      {message && (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mt: 2, textAlign: "center" }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default ForgotPassword;
