import CardC from "../../../components/card";
import main_image1 from "../../../public/imersão2.jpg"
import main_image2 from "../../../public/grifotuc1.jpg"
import main_image3 from "../../../public/papirozero1.jpg"

const card1_array = [
    {
      componente: <CardC mimage={main_image1} title='Imersão 2023.1' link="http://localhost:3000/pubs/pub1"/>
    },
    {
      componente: <CardC mimage={main_image2} title='Tuc 09/04'  link="http://localhost:3000/pubs/pub2" />
    },
    {
      componente: <CardC mimage={main_image3} title='Papiro Zero' link="http://localhost:3000/pubs/pub3" />
    }
  ];

export default card1_array