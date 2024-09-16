import React from 'react';
import styles from "./RelatedProducts.module.css"

export default function RelatedProducts() {
    const relatedItems = [
        { id: 1, name: 'Produto 1', price: 'R$ 79,90', imgSrc: 'https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png' },
        { id: 2, name: 'Produto 2', price: 'R$ 89,90', imgSrc: 'https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png' },
        { id: 3, name: 'Produto 3', price: 'R$ 89,90', imgSrc: 'https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png' },
        { id: 4, name: 'Produto 4', price: 'R$ 89,90', imgSrc: 'https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png' },
        { id: 5, name: 'Produto 5', price: 'R$ 89,90', imgSrc: 'https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png' }
    ];

    return (
        <div className={styles.related_products}>
            {relatedItems.map(item => (
                <div key={item.id} className={styles.related_item}>
                    <img src={item.imgSrc} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}
