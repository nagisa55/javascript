'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const results = ["大吉", "中吉", "凶", "末吉"];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.1) {
      btn.textContent = "大吉";
    } else if (n < 0.5) {
      btn.textContent = "中吉";
    } else {
      btn.textContent = "凶";
    }
  });
}