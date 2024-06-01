import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Computadores de alto desempenho, que possibilitam o desenvolvimento de pesquisa em modelagem numérica a nível internacional.
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Metereologia Aplicada' 
            resume='O Laboratório de Meteorologia Aplicada e Redução de Riscos e Prevenção de Desastres Naturais (LAMP) foi criado em 2020 voltado para ensino e pesquisa na área de Meteorologia Aplicada a Redução de Riscos e Prevenção de Desastres Naturais.

            O LAMP desenvolve conhecimento científico em temas como: hidrometeorologia; previsão de chuva a curto prazo; redução de riscos e desastres; análise e comparação de dados pluviométricos oriundos de redes de pluviômetros e de radares meteorológicos; análise da variabilidade espaço-temporal de dados meteorológicos; gestão integrada de recursos hídricos e serviços ecossistêmicos; meteorologia aeronáutica; entre outros.'
            professores='Professores: Cap. Paz'
            contatos = "Contato:  igorpaz@ime.eb.br "
            list={list}/>
        </div>
    )
}