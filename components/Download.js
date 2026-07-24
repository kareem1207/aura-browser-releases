"use client";
import { useEffect, useState } from "react";
import { WindowsIcon, AppleIcon, LinuxIcon } from "./PlatformIcons";

// Each route redirects to the newest installer on the latest GitHub release,
// so these never need updating when a new version ships.
const LINKS = {
  windows: "/api/download/windows",
  macos: "/api/download/macos",
  linux: "/api/download/linux",
  linuxDeb: "/api/download/linux-deb",
};

function trackClick(platform) {
  fetch("/api/track-download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ platform }),
  }).catch(() => {});
}

export default function Download() {
  const [windowsVersion, setWindowsVersion] = useState(null);

  useEffect(() => {
    fetch("/api/release")
      .then((r) => r.json())
      .then((d) => setWindowsVersion(d?.windows?.version ?? null))
      .catch(() => {});
  }, []);

  return (
    <section id="download" className="section alt">
      <div className="section-inner dl-wrap">
        <p><strong><em>
Aura is a browser built by one guy, named Shaik Kareem, and that's me. 

You may encounter a few bugs, or you may miss a few features. I am very sorry, as I am a solo developer; I don't have the leverage and freedom that big tech giants have, but I tried. 

It took me 7 months to reach where Aura stands right now, and Aura Browser is built to never steal data from anyone and to be a privacy-focused browser. I am not a big tech giant yet but a solo developer who is trying to make the web a better place.



So please support me by downloading the browser, and if you like it, please share it with your friends and family.

You can also request or report a bug; the option is beside the "Go" button inside the browser. I will try to fix it as soon as possible.



This website is developed by AI, but the text you're seeing is written by me, and I will try to keep it updated as much as possible.

If my startup gets successful, I will try to make a better website for the Aura browser, and I will try to make it open source as well without using any AI. 

          

Thank you for your support, and I hope you enjoy using the Aura browser.


          </em></strong></p>
        <div className="section-label io" style={{ marginInline: "auto" }}>Get Aura</div>
        <h2 className="section-title io" style={{ marginInline: "auto" }}><em>Free.</em> No account.<br />Install in seconds.</h2>
        <p className="section-sub io" style={{ margin: "0 auto", textAlign: "center" }}>Early access. Windows, macOS, and Linux, all available now.</p>
        <div className="platform-grid">
          <a className="pcard available io" href={LINKS.windows} onClick={() => trackClick("windows")}>
            <div className="pbadge">Available now</div>
            <span className="picon brand" aria-label="Windows"><WindowsIcon /></span>
            <div className="pname">Windows</div>
            <div className="pdetail">Windows 10 / 11{windowsVersion ? ` · v${windowsVersion}` : ""}</div>
            <div className="parrow"><i data-lucide="arrow-down" /></div>
          </a>
          <a className="pcard available io" href={LINKS.macos} onClick={() => trackClick("macos")}>
            <div className="pbadge">Available now</div>
            <span className="picon brand" aria-label="macOS"><AppleIcon /></span>
            <div className="pname">macOS</div>
            <div className="pdetail">Apple Silicon · Intel</div>
            <div className="parrow"><i data-lucide="arrow-down" /></div>
          </a>
          <div className="pcard available io">
            <a href={LINKS.linux} onClick={() => trackClick("linux")} style={{ display: "block" }}>
              <div className="pbadge">Available now</div>
              <span className="picon brand" aria-label="Linux"><LinuxIcon /></span>
              <div className="pname">Linux</div>
              <div className="pdetail">.AppImage</div>
              <div className="parrow"><i data-lucide="arrow-down" /></div>
            </a>
            <a className="pcard-secondary" href={LINKS.linuxDeb} onClick={() => trackClick("linux-deb")}>…or the .deb</a>
          </div>
        </div>
        <p className="smartscreen-note io">Windows may flag the installer with a SmartScreen warning — that's because we haven't paid for an EV certificate yet, not because anything's wrong. Click <strong>More info → Run anyway</strong> and you're set.</p>
        <p style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 8 }}>Hosted on GitHub Releases · Free, no account</p>
      </div>
    </section>
  );
}
