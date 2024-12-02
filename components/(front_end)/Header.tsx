import Image from "next/image"
import "./Header.css"
import { IoIosArrowDown } from "react-icons/io";

export default function Header () {

    return(

        <div className="container-header">
            <div>
                <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={150}
                height={50}
                />
            </div>

            <div>
                <ul className="header-content">
                    <li className="nav-item">Home <IoIosArrowDown /></li>  
                    <li className="nav-item">Courses <IoIosArrowDown /></li>
                    <li className="nav-item">Dashboard <IoIosArrowDown /></li>
                    <li className="nav-item">Pages <IoIosArrowDown /></li>
                    <li className="nav-item">Element <IoIosArrowDown /></li>
                    <li className="nav-item">Blog <IoIosArrowDown /></li>
                </ul>

            </div>
            <div>
                <button>Join Now</button>

            </div>
            
        </div>
    )
}