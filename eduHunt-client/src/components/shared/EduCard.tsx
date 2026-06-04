export const EduCard = ({
  level,
  icon,
  rows,
}: {
  level: string;
  icon: React.ReactNode;
  rows: { label: string; value?: string }[];
}) => (

  <div className="border border-gray-100 dark:border-zinc-800 rounded-xl p-4">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
        {level}
      </h3>
    </div>
    
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {rows.map(({ label, value }) =>
        value ? (
          <div key={label}>
            <p className="text-xs text-gray-400">{label}</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {value}
            </p>
          </div>
        ) : null,
      )}
    </div>
  </div>
);
