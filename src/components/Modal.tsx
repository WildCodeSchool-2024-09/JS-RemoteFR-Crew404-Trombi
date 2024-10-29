interface ModalInterface {
	isOpen: boolean;
	onClose: () => void;
	student: {
		fullname: string;
		description: string;
		avatar: string;
	};
}

function Modal({ isOpen, onClose, student }: ModalInterface) {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div>
					<img src={student.avatar} alt={student.fullname} />
					<p>{student.fullname}</p>
				</div>
				<p>{student.description}</p>
				<button onClick={onClose}>Merci !</button>
			</div>
		</div>
	);
}

export default Modal;
