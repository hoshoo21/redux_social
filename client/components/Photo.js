import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import comments from '../data/comments';
const Photo = React.createClass({

    render(){
        return(
            
            <figure className='grid-figure'>
                <div className='grid-photo-wrap'>
                    <Link to ={`/view/${this.props.post.code}`}>
                        <img src= {this.props.post.display_src} alt ={this.props.post.caption} className='grid-photo'/>
                     </Link>
                     < CSSTransitionGroup transtionName = 'like'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                            <span key = {this.props.post.likes} className='likes-heart'>
                                {this.props.post.likes}
                            </span>

                     </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p> {this.props.post.caption}</p>
                    <div className='control-button'>
                        <button className='likes'>&hearts; {this.props.post.likes}</button>
                        <Link className='button' to ={`/view/${this.props.post.code}`}> 
                            <span className='speech-bubble'></span>
                            {this.props.comments? this.props.comments.length : 0}
                        </Link>

                    </div>
                </figcaption>
            </figure>
        )
    }

});

export default Photo;