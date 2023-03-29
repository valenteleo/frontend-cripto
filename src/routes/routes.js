import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    );
}