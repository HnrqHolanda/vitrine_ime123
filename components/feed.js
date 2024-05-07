import styles from "../styles/components/feed.module.css"
import HeaderC from "../components/header";
import FooterC from "../components/footer"
import BootstrapCarousel from '../components/carousel'

const FeedC = () => {
    return (

        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.Text1}>
                <h1>
                    
                </h1>
                <h3>

                </h3>
            </div>
            <div className={styles.Content}>

            </div>
            <FooterC/>
        </div>

    )
  };
  
  export default FeedC;