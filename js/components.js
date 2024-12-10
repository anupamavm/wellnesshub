async function loadComponent(componentPath, targetId) {
	try {
		const response = await fetch(componentPath);
		if (response.ok) {
			const content = await response.text();
			document.getElementById(targetId).innerHTML = content;
		} else {
			console.error(`Error loading component: ${componentPath}`);
		}
	} catch (error) {
		console.error(`Error: ${error}`);
	}
}

// Function to load pages dynamically
async function loadPage(pageName) {
	const pagePath = `pages/${pageName}.html`;
	await loadComponent(pagePath, "page-content");
}

// Initialize header, footer, and default page
document.addEventListener("DOMContentLoaded", () => {
	loadComponent("components/header.html", "header");
	loadComponent("components/footer.html", "footer");
	loadPage("home"); // Default page is 'home'
});
