// src/topics/substringProblems/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiType,
    FiMove,
    FiHash,
    FiSearch,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const SubstringProblems = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Substring problems",
            sub: "Substring problems are about working with continuous parts of a string. Most solutions use sliding window, two pointers, and frequency maps.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="substring-problems">
            <div className="top">
                <h2 className="title">Substring problems</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiMove /> Sliding window
                    </span>
                    <span className="pill">
                        <FiHash /> Frequency map
                    </span>
                    <span className="pill">
                        <FiSearch /> Two pointers
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="substring-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiType />
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
                    id="substring-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Basic terms with full forms</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">String</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A string is a sequence of characters.
                                        Example: "abc", "hello".
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Substring</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A substring is a{" "}
                                        <strong>continuous</strong> part of a
                                        string.
                                        <br />
                                        Example: In "abcd", "bc" is a substring,
                                        but "bd" is not.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Subsequence
                                        </span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A subsequence keeps order but can skip
                                        characters.
                                        <br />
                                        Example: In "abcd", "bd" is a
                                        subsequence.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Sliding window
                                        </span>
                                        <span className="tag">Technique</span>
                                    </div>
                                    <p className="tBody">
                                        Sliding window means keeping a window
                                        [left..right] and moving it while
                                        updating counts in constant time.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Two pointers
                                        </span>
                                        <span className="tag">Technique</span>
                                    </div>
                                    <p className="tBody">
                                        Two pointers means using two indexes
                                        (left and right) that move based on a
                                        rule.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Frequency map
                                        </span>
                                        <span className="tag">Data</span>
                                    </div>
                                    <p className="tBody">
                                        A frequency map stores how many times a
                                        character appears.
                                        <br />
                                        Example: "aab" -&gt; a:2, b:1.
                                    </p>
                                </div>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiAlertTriangle />
                                </span>
                                <p className="nText">
                                    Most substring problems fail because of off
                                    by one errors. Always be clear whether your
                                    window is inclusive: [left..right].
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common types of substring problems
                            </h3>

                            <div className="typeGrid">
                                <div className="typeCard">
                                    <div className="typeTitle">
                                        1. Fixed size window
                                    </div>
                                    <p className="p">
                                        Window length is fixed. Example:
                                        "maximum sum substring of length k" or
                                        "find substring of length k with
                                        something".
                                    </p>
                                    <ul className="list">
                                        <li>Move right by 1 each step</li>
                                        <li>
                                            Remove left char, add right char
                                        </li>
                                        <li>Time often O(n)</li>
                                    </ul>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        2. Variable size window
                                    </div>
                                    <p className="p">
                                        Window grows and shrinks to satisfy a
                                        condition. Example: "smallest substring
                                        with all required characters".
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Expand right to satisfy condition
                                        </li>
                                        <li>Shrink left to minimize window</li>
                                        <li>Time often O(n)</li>
                                    </ul>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        3. Count and uniqueness
                                    </div>
                                    <p className="p">
                                        Problems like "longest substring without
                                        repeating characters" or "at most k
                                        distinct characters".
                                    </p>
                                    <ul className="list">
                                        <li>Use frequency map</li>
                                        <li>Track distinct count</li>
                                        <li>Adjust left pointer</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - Longest substring without repeating
                                characters
                            </h3>

                            <p className="p">
                                Problem: Given a string, find the length of the
                                longest substring that has no repeated
                                character.
                                <br />
                                Example: "abcabcbb" -&gt; answer is 3 ("abc")
                            </p>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Technique</span>
                                    <span className="value">
                                        Sliding window + frequency map
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
                                        <span className="mono">O(k)</span> where
                                        k is number of unique characters
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`String: "abcabcbb"
Window starts empty

Expand right:
"a" ok
"ab" ok
"abc" ok (best = 3)
Add "a" -> repeat happens
Shrink left until repeat removed
Window becomes "bca"
Continue...

Key idea:
- expand right each step
- if repeat appears, move left and update counts`}
                            </pre>

                            <div className="tip">
                                <span className="tIcon">
                                    <FiCheckCircle />
                                </span>
                                <p className="tText">
                                    One window pass is enough because each index
                                    moves forward only. That is why many sliding
                                    window solutions are O(n).
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 2 - Minimum window substring idea
                            </h3>

                            <p className="p">
                                Problem style: Find the smallest substring that
                                contains all required characters from another
                                string.
                                <br />
                                Example: s = "ADOBECODEBANC", t = "ABC" -&gt;
                                answer "BANC"
                            </p>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Technique</span>
                                    <span className="value">
                                        Variable sliding window + needed counts
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Core idea</span>
                                    <span className="value">
                                        Expand to satisfy, shrink to minimize
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`Need: A, B, C

Expand right pointer until window contains all:
"ADOBEC" -> contains A, B, C (valid)

Now shrink left to make it smaller while still valid:
"DOBEC" -> loses A (invalid)
So stop shrinking, expand again...

Repeat and keep best window length.`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner checklist</h3>

                            <ol className="steps">
                                <li>
                                    Decide if window is fixed or variable size.
                                </li>
                                <li>Choose data: set, map, or count array.</li>
                                <li>
                                    Track what makes window valid or invalid.
                                </li>
                                <li>Expand right pointer step by step.</li>
                                <li>
                                    When invalid, move left pointer until valid.
                                </li>
                                <li>Update answer while window is valid.</li>
                            </ol>

                            <div className="finalNote">
                                Substring problems are mostly sliding window.
                                Master the window rules, and many questions
                                become easy variations.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SubstringProblems;
