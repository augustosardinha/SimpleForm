import { useState } from 'react';
import styles from './ProjectForm.module.css';
import sucess from '../../../assets/woman-success.png';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Message from '../../Message/Message';

export default function ProjectForm() {
    const [form, setForm] = useState({ name: '', email: '', password: ''});
    const [error, setError] = useState('');
    const [formSucess, setFormSucess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.email && !form.name && !form.password) {
            setError('Todos os campos são obrigatórios.');
            return;
        }
        if (!form.name) {
            setError('Nome é obrigatório.');
            return;
        }
        if (!form.email) {
            setError('Email é obrigatório.');
            return;
        }
        if(!form.password){
            setError('A senha é obrigatória.');
            return;
        }
        if (form.password.length < 8) {
            setError('A senha precisa ter pelo menos 8 digitos.');
            return;
        }
        setFormSucess(true);
    }
    function clearForm() {
        setForm({...form, name: '', email: '', password: ''})
        setError('');
    }

    function handleOnChange({target}){
        setForm({ ...form, [target.name]: target.value })
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
                        handleOnChange={handleOnChange}
                        value={form.name}
                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        handleOnChange={handleOnChange}
                        value={form.email}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        handleOnChange={handleOnChange}
                        value={form.password}
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
