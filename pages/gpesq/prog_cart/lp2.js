import PubC from "../../../components/pub"
import Textpub1 from "../../../data/pubs/pub1/pub1text"
import { bannerImages } from "../../../data/pubs/pub1/pub1array"
import LpcontentC from "../../../components/lp_content"



export default function lp1page(){

    const list1 = <ul>Docentes:
    <li style={{marginLeft: "20px"}}>
    a
    </li>
    <li style={{marginLeft: "20px"}}>
    b
    </li>
    <li style={{marginLeft: "20px"}}>
    c
    </li>
    <li style={{marginLeft: "20px"}}>
    d
    </li>
    <li style={{marginLeft: "20px"}}>
    e 
    </li>
    </ul>

    const list2 = <ul>Artigos:
    <li style={{marginLeft: "20px"}}>
    a
    </li>
    <li style={{marginLeft: "20px"}}>
    b
    </li>
    <li style={{marginLeft: "20px"}}>
    c
    </li>
    <li style={{marginLeft: "20px"}}>
    d
    </li>
    <li style={{marginLeft: "20px"}}>
    e
    </li>
    </ul>

    return(
        <div>
            <LpcontentC title="Modelagem e Representação Terrestres" 
            resume1="A linha de pesquisa de Modelagem e Representação Terrestres tem por objetivos específicos o desenvolvimento de diversos métodos e técnicas de coleta, tratamento e processamento de dados geodésicos provenientes de modernos sistemas de navegação, associados aos contextos de sistemas e de redes geodésicas, referente às suas componentes planimétricas e altimétricas."
            resume2="Nas áreas de Cartografia, destaca-se o uso de Sistemas de Informações Geográficas e a execução de análises espaciais com o emprego de técnicas cartográficas, matemáticas e estatísticas, bem como a realização de pesquisas em cartografia colaborativa, tátil e histórica, generalização cartográfica, visualização cartográfica em ambiente tridimensional e geração de protótipos com fins militares."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}