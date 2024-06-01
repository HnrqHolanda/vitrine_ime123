import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/prog_trans/lab6images"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        4 maquinas universais de ensaio 
        </li>
        <li style={{marginLeft: "20px"}}>
        Sensores para medição de deslocamento e deformação dos elementos estruturais
        </li>

        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Materiais de Construção e Concreto' 
            resume='Os alunos do PPGT utilizam o laboratório planejando e realizando experimentos quando desenvolvem trabalhos das diversas disciplinas e suas dissertações. Os alunos de graduação da SE/2 e os de pós-graduação em Engenharia de Materiais e de Defesa do IME, assim como os de graduação e pós-graduação em engenharia civil de outras instituições de ensino, a exemplo da UERJ e PUC-Rio realizam no laboratório, trabalhos de pesquisa complementares, desenvolvem dissertações e teses, atividades de iniciação à pesquisa e trabalhos de final de curso.'
            professores='Professores: Cap. Julio Jorge'
            contatos = "Contato:  julio.nunes@ime.eb.br "
            list={list}/>
        </div>
    )
}