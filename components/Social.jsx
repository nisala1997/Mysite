import Link from "next/link";

import {FaGithub,FaLinkedinIn,FaYoutube,FaTwitter, FaFacebook} from "react-icons/fa";

const socials =[
    {icon:<FaGithub/>,path:"https://github.com/nisala1997"},
    {icon:<FaLinkedinIn/>,path:"www.linkedin.com/in/nisala-nimesh-1a20112a9"},
    {icon:<FaYoutube/>,path:"https://www.youtube.com/channel/UCTZ4s9eKl_HYuE-tN8RHrag"},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/nisala.nimesh"},
]

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  );
}

export default Social