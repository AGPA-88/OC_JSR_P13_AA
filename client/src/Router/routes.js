import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Index from '../Pages/IndexPage.jsx';
import SignIn from '../Pages/SignIn.jsx';
import User from '../Pages/User.jsx';
import { Provider } from "react-redux";
import { store } from "../store/redux";

function CustomRoutes() {
    return (
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route exact path="/index"  element={<Index/>}/>
                    <Route exact path="/sign-in"  element={<SignIn/>}/>
                    <Route exact path="/profile"  element={<User/>}/>
                </Routes>
            </Provider>
        </Router>
    );
}

export default CustomRoutes;