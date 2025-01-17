import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

const RightSideBar = () => {
  return (
    <Box
      sx={{ flexGrow: 1, p: 3, mt: 8, display: { xs: "none", lg: "block" } }}
    >
      <Card sx={{ minWidth: 275, height: 150, bgcolor: "#d3d3d3", mb: 4 }}>
        {/* Placeholder for the top gray box */}
        <CardContent />
      </Card>

      <TextField
        id="search"
        label="Search"
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
        // InputProps={{
        //     startAdornment: (
        //       <SearchIcon sx={{ mr: 1, color: 'gray' }} />
        //     ),
        //   }}
      />

      <Typography variant="h6" component="div">
        Active payrolls
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        No payrolls in progress
      </Typography>

      <Typography sx={{ mb: 4 }} color="text.secondary">
        <Link href="#" sx={{ color: "#000000" }}>
          View payroll history
        </Link>
      </Typography>

      <Card sx={{ minWidth: 275, height: 150, bgcolor: "#d3d3d3" }}>
        {/* Placeholder for the bottom gray box */}
        <CardContent />
      </Card>
    </Box>
  );
};

export default RightSideBar;
