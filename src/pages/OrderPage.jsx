import OrderTable from "../components/OrderTable";
import "../App.css"

function OrderPage({items}) {
    return (
      <div>
        <h2>Order Your Groceries</h2>
        <p>Select the quantity of the items you want to buy</p>
        <OrderTable items={items}></OrderTable>
      </div>
    );
  }
  
  export default OrderPage;