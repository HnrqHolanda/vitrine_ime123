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
            <LpcontentC title="Mecatrônica, Matéria Condensada e Sistemas de Armas" 
            resume1="Um dos elementos fundamentais dos sistemas de defesa são os sistemas de armas. A concepção, o projeto, a fabricação e o emprego tático dos sistemas de armas necessitam de uma visão global dos sistemas de defesa, tanto no que diz respeito ao fluxo de informações, quanto às características do teatro de operações que determinarão seu modo de emprego. O desenvolvimento de sistemas de armas modernos requer o conhecimento multidisciplinar e concorrente de diversos conhecimentos, especialmente de sistemas mecânicos e eletrônicos, daí a denominação Mecatrônica, além de outros, como por exemplo a química, no que se refere às reações altamente exotérmicas e escoamento altamente energéticos envolvidos em processos de propulsão de mísseis e foguetes. As diversas etapas da concepção de um sistema de armas são contempladas nas pesquisas desta Linha, sejam nos aspectos mais abrangentes, sejam naqueles mais específicos como o controle de um veículo aéreo não-tripulado (VANT) ou o planejamento de sua missão. Vários aspectos desenvolvidos nas demais linhas de pesquisa são importantes para integrar esses equipamentos em um Sistema de Defesa típico."
            resume2="Neste contexto, podem ser citados, por exemplo, os projetos de reconhecimento das características específicas do terreno do teatro de operações, de comunicações e de fluxo de informações com o centro de Comando e Controle da missão. Nesta LP são desenvolvidos projetos e pesquisas nas áreas de armamento, mecânica estrutural, sistemas de controle automático, navegação geodésica global e inercial, guiamento, dinâmica de sistemas, instrumentação, processamento de sinais, filtragem, propulsão, balística e demais assuntos correlatos, o que naturalmente envolverá profissionais de várias áreas de engenharia como mecânica, eletrônica, computação, cartografia, química e outras."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}