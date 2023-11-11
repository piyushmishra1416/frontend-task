// // import React from "react";

// export const Frame = (): JSX.Element => {
//   return (
//     <div className="relative w-[1440px] h-[80px] bg-white border-b [border-bottom-style:solid] border-[#dedfe2]">
//       <div className="inline-flex h-[72px] items-center gap-[72px] absolute top-[4px] left-[60px]">
//         <div className="relative w-[96px] h-[24px]">
//           <div className="relative w-[95px] h-[21px] top-[2px]">
//             <div className="absolute w-[6px] h-[6px] top-0 left-[35px]">
//               <div className="relative w-[4px] h-[4px] top-px left-px bg-[url(union.svg)] bg-[100%_100%]">
//                 <img className="absolute w-[4px] h-[4px] top-0 left-0" alt="Vector" src="vector.svg" />
//               </div>
//             </div>
//             <img className="absolute w-[4px] h-[4px] top-px left-[36px]" alt="Vector" src="image.svg" />
//             <img className="absolute w-[95px] h-[20px] top-px left-0" alt="Group" src="group-27340.png" />
//           </div>
//         </div>
//       </div>
//       <div className="absolute w-[909px] h-[79px] top-0 left-[475px]">
//         <div className="flex w-[728px] items-center justify-end gap-[32px] absolute top-0 left-0">
//           <div className="inline-flex h-[79px] items-center justify-center gap-[6px] relative flex-[0_0_auto] bg-white">
//             <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               Features
//             </div>
//           </div>
//           <div className="inline-flex h-[70px] items-center justify-center gap-[6px] relative flex-[0_0_auto] bg-white">
//             <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               Exchanges
//             </div>
//           </div>
//           <div className="inline-flex h-[70px] items-center justify-center gap-[6px] relative flex-[0_0_auto] bg-white">
//             <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               How it Works?
//             </div>
//           </div>
//           <div className="relative w-[34px] h-[70px] bg-white">
//             <div className="absolute top-[20px] left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               Blog
//             </div>
//           </div>
//           <div className="inline-flex h-[70px] items-center justify-center gap-[6px] relative flex-[0_0_auto] bg-white">
//             <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-1 text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               About us
//             </div>
//           </div>
//         </div>
//         <div className="inline-flex h-[70px] items-center justify-center gap-[6px] absolute top-[4px] left-[797px]">
//           <div className="flex w-[112px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[4px] border border-solid border-[#0052fe]">
//             <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primaryblue text-[16px] tracking-[-0.16px] leading-[normal] whitespace-nowrap">
//               Sign In
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KoinXLogo from "../assets/KoinXLogo.svg";
import { Link } from "react-router-dom";

const pages: string[] = [
  "Features",
  "Exchanges",
  "How it works?",
  "Blog",
  "About us",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="relative"
      className="h-20 w-screen"
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "0.5px 56px 0.5px 60px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={KoinXLogo} alt="logo" className="" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page.toLowerCase().replace(" ", "-")}`}
                    key={page}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Link to={`/${page.toLowerCase().replace(" ", "-")}`} key={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "block",
                    margin: 1,
                    fontSize: "16px",
                    color: "var(--gray-1, #0F1629)",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                    letterSpacing: "-0.16px",
                    textTransform: "none", 
                  }}
                  className="hover:text-zinc-400"
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
