export default {
    getPhotos() {
        return fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=sold`).then((res) => res.json()).then((res) => {
            return res
        })
    },
    deleteObj(id) {
        return fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=pending/${id}/`, { method: 'DELETE', }).then((res) => res.json()).then((res) => {
            return res
        })
    },
}