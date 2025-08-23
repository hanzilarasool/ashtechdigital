import { Link } from 'react-router-dom';
import styles from './Products.module.css';
import { FaEye } from 'react-icons/fa';
import products from './data';

const Products = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <Link to={`/products/${product.id}`} key={index} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.price}>{product.price}</div>
                <div className={styles.linkWrapper}>
                  <div className={styles.link}>
                    <FaEye className={styles.icon} /> View Details
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
