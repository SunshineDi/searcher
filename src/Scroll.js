import React, { Component } from 'react';

// props is something that is passed for children but no necessarily
// need to pass on the front end 

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '700px' 
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;
