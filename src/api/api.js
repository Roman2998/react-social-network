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
	getProfile(userId) { ///////////////////////////////
	return profileAPI.getProfile(userId);
}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
	updateProfile(profile) {
		return instance.put(`profile/`, profile)
			.then(response => response.data); ///////;
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data);////
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status})
			.then(response => response.data);////
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha});
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}