import FooterC from "../components/footer"
import HeaderC from "../components/header"
import { bannerImages } from '../data/pub1/pub1array'
import BootstrapCarousel from '../components/carousel'
import Textpub1 from "../data/pub1/pub1text"
import styles from "../styles/pub.module.css"


export default function Pub1(){
    return(

        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.Content}>
                <BootstrapCarousel images={bannerImages}/>
                <Textpub1/>
            </div>
            <FooterC/>
        </div>
    )
}