export const MetricBox = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => {
  if (!value) return null;
  return (
    <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {value}
      </p>
    </div>
  );
};
