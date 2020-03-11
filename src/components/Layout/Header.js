import React from 'react';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>To-Do List</h1>
        </header>
    )
}

const headerStyle={
    background: '#f3d250',
    color: '#474853',
    padding: '10px',
    textAlign: 'center'
}

export default Header;