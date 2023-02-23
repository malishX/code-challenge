import type { FC } from "react";
import PropTypes from "prop-types";
import { AppBar, ButtonBase, Button, Box, Toolbar, Link } from "@mui/material";
import { experimentalStyled } from "@mui/material/styles";
import type { AppBarProps } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

interface DashboardNavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  background: "#fff",
  zIndex: 100,
}));

const DashboardNavbar: FC<DashboardNavbarProps> = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar
        sx={{
          minHeight: 64,
          backgroundColor: "background.default",
          justifyContent: {
            xs: "flex-start",
          },
          gap: 2,
        }}
      >
        <Link component={RouterLink} to="/" replace={true} underline="none">
          <Box
            sx={{ background: "#FFA500", p: 1, borderRadius: 2 }}
            component={ButtonBase}
          >
            <Home sx={{ color: "#fff" }} />
          </Box>
        </Link>
        <Link
          component={RouterLink}
          to="/charging-stations"
          replace={true}
          underline="none"
        >
          <Button sx={{
            background: "#FFA500", color: "#fff", "&:hover": {
              color: '#000',
            },
          }}>
            Charging stations
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/weather"
          replace={true}
          underline="none"
        >
          <Button sx={{
            background: "#FFA500", color: "#fff", "&:hover": {
              color: '#000',
            },
          }}>Weather</Button>
        </Link>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default DashboardNavbar;