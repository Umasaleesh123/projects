import Navbar from "./Components/Navbar";
import{BrowserRouter,Routes,Route} from'react-router-dom'
import AboutUs from "./Pages/AboutUs";
import Categaries from "./Pages/Categaries";
import Clients from "./Pages/Clients";
import Services from "./Pages/Services";
import ProductsCard from "./Components/Productscards";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path="AboutUs " element={<AboutUs/>}/>
    <Route path="Categaries " element={<Categaries/>}/>
    <Route path="Clients " element={<Clients/>}/>
    <Route path="Services " element={<Services/>}/>

    </Routes>
    </BrowserRouter>
    
    
    

    </>
  )
}