
import { classNames } from "@/components/styles";
import Image from "next/image";

export default function CodeJudgePage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-3xl sm:text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    ⚖️ Mini Online Judge (FastAPI Backend)
                </h1>
                <p className="text-lg text-gray-400 mt-4 break-all">
                    A lightweight Online Code Judge built using FastAPI, designed to replicate the core functionality of platforms like Codeforces or LeetCode. It executes user-submitted Python code, evaluates it against predefined test cases, and provides detailed verdicts. This project serves as a foundational implementation to understand the intricacies of automated code evaluation systems, offering a pocket-sized, yet powerful, solution for competitive programming practice or educational purposes.
                </p>
            </header>
            <Image
                src="../projects/code_judge.png"
                alt="Code Judge"
                height={200}
                width={600}
                className={`rounded-4xl mx-auto mt-10 border-4 border-purple-500/50 shadow-lg shadow-purple-500/20 ${classNames.textGlowEffect} hover:border-purple-500`}
            />

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    ✨ Key Features
                </h2>
                <ul
                    className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                >
                    <li><span className={classNames.cardparent_list_span}>✅ Execute Python code submissions:</span> Securely runs user-provided Python scripts in an isolated environment.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Accept custom input (stdin):</span> Allows test cases to be dynamically supplied to the executing code via standard input.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Compare output with expected output:</span> Automatically verifies the correctness of the submitted code's output against predefined correct solutions.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Comprehensive Verdict System:</span> Provides clear feedback on submission results, including Accepted, Wrong Answer, Runtime Error, and Time Limit Exceeded.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Execution time limits:</span> Enforces strict time constraints on code execution to prevent infinite loops and inefficient solutions.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Clean REST API:</span> Offers a well-structured and easy-to-use API endpoint for submitting code and retrieving results programmatically.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ JSON-based request/response:</span> Utilizes industry-standard JSON format for seamless data exchange between clients and the judge server.</li>
                    <li><span className={classNames.cardparent_list_span}>✅ Beginner-friendly but system-level logic:</span> Designed with an approachable architecture, while incorporating fundamental system-level concepts essential for robust code execution and evaluation.</li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        🧠 How It Works (High Level Overview)
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>**User sends Python code via API:** Submissions are made through a dedicated REST API endpoint.</li>
                        <li>**Code is written to a temporary file:** The received code is saved to a secure, temporary location on the server filesystem.</li>
                        <li>**Code is executed using `subprocess`:** Python's `subprocess` module is leveraged to run the user's code as a separate process, allowing for controlled execution.</li>
                        <li>**Input is piped through stdin:** Test case inputs are redirected to the executing code's standard input stream.</li>
                        <li>**Output is captured from stdout:** The executed code's standard output is captured for later comparison.</li>
                        <li>**Output is compared with expected output:** The captured output is then meticulously compared against the known correct output for the given test case.</li>
                        <li>**Judge returns a detailed verdict:** Based on the comparison and execution metrics (like time taken), a final verdict is determined and returned to the user.</li>
                        <li className="text-sm text-yellow-400">⚠️ **Note on Sandboxing:** Current implementation provides basic process isolation primarily through timeouts. Advanced security measures like Docker containerization or `seccomp` for system call filtering are considered for future enhancements to ensure more robust and secure execution environments.</li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-lg sm:text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        🛠 Tech Stack
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li><span className={classNames.cardparent_list_span}>🐍 Python:</span> The core programming language for the backend logic and code execution.</li>
                        <li><span className={classNames.cardparent_list_span}>⚡ FastAPI:</span> A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.</li>
                        <li><span className={classNames.cardparent_list_span}>🌐 Next.js:</span> A React framework for building server-side rendered (SSR) and static web applications, used for the frontend interface.</li>
                        <li><span className={classNames.cardparent_list_span}>⚙️ `subprocess` module:</span> Essential for spawning and managing external processes to execute user code.</li>
                        <li><span className={classNames.cardparent_list_span}>📄 `tempfile` module:</span> Utilized for securely creating and managing temporary files for code storage and execution.</li>
                        <li><span className={classNames.cardparent_list_span}>🧪 Postman:</span> Used extensively for API development, testing, and debugging the backend endpoints.</li>
                    </ul>
                </div>
            </div>
            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-xl sm:text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Understanding the Verdict System
                </h2>
                <ul className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}>
                    <li><span className={`${classNames.cardparent_list_span} text-green-500`}>🟢 AC — Accepted:</span> Your code produced the correct output for all test cases within the given time and memory limits.</li>
                    <li><span className={`${classNames.cardparent_list_span} text-red-500`}>🔴 WA — Wrong Answer:</span> Your code's output did not match the expected output for one or more test cases.</li>
                    <li><span className={`${classNames.cardparent_list_span} text-yellow-500`}>⚠️ RE — Runtime Error:</span> Your code terminated abnormally during execution (e.g., due to an uncaught exception, division by zero, or invalid memory access).</li>
                    <li><span className={`${classNames.cardparent_list_span} text-blue-500`}>⏱ TLE — Time Limit Exceeded:</span> Your code took longer to execute than the maximum allowed time limit.</li>
                </ul>
            </div>

            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/CodeJudge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 ${classNames.textGlowEffect}`}
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}