"use client"
import Image from "next/image";
import style from "@/cards/main/Card_7/Card_7.module.scss";
const Card5 = ({ title, img,text,  }) => {
	return (
		<>
			<div className={style.Card}>
				<div className={style.image}>
					<Image src={img} alt={title} />
				</div>
				<div className={style.textdivs}>
					<div className={style.textdiv}>
						<div className={style.text}>
							{title}
						</div>
						<div className={style.text2}>
						{text}
						</div>
					</div>


				</div>
			</div>


		</>


	);
}

export default Card5;

