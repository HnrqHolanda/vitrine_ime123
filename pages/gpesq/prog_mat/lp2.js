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
            <LpcontentC title="Materiais Eletrônicos" 
            resume1="Esta Linha de Pesquisa tem por objetivo produzir materiais para aplicação em dispositivos eletrônicos e correlacionar as propriedades elétricas, ópticas e magnéticas desses materiais com a sua microestrutura."
            resume2="Projetos nessa linha vêm sendo desenvolvidos nas áreas de filmes finos para células solares, filmes finos para filtros ópticos e nanopartículas magnéticas para aplicações biomédicas e de engenharia."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}