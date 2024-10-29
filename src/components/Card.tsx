import githubImg from "../assets/logos/gihub.svg";
import linkedinImg from "../assets/logos/linkedin.png";

interface CardInterface {
	fullname: string;
	github: string;
	linkedin: string;
	avatar: string;
}

function Card({ fullname, github, linkedin, avatar }: CardInterface) {
	return (
		<section className="card">
			<img src={avatar} alt={"avatar de " + fullname} />
			<h2>{fullname}</h2>
			<div className="links">
				<a href={github}>
					<img src={githubImg} alt="lien vers mon profil github" />
				</a>
				<a href={linkedin}>
					<img
						src={linkedinImg}
						alt="Lien vers mon profil linkedIn"
					/>
				</a>
			</div>
		</section>
	);
}

export default Card;
