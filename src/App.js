
import './App.css';
import Admin from './components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
 Routes,
Route
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserEvent from './components/UserEvent/UserEvent';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
      name: '',
      email: '',
      isLoggedIn: false,
      eventName: ''
  })
  return (
    <userContext.Provider value={[user, setUser]}>
        <Router>
           <Routes>
              <Route exact path='/' element={<Home></Home>}></Route>
              <Route  path='/home' element={<Home></Home>}></Route>
              <Route element={<PrivateRoute></PrivateRoute>}>
                 <Route  path='/events' element={<UserEvent></UserEvent>}></Route>
              </Route>
              <Route  path='/blog' element={<Blog></Blog>}></Route>
              <Route  element={<PrivateRoute></PrivateRoute>}>
                 <Route path='/register' element={<Register></Register>}></Route>
              </Route>
              <Route  path='/admin' element={<Admin></Admin>}></Route>
              <Route  path='/login' element={<Login></Login>}></Route>
              <Route  path='*' element={<NotFound></NotFound>}></Route>
           </Routes>
        </Router>
    </userContext.Provider>
  );
}

export default App;
