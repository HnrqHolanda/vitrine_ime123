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
            <LpcontentC title="Sistemas de Comunicações" 
            resume1="Dispositivos e Sistemas Ópticos envolvem a análise de dispositivos para comunicações e sensores ópticos, além do desenvolvimento e caracterização de dispositivos ópticos integrados. Este campo também abrange a modelagem, simulação e desenvolvimento de sistemas com óptica no espaço livre (FSO) e sensores ópticos. O projeto e caracterização de sensores ópticos são áreas fundamentais de pesquisa. Sistemas Radar incluem a modelagem e simulação de transmissores e receptores radar, bem como a avaliação de desempenho de algoritmos de detecção e estimação de características de objetos refletores. Além disso, a caracterização de seção reta radar de alvos distribuídos e a caracterização de assinaturas e microdoppler de alvos distribuídos são estudadas. Analisam-se também técnicas de interceptação e de despistamento de formas de onda radar, o projeto de sistemas radar phased array, radares passivos, e o projeto e análise de formas de onda radar, incluindo Joint Communication and Sensing."
            resume2="Sistemas e Técnicas de Transmissão Digital focam na avaliação de desempenho de sistemas de comunicações e na modelagem e simulação de canais em nível físico e de enlace. A modulação e equalização para canais com desvanecimento, a transmissão multi-portadora (OFDM e suas variantes), e os sistemas rádio cognitivos são áreas-chave de estudo. Teoria Eletromagnética, Micro-ondas, Propagação de Ondas, Antenas e Sistemas de Telecomunicações englobam o estudo de antenas e canais de radiopropagação, circuitos de RF e micro-ondas, e compatibilidade eletromagnética. O dimensionamento de sistemas de rádio e as medidas de propriedades dielétricas de materiais também são áreas importantes dentro deste campo."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}