// src/topics/tabulation/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGrid,
    FiCpu,
    FiCheckCircle,
    FiZap,
    FiBookOpen,
} from "react-icons/fi";

const Tabulation = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="tabulation">
            <div className="top">
                <h2 className="title">Tabulation</h2>
                <p className="sub">
                    Tabulation is a Dynamic Programming approach where you build
                    answers from smaller subproblems using a table, usually from
                    base cases to the final answer.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGrid /> Bottom-up
                    </span>
                    <span className="pill">
                        <FiCpu /> Iterative
                    </span>
                    <span className="pill">
                        <FiZap /> Avoids recursion
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="tabulation-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiBookOpen />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Tabulation - DP table building
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

                <div
                    id="tabulation-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                <strong>Tabulation</strong> means you create a{" "}
                                <strong>table</strong> (often an array like{" "}
                                <span className="mono">dp[]</span> or a 2D array{" "}
                                <span className="mono">dp[][]</span>) and fill
                                it step by step.
                            </p>
                            <p className="p">
                                You start from <strong>base cases</strong> (the
                                smallest answers that are already known) and
                                move toward larger answers until you reach the{" "}
                                <strong>final state</strong>.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and terms</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">DP</span>
                                        <span className="tag">Full form</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>DP</strong> stands for{" "}
                                        <strong>Dynamic Programming</strong>. It
                                        is used when a problem can be broken
                                        into smaller repeating subproblems.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Bottom-up</span>
                                        <span className="tag">Style</span>
                                    </div>
                                    <p className="tBody">
                                        Bottom-up means you solve small pieces
                                        first, then use them to build bigger
                                        answers.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">State</span>
                                        <span className="tag">DP idea</span>
                                    </div>
                                    <p className="tBody">
                                        A state is what your{" "}
                                        <span className="mono">dp</span> cell
                                        represents.
                                        <br />
                                        Example:{" "}
                                        <span className="mono">dp[i]</span> =
                                        answer for input size{" "}
                                        <span className="mono">i</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Transition</span>
                                        <span className="tag">DP idea</span>
                                    </div>
                                    <p className="tBody">
                                        A transition is the rule to compute a
                                        bigger state from smaller states.
                                        <br />
                                        Example:{" "}
                                        <span className="mono">
                                            dp[i] = dp[i-1] + dp[i-2]
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to use tabulation</h3>
                            <ul className="list">
                                <li>
                                    When recursion causes repeated work and you
                                    want predictable performance.
                                </li>
                                <li>
                                    When you can compute answers in a clear
                                    order from small to large.
                                </li>
                                <li>
                                    When you want to avoid call stack depth
                                    issues.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - Fibonacci using tabulation
                            </h3>
                            <p className="p">
                                Fibonacci numbers follow:
                                <br />
                                <span className="mono">
                                    F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
                                </span>
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    DP table fill (bottom-up)
                                </div>
                                <pre className="code">
                                    {`n = 6

dp[0] = 0
dp[1] = 1

dp[2] = dp[1] + dp[0] = 1
dp[3] = dp[2] + dp[1] = 2
dp[4] = dp[3] + dp[2] = 3
dp[5] = dp[4] + dp[3] = 5
dp[6] = dp[5] + dp[4] = 8

Answer = dp[6] = 8`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    JavaScript implementation
                                </div>
                                <pre className="code">
                                    {`function fib(n) {
  if (n <= 1) return n;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

fib(6); // 8`}
                                </pre>
                            </div>

                            <div className="hintRow">
                                <span className="hint">Time - O(n)</span>
                                <span className="hint">Space - O(n)</span>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - Climbing stairs</h3>
                            <p className="p">
                                Problem: you can climb{" "}
                                <span className="mono">n</span> steps. Each time
                                you can take 1 step or 2 steps. Count how many
                                distinct ways to reach the top.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Idea</div>
                                <pre className="code">
                                    {`Let dp[i] = number of ways to reach step i

Base:
dp[0] = 1 (1 way to stay at start)
dp[1] = 1

Transition:
dp[i] = dp[i-1] + dp[i-2]

Answer: dp[n]`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    JavaScript implementation
                                </div>
                                <pre className="code">
                                    {`function climbStairs(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

climbStairs(5); // 8`}
                                </pre>
                            </div>

                            <div className="hintRow">
                                <span className="hint">Time - O(n)</span>
                                <span className="hint">Space - O(n)</span>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Tabulation vs Memoization</h3>
                            <div className="compare">
                                <div className="cmpCard">
                                    <div className="cmpTitle">
                                        Tabulation (bottom-up)
                                    </div>
                                    <ul className="list">
                                        <li>Iterative loops</li>
                                        <li>Fills table in order</li>
                                        <li>No recursion stack</li>
                                        <li>Easy to control memory</li>
                                    </ul>
                                </div>

                                <div className="cmpCard">
                                    <div className="cmpTitle">
                                        Memoization (top-down)
                                    </div>
                                    <ul className="list">
                                        <li>Recursion + cache</li>
                                        <li>Computes only needed states</li>
                                        <li>Uses call stack</li>
                                        <li>Can be simpler to write first</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="finalNote">
                                In interviews, tabulation helps when you can
                                clearly define the order of computation.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Checklist for beginners</h3>
                            <ol className="steps">
                                <li>Define the DP state clearly.</li>
                                <li>Write base cases.</li>
                                <li>Write the transition formula.</li>
                                <li>Decide the iteration order.</li>
                                <li>Return the final state.</li>
                            </ol>

                            <div className="noteRow">
                                <span className="noteIcon">
                                    <FiCheckCircle />
                                </span>
                                <p className="noteText">
                                    Most DP problems become easier once you
                                    define dp meaning in one line.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Tabulation;
