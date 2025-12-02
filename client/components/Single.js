import React from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';

const Single=React.createClass({
   render(){
    return(
        <div>
            <h1>
                <Link to="">I am Single </Link>
            </h1>
        </div>
    )
   }
    
}); 
export default Single;