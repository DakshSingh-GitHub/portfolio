
import Image from "next/image";

interface CardProps {
  image: string;
  text: string;
  paragraph: string;
  board: boolean;
  className?: string;
}

export default function Card({ image, text, paragraph, board, className = "" }: CardProps) {
  return (
    <div className={`w-full md:w-97.5 bg-black/20 backdrop-blur-lg rounded-2xl border border-purple-700/30 overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:border-purple-500 transition-all duration-300 flex flex-col flex-1 h-full ${className}`}>
      <div className="relative w-full h-52 shrink-0">
        <Image
          src={image}
          fill
          alt={text}
          className="object-cover"
          loading="eager"
        />
      </div>
      <div className="px-5 pt-5 pb-5 flex flex-col flex-1">
        <h1 className="text-center mb-3 text-xl font-bold text-white tracking-wide">
          {text}
        </h1>
        <hr className="border-white/20" />
        <p className="mt-3 text-center text-gray-300 text-sm">{paragraph}</p>
      </div>
      {board && (
        <div className="px-5 pt-2 pb-5 bg-black/20 mt-auto">
          <h2 className="font-bold mb-2 text-lg text-center text-white">
            Results
          </h2>
          <ul className="text-center space-y-1 text-sm">
            <li>
              <span className="font-semibold text-purple-400">
                10th CBSE Board
              </span>
              <span className="text-gray-300"> - 89.8% | B5: 95.2%</span>
            </li>
            <li>
              <span className="font-semibold text-purple-400">
                12th CBSE Board
              </span>
              <span className="text-gray-300"> - 91.0%</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
