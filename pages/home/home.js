import HeaderC from "../../components/header"
import styles from "../../styles/pages/home.module.css"
import FooterC from "../../components/footer"
import Image from "next/image"
import BootstrapCarousel from '../../components/carousel1'
import { bannerImages } from '../../data/pages/home/homearray'
import image1 from "../../public/dsg.png"
import image2 from "../../public/DCT_Logo.gif"
import image3 from "../../public/Imbel.jpg"
import image4 from "../../public/ime-junior.png"
import image5 from "../../public/agr.png"
import image6 from "../../public/ufpe.png"
import YoutubePlayer from "../../components/videoYT"
import image7 from "../../public/eblog.jpg"

export default function Homepage() {

    return (

        <div className={styles.home}>

            <HeaderC />
            <div className={styles.Slider}>
                <div className={styles.Text1}>
                    <h1>Vitrine Tecnológica</h1>
                    <h3>Acompanhe os projetos do Instituto Militar de Engenharia. <br></br> A primeira escola de engenharia das américas.</h3>
                </div>
                <div class={styles.Carousel}>
                    <BootstrapCarousel images={bannerImages} />
                </div>
            </div>
            <div className={styles.Content2}>
                <div className={styles.view} >
                    <div className={styles.view2}>
                        <YoutubePlayer videoId="u1kEz8Z5JUc" />
                    </div>
                    <div className={styles.textview}>
                        <h1>Produções do Núcleo de TV</h1>
                        <h3>O IME E OS PROJETOS DE FOGUETE NO BRASIL</h3>
                        <p>O IME foi pioneiro em projetar foguetes no Brasil. Nós fomos resgatar essa história e mostrar que os foguetes do Instituto Militar de Engenharia foram longe! Agora, o instituto se prepara para novos voos.</p>
                    </div>
                </div>
                <div className={styles.view} style={{ paddingTop: "50px" }}>
                    <div className={styles.view2}>
                        <Image src={image7} className={styles.imgart}></Image>
                    </div>
                    <div className={styles.textview}>
                        <h1>Artigo em Destaque</h1>
                        <h3>A cooperação civil-militar em proveito do desenvolvimento de tecnologias críticas.</h3>
                        <p>Gen Galdino - Comandante do Instituto Militar de Engenharia</p>
                    </div>
                </div>
            </div>
            <div className={styles.Content} id="passabaixo">
                <div className={styles.Text2}>
                    <h1>Instituições Parceiras</h1>
                </div>
                <div className={styles.board}>
                    <Image className={styles.imginst} style={{ width: "95px" }} src={image2}></Image>
                    <Image className={styles.imginst} src={image1}></Image>
                    <Image className={styles.imginst} src={image5}></Image>
                    <Image className={styles.imginst} src={image3}></Image>
                    <Image className={styles.imginst} src={image4}></Image>
                    <Image className={styles.imginst} src={image6}></Image>
                </div>

            </div>

            <FooterC />
        </div>
    )

}