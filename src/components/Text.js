const Text = (props) => {
	const handleInput = (ev) => {
		props.handleLastLetter(ev.key);
	};

	const handleOnSumbit = (ev) => {
		ev.preventDefault();
	};
	return (
		<section>
			<div className="solution">
				<h2 className="title">Solución:</h2>
				<ul className="letters">{props.renderSolutionLetters()}</ul>
			</div>
			<div className="error">
				<h2 className="title">Letras falladas:</h2>
				<ul className="letters">{props.renderWrongLetters()}</ul>
			</div>
			<form className="form" onSubmit={handleOnSumbit}>
				<label className="title" htmlFor="last-letter">
					Escribe una letra:
				</label>
				<input
					value={props.value}
					onKeyUp={handleInput}
					autoComplete="off"
					className="form__input"
					maxLength="1"
					type="text"
					name="last-letter"
					id="last-letter"
					pattern="^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$"
				/>
			</form>
		</section>
	);
};

export default Text;
