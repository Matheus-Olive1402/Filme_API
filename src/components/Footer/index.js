import React, {Component} from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <Link to="/">Direitos autorios reservados a mathues</Link>
            </div>
        );
    }
}

export default Footer;