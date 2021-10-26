import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "7fca7198-457b-49d1-9d95-e65a5077b01b"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 1) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data
			});
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data
			});
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
}