import React from 'react';
import styles from './ProductDetails.module.css';

export default function ProductDetails() {
    return (
        <div className={styles.product_details}>
            <h1>Nome do Produto</h1>
            <div className={styles.product_details_content}>
                <p>Preço: R$ 99,90</p>
                <p>Descrição: Lorem ipsum dolor sit amet...</p>
                <p>Especificações: Cor, Tamanho, etc.</p>
            </div>
        </div>
    );
};
