import axios from "axios";

export default function getImagesByQuery(query){
return axios.get(`https://pixabay.com/api/`, {
  params: {
    key: '53395315-8c17e52e5e4d7b2c0ffc17b33',
    q: query,
    image_type: 'photo',
    safesearch: true,
    orientation: 'horizontal'
  }
 }).then(response => response.data)
}

