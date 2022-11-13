import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ToDoItem from './components/todoitem';
import todosData from './components/tododata';



function App() {

  return (

    todosData.map(item => < ToDoItem text = {
        item.text
      }
      />
    )
  );
}

export default App;