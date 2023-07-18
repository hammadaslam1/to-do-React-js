import { ButtonGroup, Button } from "@mui/material";


const ButtonGroups = () => {
    return ( 
        <div className="flex flex-col w-[fit-content] items-center gap-y-4 m-5">
            <ButtonGroup variant="contained" color="error">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" color="warning">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" orientation="vertical" color="info">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
     );
}
 
export default ButtonGroups;