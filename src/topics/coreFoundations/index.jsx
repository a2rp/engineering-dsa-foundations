// src/components/coreFoundations/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBookOpen,
    FiCpu,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const CoreFoundations = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Core foundations - brain training ground",
            sub: "This section explains what you are learning, why it matters, and how to think like an engineer while solving DSA.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="core-foundations">
            <div className="top">
                <h2 className="title">Core foundations</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiBookOpen />
                        Beginner friendly
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Complexity mindset
                    </span>
                    <span className="pill">
                        <FiZap />
                        Pattern based
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="core-foundations-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} the full
                                overview with terms and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="core-foundations-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What you are learning</h3>
                            <p className="p">
                                <strong>DSA</strong> means{" "}
                                <strong>Data Structures and Algorithms</strong>
                                .
                                <br />
                                Data structures are ways to store data so you
                                can use it efficiently. Algorithms are step by
                                step methods to solve problems using that data.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Data Structure
                                    </div>
                                    <p className="miniText">
                                        A container style for data.
                                        <br />
                                        Example: array, stack, queue, tree,
                                        graph.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Algorithm</div>
                                    <p className="miniText">
                                        A method to transform input into output.
                                        <br />
                                        Example: sorting, searching, BFS, DFS.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Why it matters in real work</h3>
                            <ul className="list">
                                <li>
                                    Faster code and better user experience on
                                    large data.
                                </li>
                                <li>
                                    Better backend performance, database query
                                    thinking, caching decisions.
                                </li>
                                <li>
                                    System design becomes easier because you
                                    understand tradeoffs.
                                </li>
                                <li>
                                    Interviews become predictable because many
                                    questions are patterns.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Complexity terms explained with full forms
                            </h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Big O</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Big O notation tells how runtime grows
                                        when input size grows.
                                        <br />
                                        Example:{" "}
                                        <span className="mono">O(n)</span> means
                                        time grows linearly with{" "}
                                        <span className="mono">n</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Best, Average, Worst case
                                        </span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Best case is fastest scenario. Worst
                                        case is slowest scenario. Average case
                                        is expected scenario on typical input.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Amortized analysis
                                        </span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Amortized means "average over a sequence
                                        of operations".
                                        <br />
                                        Example: dynamic array{" "}
                                        <span className="mono">push</span> is
                                        usually{" "}
                                        <span className="mono">O(1)</span>, but
                                        sometimes resize happens and costs{" "}
                                        <span className="mono">O(n)</span>. Over
                                        many pushes, the average per push is
                                        still close to{" "}
                                        <span className="mono">O(1)</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Space complexity
                                        </span>
                                        <span className="tag">Memory</span>
                                    </div>
                                    <p className="tBody">
                                        Space complexity tells how much extra
                                        memory your solution uses.
                                        <br />
                                        Example: creating an extra array of size{" "}
                                        <span className="mono">n</span> is{" "}
                                        <span className="mono">O(n)</span>{" "}
                                        space.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: linear scan
                                </div>
                                <pre className="code">
                                    {`Input: [4, 7, 2, 9], find 9

Scan each element once:
- 4, 7, 2, 9

Time: O(n)
Space: O(1)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Core patterns explained</h3>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">Prefix sum</div>
                                    <p className="pBody">
                                        Prefix sum means you store running
                                        totals so range sum queries become fast.
                                        <br />
                                        Use when you need sum of{" "}
                                        <span className="mono">i..j</span>{" "}
                                        multiple times.
                                    </p>
                                    <pre className="code">
                                        {`Array: [2, 5, 3]
Prefix: [2, 7, 10]

Sum(1..2) = Prefix[2] - Prefix[0] = 10 - 2 = 8`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Sliding window</div>
                                    <p className="pBody">
                                        Sliding window means you keep a moving
                                        window and update it in constant time.
                                        <br />
                                        Use for subarray or substring problems.
                                    </p>
                                    <pre className="code">
                                        {`Find max sum of size k = 3
Array: [2, 1, 5, 1, 3, 2]

Window sums:
(2+1+5)=8, (1+5+1)=7, (5+1+3)=9, (1+3+2)=6
Answer: 9`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Two pointers</div>
                                    <p className="pBody">
                                        Two pointers means you use two indexes
                                        that move based on a rule.
                                        <br />
                                        Use for sorted arrays, pairs, partition,
                                        palindromes.
                                    </p>
                                    <pre className="code">
                                        {`Sorted array: [1, 2, 4, 6, 9], target = 10
left=1, right=9
1+9=10 -> found`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Recursion</div>
                                    <p className="pBody">
                                        Recursion means a function calls itself.
                                        It must have a base case to stop.
                                        <br />
                                        Tail recursion means the recursive call
                                        is the last operation.
                                    </p>
                                    <pre className="code">
                                        {`Factorial(n)
Base case: n == 0 -> 1
Else: n * factorial(n-1)

factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 * factorial(0) = 1`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common abbreviations with full forms
                            </h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">BFS</span> - Breadth
                                    First Search
                                </div>
                                <div className="abbr">
                                    <span className="mono">DFS</span> - Depth
                                    First Search
                                </div>
                                <div className="abbr">
                                    <span className="mono">BST</span> - Binary
                                    Search Tree
                                </div>
                                <div className="abbr">
                                    <span className="mono">LCA</span> - Lowest
                                    Common Ancestor
                                </div>
                                <div className="abbr">
                                    <span className="mono">DP</span> - Dynamic
                                    Programming
                                </div>
                                <div className="abbr">
                                    <span className="mono">LIS</span> - Longest
                                    Increasing Subsequence
                                </div>
                                <div className="abbr">
                                    <span className="mono">PQ</span> - Priority
                                    Queue
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">A simple workflow to follow</h3>
                            <ol className="steps">
                                <li>Restate the problem in your own words.</li>
                                <li>Write a small example input and output.</li>
                                <li>
                                    Try a simple solution first, then optimize.
                                </li>
                                <li>Always write time and space complexity.</li>
                                <li>
                                    List edge cases: empty input, duplicates,
                                    large values, negative values.
                                </li>
                            </ol>

                            <div className="finalNote">
                                Most DSA questions are combinations of a few
                                patterns. Learn the patterns, not the question.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CoreFoundations;
