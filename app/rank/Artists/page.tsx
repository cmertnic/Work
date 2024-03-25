import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Masive from '@/massives/rank/masive_1_card';
import Card from '@/cards/rank/card1/Card';
const Block3 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >
          <div className={style.block_1_1}>
            <div>
              <p className={style.p}>#</p>
            </div>
            <div >
              <p className={style.p}>Artist</p>
            </div>
          </div>
          <div className={style.block_1_2}>
            <div >
              <p className={style.p}>Change</p>
            </div>
            <div >
              <p className={style.p}>NFTs Sold</p>
            </div>
            <div >
              <p className={style.p}>Volume</p>
            </div>
          </div>
        </div>
        <div className={style.Cards}>
          {Masive.map((card, i) => <Card title={card.title} img={card.img} number={card.number} text={card.text} text2={card.text2} text3={card.text3} />)}
        </div>

      </div>
    </div>
  );
};

export default Block3;