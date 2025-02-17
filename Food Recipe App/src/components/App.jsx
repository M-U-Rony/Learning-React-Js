import {Route,Routes} from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Details from "./details";
import Favourite from "./Favourite";

export default function App(){

    return(

        <>
            
        <Nav/>

        <Routes>

            <Route path="/" element={<Dashboard/>}/>
            <Route path="/favourite" element={<Favourite/>}/>
            <Route path="/details" element={ <Details />}/>
        
        </Routes>

        </>
    );
}