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
            <LpcontentC title="Automação, Controle e Operação de Sistemas" 
            resume1="Essa linha trata da pesquisa, do estudo e da validação de sínteses de controle nos domínios do tempo e da frequência, por meio de simulações ou a partir de implementações práticas. Envolve estudos em controle robusto, ótimo, adaptativo, não-linear e de técnicas inteligentes de controle, bem como o controle de sistemas lineares variantes no tempo. Realizam-se ainda estudos na área de identificação e otimização de sistemas físicos, modelagem e aplicações de técnicas de controle clássico e moderno. Além disso, são conduzidas pesquisas relacionadas ao controle e verificação de Sistemas a Eventos Discretos e Sistemas Híbridos, com aplicações voltadas para sistemas eletrônicos de defesa. O foco em sistemas elétricos de potência ocorre por meio de pesquisas que englobam, mas não se restringem à modelagem, análise, planejamento da operação, proteção e qualidade de energia elétrica. Tem por objetivo principal a formação de recursos humanos e a geração de conhecimento nos temas descritos a seguir. No Controle Supervisório de Sistemas a Eventos Discretos (SEDs), os estudos abrangem Sistemas de Controle Hierárquico, Controle de SEDs Temporizados, Controle Tolerante a Falhas, Model Checking e aplicações na Indústria 4.0, como Smart Factories, Sistemas Ciberfísicos, Internet das Coisas e Segurança Cibernética."
            resume2="Em Modelagem, Identificação e Otimização de Sistemas Dinâmicos, a pesquisa inclui Modelagem de Sistemas visando a aplicação de Técnicas de Controle Moderno, Identificação de Sistemas por Métodos no Domínio da Frequência, Identificação de Sistemas por Métodos no Domínio do Tempo, Métodos de Redução de Ordem de Modelos e Simulação de Sistemas Dinâmicos. No Controle Ótimo e Moderno, os estudos focam em Controle Ótimo, Controle Robusto a Incertezas Estruturadas e Não-Estruturadas, Controle Robusto Paramétrico com Base na Qualidade da Identificação Bayesiana, Controle Linear a Parâmetros Variáveis e Integral Quadratic Constraints (IQC) - teoria e aplicações. Finalmente, em Modelagem, Análise e Controle de Sistemas Elétricos de Potência, a pesquisa aborda Modelagem e Identificação de Sistemas, Análise e Controle a Pequenos Sinais, Estabilidade de Tensão, Detecção de Distúrbios Causados por Ataques Cibernéticos, Operação em Tempo Real e Planejamento da Operação, Dinâmica, Proteção e Controle, Qualidade de Energia Elétrica e Desempenho de equipamentos."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}