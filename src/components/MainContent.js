import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Friends from './Friends';
import Home from './Home';
import Photos from './Photos';
import Feed from './Feed';

class MainContent extends Component{
    render(){
            
        return(
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route path='/friends' render={()=>
                    <Friends
                        friends={this.props.friends}
                    />
                }/>
                <Route path='/feed' render={()=>
                    <Feed
                        feed={this.props.feed}
                    />
                }/>
                <Route path='/photos' render={()=>
                    <Photos
                        photos={this.props.photos}
                    />
                }/>
            </Switch>
        )
    }
}
export default MainContent;
