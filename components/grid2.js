import styles from "../styles/components/grid2.module.css"

const MeuComponente = ({ componente }) => {
  return (
    <div>
      {componente}
    </div>
  );
};

const Grid2 = ({dataarray}) => {


  return(

    <div className={styles.grid}>
    {dataarray.map((objeto, index) => (
    <div key={index}>
      <MeuComponente componente={objeto.componente} />
    </div>
  ))}
  </div>

  )


}

export default Grid2;