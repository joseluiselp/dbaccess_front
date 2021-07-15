const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'https://tranquil-sands-36233.herokuapp.com/api' // development api
    : 'https://tranquil-sands-36233.herokuapp.com/api'; // production api

export {
    apiUrl
};