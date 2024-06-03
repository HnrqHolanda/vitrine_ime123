import styles from "../styles/components/footer2.module.css"
import Link from 'next/link'
import MyImage from "../public/Logo.png"
import Image from 'next/image';

const Footer2C = () => {
    return (

        <div className={styles.footer}>
            <div className={styles.footerbox}>
                <div className={styles.logo}>
                    <Image src={MyImage} className={styles.logoimg}></Image>
                </div>
                <div className={styles.links}>
                    <Link href="http://www.dct.eb.mil.br" className={styles.LinkEstilizado}>DCT</Link>
                    <Link href="https://www.ime.eb.mil.br" className={styles.LinkEstilizado}>IME</Link>
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
  
  export default Footer2C;