// src/topics/twoPointers/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiMove,
    FiTarget,
    FiCheckCircle,
    FiShuffle,
    FiSearch,
} from "react-icons/fi";

const TwoPointers = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Two pointers",
            sub: "Two pointers is a pattern where you use two indexes that move based on a rule. It reduces extra loops and often turns O(n^2) into O(n).",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="two-pointers">
            <div className="top">
                <h2 className="title">Two pointers</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiMove /> Two indexes
                    </span>
                    <span className="pill">
                        <FiTarget /> One rule
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Often O(n)
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="two-pointers-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiShuffle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="two-pointers-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                Two pointers means you keep{" "}
                                <strong>two positions</strong> (indexes) in the
                                data and move them smartly instead of using
                                nested loops. The pointers move based on a
                                condition.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Pointer</div>
                                    <p className="miniText">
                                        A pointer here means an index, not a
                                        C/C++ memory pointer. It is simply a
                                        number that points to a position in an
                                        array or string.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        When it helps
                                    </div>
                                    <p className="miniText">
                                        When you need pairs, partitions, or you
                                        are working with a sorted array or a
                                        window boundary.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common types</h3>

                            <div className="typeGrid">
                                <div className="typeCard">
                                    <div className="typeTitle">
                                        1. Opposite ends
                                    </div>
                                    <p className="p">
                                        One pointer starts at the beginning and
                                        the other at the end. They move towards
                                        each other.
                                    </p>
                                    <div className="chips">
                                        <span className="chip">
                                            Sorted pair sum
                                        </span>
                                        <span className="chip">
                                            Palindrome check
                                        </span>
                                        <span className="chip">
                                            Reverse array
                                        </span>
                                    </div>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        2. Same direction
                                    </div>
                                    <p className="p">
                                        Both pointers move forward, often one
                                        moves faster or one represents a
                                        boundary.
                                    </p>
                                    <div className="chips">
                                        <span className="chip">
                                            Slow-fast pointer
                                        </span>
                                        <span className="chip">
                                            Remove duplicates
                                        </span>
                                        <span className="chip">
                                            Partition by value
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - pair sum in sorted array
                            </h3>
                            <p className="p">
                                Problem: given a sorted array, find if there are
                                two numbers whose sum equals the target.
                            </p>

                            <div className="stepsBox">
                                <div className="row">
                                    <span className="label">Idea</span>
                                    <span className="value">
                                        Start with{" "}
                                        <span className="mono">left</span> and{" "}
                                        <span className="mono">right</span>. If
                                        sum is too small, move left forward. If
                                        sum is too big, move right backward.
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Why it works</span>
                                    <span className="value">
                                        Array is sorted. Moving{" "}
                                        <span className="mono">left</span>{" "}
                                        increases sum. Moving{" "}
                                        <span className="mono">right</span>{" "}
                                        decreases sum.
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Space</span>
                                    <span className="value">
                                        <span className="mono">O(1)</span>
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`Sorted: [1, 2, 4, 6, 9], target = 10
left=0 (1), right=4 (9) -> 1+9 = 10 -> found

If target was 8:
1+9=10 (too big) -> right--
1+6=7 (too small) -> left++
2+6=8 -> found`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - palindrome check</h3>
                            <p className="p">
                                Problem: check if a string reads the same from
                                left to right and right to left.
                            </p>

                            <div className="stepsBox">
                                <div className="row">
                                    <span className="label">Idea</span>
                                    <span className="value">
                                        Compare characters at both ends. If they
                                        match, move inward. If mismatch, not a
                                        palindrome.
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Space</span>
                                    <span className="value">
                                        <span className="mono">O(1)</span>
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`String: "racecar"
l=r, r=r -> ok
l=a, r=a -> ok
l=c, r=c -> ok
l=e, r=e -> ok
All matched -> palindrome`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 3 - slow and fast pointers
                            </h3>
                            <p className="p">
                                Slow-fast pointer is used when one pointer moves
                                1 step and the other moves 2 steps. In arrays it
                                helps with cycles. In linked lists it helps to
                                detect cycles and find middle.
                            </p>

                            <pre className="code">
                                {`Slow-fast idea:
slow moves 1 step
fast moves 2 steps

If there is a cycle, fast will eventually meet slow.`}
                            </pre>

                            <div className="finalNote">
                                Full form note: this pattern is commonly used in
                                linked list cycle detection (Floyd cycle
                                algorithm), but the same idea can appear in
                                arrays too.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common terms and full forms</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">O(n)</span> - Linear
                                    time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(1)</span> -
                                    Constant extra space
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - Input size
                                    (number of elements)
                                </div>
                                <div className="abbr">
                                    <span className="mono">Palindrome</span> - A
                                    string that reads same forward and backward
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick checklist</h3>

                            <ol className="steps">
                                <li>
                                    Is the array sorted or can it be sorted
                                    safely
                                </li>
                                <li>Can two pointers replace nested loops</li>
                                <li>Do pointers move inward or forward</li>
                                <li>What rule moves which pointer</li>
                                <li>Write time and space complexity</li>
                            </ol>

                            <div className="finalNote">
                                Two pointers is a small pattern with huge
                                payoff. Learn the movement rule and you will
                                spot it everywhere.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TwoPointers;
