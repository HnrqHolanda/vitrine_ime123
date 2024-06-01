import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        viscosímetro rotacional
        </li>
        <li style={{marginLeft: "20px"}}>
        viscosímetro rotacional 
        </li>
        <li style={{marginLeft: "20px"}}>
        ductilômetros 
        </li>
        <li style={{marginLeft: "20px"}}>
        aparelho simulador de tráfego LWT
        </li>
        <li style={{marginLeft: "20px"}}>
        aparelho de abrasão por via úmida WTAT
        </li>
        <li style={{marginLeft: "20px"}}>
        Light Weight Deflectometer (LWD)
        </li>
        <li style={{marginLeft:"20px"}}>
        conjunto tipo Abson para recuperação de ligantes asfálticos
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Ligantes e Misturas Betuminosas' 
            resume='Os alunos do PPGT têm à sua disposição os mais modernos equipamentos de análise dos materiais empregados em pavimentação asfáltica, em mais de 200 m2 de área construída, que atendem aos alunos de graduação e atraem parcerias para pesquisas e cooperação acadêmica'
            professores='Professores: Cel. Guimarães'
            contatos = "Contato: guimaraes@ime.eb.br"
            list={list}/>
        </div>
    )
}