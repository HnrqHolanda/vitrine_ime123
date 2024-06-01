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
            <LpcontentC title="Materiais Cerâmicos" 
            resume1="Esta Linha de Pesquisa tem por objetivo a síntese, processamento e caracterização de materiais cerâmicos, bem como o estudo das propriedades mecânicas desses materiais."
            resume2="Projetos nessa linha envolvem materiais cerâmicos avançados, biomateriais cerâmicos e materiais compósitos de matriz cerâmica."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}