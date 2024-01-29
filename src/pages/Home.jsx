import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import lol from '../imgs/lol.jpg';
import '../styles/styles.css';
import Footer from '../components/Footer';


const Home = () => {
    useEffect(() => {
        document.title = "Villa Romana";
    }, []);

    const { poductsData } = useGetProducts('products');

    return (
        <div className="main-container">
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={lol} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <main className="container px-4 px-lg-5 encabezado">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="text-black mt-0">VILLA ROMANA</h1>
                            <p className="text-black mb-4">
                                ¡Vive la experiencia Eco en Villa Romana! Descubre la armonía en un entorno sostenible mientras impulsamos tu estadía hacia momentos inolvidables.
                            </p>
                            <a href="" style={{color:'black'}}>Ver mas...</a>
                        </div>
                    </div>
                </main>
            </section>

            {/* Contenido principal */}
            <ItemListContainer productsData={poductsData} />
            <Footer />
        </div>
    );
};

export default Home;