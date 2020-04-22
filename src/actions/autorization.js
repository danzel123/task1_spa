export const checkAuth = (login, password) => ({
    type: "CHECK_AUTH",
    payload: {login, password}
})