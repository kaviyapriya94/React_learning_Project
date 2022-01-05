import {Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = (props) => {
    const auth = useSelector((state) => state.authReducer);
  //  const Dashboard={element};
    console.log(auth);
    return (
          <>{
         auth.isAuthenticated ? (
            props.children
          ) : (
            <Navigate to="/" />
          )
        }
          </>

    );
  };
  export default PrivateRoute;