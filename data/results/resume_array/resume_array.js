import ResumeC from "../../../components/resume";
import main_image1 from "../../../public/imersão2.jpg"
import main_image2 from "../../../public/grifotuc1.jpg"
import main_image3 from "../../../public/papirozero1.jpg"

const resume_array = [
    {
      titulo: 'Imersão 2023.1',
      componente: <ResumeC mimage={main_image1} Title='Imersão 2023.1' Sum='A IME Junior, empresa junior do Instituto Militar de Engenharia, realizou um evento...' link="http://localhost:3000/pubs/pub1"/>
    },
    {
      titulo: 'Tuc 09/04',
      componente: <ResumeC mimage={main_image2} Title='Tuc 09/04' Sum='Grifo participa da Taça Universitária Caríoca, campeonato realizado entre... ' link="http://localhost:3000/pubs/pub2" />
    },
    {
      titulo: 'Papiro Zero',
      componente: <ResumeC mimage={main_image3} Title='Papiro Zero' Sum='Foi realizado no dia 26/03 a confraternização anual que recepciona...' link="http://localhost:3000/pubs/pub3" />
    }
  ];

  export default resume_array