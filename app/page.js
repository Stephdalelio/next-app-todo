import CreateToDo from "@/components/CreateToDo";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    
    <>
    <div className="container">
    <ToDoList />
    <CreateToDo />
    </div>
    </>
  )
}
