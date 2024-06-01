import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/prog_mat/lab1images"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        máquina Emic Universal para ensaios mecânicos;
        </li>
        <li style={{marginLeft: "20px"}}>
        máquina MTS para ensaios de fadiga;
        </li>
        <li style={{marginLeft: "20px"}}>
        máquina para ensaios Charpy;  
        </li>
        <li style={{marginLeft: "20px"}}>
        máquina para ensaios de fluência;
        </li>
        <li style={{marginLeft: "20px"}}>
        máquinas para ensaios de dureza;  
        </li>
        <li style={{marginLeft: "20px"}}>
        máquinas para ensaios de microdureza;     
        </li>
        <li style={{marginLeft: "20px"}}>
        máquina INSTRON modelo Biotronic para ensaios de fadiga 
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Ensaios Mecânicos' 
            resume='No Laboratório de Ensaios Mecânicos - LEM (credenciamento renovado pelo Inmetro em 2019) são desenvolvidas as seguintes atividades: ensaios de tração, compressão, flexão e cisalhamento; ensaios de fadiga de baixo e alto ciclo; ensaios de dureza Brinel e Rockwell e de microdureza Vickers e Knoop; ensaios de impacto e de fluência; ensaios não destrutivos (ultrassom e líquidos penetrantes).'
            professores='Professores: Prof. Carlos Nelson Elias'
            contatos = "Contato: elias@ime.eb.br"
            list={list}/>
        </div>
    )
}