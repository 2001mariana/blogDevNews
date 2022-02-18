import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="DevNews!" />
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="#">
                        <a>Posts</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}