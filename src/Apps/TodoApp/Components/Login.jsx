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

const Login = () => {

    

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="login flex flex-col items-center">
        <Card
        //   variant="contained"
          sx={{
            minWidth: "330px",
            maxWidth: "500px",
            padding: "15px",
            backgroundColor: "#fff5",
            margin: "20px auto",
            gap: "4",
            borderBottom: "2px solid #5555",
          }}
          elevation={5}
          className="flex flex-col items-center"
        >
          <DialogTitle
            sx={{
              margin: "auto",
              width: "fit-content",
              fontWeight: "bold",
              color: "cornflowerblue",
            }}
          >
            Login
          </DialogTitle>
          <TextField
            id="outlined-basic"
            size="small"
            label="Email"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            value=""
            fullWidth
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            sx={{ marginTop: "20px" }}
            value=""
            fullWidth
          />
          <Button
            variant="contained"
            color="info"
            size="small"
            sx={{ margin: "20px auto" }}
          >
            Login
          </Button>
        </Card>
        <Button
          variant="contained"
          color="info"
          size="small"
          sx={{ margin: "20px auto" }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Login;
