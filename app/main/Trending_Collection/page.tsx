import style from './Block.module.scss'
import Masive from '@/massives/Worker/masive_card_Trending_Collection';
import Card from '@/cards/main/Card_2/Card';
const Block2 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >
        <h3>Trending Collection</h3>
        <p>Checkout our weekly updated trending collection.</p>
        </div>


        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} text={card.text} img={card.img} img2={card.img2} img3={card.img3} img4={card.img4} img5={card.img5} />)}
        </div>


      </div>
    </div>
  );
};

export default Block2;