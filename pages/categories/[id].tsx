import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '/styles/Categories.module.css'

const Categories: NextPage = () => {
    const router = useRouter();
    console.log(router.asPath);
    return (
      <div className={styles.container}>
        <main className={styles.main}>
        </main>
            {router.asPath === "/categories/1"? <h3>떙철이</h3> : <h3>떙철이 아님</h3>}
        <footer className={styles.footer}>
          
        </footer>
      </div>
    )
  }
  
  export default Categories