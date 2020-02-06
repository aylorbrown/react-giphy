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

    render() {
        return(
            <div className='button'>
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
    }
}