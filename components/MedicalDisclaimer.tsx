type Props = {
  text?: string;
  className?: string;
};

const DEFAULT =
  "Este análisis no diagnostica cáncer. Evalúa predisposición genética hereditaria y debe interpretarse junto con la historia personal, familiar y criterio médico.";

export default function MedicalDisclaimer({ text = DEFAULT, className = "" }: Props) {
  return (
    <div
      role="note"
      className={`flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-amber-900 sm:p-6 ${className}`}
    >
      <span
        aria-hidden
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </span>
      <p>
        <strong className="font-semibold">Importante:</strong> {text}
      </p>
    </div>
  );
}
