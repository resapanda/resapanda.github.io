import "../App.css"
import SelectQuantity from "./SelectQuantity";


function OrderRow({item}) {
    return (
      <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><SelectQuantity></SelectQuantity></td>
      </tr>
    );
  }
  
  export default OrderRow;