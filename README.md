## Giphy Generator in React 
Demo using APIs in React. 

Features:
- A button that when you click, it runs a helper function that consoles a random gif to the browser 

```npm install axios```

Import axios:

```import axios from 'axios';```

Make a GiphyApp class. Remember, you want to make a class when it is *interactive* or *uses AJAX*:

```javascript
export default class GiphyApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            giphies: []
        };
    }
}
```

Make a variable for the giphy APR:

```javascript 
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=sBlXvGHoIP71p1RzuruaIEDD5YogZvlz&tag=beyonce&rating=G';
```

Render! You have the button on top and the giphies map that goes through each GiphyImage:

```javascript 
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
```

Giphy helper function. Remember helper functions and this.setState go together like two peas in a pod:

```javascript 
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
```


Demo: 


![BeyonceGifDemo](Kapture-2020-02-06-at-14.50.31.gif)





