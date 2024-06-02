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
            <LpcontentC title="Infraestrutura, Logística, Meio Ambiente, Geoinformação e Energia" 
            resume1="Esta Linha de Pesquisa tem abordagem interdisciplinar vinculada à Engenharia de Defesa, com vertentes em Infraestrutura, Logística, Meio Ambiente, Geoinformação e Energia. Os objetivos desta LP são: (Infraestrutura) estudar e desenvolver materiais e técnicas a serem empregadas no projeto, construção, manutenção e gerenciamento de obras de infraestrutura e também estudar e desenvolver processos e tecnologias integradas a serem empregadas em benefício da criação, utilização e atualização de modelos digitais de uma construção, de forma colaborativa, para aplicação direta à gerência do ciclo de vida do ambiente construído, seja ele relativo a obras verticais ou de infraestrutura; (Logística) estudar e desenvolver modelos e técnicas de planejamento logístico relacionados a previsão da demanda, com o uso e a ocupação do solo, e com a integração dos diferentes modos de transporte; (Meio Ambiente) analisar os impactos das mudanças climáticas e impactos ambientais associados a ações de engenharia, visando à sustentabilidade e preocupando-se com a preservação do meio ambiente; (Geoinformação)  ampliar a compreensão acerca dos diferentes fenômenos que ocorrem no espaço geográfico bem como a modelagem e representação da superfície terrestre utilizando geotecnologia, a qual engloba as áreas de Sensoriamento Remoto, Sistemas de Informações Geográficas, Cartografia Digital, Sistemas de Posicionamento Global e áreas correlatas; (Energia) desenvolver tecnologias, metodologias e algoritmos aplicados a sistemas de energia, com o objetivo de ampliar a capacidade, a confiabilidade, a disponibilidade e a qualidade no fornecimento e na geração de energia de distintas fontes, otimizando sua utilização."
            resume2="Nesta LP são desenvolvidos projetos e pesquisas prioritariamente nas áreas das engenharias civil, cartográfica, elétrica, química, nuclear, ambiental e computação."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}