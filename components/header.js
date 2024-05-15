import styles from "../styles/components/header.module.css"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyImage from "../public/Logo.png"

const HeaderC = () => {



    return (

        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={MyImage} className={styles.logoimg}></Image>
            </div>
            <div className={styles.links}>
                
                <Link href="http://localhost:3000/home/home" className={styles.LinkEstilizado}>Home</Link>
                <Link href="http://localhost:3000/grupesq/grupesq" className={styles.LinkEstilizado}>Grupos de Pesquisa</Link>
                <Link href="http://localhost:3000/cpint/cpint?query=" className={styles.LinkEstilizado}>Capital Intelectual</Link>
                <Link href="" className={styles.LinkEstilizado}>Propriedade Intelectual</Link>
                <Link href="http://localhost:3000/laboratorio/laboratorios" className={styles.LinkEstilizado}>Laboratórios</Link>
                <Link href="http://localhost:3000/parcerias/parcerias" className={styles.LinkEstilizado}>Seja um Parceiro do IME</Link>

            </div>
        </div>

    )
  };
  
  export default HeaderC;