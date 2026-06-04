export const Pill = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
    
  <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
    <span className="text-purple-600">{icon}</span>
    {text}
  </span>
);
