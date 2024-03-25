import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";

const Block2 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >
          <div className={style.block_1_11} >
            <div className={style.block_1_1}>
              <p className={style.p}>Today</p>
            </div>
            <div className={style.Line}></div>
          </div>
          <div className={style.block_1_12} >
            <div className={style.block_1_2}>
              <p className={style.p}>This Week</p>
            </div>
            <div className={style.Line2}></div>
          </div>
          <div className={style.block_1_12} >
            <div className={style.block_1_2}>
              <p className={style.p}>This Month</p>
            </div>
            <div className={style.Line2}></div>
          </div>
          <div className={style.block_1_12} >
            <div className={style.block_1_2}>
              <p className={style.p}>All Time</p>
            </div>
            <div className={style.Line2}></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Block2;