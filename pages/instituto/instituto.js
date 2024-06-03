import styles from '../../styles/pages/instituto.module.css'
import HeaderC from '../../components/header'
import Image from 'next/image'
import ime from '../../public/constru1.jpeg'
import FooterC from '../../components/footer'
import { useState } from 'react';


export default function parceriaPage(){
    return(
        

        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.main}>
                    <div className={styles.Content}>
                        <div className={styles.Text}>
                            <h1>O instituto</h1>
                            <h3>O IME é um estabelecimento de ensino do Departamento de Ciência e Tecnologia (DCT) responsável, no âmbito do Exército Brasileiro, pelo ensino superior de Engenharia e pela pesquisa básica.</h3>
                        </div>
                        <div className={styles.Board}>
                            <Image src={ime} style={{width: '45vw', height:'28vw', border: '4px solid white'}}></Image>
                        </div>
                    </div>
            </div>
            <div className={styles.content2}>
                <div className={styles.title}>
                    <h1>Filosofia</h1>
                </div>
                <div className={styles.Boxes}>
                    <div className={styles.box}>
                        <h1>Missão</h1>
                        <p>"Formar, especializar e aperfeiçoar pessoal em nível superior no campo científico-tecnológico e cooperar, pelo ensino e pela pesquisa, para o progresso do Exército Brasileiro e do país."</p>
                    </div>
                    <div className={styles.box}>
                        <h1>Visão</h1>
                        <p>"Ser reconhecido, nacional e internacionalmente, como um Centro de Excelência no Ensino e na Pesquisa em Ciência e Tecnologia."</p>
                    </div>
                    <div className={styles.box2}>
                        <h1>Valores</h1>
                        <div className={styles.list}>
                            <ul>
                                <li>Hierarquia e Disciplina</li>
                                <li>Humanização</li>
                                <li>Qualidade de Ensino e Pesquisa</li>
                                <li>Ética</li>
                                <li>Competência Profissional</li>
                                <li>Espírito de Liderança</li>
                                <li>Pioneirismo</li>
                                <li>Patriotismo</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.topics}>
                    <h1>História</h1>
                    <div className={styles.topic}>
                        <h2>Criação da Real Academia</h2>
                        <p>A história do IME remonta ao ano de 1792, quando, por ordem de Dona Maria I, Rainha de Portugal, foi instalada, na cidade do Rio de Janeiro, a Real Academia de Artilharia, Fortificação e Desenho. Essa foi a primeira escola de engenharia das Américas e terceira do mundo, sendo instalada na Casa do Trem de Artilharia, na Ponta do Calabouço, onde atualmente funciona o Museu Histórico Nacional.</p>

                    </div>
                    <div className={styles.topic}>
                        <h2>A única escola de Engenharia do País</h2>
                        <p>A Academia Real Militar (1811) mudou de nome quatro vezes: Imperial Academia Militar, em 1822; Academia Militar da Corte, em 1832, Escola Militar, em 1840 e Escola Central, a partir de 1858. Ali se formavam não apenas Oficiais do Exército, mas, principalmente engenheiros, militares ou civis, pois a Escola Central era a nossa única escola de Engenharia existente no Brasil.</p>
                    </div>
                    <div className={styles.topic}>
                        <h2>Centro de Excelência</h2>
                        <p>O Instituto destaca-se por ter formado inúmeras gerações de engenheiros, civis e militares, que muito contribuíram para o desenvolvimento nacional, não só no desempenho exclusivo da atividade profissional, mas também na qualidade de professores ou mesmo de fundadores de instituições de ensino espalhadas pelo imenso Brasil.</p>
                        <p>O domínio das mais variadas tecnologias tornou-se fator determinante no desenvolvimento e soberania das nações. Por isso, as atividades de ensino e de pesquisa desenvolvidas pelo IME são estratégicas e vitais para um país vocacionado a ser uma potência mundial. Reconhecido como um centro de excelência no ensino da engenharia, o IME possui um indelegável compromisso de formar recursos humanos altamente qualificados para atender as necessidades nacionais.</p>
                        <p>Para conduzir essa árdua tarefa, o IME conta com um Corpo Docente do mais alto nível, composto por professores, mestres e doutores de reconhecida reputação acadêmica, muitos deles pós-graduados em instituições estrangeiras.Devido ao seu potencial, muitas vezes o Instituto é chamado a participar de estudos e de pesquisas nas esferas governamental e privada, visando o desenvolvimento dos mais variados projetos.</p>
                    </div>
                    <div className={styles.topic}>
                        
                    </div>
                    <div className={styles.topic}>
                        
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>
    )
}