async function loadCategory(category) {
  const response = await fetch('data/inventory.json');
  const data = await response.json();
  const content = document.getElementById('content');
  content.innerHTML = '';

  if (category === 'caps' || category === 'health') {
    content.innerHTML = `<p>${category.toUpperCase()}: ${data[category]}</p>`;
    return;
  }

  const items = data[category];
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<strong>${item.name}</strong>: ${JSON.stringify(item)}`;
    content.appendChild(itemDiv);
  });
}
