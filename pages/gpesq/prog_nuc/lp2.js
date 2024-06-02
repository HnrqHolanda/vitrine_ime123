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
            <LpcontentC title="Defesa Radiológica e Nuclear" 
            resume1="Na Defesa Radiológica e Nuclear são desenvolvidos temas afetos à Física Nuclear Aplicada e ao controle das radiações em diferentes meios e situações, com ênfase no estudo dos impactos no ser humano e no meio ambiente. O enfoque é em materiais e sistemas para aplicações de uso dual que atendam às necessidades do Exército Brasileiro e contribuam para o desenvolvimento da sociedade. Para tanto, desenvolvem-se dissertações baseadas na análise de Safety e Security. Em Safety, são estudados métodos e técnicas de determinação de indicadores de condições preexistentes e impacto ambiental devido a modificações antropomórficas causadas em diferentes meios. Também são investigadas técnicas e métodos de detecção, monitoração e controle das radiações provenientes de fontes naturais e artificiais e suas aplicações. A radioproteção, dosimetria e blindagem das radiações são aplicadas à segurança dos indivíduos expostos aos diferentes tipos de radiações ionizantes, incluindo o estudo de materiais para blindagens radiológicas simples ou multilaminadas."
            resume2="Além disso, são exploradas aplicações industriais da radiação ionizante, como radiotraçadores, radiografia industrial, gamagrafia e medidores de nível. A irradiação de materiais e o desenvolvimento de programas computacionais utilizados em medidores e identificadores radiológicos para ações de DQBRN também são áreas de pesquisa. A Inteligência Artificial, Robótica e Automação são aplicadas no desenvolvimento de instrumentos operacionais para DQBRN, além da predição de efeitos do espalhamento de materiais radioativos e nucleares em incidentes ou acidentes através do uso de simulação computacional. Protocolos e procedimentos técnicos são desenvolvidos para a melhoria da qualidade metrológica de laboratórios de calibração de medidores de radiação, assim como métodos e técnicas para o emprego de radiofármacos, radioterapia e radiodiagnóstico em diferentes aplicações da medicina nuclear. Em Security, a pesquisa foca na segurança nuclear, incluindo a análise de acidentes, segurança física (proteção física, contabilidade e controle de material nuclear e defesa cibernética nuclear), segurança da informação, segurança de transporte, terrorismo nuclear e o estudo de sistemas de defesa nuclear."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}