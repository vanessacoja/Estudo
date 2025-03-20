import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const user = true;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref className={styles.logo}>
          
            <Image 
              src="/assets/dogs.svg"
              alt="Dog"
              width={28} 
              height={22}
              priority
            />
          
        </Link>

        {user ? (
          <Link href="/account" passHref className={styles.login}>
            Minha Conta
          </Link>
        ) : (
          <Link href="/login" passHref  className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
