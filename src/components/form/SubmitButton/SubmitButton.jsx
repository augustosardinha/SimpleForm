import styles from './SubmitButton.module.css';

export default function SubmitButton({ text, type, buttonColor, handleClick }) {
    
    return (
        <button
            type={type}
            onClick={handleClick}
            className={`${styles.btn} ${styles[buttonColor]}`}
        >
            {text.toUpperCase()}
        </button>
    );
}
