import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import FbApi from './FbApi';
import Login from './Login';
import MainContent from './MainContent';
import Navigation from './Navigation';


class Layout extends Component{
    constructor(props){
        super(props);
        this.state={
            data : [],
            loginStatus : '',
            feed : [],
            photos:[],
            friends:[],
        }
        FbApi.changeState = FbApi.changeState.bind(this);
        FbApi.changeloginStatus =  FbApi.changeloginStatus.bind(this);
        FbApi.clearData =  FbApi.clearData.bind(this);
    }
    
    componentDidMount(){
        FbApi.loadApi();    
    }
    
    showlogin(res){
        if(res==='connected'){
            console.log('connected')
            
        }else{
            return(
                <Login/>
            )
        }
    }
    
    render(){
          
          
          
        return(
        
            <BrowserRouter>
                <div>
                <Navigation />
                <h1>HELLO {this.state.data.name}!</h1>
                <MainContent
                feed={this.state.feed}
                photos={this.state.photos}
                friends={this.state.friends}
                />
                <Login/>
                </div>
            </BrowserRouter>
 
        )
    }
}
export default Layout;