import React,{Component} from 'react';

class Photos extends Component{

    render(){
        
        console.log(this.props.photos);
        const photoList = this.props.photos.map((item,i)=>{
            if(item.picture){
                return(
                    <li key={i}>
                    <img src={item.picture} alt={item.id}/>
                    <p>{item.name}</p>
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
            <h1>Photos</h1>
            <ul>
                {photoList}
            </ul>
            </div>
        )
    }
}
export default Photos;
