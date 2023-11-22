import { Grid } from "@mui/material";
import Cardcomponents from "../Cardcomponents";

export default function ProductsCard(){
    return(
        <>
        <p>ProductsCard</p>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
        <Grid item xs={3}>
        <Cardcomponents
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        heading="a image of Lizard"
        description="Lizard are a widespread group of squamate reptiles"
        />
        </Grid>
        <Grid item xs={3}>
        <Cardcomponents
        image="https://images.pexels.com/photos/18184356/pexels-photo-18184356/free-photo-of-south-american-coati-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="nature"
        description="Animal photography"
        />
        </Grid>
        <Grid item xs={3}>
<Cardcomponents
        image="https://images.pexels.com/photos/17869843/pexels-photo-17869843/free-photo-of-conifer-right-outside-open-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="window"
        description="outside"
        />
        </Grid>
        <Grid item xs={3}>
<Cardcomponents
        image="https://images.pexels.com/photos/18184356/pexels-photo-18184356/free-photo-of-south-american-coati-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="nature"
        description="Animal photography"
        />
</Grid>
<Grid item xs={3}>
<Cardcomponents
        image="https://images.pexels.com/photos/18184356/pexels-photo-18184356/free-photo-of-south-american-coati-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="nature"
        description="Animal photography"
        />
        </Grid>

        <Grid item xs={3}>
        <Cardcomponents
        image="https://images.pexels.com/photos/18378055/pexels-photo-18378055/free-photo-of-orange-cat-looking-for-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="cat"
        description="Animal photography"
        />
        </Grid>

        <Grid item xs={3}>
        <Cardcomponents
        image="https://images.pexels.com/photos/13610654/pexels-photo-13610654.jpeg"
        heading="dalphins"
        description="Animal photography"
        />
        </Grid>

        <Grid item xs={3}>
        <Cardcomponents
        image="https://images.pexels.com/photos/18378055/pexels-photo-18378055/free-photo-of-orange-cat-looking-for-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="cat"
        description="Animal photography"
        />
        </Grid>
        </Grid>
        </>
    )
}