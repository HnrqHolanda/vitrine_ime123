import styles from "../styles/components/lp_content.module.css"
import HeaderC from "./header";
import FooterC from "./footer";


const LpcontentC = ({title, resume1, resume2, resume3, list1, list2}) => {
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.text}>
                <h1>{title}</h1>
                <h3>{resume1}</h3>
                <h3>{resume2}</h3>
                <h3>{resume3}</h3>
                <div className={styles.lists}>
                    <div className={styles.list1}>
                        {list1}
                    </div>
                    <div className={styles.list1}>
                        {list2}
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>
    )
}

export default LpcontentC;