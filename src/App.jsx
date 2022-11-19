import { useState, useEffect } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  function addToCart(data) {
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
      console.log("it's there");
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
      console.log("it aint there");
    }
  }
  function removeFromCart(id) {
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
    // find and modify the product
    // filter
  }
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Basket products={products} cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
