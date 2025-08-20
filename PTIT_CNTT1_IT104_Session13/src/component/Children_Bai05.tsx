interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ChildrenProduct = ({ product }: { product: Product }) => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3>Dữ liệu trong component con</h3>
      <p>Id: {product.id}</p>
      <p>Product name: {product.name}</p>
      <p>Price: {product.price} đ</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ChildrenProduct;
