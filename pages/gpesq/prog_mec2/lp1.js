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
            <LpcontentC title="Fenômenos Balísticos" 
            resume1="Fenômenos Balísticos é a linha de pesquisa da área de concentração em Armamento, dedicada a modelagem matemática e experimental, a simulação e a análise de fenômenos termofluidodinâmicos, sistemas térmicos e de estruturas."
            resume2="Os temas de interesse são Transferência de calor, Combustão, Métodos Analíticos e Numéricos, Termofluidodinâmica, Resistência e Seleção de Materiais, Aerodinâmica, Transferência de Calor e Massa, Dinâmica dos Fluidos Computacional e Turbulência."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}