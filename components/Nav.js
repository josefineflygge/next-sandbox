import Link from "next/link";
import classes from "@/styles/main-navigation.module.css";
import Logo from "./Logo";
import Image from "next/image";

function Nav() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Learn</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank">
              <Image
                src="/images/site/next-logo.png"
                alt="Next.org"
                width={200}
                height={200}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
