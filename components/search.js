import styles from "../styles/components/search.module.css"
import resume_array from "../data/results/resume_array/resume_array";

const MeuComponente = ({ componente }) => {
  return (
    <div>
      {componente}
    </div>
  );
};

const SearchC = (minhaString) => {


  function filtrarComponentes(array, termoDeBusca) {
    return array.filter(item => item.titulo.toLowerCase().includes(termoDeBusca.toLowerCase()));
} 


    const filtered_array = filtrarComponentes(resume_array, minhaString.minhaString)

    return(

      
      <div className={styles.Content}>
        <div className={styles.Title}>
          <h1>Resultados da pesquisa:</h1>
        </div>
        {filtered_array.map((objeto, index) => (
        <div key={index}>
          <MeuComponente componente={objeto.componente} />
        </div>
      ))}
      </div>

    )
}

export default SearchC