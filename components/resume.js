import styles from "../styles/components/resume.module.css"
import Image from "next/image";
import Link from "next/link";

const ResumeC = ({mimage, Title, Sum, link}) => {
    return (

        <div className={styles.Container}>
                <div className={styles.Content}>
                    <Image src={mimage} style={{width: '21vw', height: '13vw'}} ></Image>
                    <div className={styles.Text}>
                    <Link href = {link} style={{textDecoration: "none"}}>
                        <h1>{Title}</h1>
                        <h3>{Sum}</h3>
                    </Link>
                    </div>
                </div>
        </div>

    )
  };
  
  export default ResumeC;