import { Alert, AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Modal, ModalDialog, ModalClose } from "@mui/joy";
import { auth } from "../../../firebase_setup/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const userSignout = () => {
    signOut(auth).then(() => {
      setLoggedIn(false);
      navigate("/login");
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (auth.currentUser) {
      setLoggedIn(true);
    }
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              To-Do App
            </Typography>

            {!loggedIn ? (
              <div
                style={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/login" color="inherit">
                  LOGIN
                </Link>
                <Link to="/signup" color="inherit">
                  SIGNUP
                </Link>
              </div>
            ) : (
              <div style={{ width: "auto" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => userSignout()}
                  sx={{width: 'fit-content', padding: '0'}}
                  disableElevation
                >
                  Signout
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
