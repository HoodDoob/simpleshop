import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

function Basket(props) {
  const [showForm, setShowForm] = useState(false);
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
      // key Date.now(),
    });
    return total;
  }
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount}, {""}
            {item.amount * item.price} DKK
            <button onClick={() => props.removeFromCart(item.id)}>
              Remove from basket
            </button>
          </li>
        ))}
        {/* <li>SomeProduct x3, 1234,-</li> */}
      </ul>
      <h3>Total:{getTotal()}</h3>
      <button onClick={() => setShowForm(true)}>Buy Now</button>
      <CheckoutForm cart={props.cart} />
    </section>
  );
}

export default Basket;
