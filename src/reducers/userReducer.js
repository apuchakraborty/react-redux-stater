import { GET_USERS, DELETE_USER, ADD_USER } from '../actions/types'; 
const initialState = {
	//test: "TEST demo"
	users: [
              {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '+91 3521452195'
              },
              {
                id: 2,
                name: 'Mark',
                email: 'mark@gmail.com',
                phone: '+91 2226663332'
              },
              {
                id: 3,
                name: 'Henry',
                email: 'henry@gmail.com',
                phone: '+91 2363263263'
              }
            ]
};

export default function(state = initialState, action){
	switch(action.type){
		case GET_USERS:
		return{
			...state
		}
		case DELETE_USER:
		return{
			...state,
			users: state.users.filter(user => user.id !== action.payload)
		}
		case ADD_USER:
		return{
			...state,
			users: [action.payload, ...state.users]
		}
		default:
		return state;
	}
}