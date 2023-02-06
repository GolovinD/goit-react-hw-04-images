export default function pixabayApi(nextSearch, page) {
    
    const API_KEY = `31277829-041385667a49103701e539b4a`;

    return fetch(`https://pixabay.com/api/?q=${nextSearch}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
    
        if (response.ok) {
            // console.log(response);
             return response.json();
        }
        return Promise.reject(
            new Error(`Нажаль не знайдено зображень по запиту - ${nextSearch}`)
        )
    })
}