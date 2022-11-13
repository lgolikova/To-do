import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ToDoItem from './components/todoitem';
import todosData from './components/tododata';



function App() {

  return (
    <div className='todo-list'>
    {todosData.map(item => < ToDoItem text = {
        item.text
      }
      />
    )}
    </div>
  );
}

export default App;