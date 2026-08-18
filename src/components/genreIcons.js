import { Music4, Coffee, Gem, Car, Star, Shirt, Signpost, PawPrint, CalendarDays, Camera } from "lucide-react";

const MAP = {
  music: Music4,
  coffee: Coffee,
  gem: Gem,
  car: Car,
  star: Star,
  shirt: Shirt,
  signpost: Signpost,
  pawprint: PawPrint,
  calendar: CalendarDays,
};

export const genreIcon = (key) => MAP[key] || Camera;
