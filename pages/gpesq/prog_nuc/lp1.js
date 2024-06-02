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
            <LpcontentC title="Reatores Nucleares" 
            resume1="Esta linha de pesquisa busca estudar temas referentes aos diferentes tipos de reatores nucleares, destacando-se o estudo do núcleo do reator, transferência de calor em reatores, materiais e blindagem de reatores. As atividades de ensino e pesquisa em reatores nucleares estão principalmente vinculadas à Física de Reatores e Engenharia de Reatores. Na área de Física de Reatores, são estudados a análise de incertezas e sensibilidade, cinética espacial, códigos computacionais nucleares, parametrização de dados nucleares e análise do comportamento da seção de choque macroscópica em reatores."
            resume2="A Engenharia de Reatores abrange a transferência de calor, segurança de reatores e extensão de vida útil de centrais nucleares.

            Em relação aos Materiais Nucleares, a pesquisa inclui o enriquecimento, armazenamento e reprocessamento de combustíveis nucleares, além dos materiais da cadeia produtiva dos reatores nucleares.
            
            Por fim, a Tecnologia de Reatores Avançados e Inovadores foca em reatores modulares de pequeno porte, reatores rápidos, reatores térmicos e reatores refrigerados a gás com temperatura elevada (HTGR)."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}