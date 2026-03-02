// src/topics/timeSpaceComplexity/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiClock,
    FiHardDrive,
    FiTrendingUp,
    FiCheckCircle,
    FiHash,
} from "react-icons/fi";

const TimeSpaceComplexity = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Time and Space Complexity",
            sub: "Understand how fast an algorithm runs and how much memory it uses. This is the base of writing efficient code.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="time-space-complexity">
            <div className="top">
                <h2 className="title">Time and Space Complexity</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiClock /> Time
                    </span>
                    <span className="pill">
                        <FiHardDrive /> Space
                    </span>
                    <span className="pill">
                        <FiTrendingUp /> Growth
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="tsc-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} terms,
                                full forms, and beginner examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="tsc-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is time complexity</h3>
                            <p className="p">
                                <strong>Time complexity</strong> is a way to
                                measure how the runtime of an algorithm grows as
                                the input size grows.
                                <br />
                                We write it using{" "}
                                <strong>Big O notation</strong>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: linear search
                                </div>
                                <pre className="code">
                                    {`Task: find x in an array

Check elements one by one
Array size = n

Worst case: x is at the end or not present
Work done: n checks

Time: O(n)
Space: O(1)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Big O notation - what it means
                            </h3>
                            <p className="p">
                                <span className="mono">Big O</span> describes
                                the upper bound of growth. It tells how runtime
                                scales when input size becomes large.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Common Big O values
                                    </div>
                                    <ul className="list compact">
                                        <li>
                                            <span className="mono">O(1)</span> -
                                            constant time
                                        </li>
                                        <li>
                                            <span className="mono">
                                                O(log n)
                                            </span>{" "}
                                            - logarithmic time
                                        </li>
                                        <li>
                                            <span className="mono">O(n)</span> -
                                            linear time
                                        </li>
                                        <li>
                                            <span className="mono">
                                                O(n log n)
                                            </span>{" "}
                                            - log-linear time
                                        </li>
                                        <li>
                                            <span className="mono">O(n²)</span>{" "}
                                            - quadratic time
                                        </li>
                                        <li>
                                            <span className="mono">O(2ⁿ)</span>{" "}
                                            - exponential time
                                        </li>
                                    </ul>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Quick intuition
                                    </div>
                                    <p className="miniText">
                                        Bigger input size means more work. Big O
                                        tells you how fast the work grows. If a
                                        solution is too slow for large input,
                                        you need a better approach.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Best, average, worst case - full meaning
                            </h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Best case</span>
                                        <span className="tag">Fastest</span>
                                    </div>
                                    <p className="tBody">
                                        The input arrangement where the
                                        algorithm finishes fastest.
                                        <br />
                                        Example: searching an array and the
                                        value is at index 0.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Average case
                                        </span>
                                        <span className="tag">Typical</span>
                                    </div>
                                    <p className="tBody">
                                        The expected runtime on typical or
                                        random inputs. It is useful when worst
                                        case is rare.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Worst case</span>
                                        <span className="tag">Slowest</span>
                                    </div>
                                    <p className="tBody">
                                        The input arrangement where the
                                        algorithm takes the most time. Example:
                                        value is at the end or not present.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Why worst case
                                        </span>
                                        <span className="tag">Safety</span>
                                    </div>
                                    <p className="tBody">
                                        Worst case helps you guarantee
                                        performance limits. In production,
                                        guarantees matter.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Amortized analysis - full meaning
                            </h3>
                            <p className="p">
                                <strong>Amortized analysis</strong> means you
                                measure the average cost per operation across a
                                long sequence of operations.
                                <br />
                                This is used when occasional expensive
                                operations happen, but most operations are
                                cheap.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: dynamic array resize
                                </div>
                                <pre className="code">
                                    {`Dynamic Array idea:
- Usually push is O(1)
- Sometimes array grows and we copy elements

Suppose capacity doubles:
1 -> 2 -> 4 -> 8 -> 16 ...

Copy happens rarely, but when it happens it costs O(n)

Across many pushes:
Average cost per push stays close to O(1)

This is amortized O(1)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">What is space complexity</h3>
                            <p className="p">
                                <strong>Space complexity</strong> measures extra
                                memory used by your algorithm beyond the input.
                                <br />
                                This includes arrays, hash maps, recursion
                                stack, and any extra data structure you create.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        O(1) space example
                                    </div>
                                    <p className="miniText">
                                        You use a few variables only, no extra
                                        array.
                                    </p>
                                    <pre className="code">
                                        {`Sum all numbers:
sum = 0
for each x:
  sum += x

Extra space: O(1)`}
                                    </pre>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        O(n) space example
                                    </div>
                                    <p className="miniText">
                                        You create an extra array or map of size
                                        n.
                                    </p>
                                    <pre className="code">
                                        {`Build frequency map:
for each char:
  map[char]++

Extra space: O(n)`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                How to calculate Big O quickly
                            </h3>
                            <ul className="list">
                                <li>
                                    One loop over n items is{" "}
                                    <span className="mono">O(n)</span>.
                                </li>
                                <li>
                                    Nested loops n x n is{" "}
                                    <span className="mono">O(n²)</span>.
                                </li>
                                <li>
                                    Halving input each step is{" "}
                                    <span className="mono">O(log n)</span>.
                                </li>
                                <li>
                                    Sort is usually{" "}
                                    <span className="mono">O(n log n)</span>.
                                </li>
                                <li>
                                    Recursion uses stack space too, count it.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Rule: ignore constants and lower terms. Focus on
                                the dominant growth term.
                                <br />
                                Example:{" "}
                                <span className="mono">
                                    O(n + 100)
                                </span> becomes{" "}
                                <span className="mono">O(n)</span>.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Symbols - full forms and meaning
                            </h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">n</span> - number of
                                    elements in input
                                </div>
                                <div className="abbr">
                                    <span className="mono">log n</span> -
                                    logarithm of n (base does not matter for Big
                                    O)
                                </div>
                                <div className="abbr">
                                    <span className="mono">O</span> - Order of
                                    growth (Big O notation)
                                </div>
                                <div className="abbr">
                                    <span className="mono">Θ</span> - Theta,
                                    tight bound growth
                                </div>
                                <div className="abbr">
                                    <span className="mono">Ω</span> - Omega,
                                    lower bound growth
                                </div>
                            </div>

                            <div className="tinyNote">
                                Big O is used the most in interviews. Theta and
                                Omega are good to know for clarity.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner practice examples</h3>

                            <div className="practiceGrid">
                                <div className="practice">
                                    <div className="prTitle">
                                        Example 1: simple loop
                                    </div>
                                    <p className="prText">
                                        Runs one loop from 0 to n-1.
                                    </p>
                                    <pre className="code">
                                        {`for i = 0 to n-1:
  do work

Time: O(n)
Space: O(1)`}
                                    </pre>
                                </div>

                                <div className="practice">
                                    <div className="prTitle">
                                        Example 2: nested loop
                                    </div>
                                    <p className="prText">
                                        Two loops both depend on n.
                                    </p>
                                    <pre className="code">
                                        {`for i = 0 to n-1:
  for j = 0 to n-1:
    do work

Time: O(n^2)
Space: O(1)`}
                                    </pre>
                                </div>

                                <div className="practice">
                                    <div className="prTitle">
                                        Example 3: binary search
                                    </div>
                                    <p className="prText">
                                        Each step halves the search space.
                                    </p>
                                    <pre className="code">
                                        {`Binary Search (sorted array):
Each step removes half the elements

Time: O(log n)
Space: O(1) iterative
Space: O(log n) recursive stack`}
                                    </pre>
                                </div>

                                <div className="practice">
                                    <div className="prTitle">
                                        Example 4: recursion stack
                                    </div>
                                    <p className="prText">
                                        Recursion uses memory for each call.
                                    </p>
                                    <pre className="code">
                                        {`factorial(n):
factorial(n-1) is called n times

Time: O(n)
Space: O(n) due to call stack`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">One line summary</h3>
                            <div className="summaryRow">
                                <div className="summary">
                                    <span className="sIcon">
                                        <FiClock />
                                    </span>
                                    <div className="sText">
                                        Time complexity tells how runtime grows.
                                    </div>
                                </div>
                                <div className="summary">
                                    <span className="sIcon">
                                        <FiHardDrive />
                                    </span>
                                    <div className="sText">
                                        Space complexity tells how memory grows.
                                    </div>
                                </div>
                                <div className="summary">
                                    <span className="sIcon">
                                        <FiHash />
                                    </span>
                                    <div className="sText">
                                        Big O focuses on dominant growth.
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TimeSpaceComplexity;
