import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Index from '../Pages/IndexPage.jsx';
import SignIn from '../Pages/SignIn.jsx';
import User from '../Pages/User.jsx';

function CustomRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/index"  element={<Index/>}/>
                <Route exact path="/sign-in"  element={<SignIn/>}/>
                <Route exact path="/user"  element={<User/>}/>
            </Routes>
        </Router>
    );
}

export default CustomRoutes;