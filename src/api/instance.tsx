import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://upayments-studycase-api.herokuapp.com',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmdpdGFrdW1hcmkwMDUwQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9TYW5naXRhLUt1bWFyaSIsImlhdCI6MTY2MzQwOTY4MCwiZXhwIjoxNjYzODQxNjgwfQ.lqkjXXGmWqPu_p-SWOJHMdp5vA5PK8fojha7XDGv-oM`,
    }
});

export default instance;
