import Image from 'next/image';
import HeaderC from '../../components/header';
import styles from '../../styles/pages/prop_intelectual.module.css'
import graph1 from '../../public/patentes.png'
import graph2 from '../../public/computer_programs.png'
import { _patentes, _registros } from './model';
import FooterC from '../../components/footer';
import { useState } from 'react';

export default function PropIntelectual() {
    const [selectedYear, setSelectedYear] = useState(2021);
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];   

    return (

        <div className={styles.Container}>
            <HeaderC />
            <div className={styles.main}>
                <div className={styles.board}>
                    <div className={styles.Text}>
                        <h1>Propriedade Intelectual</h1>
                    </div>
                    <div className={styles.pics}>
                        <div className={styles.card}>
                            <Image src={graph1} className={styles.boardimg} style={{marginBottom:"10px"}}></Image>
                            <p>Registro de Patentes ao longo dos anos</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={graph2} className={styles.boardimg} style={{marginBottom:"10px"}}></Image>
                            <p>Registro de Software ao longo dos anos</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className={styles.tk}>
                <div className={styles.tk2}>
                    <div className={styles.list}>
                        <div className={styles.list2}>
                            <div className={styles.select}>
                                <h1>Listagem por ano</h1>
                                <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))} style={{ width: '20%', padding: '10px' }}>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content1}>
                        <div className={styles.Text2}>
                            <h2>Patentes:</h2>
                        </div>
                        <div className={styles.types}>
                            <h3>Concedidas</h3>
                            <ul>
                                {_patentes.concedidas[selectedYear].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                            </ul>
                        </div>
                        <div className={styles.types}>
                            <h3>Depositadas</h3>
                                <ul>
                                    {_patentes.depositadas[selectedYear].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                                </ul>
                        </div>
                    </div>
                    <div className={styles.content1}>
                        <div className={styles.Text2}>
                            <h2>Registros de Programa:</h2>
                        </div>
                        <div className={styles.types}>
                                <ul>
                                    {_registros[selectedYear].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>
    );
}