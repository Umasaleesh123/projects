import { Button } from "@mui/material";


export default function Categaries(){
    function handleClick(){
        console.log('Button Clicked');    
        
    }
    return(
<>
        
        
        <Button onClick={handleClick}>Click Me</Button>
        </>
    )
}