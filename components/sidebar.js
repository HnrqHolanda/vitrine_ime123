import Link from "next/link"
import styles from "../styles/components/sidebar.module.css"
import { FaDesktop, FaBook, FaBolt, FaLaptop, FaAtom, FaFlask, FaMicroscope, FaMap, FaCog } from 'react-icons/fa';
import { Fade } from "react-bootstrap";

const SideBarC= () =>{
    return(
        <div className={styles.container}>
<<<<<<< Updated upstream

=======
            <div className={styles.main}>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaBook style={{marginRight:"10px", marginTop:"2px"}}/>SE-1</Link>
                </div>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaDesktop style={{marginRight:"10px", marginTop:"2px"}}/>SE-2</Link>
                </div>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaBolt style={{marginRight:"10px", marginTop:"2px"}}/>SE-3</Link>
                </div>
                <div className={styles.LinkEst}> 
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaMicroscope style={{marginRight:"10px", marginTop:"2px"}}/>SE-4</Link>
                </div>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaFlask style={{marginRight:"10px", marginTop:"2px"}}/>SE-5</Link>
                </div>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaMap style={{marginRight:"10px", marginTop:"2px"}}/>SE-6</Link>
                </div>
                <div className={styles.LinkEst}>
                    <Link href="http://localhost:3000/home/home" className={styles.link}><FaAtom style={{marginRight:"10px", marginTop:"2px"}}/>SE-7</Link>
                </div>
                <div className={styles.LinkEst}>
                <Link href="http://localhost:3000/home/home" className={styles.link}><FaCog style={{marginRight:"10px", marginTop:"2px"}}/>SE-8</Link>
                </div>
                <div className={styles.LinkEst}>
                <Link href="http://localhost:3000/home/home" className={styles.link}> <FaLaptop style={{marginRight:"10px", marginTop:"2px"}}/>SE-9</Link>
                </div>
                <div className={styles.LinkEst}>
                <Link href="http://localhost:3000/home/home" className={styles.link}><FaDesktop style={{ marginLeft:"10px", marginRight:"10px", marginTop:"2px"}}/>SE-10</Link>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>
    )
}

export default SideBarC

