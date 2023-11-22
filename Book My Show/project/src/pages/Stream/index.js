
import { Grid } from "@mui/material";
import Cardcomponents from "../../Components/Cardcomponents";


export default function Stream(){
    return(
        <>
        
       <h3> Stream</h3>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={0}/>   
        <Grid item xs={3}>
            <br></br>
        <Cardcomponents
          
         image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8ixm1KmVVmLYMkzzUsOCaOtX2x2WjZgdrXYH1CpKbyGQz91PK"
         heading="hh"
         description="hh"
         
         
         />
         </Grid>
         
         <Grid item xs={3}>
            <br></br>
<Cardcomponents
         image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8ixm1KmVVmLYMkzzUsOCaOtX2x2WjZgdrXYH1CpKbyGQz91PK"
         heading="hh"
         description="hh"
         />
         </Grid>
         <Grid item xs={3}>
         <br></br>
<Cardcomponents
         image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8ixm1KmVVmLYMkzzUsOCaOtX2x2WjZgdrXYH1CpKbyGQz91PK"
         heading="hh"
         description="hh"
         />
         </Grid>
         </Grid>

         
        </>
    )
}