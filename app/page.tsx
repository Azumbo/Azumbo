import { redirect } from 'next/navigation';

/** Root is locale-routed in middleware; keep a server redirect as a fallback. */
export default function RootPage() {
  redirect('/en');
}
