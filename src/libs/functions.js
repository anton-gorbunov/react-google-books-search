const isSet = (data) => {
    if (data) {
        return data;
    } else {
        return '';
    }
}
const isImage = (img) => {
    if (img === undefined) {
        return 'https://i.pinimg.com/736x/c0/ce/2f/c0ce2fe2c02313f47c0757a7be80ed6e.jpg';
    } else {
        return img.thumbnail
    }
}
const getStrFromArr = (arr) => {
    if(arr === undefined) {
        return '';
    } else if (arr instanceof Array){
        return arr.join(', ')
    } else {
        return arr;
    }
}
const getFirstCategory = (categories) => {
    if(categories === undefined) {
        return '';
    } else if (categories instanceof Array) {
        return categories[0];
    } else {
        return categories;
    }
}
const changeDate = (date) => {
    if (date === undefined) {
        return '';
    } else {
        return date.split('-').reverse().join('.');
    }
}
const getShortTitle = (str) => {
    if (str.length > 70) {
        return `${str.substr(0,100)}...`;
    } else {
        return str;
    }
}
const transformBooks = (book) => {
    return {
        id:book.id,
        category: getStrFromArr(book.volumeInfo.categories),
        title:isSet(book.volumeInfo.title),
        language:isSet(book.volumeInfo.language),
        authors:getStrFromArr(book.volumeInfo.authors),
        publishedDate:changeDate(book.volumeInfo.publishedDate),
        descr:isSet(book.volumeInfo.description),
        img:isImage(book.volumeInfo.imageLinks)
    }
}

export {
    transformBooks,
    getFirstCategory,
    getStrFromArr,
    getShortTitle
}