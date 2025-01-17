import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Link } from "@mui/material";


const EmployeeRightSideBar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Sample Template";

    link.href = "/SampleTemplate.xlsx";
    link.click();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "30%",
        p: 3,
        mt: 8,
        display: { xs: "none", lg: "block" },
      }}
    >
      <Card sx={{ minWidth: 275, height: 150, bgcolor: "#d3d3d3", mb: 4 }}>
        {/* Placeholder for the top gray box */}
        <CardContent />
      </Card>

      <Typography variant="h6" component="div">
        Add employees in bulk
      </Typography>
      <Typography sx={{ mb: 2 }} color="text.secondary">
        Add all your employees at once by uploading a single excel file. <br />
        <Typography
          onClick={handleDownload}
          component="span"
          sx={{ color: "black", fontWeight: "bold" }}
        >
          <Link href="" sx={{ color: "#000000" }}>
            Download Template
          </Link>
        </Typography>
      </Typography>

      <Button variant="contained" sx={{ bgcolor: "black", width: "100%" }}>
        Upload List
      </Button>
    </Box>
  );
};

export default EmployeeRightSideBar;
