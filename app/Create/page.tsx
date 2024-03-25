"use client"
import style from './Create.module.scss'
import Image from "next/image";
import Moon from '@/app/Create/img/moon_people.png'
import User from "@/app/Create/img/User.png"
import Mail from "@/app/Create/img/mail.png"
import Lock from "@/app/Create/img/LockKey.png"
import anime from 'animejs';
import { useEffect, useRef } from 'react';


const Create = () => {
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

            <h3>Create account</h3>

            <p>
              Welcome! enter your details and start <br /> creating, collecting and selling NFTs.
            </p>

          </div>
          <form action="">
            <div className={style.input_div}>
              <Image src={User} alt="User" /> <input type="text" placeholder='Username' minLength={3}  maxLength={34} required className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Mail} alt="Mail" /> <input type="email" multiple minLength={3}  maxLength={34} required placeholder='Email Address' className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Lock} alt="Lock" /> <input type="password" name="password" placeholder='Password' required minLength={3}  maxLength={34}    className={style.user} />
            </div>
            <div className={style.input_div}>
              <Image src={Lock} alt="Lock" /> <input type="password" name="confirm" placeholder='Confirm Password' required minLength={3}  maxLength={34}     className={style.user} />
            </div>
  <input type="submit" value="Create account"  className={style.input_div2}  />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;