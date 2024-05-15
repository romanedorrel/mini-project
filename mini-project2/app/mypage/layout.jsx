import styles from '../page.module.css'
import NavBar from '@/components/NavBar'

export default function AppLayout({children}) {
    return <main className={styles.main}><NavBar/>
        {children}
    </main>
}