// src/topics/reverse/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRefreshCcw,
    FiArrowLeft,
    FiArrowRight,
    FiGitCommit,
    FiCheckCircle,
} from "react-icons/fi";

const Reverse = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Reverse",
            sub: "Reversing means changing the order from last-to-first. This shows up everywhere: arrays, strings, linked lists, and even pointers.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="reverse">
            <div className="top">
                <h2 className="title">Reverse</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRefreshCcw /> Order flip
                    </span>
                    <span className="pill">
                        <FiGitCommit /> Pointer move
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Common pattern
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="reverse-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiRefreshCcw />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                meaning, examples, and steps
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="reverse-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                Reverse means the first element becomes last and
                                the last element becomes first.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Example</div>
                                    <pre className="code">
                                        {`Input:  [1, 2, 3, 4]
Output: [4, 3, 2, 1]`}
                                    </pre>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Where it appears
                                    </div>
                                    <ul className="list">
                                        <li>Reverse a string</li>
                                        <li>Reverse an array in-place</li>
                                        <li>Reverse a linked list</li>
                                        <li>Reverse words in a sentence</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Two pointers approach</h3>
                            <p className="p">
                                The most common approach is{" "}
                                <span className="mono">two pointers</span>. Keep
                                one pointer at the start and one at the end.
                                Swap and move both pointers inward.
                            </p>

                            <div className="stepRow">
                                <div className="step">
                                    <span className="sIcon">
                                        <FiArrowLeft />
                                    </span>
                                    <div className="sText">
                                        left starts at index 0
                                    </div>
                                </div>
                                <div className="step">
                                    <span className="sIcon">
                                        <FiArrowRight />
                                    </span>
                                    <div className="sText">
                                        right starts at last index
                                    </div>
                                </div>
                                <div className="step">
                                    <span className="sIcon">
                                        <FiRefreshCcw />
                                    </span>
                                    <div className="sText">
                                        swap, then left++, right--
                                    </div>
                                </div>
                            </div>

                            <pre className="code">
                                {`Array: [10, 20, 30, 40, 50]
left=0, right=4 -> swap 10 and 50 -> [50, 20, 30, 40, 10]
left=1, right=3 -> swap 20 and 40 -> [50, 40, 30, 20, 10]
left=2, right=2 -> stop`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Linked list reverse idea</h3>
                            <p className="p">
                                In a linked list, you do not swap by index. You
                                flip the direction of pointers. Think in three
                                variables:
                                <span className="mono"> prev</span>,
                                <span className="mono"> curr</span>,
                                <span className="mono"> next</span>.
                            </p>

                            <div className="callout">
                                <div className="callTitle">
                                    Pointer flip in one line
                                </div>
                                <div className="callText">
                                    Make <span className="mono">curr.next</span>{" "}
                                    point to <span className="mono">prev</span>,
                                    then shift{" "}
                                    <span className="mono">prev</span> and{" "}
                                    <span className="mono">curr</span> forward.
                                </div>
                            </div>

                            <pre className="code">
                                {`List: 1 -> 2 -> 3 -> null

Start:
prev = null
curr = 1

Step 1:
next = 2
curr.next = prev  (1.next = null)
prev = 1
curr = 2

Step 2:
next = 3
curr.next = prev  (2.next = 1)
prev = 2
curr = 3

Step 3:
next = null
curr.next = prev  (3.next = 2)
prev = 3
curr = null

Answer head = prev (3 -> 2 -> 1 -> null)`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity</h3>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        <span className="mono">O(n)</span> -
                                        each element is touched once
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Space</span>
                                    <span className="value">
                                        <span className="mono">O(1)</span> -
                                        only a few variables are used
                                    </span>
                                </div>
                            </div>

                            <div className="finalNote">
                                Reverse is a core building block. Once this is
                                clear, many problems become simple variations:
                                reverse range, reverse words, reverse in groups,
                                rotate array, and palindrome checks.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Reverse;
