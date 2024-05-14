import styles from "../styles/components/card.module.css"
import { useState } from "react";
import { FaArrowDown } from 'react-icons/fa';
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

const CardC = ({dataarray, title}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
    
        <div className={styles.Container}>
          <div className={styles.menu}>
              <div className={styles.text}>
                  <h1>{title}</h1>
              </div>
              <button onClick={() => setIsExpanded(!isExpanded)} className={styles.expandablebutton}>
                  <FaArrowDown />
              </button>
          </div>
            <div className={styles.menu2}>
                {isExpanded && 
              <div className={styles.links}> {dataarray.map((objeto, index) => (
                <div key={index} className={styles.sub}>
                  <span style={{ marginRight: '0rem' }}>&#8226;</span>
                  <Link href={objeto.link} className={styles.link}>{objeto.nome}</Link>
                </div>
              ))}</div>}
          </div>
        </div>

    )
  };
  
  export default CardC;