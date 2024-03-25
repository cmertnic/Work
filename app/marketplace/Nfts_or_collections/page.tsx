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
              <p className={style.p}>NFTs</p>
              <div className={style.Cards}>302</div>
            </div>
            <div className={style.Line}></div>
          </div>
          <div className={style.block_1_12} >
            <div className={style.block_1_2}>
              <p className={style.p}>Collections</p>
              <div className={style.Cards2}>67</div>
            </div>
            <div className={style.Line2}></div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Block2;