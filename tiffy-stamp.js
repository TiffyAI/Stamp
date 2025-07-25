(function() {
  const keywords = ["crypto", "token", "bnb", "passive income", "staking", "trading", "web3", "airdrop", "defi", "lottery"];
  const keyStorageKey = "tiffyBlueKeys";

  const widget = document.createElement("div");
  widget.id = "tiffy-awareness-widget";
  widget.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:9999; cursor:pointer; display:none;";
  widget.innerHTML = `<img src="https://tiffyai.github.io/TIFF.png" alt="TiffyAI Widget" style="width:100px; height:auto; filter:drop-shadow(0 0 12px #00f6ff); animation: pulseGlow 2s infinite;">`;
  document.body.appendChild(widget);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes pulseGlow {
      0% { filter: drop-shadow(0 0 6px #00f6ff); }
      50% { filter: drop-shadow(0 0 24px #00f6ff); }
      100% { filter: drop-shadow(0 0 6px #00f6ff); }
    }
  `;
  document.head.appendChild(style);

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
    const blueKeys = getBlueKeyCount();
    if (blueKeys === 0) {
      showMessage("Hey, I see you have zero keys and you're into crypto. Here's a tip. Take this Blue Key! You've earned it! Start unlocking serious crypto payouts.");
    } else if (blueKeys === 1 || blueKeys === 2) {
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

  function scanForKeywords() {
    const bodyText = document.body.innerText.toLowerCase();
    for (const word of keywords) {
      if (bodyText.includes(word)) {
        widget.style.display = "block";
        widget.title = "🔍 TiffyAI detected your curiosity...";
        widget.onclick = handleWidgetClick;
        break;
      }
    }
  }

  window.addEventListener("DOMContentLoaded", scanForKeywords);
})();
