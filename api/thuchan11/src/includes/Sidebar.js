import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
function sidebar(props) {
    return (
        <div>
            <h1>sidebar</h1>
            <ul>
                <li>
                    <Link to="/users"> users</Link>
                     </li>
                <li>
                    <Link to="/articles"> articles
                    </Link>
                     </li>
            </ul>
        </div>
    );
}

export default sidebar;