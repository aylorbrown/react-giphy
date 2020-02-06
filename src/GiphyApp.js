import React from 'react';

// interactive so you want a class!
export default class GiphyApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        };
    }


    // features you need:

    //  a button 
    // when you click the button, it runs a helper function 
        // - to begin with, just console.log inside helper 
    // some state 
        // - to begin with, an empty array
    // update helper function 
        // - it should add the string 'hello' to the array 

    // open the component inspector
    // make sure that the state array should get another 'hello' 
    // string added to it everytime you click the button 

    render() {
        return(
            <div>
                <h1>DISPLAY ON THE SCREEN PLEASE</h1>
                <button onClick={this._userClick}>a button</button>
            </div>

        );
    }

    _userClick = (something) => {
        console.log('hello');
    }

}