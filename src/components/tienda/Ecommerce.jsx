import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./ecommerce.css";
import Header from "../../components/header/Header";
import Footer from "../Footer/Footer";
import producto1 from "./imgecommerce/producto1.png";
import producto2 from "./imgecommerce/producto2.png";
import producto3 from "./imgecommerce/producto3.png";
import producto4 from "./imgecommerce/producto4.png";
import producto5 from "./imgecommerce/producto5.png";
import producto6 from "./imgecommerce/producto6.png";
import producto7 from "./imgecommerce/producto7.png";

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const formatPrice = (price) => {
    return `$${Math.round(price)}`;
  };

  const products = [
    { id: 1, name: "Taza", price: 5000, image: producto1 },
    { id: 2, name: "Taza2", price: 5000, image: producto2 },
    { id: 3, name: "Taza3", price: 5000, image: producto3 },
    { id: 1, name: "Taza", price: 5000, image: producto4 },
    { id: 2, name: "Taza2", price: 5000, image: producto5 },
    { id: 3, name: "Taza3", price: 5000, image: producto6 },
    { id: 3, name: "Taza3", price: 5000, image: producto7 },
  ];

  return (
    <>
      <Header />

      <Container>
        <div className="d-flex flex-wrap justify-content-between">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem", marginBottom: "20px" }}
            >
              <Card.Img variant="top" src={fototaza} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{formatPrice(product.price)}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductList;
