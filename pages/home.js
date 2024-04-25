import HeaderC from "../components/header"
import styles from "../styles/home.module.css"
import FooterC from "../components/footer"
import pic4 from "../public/Img4.JPG"
import pic5 from "../public/ab.jpg"
import pic6 from "../public/img6.JPG"
import pic7 from "../public/img7.jpg"
import Image from "next/image"
import BootstrapCarousel from '../components/carousel'
import { bannerImages } from '../data/homearray'

export default function Homepage(){

    return(

        <div className={styles.home}>

            <HeaderC />
            <div className={styles.Slider}>
                <div className={styles.Text1}>
                    <h1>Acomponhe as Atividades</h1>
                    <h1>Do Instituto Militar de Engenharia</h1>
                    <h3>A primeira escola de engenharia das americas</h3>
                </div>
                <div class={styles.Carousel}>
                    <BootstrapCarousel images={bannerImages}/>
                </div>
            </div>
            <div className={styles.Content}>
                <div className={styles.Text2}>
                    <h1>Sobre o nosso Instituto</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                </div>
                <div className={styles.board}>
                <div className={styles.boardpic1}>
                    <Image src={pic7} className={styles.pic}></Image>
                </div>
                <div className={styles.boardpic2}>
                    <Image src={pic5} className={styles.pic}></Image>
                </div>
                <div className={styles.boardpic3}>
                    <Image src={pic6} className={styles.pic}></Image>
                </div>
                <div className={styles.boardpic4}>
                    <Image src={pic4} className={styles.pic}></Image>
                </div>
            </div>


            </div>

            <FooterC />
        </div>
    )

}