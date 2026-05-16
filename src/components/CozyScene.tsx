import { forwardRef, useEffect, useMemo, useState } from "react";
import { Instagram, Facebook, Mail, Moon, Sun } from "lucide-react";
import { toast } from "sonner";

/* ---------- Discord icon ---------- */
const DiscordIcon = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className = "" }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.6 13.6 0 0 0-.69 1.42 18.27 18.27 0 0 0-5.736 0A13 13 0 0 0 9.44 3 19.79 19.79 0 0 0 5.68 4.369C2.063 9.79 1.075 15.072 1.57 20.28a19.95 19.95 0 0 0 6.06 3.06 14.7 14.7 0 0 0 1.296-2.107 12.95 12.95 0 0 1-2.04-.98c.171-.125.339-.255.5-.388a14.22 14.22 0 0 0 12.226 0c.163.133.331.263.5.388-.652.388-1.336.717-2.04.98a14.7 14.7 0 0 0 1.296 2.107 19.95 19.95 0 0 0 6.06-3.06c.585-6.07-.99-11.302-4.111-15.911ZM8.78 17.21c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.955-2.422 2.156-2.422 1.2 0 2.176 1.085 2.156 2.422 0 1.335-.956 2.42-2.156 2.42Zm6.44 0c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.954-2.422 2.156-2.422 1.2 0 2.175 1.085 2.156 2.422 0 1.335-.955 2.42-2.156 2.42Z" />
    </svg>
  )
);
DiscordIcon.displayName = "DiscordIcon";

/* ============================================================
   PIXEL CLOUD (reused for window view)
============================================================ */
const PixelCloud = ({ scale = 1 }: { scale?: number }) => (
  <svg
    width={64 * scale}
    height={28 * scale}
    viewBox="0 0 16 7"
    style={{ shapeRendering: "crispEdges" }}
    aria-hidden="true"
  >
    <g fill="hsl(var(--cloud))">
      <rect x="3" y="2" width="4" height="1" />
      <rect x="9" y="2" width="4" height="1" />
      <rect x="2" y="3" width="12" height="1" />
      <rect x="1" y="4" width="14" height="2" />
      <rect x="2" y="6" width="12" height="1" />
    </g>
  </svg>
);

/* ============================================================
   PIXEL BIRD (V-shape, for flying across window)
============================================================ */
const PixelWindowBird = ({
  size = 14,
  opacity = 0.6,
}: {
  size?: number;
  opacity?: number;
}) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 8 4"
    style={{ shapeRendering: "crispEdges", display: "block" }}
    aria-hidden="true"
  >
    <g fill={`hsl(var(--border) / ${opacity})`}>
      <rect x="0" y="0" width="1" height="1" />
      <rect x="1" y="1" width="1" height="1" />
      <rect x="2" y="2" width="1" height="1" />
      <rect x="3" y="3" width="2" height="1" />
      <rect x="5" y="2" width="1" height="1" />
      <rect x="6" y="1" width="1" height="1" />
      <rect x="7" y="0" width="1" height="1" />
    </g>
  </svg>
);

/* ============================================================
   DESK ITEMS — Pixel Art
============================================================ */

const PixelLamp = () => (
  <div className="desk-item lamp-wrap">
    <div className="lamp-glow" />
    <svg
      width="56"
      height="100"
      viewBox="0 0 14 25"
      style={{ shapeRendering: "crispEdges", position: "relative", zIndex: 2 }}
      aria-hidden="true"
    >
      {/* shade */}
      <rect x="1" y="0" width="12" height="2" fill="hsl(var(--lamp-shade))" />
      <rect x="2" y="2" width="10" height="2" fill="hsl(var(--lamp-shade))" />
      <rect x="3" y="4" width="8" height="2" fill="hsl(var(--lamp-shade))" />
      <rect x="1" y="0" width="4" height="1" fill="hsl(var(--lamp-hi))" />
      <rect x="2" y="2" width="3" height="1" fill="hsl(var(--lamp-hi))" />
      {/* light strip */}
      <rect x="4" y="6" width="6" height="1" fill="hsl(var(--lamp-bulb))" />
      {/* arm */}
      <rect x="6" y="7" width="2" height="12" fill="#4a4a50" />
      <rect x="6" y="7" width="1" height="12" fill="#5a5a60" />
      {/* base */}
      <rect x="4" y="19" width="6" height="2" fill="#4a4a50" />
      <rect x="3" y="21" width="8" height="2" fill="#3a3a40" />
      <rect x="3" y="21" width="8" height="1" fill="#4a4a50" />
      <rect x="2" y="23" width="10" height="2" fill="#3a3a40" />
      <rect x="2" y="23" width="10" height="1" fill="#4a4a50" />
    </svg>
  </div>
);

const PixelBooks = () => (
  <div className="desk-item books-wrap">
    <svg
      width="76"
      height="64"
      viewBox="0 0 19 16"
      style={{ shapeRendering: "crispEdges" }}
      aria-hidden="true"
    >
      {/* book 1 — bottom, maroon */}
      <rect x="0" y="10" width="14" height="6" fill="#8b3a3a" />
      <rect x="0" y="10" width="2" height="6" fill="#6b2a2a" />
      <rect x="0" y="10" width="14" height="1" fill="#a04a4a" />
      <rect x="4" y="12" width="7" height="1" fill="#a04a4a" />
      <rect x="4" y="14" width="5" height="1" fill="#a04a4a" />
      {/* book 2 — middle, blue */}
      <rect x="1" y="6" width="13" height="4" fill="#3a5a8b" />
      <rect x="1" y="6" width="2" height="4" fill="#2a4a7b" />
      <rect x="1" y="6" width="13" height="1" fill="#4a6a9b" />
      <rect x="5" y="8" width="6" height="1" fill="#4a6a9b" />
      {/* book 3 — top, green */}
      <rect x="2" y="2" width="12" height="4" fill="#3a7a4a" />
      <rect x="2" y="2" width="2" height="4" fill="#2a6a3a" />
      <rect x="2" y="2" width="12" height="1" fill="#4a8a5a" />
      <rect x="6" y="4" width="5" height="1" fill="#4a8a5a" />
      {/* book 4 — leaning upright, orange */}
      <rect x="13" y="0" width="5" height="16" fill="#c07030" />
      <rect x="13" y="0" width="5" height="1" fill="#d08040" />
      <rect x="13" y="14" width="5" height="2" fill="#a06020" />
      <rect x="15" y="3" width="1" height="8" fill="#d08040" />
    </svg>
  </div>
);

const PixelTrophy = ({ onClick }: { onClick: () => void }) => (
  <button
    className="desk-item trophy-wrap"
    onClick={onClick}
    aria-label="View achievements"
  >
    <div className="trophy-sparkle" />
    <svg
      width="52"
      height="72"
      viewBox="0 0 13 18"
      style={{ shapeRendering: "crispEdges" }}
      aria-hidden="true"
    >
      {/* cup */}
      <rect x="3" y="1" width="7" height="7" fill="#e8b830" />
      <rect x="2" y="2" width="9" height="5" fill="#e8b830" />
      <rect x="3" y="1" width="7" height="1" fill="#f0d050" />
      <rect x="2" y="2" width="1" height="1" fill="#f0d050" />
      <rect x="10" y="2" width="1" height="1" fill="#f0d050" />
      {/* handles */}
      <rect x="0" y="3" width="2" height="3" fill="#d0a020" />
      <rect x="11" y="3" width="2" height="3" fill="#d0a020" />
      <rect x="0" y="3" width="2" height="1" fill="#e8b830" />
      <rect x="11" y="3" width="2" height="1" fill="#e8b830" />
      {/* cup depth */}
      <rect x="3" y="7" width="7" height="1" fill="#c09818" />
      {/* star */}
      <rect x="5" y="3" width="3" height="1" fill="#f8e878" />
      <rect x="6" y="2" width="1" height="3" fill="#f8e878" />
      <rect x="5" y="4" width="3" height="1" fill="#f8e878" />
      {/* stem */}
      <rect x="5" y="8" width="3" height="3" fill="#c09818" />
      <rect x="5" y="8" width="3" height="1" fill="#b08810" />
      {/* base */}
      <rect x="3" y="11" width="7" height="2" fill="#e8b830" />
      <rect x="3" y="11" width="7" height="1" fill="#f0d050" />
      <rect x="2" y="13" width="9" height="2" fill="#d0a020" />
      <rect x="1" y="15" width="11" height="2" fill="#e8b830" />
      <rect x="1" y="15" width="11" height="1" fill="#f0d050" />
      <rect x="1" y="16" width="11" height="1" fill="#c09818" />
    </svg>
  </button>
);

const PixelPhoneStand = ({ onClick }: { onClick: () => void }) => (
  <button
    className="desk-item phone-wrap"
    onClick={onClick}
    aria-label="View socials"
  >
    <div className="phone-stand-unit">
      <svg
        width="44"
        height="84"
        viewBox="0 0 11 21"
        style={{ shapeRendering: "crispEdges" }}
        aria-hidden="true"
      >
        {/* phone body */}
        <rect x="1" y="0" width="9" height="15" fill="#2a2a30" />
        <rect x="1" y="0" width="9" height="1" fill="#3a3a42" />
        <rect x="1" y="14" width="9" height="1" fill="#222228" />
        {/* screen */}
        <rect x="2" y="1" width="7" height="12" fill="#0a1428" />
        {/* screen glow lines — shows "Socials" abstractly */}
        <rect x="3" y="3" width="5" height="1" fill="#5090ff" />
        <rect x="3" y="5" width="5" height="1" fill="#4080ee" />
        <rect x="3" y="7" width="5" height="1" fill="#3070dd" />
        <rect x="3" y="9" width="5" height="1" fill="#2060cc" />
        <rect x="3" y="11" width="3" height="1" fill="#1050bb" />
        {/* home indicator */}
        <rect x="4" y="13" width="3" height="1" fill="#3a3a42" />
        {/* stand bracket */}
        <rect x="3" y="14" width="5" height="3" fill="#4a4a52" />
        <rect x="3" y="14" width="5" height="1" fill="#5a5a62" />
        {/* stand arm */}
        <rect x="4" y="17" width="3" height="2" fill="#3a3a42" />
        {/* stand base */}
        <rect x="1" y="19" width="9" height="2" fill="#3a3a42" />
        <rect x="1" y="19" width="9" height="1" fill="#4a4a52" />
      </svg>
      <span className="phone-label pixel-font">Socials</span>
    </div>
  </button>
);

/* ============================================================
   ACHIEVEMENTS OVERLAY
============================================================ */
const AchievementsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="overlay-backdrop" onClick={onClose}>
    <div
      className="overlay-panel achievements-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="overlay-close pixel-font"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <h2 className="pixel-font overlay-title">Achievements</h2>
      <div className="achievements-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="achievement-slot">
            <svg
              width="40"
              height="40"
              viewBox="0 0 10 10"
              style={{ shapeRendering: "crispEdges" }}
            >
              <rect
                x="0"
                y="0"
                width="10"
                height="10"
                fill="hsl(var(--muted))"
              />
              <rect
                x="1"
                y="1"
                width="8"
                height="8"
                fill="hsl(var(--muted) / 0.6)"
              />
              <rect
                x="4"
                y="3"
                width="2"
                height="4"
                fill="hsl(var(--muted-foreground) / 0.25)"
              />
              <rect
                x="3"
                y="4"
                width="4"
                height="2"
                fill="hsl(var(--muted-foreground) / 0.25)"
              />
            </svg>
            <span className="pixel-font achievement-label">Locked</span>
          </div>
        ))}
      </div>
      <p className="pixel-font overlay-hint">
        certificates will appear here soon!
      </p>
    </div>
  </div>
);

/* ============================================================
   SOCIALS PHONE OVERLAY  (smooth zoom-in)
============================================================ */
const SocialsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="overlay-backdrop phone-backdrop" onClick={onClose}>
    <div
      className="phone-zoom-frame"
      onClick={(e) => e.stopPropagation()}
    >
      {/* phone shape */}
      <div className="phone-big">
        <div className="phone-big-notch" />
        <div className="phone-big-screen">
          <h2 className="pixel-font phone-big-title">Socials</h2>
          <div className="phone-social-list">
            {(
              [
                {
                  name: "Instagram",
                  Icon: Instagram,
                  color: "340 70% 55%",
                  href: "https://www.instagram.com/jims.alc/",
                },
                {
                  name: "Facebook",
                  Icon: Facebook,
                  color: "215 80% 55%",
                  href: "https://www.facebook.com/JamesAlcarde11042008/",
                },
                {
                  name: "Gmail",
                  Icon: Mail,
                  color: "5 75% 50%",
                  onClick: () => {
                    navigator.clipboard.writeText(
                      "jamesalcarde11042008@gmail.com"
                    );
                    toast.success("Email copied to clipboard!");
                  },
                },
                {
                  name: "Discord",
                  Icon: DiscordIcon,
                  color: "235 60% 55%",
                  href: "https://discordapp.com/users/1500537862402212084",
                },
              ] as const
            ).map(({ name, Icon, color, ...rest }) => {
              const href = "href" in rest ? rest.href : undefined;
              const onClick = "onClick" in rest ? rest.onClick : undefined;
              const inner = (
                <>
                  <span
                    className="social-circle"
                    style={{ background: `hsl(${color})` }}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="pixel-font social-name">{name}</span>
                </>
              );
              if (href) {
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-row"
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <button
                  key={name}
                  onClick={onClick}
                  className="social-row"
                  type="button"
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </div>
        <div className="phone-big-home" />
      </div>
      <p className="pixel-font phone-close-hint">tap outside to close</p>
    </div>
  </div>
);

/* ============================================================
   MAIN SCENE — Cozy Bedroom
============================================================ */
export const CozyScene = () => {
  const [night, setNight] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", night);
  }, [night]);

  const stars = useMemo(
    () =>
      Array.from({ length: 35 }).map(() => ({
        top: Math.random() * 75,
        left: Math.random() * 100,
        delay: Math.random() * 2.4,
        big: Math.random() > 0.82,
      })),
    []
  );

  return (
    <main className="bedroom">
      {/* ═══════ WALL ═══════ */}
      <div className="bedroom-wall" aria-hidden="true" />

      {/* ═══════ CEILING MOLDING ═══════ */}
      <div className="ceiling-strip" aria-hidden="true" />

      {/* ═══════ WINDOW (centered) ═══════ */}
      <div className="window-area">
        {/* left curtain */}
        <div className="curtain curtain-l" aria-hidden="true">
          <div className="curtain-fold" />
          <div className="curtain-fold" />
          <div className="curtain-fold" />
          <div className="curtain-tie" />
        </div>

        {/* window frame */}
        <div className="window-frame">
          <div className="window-sky">
            {/* stars (night) */}
            <div className="window-stars">
              {stars.map((s, i) => (
                <span
                  key={i}
                  className={`star ${s.big ? "big" : ""}`}
                  style={{
                    top: `${s.top}%`,
                    left: `${s.left}%`,
                    animationDelay: `${s.delay}s`,
                  }}
                />
              ))}
            </div>

            {/* sun / moon */}
            <div
              className="win-celestial"
              style={{ left: night ? "72%" : "18%" }}
            >
              <div className="sun" />
            </div>

            {/* clouds */}
            {[
              { top: "12%", dur: "26s", del: "0s", sc: 0.8 },
              { top: "32%", dur: "34s", del: "-14s", sc: 0.6 },
              { top: "50%", dur: "30s", del: "-22s", sc: 0.7 },
            ].map((c, i) => (
              <div
                key={i}
                className="win-cloud"
                style={{
                  top: c.top,
                  animationDuration: c.dur,
                  animationDelay: c.del,
                }}
              >
                <PixelCloud scale={c.sc} />
              </div>
            ))}

            {/* birds */}
            {[
              { top: "18%", dur: "11s", del: "0s", size: 14, op: 0.6 },
              { top: "38%", dur: "14s", del: "-4s", size: 11, op: 0.5 },
              { top: "25%", dur: "17s", del: "-9s", size: 9, op: 0.4 },
            ].map((b, i) => (
              <div
                key={i}
                className="win-bird"
                style={{
                  top: b.top,
                  animationDuration: b.dur,
                  animationDelay: b.del,
                }}
              >
                <PixelWindowBird size={b.size} opacity={b.op} />
              </div>
            ))}

            {/* distant landscape at bottom of window */}
            <svg
              className="win-landscape"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              style={{ shapeRendering: "crispEdges" }}
              aria-hidden="true"
            >
              <rect
                x="0"
                y="7"
                width="100"
                height="5"
                fill="hsl(var(--hill-front))"
              />
              <rect
                x="0"
                y="5"
                width="100"
                height="3"
                fill="hsl(var(--hill-mid))"
              />
              {/* tiny tree silhouettes */}
              {[5, 18, 30, 48, 62, 78, 90].map((x, i) => (
                <g key={i}>
                  <rect
                    x={x}
                    y={3}
                    width={2}
                    height={4}
                    fill="hsl(var(--hill-front))"
                  />
                  <rect
                    x={x - 1}
                    y={4}
                    width={4}
                    height={2}
                    fill="hsl(var(--hill-front))"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* crossbars */}
          <div className="cross-h" />
          <div className="cross-v" />
        </div>

        {/* right curtain */}
        <div className="curtain curtain-r" aria-hidden="true">
          <div className="curtain-fold" />
          <div className="curtain-fold" />
          <div className="curtain-fold" />
          <div className="curtain-tie" />
        </div>

        {/* windowsill */}
        <div className="windowsill" aria-hidden="true" />
      </div>

      {/* ═══════ DESK ═══════ */}
      <div className="desk-area">
        {/* items sit on top of desk */}
        <div className="desk-items">
          <PixelLamp />
          <PixelBooks />

          {/* computer */}
          <div className="desk-item computer-wrap">
            <div className="monitor-box">
              <div className="monitor-screen">
                <span className="pixel-font monitor-greeting">
                  hello, i'm james!
                </span>
                <span className="cursor-blink">_</span>
              </div>
              <div className="monitor-chin" />
              <div className="monitor-neck" />
              <div className="monitor-foot" />
            </div>
            <div className="keyboard-box">
              <div className="kb-row">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="kb-key" />
                ))}
              </div>
              <div className="kb-row">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="kb-key" />
                ))}
              </div>
              <div className="kb-row">
                <span className="kb-key kb-space" />
              </div>
            </div>
          </div>

          <PixelTrophy onClick={() => setShowAchievements(true)} />
          <PixelPhoneStand onClick={() => setShowSocials(true)} />
        </div>

        {/* desk surface */}
        <div className="desk-top" aria-hidden="true" />
        <div className="desk-front" aria-hidden="true">
          <div className="desk-drawer" />
          <div className="desk-drawer" />
        </div>
      </div>

      {/* ═══════ FLOOR ═══════ */}
      <div className="bedroom-floor" aria-hidden="true" />

      {/* ═══════ COZY EXTRAS ═══════ */}
      <div className="rug" aria-hidden="true" />

      {/* ═══════ DAY / NIGHT TOGGLE ═══════ */}
      <button
        onClick={() => setNight((n) => !n)}
        className="dn-toggle pixel-font"
        aria-label="toggle night mode"
      >
        {night ? <Sun size={12} /> : <Moon size={12} />}
        {night ? "day" : "night"}
      </button>

      {/* ═══════ OVERLAYS ═══════ */}
      {showAchievements && (
        <AchievementsOverlay onClose={() => setShowAchievements(false)} />
      )}
      {showSocials && (
        <SocialsOverlay onClose={() => setShowSocials(false)} />
      )}
    </main>
  );
};

export default CozyScene;
