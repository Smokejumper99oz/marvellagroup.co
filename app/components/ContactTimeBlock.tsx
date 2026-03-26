"use client";

import { useEffect, useState } from "react";

const MARVELLA_TZ = "America/New_York";

export type ContactTimeBlockProps = {
  className?: string;
};

function getNYClockMinutes(d: Date): { minutes: number; weekdayShort: string } {
  const weekdayShort = new Intl.DateTimeFormat("en-US", {
    timeZone: MARVELLA_TZ,
    weekday: "short",
  }).format(d);

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: MARVELLA_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(d);

  let hour = 0;
  let minute = 0;
  for (const p of parts) {
    if (p.type === "hour") hour = parseInt(p.value, 10);
    if (p.type === "minute") minute = parseInt(p.value, 10);
  }

  return { minutes: hour * 60 + minute, weekdayShort };
}

function isMarvellaOpen(d: Date): boolean {
  const { minutes, weekdayShort } = getNYClockMinutes(d);
  if (weekdayShort === "Sat" || weekdayShort === "Sun") return false;
  return minutes >= 9 * 60 && minutes < 17 * 60;
}

/** Intl 12h meridiem → lowercase a.m. / p.m. (AM/PM only; other calendars unchanged). */
function normalizeToLowerAmPm(intl12Hour: string): string {
  return intl12Hour
    .replace(/\u202f/g, " ")
    .replace(/\s*AM\b/gi, " a.m.")
    .replace(/\s*PM\b/gi, " p.m.");
}

function formatLocalTime(d: Date): string {
  const fmt24 = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const fmt12 = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
  });
  return `${fmt24.format(d)} (${normalizeToLowerAmPm(fmt12.format(d))})`;
}

function formatMarvellaTime(d: Date): string {
  const fmt24 = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: MARVELLA_TZ,
  });
  const fmt12 = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
    timeZone: MARVELLA_TZ,
  });
  return `${fmt24.format(d)} (${normalizeToLowerAmPm(fmt12.format(d))})`;
}

export function ContactTimeBlock({ className }: ContactTimeBlockProps) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const show = window.setTimeout(() => {
      setMounted(true);
      setNow(new Date());
    }, 0);
    const tick = window.setInterval(() => setNow(new Date()), 30_000);
    return () => {
      window.clearTimeout(show);
      window.clearInterval(tick);
    };
  }, []);

  const rootClass = [
    "rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-3 min-h-[4.25rem]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!mounted) {
    return (
      <div className={rootClass} aria-hidden>
        <div className="h-2.5 w-24 max-w-[55%] rounded bg-white/[0.06] mb-2" />
        <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5">
          <div className="h-2 w-28 rounded bg-white/[0.06]" />
          <div className="h-2 w-full max-w-[14rem] justify-self-start rounded bg-white/[0.04]" />
          <div className="h-2 w-40 rounded bg-white/[0.06]" />
          <div className="h-2 w-full max-w-[14rem] justify-self-start rounded bg-white/[0.04]" />
        </div>
      </div>
    );
  }

  const open = isMarvellaOpen(now);

  return (
    <div className={rootClass}>
      <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-cyan-200/45 mb-2">
        {open ? "Open now" : "Closed now"}
      </p>
      <div className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-white/48 leading-snug">
        <span className="text-white/38 whitespace-nowrap">Your Local Time:</span>
        <span className="text-white/58 tabular-nums min-w-0">
          {formatLocalTime(now)}
        </span>
        <span className="text-white/38 whitespace-nowrap">
          Marvella Group
          <sup
            className="text-[0.58em] font-normal leading-none relative -top-[0.28em] ml-[0.06em] tracking-tight"
            aria-hidden
          >
            ™
          </sup>
          {" Time:"}
        </span>
        <span className="text-white/58 tabular-nums min-w-0">
          {formatMarvellaTime(now)}
        </span>
      </div>
    </div>
  );
}
