//Это редуктор
//начальное состояние
const initialState = {
    isAuth: false,
    login: "a",
    password: '1',
    activeItemMenu: 'home'
}
//создаем сам редуктор
export default (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_AUTH":
            return {
                ...state,
                isAuth: state.login === action.payload.login && state.password === action.payload.password,
            }
        case "LOG_OFF":
            return {
                ...state,
                isAuth: false,
                activeItemMenu: 'home'
            }
        case "CHANGE_ACTIVE_ITEM":
            return {
                ...state,
                activeItemMenu: action.payload
            }
        default:
            return state;
    }

}