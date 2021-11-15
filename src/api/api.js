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
		console.warn('Obsolete method. Please profileAPI object')
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
		getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId) {
			return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status) {
			return instance.put(`profile/status`, { status: status });
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login() {
		return instance.post(`auth/login`)
	}
}