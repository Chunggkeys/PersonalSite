const initialState = {
    keyboardCase : "",
    formFactor : "",
    agreeToTerms : false,
    additionalNotes : "",
    lube : false,
    film : false,
    keycaps : "",
    showConfirmation : false,
    inventoryData : []
}

export default function buildReducer(state=initialState, action) {
    switch (action.type) {
        case 'build/switchInfoAdded': {
            return {
                ...state,
                lube: action.payload.lube,
                film: action.payload.film
            }
        }
        case 'build/keycapsAdded' : {
            return {
                ...state,
                keycaps: action.payload.keycaps
            }
        }
        case 'build/notesAdded' : {
            return {
                ...state,
                additionalNotes: action.payload.additionalNotes
            }
        }
        case 'build/caseAdded' : {
            return {
                ...state,
                keyboardCase: action.payload.keyboardCase
            }
        }
        default: 
            return state
    }
}