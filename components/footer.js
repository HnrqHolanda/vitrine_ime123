import styles from "../styles/components/footer.module.css"
import Link from 'next/link'
import MyImage from "../public/Logo.png"
import Image from 'next/image';

const FooterC = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.footerbox}>
                <div className={styles.logo}>
                    <Image src={MyImage} className={styles.logoimg}></Image>
                </div>
                <div className={styles.links}>
                    <Link href="" className={styles.LinkEstilizado}>Company</Link>
                    <Link href="" className={styles.LinkEstilizado}>Product</Link>
                    <Link href="" className={styles.LinkEstilizado}>Help Center</Link>
                    <Link href="" className={styles.LinkEstilizado}>Resources</Link>
                    <Link href="" className={styles.LinkEstilizado}>Contact</Link>
                </div>
            </div>
            <div className={styles.footerbox2}>
                <div className={styles.line}></div>
                <p>Copyright &copy; 2024 Instituto Militar de Engenharia.</p>
            </div>
        </div>

    )
  };
  
  export default FooterC;