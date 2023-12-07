import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect,Route } from 'react-router-dom';

//component to check and give access to the user who is logged in otherwise it asks to login first
const PrivatedRoute = ({component: Component, ...rest}) => {

    const { isAuthenticated } = useSelector((state) => state.user);

    return ( 
            <Route 
            {...rest}
            render={(props) => {
                    if(isAuthenticated === false){
                        return <Redirect to="/login" />
                    }
                    return <Component {...props} />
                }
            }
            />
    )
}

export default PrivatedRoute