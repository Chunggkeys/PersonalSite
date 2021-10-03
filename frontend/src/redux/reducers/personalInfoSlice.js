const initialState = {
    first: "",
    last: "",
    email: "",
    phone: ""
}

export default function personalInfoReducer(state=initialState, action) {
    switch (action.type) {
        case 'info/nameAdded': {
            return {
                ...state,
                first: action.payload.first,
                last: action.payload.last
            }
        }
        case 'info/contactAdded': {
            return {
                ...state,
                email: action.payload.email,
                phone: action.payload.phone
            }
        }
        default:
            return state
    }
}