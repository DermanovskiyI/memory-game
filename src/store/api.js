import axios from 'axios';

export const fetchPics = (type) => axios.get(`https://pixabay.com/api/?key=21981461-82783dc7d980b24f3d6ebf216&q=${type}&image_type=photo`);
export default {};
