import styles from "../styles/components/header.module.css"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../components/searchBar'
import MyImage from "../public/Logo.png"

const HeaderC = () => {



    return (

        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={MyImage} className={styles.logoimg}></Image>
            </div>
            <div className={styles.links}>
                
                <Link href="http://localhost:3000/home/home" className={styles.LinkEstilizado}>Home</Link>
                <Link href="" className={styles.LinkEstilizado}>O Instituto</Link>
                <Link href="" className={styles.LinkEstilizado}>Novidades e Destaques</Link>
                <Link href="http://localhost:3000/parcerias/parcerias" className={styles.LinkEstilizado}>Seja um Parceiro do IME</Link>

            </div>
            <div className={styles.searchbar}>
                <SearchBar/>
            </div>
        </div>

    )
  };
  
  export default HeaderC;