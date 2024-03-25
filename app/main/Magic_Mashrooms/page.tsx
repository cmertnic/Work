"use client"
import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import mashrom from "@/public_img/Highlight.png";
import Eye from "@/public_img/Eye.svg";
import Avatar from "@/massives/Worker/Card2_img/small_avatar.png";
import Timer from "@/widgets/Timer/Timer";
const Block6 = () => {

  return (
    <div className={style.Block}>
      <div className={style.mashrom}>
        <Image src={mashrom} alt="mashrom" />
      </div>

      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <Link href="/Create" >
              <div className={style.Get_Started2}>
                <Image src={Avatar} alt="Avatar" />
                <p className={style.p3}>Shroomie</p>


              </div></Link>
            <h3>Magic Mashrooms</h3>
            <Link href="/marketplace" >
              <div className={style.Get_Started}>
                <Image src={Eye} alt="Eye" />
                <p className={style.p2}>See NFT</p>


              </div></Link>
          </div>

          <div className={style.Timer_div}>
            <p className={style.timer_action}>Auction ends in:</p>
            <Timer />
            <div className={style.timer_hours}>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>

          </div>

        </div>






      </div>
    </div>
  );
};

export default Block6;