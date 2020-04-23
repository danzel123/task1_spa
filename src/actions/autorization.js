export const checkAuth = (login, password) => ({
    type: "CHECK_AUTH",
    payload: {login, password}
})
export const logOff = () => ({
    type: "LOG_OFF",
})