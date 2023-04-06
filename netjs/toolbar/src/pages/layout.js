import Link from "next/link";
// import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
         About Us
          </Link>
        </li>
        <li>
          <Link href="/blog">
           Blog
          </Link>
        </li>
        
      </ul>
      
    </div>
  );
}