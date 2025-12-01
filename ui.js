export function renderList(containerId, items) {
  const container = document.getElementById(containerId);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <lottie-player src="${item.file}" autoplay loop></lottie-player>
      <p>${item.name}</p>
      <button onclick="selectItem('${item.file}')">Pilih</button>
    `;

    container.appendChild(card);
  });
}
