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
	return (
		<section className="card">
			<img src={avatar} alt="avatar" />
			<h1>{fullname}</h1>
			<p>{description}</p>
			<div className="links">
				<a href={github}>Github</a>
				<a href={linkedin}>LinkedIn</a>
			</div>
		</section>
	);
}

export default Card;
