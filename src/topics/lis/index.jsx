// src/topics/lis/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrendingUp,
    FiCpu,
    FiHash,
    FiCheckCircle,
    FiLayers,
} from "react-icons/fi";

const Lis = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "LIS - Longest Increasing Subsequence",
            sub: "LIS helps you find the maximum length subsequence where numbers keep increasing. It is a classic dynamic programming pattern and also has an optimized binary search approach.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="lis">
            <div className="top">
                <h2 className="title">LIS</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiTrendingUp /> Longest Increasing Subsequence
                    </span>
                    <span className="pill">
                        <FiLayers /> DP pattern
                    </span>
                    <span className="pill">
                        <FiCpu /> O(n log n) optimized
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="lis-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiTrendingUp />
                        </span>

                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                examples, and solutions
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="lis-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and meaning</h3>
                            <p className="p">
                                <span className="mono">LIS</span> means{" "}
                                <strong>Longest Increasing Subsequence</strong>.
                                <br />A <strong>subsequence</strong> is formed
                                by picking elements in the same order, but you
                                can skip elements in between.
                                <br />
                                Increasing means each next chosen element is
                                strictly greater than the previous one.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Subarray vs subsequence
                                    </div>
                                    <p className="miniText">
                                        <strong>Subarray</strong> must be
                                        continuous.
                                        <br />
                                        <strong>Subsequence</strong> can skip
                                        elements but order must stay the same.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Strictly increasing
                                    </div>
                                    <p className="miniText">
                                        If you have{" "}
                                        <span className="mono">2, 2</span>, that
                                        is not increasing.
                                        <br />
                                        Increasing needs{" "}
                                        <span className="mono">
                                            prev &lt; next
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Basic example</h3>

                            <div className="exampleBlock">
                                <div className="exTitle">Example</div>
                                <pre className="code">{`Array: [10, 9, 2, 5, 3, 7, 101, 18]

One LIS is: [2, 3, 7, 101]
Length = 4

Another LIS is: [2, 5, 7, 101]
Length = 4`}</pre>
                            </div>

                            <div className="tip">
                                <span className="tIcon">
                                    <FiCheckCircle />
                                </span>
                                <div className="tText">
                                    LIS is about maximum length, not necessarily
                                    unique sequence. Multiple LIS can exist.
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Approach 1 - DP O(n^2)</h3>
                            <p className="p">
                                <strong>DP</strong> means{" "}
                                <strong>Dynamic Programming</strong>.
                                <br />
                                Here we define:
                                <br />
                                <span className="mono">dp[i]</span> = length of
                                LIS ending at index{" "}
                                <span className="mono">i</span>.
                            </p>

                            <ul className="list">
                                <li>
                                    Start with all{" "}
                                    <span className="mono">dp[i] = 1</span>
                                    because each element alone is a subsequence.
                                </li>
                                <li>
                                    For each <span className="mono">i</span>,
                                    check all{" "}
                                    <span className="mono">j &lt; i</span>.
                                </li>
                                <li>
                                    If{" "}
                                    <span className="mono">
                                        arr[j] &lt; arr[i]
                                    </span>
                                    , then{" "}
                                    <span className="mono">
                                        dp[i] = max(dp[i], dp[j] + 1)
                                    </span>
                                    .
                                </li>
                                <li>
                                    Answer is{" "}
                                    <span className="mono">max(dp)</span>.
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">Tiny walkthrough</div>
                                <pre className="code">{`Array: [3, 1, 2]

dp start: [1, 1, 1]

i=2 (value 2)
j=1 (value 1) -> 1 < 2, dp[2] = max(1, dp[1] + 1) = 2
j=0 (value 3) -> 3 < 2 false

dp end: [1, 1, 2]
Answer: 2 (subsequence [1,2])`}</pre>
                            </div>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Time complexity
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">O(n^2)</span>{" "}
                                        because we compare each pair{" "}
                                        <span className="mono">(j, i)</span>.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Space complexity
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">O(n)</span> for
                                        the dp array.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Approach 2 - Optimized O(n log n)
                            </h3>
                            <p className="p">
                                This method keeps an array called{" "}
                                <span className="mono">tails</span>.
                                <br />
                                <span className="mono">tails[k]</span> stores
                                the smallest possible tail value of an
                                increasing subsequence of length{" "}
                                <span className="mono">k + 1</span>.
                                <br />
                                It uses <strong>binary search</strong> to place
                                each number.
                            </p>

                            <ul className="list">
                                <li>
                                    If number is bigger than all tails, append
                                    it.
                                </li>
                                <li>
                                    Else, replace the first tail that is{" "}
                                    <span className="mono">&gt;=</span> number.
                                </li>
                                <li>
                                    The length of{" "}
                                    <span className="mono">tails</span> is the
                                    LIS length.
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example with tails
                                </div>
                                <pre className="code">{`Array: [10, 9, 2, 5, 3, 7]

tails:
10
9 (replace 10)
2 (replace 9)
2,5 (append)
2,3 (replace 5)
2,3,7 (append)

Length = 3`}</pre>
                            </div>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Time complexity
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">O(n log n)</span>{" "}
                                        due to binary search for each element.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Space complexity
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">O(n)</span> for
                                        the tails array.
                                    </p>
                                </div>
                            </div>

                            <div className="tip">
                                <span className="tIcon">
                                    <FiHash />
                                </span>
                                <div className="tText">
                                    Note: tails method gives the correct length
                                    easily. To reconstruct the actual LIS
                                    sequence, we store parent pointers. That is
                                    a separate topic.
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When you will use LIS</h3>
                            <ul className="list">
                                <li>
                                    Any "longest increasing" style question,
                                    sequences, chains, ordering constraints.
                                </li>
                                <li>
                                    Variants: Longest decreasing subsequence,
                                    longest non-decreasing subsequence.
                                </li>
                                <li>
                                    Real life: scheduling improvements, ranking
                                    sequences, finding best growth chain.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common terms and full forms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">LIS</span> - Longest
                                    Increasing Subsequence
                                </div>
                                <div className="abbr">
                                    <span className="mono">DP</span> - Dynamic
                                    Programming
                                </div>
                                <div className="abbr">
                                    <span className="mono">BS</span> - Binary
                                    Search
                                </div>
                                <div className="abbr">
                                    <span className="mono">TC</span> - Time
                                    Complexity
                                </div>
                                <div className="abbr">
                                    <span className="mono">SC</span> - Space
                                    Complexity
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Edge cases to remember</h3>
                            <ol className="steps">
                                <li>Empty array - LIS length is 0.</li>
                                <li>All equal values - LIS length is 1.</li>
                                <li>Strictly decreasing - LIS length is 1.</li>
                                <li>
                                    Duplicates - strict vs non-decreasing
                                    matters.
                                </li>
                            </ol>

                            <div className="finalNote">
                                Beginner rule: first learn the DP O(n^2)
                                solution. After that, learn the O(n log n) tails
                                approach.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Lis;
