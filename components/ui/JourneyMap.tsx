"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    id: 1,
    label: "Invisible",
    sublabel: "Skilled but unseen",
    x: 112,
    y: 310,
    delay: 0,
  },
  {
    id: 2,
    label: "Skilled",
    sublabel: "HubSpot certified",
    x: 280,
    y: 195,
    delay: 0.3,
  },
  {
    id: 3,
    label: "Trusted",
    sublabel: "Client Facing PM",
    x: 460,
    y: 130,
    delay: 0.6,
  },
  {
    id: 4,
    label: "Indispensable",
    sublabel: "The most valuable person in the room",
    x: 650,
    y: 75,
    delay: 0.9,
  },
];

// SVG path connecting all four milestones as a smooth curve
const PATH =
  "M 112 310 C 160 270, 220 230, 280 195 S 390 150, 460 130 S 580 95, 650 75";

export default function JourneyMap() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Animate when section is in view
      const start = windowH * 0.8;
      const end = windowH * 0.1;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dashOffset = pathLength > 0 ? pathLength * (1 - progress) : pathLength;

  return (
    <div ref={sectionRef} className="relative w-full select-none">
      <svg
        viewBox="0 0 780 390"
        className="w-full"
        style={{ minHeight: '260px' }}
        preserveAspectRatio="xMidYMid meet"
        aria-label="Journey map from Invisible to Indispensable"
        role="img"
      >
        {/* Grid lines — subtle graph paper effect */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#F0EDE8"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Glow filter for active pin */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Drop shadow for pins */}
          <filter id="pin-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#C4622D"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Background */}
        <rect width="780" height="390" fill="white" />
        <rect width="780" height="390" fill="url(#grid)" />

        {/* Faint dotted future path — full route shown faintly */}
        <path
          d={PATH}
          fill="none"
          stroke="#E8A87C"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.25"
        />

        {/* Animated progress path */}
        {pathLength > 0 && (
          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            stroke="#C4622D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        )}

        {/* Hidden path for length measurement */}
        {pathLength === 0 && (
          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            stroke="transparent"
            strokeWidth="0"
          />
        )}

        {/* Milestone markers */}
        {milestones.map((m, i) => {
          const isActive = progress > i * 0.28;
          const isLast = i === milestones.length - 1;

          return (
            <g key={m.id}>
              {/* Outer ring pulse — only on active */}
              {isActive && (
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="18"
                  fill={isLast ? "#C4622D" : "#FEF0E8"}
                  opacity={isActive ? 0.4 : 0}
                  style={{ transition: "opacity 0.4s ease" }}
                />
              )}

              {/* Pin circle */}
              <circle
                cx={m.x}
                cy={m.y}
                r="10"
                fill={isActive ? (isLast ? "#C4622D" : "#1A1714") : "#E5E0D8"}
                filter={isLast && isActive ? "url(#pin-shadow)" : undefined}
                style={{ transition: "fill 0.4s ease" }}
              />

              {/* Pin number */}
              <text
                x={m.x}
                y={m.y + 4}
                textAnchor="middle"
                fontSize="9"
                fontWeight="500"
                fontFamily="DM Sans, system-ui"
                fill={isActive ? "white" : "#B0A99F"}
                style={{ transition: "fill 0.4s ease" }}
              >
                {m.id}
              </text>

              {/* Label chip — above for first two, below for last two */}
              <g
                opacity={isActive ? 1 : 0.3}
                style={{ transition: "opacity 0.4s ease" }}
              >
                {/* Chip background */}
                <rect
                  x={m.x - (i === 3 ? 72 : 44)}
                  y={i % 2 === 0 ? m.y + 18 : m.y - 52}
                  width={i === 3 ? 144 : 88}
                  height={44}
                  rx="22"
                  fill="white"
                  stroke={isActive ? (isLast ? "#C4622D" : "#1A1714") : "#E5E0D8"}
                  strokeWidth="1"
                  style={{
                    filter: isActive
                      ? "drop-shadow(0px 2px 8px rgba(0,0,0,0.08))"
                      : "none",
                    transition: "all 0.4s ease",
                  }}
                />

                {/* Label */}
                <text
                  x={m.x}
                  y={i % 2 === 0 ? m.y + 34 : m.y - 36}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="500"
                  fontFamily="DM Sans, system-ui"
                  fill={isActive ? (isLast ? "#C4622D" : "#1A1714") : "#B0A99F"}
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {m.label}
                </text>

                {/* Sublabel */}
                <text
                  x={m.x}
                  y={i % 2 === 0 ? m.y + 47 : m.y - 24}
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="DM Sans, system-ui"
                  fill={isActive ? "#7A6F65" : "#C5BDB8"}
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {m.sublabel}
                </text>
              </g>
            </g>
          );
        })}

        {/* "Your journey" label — top right */}
        <text
          x="20"
          y="20"
          textAnchor="start"
          fontSize="9"
          fontFamily="DM Sans, system-ui"
          fill="#C5BDB8"
          letterSpacing="0.12em"
        >
          YOUR JOURNEY ↗
        </text>
      </svg>
    </div>
  );
}
