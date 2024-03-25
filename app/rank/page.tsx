import style from './Rank.module.scss'
import Block1 from '@/app/rank/Top_Creators/page'
import Block2 from '@/app/rank/Change_date/page'
import Block3 from '@/app/rank/Artists/page'
const Rank = () => {

  return (
    <div className={style.Rank}>
      <div className={style.Rank_row}>
      <Block1/>
      <Block2/>
      <Block3/>
      </div>
    </div>
  );
};

export default Rank;