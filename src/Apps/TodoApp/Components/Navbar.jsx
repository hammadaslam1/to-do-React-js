import { Alert, AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Modal, ModalDialog, ModalClose } from "@mui/joy";
import { auth } from "../../../firebase_setup/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const userSignout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };
// onAuthStateChanged(auth)

// useEffect(() => {
  
// }, [])

console.log(auth.currentUser);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              To-Do App
            </Typography>
            
            {!auth.currentUser ? (
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "space-around",
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
              <div style={{ width: "10%" }}>
                <Button
                  variant="contained"
                  color="primary"
                  
                  onClick={() => userSignout()}
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
