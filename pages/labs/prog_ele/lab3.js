import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab3Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Câmara acústica.
        </li>
        <li style={{marginLeft: "20px"}}>
        Conversor A/D multicanal 
        </li>
        <li style={{marginLeft: "20px"}}>
        Eletroglotógrafo.  
        </li>
        <li style={{marginLeft: "20px"}}>
        Quadricóptero.  
        </li>
        </ul>

    return( 
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Processamento digital de sinais' 
            resume='Laboratório de Processamento Digital de Sinais: atende às necessidades de ensino e pesquisa na área de processamento de sinais, em particular com aquisição de sinais de áudio e localização de fontes emissoras. Possuindo altos recursos computacionais e processadores digitais de sinais (DSPs). '
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}