import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab2Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Uma plataforma de Manufatura InrIMEorneamento.
        </li>
        <li style={{marginLeft: "20px"}}>
        Sistemas de aprendizagem em Automação Industrial, composto por bancadas didáticas com CLPs WEG, Siemens e Micrologix, por bancadas de aplicações em acionamentos pneumáticos, acionamentos elétricos e servomecanismos, e pela ferramenta Automation Studio. 
        </li>
        <li style={{marginLeft: "20px"}}>
        Sistema de prototipagem de placas de circuito impresso (LPKF).  
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Processamento de Sinais Acústicos' 
            resume='O Laboratório de Processamento de Sinais Acústicos (LASP) iniciou suas atividades de pesquisa em 2002 como parte do grupo de Comunicações e Sistemas de Ópticos do Departamento de Engenharia Elétrica do Instituto Militar de Engenharia (IME).

            A pesquisa tem como principais temas de atuação: processamento de sinais acústicos, processamento adaptativo de sinais com interferências ou variações acústicas: ruídos, reverberação e cenas acústicas, realce de sinais e predição de inteligibilidade, localização robusta de fontes sonoras, redes de sensores acústicos sem fio, aplicações em ambientes urbanos: audição robótica e drones.'
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}