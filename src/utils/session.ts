export const saveSession = (name: string, data: string) => {
	sessionStorage.setItem(name, data);
}

export const getSession = (name: string) => {
	return sessionStorage.getItem(name);
}

export const deleteSession = () => {
	sessionStorage.clear();
}