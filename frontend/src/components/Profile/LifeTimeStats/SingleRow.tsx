type SingleRowProps = {
  children?: React.ReactElement;
  label: string;
  sum: number;
  unit?: string;
  orange?: boolean;
};

export function SingleRow({
  children,
  label,
  sum,
  unit,
  orange,
}: SingleRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-(--text-color)">{label}</span>
      <div className="flex items-center">
        <span
          className={`text-2xl font-bold ${orange === true ? "text-(--hover-color)" : "text-(--text-color)"}`}
        >
          {sum}
          {unit}
        </span>
        {children}
      </div>
    </div>
  );
}
