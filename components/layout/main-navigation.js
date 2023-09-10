import Link from "next/link"
import Logo from "./logo"

import classes from "./main-navigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      {/* agar hum plain text nai dalte hai  to manual anchor tag dalna hoga
      but ye behaviour waise work nai kiya tha */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation
