import Image from "next/image";
import Link from "next/link";
import style from '@/features/header/Header.module.scss'
import Logo from "@/public_img/logo.svg";
import User from "@/features/header/img/User.svg";
const Header = () => {

  return (
    <header className={style.header}>
       <div className={style.logo}>
          <Link href="/main"><Image src={Logo} alt="logo" /></Link>
        </div>
        <div className={style.header_right}>
        <div >
          <Link href="/marketplace"><p className={style.p}>Marketplace</p></Link>
        </div>
        <div>
          <Link href="/rank"><p className={style.p}>Rankings</p></Link>
        </div>
        <div>
          <Link href="/Connect"><p className={style.p}>Connect a wallet</p></Link>
        </div>
        <Link href="/Create">  <div className={style.sign_up}>
          
<div>
<Image src={User} alt="User" />
</div>

<p className={style.p}>Sign Up</p>

          </div></Link>
        </div>
    </header>
  );
};

export default Header;