(() => {
  const data = window.PORTFOLIO || {};
  const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const validUrl = (value) => {
    try { const url = new URL(value); return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.href : ""; }
    catch { return ""; }
  };
  const externalLink = (url, label, css = "") => {
    const target = validUrl(url);
    return target ? `<a class="${css}" href="${safe(target)}" target="_blank" rel="noopener noreferrer">${safe(label)} <span>↗</span></a>` : `<span class="${css} disabled-link">${safe(label)}</span>`;
  };

  const projectIllustrations = {
    cortex: `<svg viewBox="0 0 520 300" aria-hidden="true"><g fill="none" stroke="#85789f" stroke-width="2"><path d="M120 151 215 83 310 135 401 76M120 151 202 226 310 135 389 218M215 83 202 226M310 135 401 76M310 135 389 218"/><path d="m215 83 95 52" stroke="#e9785c"/></g><g fill="#f7f4ee" stroke="#75688f" stroke-width="3"><circle cx="120" cy="151" r="16"/><circle cx="215" cy="83" r="19"/><circle cx="310" cy="135" r="22"/><circle cx="401" cy="76" r="13"/><circle cx="202" cy="226" r="14"/><circle cx="389" cy="218" r="18"/></g><circle cx="310" cy="135" r="7" fill="#e9785c"/><g fill="#74688b" opacity=".7"><circle cx="99" cy="83" r="3"/><circle cx="438" cy="157" r="3"/><circle cx="277" cy="51" r="3"/><circle cx="145" cy="236" r="3"/></g></svg>`,
    momentum: `<svg viewBox="0 0 520 300" aria-hidden="true"><path d="M76 228H451M76 228V58" fill="none" stroke="#b9bcb0" stroke-width="2"/><g fill="#9eae9c"><rect x="111" y="172" width="32" height="56" rx="3"/><rect x="171" y="146" width="32" height="82" rx="3"/><rect x="231" y="155" width="32" height="73" rx="3"/><rect x="291" y="114" width="32" height="114" rx="3"/><rect x="351" y="89" width="32" height="139" rx="3"/></g><path d="m111 143 76-32 76 12 76-61 76-24" fill="none" stroke="#e9785c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g fill="#f7f6f2" stroke="#e9785c" stroke-width="3"><circle cx="111" cy="143" r="6"/><circle cx="187" cy="111" r="6"/><circle cx="263" cy="123" r="6"/><circle cx="339" cy="62" r="6"/><circle cx="415" cy="38" r="6"/></g><path d="M102 250H418" stroke="#c8c8bb" stroke-dasharray="3 8"/></svg>`,
    sql: `<svg viewBox="0 0 520 300" aria-hidden="true"><g fill="none" stroke="#718b82" stroke-width="2"><path d="M177 106h166M177 195h166M260 106v89M177 106l83-43 83 43M177 195l83 43 83-43"/><path d="M194 106v89M326 106v89" stroke-dasharray="4 6" opacity=".7"/></g><g fill="#f8f6ef" stroke="#718b82" stroke-width="2"><rect x="72" y="81" width="110" height="50" rx="5"/><rect x="338" y="81" width="110" height="50" rx="5"/><rect x="205" y="174" width="110" height="54" rx="5"/></g><g fill="#718b82"><circle cx="91" cy="97" r="4"/><circle cx="357" cy="97" r="4"/><circle cx="224" cy="191" r="4"/></g><g stroke="#c2c9c0" stroke-width="3" stroke-linecap="round"><path d="M103 98h58M103 112h43M369 98h58M369 112h43M236 192h52M236 207h39"/></g><circle cx="260" cy="149" r="7" fill="#e9785c"/></svg>`,
    cycling: `<svg viewBox="0 0 520 300" aria-hidden="true"><g fill="none" stroke="#63847d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="166" cy="196" r="51"/><circle cx="357" cy="196" r="51"/><path d="m166 196 68-76 51 76h-92l42-50h70l52 50m-122-76h-28m108 0h-33"/></g><path d="M228 116c8-22 23-33 41-33" fill="none" stroke="#e9785c" stroke-width="3" stroke-linecap="round"/><circle cx="269" cy="81" r="6" fill="#e9785c"/><g fill="#63847d" opacity=".45"><circle cx="95" cy="87" r="3"/><circle cx="413" cy="103" r="4"/><circle cx="435" cy="151" r="2"/></g><path d="M96 246h325" stroke="#b9c9c0" stroke-width="2" stroke-dasharray="3 8"/></svg>`,
    mindrive: `<svg viewBox="0 0 520 300" aria-hidden="true"><path d="M99 181c25-77 89-117 164-117s139 40 164 117" fill="none" stroke="#779188" stroke-width="2" stroke-dasharray="4 8"/><path d="M115 202c40-4 63-38 102-38s60 37 100 37 62-40 91-44" fill="none" stroke="#71877d" stroke-width="4" stroke-linecap="round"/><path d="m391 144 23 12-19 17" fill="none" stroke="#e9785c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g fill="#f7f6f2" stroke="#71877d" stroke-width="3"><circle cx="115" cy="202" r="10"/><circle cx="217" cy="164" r="12"/><circle cx="317" cy="201" r="10"/></g><circle cx="217" cy="164" r="4" fill="#e9785c"/><circle cx="363" cy="157" r="9" fill="#e9785c"/><path d="M217 164V93" stroke="#d3d9cf" stroke-width="2" stroke-dasharray="3 6"/><circle cx="217" cy="82" r="7" fill="#cad7bd"/></svg>`
  };

  const focusMarks = {
    "Computer Science": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/></svg>`,
    Python: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3H8a3 3 0 0 0-3 3v5h8V6a3 3 0 0 0-3-3Zm0 18h4a3 3 0 0 0 3-3v-5h-8v5a3 3 0 0 0 3 3Z"/><path d="M5 8H3v5a3 3 0 0 0 3 3h2m11-8h2v-2m-5 10h-2"/><circle cx="9" cy="6.5" r=".7"/><circle cx="15" cy="17.5" r=".7"/></svg>`,
    Mathematics: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4H7l7 8-7 8h12M4 4h.01M4 20h.01"/></svg>`,
    Statistics: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V5m0 15h17M7 16l4-5 3 2 6-8"/><circle cx="7" cy="16" r="1"/><circle cx="11" cy="11" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="20" cy="5" r="1"/></svg>`,
    SQL: `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3m8-10v7c0 1.7-3.6 3-8 3m-8-3v7c0 1.7 3.6 3 8 3h1"/><path d="M4 12c0 1.7 3.6 3 8 3"/></svg>`,
    "Power BI": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V12h4v7m2 0V7h4v12m2 0V4h4v15M3 21h18"/></svg>`
  };

  document.title = `${data.name || "Akshay"} — A little bit of everything`;
  const photoLocation = document.querySelector("#photo-location");
  if (data.location && photoLocation) photoLocation.textContent = data.location.toUpperCase();
  const photo = document.querySelector(".profile-photo");
  if (data.photo && validUrl(data.photo)) {
    photo.src = validUrl(data.photo);
    photo.addEventListener("load", () => photo.closest(".profile-frame").classList.add("has-photo"));
  } else if (data.photo) {
    photo.src = data.photo;
    photo.addEventListener("load", () => photo.closest(".profile-frame").classList.add("has-photo"));
  }
  const heroFocus = document.querySelector("#hero-focus");
  if (heroFocus) heroFocus.innerHTML = (data.focusAreas || []).map((label) => `<span class="focus-item"><span class="focus-mark">${focusMarks[label] || ""}</span>${safe(label)}</span>`).join("");
  const heroSocialCards = document.querySelector("#hero-social-cards");
  const profileMarks = {
    LinkedIn: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 10v9"/><circle cx="5" cy="5.5" r="1.3"/></svg>`,
    GitHub: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-4 1-4-2-6-2m12 4v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 17.5 7a4.3 4.3 0 0 0-.1-3s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6 0C5.6 3.7 4.6 4 4.6 4a4.3 4.3 0 0 0-.1 3A4.7 4.7 0 0 0 3.2 9.8c0 4.7 2.8 5.7 5.5 6a2.7 2.7 0 0 0-.8 2.1V21"/></svg>`
  };
  if (heroSocialCards) heroSocialCards.innerHTML = ["LinkedIn", "GitHub"].map((label) => {
    const profile = (data.socials || []).find((item) => item.label === label);
    const href = validUrl(profile?.url);
    return href ? `<a class="hero-social-card" href="${safe(href)}" target="_blank" rel="noopener noreferrer"><span class="social-card-icon">${profileMarks[label]}</span><span class="social-card-copy"><strong>${label}</strong><small>${label === "LinkedIn" ? "Connect with me" : "Explore my code"}</small></span><span class="social-card-arrow" aria-hidden="true">↗</span></a>` : "";
  }).join("");
  const aboutCopy = document.querySelector("#about-copy");
  if (aboutCopy) aboutCopy.innerHTML = (data.about || []).map((paragraph) => `<p class="intro-body">${safe(paragraph)}</p>`).join("");

  const projectGrid = document.querySelector("#project-grid");
  projectGrid.innerHTML = (data.projects || []).map((project, index) => `
    <article class="project-card reveal">
      <div class="project-visual visual-${safe(project.visual || "default")}">
        <div class="project-illustration">${projectIllustrations[project.visual] || projectIllustrations.momentum}</div>
        <span class="project-number">${String(index + 1).padStart(2, "0")} / ${String((data.projects || []).length).padStart(2, "0")}</span>
        <span class="visual-caption">${safe(project.caption || "A WORK IN PROGRESS")}</span>
      </div>
      <div class="project-content"><div class="project-meta"><span class="project-category">${safe(project.category || "PROJECT")}</span><span>${safe(project.year || "")}</span></div>
        <h3>${safe(project.name)}</h3><p>${safe(project.description || "Add a short introduction in portfolio-data.js.")}</p>
        <div class="tag-list">${(project.tags || []).map((tag) => `<span>${safe(tag)}</span>`).join("")}</div>
        <div class="project-links">${externalLink(project.url, "View project")}${externalLink(project.demo, "Live demo")}</div>
      </div>
    </article>`).join("");
  document.querySelectorAll("[data-project-direction]").forEach((button) => button.addEventListener("click", () => {
    const card = projectGrid.querySelector(".project-card");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(projectGrid).columnGap) || 0;
    const direction = Number(button.dataset.projectDirection) || 1;
    projectGrid.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  }));
  const renderResearchCards = (selector, items, actionLabel) => {
    const node = document.querySelector(selector);
    node.innerHTML = (items || []).map((item) => `<article class="research-card reveal"><div class="research-meta"><span>${safe(item.category || "")}</span><span>${safe(item.detail || "")}</span></div><h3>${safe(item.title)}</h3><p>${safe(item.description || "")}</p>${item.tags?.length ? `<div class="tag-list">${item.tags.map((tag) => `<span>${safe(tag)}</span>`).join("")}</div>` : ""}<div class="research-action">${externalLink(item.url, actionLabel)}</div></article>`).join("");
  };
  renderResearchCards("#case-study-list", data.caseStudies, "View case study");
  renderResearchCards("#publication-list", data.publications, "Read publication");


  const fillTimeline = (selector, entries) => {
    const node = document.querySelector(selector);
    node.innerHTML = (entries || []).map((entry) => `<article class="timeline-item reveal"><span class="timeline-date">${safe(entry.date)}</span><div><h3>${safe(entry.title)}</h3><p>${safe(entry.place)}</p>${entry.detail ? `<p class="timeline-detail">${safe(entry.detail)}</p>` : ""}</div></article>`).join("") || '<p class="empty-line">Add a chapter when you’re ready.</p>';
  };
  fillTimeline("#education-list", data.education);
  document.querySelector("#interests-list").textContent = (data.interests || []).join("  ·  ");
  document.querySelector("#languages-list").textContent = (data.languages || []).join("  ·  ");
  document.querySelector("#now-updated").textContent = data.now?.updated ? `LAST UPDATED · ${safe(data.now.updated).toUpperCase()}` : "";
  const nowLabels = { learning: "LEARNING", building: "BUILDING", writing: "WRITING", exploring: "EXPLORING" };
  document.querySelector("#now-grid").innerHTML = Object.entries(nowLabels).map(([key, label], index) => `<article class="now-card"><span class="now-index">${String(index + 1).padStart(2, "0")}</span><div><span class="now-label">${label}</span><p>${safe(data.now?.[key] || "")}</p></div></article>`).join("");

  document.querySelector("#certificate-list").innerHTML = (data.certificates || []).map((item) => `<article class="certificate-item reveal"><div><h3>${safe(item.title)}</h3><p>${safe(item.issuer)}</p>${item.detail ? `<p class="certificate-detail">${safe(item.detail)}</p>` : ""}</div>${item.url ? externalLink(item.url, "VIEW") : "<span class='disabled-link'>ADD LINK</span>"}</article>`).join("");
  document.querySelector("#writing-list").innerHTML = (data.writing || []).map((item) => {
    const href = validUrl(item.url);
    return href ? `<a class="writing-item" href="${safe(href)}" target="_blank" rel="noopener noreferrer"><span>${safe(item.title)}</span><span>↗</span></a>` : `<div class="writing-item"><span>${safe(item.title)}</span><span>↗</span></div>`;
  }).join("");
  document.querySelector("#social-links").innerHTML = (data.socials || []).filter((item) => validUrl(item.url)).map((item) => `<a href="${safe(validUrl(item.url))}" target="_blank" rel="noopener noreferrer">${safe(item.label)} ↗</a>`).join("");
  const emailLink = document.querySelector("#email-link");
  if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email)}`;
  else emailLink.addEventListener("click", (event) => { event.preventDefault(); emailLink.querySelector("span").textContent = "ADD EMAIL IN portfolio-data.js"; });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    nav.classList.toggle("open", open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
  }));

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((items, currentObserver) => items.forEach((item) => {
      if (item.isIntersecting) { item.target.classList.add("visible"); currentObserver.unobserve(item.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".project-card,.timeline-item,.certificate-item").forEach((item) => { item.classList.add("reveal"); observer.observe(item); });
  }
})();
