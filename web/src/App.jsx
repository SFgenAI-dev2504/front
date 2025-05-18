import { Footer, Header } from './components/index';
import './styles/App.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <Header />
                <main className={'wrapper'}>
                    <Router />
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
