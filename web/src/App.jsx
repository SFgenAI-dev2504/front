import './styles/App.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundImage from './assets/images/background.png';

function App() {
    return (
        <div className={'App'}>
            <img className={'bk'} src={BackgroundImage} alt={''} />
            <BrowserRouter>
                <ToastContainer />
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
