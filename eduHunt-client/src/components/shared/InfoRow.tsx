export const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) => {
  if (!value) return null;
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0">{icon}</span>
      <span className="text-xs text-gray-400 w-14 shrink-0">{label}</span>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {value}
      </span>
    </div>
  );
};
