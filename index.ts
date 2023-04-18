class MovieSDK {
  apiBaseUrl: string;
  constructor(apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async getMovies() {
    const response = await fetch(`\${this.apiBaseUrl}/movie`);
    return await response.json();
  }

  async getMovieById(id: string | number) {
    const response = await fetch(`${this.apiBaseUrl}/movie/${id}`);
    return await response.json();
  }

  async getMovieQuoteById(id: string | number) {
    const response = await fetch(`${this.apiBaseUrl}/movie/${id}/quote`);
    return await response.json();
  }
}
