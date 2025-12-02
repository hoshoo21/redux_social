import React from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
import Photo from './Photo';

const PhotoGrid=React.createClass({
   render(){
    console.log(this.props.posts[0].display_src);
    return(
        <div className='photo-grid'>
            { 
                this.props.posts.map((post, idx)=>{
                    return <Photo post={post} key = {idx} id={idx} comments = {this.props.comments[post.code]} />
                })
            }
        </div>
    )
   }
    
}); 
export default PhotoGrid;