import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
    const { loginWithRedirect,isAuthenticated ,logout } = useAuth0();
   
 
    return (<div>

              { isAuthenticated ?  
              (
    
        <button className="logOut" 
     onClick={() => logout({ returnTo: window.location.origin })}>
            <i class="fa-brands fa-google"></i>
             Click Here To Logout
        </button >

              )
    :
    (
        <button className="logIn" 
       onClick={() => loginWithRedirect()}>
                 <i class="fa-brands fa-google"></i>
                  Click Here To LogIn
        </button>
    )
}

      </div>)
  };
  
  
  export default Login;