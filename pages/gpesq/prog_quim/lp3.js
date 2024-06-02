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
            <LpcontentC title="Energia, Catálise e Tecnologias Sustentáveis" 
            resume1="O uso intensivo de energia caracteriza a sociedade moderna. A demanda energética não para de crescer e o impacto ambiental da geração necessária para atender a esta demanda é severo, com destaque para a grande emissão de gases de efeito estufa e o consequente aquecimento global. Neste contexto, o estudo de novas formas de geração, de novos combustíveis e de tecnologias sustentáveis de menor impacto ambiental é crítico. Assim, as universidades e empresas vem investindo pesadamente em pesquisas em áreas como reciclagem de materiais, combustíveis alternativos derivados de biomassa, inclusive hidrogênio, produtos químicos obtidos por rotas verdes, novos materiais e novos desenhos de baterias e supercapacitores, entre outras. São pesquisas multidisciplinares, onde quase sempre o uso de catalisadores é parte importante para o desenvolvimento da aplicação."
            resume2="As principais pesquisas nessa linha são reciclagem de plásticos e rejeitos industriais e domésticos, geração e purificação de combustíveis líquidos e hidrogênio a partir de biomassa, síntese de novos catalisadores com ênfase em reações de hidrogenação e em sistemas bifuncionais, síntese de adsorventes para remoção de poluentes orgânicos e inorgânicos, síntese de novos materiais com propriedades elétricas diferenciadas."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}