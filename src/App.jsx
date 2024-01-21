import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { TestProvider } from './context/TestContext';

const App = () => {

  
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <TestProvider>
        <MainRouter />
      </TestProvider>
    </div>
  );
}

export default App;
