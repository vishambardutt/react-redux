let redux = require ('redux');
let createStore = redux.createStore;

let initialState = {
    loading: false,
    user: [],
    error: ''
}

let FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
let FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
let FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

let fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

let fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

let fetchUsersfailureRequest = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

let reducer = (state = initialState, action)=>{
    switch (action.type){
        case FETCH_USERS_REQUEST:
            {
                return {
                    ...state,
                    loading:true
                   
                }
            }

            case FETCH_USERS_SUCCESS:
                {
                    return {
                        ...state,
                        loading:false,
                        users: action.payload,
                        error:''
                    }
                }

                case FETCH_USERS_FAILURE:
                    {
                        return {
                            ...state,
                            loading:false,
                            users: [],
                            error:action.payload
                        }
                    }
    }

}

let store = createStore (reducer)