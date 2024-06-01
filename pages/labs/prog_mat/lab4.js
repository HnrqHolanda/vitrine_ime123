import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/prog_mat/lab1images"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        sistema doméstico para pulverização catódica;
        </li>
        <li style={{marginLeft: "20px"}}>
        equipamento de evaporação Balzers;
        </li>
        <li style={{marginLeft: "20px"}}>
        três acessórios de microanálise de raios X por dispersão de energia, marcas Noran e Bruker; 
        </li>
        <li style={{marginLeft: "20px"}}>
        equipamento para pulverização de carbono e deposição por pulverização catódica de ouro, platina, cromo, platina e tungstênio LEICA EM ACE 600; 
        </li>
        <li style={{marginLeft: "20px"}}>
        equipamentos para preparação de amostras finas (corte e polimento) para microscopia eletrônica de transmissão GATAN.  
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Filmes Finos e Células Solares' 
            resume='No Laboratório de Filmes Finos e Células Solares são desenvolvidas as seguintes atividades: produção e estudo de filmes finos para detectores de infravermelho; produção e estudo de filmes finos para células solares; produção e estudo de filmes finos para filtros ópticos e absorvedores; produção e estudo de grafeno.'
            professores='Professores:   Profª. Leila Rosa de Oliveira Cruz '
            contatos = "Contato:  leilacruz@ime.eb.br"
            list={list}/>
        </div>
    )
}