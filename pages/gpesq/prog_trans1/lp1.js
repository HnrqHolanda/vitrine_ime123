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
            <LpcontentC title="Planejamento e Operação dos Sistemas de Transportes" 
            resume1="Tem como objetivo estudar e desenvolver modelos e técnicas de planejamento dos transportes relacionados com a previsão da demanda, com o uso e a ocupação do solo, e com a integração dos diferentes modos de transporte e os aspectos econômicos envolvidos, a análise dos impactos ambientais provocados pela instalação e operação de projetos de transportes, legislação pertinente, métodos para avaliação e medidas mitigadoras das componentes do passivo ambiental criado."
            resume2="Desenvolver e aplicar métodos e técnicas de modelagem analítica, de heurísticas e de simulação computacional para avaliação de sistemas integrados de transporte e para o planejamento dos mesmos."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}