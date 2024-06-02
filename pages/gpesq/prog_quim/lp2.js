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
            <LpcontentC title="Química Medicinal, Defesa Química e Substâncias Bioativas" 
            resume1="Substâncias bioativas são as que apresentam qualquer propriedade em meios biológicos, podendo ser sintetizadas ou encontradas em fontes naturais, como em plantas, algas, esponjas e micro-organismos. Também estão presentes em fontes abundantes e desperdiçadas, como os resíduos da nossa agroindústria, onde o aproveitamento viabiliza a sustentabilidade dos processos industriais e incrementa a Bioeconomia. Naquelas já consumidas como alimentos ou plantas medicinais, a toxicidade costuma ser baixa, viabilizando o desenvolvimento de bioprodutos como cosméticos, perfumes, suplementos alimentares, aditivos industriais diversos ou mesmo fins para a saúde humana. Nesse último caso, as pesquisas realizadas no IME estão focadas tanto para a ação em doenças importantes como as doenças negligenciadas e o câncer, como também para a ação em antídotos contra armas químicas e biológicas, na área denominada Defesa Química."
            resume2="As pesquisas nessa linha são realizadas por métodos químicos tradicionais, como a síntese orgânica e a fitoquímica (que empregam métodos cromatográficos e espectroscópicos em busca de bioativos em extratos naturais), bioquímicos (com enzimas ou nos próprios meios biológicos, in vitro e in vivo) e físico-químicos (com ensaios computacionais que simulam as condições biológicas, in silico). O IME possui a expertise para atuar nessas áreas com estudos realizados tanto nos seus laboratórios como em outros centros de pesquisa de instituições militares localizadas no próprio Rio de Janeiro e outros parceiros de desenvolvimento tecnológico."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}