export default class BooksService {
    _apiKey = 'AIzaSyBVJaRtiq4DoefERkWjxgY6aDZ-PhF-gqs';
    _apiBase = 'https://www.googleapis.com/books/v1/volumes?q='

    getResource = async (term) => {
        const result = await fetch(`${this._apiBase}${term}`);
        if (!result.ok) {
            throw new Error(`Could not fetch url: ${this._apiBase}, status: ${result.status}`);
        }
        return await result.json();
    }
}

