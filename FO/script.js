async function loadCategory(category) {
  try {
    const response = await fetch('data/inventory.json');
    const data = await response.json();

    const content = document.getElementById('content');
    const healthDisplay = document.getElementById('health-display');
    const capsDisplay = document.getElementById('caps-display');

    // Update health and caps
    healthDisplay.innerHTML = `❤️ Health: ${data.health}`;
    capsDisplay.innerHTML = `🪙 Caps: ${data.caps}`;

    // Clear and repopulate category content
    content.innerHTML = '';

    if (!data[category]) {
      content.innerHTML = `<p>No data found for category: ${category}</p>`;
      return;
    }

    const items = data[category];
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      let details = '';

      switch (category) {
        case 'weapons':
          details = `Damage: ${item.damage} | Weight: ${item.weight}`;
          break;
        case 'apparel':
          details = `Armor: ${item.armor} | Weight: ${item.weight}`;
          break;
        case 'junk':
          details = `Value: ${item.value}`;
          break;
        case 'misc':
          details = `Quantity: ${item.quantity}`;
          break;
        default:
          details = '';
      }

      itemDiv.innerHTML = `<strong>${item.name}</strong> — ${details}`;
      content.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error loading category:', error);
    document.getElementById('content').innerHTML = `<p>Error loading data.</p>`;
  }
}
