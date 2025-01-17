import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const TopHeader = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
           <Link href="/"> NEPTUNE</Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ color: "black", mr: 2 }}>
            Holiday Company Ltd.
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: "40px", mr: 2 }}
          />
          <Avatar alt="Profile" src="/path/to/profile/image.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;

// import React from "react";

// import {
//   AppBar,
//   Avatar,
//   Box,
//   Divider,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// const TopHeader = () => {
//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "white" }}
//       className="bg-white"
//     >
//       <Toolbar className="flex justify-between items-center">
//         <Box className="flex items-center">
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, color: "black" }}
//           >
//             NEPTUNE
//           </Typography>
//         </Box>
//         <Box className="flex items-center">
//           <Typography
//             variant="body1"
//             sx={{ color: "black" }}
//             className="mr-4 text-black"
//           >
//             Holiday Company Ltd.
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Divider
//               orientation="vertical"
//               flexItem
//               sx={{ height: "40px", mr: "20px", width: "2px" }}
//             />
//           </Box>

//           <Avatar alt="Profile" src="/path/to/profile/image.jpg" />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopHeader;
