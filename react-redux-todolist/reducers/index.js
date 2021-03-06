import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILTY_FILTER } from '../actions'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action){
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assgin({}, state, {
                todos: state.todos.map((todo, index) => {
                    if(index === action.index){
                        return Object.assgin({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
    default:
        return state
    }
}

function visibilityFilter(state = SHOW_ALL, aciton) {
    switch (action.type) {
        case SET_VISIBILTY_FILTER:
            return action.filter
        default:
            return state
    }
}
function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

export default todoApp