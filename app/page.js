"use client";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import StatsSection from "../components/StatsSection";
import Features from "../components/Features";
import AppLockSpotlight from "../components/AppLockSpotlight";
import Privacy from "../components/Privacy";
import ThemesSection from "../components/ThemesSection";
import Download from "../components/Download";
import Footer from "../components/Footer";
import { renderIcons } from "../lib/icons";

const THEMES = ["frost", "noir", "aurora"];

export default function Page() {
  const [theme, setTheme] = useState("aurora");
  const initialized = useRef(false);

  // Load persisted theme once
  useEffect(() => {
    try {
      const s = localStorage.getItem("aura.theme");
      if (s && THEMES.includes(s)) setTheme(s);
    } catch (e) {}
  }, []);

  // Apply theme + persist
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    try { localStorage.setItem("aura.theme", theme); } catch (e) {}
  }, [theme]);

  // Render Lucide icons whenever theme changes (in case new icons mounted)
  useEffect(() => {
    let raf = requestAnimationFrame(() => renderIcons());
    // Re-try after a short delay in case the script hasn't loaded yet on first render
    const t = setTimeout(renderIcons, 250);
    const t2 = setTimeout(renderIcons, 800);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); clearTimeout(t2); };
  }, [theme]);

  const handlePick = (name, ev) => {
    if (ev && ev.clientX != null) {
      const veil = document.createElement("div");
      veil.className = "theme-veil";
      veil.style.setProperty("--rx", ev.clientX + "px");
      veil.style.setProperty("--ry", ev.clientY + "px");
      veil.style.background = getComputedStyle(document.body).backgroundColor;
      document.body.appendChild(veil);
      setTimeout(() => veil.remove(), 750);
    }
    setTheme(name);
  };

  // Global interactions (cursor, particles, scroll, observers, magnetic, tilt)
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Particles
    const layer = document.getElementById("particles");
    if (layer) {
      for (let i = 0; i < 26; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = 3 + Math.random() * 7;
        p.style.width = p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        p.style.animationDuration = (16 + Math.random() * 16) + "s, " + (4 + Math.random() * 5) + "s";
        p.style.animationDelay = (-Math.random() * 16) + "s, " + (-Math.random() * 5) + "s";
        p.style.opacity = (0.18 + Math.random() * 0.35).toFixed(2);
        layer.appendChild(p);
      }
    }

    // Cursor dot + glow with lerp follow
    const dot = document.querySelector(".cursor-dot");
    const glow = document.querySelector(".cursor-glow");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2, gx = mx, gy = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; dot.classList.add("show"); }
      if (glow) glow.style.opacity = 1;
    };
    window.addEventListener("mousemove", onMove);
    const onLeave = () => { if (glow) glow.style.opacity = 0; };
    document.addEventListener("mouseleave", onLeave);
    let rafId;
    const gLoop = () => {
      gx += (mx - gx) * 0.08; gy += (my - gy) * 0.08;
      if (glow) { glow.style.left = gx + "px"; glow.style.top = gy + "px"; }
      rafId = requestAnimationFrame(gLoop);
    };
    gLoop();

    // Hover state on interactive elements
    const hoverSelectors = ["a", "button", ".fcard", ".feature-card-mini", ".theme-card", ".pcard.available", ".stat", ".privacy-row", ".city-row"];
    const hoverEls = [];
    hoverSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        const enter = () => dot && dot.classList.add("hover");
        const leave = () => dot && dot.classList.remove("hover");
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        hoverEls.push([el, enter, leave]);
      });
    });

    // Feature card + stat mousemove spotlight
    const mmEls = document.querySelectorAll(".fcard, .stat");
    const mmHandler = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    };
    mmEls.forEach((c) => c.addEventListener("mousemove", mmHandler));

    // Scroll progress + parallax orbs
    const orbs = document.querySelectorAll("[data-parallax]");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      doc.style.setProperty("--scroll", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      orbs.forEach((o) => {
        const speed = +o.dataset.parallax;
        o.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    const ioObs = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.setAttribute("data-revealed", "true"); ioObs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".io").forEach((el) => ioObs.observe(el));

    // Count-up stats (static tiles only — live stats animate themselves once fetched)
    const countObs = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        countObs.unobserve(en.target);
        const target = +en.target.dataset.count;
        const dur = 1200;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          en.target.textContent = Math.floor(target * eased);
          if (p < 1) requestAnimationFrame(tick);
          else en.target.textContent = target;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach((el) => countObs.observe(el));

    // Magnetic button
    const magEls = document.querySelectorAll(".magnetic");
    const magHandlers = [];
    magEls.forEach((el) => {
      const enter = () => el.classList.add("magnetic-active");
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.18, dy = (e.clientY - cy) * 0.28;
        el.style.transform = `translate(${dx}px, ${dy - 2}px)`;
      };
      const leave = () => { el.style.transform = ""; el.classList.remove("magnetic-active"); };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      magHandlers.push([el, enter, move, leave]);
    });

    // Tilt
    const tiltEls = document.querySelectorAll("[data-tilt]");
    const tiltHandlers = [];
    tiltEls.forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      tiltHandlers.push([el, move, leave]);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      ioObs.disconnect();
      countObs.disconnect();
      hoverEls.forEach(([el, enter, leave]) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
      mmEls.forEach((c) => c.removeEventListener("mousemove", mmHandler));
      magHandlers.forEach(([el, enter, move, leave]) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
      tiltHandlers.forEach(([el, move, leave]) => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); });
    };
  }, []);

  return (
    <>
      <div className="scroll-bar" aria-hidden />
      <div className="cursor-glow" aria-hidden />
      <div className="cursor-dot" aria-hidden />
      <div className="particles" id="particles" aria-hidden />
      <Nav theme={theme} onPick={handlePick} />
      <main>
        <Hero theme={theme} />
        <Trust />
        <StatsSection />
        <Features />
        {/*<AppLockSpotlight />*/}
        <Privacy />
        <ThemesSection theme={theme} onPick={handlePick} />
        <Download />
      </main>
      <Footer />
    </>
  );
}
