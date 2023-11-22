import { Grid } from "@mui/material";
import Cardcomponents from "../Cardcomponents";

export default function Productcards(){
    return(

        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
            <Cardcomponents
            image="https://www.shutterstock.com/shutterstock/photos/1504958996/display_1500/stock-photo-family-mother-father-and-children-watching-projector-tv-movies-with-popcorn-in-the-evening-at-1504958996.jpg"
            heading="movie"
            description="Lizard are a widespread group of squamate reptiles"
            />
            

            </Grid>
            
    
        
    
        </Grid>

            
        
    )
}