import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        1 espectrorradiômetro manual
        </li>
        <li style={{marginLeft: "20px"}}>
        1 câmara hiperespectral de varredura. 
        </li>
        <li style={{marginLeft: "20px"}}>
        5 licenças ENVI com ID.  
        </li>
        <li style={{marginLeft: "20px"}}>
        9 computadores.  
        </li>
        <li style={{marginLeft: "20px"}}>
        softwares livres e-Foto, Spring, RAT etc  
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Imageamento Digital' 
            resume='Destina-se a pesquisas relacionadas ao tratamento de imagens digitais de sensoriamento remoto e fotogrametria, bem como ao apoio a disciplinas de graduação e pós-graduação;'
            professores='Professores: Professor Matheus.'
            contatos = "Contato: matheus@ime.eb.br"
            list={list}/>
        </div>
    )
}