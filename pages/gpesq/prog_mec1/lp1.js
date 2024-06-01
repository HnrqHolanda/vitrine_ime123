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
            <LpcontentC title="Dinâmica de Veículos Militares" 
            resume1="A linha de pesquisa em Dinâmica de Veículos Militares é dedicada à modelagem matemática e simulação do comportamento do veículo em terrenos firmes e/ou irregulares, envolvendo trafegabilidade e mobilidade, conforto, influência na precisão do disparo de armas."
            resume2="Os temas de interesse são Dinâmica de Multicorpos Rígidos e Flexíveis, Dinâmica de Veículos Terrestres, Veículos Autônomos, Métodos Numéricos, Ensaios de Veículos, Robótica de Manipuladores, Vibrações e Resistência dos Materiais."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}