import HeaderC from "../../components/header"
import styles from "../../styles/pages/home.module.css"
import FooterC from "../../components/footer"
import Image from "next/image"
import BootstrapCarousel from '../../components/carousel'
import { bannerImages } from '../../data/pages/home/homearray'
import pic1 from "../../public/Img10.jpeg"

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
                        <h1>Áreas de pesquisa</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                    </div>
                    <div className={styles.board}>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia Química</div>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia da Computação</div>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia Mecânica</div>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia Cartográfica</div>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia de Materiais</div>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia de Fortificação</div>
                        </div> 
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia Eletrônica</div>
                        </div> 
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <div className={styles.text}>Engenharia de Telecomunicações</div>
                        </div> 
                    </div>


            </div>

            <FooterC />
        </div>
    )

}