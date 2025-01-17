"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        mt: isSmDown ? 4 : 8, // Adjust margin-top to avoid overlapping with the header
        ml: isSmDown ? 4 : 40, // Adjust margin-left to provide space for the sidebar
        pr: 4, // Add padding-right for better spacing
        mb: 5
      }}
    >
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold" }}
        variant="h5"
        gutterBottom
      >
        Good afternoon, <br /> Samuel
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Good to see you! How can we supercharge your business today?
      </Typography>

      <Typography sx={{ mt: 4, mb: 4 }} variant="h6" component="div">
        Things to do
      </Typography>

      <Card sx={{ mt: 4, mb: 4 }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5, fontWeight: "bold" }}
            color="text.secondary"
          >
            Add your employees and other admins
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="body1" color="text.secondary">
            Good to see you! How can we supercharge your business today?
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
            }}
          >
            See Employees
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography
            sx={{ mb: 1.5, fontWeight: "bold" }}
            color="text.secondary"
          >
            Configure payroll for your needs
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Set up your pay schedule, allowances, deductions and other important
            components of payroll to enable kepoume save the load of your back
            with your upcoming payrolls.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
            }}
          >
            See Payroll Settings
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
