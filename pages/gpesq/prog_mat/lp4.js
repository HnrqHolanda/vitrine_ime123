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
            <LpcontentC title="Materiais Poliméricos" 
            resume1="Esta Linha de Pesquisa tem por objetivo estudar as propriedades físico-químicas e mecânicas de materiais poliméricos."
            resume2="Projetos nessa linha envolvem novas matrizes poliméricas em materiais compósitos, aproveitamento de rejeitos industriais, blindagens balísticas baseadas em polímeros, uso de polímeros para contenção de resíduos tóxicos e radioativos, degradação de polímeros, biomateriais poliméricos e materiais poliméricos reforçados por fibras naturais."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}