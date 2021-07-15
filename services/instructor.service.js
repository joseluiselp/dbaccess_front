import { apiUrl } from '../config';
import { fetchWrapper } from '../helpers';

export const instructorService = {
    getAll,
    getById,
    getByName,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/instructors`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function getByName(name) {
    return fetchWrapper.get(`${baseUrl}/name/${name}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
