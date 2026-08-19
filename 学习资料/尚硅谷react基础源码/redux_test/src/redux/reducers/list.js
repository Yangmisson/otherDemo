import { ADD_LIST } from '../constant'

const initState = ['React']
export default function countReducer(preState = initState, action) {
	const { type, data } = action
	switch (type) {
		case ADD_LIST:
			return [data, ...preState]
		default:
			return preState
	}
}