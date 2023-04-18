## How to Use

```ts
import MovieSDK from 'movie-sdk';

const movieSDK = new MovieSDK('https://your-api-base-url.com');

movieSDK.getMovies().then(movies => console.log(movies));
movieSDK.getMovieById(1).then(movie => console.log(movie));
movieSDK.getMovieQuoteById(1).then(quote => console.log(quote));
```
