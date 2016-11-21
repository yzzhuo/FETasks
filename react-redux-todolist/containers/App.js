import React from 'react';
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends React.Component {
    render(){
        return (
            <div>
                <AddTodo onAddClick={text => 
                    console.log('add todo', text)
                } />
                <TodoList 
                    todos={[{
                        text: 'Use React and Redux to build a todoApp',
                        completed: true
                    }]} 
                    onTodoClick={todo => console.log('todo cliked', todo)}
                    />
                <Footer filter='SHOW_ALL'
                        onFilterChange={filter => 
                            console.log('filter change', filter)
                        } />
            </div>
            )
    }
}

export default App;