// src/topics/knapsack/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiBox,
    FiCpu,
    FiCheckCircle,
    FiZap,
    FiGrid,
} from "react-icons/fi";

const Knapsack = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Knapsack (Dynamic Programming)",
            sub: "Knapsack problems teach you how to choose the best set of items under a limit (capacity). The main skill is defining the right DP state and transition.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="knapsack">
            <div className="top">
                <h2 className="title">Knapsack</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGrid />
                        DP pattern
                    </span>
                    <span className="pill">
                        <FiBox />
                        Choose items
                    </span>
                    <span className="pill">
                        <FiCpu />
                        State and transition
                    </span>
                    <span className="pill">
                        <FiZap />
                        Classic interview topic
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="knapsack-panel"
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

                <div
                    id="knapsack-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What does "knapsack" mean</h3>
                            <p className="p">
                                A <strong>knapsack</strong> is a bag with a
                                maximum capacity. Each item has a{" "}
                                <strong>weight</strong> and a{" "}
                                <strong>value</strong>. You want to pick items
                                that maximize total value without crossing the
                                capacity.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Capacity</div>
                                    <p className="miniText">
                                        Maximum weight the bag can hold.
                                        <br />
                                        Example: capacity = 7
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">Item</div>
                                    <p className="miniText">
                                        Each item has weight and value.
                                        <br />
                                        Example: (w=3, v=4)
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and key terms</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">DP</span>
                                        <span className="tag">Full form</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>DP</strong> means{" "}
                                        <strong>Dynamic Programming</strong>. It
                                        is a method to solve problems by saving
                                        results of smaller subproblems.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">State</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A <strong>state</strong> is what you
                                        store in DP.
                                        <br />
                                        Example: dp[i][c] = best value using
                                        first i items with capacity c.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Transition</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A <strong>transition</strong> is how you
                                        move from smaller states to bigger
                                        states.
                                        <br />
                                        Example: take item or skip item.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Optimal</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>Optimal</strong> means best
                                        possible answer among all valid choices.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Main types of knapsack</h3>

                            <div className="typeGrid">
                                <div className="typeCard">
                                    <div className="typeTitle">
                                        0/1 Knapsack
                                    </div>
                                    <p className="typeText">
                                        Each item can be chosen{" "}
                                        <strong>at most once</strong>.
                                        <br />
                                        Choice: take or skip.
                                    </p>
                                    <div className="typeExample">
                                        Example: pick items A, B, C but no
                                        repeats.
                                    </div>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        Unbounded Knapsack
                                    </div>
                                    <p className="typeText">
                                        Each item can be chosen{" "}
                                        <strong>multiple times</strong>.
                                        <br />
                                        Choice: take again or move on.
                                    </p>
                                    <div className="typeExample">
                                        Example: coin change style.
                                    </div>
                                </div>
                            </div>

                            <div className="note">
                                Knapsack is a template. Many problems are just
                                knapsack in disguise.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Beginner example (0/1 knapsack)
                            </h3>

                            <p className="p">
                                Items:
                                <br />
                                - Item 1: weight = 1, value = 1
                                <br />
                                - Item 2: weight = 3, value = 4
                                <br />
                                - Item 3: weight = 4, value = 5
                                <br />
                                Capacity = 7
                                <br />
                                Best pick is item 2 + item 3 (weight 3+4=7,
                                value 4+5=9).
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">DP state for this</div>
                                <pre className="code">
                                    {`dp[i][c] = best value using first i items with capacity c

Transition:
skip = dp[i-1][c]
take = value[i] + dp[i-1][c - weight[i]]  (only if weight[i] <= c)

dp[i][c] = max(skip, take)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Implementation idea (tabulation)
                            </h3>

                            <p className="p">
                                <strong>Tabulation</strong> means building the
                                DP table bottom-up. You fill dp row by row.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example pseudocode
                                </div>
                                <pre className="code">
                                    {`for i from 1 to n:
  for c from 0 to capacity:
    dp[i][c] = dp[i-1][c]               // skip
    if weight[i] <= c:
      dp[i][c] = max(dp[i][c], value[i] + dp[i-1][c - weight[i]])`}
                                </pre>
                            </div>

                            <div className="callout">
                                <div className="callLeft">
                                    <span className="callIcon">
                                        <FiCpu />
                                    </span>
                                    <div className="callText">
                                        <div className="callTitle">
                                            Complexity
                                        </div>
                                        <div className="callSub">
                                            Time: O(n * capacity)
                                            <br />
                                            Space: O(n * capacity)
                                            <br />
                                            Can be optimized to O(capacity)
                                            space using 1D DP in many cases.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common problems that are knapsack
                            </h3>

                            <ul className="list">
                                <li>Subset sum</li>
                                <li>Partition equal subset sum</li>
                                <li>Coin change (unbounded style)</li>
                                <li>Rod cutting (unbounded style)</li>
                                <li>Target sum (often DP on sum)</li>
                            </ul>

                            <div className="finalNote">
                                Knapsack is about choices under a constraint.
                                Learn the state and transition, and many
                                problems become easy.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Knapsack;
