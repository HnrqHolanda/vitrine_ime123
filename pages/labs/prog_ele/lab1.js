import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Uma plataforma de Manufatura Integrada por Computador (Computer Integrated Manufacture - CIM) composta por hardware e software para operação de uma planta industrial de pequeno porte, planta MecatrIME, composta por estações de armazenamento (Automated Storage and Retrieval System - ASRS), centro de torneamento, centro de usinagem, soldagem, metrologia por uma Máquina de Medida de Coordenadas (Coordinate Measure Machine - CMM), montagem e inspeção visual e gravação a laser.
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
            title='Laboratório de Mecatrônica' 
            resume='O Laboratório de Mecatrônica do Instituto Militar de Engenharia (IME) surgiu da necessidade da concentração das competências existentes Eletrônica, Mecânica, Computação, Automação e Controle, a fim de realizar ensino, pesquisa, desenvolvimento e inovação em Sistemas Mecatrônicos com aplicação dual..'
            professores='Professores: Cel R/1 Antonio Eduardo Carrilho da Cunha, Cel Rfm Cicero Roberto Garcez.'
            contatos = "Contato: carrilho@ime.eb.br,  garcez@ime.eb.br"
            list={list}/>
        </div>
    )
}