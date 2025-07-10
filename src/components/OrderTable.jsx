import OrderRow from "./OrderRow";
import "../App.css"

function OrderTable({items}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => <OrderRow item={item}/>)}
            </tbody>
        </table>
    );
  }
  
  export default OrderTable;