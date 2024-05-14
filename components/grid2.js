import styles from "../styles/components/grid2.module.css"
import prof_array from "../data/cpint/profsarray";


const MeuComponente = ({ componente }) => {
  return (
    <div>
      {componente}
    </div>
  );
};

const Grid2 = (string) => {

  function filtrarComponentes(array, termoDeBusca) {
    return array.filter(item => item.titulo.toLowerCase().includes(termoDeBusca.toLowerCase()));
  } 


    const filtered_array = filtrarComponentes(prof_array, string.string)

  return(

    <div className={styles.grid}>
    {filtered_array.map((objeto, index) => (
    <div key={index}>
      <MeuComponente componente={objeto.componente} />
    </div>
  ))}
  </div>

  )


}

export default Grid2;