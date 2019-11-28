import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from MyComponent</h1>
                <h1>{this.props.whatToSay}</h1>
            </div>
        )
    }
}

function EvenComponent() {
        return (
            <div>This is a even component</div>
        )
    }


function OddComponent() {
        return (
            <div>This is a odd component</div>
        )
}




export {MyComponent, OddComponent, EvenComponent};