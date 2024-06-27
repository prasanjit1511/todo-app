import styles from './footer.module.css'

function Footer({ completedTodos, totalTodos}) {

  return (
    <div className={styles.footer}>
     <span className={styles.item} >Completed todos: {completedTodos}</span>
     <span className={styles.item} >Total todos: {totalTodos}</span>
    </div>

  )
}

export default Footer
