
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Slido from './Slido.jsx';
import HeroSections from './HeroSections';

function App() {
  return (
    <Router>
      <Header />
      <Slido />
      <HeroSections />
    </Router>
  );
}

export default App;

