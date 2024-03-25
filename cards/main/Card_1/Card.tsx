"use client"
import Image from "next/image";
import Link from "next/link";
import style from "@/cards/main/Card_1/Card_1.module.scss";
const Card = ({ title, img, img2, text }) => {
	return (
		<>
			<div className={style.image}>
				<Image src={img} alt={text} />
			</div>
			<div className={style.textdivs}>
				<div className={style.textdiv}>
					<div className={style.text}>
						{title}
					</div>
					<div className={style.div_avatar}>
						<Image src={img2} alt={text} />
						<div className={style.text2}>
							{text}
						</div>
					</div>

				</div>
			</div>

		</>


	);
}

export default Card;

