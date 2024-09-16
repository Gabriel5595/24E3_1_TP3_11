import React from 'react';
import styles from './ProductImage.module.css';

export default function ProductImage() {
    return (
        <div className={styles.product_image}>
            <img src="https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png" alt="Produto" />
            <div className={styles.image_gallery}>
                <img src="https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png" alt="Produto 1" />
                <img src="https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png" alt="Produto 2" />
                <img src="https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png" alt="Produto 3" />
                <img src="https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png" alt="Produto 4" />
            </div>
        </div>
    );
};
