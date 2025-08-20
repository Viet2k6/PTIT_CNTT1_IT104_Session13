import { useState } from "react";
import ChildrenProduct from "./Children_Bai05";

const ParentProduct = () => {
  const [product] = useState({
    id: 1,
    name: "Bưởi ba roi",
    price: 12000,
    quantity: 6,
  });

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <ChildrenProduct product={product} />
    </div>
  );
};

export default ParentProduct;
