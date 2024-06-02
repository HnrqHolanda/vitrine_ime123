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
            <LpcontentC title="Metodologia da Computação" 
            resume1="Esta linha tem como objetivo o desenvolvimento de modelos de sistemas computacionais, bem como técnicas para tratar e analisar esses modelos, abordando assuntos relacionados com Teoria da Computação e Matemática da Computação."
            resume2="Temas de interesse desta linha de pesquisa incluem: Lógica, Linguagens Formais e Autômatos, Computabilidade, Análise de Algoritmos, Algoritmos em Grafos, Teoria Espectral de Grafos e Otimização combinatória."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}