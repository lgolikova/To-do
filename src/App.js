import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ToDoItem from './components/todoitem';



function App() {
  return (
    <div>
      {/* <Header /> */}
      <div className='todo-list'>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
