import OrderTable from "../components/OrderTable";
import "../App.css"

function AboutMe({items}) {
    return (
      <div>
        <h2>About Me</h2>
        <p></p>
        <h2>Work Experience</h2>
        <p></p>
        <h2>Education</h2>
        <p></p>

        <OrderTable items={items}></OrderTable>
      </div>
    );
  }
  
  export default AboutMe;