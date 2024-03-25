import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Masive from '@/massives/Worker/masive_card_Join_our_weekly_digest';
import Card from '@/cards/main/Card_7/Card';
const Block7 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>How it works</h3>
            <p className={style.p}>Find out how to get started</p>
          </div>
          
        </div>


        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} img={card.img} text={card.text}/>)}
        </div>


      </div>
    </div>
  );
};

export default Block7;