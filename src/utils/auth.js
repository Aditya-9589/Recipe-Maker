export const login = (email, password) => {
    if (email && password) {
        localStorage.setItem("user", JSON.stringify({ email }));
        return true;
    }
    return false;
};

export const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
};

export const logout = () => {
    localStorage.removeItem("user");
};
