import styles from './Input.module.css';
import closeEyes from '../../../assets/close-eye.svg';
import openEyes from '../../../assets/open-eye.svg';
import { useState } from 'react';

export default function Input({ name, type, placeholder, handleOnChange, value }) {
    const [passwordType, setPasswordType] = useState('password');

    function togglePasswordType() {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    }
    return (
        <div className={styles.item}>
            {type === 'password' ? (
                <>
                    <input
                        type={passwordType}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        value={value}
                    />
                    <img
                        src={passwordType === 'password' ? closeEyes : openEyes}
                        alt="password"
                        onClick={togglePasswordType}
                    />
                </>
            ) : (
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
            )}
        </div>
    );
}
