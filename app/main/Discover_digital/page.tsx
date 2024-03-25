"use client"
import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Rocket from "@/public_img/RocketLaunch.png";
import Masive from '@/massives/Worker/masive_card_Discover_digital';
import Card from '@/cards/main/Card_1/Card';
import anime from 'animejs';
import { useEffect, useRef } from 'react';


const Block = () => {
  const Text = useRef(null)
  useEffect(() => {
    anime({
      targets: Text.current,
      translateX: {
        value: [200, 0],
        duration: 5000,

      }
    })

  }, [])


  const Num = useRef(null)
  useEffect(() => {
    var roundLogEl = document.querySelector('.round-log');
    anime({
      targets: Num.current, roundLogEl,
      innerHTML: [0, 240],
      duration: 3000,
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal

    });

  }, []);

  const Num2 = useRef(null)
  useEffect(() => {
    var roundLogEl = document.querySelector('.round-log');
    anime({
      targets: Num2.current, roundLogEl,
      innerHTML: [0, 100],
      duration: 3000,
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
    });

  }, []);

  const Num3 = useRef(null)
  useEffect(() => {
    var roundLogEl = document.querySelector('.round-log');
    anime({
      targets: Num3.current, roundLogEl,
      duration: 3000,
      innerHTML: [0, 240],
      easing: 'linear',
      round: 10 // Will round the animated value to 1 decimal
    });

  }, []);

  return (
    <div className={style.Block}>
      <div className={style.Block_row} ref={Text}>
        <div className={style.block_1} >
          <div>
            <h3>Discover<br /> digital art &<br /> Collect NFTs</h3>
            <p className={style.p} >NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>
          </div>
          <Link href="/marketplace">
            <div className={style.Get_Started}>

              <div>
                <Image src={Rocket} alt="User" />
              </div>

              <p className={style.p2}>Get Started</p>


            </div></Link>
          <div className={style.block_1_2}>
            <ul className={style.ul1}>
              <ul className={style.p4}>
                <li ref={Num}>240</li><li>k+</li>
              </ul>
              <li className={style.p3}>Total Sale</li>
            </ul>
            <ul className={style.ul1}>
              <ul className={style.p4}>
                <li ref={Num2}>100</li><li>k+</li>
              </ul>
              <li className={style.p3}>Auctions</li>
            </ul>
            <ul className={style.ul1}>
              <ul className={style.p4}>
                <li ref={Num3}>240</li><li>k+</li>
              </ul>
              <li className={style.p3}>Artists</li>
            </ul>
          </div>
        </div>


        <div>
          {Masive.map((card, i) => <Card title={card.title} text={card.text} img={card.img} img2={card.img2} />)}
        </div>


      </div>
    </div>
  );
};

export default Block;