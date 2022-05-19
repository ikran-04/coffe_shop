import Footer from "../components/footer";
import Hero from "../components/hero";
import Products from "../components/Products";
import Tables from "../components/tables";

const HomePage = () => {
    return ( 
        <div className="home">
            <Hero/>
            <Products/>
            <Tables/>
            <Footer/>
        </div>
     );
}
 
export default HomePage;