import Image from "next/image"
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";


export default function Footer (){

    return(
        <div className="footer-container">

            <div className="footer-content">
            <div className="footer-content-1">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={150}   
                height={50}
                />
                <p className="footer-para ">We’re always in search for talented and motivated people.Don’t be shy introduce yourself!</p>
                <div className="footer-icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <RiInstagramFill />
                    <FaLinkedinIn />
                </div>
                <button className="footer-contact">Contact with us <BsArrowRight /></button>
            </div>
            <div className="footer-content-2">
                <h5>Useful Links</h5>
                <ul>
                    <li>
                        <a href="#">Marketplace</a>
                    </li>
                    <li>
                        <a href="#">kindergarten</a>
                    </li>
                    <li>
                        <a href="#">University</a>
                    </li>
                    <li>
                        <a href="#">Classic Lms</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="footer-content-3">
                <h5>Our Company</h5>
                <ul>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Become Teacher</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Instructor</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                </ul>
            </div>
            <div className="footer-content-3">
                <h5>Our Company</h5>
                <ul>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Become Teacher</a>
                    </li>
                </ul>
                <form>
                    <h5>Newsletter</h5>
                    <p>2000+ Our students are subscribe Around the World.Don’t be shy introduce yourself!</p>
                </form>

            </div>
       </div>
 </div>

    )
}