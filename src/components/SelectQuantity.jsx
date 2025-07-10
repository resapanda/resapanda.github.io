import { MdRemove, MdAdd } from "react-icons/md";
import React, { useState } from 'react';

function SelectQuantity() {
    const [count, setCount] = useState(0);
    const min = 0;
    const max = 10;
    const increment = () => {
        if (count < max) {
            setCount(count + 1)
        }
    };
    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <MdRemove onClick={decrement} />
            <span>{count}</span>
            <MdAdd onClick={increment} />
        </div>
     );
  }
  
  export default SelectQuantity;