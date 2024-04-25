import styles from "../styles/header.module.css"
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
                
                <Link href="" className={styles.LinkEstilizado}>Home</Link>
                <Link href="" className={styles.LinkEstilizado}>Atividades Militares</Link>
                <Link href="" className={styles.LinkEstilizado}>Atividades Acadêmicas</Link>
                <Link href="" className={styles.LinkEstilizado}>Iniciativas</Link>
                <Link href="" className={styles.LinkEstilizado}>Eventos</Link>

            </div>
            <div className={styles.searchbar}>
                <SearchBar/>
            </div>
        </div>

    )
  };
  
  export default HeaderC;