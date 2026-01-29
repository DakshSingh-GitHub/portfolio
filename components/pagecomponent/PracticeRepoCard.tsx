
import Link from "next/link";

interface PropsPracticeRepoCard {
    repo_name: string;
    repo_desc: string;
    repo_lang: string[] | string;
    repo_url: string;
}


export default function PracticeRepoCard({repo_name, repo_desc, repo_lang, repo_url}: PropsPracticeRepoCard) {
    return (
        <Link
            href={repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
        >
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-purple-700/30 p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:border-purple-500/80 hover:shadow-purple-500/20 hover:bg-black/30">
                <div>
                    <h2 className="text-xl font-bold text-white mb-3 leading-tight">
                        {repo_name}
                    </h2>
                    <hr className="border-white/20 mb-4" />
                    <p className="text-gray-300 text-sm mb-4">
                        {repo_desc}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {(Array.isArray(repo_lang) ? repo_lang : [repo_lang]).map(
                        (lang, index) => (
                            <span
                                key={index}
                                className="inline-block bg-purple-600/30 text-purple-200 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/50"
                            >
                                {lang}
                            </span>
                        )
                    )}
                </div>
            </div>
        </Link>
    );
}
