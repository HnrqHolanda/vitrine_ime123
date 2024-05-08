import HeaderC from "../../components/header";
import FooterC from "../../components/footer";
import styles from "../../styles/pages/result.module.css"
import { useSearchParams } from 'next/navigation';

const filterTitles = (searchString, dataArray) => {
    return dataArray.filter(item => item.titulo.toLowerCase().includes(searchString.toLowerCase()))
                   .map(item => item.titulo);
  };



export default function resultPage(){
    const searchParams = useSearchParams();
    const query = searchParams.get('query');


    return(
        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.main}>
                <h1>Hello World!</h1>
                <h3>hdsuahdsauhdsu</h3>
                <p>Query: {query}</p>
            </div>
            <FooterC/>
        </div>
    )
}