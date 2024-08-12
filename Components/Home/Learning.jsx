import Brands from "../Bands/Brands";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Header/Nav";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Teachers from "../Teachers/Teachers";

export default function Learning()
{
    return(
        <>
         <Header></Header>
         <Brands></Brands>  
         <Courses></Courses> 
         <Teachers></Teachers>
         <Reviews></Reviews>
         <Hero></Hero>
         <Footer></Footer>
        </>
    )
}