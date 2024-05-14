import ProfC from "../../components/prof";
import main_image1 from '../../public/imersão1.jpg'
import main_image2 from "../../public/grifotuc1.jpg"
import main_image3 from "../../public/papirozero1.jpg"

const prof_array = [
    {
      titulo: "Prof. Gerson Bazo",
      componente: <ProfC mimage={main_image1} Name='Prof. Gerson Bazo'sum='Doutor em Ciências dos Materiais' link="http://localhost:3000/home/home"/>
    },
    {
      titulo: "Prof. Zão",
      componente: <ProfC mimage={main_image2} Name='Prof. Zão' sum="Doutor em Engenharia de Defesa" link="http://localhost:3000/home/home" />
    },
    {
      titulo: "Capitão Moraes",
      componente: <ProfC mimage={main_image3} Name='Capitão Moraes'sum='Doutor em Engenharia Mecânica' link="http://localhost:3000/home/home" />
    }
  ];

export default prof_array