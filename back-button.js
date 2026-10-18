/* =========================================================
   各シミュレーションに「まちに戻る」ボタンを付けるスクリプト
   使い方：シミュレーションの HTML の </body> の直前に1行追加
     <script src="../back-button.js"></script>
   （このファイルの場所に合わせてパスを変える）
   自分のボタンや終了画面から戻したいときは backToTown() を呼ぶ。
   ========================================================= */
(() => {
  // このファイルと同じ場所にある index.html の選択画面を戻り先にする
  const TOWN_URL = new URL("index.html?scene=select", document.currentScript.src).href;

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap";
  document.head.appendChild(font);

  const style = document.createElement("style");
  style.textContent = `
    .btt-btn, .btt-dialog {
      position: fixed; z-index: 2147483647;
      font-family: "DotGothic16", monospace; color: #fff;
      background: rgba(10, 12, 40, 0.88);
      border: 3px solid #fff; border-radius: 8px;
      box-shadow: 0 0 0 2px #000, inset 0 0 0 2px #3b3f8f;
    }
    .btt-btn { left: 12px; bottom: 12px; padding: 6px 14px; font-size: 16px; cursor: pointer; }
    .btt-btn:hover { background: rgba(60, 64, 140, 0.95); }
    .btt-overlay { position: fixed; inset: 0; z-index: 2147483646; background: rgba(0, 0, 0, 0.5); display: none; }
    .btt-overlay.show { display: block; }
    .btt-dialog { left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 16px 22px; font-size: 20px; text-align: center; }
    .btt-dialog .btt-choices { display: flex; gap: 12px; justify-content: center; margin-top: 12px; }
    .btt-dialog button {
      font: inherit; color: #fff; background: transparent; cursor: pointer;
      border: 2px solid #fff; border-radius: 6px; padding: 2px 16px;
    }
    .btt-dialog button:hover, .btt-dialog button:focus { background: rgba(255, 255, 255, 0.15); outline: none; }
    .btt-fade { position: fixed; inset: 0; z-index: 2147483647; background: #000; opacity: 0; pointer-events: none; transition: opacity .5s; }
    .btt-fade.on { opacity: 1; }
  `;
  document.head.appendChild(style);

  const btn = document.createElement("div");
  btn.className = "btt-btn";
  btn.textContent = "← 街に戻る";

  const overlay = document.createElement("div");
  overlay.className = "btt-overlay";
  overlay.innerHTML = `
    <div class="btt-dialog">
      <div>街に 戻ろうか？</div>
      <div class="btt-choices"><button data-yes>はい</button><button data-no>いいえ</button></div>
    </div>`;

  const fade = document.createElement("div");
  fade.className = "btt-fade";

  document.body.append(btn, overlay, fade);

  function backToTown() {
    fade.classList.add("on");
    setTimeout(() => { location.href = TOWN_URL; }, 500);
  }

  btn.addEventListener("click", () => {
    overlay.classList.add("show");
    overlay.querySelector("[data-yes]").focus();
  });
  overlay.querySelector("[data-yes]").addEventListener("click", backToTown);
  overlay.querySelector("[data-no]").addEventListener("click", () => overlay.classList.remove("show"));

  window.backToTown = backToTown;
})();
