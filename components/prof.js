import styles from "../styles/components/prof.module.css"
import Image from "next/image";
import Link from "next/link";

const ProfC = ({mimage, Name, link, sum}) => {
    return (
            <div className={styles.background}>
                <Link href = {link} style={{textDecoration: "none"}}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src={mimage} className={styles.img2}></Image>
                        </div>
                        <div className={styles.text}>
                            <h1>{Name}</h1>
                            <h3 style={{fontStyle: "italic"}}>{sum}</h3>
                        </div>
                    </div>
                </Link>
            </div>
    )
  };
  
  export default ProfC;