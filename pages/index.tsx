import ToDoForm from '../components/ToDoForm'
import ToDoList from "../components/ToDoList"

const Home = () => {
  return (
    <div>
      <h1>To do system</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  )
}

export default Home
