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


  const filterComponents = (searchString, dataArray) => {
    return dataArray.filter(item => {
        if (typeof item.titulo === 'string' && typeof searchString === 'string') {
            return item.titulo.toLowerCase().includes(searchString.toLowerCase());
        }
        return false;
    }).map(item => item.componente);

    
};

    const filtered_array = filterComponents(minhaString.minhaString, resume_array)

    return(

      
      <div>
        <h1>Resultados da pesquisa:</h1>
        <p>{minhaString.minhaString}</p>
        {filtered_array.map((objeto, index) => (
        <div key={index}>
          <MeuComponente componente={objeto.componente} />
        </div>
      ))}
      </div>

    )
}

export default SearchC