import { useState } from 'react';
import styles from './ProjectForm.module.css';
import sucess from '../../../assets/woman-success.png';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Message from '../../Message/Message';

export default function ProjectForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [formSucess, setFormSucess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!email && !name && !password) {
            setError('Todos os campos são obrigatórios.');
            return;
        }
        if (!name) {
            setError('Nome é obrigatório.');
            return;
        }
        if (!email) {
            setError('Email é obrigatório.');
            return;
        }
        if(!password){
            setError('A senha é obrigatória.');
            return;
        }
        if (password.length < 8) {
            setError('A senha precisa ter pelo menos 8 digitos.');
            return;
        }
        setFormSucess(true);
    }
    function clearForm() {
        setEmail('');
        setPassword('');
        setName('');
        setError('');
    }

    return (
        <div className={styles.formContainer}>
            {!formSucess ? (
                <form className={styles.form}>
                    <h1>Cadastre-se</h1>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        handleOnChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        handleOnChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        handleOnChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {error && <Message message={error} />}
                    <div className={styles.buttons}>
                        <SubmitButton 
                        text='cadastrar' 
                        type='submit' 
                        buttonColor='confirm'  
                        handleClick={handleSubmit}
                        />
                        <SubmitButton 
                        text='cancelar' 
                        type='button' 
                        buttonColor='cancel' 
                        handleClick={clearForm} />
                    </div>
                    <p>Ja tem cadastro? <span>clique aqui</span></p>
                </form>
            ) : (
                <div className={styles.cadastroRealizado}>
                    <img src={sucess} alt="Cadastro com sucesso" />
                    <h2>Cadastro realizado com sucesso!</h2>
                </div>
            )}
        </div>
    );
}
