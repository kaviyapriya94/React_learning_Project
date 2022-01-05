import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const PublicRoute = (props) => {
    const auth = useSelector((state) => state.authReducer);
    console.log(auth);
    return (
          <>{
         auth.isAuthenticated ? (
          <Navigate to="/dashboard" />
          
          ) : (
           props.children
           
          )
        }
          </>
      
        
          
        
        // }
    );
  }
  export default PublicRoute;