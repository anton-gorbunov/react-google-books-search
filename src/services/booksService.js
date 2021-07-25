export default class BooksService {
    _apiKey = 'apiKey=AIzaSyBt4OMoKgOsW2w2-Q4OvA86lC_Y1D1od_4';
    _apiBase = 'https://www.googleapis.com/books/v1/volumes';

    getResource = async(url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Could not fetch url: ${url}, status: ${result.status}`);
        }
        return await result.json();
    }
    getBooks = async({searchValue, sort, category}, booksIndex) => {
        const categories = category === 'all' ? '' : `+subject=${category}`;
        const result = await this.getResource(`${this._apiBase}?q=${searchValue}${categories}&orderBy=${sort}&${this._apiKey}&startIndex=${booksIndex}&maxResults=30`);
        if (!result.items) {
            return null;
        }
        return await result;
    }
    getBook = async(id) => {
        const result = await this.getResource(`${this._apiBase}/${id}?${this._apiKey}`);
        return await result;
    }
}