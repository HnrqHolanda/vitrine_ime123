import LpcontentC from "../../../components/lp_content"



export default function lp1page(){

    const list1 = <ul>Docentes:
    <li style={{marginLeft: "20px"}}>
    a
    </li>
    <li style={{marginLeft: "20px"}}>
    b
    </li>
    <li style={{marginLeft: "20px"}}>
    c
    </li>
    <li style={{marginLeft: "20px"}}>
    d
    </li>
    <li style={{marginLeft: "20px"}}>
    e 
    </li>
    </ul>

    const list2 = <ul>Artigos:
    <li style={{marginLeft: "20px"}}>
    a
    </li>
    <li style={{marginLeft: "20px"}}>
    b
    </li>
    <li style={{marginLeft: "20px"}}>
    c
    </li>
    <li style={{marginLeft: "20px"}}>
    d
    </li>
    <li style={{marginLeft: "20px"}}>
    e
    </li>
    </ul>

    return(
        <div>
            <LpcontentC title="Processamento de Sinais e Sistemas Robóticos e Autônomos" 
            resume1="O processamento de sinais acústicos envolve métodos de realce de sinais robustos a ruídos acústicos urbanos e máscaras acústicas para aprimoramento de inteligibilidade auditiva. Também inclui o processamento de interferências acústicas, como reverberação e ruído, além do estudo de ambientes acusticamente sensíveis e audição robótica. O tratamento acústico de ego-interferências em robôs e drones, a inteligibilidade acústica e a seleção de sensores acústicos para aprimoramento de audição assistida são outras áreas importantes. Técnicas de Auto Localização e Mapeamento (SLAM) com sensores acústicos, classificação de ambientes acústicos urbanos com aprendizado de máquina e redes neurais, e identificação e autenticação de indivíduos pelo sinal de voz (patente concedida) são desenvolvidas. Além disso, a localização de fontes sonoras em espaços urbanos robustos a ruídos, filtros tempo-frequência adaptativos para representação auditiva, identificação acústica de estados emocionais e classificação de sinais acústicos e imagens com aprendizado estocástico e não supervisionado são áreas de estudo. No processamento digital de imagem, são estudados o processamento de imagens e o streaming de vídeo. Já no processamento digital de sinais, teoria e aplicações, a pesquisa abrange a filtragem adaptativa, o processamento de sinais em arranjo de sensores, em sub-bandas e em grafos. O processamento de nuvens de pontos 3D inclui o registro de nuvens de pontos LiDAR, mapeamento indoor usando dados RGB-D e aprendizado não supervisionado em nuvens de pontos 3D. No processamento de sinais GNSS, são investigados o posicionamento por Ponto Preciso em Tempo Real (Real Time Precise Point Positioning), a filtragem de Kalman para navegação por GNSS, modelos estocásticos para mitigação de erros nos sinais, a modelagem de efeitos atmosféricos (Ionosfera e Troposfera) em sinais e a análise de séries temporais de coordenadas de estações GNSS."
            resume2="O reconhecimento de padrões em imagens e sinais acústicos inclui métodos de aprendizado profundo para detecção de objetos, segmentação semântica e segmentação de instâncias em imagens, redes neurais convolucionais para reconhecimento de padrões em sinais acústicos e aprendizado não supervisionado em imagens e sinais acústicos. O processamento e análise de imagens hiperespectrais também são áreas de foco. Nos sistemas autônomos e inteligentes de robótica, são desenvolvidos frameworks multiagentes para um enxame de drones heterogêneos, aprendizado profundo para sistemas de robôs móveis em tarefas competitivas (como futebol de robôs) e sistemas embarcados críticos para soluções de problemas em tempo real. Técnicas de SLAM (Auto Localização e Mapeamento Simultâneos) são utilizadas para navegação autônoma em plataformas terrestres móveis, enquanto a prototipagem e desenvolvimento de veículos aéreos não tripulados são áreas de pesquisa. O aprendizado de máquina é aplicado para a caminhada de robôs humanoides, e algoritmos meta-heurísticos são desenvolvidos para aplicações de enxames de drones em cidades inteligentes. Flying Ad-hoc Networks (FANETs) são desenvolvidas para comunicação em enxames de drones, e o aprendizado profundo é aplicado para a reconstrução 3D com imagens de múltiplos drones."
            list1={list1}
            list2={list2}
            />
        </div>
    )
}