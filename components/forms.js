const FormularioModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Formulário</h2>
                <form>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioModal;