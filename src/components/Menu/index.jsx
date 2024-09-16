import React from 'react';
import styles from'./Menu.module.css';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Categorias</li>
                <li>Contato</li>
            </ul>
        </nav>
    );
};
