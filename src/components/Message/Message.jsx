import styles from './Message.module.css';
import { useState, useEffect } from 'react';

export default function Message({ message }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const seconds = 5;
        return setTimeout(() => setVisible(false), seconds * 1000);
    }, [message]);

    return <>{visible && <p className={styles.msg}>{message}</p>}</>;
}
