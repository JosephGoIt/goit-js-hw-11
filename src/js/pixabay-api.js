export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "42872675-364989bcac8f0c57b2db4a522";

export const options = {
    params: {
        key: API_KEY,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
    }
};