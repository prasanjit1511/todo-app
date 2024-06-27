import styles from './todoitem.module.css'

function Todoitem({ item , todos, setTodos }) {

  function handleDelete(item){
    console.log("Delete",item);
    setTodos(todos.filter((todo) => todo !== item))
  }

  function handleClick(name){
    // console.log("Item Text Click",item);
   const newArray = todos.map((todo)=> todo.name === name ? {...todo,done:!todo.done} : todo);
   setTodos(newArray)
   console.log(todos)
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
          <span className={className}  onClick={() => handleClick(item.name)}> {item.name} </span>  <span><button onClick={() => handleDelete(item)} className={styles.deleteButton}>X</button></span>
      </div>
      <hr className={styles.line}/>
    </div>
  )
}

export default Todoitem
