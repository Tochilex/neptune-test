"use client";
import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import SquareIcon from "@mui/icons-material/Square";
import Link from "next/link";

const LeftSideBar = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Company"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <Link href="/company">
              <ListItemText primary="Company" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Employees"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <Link href="/employees">
              <ListItemText primary="Employees" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Payroll"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SquareIcon />
            </ListItemIcon>
            <Link href="/payroll">
              <ListItemText primary="Payroll" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Reports"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SquareIcon />
            </ListItemIcon>
            <Link href="/report">
              <ListItemText primary="Reports" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Taxes & Compliance"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SquareIcon />
            </ListItemIcon>
            <Link href="/taxes">
              <ListItemText primary="Taxes & Compliance" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Access Management"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SquareIcon />
            </ListItemIcon>
            <Link href="/access">
              <ListItemText primary="Access Management" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {isSmDown ? (
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>Menu</Button>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      ) : (
        <Box sx={{ display: "flex", position: "fixed", height: "100vh" }}>
          <Box sx={{ width: 250 }}>{list("left")}</Box>
          <Divider orientation="vertical" flexItem />
          {/* ... Rest of your content ... */}
        </Box>
      )}
    </div>
  );
};

export default LeftSideBar;

// 1 import * as React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Box,
//   useMediaQuery,
//   useTheme,
//   Button,
//   Divider,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import BusinessIcon from "@mui/icons-material/Business";
// import PeopleIcon from "@mui/icons-material/People";
// import SquareIcon from "@mui/icons-material/Square";

// const LeftSideBar = () => {
//   const theme = useTheme();
//   const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer =
//     (anchor: string, open: boolean) =>
//     (event: React.MouseEvent<HTMLDivElement>) => {
//       // Corrected event type to React.MouseEvent<HTMLDivElement>
//       if (
//         event.type === "keydown" &&
//         (event.key === "Tab" || event.key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: string) => (
//     <Box
//       position="fixed"
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         overflowY: "auto",
//         width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
//       }}
//       role="presentation"
//       // onClick={toggleDrawer(anchor, false)}
//       // onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem key={"Home"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Company"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <BusinessIcon />
//             </ListItemIcon>
//             <ListItemText primary="Company" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Employees"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <PeopleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Employees" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Payroll"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Payroll" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Reports"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Taxes & Compliance"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Taxes & Compliance" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Access Management"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Access Management" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {isSmDown ? (
//         <React.Fragment key={"left"}>
//           <Button onClick={toggleDrawer("left", true)}>Menu</Button>
//           <Drawer
//             anchor="left"
//             open={state["left"]}
//             onClose={toggleDrawer("left", false)}
//           >
//             {list("left")}
//           </Drawer>
//         </React.Fragment>
//       ) : (
//         <Box sx={{ display: "flex" }}>
//           <Box
//             sx={{ width: 250, bgcolor: "grey.100" }}
//             //sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
//           >
//             {list("left")}
//           </Box>
//           <Divider orientation="vertical" flexItem />
//         </Box>
//       )}
//     </div>
//   );
// };

// export default LeftSideBar;

// 2 import * as React from "react";
// import {
//   Box,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import BusinessIcon from "@mui/icons-material/Business";
// import PeopleIcon from "@mui/icons-material/People";
// import SquareIcon from "@mui/icons-material/Square";

// const LeftSideBar = () => {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer =
//     (anchor: string, open: boolean) =>
//     (event: { type: string; key: string }) => {
//       if (
//         event.type === "keydown" &&
//         (event.key === "Tab" || event.key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: string) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem key={"Home"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Company"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <BusinessIcon />
//             </ListItemIcon>
//             <ListItemText primary="Company" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Employees"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <PeopleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Employees" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Payroll"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Payroll" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Reports"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Taxes & Compliance"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Taxes & Compliance" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem key={"Access Management"} disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SquareIcon />
//             </ListItemIcon>
//             <ListItemText primary="Access Management" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {["left"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default LeftSideBar;

// import React from "react";

// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

// import HomeIcon from "@mui/icons-material/Home";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import DescriptionIcon from "@mui/icons-material/Description";
// import SecurityIcon from "@mui/icons-material/Security";

// const drawerWidth = 200;

// const LeftSideBar = () => {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer =
//     (anchor: "left", open: boolean) =>
//     (event: React.KeyboardEvent | MouseEvent) => {
//       if (
//         (event.type === "keydown" &&
//           (event as React.KeyboardEvent).key === "Tab") ||
//         (event as React.KeyboardEvent).key === "Shift"
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   return (
//     <div>
//       <React.Fragment key="left">
//         <Drawer
//           anchor="left"
//           open={state["left"]}
//           onClose={toggleDrawer("left", false)}
//           sx={{ width: drawerWidth }}
//         >
//           <Box
//             sx={{ width: "250px" }}
//             role="presentation"
//             onClick={toggleDrawer("left", false)}
//             onKeyDown={toggleDrawer("left", false)}
//           >
//             <List>
//               {[
//                 "Home",
//                 "Company",
//                 "Settings",
//                 "Payroll",
//                 "Reports",
//                 "Taxes & Compliance",
//               ].map((text, index) => (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       {index === 0 && <HomeIcon />}
//                       {index === 1 && <PeopleIcon />}
//                       {index === 2 && <SettingsIcon />}
//                       {index === 3 && <AttachMoneyIcon />}
//                       {index === 4 && <DescriptionIcon />}
//                       {index === 5 && <SecurityIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// };

// export default LeftSideBar;
