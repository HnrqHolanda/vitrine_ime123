import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/prog_mat/lab1images"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        microscópio eletrônico de varredura com canhão de emissão de campo FEI (MEV-FEG)
        </li>
        <li style={{marginLeft: "20px"}}>
        microscópio eletrônico de varredura JEOL;
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
            title='Laboratório de Microscopia Eletrônica' 
            resume='No Laboratório de Microscopia Eletrônica, um laboratório multiusuário, são desenvolvidas as seguintes atividades: caracterização por microscopia eletrônica de varredura (modo imagem por elétrons secundários; modo imagem por elétrons retroespalhados; difração de elétrons retroespalhados; espectroscopia de raios X por dispersão de energia; análise residuográfica); caracterização microestrutural por microscopia eletrônica de transmissão (modo imagem e difração de área selecionada).'
            professores='Professores:  Marcelo Henrique Prado da Silva '
            contatos = "Contato: marceloprado@ime.eb.br "
            list={list}/>
        </div>
    )
}