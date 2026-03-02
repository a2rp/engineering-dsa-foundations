// src/topics/bigONotation/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiActivity,
    FiCpu,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const BigONotation = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Big O notation",
            sub: "Big O describes how time or memory grows as input size grows. It helps you compare solutions before writing production code.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="big-o-notation">
            <div className="top">
                <h2 className="title">Big O notation</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCpu /> Time growth
                    </span>
                    <span className="pill">
                        <FiClock /> Input size
                    </span>
                    <span className="pill">
                        <FiActivity /> Compare solutions
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="big-o-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>

                        <div className="accText">
                            <div className="accTitle">
                                Big O - what it means and how to use it
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="big-o-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and definition</h3>
                            <p className="p">
                                <strong>Big O notation</strong> is used to
                                express the <strong>upper bound growth</strong>{" "}
                                of an algorithm.
                                <br />
                                It answers: "If input becomes 10 times bigger,
                                how does the work grow?"
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">n</span>
                                        <span className="tag">Input size</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">n</span> means
                                        number of items.
                                        <br />
                                        Example: array length, string length,
                                        number of nodes.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">O(f(n))</span>
                                        <span className="tag">Growth</span>
                                    </div>
                                    <p className="tBody">
                                        "Order of" function.
                                        <br />
                                        It shows how steps grow with{" "}
                                        <span className="mono">n</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Worst-case bound
                                        </span>
                                        <span className="tag">Safety</span>
                                    </div>
                                    <p className="tBody">
                                        Big O is usually used as worst-case
                                        guarantee.
                                        <br />
                                        It helps you plan for heavy traffic and
                                        large input.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Ignore constants
                                        </span>
                                        <span className="tag">Rule</span>
                                    </div>
                                    <p className="tBody">
                                        Big O focuses on growth, so constants
                                        are ignored.
                                        <br />
                                        <span className="mono">O(2n)</span>{" "}
                                        becomes{" "}
                                        <span className="mono">O(n)</span>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Most common Big O classes</h3>

                            <div className="classGrid">
                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(1)</span>
                                        <span className="badge">Constant</span>
                                    </div>
                                    <p className="cBody">
                                        Constant time. Work does not grow with{" "}
                                        <span className="mono">n</span>.
                                    </p>
                                    <pre className="code">
                                        {`Read arr[5]
Time: O(1)`}
                                    </pre>
                                </div>

                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(log n)</span>
                                        <span className="badge">
                                            Logarithmic
                                        </span>
                                    </div>
                                    <p className="cBody">
                                        Input reduces by a factor each step.
                                        <br />
                                        Common in binary search.
                                    </p>
                                    <pre className="code">
                                        {`Binary search
Each step halves the search space
Time: O(log n)`}
                                    </pre>
                                </div>

                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(n)</span>
                                        <span className="badge">Linear</span>
                                    </div>
                                    <p className="cBody">
                                        Work grows in direct proportion to{" "}
                                        <span className="mono">n</span>.
                                    </p>
                                    <pre className="code">
                                        {`Scan array once
Time: O(n)`}
                                    </pre>
                                </div>

                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(n log n)</span>
                                        <span className="badge">
                                            Efficient sort
                                        </span>
                                    </div>
                                    <p className="cBody">
                                        Common in merge sort and quick sort
                                        average case.
                                    </p>
                                    <pre className="code">
                                        {`Merge sort
Time: O(n log n)`}
                                    </pre>
                                </div>

                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(n^2)</span>
                                        <span className="badge">Quadratic</span>
                                    </div>
                                    <p className="cBody">
                                        Nested loops over the same input.
                                        <br />
                                        Can become slow quickly.
                                    </p>
                                    <pre className="code">
                                        {`Two nested loops
Time: O(n^2)`}
                                    </pre>
                                </div>

                                <div className="classCard">
                                    <div className="cTop">
                                        <span className="mono">O(2^n)</span>
                                        <span className="badge">
                                            Exponential
                                        </span>
                                    </div>
                                    <p className="cBody">
                                        Usually from brute-force subsets or
                                        recursion without memoization.
                                    </p>
                                    <pre className="code">
                                        {`Generate all subsets
Time: O(2^n)`}
                                    </pre>
                                </div>
                            </div>

                            <div className="warning">
                                <span className="wIcon">
                                    <FiAlertCircle />
                                </span>
                                <div className="wText">
                                    <div className="wTitle">
                                        Practical intuition
                                    </div>
                                    <div className="wSub">
                                        For large inputs, growth dominates. O(n
                                        log n) is usually safe. O(n^2) can be
                                        risky. Exponential becomes impossible
                                        very fast.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How to compute Big O</h3>
                            <ul className="list">
                                <li>
                                    Single loop from 0 to n is{" "}
                                    <span className="mono">O(n)</span>.
                                </li>
                                <li>
                                    Two nested loops each up to n is{" "}
                                    <span className="mono">O(n^2)</span>.
                                </li>
                                <li>
                                    Loop that halves input each step is{" "}
                                    <span className="mono">O(log n)</span>.
                                </li>
                                <li>
                                    Do not count constants:{" "}
                                    <span className="mono">O(3n + 10)</span> is{" "}
                                    <span className="mono">O(n)</span>.
                                </li>
                                <li>
                                    If you do steps one after another, add them
                                    and keep the biggest term.
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: add then scan
                                </div>
                                <pre className="code">
                                    {`Step 1: loop n times  -> O(n)
Step 2: loop n times  -> O(n)
Total: O(n) + O(n) = O(2n) = O(n)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Time complexity vs space complexity
                            </h3>
                            <p className="p">
                                <strong>Time complexity</strong> measures how
                                runtime grows.
                                <br />
                                <strong>Space complexity</strong> measures how
                                much extra memory grows.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Time example
                                    </div>
                                    <p className="miniText">
                                        Searching an unsorted array by scanning
                                        takes <span className="mono">O(n)</span>{" "}
                                        time.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Space example
                                    </div>
                                    <p className="miniText">
                                        Making a copy of array of size{" "}
                                        <span className="mono">n</span> takes{" "}
                                        <span className="mono">O(n)</span> extra
                                        space.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick glossary</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">log</span> -
                                    logarithm (usually base 2 in CS)
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - input size
                                </div>
                                <div className="abbr">
                                    <span className="mono">O</span> - order of
                                    growth
                                </div>
                                <div className="abbr">
                                    <span className="mono">CS</span> - Computer
                                    Science
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BigONotation;
