import "../App.css"
import { GrPhone } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";


function Contact() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <span>
            <GrPhone /> +1 206-496-6350
        </span>
        <br />
        <span>
            <MdOutlineMail/> haru.banin@gmail.com
        </span>
        <br />
        <span>
            <TbWorld/> <a href = "https://resapanda.github.io/"> https://resapanda.github.io/</a>
        </span>
        <br />
        <span>
            <FaMapMarkerAlt/> Seattle, WA, USA
        </span>
        <br />
        <span>
            <FaLinkedin/> 
        </span>
      </div>
    );
  }
  
  export default Contact;