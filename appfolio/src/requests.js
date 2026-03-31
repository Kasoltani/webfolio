export async function getPortfolio() {
  const response = await fetch("/api/portfolio");

  if (!response.ok) {
    throw new Error("Failed to load portfolio data.");
  }

  return response.json();
}
