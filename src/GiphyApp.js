import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

// variable for giphy api 
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=sBlXvGHoIP71p1RzuruaIEDD5YogZvlz&tag=beyonce&rating=G';

// interactive so you want a class!
export default class GiphyApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            giphies: []
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
                <button onClick={this._getGiphy}>💅🏾</button>

                <br />
                {
                    this.state.giphies.map(giphy => 
                        (
                            <GiphyImage giphy={giphy} />
                    ))
                }
            </div>

        );
    }

    _getGiphy = () => {

        axios.get(giphyUrl) 
            .then(response => {
                // console.log(response.data.data.images.downsized_large);
                this.setState({
                    giphies: [
                        response.data.data.images.downsized_large,
                        ...this.state.giphies
                    ]
                });
            })
            .catch(err=> {
                console.log('Yeah, no giphy for you')
            })
        console.log('hello');
        // updates helper function to add a stting 'hello' to the array
    }
}