import Fruta from "./Fruta";
import FrutaF from "./FrutaF";



function Home() {
  return (
    <div className="Home">
     
    Home

    <Fruta nombre="Manzana" calorias="80" />
    <Fruta nombre="Banana" calorias="120" /> 
    <Fruta nombre="Naranja" calorias="150" /> 
    <FrutaF nombre="Pera" calorias="200" />


    </div>
  );
}

export default Home;
