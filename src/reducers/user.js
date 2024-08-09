import { user } from "./store";

export const login = (state=user, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                user: {
                    userLoggedIn: true,
                    user: action.payload,
                },
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                user: {
                    userLoggedIn: false,
                    user: null,
                },
            };
        }
        default:
            return state;
    }
}