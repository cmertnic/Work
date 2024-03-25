import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Rocket from "@/public_img/RocketLaunch_fiol.svg";
import Masive from '@/massives/Worker/masive_card_Top_creators';
import Card from '@/cards/main/Card_3/Card';
const Block3 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>Top creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          
          <Link href="/rank" >
            <div className={style.Get_Started}>

              <div>
                <Image src={Rocket} alt="Rocket" />
              </div>

              <p className={style.p2}>View Rankings</p>


            </div></Link>

        </div>


        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} img={card.img} number={card.number} text={card.text} text2={card.text2}   />)}
        </div>


      </div>
    </div>
  );
};

export default Block3;