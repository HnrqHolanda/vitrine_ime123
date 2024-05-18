import styles from "../styles/components/feed.module.css"
import HeaderC from "../components/header";
import FooterC from "../components/footer"
import CardC from "./card";
import imagem1 from "../public/imersão1.jpg"

const MeuComponente = ({ componente }) => {
    return (
      <div>
        {componente}
      </div>
    );
  };

const FeedC = ({string, dataArray}) => {
    return (

        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.Text1}>
                <h1>
                    {string}
                </h1>
                <h3>
                    Acompanhe aqui todos os acontecimentos relacionados à {string} que aconteceram no Instituto Militar de Engenharia
                </h3>
            </div>
            <div className={styles.Content}>
                <div className={styles.grid}>
                {dataArray.map((objeto, index) => (
                    <div key={index}>
                        <MeuComponente componente={objeto.componente} />
                    </div>
                    ))}
                </div>
            </div>
            <FooterC/>
        </div>

    )
  };
  
  export default FeedC;