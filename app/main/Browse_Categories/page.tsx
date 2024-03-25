import style from './Block.module.scss'
import Masive from '@/massives/Worker/masive_card_Browse_Categories';
import Card from '@/cards/main/Card_4/Card';
const Block4 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>Browse Categories</h3>
          </div>
          

        </div>


        <div className={style.Cards}>
        {Masive.map((card, i) => <Card title={card.title} img={card.img}/>)}
        </div>


      </div>
    </div>
  );
};

export default Block4;