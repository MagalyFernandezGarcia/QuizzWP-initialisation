import { useState } from "react";

import { registerUser } from "../../services/autServices";

const CreateUser = ({
	onSetAuth,
}: {
	onSetAuth: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [username, setUsername] = useState("");

	const [email, setEmail] = useState("");
	const [error, setError] = useState<string | null>();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const success = await registerUser(username, email);
			if (success) {
				onSetAuth(username);
				window.location.href = "/";
			} else {
				setError("le compte n'est pas créé, veuillez recommencer");
			}
		} catch (error) {
			setError("une erreur est survenue");
		}
	};

	return (
		<div className="logCard">
			<h2>Connexion</h2>
			<p>{error}</p>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Nom d'utilisateur : </label>
					<input
						id="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="username">Email : </label>
					<input
						id="email"
						type="mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<button className="fuzzBtn" type="submit">
					Créer le compte
				</button>
			</form>
		</div>
	);
};

export default CreateUser;
