import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/pages/home/homearray"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
            40 computadores.
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Introdução a computação.' 
            resume='Laboratório destinado ao ensino da linguagem de programação C aos alunos do 1° ano de graduação.'
            professores='Responsável: Capitão Moraes.'
            list={list}/>
        </div>
    )
}