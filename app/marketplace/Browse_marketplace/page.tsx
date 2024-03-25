import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Loop from "@/public_img/MagnifyingGlass.png"
const Block1 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >

          <div className={style.block_1_2} >
            <h3>Browse Marketplace</h3>
            <p className={style.p}>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <form action="" className={style.block1_5}>
<input className={style.search_input}  placeholder='Search your favourite NFTs'  required    minLength={2} maxLength={120} type="search" />
<div  className={style.search_loop}>
  <Image src={Loop} alt="Search" className={style.loop}></Image><input className={style.search_btn} type="submit" value=" "  />
</div>

          </form>
        </div>


      </div>
    </div>
  );
};

export default Block1;