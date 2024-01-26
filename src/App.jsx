import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { CarProvider } from './context/CarContext';


const App = () => {
  
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <CarProvider>
        <MainRouter />
      </CarProvider>
    </div>
  );
}

export default App;
