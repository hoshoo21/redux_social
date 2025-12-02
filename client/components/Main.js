import React from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';

const Main=React.createClass({
   
   render(){
    return(
        <div>
            <h1>
                <Link to="">Redux Instagram</Link>
            </h1>
            {
                React.cloneElement(this.props.children, this.props)
            
            }
        </div>
    )
   }
    
}); 
export default Main;