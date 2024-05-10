import styles from "../styles/components/pub.module.css"
import HeaderC from "../components/header";
import FooterC from "../components/footer"
import BootstrapCarousel from '../components/carousel2'

const PubC = ({images, Textpub}) => {
    return (

        <div className={styles.Container}>
        <HeaderC/>
        <div className={styles.Content}>
            <BootstrapCarousel images={images}/>
            <Textpub />
        </div>
        <FooterC/>
        </div>

    )
  };
  
  export default PubC;