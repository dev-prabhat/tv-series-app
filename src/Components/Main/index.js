import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from  '../../Container/Series'
import SingleSeries from '../../Container/SingleSeries'
const Main = () =>{
    return(
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries}/>
    </Switch>
    )
};

export default Main;