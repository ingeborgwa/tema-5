import React from 'react';
import { Link } from 'react-router-dom';


function SiteNavigation (){
    return (
        <nav>
            <ul>
                <li><Link to="/om-oss">Om oss</Link></li>
            </ul>
            <ul>
                <li><Link to="/alle-stop">Alle stop</Link></li>
            </ul>
        </nav>
    );
}

export default SiteNavigation;