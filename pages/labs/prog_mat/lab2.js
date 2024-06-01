import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/prog_mat/lab1images"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        espectrômetro de ressonância magnética Varian;
        </li>
        <li style={{marginLeft: "20px"}}>
        espectrômetro de ressonância magnética Bruker;
        </li>
        <li style={{marginLeft: "20px"}}>
        sistema de refrigeração Displex 10—350 K; 
        </li>
        <li style={{marginLeft: "20px"}}>
        forno Lindberg 500—1500°C;
        </li>
        <li style={{marginLeft: "20px"}}>
        forno Marshall 200—1200°C; 
        </li>
        <li style={{marginLeft: "20px"}}>
        forno Fornaço 200—1500°C;   
        </li>
        <li style={{marginLeft: "20px"}}>
        capela, destilador e deionizador Quimis;
        </li>
        <li style={{marginLeft: "20px"}}>
        balança digital Bioprecisa.
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Ressonância Magnética' 
            resume='No Laboratório de Ressonância Magnética são desenvolvidas as seguintes atividades: produção de materiais cerâmicos e nanopartículas; medidas de ressonância do spin eletrônico de íons de metais de transição e terras raras em materiais cerâmicos; medidas de ressonância ferromagnética em materiais amorfos e nanocristalinos; medida da absorção de micro-ondas em materiais supercondutores.'
            professores='Professores: Prof. André Ben Hur da Silva Figueiredo,  Prof. Ronaldo Sérgio de Biasi'
            contatos = "Contato: abenhur@ime.eb.br, rsbiasi@ime.eb.br"
            list={list}/>
        </div>
    )
}