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

// export async function registerUser(
// 	username: string,
// 	email: string
// ): Promise<Boolean> {
// 	try {
// 		const response = await fetch("http://quizz.local/wp-login.php", {
// 			method: "POST",
// 			headers: {
// 				"content-Type": "application/x-www-form-urlencoded",
// 			},
// 			body: JSON.stringify({
// 				username,
// 				email,
// 			}),
// 			credentials: "include",
// 		});

// 		if (!response.ok) {
// 			const errorData = await response.json();
// 			console.error("Erreur lors de l'inscription :", errorData);
// 			return false;
// 		}

// 		return true;
// 	} catch (error) {
// 		console.error("Erreur lors de l'inscription", error);
// 		return false;
// 	}
// }

export async function registerUser(
	username: string,
	email: string
): Promise<boolean> {
	const formData = new URLSearchParams();
	formData.append("user_login", username);
	formData.append("user_email", email);
	formData.append("wp-submit", "Register"); // Nom du bouton
	formData.append("action", "register");
	formData.append("redirect_to", "/");

	try {
		const response = await fetch(
			"http://quizz.local/wp-login.php?action=register",
			{
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: formData.toString(),
				credentials: "include",
			}
		);

		// WordPress renverra une page de confirmation ou un message d’erreur
		// Il n'y a pas de code 4xx si c’est un échec partiel,
		// donc on peut devoir vérifier le contenu HTML.
		// Pour un premier test, on peut se contenter de response.ok:
		console.log(response);
		return response.ok;
	} catch (error) {
		console.error("Erreur lors de l’inscription :", error);
		throw error;
	}
}
