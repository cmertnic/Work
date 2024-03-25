import Image from "next/image";
import Link from "next/link";
import style from "@/features/footer/Footer.module.scss";
const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footer_div}>
				<div className={style.footer_div_top}>
					<div >
						<h3 className={style.h3}>Explore</h3>
					</div>
					<div >
						<Link href="/marketplace"><p className={style.p}>Marketplace</p></Link>
					</div>
					<div >
						<Link href="/rank"><p className={style.p}>Rankings</p></Link>
					</div>
					<div >
						<Link href="/Connect"><p className={style.p}>Connect a wallet</p></Link>
					</div>
				</div>
				<div className={style.footer_div_bottom}>
					<div >
						<h3 className={style.h3}>Join our weekly digest</h3>
					</div>
					<div >
						<Link href="/main"><p className={style.p}>Get exclusive promotions & updates<br /> straight to your inbox.</p></Link>
					</div>
					<form action="">
<input type="email" placeholder="Enter your email here" multiple minLength={3} required maxLength={34} className={style.mail} />
<input type="submit" value="Subscribe" className={style.Subscribe} />
					</form>
					<div>

					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;