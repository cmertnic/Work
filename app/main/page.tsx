import style from './Main.module.scss'
import Block1 from "@/app/main/Discover_digital/page";
import Block2 from "@/app/main/Trending_Collection/page";
import Block3 from "@/app/main/Top_creators/page";
import Block4 from "@/app/main/Browse_Categories/page";
import Block5 from "@/app/main/Discover_More_NFTs/page";
import Block6 from "@/app/main/Magic_Mashrooms/page";
import Block7 from "@/app/main/How_it_works/page";
import Block8 from "@/app/main/Join_our_weekly_digest/page";
const Main = () => {

  return (
    <div className={style.main}>
      <div className={style.main_row}>
        
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Block6/>
      <Block7/>
      <Block8/>
      </div>
    </div>
  );
};

export default Main;