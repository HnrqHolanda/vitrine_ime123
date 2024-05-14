import { useState } from "react";
import styles from "../styles/components/forms.module.css"

const FormularioModal = ({ onClose }) => {

    const [nome, setNome] = useState('');
    const [instituição, setInstituição] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, instituição, CNPJ, email, mensagem }),
            });

            if (response.ok) {
                console.log('E-mails enviados com sucesso!');
            } else {
                console.error('Erro ao enviar e-mails');
            }
        } catch (error) {
            console.error('Erro ao enviar e-mails:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Formulário</h2>
                <form onSubmit={handleSubmit} className={styles.main}> 
                    <label htmlFor="nome" style={{textAlign: "start"}}>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className={styles.input1}/>
                    <label htmlFor="Instituição" style={{textAlign: "start"}}>Instituição:</label>
                    <input type="text" value={instituição} onChange={(e) => setInstituição(e.target.value)} placeholder="Instituição" className={styles.input1}/>
                    <label htmlFor="CNPJ" style={{textAlign: "start"}}>CNPJ:</label>
                    <input type="text" value={CNPJ} onChange={(e) => setCNPJ(e.target.value)} placeholder="CNPJ" className={styles.input1}/>
                    <label htmlFor="CNPJ" style={{textAlign: "start"}}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.input1} />
                    <label htmlFor="email" style={{textAlign: "start"}}>Deixe sua mensagem:</label>
                    <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Mensagem" className={styles.input1}></textarea>
                    <button type="submit" className={styles.button}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioModal;