import React,{Component} from 'react';

class Feed extends Component{

    render(){
        
        console.log(this.props.feed);
        const feedList = this.props.feed.map((item,i)=>{
            if(item.picture){
                return(
                    <li key={i}>
                    <img src={item.picture} alt={item.id}/>
                    <p>{item.message}</p>
                    </li>
                )
            }else{
                return(
                    <li key={i}>
                    <h1>No Image</h1>
                    <p>{item.message}</p>
                    </li>
                )
            } 
        });
        
        return(
            <div>
            <h1>Feed</h1>
            <ul>
                {feedList}
            </ul>
            </div>
        )
    }
}
export default Feed;
