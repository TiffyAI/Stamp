(function () {
  const keywords = [
    "crypto", "token", "bnb", "passive income",
    "staking", "trading", "web3", "airdrop", "defi", "lottery"
  ];
  const keyStorageKey = "tiffyBlueKeys";

  const widget = document.createElement("div");
  widget.id = "tiffy-awareness-widget";
  widget.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:9999; cursor:pointer; display:none;";

  const img = document.createElement("img");
  img.src = "https://tiffyai.github.io/Stamp/T1.jpg";
  img.alt = "TiffyAI Widget";
  img.style.cssText = `
    width: 720px;
    height: auto;
    border-radius: 20px;
    filter: drop-shadow(0 0 12px #00f6ff);
    animation: pulseGlow 3s infinite;
    transition: opacity 1s ease-in-out;
  `;

  widget.appendChild(img);
  document.body.appendChild(widget);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes pulseGlow {
      0%   { transform: scale(1);   filter: drop-shadow(0 0 6px #00f6ff); }
      50%  { transform: scale(1.15); filter: drop-shadow(0 0 24px #00f6ff); }
      100% { transform: scale(1);   filter: drop-shadow(0 0 6px #00f6ff); }
    }
  `;
  document.head.appendChild(style);

  // Start the slideshow (T1.jpg to T10.jpg)
  let currentImage = 1;
  setInterval(() => {
    currentImage = (currentImage % 10) + 1;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = `https://tiffyai.github.io/Stamp/T${currentImage}.jpg`;
      img.style.opacity = 1;
    }, 500);
  }, 4000);

  function getBlueKeyCount() {
    return parseInt(localStorage.getItem(keyStorageKey) || "0");
  }

  function showMessage(msg) {
    alert("👁️ TiffyAI says:\n\n" + msg);
  }

  function rewardBlueKey() {
    const current = getBlueKeyCount();
    localStorage.setItem(keyStorageKey, current + 1);
  }

  function handleWidgetClick() {
    let current = getBlueKeyCount();
    let message = "";

    if (current === 0) {
      message = "Hey, I see you have zero keys and you're into crypto. Here's a tip. Take this Blue Key! You've earned it! Start unlocking serious crypto payouts.";
    } else if (current === 1 || current === 2) {
      message = `You've got ${current} Blue Key${current > 1 ? 's' : ''}. You're close to unlocking the Lucky Wheel! Here's one more!`;
    } else {
      const funLines = [
        "You're stacking those keys like a pro treasure hunter!",
        "Your curiosity just paid off! One more Blue Key added.",
        "Another key for the champion. Go claim your crypto rewards!"
      ];
      message = `${funLines[Math.floor(Math.random() * funLines.length)]}\n\nYou now have ${current} Blue Keys.`;
    }

    rewardBlueKey();
    showMessage(message);
    setTimeout(() => window.location.href = "/Start", 800);
  }

  function scanForKeywords() {
    const bodyText = document.body.innerText.toLowerCase();
    for (const word of keywords) {
      if (bodyText.includes(word)) {
        widget.style.display = "block";
        widget.title = "👁️ TiffyAI has detected your curiosity.";
        widget.onclick = handleWidgetClick;
        break;
      }
    }
  }

  window.addEventListener("DOMContentLoaded", scanForKeywords);
})();
