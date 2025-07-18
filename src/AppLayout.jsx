import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Applayout=()=>{
    return(<>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )

}
export default Applayout;