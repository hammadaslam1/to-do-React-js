import TextField from "@mui/material/TextField";
import {
  AppBar,
  Box,
  Button,
  Card,
  DialogTitle,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Title } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
// import { db, getAuth } from "../../../firebase_setup/firebase";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@mui/joy";

const Login = () => {


  
  const navigate = useNavigate();
  // const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  

  const userSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => {
        console.log("ok", auth.currentUser);
        navigate("/");
      })
      .catch((e) => {
        setError(true);
        setErrorMessage("Invalid email or password");
      });
  };
  return (
    <div>
      <div className="Signup items-center">
        {error && (
          <Alert
            key="warning"
            color="danger"
            variant="solid"
            size="sm"
            endDecorator={
              <IconButton variant="solid" size="sm" color="danger">
                <CloseIcon
                  onClick={() => {
                    setError(false);
                  }}
                />
              </IconButton>
            }
          >
            {errorMessage+"asdsa"}
          </Alert>
        )}
        <Card
          //   variant="contained"
          sx={{
            minWidth: "330px",
            maxWidth: "400px",
            padding: "45px",
            backgroundColor: "#fff5",
            margin: "50px auto",
          }}
          elevation={5}
          //   className="flex flex-col items-center"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              color: "cornflowerblue",
              textAlign: "center",
            }}
            fullWidth
          >
            Login
          </Typography>
          <TextField
            id="email"
            type="email"
            size="small"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "50px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            id="password"
            type="password"
            size="small"
            label="Password"
            variant="outlined"
            sx={{ marginTop: "40px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ margin: "40px auto", fontWeight: "700", textAlign: "center" }}
            onClick={() => userSignin()}
            fullWidth
          >
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;
