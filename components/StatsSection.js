"use client";
import { useEffect, useRef, useState } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { TOTAL_FEATURE_COUNT } from "./featuresData";

function countUp(el, target, dur = 1200) {
  if (!el) return;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(target * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(tick);
}

export default function StatsSection() {
  const [totalQueries, setTotalQueries] = useState(null);
  const [totalDownloads, setTotalDownloads] = useState(null);
  const [cities, setCities] = useState([]);
  const [visibleCityCount, setVisibleCityCount] = useState(5);

  const queriesRef = useRef(null);
  const downloadsRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const globalSnap = await getDoc(doc(db, "stats", "global"));
        const data = globalSnap.exists() ? globalSnap.data() : {};
        const queries = data.totalQueries || 0;
        const clicks = data.downloadClicks || 0;

        const res = await fetch("/api/downloads").then((r) => r.json()).catch(() => ({ total: 0 }));
        const githubTotal = res.total || 0;

        if (cancelled) return;
        setTotalQueries(queries);
        setTotalDownloads(githubTotal + clicks);
      } catch (e) {
        if (!cancelled) { setTotalQueries(0); setTotalDownloads(0); }
      }

      try {
        const snap = await getDocs(collection(db, "locations"));
        const tally = new Map();
        snap.forEach((d) => {
          const city = d.data().city;
          if (!city) return;
          tally.set(city, (tally.get(city) || 0) + 1);
        });
        const sorted = [...tally.entries()]
          .map(([city, count]) => ({ city, count }))
          .sort((a, b) => b.count - a.count);
        if (!cancelled) setCities(sorted);
      } catch (e) {
        if (!cancelled) setCities([]);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (totalQueries != null) countUp(queriesRef.current, totalQueries);
  }, [totalQueries]);
  useEffect(() => {
    if (totalDownloads != null) countUp(downloadsRef.current, totalDownloads);
  }, [totalDownloads]);

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label io">By the numbers</div>
        <h2 className="section-title io">Quiet on the outside.<br /><em>Loud where it counts.</em></h2>
        <div className="stats-grid io">
          <div className="stat"><div className="stat-n"><span ref={queriesRef}>{totalQueries == null ? "—" : "0"}</span></div><div className="stat-l">Search queries</div></div>
          <div className="stat"><div className="stat-n"><span ref={downloadsRef}>{totalDownloads == null ? "—" : "0"}</span></div><div className="stat-l">Total downloads</div></div>
          <div className="stat"><div className="stat-n"><span>{TOTAL_FEATURE_COUNT}</span><span className="unit">+</span></div><div className="stat-l">Features shipped</div></div>
          <div className="stat"><div className="stat-n"><span>0</span></div><div className="stat-l">Ads. Ever.</div></div>
        </div>

        {cities.length > 0 && (
          <>
            <div className="city-list">
              {cities.slice(0, visibleCityCount).map((c, i) => (
                <div className="city-row" key={c.city}>
                  <span className="city-rank">{i + 1}</span>
                  <span className="city-name">{c.city}</span>
                  <span className="city-count">{c.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
            {visibleCityCount < cities.length && (
              <button className="city-showmore" onClick={() => setVisibleCityCount((n) => n + 10)}>
                Show more cities
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
