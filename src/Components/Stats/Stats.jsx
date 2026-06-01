import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

// ---------- language colour map (GitHub colours) ----------
const LANG_COLOURS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
  Python:     "#3572A5",
  Shell:      "#89e051",
  Dockerfile: "#384d54",
  Vue:        "#41b883",
  Go:         "#00ADD8",
  Rust:       "#dea584",
  Java:       "#b07219",
  Swift:      "#F05138",
  Ruby:       "#701516",
  SCSS:       "#c6538c",
  MDX:        "#fcb32c",
  Makefile:   "#427819",
};

// ---------- CountUp animation ----------
function CountUp({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref   = useRef(null);
  const done  = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        let n = 0;
        const step = Math.max(1, Math.ceil(target / 50));
        const id = setInterval(() => {
          n += step;
          if (n >= target) { setCount(target); clearInterval(id); }
          else setCount(n);
        }, 35);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ---------- skeleton placeholder ----------
function Skeleton({ width = "100%", height = "1rem", radius = "6px" }) {
  return (
    <div
      className="stat-skeleton"
      style={{ width, height, borderRadius: radius }}
    />
  );
}

// ---------- main component ----------
export const Stat = () => {
  const [profile,  setProfile]  = useState(null);
  const [repos,    setRepos]    = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(false);

  useEffect(() => {
    const base = "https://api.github.com";
    Promise.all([
      fetch(`${base}/users/ranjanpalai69`).then((r) => r.json()),
      fetch(`${base}/users/ranjanpalai69/repos?per_page=100&sort=updated`).then(
        (r) => r.json()
      ),
    ])
      .then(([prof, repoList]) => {
        setProfile(prof);
        setRepos(Array.isArray(repoList) ? repoList : []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // ---- derived stats ----
  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);

  // language frequency
  const langMap = {};
  repos.forEach((r) => {
    if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  const langTotal = topLangs.reduce((s, [, c]) => s + c, 0);

  // static achievements
  const achievements = [
    { value: 3,  suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Projects Shipped"  },
    { value: 24, suffix: "+", label: "Technologies"      },
    { value: 5,  suffix: "+", label: "Enterprise Clients"},
  ];

  return (
    <div className="section stats-section">

      {/* ---- Achievement counters ---- */}
      <h2 className="section__title different" data-aos="fade-right">
        By The Numbers
      </h2>
      <div className="stats-achievements" data-aos="fade-up">
        {achievements.map((a) => (
          <div className="stats-ach-card" key={a.label}>
            <div className="stats-ach-value">
              <CountUp target={a.value} suffix={a.suffix} />
            </div>
            <div className="stats-ach-label">{a.label}</div>
          </div>
        ))}
      </div>

      {/* ---- Live GitHub stats ---- */}
      <h2
        className="section__title different"
        style={{ marginTop: "4rem" }}
        data-aos="fade-right"
      >
        GitHub Stats
      </h2>

      {error && (
        <p className="stats-error" data-aos="fade-up">
          Could not reach GitHub API right now — try refreshing.
        </p>
      )}

      {/* -- top-row stat cards -- */}
      <div className="stats-cards-row" data-aos="fade-up">
        {[
          {
            label: "Public Repos",
            value: profile?.public_repos,
            icon: "📁",
          },
          { label: "Total Stars",   value: totalStars,            icon: "⭐" },
          { label: "Forks",         value: totalForks,            icon: "🍴" },
          { label: "Followers",     value: profile?.followers,    icon: "👥" },
          { label: "Following",     value: profile?.following,    icon: "➕" },
          {
            label: "Public Gists",
            value: profile?.public_gists,
            icon: "📝",
          },
        ].map(({ label, value, icon }, i) => (
          <div
            className="stat-live-card"
            key={label}
            data-aos="zoom-in"
            data-aos-delay={i * 60}
          >
            <span className="stat-live-icon">{icon}</span>
            <div className="stat-live-value">
              {loading ? (
                <Skeleton width="60px" height="2rem" />
              ) : (
                <CountUp target={value ?? 0} />
              )}
            </div>
            <div className="stat-live-label">{label}</div>
          </div>
        ))}
      </div>

      {/* -- top languages bar -- */}
      {!loading && topLangs.length > 0 && (
        <div className="stats-langs-section" data-aos="fade-up">
          <h3 className="stats-langs-title">Top Languages</h3>

          {/* stacked colour bar */}
          <div className="stats-langs-bar">
            {topLangs.map(([lang, count]) => (
              <div
                key={lang}
                className="stats-langs-bar-segment"
                style={{
                  width:           `${(count / langTotal) * 100}%`,
                  backgroundColor: LANG_COLOURS[lang] || "#8b949e",
                }}
                title={`${lang}: ${((count / langTotal) * 100).toFixed(1)}%`}
              />
            ))}
          </div>

          {/* legend */}
          <div className="stats-langs-legend">
            {topLangs.map(([lang, count]) => (
              <div className="stats-lang-item" key={lang}>
                <span
                  className="stats-lang-dot"
                  style={{
                    backgroundColor: LANG_COLOURS[lang] || "#8b949e",
                  }}
                />
                <span className="stats-lang-name">{lang}</span>
                <span className="stats-lang-pct">
                  {((count / langTotal) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && !error && (
        <div className="stats-skeleton-row" data-aos="fade-up">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} height="120px" radius="16px" />
          ))}
        </div>
      )}
    </div>
  );
};
