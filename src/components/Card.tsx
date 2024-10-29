import { useState } from "react";
import Modal from "./Modal";
import githubImg from "../assets/logos/gihub.svg";
import linkedinImg from "../assets/logos/linkedin.png";

interface CardInterface {
	fullname: string;
	github: string;
	linkedin: string;
	avatar: string;
	description: string;
}

function Card({
	fullname,
	github,
	linkedin,
	avatar,
	description,
}: CardInterface) {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleClick = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<>
			<section className="card">
				<img src={avatar} alt={"avatar de " + fullname} />
				<h2 onClick={handleClick}>{fullname}</h2>
				<div className="links">
					<a href={github}>
						<img
							src={githubImg}
							alt="lien vers mon profil github"
						/>
					</a>
					<a href={linkedin}>
						<img
							src={linkedinImg}
							alt="Lien vers mon profil linkedIn"
						/>
					</a>
				</div>
			</section>
			<Modal
				isOpen={isModalOpen}
				onClose={handleClose}
				student={{ fullname, description, avatar }}
			/>
		</>
	);
}

export default Card;
