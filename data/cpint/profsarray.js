import ProfC from "../../components/prof";
import main_image1 from '../../public/imersão1.jpg'
import main_image2 from "../../public/grifotuc1.jpg"
import main_image3 from "../../public/papirozero1.jpg"

const prof_array = [
    {
      titulo: "imersão",
      componente: <ProfC mimage={main_image1} Name='Imersão 2023.1' link="http://localhost:3000/home/home"/>
    },
    {
      titulo: "Tuc 09/04",
      componente: <ProfC mimage={main_image2} Name='Tuc 09/04'  link="http://localhost:3000/home/home" />
    },
    {
      titulo: "papiro zero",
      componente: <ProfC mimage={main_image3} Name='Papiro Zero' link="http://localhost:3000/home/home" />
    }
  ];

export default prof_array