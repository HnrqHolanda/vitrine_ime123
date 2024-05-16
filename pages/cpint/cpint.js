import styles from "../../styles/pages/cpint.module.css"
import HeaderC from "../../components/header"
import SearchBar from "../../components/searchBar"
import Grid2 from "../../components/grid2"
import { useSearchParams } from 'next/navigation';
import SideBarC from "../../components/sidebar";
import prof_array from "../../data/cpint/SE1/profsarray";

export default function CpIntPage(index){

    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <SideBarC/>
                <div className={styles.content}>
                    <div className={styles.sbar}>
                        <h1>Professores SE-1</h1>
                    </div>
                    <Grid2 dataarray={prof_array}/>
                </div>
            </div>
        </div>
    )
}