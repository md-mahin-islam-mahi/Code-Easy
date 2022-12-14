import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Private = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    }
    else{
        return children;
    }
};

export default Private;