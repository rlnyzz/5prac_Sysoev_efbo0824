import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUsers = () => apiClient.get("/users");
export const getUser = (id) => apiClient.get(`/users/${id}`);
export const createUser = (user) => apiClient.post("/users", user);
export const updateUser = (id, user) => apiClient.put(`/users/${id}`, user);
export const patchUser = (id, user) => apiClient.patch(`/users/${id}`, user);
export const deleteUser = (id) => apiClient.delete(`/users/${id}`);

const api = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    patchUser,
    deleteUser,
};

export default api;