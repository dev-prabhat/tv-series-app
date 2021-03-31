import React from 'react'
import Intro from '../../Components/Intro'
import SeriesList from '../../SeriesList';

class Series extends React.Component{
    state={
        series:[],
        seriesName:"",
        isFetching: false
    }
    
    onSeriseInputChange = e =>{
            this.setState({seriesName : e.target.value , isFetching : true})
            fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then( res => res.json())
            .then(json => this.setState({series : json, isFetching: false}))
    }
   render(){
    const {series,seriesName,isFetching}=this.state;
       return(
           <div>
                <Intro message="Here you can find your lovely web series"/>
               <div>
                <input 
                value={seriesName} 
                type="text" 
                onChange={this.onSeriseInputChange}/>
               </div>
               {
                   !isFetching && series.length === 0 && seriesName.trim() ===""
                   &&
                   <p>Please Enter Series Name</p>
               }
               {
                    !isFetching && series.length === 0 && seriesName.trim() !==""
                   &&
                   <p>No TV series found with name</p>
               }
               {
                   isFetching && <p>Loading</p>
               }
               {
                   !isFetching &&<SeriesList list = {this.state.series}/>
               }
            </div>
       )
   }
}
export default Series