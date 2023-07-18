import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"
import NavigationIcon from "@mui/icons-material/Navigation"
import FavoriteIcon from "@mui/icons-material/Favorite"
import EditIcon from "@mui/icons-material/Edit"

const FAB = () => {
    return ( 
        <div className="flex flex-col w-[fit-content] items-center gap-y-4 m-5">
            <Fab>
                <AddIcon />
            </Fab>
            <Fab>
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon />
                Navigate
            </Fab>
            <Fab aria-label="like">
                <FavoriteIcon />
            </Fab>
        </div>
     );
}
 
export default FAB;