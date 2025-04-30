import { Footer, Header } from './components/index';
import './styles/App.css';
import Router from './routes/Router';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="wrapper">
                <Router />
            </main>
            <Footer />
        </div>
    );
}

export default App;
