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
            <LpcontentC title="Comunicações, Computação, Cibernética e Inteligência" 
            resume1="Grande parte dos sistemas de defesa modernos dependem de subsistemas de comunicações, computação, cibernética e de tratamento da informação. Por exemplo, mísseis podem ter seu guiamento apoiado por recepção de sinais de GPS, o que envolve o uso de rádios e de funcionalidades de processamento de informações de localização geográfica. Sistemas de Comando e Controle, por sua vez, são fortemente dependentes de redes de dados e sistemas de comunicações, necessitando de diversas ferramentas de processamento e armazenamento da informação. O desenvolvimento e a operação desses Sistemas de Defesa exigem cada vez mais a integração de conhecimentos multidisciplinares, mormente das grandes áreas de Engenharias e Ciências Exatas e da Terra. Nesta linha de pesquisa, em particular, são tratados temas que envolvem as subáreas de Engenharia Elétrica, Ciências da Computação e Sistemas de dados, com foco em projetos de emprego integrado desses conhecimentos em Sistemas de Defesa."
            resume2="Esta Linha de Pesquisa (LP) engloba, portanto, projetos ligados a comunicações militares e aspectos científicos e tecnológicos na obtenção, análise, processamento e emprego de dados para geração de subsídios às ações de inteligência dos órgãos ou agentes de defesa. Ainda no escopo da linha se enquadram os aspectos de integração das soluções que envolvem eletrônica (em especial voltada para comunicações) e tratamento da informação nos sistemas de armas e outros sistemas de defesa. Parte das pesquisas aqui desenvolvidas se apóia em estudos de modelagem de problemas ou dispositivos complexos, bem como em simulações numéricas de desempenho e funciona­mento de sistemas. Dentre os temas de pesquisas no escopo desta LP destacam-se: modernização de rádios HF para comunicações militares, tecnologias ópticas (confinadas e de espaço livre) para redes estratégicas, ferra­mentas computacionais e infra-estrutura de redes de telecomunicações para apoio a ações de C3I (Comando, Controle, Comunicações e Inteligência), dispositivos e técnicas para Guerra Eletrônica e processamento de sinais de voz com foco em Segurança da Informação."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}