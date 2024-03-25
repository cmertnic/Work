import style from './Block.module.scss'
import Image from "next/image";
import Cosmo_man from "@/public_img/cosmo_man.png";
import mail from "@/public_img/mail.png";
const Block8 = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_1} >
          <Image className={style.image} src={Cosmo_man} alt="Cosmo_man" />
          <div className={style.block_1_2} >
            <h3>Join our weekly digest</h3>
            <p className={style.p}>Get exclusive promotions & updates straight to your inbox.</p>
            <form action="">
              <input type="email" required placeholder="Enter your email here"  multiple minLength={3}  maxLength={34} className={style.mail} />
              <Image src={mail} alt="mail"  className={style.mini_mail} />
              <input type="submit" value="Subscribe" className={style.Subscribe} />

            </form>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Block8;