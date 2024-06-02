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
            <LpcontentC title="Química de Materiais e Materiais Energéticos" 
            resume1="A pesquisa na área de materiais tornou-se, nos últimos anos, uma área prioritária de pesquisa para as Forças Armadas e para a sociedade. Fruto desta motivação, esta linha de pesquisa se concentra na compreensão profunda dos fenômenos químicos ligados a novos materiais e aprimoramento de materiais conhecidos realizando atividades de pesquisa básica, desenvolvimento, avaliação e inovação."
            resume2="No contexto dos materiais de interesse destacam-se os materiais energéticos, reconhecidos pelo amplo uso em tecnologias militares e também em tecnologias de aplicação industrial bastante específica, como a indústria do petróleo, de mineração, da construção e aeroespacial. Os materiais energéticos abrangem os explosivos, propelentes e pirotécnicos na forma de compostos individuais ou misturas e que são caracterizados pela elevada velocidade de liberação de seu conteúdo energético. A intensidade e as condições termodinâmicas dos fenômenos típicos de materiais energéticos estabelecem um campo do saber bastante específico que não é encontrado na ampla literatura da área de química e, portanto, se tornam interesse para as pesquisas desenvolvidas no programa."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}