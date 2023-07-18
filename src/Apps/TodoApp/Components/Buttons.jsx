import Button from "@mui/material/Button"
import { Icon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import AlarmIcon from "@mui/icons-material/Alarm"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import Fingerprint from "@mui/icons-material/Fingerprint"

const Buttons = () => {
    return ( 
        <div className="flex flex-col w-[fit-content] items-center gap-y-4 m-5">
            <Button variant="outlined" color="secondary" size="small">Outlined</Button>
            <Button variant="outlined" disabled size="medium">Outlined</Button>
            <Button variant="contained" color="primary" size="large">Contained</Button>
            <Button variant="contained" disabled>disabled</Button>
            <Button variant="text" color="error">text</Button>
            <Button variant="contained" color="success" disableElevation>disableElevation</Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
            <DeleteIcon fontSize="small" />
            <AlarmIcon fontSize="medium" />
            <AddShoppingCartIcon fontSize="large"></AddShoppingCartIcon>
            <Fingerprint />
        </div>
     );
}
 
export default Buttons;