import Image from 'next/image';
import { Product } from 'apps/next-monorepo/services/products/api';

import styles from './products.module.scss';

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div className={styles.product} key={product.id}>
          <h3>{product.title}</h3>
          <p>
            {product.brand} - {product.category}
          </p>
          <p>{product.stock > 0 ? 'In stock' : 'Out of stock'}</p>
          <p>{product.rating} in rating</p>
          <p>
            {product.price} - {product.discountPercentage}% off
          </p>
          <p>{product.description}</p>
          <Image
            key={product.thumbnail}
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};
