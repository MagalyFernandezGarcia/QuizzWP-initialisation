import { useState } from "react";
import { LoginUser } from "../../services/autServices";
import "./login.css";
import { Link } from "react-router-dom";

const Login = ({
	onSetAuth,
}: {
	onSetAuth: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const success = await LoginUser(username, password);
			if (success) {
				onSetAuth(username);
				window.location.href = "/";
			} else {
				setError("identifiants incorrects");
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
					<label htmlFor="password">Mot de passe : </label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="fuzzBtn" type="submit">
					Se connecter
				</button>
				<Link to={"/createUser"}>Créer un compte</Link>
			</form>
		</div>
	);
};

export default Login;
