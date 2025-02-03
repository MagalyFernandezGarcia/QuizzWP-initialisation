export async function LoginUser(
	username: string,
	password: string
): Promise<Boolean> {
	const formData = new URLSearchParams();
	formData.append("log", username);
	formData.append("pwd", password);

	try {
		const response = await fetch("http://quizz.local/wp-login.php", {
			method: "POST",
			headers: { "content-Type": "application/x-www-form-urlencoded" },
			body: formData.toString(),
			credentials: "include",
		});

		return response.ok;
	} catch (error) {
		console.error("Erreur lors de la connexion", error);
		throw error;
	}
}

export async function RegisterUser(
	username: string,
	email: string
): Promise<Boolean> {
	try {
		const response = await fetch("http://quizz.local/wp-login.php", {
			method: "POST",
			headers: {
				"content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify({
				username,
				email,
			}),
			credentials: "include",
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Erreur lors de l'inscription :", errorData);
			return false;
		}

		return true;
	} catch (error) {
		console.error("Erreur lors de l'inscription", error);
		return false;
	}
}
