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
            <LpcontentC title="Materiais e Estruturas para Transportes" 
            resume1="Tem como objetivo estudar o comportamento de materiais e estruturas utilizados na infraestrutura de transportes."
            resume2="Além disso, busca desenvolver procedimentos para projetos e dimensionamentos de obras de arte correntes e especiais, como pontes, viadutos, passarelas, estruturas de apoio ao transporte e obras de pavimentação."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}