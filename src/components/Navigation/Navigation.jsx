import './Navigation.css';
import { BiSolidHome } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { useGlobalState } from "../../store/state";

const Navigation = () => {
  const [ activeScreen, setActiveScreen ] = useGlobalState('active_screen');

  return(<nav className="nav">
    <button className={activeScreen === 'home' ? "nav__button active" : 'nav__button'}
            onClick={() => setActiveScreen('home')}
            ><BiSolidHome/>
            </button>
    <button className={activeScreen === 'people' ? "nav__button active" : 'nav__button'}
            onClick={() => setActiveScreen('people')}
            ><IoPeople/>
            </button>
  </nav>)
}

export default Navigation;