// -----------------------------
// FIELD KEY FORMATTER
// -----------------------------
export const getFieldKey = (label: string) => {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
};

// -----------------------------
// DATE FORMAT
// -----------------------------
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
};

// -----------------------------
// TIME FORMAT (AM/PM)
// -----------------------------
export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// -----------------------------
// GREETING LOGIC
// -----------------------------
import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

export const getGreetingData = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return { text: "Good morning", icon: Sunrise };
  }

  if (hour < 17) {
    return { text: "Good afternoon", icon: Sun };
  }

  if (hour < 20) {
    return { text: "Good evening", icon: Sunset };
  }

  return { text: "Good night", icon: Moon };
};