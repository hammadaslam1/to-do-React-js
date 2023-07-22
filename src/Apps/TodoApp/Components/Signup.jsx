import TextField from "@mui/material/TextField";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, React } from "react";
import { auth } from "../../../firebase_setup/firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((e) => {
        navigate("/login");
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
            {errorMessage}
          </Alert>
        )}
        <Card
          sx={{
            minWidth: "330px",
            maxWidth: "400px",
            padding: "45px",
            backgroundColor: "#fff5",
            margin: "50px auto",
          }}
          elevation={5}
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
            Signup
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
            fullWidth
            onClick={() => userSignup()}
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
