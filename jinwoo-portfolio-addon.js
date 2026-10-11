/*
 * JINWOO SYSTEM — Portfolio project add-on
 * Add this file to your portfolio repository and load it with:
 * <script src="jinwoo-portfolio-addon.js" defer></script>
 * The View Site buttons open the live JINWOO SYSTEM GitHub Pages site.
 */
(function () {
  'use strict';

  const SITE_URL = 'https://kapildantil.github.io/the-jinwoo-system/';
  const PROJECT_ID = 'jinwoo-system-project';
  const MODAL_ID = 'jinwoo-system-modal';

  function addStyles() {
    if (document.getElementById('jinwoo-system-addon-styles')) return;
    const style = document.createElement('style');
    style.id = 'jinwoo-system-addon-styles';
    style.textContent = `
      #${PROJECT_ID} { margin-top: 1.5rem; position: relative; overflow: hidden; }
      #${PROJECT_ID}::after { content: ''; position:absolute; width:210px; height:210px; right:-95px; top:-105px; border-radius:50%; pointer-events:none; background:radial-gradient(circle,rgba(124,242,201,.15),rgba(157,123,255,.07) 45%,transparent 72%); }
      #${PROJECT_ID} .jinwoo-icon { width:42px;height:42px;display:grid;place-items:center;border-radius:14px;background:rgba(124,242,201,.11);border:1px solid rgba(124,242,201,.3);font-size:1.25rem;margin-bottom:1rem;box-shadow:0 0 24px rgba(124,242,201,.08); }
      #${PROJECT_ID} .jinwoo-actions { display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.25rem; }
      #${PROJECT_ID} .jinwoo-secondary { display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.75rem 1.1rem;border:1px solid var(--glass-b,rgba(255,255,255,.16));border-radius:999px;color:var(--text,#fff);background:rgba(255,255,255,.045);font:inherit;font-weight:700;text-decoration:none;cursor:pointer;transition:transform .2s,border-color .2s,background .2s; }
      #${PROJECT_ID} .jinwoo-secondary:hover { transform:translateY(-2px);border-color:var(--mint,#7cf2c9);background:rgba(124,242,201,.08); }
      #${MODAL_ID} { position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:1.25rem;background:rgba(4,3,18,.76);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px); }
      #${MODAL_ID}.is-open { display:flex;animation:jinwooFadeIn .2s ease both; }
      #${MODAL_ID} .jinwoo-dialog { width:min(650px,100%);max-height:min(86vh,780px);overflow:auto;position:relative;border:1px solid rgba(124,242,201,.25);border-radius:24px;padding:clamp(1.4rem,4vw,2.4rem);color:var(--text,#f4f2ff);background:linear-gradient(145deg,rgba(18,15,48,.98),rgba(8,7,27,.98));box-shadow:0 30px 100px rgba(0,0,0,.5),0 0 45px rgba(91,92,255,.12); }
      #${MODAL_ID} .jinwoo-close { position:absolute;right:1rem;top:1rem;width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:inherit;font-size:1.35rem;cursor:pointer; }
      #${MODAL_ID} .jinwoo-eyebrow { color:var(--mint,#7cf2c9);font-size:.78rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin:0 3rem 1rem 0; }
      #${MODAL_ID} h2 { margin:0 2.5rem .75rem 0;font-size:clamp(2rem,6vw,3rem);line-height:1.05;letter-spacing:-.04em; }
      #${MODAL_ID} .jinwoo-description { color:var(--muted,#b7b3d3);line-height:1.75;margin:0 0 1.3rem; }
      #${MODAL_ID} .jinwoo-feature-grid { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.7rem;margin:1.25rem 0 1.4rem; }
      #${MODAL_ID} .jinwoo-feature { border:1px solid rgba(255,255,255,.1);border-radius:13px;padding:.85rem;background:rgba(255,255,255,.035);font-size:.9rem; }
      #${MODAL_ID} .jinwoo-feature b { display:block;color:var(--mint,#7cf2c9);font-size:.78rem;margin-bottom:.25rem; }
      #${MODAL_ID} .jinwoo-tech { display:flex;flex-wrap:wrap;gap:.45rem;margin-bottom:1.5rem; }
      #${MODAL_ID} .jinwoo-tech span { border:1px solid rgba(124,242,201,.18);background:rgba(124,242,201,.06);border-radius:99px;padding:.35rem .7rem;font-size:.8rem; }
      #${MODAL_ID} .jinwoo-modal-actions { display:flex;gap:.7rem;flex-wrap:wrap; }
      #${MODAL_ID} .jinwoo-modal-actions .btn { cursor:pointer; }
      @keyframes jinwooFadeIn { from{opacity:0} to{opacity:1} }
      @media(max-width:520px) { #${MODAL_ID} .jinwoo-feature-grid{grid-template-columns:1fr} #${MODAL_ID} .jinwoo-dialog{border-radius:18px} }
      @media(prefers-reduced-motion:reduce) { #${MODAL_ID}.is-open{animation:none} #${PROJECT_ID} *,#${MODAL_ID} *{transition:none!important} }
    `;
    document.head.appendChild(style);
  }

  function makeCard() {
    const card = document.createElement('article');
    card.className = 'added-card glass reveal in';
    card.id = PROJECT_ID;
    card.innerHTML = `
      <div class="added-project">
        <div>
          <div class="added-kicker">03 · Personal project · Productivity system</div>
          <div class="jinwoo-icon" aria-hidden="true">⚡</div>
          <h3>JINWOO SYSTEM</h3>
          <p>A Solo Leveling-inspired productivity dashboard that turns everyday goals into quests. Complete tasks, earn XP, level up, track player stats, and organise your weekly timetable through a futuristic RPG-style interface.</p>
          <div class="added-tags">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Quest tracking</span><span>XP & levels</span><span>LocalStorage</span>
          </div>
          <div class="jinwoo-actions">
            <button class="btn primary magnet" type="button" data-jinwoo-open>Preview project ↗</button>
            <a class="jinwoo-secondary" href="${SITE_URL}" target="_blank" rel="noopener noreferrer">View Site ↗</a>
          </div>
        </div>
        <span class="arrow" aria-hidden="true">↗</span>
      </div>`;
    return card;
  }

  function makeModal() {
    const modal = document.createElement('div');
    modal.id = MODAL_ID;
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <section class="jinwoo-dialog" role="dialog" aria-modal="true" aria-labelledby="jinwoo-modal-title">
        <button class="jinwoo-close" type="button" aria-label="Close project preview" data-jinwoo-close>×</button>
        <p class="jinwoo-eyebrow">Personal project · Productivity × RPG</p>
        <h2 id="jinwoo-modal-title">JINWOO <span style="color:var(--mint,#7cf2c9)">SYSTEM</span></h2>
        <p class="jinwoo-description">Your routine, redesigned as a progression system. JINWOO SYSTEM combines a weekly timetable and quest management with game-inspired rewards to make consistent effort feel measurable and engaging.</p>
        <div class="jinwoo-feature-grid">
          <div class="jinwoo-feature"><b>01 / QUESTS</b>Create, complete, undo, and manage tasks.</div>
          <div class="jinwoo-feature"><b>02 / PROGRESSION</b>Earn XP, gain levels, and advance through ranks.</div>
          <div class="jinwoo-feature"><b>03 / PLAYER STATS</b>Track attributes and personal progress.</div>
          <div class="jinwoo-feature"><b>04 / TIMETABLE</b>Organise weekly sessions and study blocks.</div>
        </div>
        <div class="jinwoo-tech"><span>HTML5</span><span>CSS3</span><span>Vanilla JavaScript</span><span>LocalStorage</span><span>Responsive UI</span></div>
        <div class="jinwoo-modal-actions">
          <a class="btn primary magnet" href="${SITE_URL}" target="_blank" rel="noopener noreferrer">View Site ↗</a>
          <button class="jinwoo-secondary" type="button" data-jinwoo-close>Back to portfolio</button>
        </div>
      </section>`;
    return modal;
  }

  function init() {
    const projects = document.getElementById('projects');
    if (!projects || document.getElementById(PROJECT_ID)) return;
    addStyles();

    const card = makeCard();
    const soon = projects.querySelector('.soon');
    if (soon) projects.querySelector('.wrap')?.insertBefore(card, soon);
    else projects.querySelector('.wrap')?.appendChild(card);

    const modal = makeModal();
    document.body.appendChild(modal);

    const openModal = () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      modal.querySelector('[data-jinwoo-close]')?.focus();
    };
    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      card.querySelector('[data-jinwoo-open]')?.focus();
    };

    card.querySelector('[data-jinwoo-open]')?.addEventListener('click', openModal);
    modal.querySelectorAll('[data-jinwoo-close]').forEach(button => button.addEventListener('click', closeModal));
    modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
