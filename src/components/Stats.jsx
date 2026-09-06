import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const STATS = [
  { index: "01", number: "97,000+", label: "Workflow Automation" },
  { index: "02", number: "£288M+", label: "Transactions Processed" },
  { index: "03", number: "49,000+", label: "Hours Saved" },
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
            <span className="stats__index">{stat.index}</span>
            <span className="stats__number">{stat.number}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}