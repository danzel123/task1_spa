//Это редуктор
//начальное состояние
const initialState = {
    isAuth: false,
    login: "a",
    password: '1',
    PasswordUser: '',
    loginUser: ''
}
//создаем сам редуктор
export default (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_AUTH":
            return {
                ...state,
                isAuth: state.login === action.payload.login && state.password === action.payload.password,
            }
        default:
            return state;
    }

}