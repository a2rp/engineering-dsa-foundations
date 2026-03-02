// src/topics/patternMatching/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSearch,
    FiHash,
    FiZap,
    FiCheckCircle,
    FiCpu,
} from "react-icons/fi";

const PatternMatching = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Pattern matching",
            sub: "Pattern matching means finding whether a smaller string (pattern) exists inside a bigger string (text). This is used in search, validation, log scanning, and text processing.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="pattern-matching">
            <div className="top">
                <h2 className="title">Pattern matching</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiSearch /> Search inside text
                    </span>
                    <span className="pill">
                        <FiCpu /> Time matters
                    </span>
                    <span className="pill">
                        <FiZap /> Repeatable pattern
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="pattern-matching-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiSearch />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                terms, examples, and common approaches
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="pattern-matching-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Basic meaning</h3>
                            <p className="p">You have two strings:</p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Text (main string)
                                    </div>
                                    <p className="miniText">
                                        The bigger string where you search.
                                        Example:{" "}
                                        <span className="mono">
                                            "bananas are good"
                                        </span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Pattern (search string)
                                    </div>
                                    <p className="miniText">
                                        The smaller string you want to find.
                                        Example:{" "}
                                        <span className="mono">"anas"</span>
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example - find pattern in text
                                </div>
                                <pre className="code">
                                    {`Text:    "bananas"
Pattern: "anas"

Check possible start positions:
b a n a n a s
0 1 2 3 4 5 6

Try start at index 0: "bana" != "anas"
Try start at index 1: "anan" != "anas"
Try start at index 2: "nana" != "anas"
Try start at index 3: "anas" == "anas" -> found`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Where you see this in real apps
                            </h3>
                            <ul className="list">
                                <li>
                                    Search bar matching: user types a query and
                                    you highlight results.
                                </li>
                                <li>
                                    Finding words in logs: scan for "ERROR",
                                    "WARN", request IDs.
                                </li>
                                <li>
                                    Validation: check if email contains "@", URL
                                    contains "https".
                                </li>
                                <li>
                                    Text features: autocomplete, find and
                                    replace, plagiarism checks.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common approaches and their names
                            </h3>
                            <p className="p">
                                There are multiple ways to do pattern matching.
                                Start simple, then learn optimized approaches.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Naive matching
                                        </span>
                                        <span className="tag">Basic</span>
                                    </div>
                                    <p className="tBody">
                                        Compare the pattern at every position in
                                        the text.
                                        <br />
                                        Worst case time:{" "}
                                        <span className="mono">O(n*m)</span>
                                        <br />
                                        Here <span className="mono">n</span> is
                                        text length,{" "}
                                        <span className="mono">m</span> is
                                        pattern length.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">KMP</span>
                                        <span className="tag">Optimized</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>KMP</strong> full form is{" "}
                                        <strong>Knuth-Morris-Pratt</strong>
                                        .
                                        <br />
                                        It avoids re-checking characters using a
                                        helper table called{" "}
                                        <span className="mono">LPS</span>.
                                        <br />
                                        Time:{" "}
                                        <span className="mono">O(n + m)</span>
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">LPS</span>
                                        <span className="tag">KMP helper</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>LPS</strong> full form is{" "}
                                        <strong>Longest Prefix Suffix</strong>
                                        .
                                        <br />
                                        It tells the longest prefix of pattern
                                        that is also a suffix, to jump safely
                                        during mismatches.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Rabin-Karp</span>
                                        <span className="tag">Hashing</span>
                                    </div>
                                    <p className="tBody">
                                        Uses hashing to compare pattern hashes
                                        quickly.
                                        <br />
                                        Works well for multiple patterns and
                                        rolling hash.
                                        <br />
                                        Average:{" "}
                                        <span className="mono">O(n + m)</span>,
                                        worst can degrade due to collisions.
                                    </p>
                                </div>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiCpu />
                                </span>
                                <p className="nText">
                                    For beginners: master naive matching first.
                                    Then learn KMP for interviews and strong
                                    theory.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner examples</h3>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Example 1 - simple contains
                                    </div>
                                    <p className="p">
                                        Check if pattern exists anywhere in the
                                        text.
                                    </p>
                                    <pre className="code">
                                        {`Text: "hello world"
Pattern: "world"
Result: found (starts at index 6)`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        Example 2 - first match index
                                    </div>
                                    <p className="p">
                                        Find the first index where pattern
                                        starts.
                                    </p>
                                    <pre className="code">
                                        {`Text: "aaaaab"
Pattern: "aab"
Naive checks:
start 0 -> "aaa" != "aab"
start 1 -> "aaa" != "aab"
start 2 -> "aaa" != "aab"
start 3 -> "aab" == "aab"
Answer index: 3`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms and full forms</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">KMP</span> - Knuth
                                    Morris Pratt
                                </div>
                                <div className="abbr">
                                    <span className="mono">LPS</span> - Longest
                                    Prefix Suffix
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - Text
                                    length
                                </div>
                                <div className="abbr">
                                    <span className="mono">m</span> - Pattern
                                    length
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n*m)</span> - Time
                                    grows with text times pattern
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n + m)</span> -
                                    Time grows with text plus pattern
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick checklist</h3>
                            <ol className="steps">
                                <li>
                                    Confirm which one is text and which one is
                                    pattern.
                                </li>
                                <li>
                                    Ask if you need only yes or no, or the index
                                    of match, or all matches.
                                </li>
                                <li>
                                    Start with naive approach, then optimize if
                                    needed.
                                </li>
                                <li>Mention time complexity clearly.</li>
                            </ol>

                            <div className="finalNote">
                                Pattern matching is just controlled comparison.
                                The optimization is about avoiding repeated
                                work.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PatternMatching;
