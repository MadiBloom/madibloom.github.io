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
    let details = '';

    if (category === 'weapons') {
      details = `Damage: ${item.damage} | Weight: ${item.weight}`;
    } else if (category === 'apparel') {
      details = `Armor: ${item.armor} | Weight: ${item.weight}`;
    } else if (category === 'junk') {
      details = `Value: ${item.value}`;
    } else if (category === 'misc') {
      details = `Quantity: ${item.quantity}`;
    }

    itemDiv.innerHTML = `<strong>${item.name}</strong> — ${details}`;
    content.appendChild(itemDiv);
  });
}
