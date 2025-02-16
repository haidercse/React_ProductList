import Card from '../card/index.jsx'
import Card2 from '../card/Card2.jsx'
import '../../assets/Product.css'

function Product({products}) {
    return (
        <div className="products-container">
          {products.map((product) => (
            <Card2
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
    )
}

export default Product;