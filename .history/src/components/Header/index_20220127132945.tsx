import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

export function Header() {
    const router = useRouter

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="DevNews!" />
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}