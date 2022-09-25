import {FC} from 'react'
import styles from "./index.module.css"; 

const Home : FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
         <ul className={styles.navbar_links} >
            <li className={styles.navbar_links_element} >Fake Drivers account</li>
            <li className={styles.navbar_links_element} >Generate Dispatch</li>
            <li className={styles.navbar_links_element} >Fake Drivers account</li>
            <li className={styles.navbar_links_element} >Fake Drivers account</li>
          </ul>  
      </div>
    </div>
  )
}

export default Home