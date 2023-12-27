import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [user, setUser] = useContext(userContext);
    return (
        <div>
            {
               user.email ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;