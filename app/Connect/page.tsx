"use client"
import style from './Connect.module.scss'
import Image from "next/image";
import Link from "next/link";
import Moon from "@/app/Connect/img/Moon2.png";
import Coin from "@/app/Connect/img/Coinbase.png";
import Meta from "@/app/Connect/img/Metamask.png";
import Wallet from "@/app/Connect/img/WalletConnect.png";
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const Connect = () => {
  const  Text=useRef(null)
useEffect(()=>{
anime({
  targets:Text.current,
  translateX:{
    value:[200,0],
    duration:5000
  }
})
},[]);



  return (
    <div className={style.Create}>
      <div className={style.Create_row}ref={Text}>
        <div className={style.img_div}>
          <Image src={Moon} alt="Moon" />
        </div>
        <div className={style.Create_div_2}>
          <div>

            <h3>Connect wallet</h3>

            <p className={style.p}>
              Choose a wallet you want to connect.  <br /> There are several wallet providers.
            </p>

          </div>
          <div>
            <Link href="https://metamask.io" >  <div className={style.sign_up}>


              <Image src={Meta} alt="User" />


              <p className={style.p2}>Metamask</p>

            </div></Link>
            <Link href="https://walletconnect.com">  <div className={style.sign_up} >


              <Image src={Wallet} alt="User" />


              <p className={style.p2}>Wallet Connect</p>

            </div></Link>
            <Link href="https://www.coinbase.com/ru/">  <div className={style.sign_up}>


              <Image src={Coin} alt="User" />


              <p className={style.p2}>Coinbase</p>

            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;