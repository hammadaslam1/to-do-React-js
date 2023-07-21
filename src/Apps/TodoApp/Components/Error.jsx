import { Typography } from "@mui/material";

const Error = () => {
    return (
        <div style={{padding: '50px'}}>
            <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "lightgray",
              textAlign: 'center'
            }}
            fullWidth
          >
            Nothing to see
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              color: "lightgray",
              textAlign: 'center',
            }}
            fullWidth
            
          >
            Login First
          </Typography>
        </div>
    );
}
 
export default Error;