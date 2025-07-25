(function() {
  const keywords = ["crypto", "token", "bnb", "passive income", "staking", "trading", "web3", "airdrop", "defi", "lottery"];
  const keyStorageKey = "tiffyBlueKeys";

  // Create Widget Container
  const widget = document.createElement("div");
  widget.id = "tiffy-awareness-widget";
  widget.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    height: 300px;
    z-index: 9999;
    cursor: pointer;
    display: none;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 25px #00f6ff;
  `;

  // Create Slideshow Image Element
  const img = document.createElement("img");
  img.src = "https://tiffyai.github.io/Stamp/T1.jpg";
  img.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: pulseGlow 2s infinite;
  `;
  widget.appendChild(img);
  document.body.appendChild(widget);

  // Slideshow Logic
  let index = 1;
  setInterval(() => {
    index = (index % 10) + 1;
    img.src = `https://tiffyai.github.io/Stamp/T${index}.jpg`;
  }, 3000);

  // Pulsing Style
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes pulseGlow {
      0% { filter: drop-shadow(0 0 10px #00f6ff); }
      50% { filter: drop-shadow(0 0 30px #00f6ff); }
      100% { filter: drop-shadow(0 0 10px #00f6ff); }
    }
  `;
  document.head.appendChild(style);

  // LocalStorage Key Management
  function getBlueKeyCount() {
    return parseInt(localStorage.getItem(keyStorageKey) || "0");
  }

  function rewardBlueKey() {
    const current = getBlueKeyCount();
    localStorage.setItem(keyStorageKey, current + 1);
  }

  function showMessage(msg) {
    alert("👁️ TiffyAI says:\n\n" + msg);
  }

  function handleWidgetClick() {
    const blueKeys = getBlueKeyCount();

    if (blueKeys === 0) {
      showMessage("Hey, I see you have zero keys and you're into crypto. Here's a tip. Take this Blue Key! You've earned it! Start unlocking serious crypto payouts.");
    } else if (blueKeys <= 2) {
      showMessage(`You've got ${blueKeys} Blue Key${blueKeys > 1 ? 's' : ''}. You're so close to unlocking the Lucky Wheel! Here's one more from me!`);
    } else {
      const responses = [
        "You're stacking up those keys like a true treasure hunter!",
        "You're on fire! 💎 Here's a bonus Blue Key, because legends like you deserve it.",
        "Your energy is off the charts! TiffyAI sees you. Accept this extra Blue Key on your journey."
      ];
      showMessage(responses[Math.floor(Math.random() * responses.length)]);
    }

    rewardBlueKey();
    window.location.href = "/Start";
  }

  // Keyword Detection & Widget Activation
  function scanForKeywords() {
    const text = document.body.innerText.toLowerCase();
    for (let word of keywords) {
      if (text.includes(word)) {
        widget.style.display = "block";
        widget.title = "🔍 TiffyAI detected your curiosity...";
        widget.onclick = handleWidgetClick;
        break;
      }
    }
  }

  window.addEventListener("DOMContentLoaded", scanForKeywords);
})();
