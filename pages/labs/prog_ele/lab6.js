import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab6Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Analisador de Espectros Ópticos
        </li>
        <li style={{marginLeft: "20px"}}>
        Medidores de Potência Óptica
        </li>
        <li style={{marginLeft: "20px"}}>
        Máquina de Emendas por fusão  
        </li>
        <li style={{marginLeft: "20px"}}>
        Geradores de função, osciloscópios e multímetros digitais diversos (HP, Tektroniks, etc).
        </li>
        <li style={{marginLeft: "20px"}}>
        Software: VPI Transmission and Component Maker
        </li>
        <li style={{marginLeft: "20px"}}>
        Software: Optisystem
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Sistemas de Controle' 
            resume='Dedica-se à realização de pesquisas voltadas para o desenvolvimento e a avaliação de desempenho de sistemas de transmissão digital em diversos cenários de aplicação, tais como: comunicações móveis, comunicações via satélite e comunicações por enlaces ionosféricos. Entre outras atividades, tem desenvolvido pesquisas de equalizadores adaptativos para canais seletivos em frequência e variantes no tempo, receptores OFDM e modelagem de erros para avaliação de desempenho de protocolos de redes de comunicações.'
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}