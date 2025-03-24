import Image from "next/image";
import styles from './footer.module.css';
import logo from '../../../../Public/Assets/dogs-footer.svg'
export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <Image
                src={logo}
                alt="Dogs"
                width={28}
                height={22}
            />


        </footer>
    );
}