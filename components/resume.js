import styles from "../styles/components/resume.module.css"
import Image from "next/image";

const ResumeC = ({mimage, TitleC, SumC}) => {
    return (

        <div className={styles.Container}>

            <div className={styles.Content}>
                <Image src={mimage}></Image>
                <div className={styles.Text}>
                    <TitleC />
                    <SumC />
                </div>
            </div>

        </div>

    )
  };
  
  export default ResumeC;