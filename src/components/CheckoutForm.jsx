import { useRef } from "react";
import { insertOrder } from "../modules/db";
function CheckoutForm(props) {
  const theForm = useRef(null);
  function submit(e) {
    e.preventDefault();
    insertOrder({
      name: theForm.current.elements.formName.value,
      email: theForm.current.elements.formEmail.value,
      address: theForm.current.elements.formAddress.value,
      basket: props.cart,
    });
  }
  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="formName" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">E-mail</label>
        <input type="email" name="email" id="formEmail" />
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea required type="text" name="address" id="formAddress" />
      </div>
      <button>Pay</button>
    </form>
  );
}
// name
//

export default CheckoutForm;
