import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>
         <i class="fa-brands fa-google"></i>
             Continue with google</button>;

             <div>
                <div>
                    
                </div>
             </div>
  };
  
  export default Login;