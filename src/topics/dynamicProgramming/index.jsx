// src/topics/dynamicProgramming/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiCpu,
    FiZap,
    FiCheckCircle,
    FiGrid,
} from "react-icons/fi";

const DynamicProgramming = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Dynamic Programming - DP",
            sub: "Dynamic Programming (DP) is a way to solve problems by breaking them into smaller overlapping subproblems and reusing computed results.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="dynamic-programming">
            <div className="top">
                <h2 className="title">Dynamic Programming</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers />
                        DP = Dynamic Programming
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Overlapping subproblems
                    </span>
                    <span className="pill">
                        <FiGrid />
                        Optimal substructure
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="dp-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
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

                <div id="dp-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What DP means</h3>
                            <p className="p">
                                <strong>DP</strong> stands for{" "}
                                <strong>Dynamic Programming</strong>.
                                <br />
                                It is used when a big problem can be solved by
                                solving smaller versions of the same problem and
                                combining their answers.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Overlapping subproblems
                                    </div>
                                    <p className="miniText">
                                        The same subproblem appears again and
                                        again.
                                        <br />
                                        DP saves results so you do not
                                        recompute.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Optimal substructure
                                    </div>
                                    <p className="miniText">
                                        The best answer for the full problem
                                        depends on best answers of subproblems.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to think DP</h3>
                            <ul className="list">
                                <li>
                                    You see "maximum", "minimum", "count ways",
                                    "best score", "can we reach".
                                </li>
                                <li>
                                    Choices repeat at each step (take or skip,
                                    pick left or right, include or exclude).
                                </li>
                                <li>
                                    A recursion solution works but is too slow.
                                </li>
                                <li>
                                    The problem asks for an optimal result with
                                    constraints.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Memoization vs Tabulation</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Memoization
                                        </span>
                                        <span className="tag">Top-down</span>
                                    </div>
                                    <p className="tBody">
                                        Memoization means you write recursion
                                        and store computed answers in a cache.
                                        Next time you need the same state, you
                                        reuse it.
                                    </p>
                                    <pre className="code">
                                        {`Example idea (Fibonacci):
fib(5) calls fib(4), fib(3)
fib(4) calls fib(3), fib(2)
fib(3) repeats many times

Memoization stores fib(3) once and reuses it.`}
                                    </pre>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Tabulation</span>
                                        <span className="tag">Bottom-up</span>
                                    </div>
                                    <p className="tBody">
                                        Tabulation means you build a table from
                                        smaller answers to bigger answers using
                                        loops. No recursion is needed.
                                    </p>
                                    <pre className="code">
                                        {`Example idea (Fibonacci):
dp[0]=0, dp[1]=1
dp[2]=dp[1]+dp[0]
dp[3]=dp[2]+dp[1]
...
Answer is dp[n]`}
                                    </pre>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">Key point</div>
                                <pre className="code">
                                    {`Memoization = recursion + cache
Tabulation  = table + loops

Both reduce repeated work.
Time improves from exponential to near linear for many problems.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">DP thinking steps</h3>
                            <ol className="steps">
                                <li>
                                    Define the{" "}
                                    <span className="mono">state</span> (what
                                    changes)
                                </li>
                                <li>
                                    Define the{" "}
                                    <span className="mono">transition</span>{" "}
                                    (how state moves)
                                </li>
                                <li>
                                    Define the{" "}
                                    <span className="mono">base case</span>{" "}
                                    (smallest known answers)
                                </li>
                                <li>Decide memoization or tabulation</li>
                                <li>Return the final state answer</li>
                            </ol>

                            <div className="finalNote">
                                DP is mostly about choosing a good state and a
                                clean transition.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Classic examples</h3>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">Knapsack</div>
                                    <p className="pBody">
                                        <span className="mono">Knapsack</span>{" "}
                                        usually means pick items to maximize
                                        value without exceeding capacity.
                                        <br />
                                        State often includes index and remaining
                                        capacity.
                                    </p>
                                    <pre className="code">
                                        {`State example:
dp[i][c] = best value using first i items with capacity c

Transition:
dp[i][c] = max(
  dp[i-1][c],                     // skip item i
  value[i] + dp[i-1][c-weight[i]] // take item i
)`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        LIS - Longest Increasing Subsequence
                                    </div>
                                    <p className="pBody">
                                        <span className="mono">LIS</span> stands
                                        for{" "}
                                        <strong>
                                            Longest Increasing Subsequence
                                        </strong>
                                        . Find the longest subsequence where
                                        numbers strictly increase.
                                    </p>
                                    <pre className="code">
                                        {`Array: [10, 9, 2, 5, 3, 7, 101, 18]
One LIS: [2, 3, 7, 101]
Answer length: 4`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Count ways (stairs)
                                    </div>
                                    <p className="pBody">
                                        Common DP template: number of ways to
                                        reach step n if you can take 1 or 2
                                        steps.
                                        <br />
                                        This becomes Fibonacci style DP.
                                    </p>
                                    <pre className="code">
                                        {`ways[0]=1
ways[1]=1
ways[n]=ways[n-1]+ways[n-2]

n=4 -> ways[4]=5`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Minimum cost (path)
                                    </div>
                                    <p className="pBody">
                                        Find minimum cost to reach end using
                                        allowed moves. State is usually a cell
                                        index or grid position.
                                    </p>
                                    <pre className="code">
                                        {`Grid min path:
dp[i][j] = cost[i][j] + min(dp[i-1][j], dp[i][j-1])

Answer is dp[lastRow][lastCol]`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common DP abbreviations</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">DP</span> - Dynamic
                                    Programming
                                </div>
                                <div className="abbr">
                                    <span className="mono">LIS</span> - Longest
                                    Increasing Subsequence
                                </div>
                                <div className="abbr">
                                    <span className="mono">LCS</span> - Longest
                                    Common Subsequence
                                </div>
                                <div className="abbr">
                                    <span className="mono">0/1</span> - zero or
                                    one selection per item (0/1 Knapsack)
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner mistakes</h3>
                            <ul className="list">
                                <li>
                                    Starting DP without defining a clear state.
                                </li>
                                <li>
                                    Forgetting base cases and getting wrong
                                    answers.
                                </li>
                                <li>
                                    Using 2D DP when 1D optimization is
                                    possible.
                                </li>
                                <li>Not writing transition in words first.</li>
                            </ul>

                            <div className="finalNote">
                                Write the transition in plain language first,
                                then code it.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick revision checklist</h3>
                            <div className="checkGrid">
                                <div className="check">
                                    <span className="cI">
                                        <FiCheckCircle />
                                    </span>
                                    State definition
                                </div>
                                <div className="check">
                                    <span className="cI">
                                        <FiCheckCircle />
                                    </span>
                                    Transition formula
                                </div>
                                <div className="check">
                                    <span className="cI">
                                        <FiCheckCircle />
                                    </span>
                                    Base cases
                                </div>
                                <div className="check">
                                    <span className="cI">
                                        <FiCheckCircle />
                                    </span>
                                    Time and space complexity
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Mini complexity note</h3>
                            <p className="p">
                                DP complexity often depends on number of states.
                                <br />
                                If you have <span className="mono">n</span>{" "}
                                states and each state does{" "}
                                <span className="mono">O(1)</span> work, total
                                time is <span className="mono">O(n)</span>.
                                <br />
                                If you have a{" "}
                                <span className="mono">n x m</span> table, time
                                can be <span className="mono">O(n*m)</span>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Example</div>
                                <pre className="code">
                                    {`LIS using O(n^2) DP:
State count: n
Transition checks: for each i, check all j < i
Time: O(n^2)
Space: O(n)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">One line summary</h3>
                            <p className="p">
                                Dynamic Programming is "recursion + reuse" or
                                "build answers step by step" to avoid repeated
                                work.
                            </p>

                            <div className="finalNote">
                                If recursion repeats the same work, DP is your
                                fix.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DynamicProgramming;
