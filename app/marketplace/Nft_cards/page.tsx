import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Masive from '@/massives/marketplace/masive_1_card';
import Card from '@/cards/marketplace/Card_1/Card';
const Block3 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} img={card.img} img2={card.img2} name={card.name} Price={card.Price} Highest_Bid={card.Highest_Bid}/>)}
        </div>


      </div>
    </div>
  );
};

export default Block3;