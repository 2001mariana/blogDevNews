import Link from 'next/link'
import { useRouter } from 'next/router'

import 'styles.module.scss'

export function Header() {
    const {asPath} = useRouter();

    return (
        <header className="container">
            <div className="content">
                <img src="/logo.svg" alt="DevNews!" />
                <nav>
                    <Link href="/">
                        <a className={asPath === '/' && "active}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={asPath === '/posts' && styles.active} >Posts</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}