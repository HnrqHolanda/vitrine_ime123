import HeaderC from "../../components/header";
import FooterC from "../../components/footer";
import styles from "../../styles/pages/result.module.css"
import { useSearchParams } from 'next/navigation';
import SearchC from "../../components/search";

export default function resultPage(){
    
    const searchParams = useSearchParams();
    const query = searchParams.get('query');


    const minhaString = "Olá, mundo!";

    return(
        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.main}>
                    <SearchC minhaString={query}/> 
            </div>
            <FooterC/>
        </div>
    )
}