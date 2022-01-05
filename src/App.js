import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Helmet} from "react-helmet";
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from './redux/store';
import PublicRoute from './routes/publicRoute';
import PrivateRoute from './routes/privateRoute';
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import AgeCalculator from "./components/AgeCalculator.js";
import Timer from "./components/Timer";
import NotFound from "./components/NotFound"
import Child from "./components/child"

function App() {
  return (
    <div>
      <Helmet>
        <title>React App</title>
      </Helmet>
      
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            
            <Route exact path='/' element={<PublicRoute><Home/></PublicRoute>} />
            <Route  exact path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} /> 
            <Route exact path='/agecalculator' element={<AgeCalculator/>}/>
            <Route exact path='/timer' element={<Timer/>}/>
            <Route exact path='/child' element={<Child/>}/>
            <Route path='*' element={<NotFound/>}/>

         
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;