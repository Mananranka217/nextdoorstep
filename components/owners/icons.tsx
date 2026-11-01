import type { ReactNode } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function Svg({ size = 24, children }: { size?: number; children: ReactNode }) {
  return (
    <svg {...base} width={size} height={size}>
      {children}
    </svg>
  );
}

type P = { size?: number };

export const ShieldCheck = ({ size }: P) => (
  <Svg size={size}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></Svg>
);
export const Camera = ({ size }: P) => (
  <Svg size={size}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></Svg>
);
export const Key = ({ size }: P) => (
  <Svg size={size}><circle cx="8" cy="15" r="4" /><path d="M11 12l9-9M16 7l3 3M14 9l2 2" /></Svg>
);
export const FileCheck = ({ size }: P) => (
  <Svg size={size}><path d="M7 3h8l4 4v14H7z" /><path d="M15 3v4h4" /><path d="M10 14l2 2 3.5-4" /></Svg>
);
export const Tag = ({ size }: P) => (
  <Svg size={size}><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.3" /></Svg>
);
export const Users = ({ size }: P) => (
  <Svg size={size}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.5-3.5 3-5.5 6.5-5.5s6 2 6.5 5.5" /><path d="M16 4.7a3.4 3.4 0 010 6.6M18 14.8c2 .6 3.2 2.3 3.5 5.2" /></Svg>
);
export const House = ({ size }: P) => (
  <Svg size={size}><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></Svg>
);
export const Valuation = ({ size }: P) => (
  <Svg size={size}><path d="M4 20V8M10 20V4M16 20v-9M22 20H2" /><path d="M13 7l3-3 3 3" /></Svg>
);
export const Video = ({ size }: P) => (
  <Svg size={size}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></Svg>
);
export const Manager = ({ size }: P) => (
  <Svg size={size}><circle cx="12" cy="8" r="4" /><path d="M4 21c.7-4 3.7-6 8-6s7.3 2 8 6" /></Svg>
);
export const Check = ({ size = 18 }: P) => (
  <Svg size={size}><path d="M5 12.5l4.5 4.5L19 7.5" /></Svg>
);
export const Arrow = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const Building = ({ size }: P) => (
  <Svg size={size}><path d="M5 21V4h9v17M14 9h5v12M2 21h20" /><path d="M8 8h3M8 12h3M8 16h3" /></Svg>
);
export const Percent = ({ size }: P) => (
  <Svg size={size}><path d="M19 5L5 19" /><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /></Svg>
);
