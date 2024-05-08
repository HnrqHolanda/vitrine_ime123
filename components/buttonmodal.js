// components/ButtonModal.js
import styles from '../styles/components/buttonmodal.module.css'

const ButtonModal = ({ onClick }) => {
    return (
        <div className={styles.button}>
            <button className={styles.buttoncustom}onClick={onClick}>Inscreva-se</button>
        </div>
    );
};

export default ButtonModal;