import ResumeC from "../../../components/resume";
import main_image1 from "../../../public/Img10.jpeg"
import main_image2 from "../../../public/Img10.jpeg"
import main_image3 from "../../../public/Img10.jpeg"

const resume_array = [
    {
      titulo: 'Título 1',
      componente: <ResumeC mimage={main_image1} Title='Título 1' Sum='Lorem Ipsum Dolor Sit Amet'/>
    },
    {
      titulo: 'Título 2',
      componente: <ResumeC mimage={main_image2} Title='Título 2' Sum='Lorem Ipsum Dolor Sit Amet' />
    },
    {
      titulo: 'Título 3',
      componente: <ResumeC mimage={main_image3} Title='Título 3' Sum='Lorem Ipsum Dolor Sit Amet' />
    }
  ];

  export default resume_array