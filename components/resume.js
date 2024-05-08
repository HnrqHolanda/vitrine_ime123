import styles from "../styles/components/resume.module.css"
import Image from "next/image";

const ResumeC = ({mimage, Title, Sum}) => {
    return (

        <div className={styles.Container}>

            <div className={styles.Content}>
                <Image src={mimage}></Image>
                <div className={styles.Text}>
                    <h1>{Title}</h1>
                    <h3>{Sum}</h3>
                </div>
            </div>

        </div>

    )
  };
  
  export default ResumeC;