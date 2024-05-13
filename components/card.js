import styles from "../styles/components/card.module.css"
import Link from "next/link";
import Image from "next/image";

const CardC = ({mimage, title, link}) => {
    return (

        <div className={styles.Container}>
            <Link href = {link} className={styles.link} >
                <div className={styles.Content}>
                        <div className={styles.Img}>
                            <Image src={mimage} className={styles.Img}></Image>
                        </div>
                        <div className={styles.Text}>
                            <h1>{title}</h1>
                        </div>
                </div>
            </Link>
        </div>

    )
  };
  
  export default CardC;