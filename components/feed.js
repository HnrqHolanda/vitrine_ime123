import styles from "../styles/components/feed.module.css"
import HeaderC from "../components/header";
import FooterC from "../components/footer"
import CardC from "./card";

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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {dataArray.map((objeto, index) => (
                    <div key={index}>
                        <MeuComponente componente={objeto.componente} />
                    </div>
                    ))}
                </div>
                <CardC/>
            </div>
            <FooterC/>
        </div>

    )
  };
  
  export default FeedC;