
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Movies from './pages/Movies'
import Events from './pages/Events'
import Stream from './pages/Stream'

 
import Navbar from './Components/Navbar'
import NavBartwo from './Components/NavBartwo'




export default function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <NavBartwo/>
    
      <Routes>
        <Route path="Movies" element={<Movies/>}/>
        <Route path="Events" element={<Events/>}/>
        <Route path="Stream" element={<Stream/>}/>

       
        
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}