import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.container}>
            <div>
                <img src="/logo.svg" alt="DevNews!" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
            </div>
        </header>
    )
}