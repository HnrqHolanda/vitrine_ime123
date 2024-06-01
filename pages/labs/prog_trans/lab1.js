import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        1 módulo hidrológico para simulação de chuvas e infiltração de água no solo
        </li>
        <li style={{marginLeft: "20px"}}>
        2 canais hidráulicos de declividade variável. 
        </li>
        <li style={{marginLeft: "20px"}}>
        4 circuitos fechados para simularem aproveitamentos hidrelétricos completos, cada um deles com um tipo de turbina hidráulica: 1 com turbina Francis e caixa espiral, 1 com turbina Francis sem caixa espiral, 1 com turbina Pelton e 1 com turbina Michell-Banki. 
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Hidraulica' 
            resume='O laboratório realiza, há mais de meio século, atividades de pesquisa e de formação de recursos humanos para o EB e para a sociedade com o suporte das suas instalações, plenamente operacionais, além de apoios específicos.'
            professores='Professores: Prof. José Carlos Cesar Amorim, Prof José Carlos da Silva Sobreira    '
            contatos = "Contato:  jcamorim@ime.eb.br,   zss64@ime.eb.br"
            list={list}/>
        </div>
    )
}