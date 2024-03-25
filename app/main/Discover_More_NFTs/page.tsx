import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Eye from "@/public_img/Eye.svg";
import Masive from '@/massives/Worker/masive_card_Discover_More_NFTs';
import Card from '@/cards/main/Card_5/Card';
const Block5 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>Discover More NFTs</h3>
            <p className={style.p}>Explore new trending NFTs</p>
          </div>
          
          <Link href="/marketplace" >
            <div className={style.Get_Started}>

              <div>
                <Image src={Eye} alt="Eye" />
              </div>

              <p className={style.p2}>See All</p>


            </div></Link>

        </div>


        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} img={card.img} img2={card.img2} name={card.name} Price={card.Price} Highest_Bid={card.Highest_Bid}/>)}
        </div>


      </div>
    </div>
  );
};

export default Block5;