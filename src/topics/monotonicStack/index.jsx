// src/topics/monotonicStack/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiTrendingUp,
    FiCheckCircle,
    FiBookOpen,
} from "react-icons/fi";

const MonotonicStack = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Monotonic stack",
            sub: "A monotonic stack keeps elements in a single order (increasing or decreasing). It is used to solve 'next greater or smaller' type problems efficiently.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="monotonic-stack">
            <div className="top">
                <h2 className="title">Monotonic stack</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers />
                        Stack pattern
                    </span>
                    <span className="pill">
                        <FiTrendingUp />
                        One pass
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        Next greater or smaller
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="monotonic-stack-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiBookOpen />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Click to {open ? "collapse" : "expand"} notes
                                and examples
                            </div>
                            <div className="accHint">
                                Includes definitions, rules, and common problem
                                templates
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="monotonic-stack-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What it means</h3>
                            <p className="p">
                                A <strong>monotonic stack</strong> is a stack
                                that always stays in a single order.
                                <br />-{" "}
                                <strong>Monotonic increasing stack</strong>:
                                values from bottom to top are increasing.
                                <br />-{" "}
                                <strong>Monotonic decreasing stack</strong>:
                                values from bottom to top are decreasing.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why it is useful
                                    </div>
                                    <p className="miniText">
                                        It helps you find the next greater or
                                        next smaller element in a single pass,
                                        instead of doing nested loops.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Typical output
                                    </div>
                                    <p className="miniText">
                                        Next greater element, next smaller
                                        element, previous greater element,
                                        previous smaller element.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Core rule (beginner friendly)
                            </h3>
                            <p className="p">
                                You keep popping from the stack while the
                                current element breaks the monotonic order.
                                <br />
                                When you pop, you just found an answer for the
                                popped element.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: Next greater element
                                </div>
                                <pre className="code">
                                    {`Array: [2, 1, 2, 4, 3]

Goal:
For each element, find the next element to the right that is greater.
If none exists, answer is -1.

Answer: [2, 2, 4, -1, -1]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time and space complexity</h3>
                            <ul className="list">
                                <li>
                                    Time is typically{" "}
                                    <span className="mono">O(n)</span> because
                                    each element is pushed once and popped at
                                    most once.
                                </li>
                                <li>
                                    Space is typically{" "}
                                    <span className="mono">O(n)</span> for the
                                    stack in worst case.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                When to use (pattern triggers)
                            </h3>
                            <ul className="list">
                                <li>
                                    You see words like "next greater", "next
                                    smaller", "closest bigger", "nearest to left
                                    or right".
                                </li>
                                <li>
                                    You need to avoid nested loops that look
                                    like <span className="mono">O(n^2)</span>.
                                </li>
                                <li>
                                    Histogram, stock span, daily temperatures,
                                    removing elements until order is valid.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Two common variants</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Next greater to the right
                                        </span>
                                        <span className="tag">Right</span>
                                    </div>
                                    <p className="tBody">
                                        Traverse from left to right. Use a
                                        decreasing stack of indexes. When
                                        current is bigger, pop and fill answer.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Previous smaller to the left
                                        </span>
                                        <span className="tag">Left</span>
                                    </div>
                                    <p className="tBody">
                                        Traverse from left to right. Use an
                                        increasing stack. Pop until you find a
                                        smaller element.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example template (JavaScript)
                            </h3>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Template: Next greater element to the right
                                </div>
                                <pre className="code">
                                    {`function nextGreaterRight(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const st = []; // stack of indexes

  for (let i = 0; i < n; i++) {
    while (st.length && nums[i] > nums[st[st.length - 1]]) {
      const idx = st.pop();
      ans[idx] = nums[i];
    }
    st.push(i);
  }

  return ans;
}

// Example
// nums = [2, 1, 2, 4, 3]
// ans  = [2, 2, 4, -1, -1]`}
                                </pre>
                            </div>

                            <p className="p">
                                Note: we store <strong>indexes</strong> in the
                                stack so we can fill answers in the correct
                                position.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Mini practice prompts</h3>
                            <ol className="steps">
                                <li>Next smaller element to the right.</li>
                                <li>Previous greater element to the left.</li>
                                <li>Daily temperatures problem.</li>
                                <li>Largest rectangle in histogram.</li>
                            </ol>

                            <div className="finalNote">
                                If you can write the template once, you can
                                solve many problems by changing only the
                                comparison sign and direction.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MonotonicStack;
