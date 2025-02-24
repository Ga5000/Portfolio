import React, { useEffect } from "react";
import { TimeLineItem } from "data/interfaces";

interface TimeLineProps {
  darkMode: boolean;
  items: TimeLineItem[];
}

const TimeLine: React.FC<TimeLineProps> = ({ darkMode, items }) => {
  useEffect(() => {
    const timelineTexts = document.querySelectorAll(".timeline-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineTexts.forEach((text) => observer.observe(text));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`relative max-w-6xl mx-auto px-5 ${darkMode ? 'text-white' : 'text-black'}`} id="timeline-section">
      <div style={{ marginTop: '720px' }}>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 pointer-events-none"></div>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center mb-10 relative ${index % 2 === 0 ? 'timeline-left' : 'timeline-right flex-row-reverse'}`}
            >
              <div
                className={`timeline-text w-1/2 px-5 ${index % 2 === 0 ? 'text-right ml-[-70px]' : 'text-left mr-[-70px]'}`}
              >
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-base ${darkMode ? 'text-gray-300' : 'text-black'}`}>
                  {item.description}
                </p>
                <span className={`mt-2 text-sm font-bold ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                  {item.date}
                </span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${darkMode ? 'bg-black border-2 border-white' : 'bg-gray-100 border-2 border-black'} text-gray-900`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;