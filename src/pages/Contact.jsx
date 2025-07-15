import "../App.css"
import { GrPhone } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


function Contact() {
    return (
      <div>
        <h2>Contact</h2>
        <span>
            <GrPhone /> +1 206-496-6350
        </span>
        <span>
            <MdOutlineMail/> haru.banin@gmail.com
        </span>
        <span>
            <TbWorld/> <a href = "https://resapanda.github.io/"> https://resapanda.github.io/</a>
        </span>
      </div>
    );
  }
  
  export default Contact;