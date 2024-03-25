import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";

const Block7 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>Top Creators</h3>
            <p className={style.p}>Check out top ranking NFT artists on the NFT Marketplace.</p>
          </div>
          
        </div>


      </div>
    </div>
  );
};

export default Block7;