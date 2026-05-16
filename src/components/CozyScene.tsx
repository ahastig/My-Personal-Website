import { forwardRef, useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Facebook, Instagram, Mail, Moon, Sun, X } from "lucide-react";
import { toast } from "sonner";

const DiscordIcon = forwardRef<SVGSVGElement, { className?: string }>(({ className = "" }, ref) => (
  <svg ref={ref} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a13.6 13.6 0 0 0-.69 1.42 18.27 18.27 0 0 0-5.736 0A13 13 0 0 0 9.44 3 19.79 19.79 0 0 0 5.68 4.369C2.063 9.79 1.075 15.072 1.57 20.28a19.95 19.95 0 0 0 6.06 3.06 14.7 14.7 0 0 0 1.296-2.107 12.95 12.95 0 0 1-2.04-.98c.171-.125.339-.255.5-.388a14.22 14.22 0 0 0 12.226 0c.163.133.331.263.5.388-.652.388-1.336.717-2.04.98a14.7 14.7 0 0 0 1.296 2.107 19.95 19.95 0 0 0 6.06-3.06c.585-6.07-.99-11.302-4.111-15.911ZM8.78 17.21c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.955-2.422 2.156-2.422 1.2 0 2.176 1.085 2.156 2.422 0 1.335-.956 2.42-2.156 2.42Zm6.44 0c-1.182 0-2.156-1.085-2.156-2.42 0-1.337.954-2.422 2.156-2.422 1.2 0 2.175 1.085 2.156 2.422 0 1.335-.955 2.42-2.156 2.42Z" />
  </svg>
));

DiscordIcon.displayName = "DiscordIcon";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jims.alc/",
    Icon: Instagram,
    color: "340 70% 70%",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/JamesAlcarde11042008/",
    Icon: Facebook,
    color: "215 80% 65%",
  },
  {
    name: "Gmail",
    Icon: Mail,
    color: "5 75% 60%",
    onClick: () => {
      navigator.clipboard.writeText("jamesalcarde11042008@gmail.com");
      toast.success("Email copied to clipboard!");
    },
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/1500537862402212084",
    Icon: DiscordIcon,
    color: "235 60% 65%",
  },
] as const;

const PixelCloud = ({ scale = 1 }: { scale?: number }) => (
  <svg width={64 * scale} height={28 * scale} viewBox="0 0 16 7" aria-hidden="true">
    <g fill="hsl(var(--cloud))">
      <rect x="3" y="2" width="4" height="1" />
      <rect x="9" y="2" width="4" height="1" />
      <rect x="2" y="3" width="12" height="1" />
      <rect x="1" y="4" width="14" height="2" />
      <rect x="2" y="6" width="12" height="1" />
    </g>
    <g fill="hsl(var(--cloud-shadow))">
      <rect x="1" y="6" width="3" height="1" />
      <rect x="10" y="6" width="4" height="1" />
    </g>
  </svg>
);

const PixelBird = () => (
  <svg width="34" height="20" viewBox="0 0 17 10" aria-hidden="true">
    <g fill="hsl(var(--bird))">
      <rect x="2" y="5" width="3" height="2" />
      <rect x="5" y="4" width="6" height="3" />
      <rect x="10" y="3" width="4" height="3" />
      <rect x="0" y="6" width="2" height="1" />
    </g>
    <g className="bird-wing" fill="hsl(var(--bird-light))">
      <rect x="6" y="2" width="5" height="2" />
      <rect x="7" y="1" width="3" height="1" />
    </g>
    <rect x="12" y="4" width="1" height="1" fill="hsl(var(--border))" />
    <rect x="14" y="4" width="2" height="1" fill="hsl(var(--lamp-glow))" />
    <rect x="6" y="7" width="4" height="1" fill="hsl(var(--cloud))" />
  </svg>
);

const Computer = () => (
  <div className="computer" aria-label="computer screen saying hello, i'm james!">
    <div className="computer-screen pixel-font">
      <span>hello, i'm james!</span>
      <span className="screen-cursor" aria-hidden="true" />
    </div>
    <div className="computer-neck" />
    <div className="computer-base" />
    <div className="keyboard">
      {Array.from({ length: 15 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  </div>
);

const Books = () => (
  <div className="desk-books" aria-hidden="true">
    <span className="book book-pink" />
    <span className="book book-blue" />
    <span className="book book-cream" />
    <span className="book-label" />
  </div>
);

const Lamp = () => (
  <div className="lamp" aria-hidden="true">
    <div className="lamp-glow" />
    <div className="lamp-shade" />
    <div className="lamp-stem" />
    <div className="lamp-base" />
  </div>
);

const TrophyButton = ({ onClick }: { onClick: () => void }) => (
  <button className="trophy-button" type="button" onClick={onClick} aria-label="open achievements">
    <span className="trophy-shine" />
    <span className="trophy-cup" />
    <span className="trophy-handle trophy-handle-left" />
    <span className="trophy-handle trophy-handle-right" />
    <span className="trophy-stem" />
    <span className="trophy-base" />
  </button>
);

const PhoneButton = ({ open, onClick }: { open: boolean; onClick: () => void }) => (
  <button
    className={`phone-holder ${open ? "is-active" : ""}`}
    type="button"
    onClick={onClick}
    aria-label="open socials phone"
  >
    <span className="phone-stand-back" />
    <span className="phone-device">
      <span className="phone-speaker" />
      <span className="phone-screen pixel-font">Socials</span>
    </span>
    <span className="phone-stand-front" />
  </button>
);

const SocialGrid = ({ compact = false }: { compact?: boolean }) => (
  <div className={compact ? "phone-social-list" : "social-grid"}>
    {socials.map(({ name, href, Icon, color, onClick }) => {
      const className = "social-tile pixel-font";
      const style = { "--social-color": color } as CSSProperties;

      if (href) {
        return (
          <a key={name} className={className} style={style} href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="social-icon" />
            <span>{name}</span>
          </a>
        );
      }

      return (
        <button key={name} className={className} style={style} type="button" onClick={onClick}>
          <Icon className="social-icon" />
          <span>{name}</span>
        </button>
      );
    })}
  </div>
);

const WindowScene = ({ night }: { night: boolean }) => {
  const stars = useMemo(
    () =>
      [
        [9, 16],
        [18, 42],
        [24, 72],
        [36, 24],
        [42, 58],
        [52, 84],
        [64, 13],
        [72, 66],
        [82, 36],
        [88, 78],
      ].map(([left, top], index) => ({ left, top, big: index % 3 === 0 })),
    []
  );

  return (
    <div className="window-frame">
      <div className="window-view">
        <div className="window-stars">
          {stars.map((star, index) => (
            <span
              key={index}
              className={`window-star ${star.big ? "big" : ""}`}
              style={{ left: `${star.left}%`, top: `${star.top}%`, animationDelay: `${index * 0.18}s` }}
            />
          ))}
        </div>
        <div className="window-celestial" style={{ left: night ? "73%" : "12%" }}>
          <div className="window-sun" />
        </div>
        <div className="window-cloud cloud-one">
          <PixelCloud scale={1.25} />
        </div>
        <div className="window-cloud cloud-two">
          <PixelCloud scale={0.9} />
        </div>
        <div className="window-cloud cloud-three">
          <PixelCloud scale={1.05} />
        </div>
        <div className="window-bird bird-one">
          <PixelBird />
        </div>
        <div className="window-bird bird-two">
          <PixelBird />
        </div>
      </div>
      <div className="window-cross window-cross-vertical" />
      <div className="window-cross window-cross-horizontal" />
      <div className="window-sill" />
    </div>
  );
};

const AchievementModal = ({ onClose }: { onClose: () => void }) => (
  <div className="pixel-modal-backdrop" role="presentation" onClick={onClose}>
    <section className="pixel-modal achievements-modal" role="dialog" aria-modal="true" aria-labelledby="achievements-title" onClick={(event) => event.stopPropagation()}>
      <button className="modal-close" type="button" onClick={onClose} aria-label="close achievements">
        <X size={14} />
      </button>
      <h2 id="achievements-title" className="pixel-font">
        achievements
      </h2>
      <p className="pixel-font">Certificate slots are ready for the files you will provide later.</p>
      <div className="certificate-grid">
        {["coming soon", "coming soon", "coming soon"].map((label, index) => (
          <div key={index} className="certificate-card">
            <span className="certificate-ribbon" />
            <span className="certificate-lines" />
            <strong className="pixel-font">{label}</strong>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PhoneOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="phone-overlay" role="presentation" onClick={onClose}>
    <section className="zoomed-phone" role="dialog" aria-modal="true" aria-labelledby="phone-socials-title" onClick={(event) => event.stopPropagation()}>
      <button className="modal-close phone-close" type="button" onClick={onClose} aria-label="close socials">
        <X size={14} />
      </button>
      <span className="zoom-phone-speaker" />
      <div className="zoom-phone-screen">
        <h2 id="phone-socials-title" className="pixel-font">
          Socials
        </h2>
        <SocialGrid compact />
      </div>
      <span className="zoom-phone-button" />
    </section>
  </div>
);

export const CozyScene = () => {
  const [night, setNight] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", night);
  }, [night]);

  return (
    <main className={`bedroom-page ${phoneOpen ? "phone-focus" : ""}`}>
      <button
        onClick={() => setNight((current) => !current)}
        className="mode-toggle pixel-font"
        type="button"
        aria-label="toggle day and night mode"
      >
        {night ? <Sun size={14} /> : <Moon size={14} />}
        {night ? "day" : "night"}
      </button>

      <div className="bedroom-camera">
        <div className="bedroom-wall">
          <div className="wall-pixels" aria-hidden="true" />
          <div className="poster poster-left pixel-font" aria-hidden="true">
            stay cozy
          </div>
          <div className="poster poster-right" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <WindowScene night={night} />
          <div className="string-lights" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.16}s` }} />
            ))}
          </div>
        </div>

        <div className="bedroom-floor">
          <div className="rug" aria-hidden="true" />
          <div className="bed" aria-hidden="true">
            <div className="bed-headboard" />
            <div className="bed-mattress" />
            <div className="bed-blanket" />
            <div className="bed-pillow" />
            <div className="bed-leg left" />
            <div className="bed-leg right" />
          </div>

          <section className="desk-zone" aria-label="cozy bedroom desk">
            <div className="desk-top">
              <Lamp />
              <Books />
              <Computer />
              <TrophyButton onClick={() => setAchievementsOpen(true)} />
              <PhoneButton open={phoneOpen} onClick={() => setPhoneOpen(true)} />
            </div>
            <div className="desk-front">
              <div className="desk-drawer left">
                <span />
              </div>
              <div className="desk-drawer right">
                <span />
              </div>
            </div>
            <div className="desk-leg left" />
            <div className="desk-leg right" />
            <div className="chair" aria-hidden="true">
              <span className="chair-back" />
              <span className="chair-seat" />
              <span className="chair-leg left" />
              <span className="chair-leg right" />
            </div>
          </section>
        </div>
      </div>

      <p className="hint-text pixel-font">click the trophy for achievements or the phone for socials</p>

      {achievementsOpen && <AchievementModal onClose={() => setAchievementsOpen(false)} />}
      {phoneOpen && <PhoneOverlay onClose={() => setPhoneOpen(false)} />}
    </main>
  );
};

export default CozyScene;
