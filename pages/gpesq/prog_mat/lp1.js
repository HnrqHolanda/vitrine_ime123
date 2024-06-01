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
            <LpcontentC title="Materiais Metálicos" 
            resume1="Esta Linha de Pesquisa tem por objetivo estudar a microestrutura de metais e ligas metálicas e sua influência nas propriedades mecânicas desses materiais."
            resume2="Projetos nessa linha envolvem a influência da textura cristalográfica no comportamento anisotrópico de materiais metálicos, biomateriais metálicos, materiais de alta resistência mecânica e elevada condutividade elétrica e materiais compósitos de matriz metálica."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}