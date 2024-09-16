import React from 'react';
import styles from './Comments.module.css';

export default function Comments() {
    const comments = [
        { id: 1, name: 'Usuário 1', date: '12/09/2024', comment: 'Ótimo produto!' },
        { id: 2, name: 'Usuário 2', date: '13/09/2024', comment: 'Boa qualidade.' }
    ];

    return (
        <div className={styles.comments}>
            {comments.map(c => (
                <div key={c.id} className={styles.comment}>
                    <p>{c.name} - {c.date}</p>
                    <p>{c.comment}</p>
                </div>
            ))}
        </div>
    );
}