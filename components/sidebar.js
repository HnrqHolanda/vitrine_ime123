import Link from "next/link"
import styles from "../styles/components/sidebar.module.css"

const SideBarC= () =>{
    return(
        <div className={styles.container}>
            <Link>Professores SE1</Link>
            <Link>Professores SE2</Link>
            <Link>Professores SE3</Link>
            <Link>Professores SE4</Link>
            <Link>Professores SE5</Link>
            <Link>Professores SE6</Link>
            <Link>Professores SE7</Link>
            <Link>Professores SE8</Link>
            <Link>Professores SE9</Link>
        </div>
    )
}

export default SideBarC

