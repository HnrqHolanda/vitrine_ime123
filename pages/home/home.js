import HeaderC from "../../components/header"
import styles from "../../styles/pages/home.module.css"
import FooterC from "../../components/footer"
import Image from "next/image"
import BootstrapCarousel from '../../components/carousel1'
import { bannerImages } from '../../data/pages/home/homearray'
import pic1 from "../../public/labquim1.jpeg"
import { MdComputer } from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';
import { FaCog, FaMap } from 'react-icons/fa';
import { IoIosFlask} from 'react-icons/io';
import { GiMolecule } from 'react-icons/gi';
import { FiRadio } from 'react-icons/fi';
import { IoIosGitNetwork } from 'react-icons/io';
import Link from "next/link"

export default function Homepage(){

    return(

        <div className={styles.home}>

            <HeaderC />
            <div className={styles.Slider}>
                <div className={styles.Text1}>
                    <h1>Acompanhe as Atividades</h1>
                    <h1>Do Instituto Militar de Engenharia</h1>
                    <h3>A primeira escola de engenharia das americas</h3>
                </div>
                <div class={styles.Carousel}>
                    <BootstrapCarousel images={bannerImages}/>
                </div>
            </div>
            <div className={styles.Content} id="passabaixo">
                    <div className={styles.Text2}>
                        <h1>Áreas de pesquisa</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                    </div>
                    <div className={styles.board}>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed1" style={{textDecoration: "none"}}>
                                <div className={styles.button}> 
                                    <div className={styles.btnicon}>
                                        <GiMolecule/>
                                    </div> 
                                    Engenharia Química
                                </div>
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed2" style={{textDecoration: "none"}}>
                                <div className={styles.button}>
                                    <div className={styles.btnicon}>
                                        <MdComputer/>
                                    </div>
                                    Engenharia da Computação
                                </div>
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed3" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}>
                                    <FaCog/>
                                </div> 
                                 Engenharia Mecânica
                            </div>
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed4" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}>
                                    <FaMap />
                                </div> 
                                    Engenharia Cartográfica
                                </div>
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed5" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}> 
                                    <IoIosFlask />
                                </div>
                                Engenharia de Materiais
                            </div>
                            </Link>
                        </div>
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed6" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}>
                                    <RiBuilding2Line /> 
                                 </div> 
                                 Engenharia de Fortificação
                            </div>
                            </Link>
                        </div> 
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed3" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}> 
                                    <IoIosGitNetwork /> 
                                </div> 
                                Engenharia Eletrônica
                            </div>
                            </Link>
                        </div> 
                        <div className={styles.card}>
                            <Image src={pic1} className={styles.Ap}></Image>
                            <Link href="http://localhost:3000/feeds/feed3" style={{textDecoration: "none"}}>
                            <div className={styles.button}> 
                                <div className={styles.btnicon}> <FiRadio/> </div>
                                 Engenharia de Telecomunicações
                            </div>
                            </Link>
                        </div> 
                    </div>

            </div>

            <FooterC />
        </div>
    )

}