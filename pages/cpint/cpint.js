import styles from "../../styles/pages/cpint.module.css"
import HeaderC from "../../components/header"
import SearchBar from "../../components/searchBar"
import Grid2 from "../../components/grid2"
import { useSearchParams } from 'next/navigation';
import SideBarC from "../../components/sidebar";

export default function CpIntPage(){

    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    
    
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <SideBarC/>
                <div className={styles.content}>
                    <div className={styles.sbar}>
                        <h1>Professores:</h1>
                        <SearchBar/>
                    </div>
                    <Grid2 string={query}/>
                </div>
            </div>
        </div>
    )
}