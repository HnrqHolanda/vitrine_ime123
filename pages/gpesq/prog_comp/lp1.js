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
            <LpcontentC title="Engenharia de Sistemas e Informação" 
            resume1="Esta linha tem como objetivo o desenvolvimento de conceitos, modelos, técnicas e processos para o desenvolvimento de tecnologias e de sistemas de informação."
            resume2="Temas de interesse desta linha de pesquisa incluem: Banco de Dados, Bioinformática, Educação à Distância, Engenharia de Software, Inteligência Artificial, Mineração de Dados e de Texto e Modelagem Conceitual."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}