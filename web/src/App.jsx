import './styles/App.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BackgroundImage from './assets/images/background_light.png';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className={'App'}>
            <img className={'bg'} src={BackgroundImage} alt={''} />
            <BrowserRouter>
                <ToastContainer stacked />
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
