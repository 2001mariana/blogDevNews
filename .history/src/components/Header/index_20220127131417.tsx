import styles from './styles.module.scss'

export function Header() {
    return (
        <header className=>
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