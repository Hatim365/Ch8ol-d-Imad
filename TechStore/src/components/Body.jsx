export default function Body() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      description: "Powerful and lightweight",
      price: 1200,
    },
    {
      id: 2,
      title: "Headphones",
      description: "Noise cancelling",
      price: 150,
    },
    {
      id: 3,
      title: "Keyboard",
      description: "Mechanical, RGB",
      price: 80,
    },
    {
      id: 4,
      title: "Mouse",
      description: "Wireless ergonomic",
      price: 45,
    },
    {
      id: 5,
      title: "Monitor",
      description: '27" Full HD',
      price: 300,
    },
    {
      id: 6,
      title: "Smartwatch",
      description: "Tracks fitness & sleep",
      price: 220,
    },
    {
      id: 7,
      title: "Tablet",
      description: "Great for reading and media",
      price: 500,
    },
  ];
  return (
    <main>
      <h2 id="products">Products</h2>
      <ul className="product-list">
        {products.map((products) => (
          <li className="product-item" key={products.id}>
            <div className="product-content">
              <div>
                <h3>{products.title}</h3>
                <p className="description">{products.description}</p>
              </div>
              <span className="price">{products.price}$</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
