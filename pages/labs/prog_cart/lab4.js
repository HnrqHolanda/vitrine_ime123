import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab3Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        8 computadores
        </li>
        <li style={{marginLeft: "20px"}}>
        2 impressoras para grandes formatos (Plotter HP Designjet)
        </li>
        <li style={{marginLeft: "20px"}}>
        ArcGIS 
        </li>
        <li style={{marginLeft: "20px"}}>
        GvSIG  
        </li>
        <li style={{marginLeft: "20px"}}>
        QuantumGIS. 
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Cartografia' 
            resume='Destina-se ao desenvolvimento de trabalhos e pesquisas envolvendo a área de conhecimento Cartografia, com ênfase em Generalização, Simbolização, Visualização e Animação Cartográficas. O laboratório oferece infraestrutura para a realização de projetos acadêmicos e científicos, proporcionando um ambiente de aprendizado e inovação.'
            professores='Professores: Major Ivanildo.'
            contatos = "Contato: ivanildo@ime.eb.br"
            list={list}/>
        </div>
    )
}