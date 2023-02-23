import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

const Home: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontSize: "48px", display: "flex", alignItems: "center" }}
      >
        <HomeIcon sx={{ width: "48px", height: "48px" }} /> Home
      </Typography>
    </Box>
  );
};

export default Home;