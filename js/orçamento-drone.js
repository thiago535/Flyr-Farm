function calculateQuote() {
  const droneModel = document.getElementById("droneModel").value;
  const usageWeeks = parseFloat(document.getElementById("usageWeeks").value);
  const region = document.getElementById("region").value;
  const propertySize = parseFloat(
    document.getElementById("propertySize").value
  );

  if (!droneModel || isNaN(usageWeeks) || !region || isNaN(propertySize)) {
    document.getElementById("quoteResult").innerText =
      "Por favor, preencha todos os campos.";
    return;
  }

  let basePrice = 0;
  let pricePerHectare = 0;

  switch (droneModel) {
    case "CROPEYL":
      basePrice = 200;
      pricePerHectare = 100;
      break;
    case "SPRAYTECH":
      basePrice = 400;
      pricePerHectare = 150;
      break;
    case "GROMAP":
      basePrice = 400;
      pricePerHectare = 80;
      break;
  }

  let total = basePrice * usageWeeks + propertySize * pricePerHectare;

  if (region === "norte" || region === "nordeste") {
    total *= 1.1; // Aumenta em 10% para regiões Norte e Nordeste
  }

  // Atualiza o resultado do orçamento
  document.getElementById("quoteResult").innerHTML =
    "Orçamento <strong>Estimado</strong>: R$ " + total.toFixed(2);

  // Configura o botão do WhatsApp
  const whatsappButton = document.getElementById("whatsappButton");
  const phoneNumber = "5517996575003"; // Número de telefone a ser usado
  const message = `Olá, gostaria de obter um orçamento de R$ ${total.toFixed(
    2
  )} para o modelo ${droneModel}.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  whatsappButton.href = whatsappLink; // Define o link do botão
  whatsappButton.style.display = "flex"; // Exibe o botão
}
