import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab2Page(){

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
            title='Laboratório de Sistemas de Informações Geográficas' 
            resume='Destina-se ao ensino e à pesquisa nas áreas de Banco de Dados Geográficos, Sistemas de Informações Geográficas e Análise Espacial (álgebra de mapas, estatística espacial, análise de redes e análise de dados geoespaciais fuzzy); ao desenvolvimento de aplicativos de Sistemas de Informações Geográficas; e ao apoio às aulas práticas das disciplinas de SIG e Banco de Dados Geográficos nos cursos de Graduação e Pós-graduação.'
            professores='Professores: Major Ivanildo.'
            contatos = "Contato: ivanildo@ime.eb.br"
            list={list}/>
        </div>
    )
}