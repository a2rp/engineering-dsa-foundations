// src/topics/memoization/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBookOpen,
    FiZap,
    FiCpu,
    FiCheckCircle,
    FiHash,
} from "react-icons/fi";

const Memoization = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Memoization",
            sub: "Memoization is a technique to speed up recursion by saving results of repeated subproblems and reusing them.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="memoization">
            <div className="top">
                <h2 className="title">Memoization</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap />
                        Faster recursion
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Less repeated work
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        DP building block
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="memoization-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiBookOpen />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Expand - meaning, terms, and examples
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} this
                                topic
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="memoization-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and meaning</h3>
                            <p className="p">
                                <strong>Memoization</strong> comes from the word{" "}
                                <strong>memo</strong>, meaning a note or saved
                                record.
                                <br />
                                In programming, memoization means:
                                <br />
                                <strong>
                                    Save the answer of a function call and reuse
                                    it when the same input appears again.
                                </strong>
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        When it is useful
                                    </div>
                                    <p className="miniText">
                                        When a recursive solution computes the
                                        same subproblem many times.
                                        <br />
                                        Example: Fibonacci, knapsack, grid
                                        paths.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        What it improves
                                    </div>
                                    <p className="miniText">
                                        It reduces repeated computation.
                                        <br />
                                        Time often drops from exponential to
                                        polynomial.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Key terms explained</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Subproblem</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A smaller version of the same problem.
                                        <br />
                                        Example: Fibonacci(n) needs
                                        Fibonacci(n-1) and Fibonacci(n-2). Those
                                        are subproblems.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Overlapping subproblems
                                        </span>
                                        <span className="tag">DP</span>
                                    </div>
                                    <p className="tBody">
                                        Different recursion paths ask for the
                                        same subproblem again and again.
                                        <br />
                                        Memoization works best when this
                                        happens.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Cache</span>
                                        <span className="tag">Storage</span>
                                    </div>
                                    <p className="tBody">
                                        Cache means a storage that keeps saved
                                        answers for fast reuse.
                                        <br />
                                        In memoization, the cache is usually an{" "}
                                        <span className="mono">
                                            object
                                        </span> or{" "}
                                        <span className="mono">Map</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Top-down DP
                                        </span>
                                        <span className="tag">Approach</span>
                                    </div>
                                    <p className="tBody">
                                        Memoization is also called{" "}
                                        <strong>
                                            top-down dynamic programming
                                        </strong>
                                        .
                                        <br />
                                        You start from the original problem and
                                        go down to base cases, saving results on
                                        the way back.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - Fibonacci without memoization
                            </h3>
                            <p className="p">
                                Fibonacci is defined as:
                                <br />
                                <span className="mono">F(0)=0</span>,{" "}
                                <span className="mono">F(1)=1</span>
                                <br />
                                <span className="mono">F(n)=F(n-1)+F(n-2)</span>
                                <br />
                                Without memoization, recursion repeats work many
                                times.
                            </p>

                            <pre className="code">
                                {`// Naive recursion
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Time: O(2^n) (exponential)
// Space: O(n) (call stack depth)`}
                            </pre>

                            <div className="note">
                                <span className="nIcon">
                                    <FiHash />
                                </span>
                                <p className="nText">
                                    Exponential means it grows very fast. For
                                    fib(40), naive recursion becomes slow
                                    because it recomputes the same values again
                                    and again.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 2 - Fibonacci with memoization
                            </h3>
                            <p className="p">
                                Here we store computed Fibonacci values in a
                                cache. Next time the same{" "}
                                <span className="mono">n</span> appears, we
                                return it instantly.
                            </p>

                            <pre className="code">
                                {`// Memoized recursion (top-down DP)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Time: O(n)
// Space: O(n) (memo + call stack)`}
                            </pre>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        What changed
                                    </div>
                                    <p className="miniText">
                                        Each{" "}
                                        <span className="mono">fibMemo(k)</span>{" "}
                                        is computed once and then cached.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Tradeoff</div>
                                    <p className="miniText">
                                        Time becomes fast, but you use extra
                                        memory for caching.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                How to apply memoization in any problem
                            </h3>

                            <ol className="steps">
                                <li>
                                    Identify the state (what inputs define a
                                    subproblem).
                                </li>
                                <li>
                                    Build a key for that state (number, string,
                                    or tuple).
                                </li>
                                <li>
                                    Before computing, check if key exists in
                                    cache.
                                </li>
                                <li>
                                    Save the computed result in cache and return
                                    it.
                                </li>
                            </ol>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Generic memo pattern
                                </div>
                                <pre className="code">
                                    {`function solve(state, memo = new Map()) {
  const key = JSON.stringify(state);

  if (memo.has(key)) return memo.get(key);

  // base case
  // compute result using smaller states

  memo.set(key, result);
  return result;
}`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>
                            <ul className="list">
                                <li>
                                    Not choosing the correct state for the key,
                                    causing wrong cache hits.
                                </li>
                                <li>
                                    Forgetting base cases, leading to infinite
                                    recursion.
                                </li>
                                <li>
                                    Using JSON stringify keys when state is huge
                                    and slow to stringify.
                                </li>
                                <li>
                                    Mixing global memo and per-call memo
                                    incorrectly.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Memoization is simple: same input should not be
                                computed twice.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Memoization;
