import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Header</h1>
            <h1>Menu {props.username}</h1>
        </div>
    );
}

export default Header;