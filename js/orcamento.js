function openWhatsApp() {
  const select = document.getElementById("whatsapp-select");
  const number = select.value;

  if (number) {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, "_blank");
  } else {
    alert("Por favor, selecione uma pessoa!");
  }
}
