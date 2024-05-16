import styles from "../styles/components/sidebar.module.css"
import { FaDesktop, FaBook, FaBolt, FaLaptop, FaAtom, FaFlask, FaMicroscope, FaMap, FaCog } from 'react-icons/fa';
import { Fade } from "react-bootstrap";
import { useState } from "react";

const SideBarC= () =>{
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (value) => {
        setSelectedButton(value);
        console.log(value)
      };

    
    return(
        <div className={styles.container}>

            <div className={styles.main}>
                <div className={styles.buttonEst}>
                    <button  onClick={() => handleButtonClick(1)} className={styles.button}><FaBook style={{marginRight:"10px", marginTop:"2px"}}/>SE-1</button>
                </div>
                <div className={styles.buttonEst}>
                    <button onClick={() => handleButtonClick(2)}  className={styles.button}><FaDesktop style={{marginRight:"10px", marginTop:"2px"}}/>SE-2</button>
                </div>
                <div className={styles.buttonEst}>
                    <button onClick={() => handleButtonClick(3)}  className={styles.button}><FaBolt style={{marginRight:"10px", marginTop:"2px"}}/>SE-3</button>
                </div>
                <div className={styles.buttonEst}> 
                    <button onClick={() => handleButtonClick(4)} className={styles.button}><FaMicroscope style={{marginRight:"10px", marginTop:"2px"}}/>SE-4</button>
                </div>
                <div className={styles.buttonEst}>
                    <button onClick={() => handleButtonClick(5)} className={styles.button}><FaFlask style={{marginRight:"10px", marginTop:"2px"}}/>SE-5</button>
                </div>
                <div className={styles.buttonEst}>
                    <button onClick={() => handleButtonClick(6)} className={styles.button}><FaMap style={{marginRight:"10px", marginTop:"2px"}}/>SE-6</button>
                </div>
                <div className={styles.buttonEst}>
                    <button onClick={() => handleButtonClick(7)} className={styles.button}><FaAtom style={{marginRight:"10px", marginTop:"2px"}}/>SE-7</button>
                </div>
                <div className={styles.buttonEst}>
                <button onClick={() => handleButtonClick(8)} className={styles.button}><FaCog style={{marginRight:"10px", marginTop:"2px"}}/>SE-8</button>
                </div>
                <div className={styles.buttonEst}>
                <button onClick={() => handleButtonClick(9)}  className={styles.button}> <FaLaptop style={{marginRight:"10px", marginTop:"2px"}}/>SE-9</button>
                </div>
                <div className={styles.buttonEst}>
                <button onClick={() => handleButtonClick(10)}  className={styles.button}><FaDesktop style={{ marginLeft:"10px", marginRight:"10px", marginTop:"2px"}}/>SE-10</button>
                </div>
            </div>
        </div>
    )
}

export default SideBarC

