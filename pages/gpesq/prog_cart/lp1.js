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
            <LpcontentC title="Imageamento Digital" 
            resume1="A linha de pesquisa de Imageamento Digital tem por objetivos específicos o processamento, a análise de imagens digitais e a compreensão de cenas, com base nos dados provenientes de sensores ativos e passivos, em todos os seus níveis de aquisição. Destaca-se, nesta linha, a correção de distorções radiométricas e geométricas em imagens digitais por meio de técnicas de fotogrametria, o emprego de sensores hiperespectrais e de imagens multitemporais multisensores para a melhor compreensão da dinâmica de uso e cobertura da terra."
            resume2="O uso do imageamento orbital permite a obtenção contínua de informações de toda a superfície do País com intervalos regulares de poucos dias ou até de horas, tornando importante o domínio dos métodos de obtenção de informações georreferenciadas a partir de um imenso volume de dados espaciais amplamente disponíveis atualmente, devido à crescente tecnologia de satélites e das plataformas baseadas em drone (VARP ou VANT)."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}