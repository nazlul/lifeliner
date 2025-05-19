type Props = {
  index: number;
  videoUrl: string;
  question: string;
  options: string[];
  selected: string;
  onAnswer: (ans: string) => void;
};

export default function QuestionCard({
  index,
  videoUrl,
  question,
  options,
  selected,
  onAnswer,
}: Props) {
  return (
    <div className="mb-6 p-4 border rounded shadow">
      <iframe
        src={videoUrl}
        title={`Video ${index + 1}`}
        className="w-full h-64 mb-4"
        allowFullScreen
      ></iframe>
      <h2 className="font-medium mb-2">{index + 1}. {question}</h2>
      <div className="space-y-1">
        {options.map((opt, idx) => (
          <div key={idx}>
            <label className="cursor-pointer">
              <input
                type="radio"
                name={`q${index}`}
                value={opt}
                checked={selected === opt}
                onChange={() => onAnswer(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
