import { YearCalendar } from "@/components/year-calendar";
import { SekkiProvider } from "@/components/sekki-context";

export default function Home() {
  return (
    <SekkiProvider>
      <YearCalendar />
    </SekkiProvider>
  );
}
