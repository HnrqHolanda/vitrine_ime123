import BootStrapCarousel from '../components/carousel2'
import styles from "../styles/components/labperfil.module.css"
import HeaderC from './header'
import FooterC from './footer'

const Lab_perfilC = ({BannerImages, title, resume, professores, list}) =>{
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <BootStrapCarousel images={BannerImages}/>
                </div>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <h3>{resume}</h3>
                    <div className={styles.text2}>
                        <h3>{professores}</h3>
                        <h3>{list}</h3>
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>   
    )
}

export default Lab_perfilC;