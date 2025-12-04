import React from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
import Photo from './Photo';

const PhotoGrid=React.createClass({
   render(){
    return(
        <div className='photo-grid'>
            { 
                this.props.posts.map((post, idx)=>{
                    console.log(this.props);
                    return <Photo post={post} key = {idx} id={idx} increment ={this.props.increment}  comments = {this.props.comments[post.code]} />
                })
            }
        </div>
    )
   }
    
}); 
export default PhotoGrid;