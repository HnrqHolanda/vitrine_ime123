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
            <LpcontentC title="Sistemas de Computação" 
            resume1="Esta linha tem como objetivo investigar técnicas, modelos e metodologias para a construção de sistemas computacionais que se caracterizam por aspectos de distribuição, automação, simulação, visualização e segurança."
            resume2="Temas de interesse desta linha de pesquisa incluem: Computação de Alto Desempenho, Computação Gráfica, Processamento de Imagens e Interação, Inteligência Computacional, Interação Homem-Computador, Processamento Paralelo e Distribuído, Redes de Computadores, Robótica e Automação, Segurança da Informação (Defesa Cibernética), Sistemas de Telecomunicações e Visualização."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}