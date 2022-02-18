import styles from './sty'

export function Header() {
    return (
        <header>
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