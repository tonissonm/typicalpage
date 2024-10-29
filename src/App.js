import './App.css';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if (JSON.parse(localStorage.getItem('isLoggedUser')) != null) {
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged === true;
    } else {
      return false;
    }
  });

  console.log(loggedIn);

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(localStorage.getItem('isLoggedUser'));
    if (storedLoggedUserData !== null) {
      if (storedLoggedUserData.isLogged === true) {
        setLoggedIn(true);
      }
    }
  }, []);

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }));
    setLoggedIn(true);
  };
  const logoutHandler = ()=>{
    localStorage.removeItem('isLoggedUser')
    setLoggedIn(false)
  }
  return (
    <Fragment>
      <MainHeader isAuthenticated={loggedIn}/>
      <main>
        {!loggedIn&&<Login onLogin ={loginHandler}/>}
        {loggedIn && <Home/>}
      </main>
    </Fragment>
  );
}

export default App;
