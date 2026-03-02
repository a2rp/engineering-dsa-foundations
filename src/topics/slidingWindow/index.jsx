// src/topics/slidingWindow/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiMove,
    FiTrendingUp,
    FiSearch,
    FiClock,
    FiCheckCircle,
    FiCpu,
} from "react-icons/fi";

const SlidingWindow = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Sliding window",
            sub: "Sliding window is a pattern where you maintain a moving range inside an array or string, and update it efficiently instead of recalculating from scratch.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="sliding-window">
            <div className="top">
                <h2 className="title">Sliding window</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiMove /> Window moves
                    </span>
                    <span className="pill">
                        <FiClock /> Avoid rework
                    </span>
                    <span className="pill">
                        <FiTrendingUp /> Faster than brute force
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="sliding-window-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiMove />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanations and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="sliding-window-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                A <strong>window</strong> is a continuous part
                                of an array or string.
                                <br />
                                Sliding window means you keep this window and
                                move it step by step, updating the answer using
                                small changes instead of recomputing everything.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Brute force approach
                                    </div>
                                    <p className="miniText">
                                        Recalculate every subarray or substring
                                        again and again.
                                        <br />
                                        This often becomes{" "}
                                        <span className="mono">O(n^2)</span> or
                                        worse.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Sliding window approach
                                    </div>
                                    <p className="miniText">
                                        Reuse previous work.
                                        <br />
                                        When window moves, remove left item, add
                                        right item.
                                        <br />
                                        Often becomes{" "}
                                        <span className="mono">O(n)</span>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Two types of sliding window</h3>

                            <div className="typeGrid">
                                <div className="typeCard">
                                    <div className="typeTop">
                                        <span className="tIcon">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="typeTitle">
                                            Fixed size window
                                        </div>
                                    </div>
                                    <p className="typeBody">
                                        Window size stays constant.
                                        <br />
                                        Example: "max sum of size k".
                                    </p>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTop">
                                        <span className="tIcon">
                                            <FiSearch />
                                        </span>
                                        <div className="typeTitle">
                                            Variable size window
                                        </div>
                                    </div>
                                    <p className="typeBody">
                                        Window size changes based on a rule.
                                        <br />
                                        Example: "smallest subarray with sum at
                                        least S", "longest substring without
                                        repeating characters".
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 1 - Fixed size</h3>
                            <p className="p">
                                Problem: Find the <strong>maximum sum</strong>{" "}
                                of any subarray of size{" "}
                                <span className="mono">k</span>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Input and window movement
                                </div>
                                <pre className="code">
                                    {`Array: [2, 1, 5, 1, 3, 2]
k = 3

Window 0..2: 2 + 1 + 5 = 8
Slide by 1:
Window 1..3: 1 + 5 + 1 = 7
Slide by 1:
Window 2..4: 5 + 1 + 3 = 9
Slide by 1:
Window 3..5: 1 + 3 + 2 = 6

Answer: 9`}
                                </pre>
                            </div>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">
                                        Brute force time
                                    </span>
                                    <span className="value">
                                        Each window sum recomputed -{" "}
                                        <span className="mono">O(n*k)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">
                                        Sliding window time
                                    </span>
                                    <span className="value">
                                        Add one, remove one -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Extra space</span>
                                    <span className="value">
                                        Constant -{" "}
                                        <span className="mono">O(1)</span>
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - Variable size</h3>
                            <p className="p">
                                Problem: Find the{" "}
                                <strong>smallest subarray length</strong> with
                                sum at least <span className="mono">S</span>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Window expand and shrink
                                </div>
                                <pre className="code">
                                    {`Array: [2, 1, 5, 2, 3, 2], S = 7

Start: left=0, sum=0

Expand right:
- add 2 -> sum=2
- add 1 -> sum=3
- add 5 -> sum=8 (>=7)

Now shrink from left while sum>=7:
- window [0..2] length=3
- remove 2 -> sum=6 (stop shrinking)

Continue expanding right:
- add 2 -> sum=8 (>=7)
Shrink:
- window [1..3] length=3
- remove 1 -> sum=7 (>=7)
- window [2..3] length=2
- remove 5 -> sum=2 (stop)

Best length found: 2`}
                                </pre>
                            </div>

                            <div className="finalNote">
                                Variable window trick is:
                                <br />
                                Expand right to satisfy condition, then shrink
                                left to make it minimal.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to use sliding window</h3>
                            <ul className="list">
                                <li>
                                    You are dealing with{" "}
                                    <strong>subarray</strong> or{" "}
                                    <strong>substring</strong> problems.
                                </li>
                                <li>
                                    You need a max, min, count, or condition
                                    over a continuous range.
                                </li>
                                <li>
                                    Brute force is checking all ranges, which
                                    becomes <span className="mono">O(n^2)</span>
                                    .
                                </li>
                            </ul>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">n</span> - number of
                                    elements or characters
                                </div>
                                <div className="abbr">
                                    <span className="mono">k</span> - window
                                    size (fixed size)
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n)</span> - linear
                                    time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n^2)</span> -
                                    quadratic time
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner checklist</h3>
                            <ol className="steps">
                                <li>
                                    Decide if window is fixed size or variable
                                    size.
                                </li>
                                <li>
                                    Track window state: sum, count, frequency
                                    map, etc.
                                </li>
                                <li>
                                    When moving right, update state in{" "}
                                    <span className="mono">O(1)</span>.
                                </li>
                                <li>
                                    For variable window, shrink from left while
                                    condition is true.
                                </li>
                                <li>Always write time and space complexity.</li>
                            </ol>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and terms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">DSA</span> - Data
                                    Structures and Algorithms
                                </div>
                                <div className="abbr">
                                    <span className="mono">O</span> - Order of
                                    growth (Big O notation)
                                </div>
                                <div className="abbr">
                                    <span className="mono">Subarray</span> -
                                    continuous part of an array
                                </div>
                                <div className="abbr">
                                    <span className="mono">Substring</span> -
                                    continuous part of a string
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SlidingWindow;
