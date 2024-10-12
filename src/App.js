import './index.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/screens/Home/Home';
import People from './components/screens/People/People';
import { useGlobalState } from './store/state';

function App() {
  const [ activeScreen ] = useGlobalState('active_screen');
  const [ isNavActive ] = useGlobalState('is_nav_active');

  return (
    <div className="App">
      {isNavActive === true && <Navigation/>}
      {activeScreen === 'home' && <Home/>}
      {activeScreen === 'people' && <People/>}  
    </div>
  );
}

export default App;