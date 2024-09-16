import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductImage from "../../components/ProductImage";
import RelatedProducts from "../../components/RelatedProducts"
import Comments from "../../components/Comments";
import Menu from "./../../components/Menu"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.product_details_container}>
                <ProductImage />
                <ProductDetails />
            </div>
            <RelatedProducts />
            <Comments />
        </div>
    );
}