function signupReducer(state,action){
    switch (action.type) {
        case 'username':
            return {
                ...state,
                username:action.payload
            }
        case 'email':
            return {
                ...state,
                email:action.payload
            }
        case 'mobile':
            return {
                ...state,
                mobile:action.payload
            }
        case 'password':
            return {
                ...state,
                password:action.payload
            }
        case 'error':
            return {
                ...state,
                error:action.payload
            }
        default:
            break;
    }
}

export default signupReducer
