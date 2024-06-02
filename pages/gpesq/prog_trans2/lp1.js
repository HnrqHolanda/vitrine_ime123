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
            <LpcontentC title="Infraestrutura dos Sistemas de Transportes" 
            resume1="Tem como objetivo estudar e desenvolver materiais e técnicas a serem empregadas no projeto, construção, manutenção e gerenciamento de estradas, ferrovias, hidrovias, dutovias, portos e aeroportos."
            resume2="Estudar e projetar estruturas, hidráulica fluvial, obras hidroviárias, obras rodoviárias, obras ferroviárias e obras portuárias, além de estudar viabilidades técnica, econômica e ambiental."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}