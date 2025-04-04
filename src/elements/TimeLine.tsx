import React, { useEffect } from "react";
import items from "../data/timeLineItems";

const TimeLine: React.FC = () => {
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
    <section className="relative max-w-6xl mx-auto px-5 text-white dark:text-black">
      <div style={{ marginTop: "400px" }}>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 pointer-events-none"></div>
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center mb-10 relative ${
                  index % 2 === 0
                    ? "timeline-left"
                    : "timeline-right flex-row-reverse"
                }`}
              >
                <div
                  className={`flex items-center mb-10 relative w-full ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`timeline-text max-w-[calc(50%-1.5rem)] sm:max-w-[50%] ${
                      index % 2 === 0
                        ? "text-right pr-4 sm:pr-0 sm:ml-[-70px]"
                        : "text-left pl-4 sm:pl-0 sm:mr-[-70px]"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-black dark:text-gray-300">
                      {item.description}
                    </p>
                    <span className="mt-2 text-xs sm:text-sm font-bold text-gray-400 dark:text-gray-600">
                      {item.date}
                    </span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gray-100 border-2 border-black dark:bg-black dark:border-2 dark:border-white">
                      <IconComponent color="green" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
