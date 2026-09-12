import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const STATS = [
  {
    index: "01",
    number: "97,000+",
    label: "Workflow Automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    index: "02",
    number: "£288M+",
    label: "Transactions Processed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="14.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: "03",
    number: "49,000+",
    label: "Hours Saved",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`stats ${visible ? "stats--visible" : ""}`} ref={sectionRef} id="stats">
      <div className="stats__inner">
        {STATS.map((stat, i) => (
          <div
            className="stats__item"
            key={stat.index}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <span className="stats__icon">{stat.icon}</span>
            <span className="stats__index">{stat.index}</span>
            <span className="stats__number">{stat.number}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}