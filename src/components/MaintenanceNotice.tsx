import { Wrench } from 'lucide-react';

export default function MaintenanceNotice() {
  return (
    <div
      className="border-t border-amber-300/70 bg-amber-50 text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/70 dark:text-amber-100"
      role="status"
      aria-label="Planned website maintenance notice"
    >
      <div className="mx-auto flex max-w-[1500px] items-start justify-center gap-2 px-4 py-2.5 text-center text-xs leading-relaxed sm:px-6 sm:text-sm 2xl:px-7">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p>
          <strong>Planned maintenance:</strong> JA Group Services Ltd and the websites operated under its brands are currently undergoing maintenance to improve the services we provide. Some features may be temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
