export const BlockTitle = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4">
    {icon} {label}
  </div>
);
