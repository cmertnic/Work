import style from './Marketplace.module.scss'
import Block1 from "@/app/marketplace/Browse_marketplace/page";
import Block2 from "@/app/marketplace/Nfts_or_collections/page";
import Block3 from "@/app/marketplace/Nft_cards/page";
const Marketplace = () => {

  return (
    <div className={style.Marketplace}>
      <div className={style.Marketplace_row}>
      <Block1/>
      <Block2/>
      <Block3/>
      </div>
    </div>
  );
};

export default Marketplace;