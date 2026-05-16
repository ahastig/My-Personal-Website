import { forwardRef, useEffect, useMemo, useState } from "react";
import { Instagram, Facebook, Mail, Moon, Sun } from "lucide-react";
import { toast } from "sonner";

/* ── Discord icon ── */
const DiscordIcon = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg ref={ref} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.6 13.6 0 0 0-.69 1.42 18.27 18.27 0 0 0-5.736 0A13 13 0 0 0 9.44 3 19.79 19.79 0 0 0 5.68 4.369C2.063 9.79 1.075 15.072 1.57 20.28a19.95 19.95 0 0 0 6.06 3.06 14.7 14.7 0 0 0 1.296-2.107 12.95 12.95 0 0 1-2.04-.98c.171-.125.339-.255.5-.388a14.22 14.22 0 0 0 12.226 0c.163.133.331.263.5.388-.652.388-1.336.717-2.04.98a14.7 14.7 0 0 0 1.296 2.107 19.95 19.95 0 0 0 6.06-3.06c.585-6.07-.99-11.302-4.111-15.911ZM8.78 17.21c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.955-2.422 2.156-2.422 1.2 0 2.176 1.085 2.156 2.422 0 1.335-.956 2.42-2.156 2.42Zm6.44 0c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.954-2.422 2.156-2.422 1.2 0 2.175 1.085 2.156 2.422 0 1.335-.955 2.42-2.156 2.42Z" />
    </svg>
  )
);
DiscordIcon.displayName = "DiscordIcon";

/* ═══════════════════════════════════════════════════
   ACHIEVEMENTS OVERLAY
═══════════════════════════════════════════════════ */
const AchievementsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="overlay-bg" onClick={onClose}>
    <div className="achieve-panel" onClick={(e) => e.stopPropagation()}>
      <button className="panel-x" onClick={onClose} aria-label="Close">✕</button>
      <h2 className="panel-title">★ Achievements ★</h2>
      <div className="achieve-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="achieve-cell">
            <div className="achieve-icon">?</div>
            <span className="achieve-lbl">Locked</span>
          </div>
        ))}
      </div>
      <p className="panel-hint">certificates will appear here soon!</p>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   SOCIALS OVERLAY  (phone zoom-in)
═══════════════════════════════════════════════════ */
const SocialsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="overlay-bg" onClick={onClose}>
    <div className="phone-zoom" onClick={(e) => e.stopPropagation()}>
      <div className="phone-device">
        <div className="phone-earpiece" />
        <div className="phone-inner-screen">
          <h3 className="phone-heading">Socials</h3>
          <div className="phone-links">
            {[
              {
                name: "Instagram",
                Icon: Instagram,
                bg: "#c13584",
                href: "https://www.instagram.com/jims.alc/",
              },
              {
                name: "Facebook",
                Icon: Facebook,
                bg: "#4267b2",
                href: "https://www.facebook.com/JamesAlcarde11042008/",
              },
              {
                name: "Gmail",
                Icon: Mail,
                bg: "#d44638",
                onClick: () => {
                  navigator.clipboard.writeText("jamesalcarde11042008@gmail.com");
                  toast.success("Email copied!");
                },
              },
              {
                name: "Discord",
                Icon: DiscordIcon,
                bg: "#5865f2",
                href: "https://discordapp.com/users/1500537862402212084",
              },
            ].map(({ name, Icon, bg, ...rest }) => {
              const href = "href" in rest ? (rest as { href: string }).href : undefined;
              const onClick = "onClick" in rest ? (rest as { onClick: () => void }).onClick : undefined;
              const content = (
                <>
                  <span className="link-dot" style={{ background: bg }}>
                    <Icon className="link-icon" />
                  </span>
                  <span className="link-name">{name}</span>
                </>
              );
              return href ? (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="phone-link-row">
                  {content}
                </a>
              ) : (
                <button key={name} type="button" onClick={onClick} className="phone-link-row">
                  {content}
                </button>
              );
            })}
          </div>
        </div>
        <div className="phone-home-pill" />
      </div>
      <p className="zoom-hint">tap outside to close</p>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   MAIN BEDROOM SCENE
═══════════════════════════════════════════════════ */
export const CozyScene = () => {
  const [night, setNight] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", night);
  }, [night]);

  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 70,
        d: Math.random() * 3,
        big: Math.random() > 0.8,
      })),
    []
  );

  return (
    <main className="room">
      {/* ───── WALL ───── */}
      <div className="wall" />

      {/* warm light cone from window onto wall */}
      <div className="window-light" />

      {/* ───── WINDOW ───── */}
      <section className="win-section">
        {/* curtain left */}
        <div className="curtain crt-l">
          <div className="crt-fold" /><div className="crt-fold" /><div className="crt-fold" />
          <div className="crt-tassel" />
        </div>

        <div className="win-outer">
          {/* sky */}
          <div className="sky-box">
            {/* stars */}
            <div className="sky-stars">
              {stars.map((s, i) => (
                <i
                  key={i}
                  className={`st${s.big ? " st-b" : ""}`}
                  style={{ top: `${s.y}%`, left: `${s.x}%`, animationDelay: `${s.d}s` }}
                />
              ))}
            </div>

            {/* sun / moon */}
            <div className="sky-orb" style={{ left: night ? "74%" : "16%" }}>
              <div className="orb" />
            </div>

            {/* clouds */}
            <div className="cld" style={{ top: "12%", animationDuration: "28s" }}>
              <svg width="52" height="22" viewBox="0 0 13 6" style={{shapeRendering:"crispEdges"}}>
                <g fill="var(--cld)">
                  <rect x="2" y="2" width="4" height="1" /><rect x="7" y="2" width="4" height="1" />
                  <rect x="1" y="3" width="11" height="2" /><rect x="2" y="5" width="9" height="1" />
                </g>
              </svg>
            </div>
            <div className="cld" style={{ top: "38%", animationDuration: "36s", animationDelay: "-15s" }}>
              <svg width="40" height="18" viewBox="0 0 10 5" style={{shapeRendering:"crispEdges"}}>
                <g fill="var(--cld)">
                  <rect x="2" y="1" width="3" height="1" /><rect x="6" y="1" width="3" height="1" />
                  <rect x="1" y="2" width="8" height="2" /><rect x="2" y="4" width="6" height="1" />
                </g>
              </svg>
            </div>
            <div className="cld" style={{ top: "55%", animationDuration: "32s", animationDelay: "-22s" }}>
              <svg width="36" height="14" viewBox="0 0 9 4" style={{shapeRendering:"crispEdges"}}>
                <g fill="var(--cld)">
                  <rect x="2" y="0" width="2" height="1" /><rect x="5" y="0" width="2" height="1" />
                  <rect x="1" y="1" width="7" height="2" /><rect x="2" y="3" width="5" height="1" />
                </g>
              </svg>
            </div>

            {/* birds */}
            {[
              { t: "20%", dur: "13s", del: "0s" },
              { t: "42%", dur: "16s", del: "-5s" },
              { t: "28%", dur: "19s", del: "-11s" },
            ].map((b, i) => (
              <div key={i} className="brd" style={{ top: b.t, animationDuration: b.dur, animationDelay: b.del }}>
                <svg width={12 - i * 2} height={6 - i} viewBox="0 0 7 3" style={{shapeRendering:"crispEdges"}}>
                  <path d="M0,0h1v1h1v1h1v1h1v-1h1v-1h1v-1h1" fill="none" stroke="var(--brd-c)" strokeWidth="1" />
                </svg>
              </div>
            ))}

            {/* distant treeline */}
            <svg className="treeline" viewBox="0 0 120 14" preserveAspectRatio="none" style={{shapeRendering:"crispEdges"}}>
              <rect y="9" width="120" height="5" fill="var(--hill-far)" />
              <rect y="7" width="120" height="3" fill="var(--hill-near)" />
              {[6,20,35,52,68,82,98,112].map((x,i) => (
                <g key={i}>
                  <rect x={x} y={4} width={3} height={6} fill="var(--hill-far)" />
                  <rect x={x-1} y={5} width={5} height={3} fill="var(--hill-far)" />
                </g>
              ))}
            </svg>
          </div>

          {/* window panes */}
          <div className="pane-h" />
          <div className="pane-v" />
          {/* glass sheen */}
          <div className="glass-sheen" />
        </div>

        {/* curtain right */}
        <div className="curtain crt-r">
          <div className="crt-fold" /><div className="crt-fold" /><div className="crt-fold" />
          <div className="crt-tassel" />
        </div>
      </section>

      {/* windowsill */}
      <div className="sill" />

      {/* ───── DESK ───── */}
      <section className="desk">
        {/* items row */}
        <div className="d-items">
          {/* LAMP */}
          <div className="d-i lamp-i">
            <div className="lamp-glow-orb" />
            <svg width="48" height="88" viewBox="0 0 12 22" style={{shapeRendering:"crispEdges"}}>
              {/* shade */}
              <rect x="1" y="0" width="10" height="1" fill="var(--shade-h)" />
              <rect x="0" y="1" width="12" height="1" fill="var(--shade)" />
              <rect x="0" y="2" width="12" height="3" fill="var(--shade)" />
              <rect x="1" y="2" width="4" height="1" fill="var(--shade-h)" />
              <rect x="1" y="5" width="10" height="1" fill="var(--shade-d)" />
              <rect x="2" y="6" width="8" height="1" fill="var(--shade-d)" />
              {/* bulb glow line */}
              <rect x="3" y="6" width="6" height="1" fill="var(--bulb)" />
              {/* arm */}
              <rect x="5" y="7" width="2" height="9" fill="#555" />
              <rect x="5" y="7" width="1" height="9" fill="#666" />
              {/* base */}
              <rect x="3" y="16" width="6" height="2" fill="#4a4a4a" />
              <rect x="2" y="18" width="8" height="2" fill="#3e3e3e" />
              <rect x="2" y="20" width="8" height="2" fill="#333" />
              <rect x="2" y="18" width="8" height="1" fill="#555" />
            </svg>
          </div>

          {/* BOOKS */}
          <div className="d-i books-i">
            <svg width="68" height="56" viewBox="0 0 17 14" style={{shapeRendering:"crispEdges"}}>
              {/* book 1 bottom — maroon */}
              <rect x="0" y="9" width="12" height="5" fill="#7a2e2e" />
              <rect x="0" y="9" width="2" height="5" fill="#5a1e1e" />
              <rect x="0" y="9" width="12" height="1" fill="#943838" />
              <rect x="3" y="11" width="6" height="1" fill="#943838" />
              <rect x="11" y="10" width="1" height="4" fill="#621e1e" />
              {/* book 2 — blue */}
              <rect x="1" y="5" width="11" height="4" fill="#2e4a7a" />
              <rect x="1" y="5" width="2" height="4" fill="#1e3a6a" />
              <rect x="1" y="5" width="11" height="1" fill="#3a5a8a" />
              <rect x="4" y="7" width="5" height="1" fill="#3a5a8a" />
              {/* book 3 — green */}
              <rect x="2" y="1" width="10" height="4" fill="#2e6a3a" />
              <rect x="2" y="1" width="2" height="4" fill="#1e5a2a" />
              <rect x="2" y="1" width="10" height="1" fill="#3a7a4a" />
              <rect x="5" y="3" width="4" height="1" fill="#3a7a4a" />
              {/* book upright — warm orange */}
              <rect x="11" y="0" width="5" height="14" fill="#b86830" />
              <rect x="11" y="0" width="5" height="1" fill="#d07838" />
              <rect x="11" y="12" width="5" height="2" fill="#985828" />
              <rect x="13" y="3" width="1" height="7" fill="#d07838" />
              <rect x="15" y="0" width="1" height="14" fill="#985828" />
              {/* page edges */}
              <rect x="12" y="9" width="1" height="5" fill="#e8dcc8" />
            </svg>
          </div>

          {/* COMPUTER */}
          <div className="d-i pc-i">
            <div className="monitor">
              <div className="mon-bezel">
                <div className="mon-screen">
                  <span className="mon-text">hello, i'm james!</span>
                  <span className="mon-blink">_</span>
                </div>
              </div>
              <div className="mon-chin">
                <span className="mon-led" />
              </div>
              <div className="mon-neck" />
              <div className="mon-base" />
            </div>
            <div className="kboard">
              <div className="kb-r">{Array.from({length:10}).map((_,i)=><i key={i} className="k"/>)}</div>
              <div className="kb-r">{Array.from({length:9}).map((_,i)=><i key={i} className="k"/>)}</div>
              <div className="kb-r"><i className="k sp" /></div>
            </div>
          </div>

          {/* TROPHY */}
          <button className="d-i trophy-i" onClick={() => setShowAchievements(true)} aria-label="Achievements">
            <i className="trophy-glint" />
            <svg width="44" height="64" viewBox="0 0 11 16" style={{shapeRendering:"crispEdges"}}>
              {/* cup */}
              <rect x="2" y="1" width="7" height="6" fill="#e0a820" />
              <rect x="1" y="2" width="9" height="4" fill="#e0a820" />
              <rect x="2" y="1" width="7" height="1" fill="#f0c840" />
              <rect x="1" y="2" width="1" height="1" fill="#f0c840" />
              <rect x="9" y="2" width="1" height="1" fill="#c89018" />
              {/* handles */}
              <rect x="0" y="3" width="1" height="2" fill="#c89018" />
              <rect x="10" y="3" width="1" height="2" fill="#c89018" />
              {/* star */}
              <rect x="5" y="2" width="1" height="3" fill="#f8e060" />
              <rect x="4" y="3" width="3" height="1" fill="#f8e060" />
              {/* cup bottom */}
              <rect x="2" y="6" width="7" height="1" fill="#b88810" />
              {/* stem */}
              <rect x="4" y="7" width="3" height="3" fill="#c89018" />
              {/* base */}
              <rect x="3" y="10" width="5" height="1" fill="#e0a820" />
              <rect x="2" y="11" width="7" height="1" fill="#d09818" />
              <rect x="1" y="12" width="9" height="2" fill="#e0a820" />
              <rect x="1" y="12" width="9" height="1" fill="#f0c840" />
              <rect x="1" y="14" width="9" height="2" fill="#c89018" />
              <rect x="1" y="14" width="9" height="1" fill="#d09818" />
            </svg>
          </button>

          {/* PHONE ON STAND */}
          <button className="d-i phone-i" onClick={() => setShowSocials(true)} aria-label="Socials">
            <div className="phone-unit">
              <svg width="36" height="72" viewBox="0 0 9 18" style={{shapeRendering:"crispEdges"}}>
                {/* phone body */}
                <rect x="0" y="0" width="9" height="13" fill="#222" />
                <rect x="0" y="0" width="9" height="1" fill="#333" />
                {/* screen */}
                <rect x="1" y="1" width="7" height="10" fill="#0a1020" />
                {/* screen glow lines */}
                <rect x="2" y="3" width="5" height="1" fill="#4488ee" />
                <rect x="2" y="5" width="5" height="1" fill="#3377dd" />
                <rect x="2" y="7" width="5" height="1" fill="#2266cc" />
                <rect x="2" y="9" width="3" height="1" fill="#1155bb" />
                {/* home bar */}
                <rect x="3" y="12" width="3" height="1" fill="#333" />
                {/* stand bracket */}
                <rect x="2" y="12" width="5" height="3" fill="#444" />
                <rect x="2" y="12" width="5" height="1" fill="#555" />
                {/* stand post */}
                <rect x="3" y="15" width="3" height="1" fill="#3a3a3a" />
                {/* stand base */}
                <rect x="1" y="16" width="7" height="2" fill="#3a3a3a" />
                <rect x="1" y="16" width="7" height="1" fill="#4a4a4a" />
              </svg>
              <span className="ph-label">Socials</span>
            </div>
          </button>
        </div>

        {/* desk surface edge */}
        <div className="d-top" />
        {/* desk front face */}
        <div className="d-front">
          <div className="d-drawer"><span className="d-knob" /></div>
          <div className="d-drawer"><span className="d-knob" /></div>
        </div>
      </section>

      {/* ───── FLOOR ───── */}
      <div className="floor" />

      {/* ───── TOGGLE ───── */}
      <button className="dn-btn" onClick={() => setNight((n) => !n)} aria-label="toggle day/night">
        {night ? <Sun size={14} /> : <Moon size={14} />}
        <span>{night ? "day" : "night"}</span>
      </button>

      {/* ───── OVERLAYS ───── */}
      {showAchievements && <AchievementsOverlay onClose={() => setShowAchievements(false)} />}
      {showSocials && <SocialsOverlay onClose={() => setShowSocials(false)} />}
    </main>
  );
};

export default CozyScene;
