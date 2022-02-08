import './App.css';
import Footer from './components/footer/Footer';
import RestCountries from './components/restCountries/RestCountries';
import Title from './components/title/Title';

function App() {
  return (
    <div>
      <Title />
      <RestCountries />
      <Footer />
    </div>
  );
}

export default App;
