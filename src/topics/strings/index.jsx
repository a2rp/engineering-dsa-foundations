// src/topics/strings/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiType,
    FiSearch,
    FiHash,
    FiRepeat,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const Strings = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Strings",
            sub: "Strings are sequences of characters. Most string problems are about scanning, counting, matching patterns, and managing windows efficiently.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="strings">
            <div className="top">
                <h2 className="title">Strings</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiSearch /> Pattern matching
                    </span>
                    <span className="pill">
                        <FiHash /> Frequency map
                    </span>
                    <span className="pill">
                        <FiRepeat /> Sliding window
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="strings-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiType />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                definitions, terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="strings-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Basics</h3>
                            <p className="p">
                                A <strong>string</strong> is a sequence of{" "}
                                <strong>characters</strong> like{" "}
                                <span className="mono">"hello"</span>.
                                <br />
                                In most programming languages, strings are
                                treated as arrays of characters, but not always
                                mutable. In JavaScript, strings are{" "}
                                <strong>immutable</strong>, meaning you cannot
                                change a character in place.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Character</span>
                                        <span className="tag">Unit</span>
                                    </div>
                                    <p className="tBody">
                                        A single symbol like{" "}
                                        <span className="mono">"A"</span>,{" "}
                                        <span className="mono">"7"</span>,{" "}
                                        <span className="mono">"%"</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Immutable</span>
                                        <span className="tag">Property</span>
                                    </div>
                                    <p className="tBody">
                                        Immutable means cannot be modified in
                                        place. Any change creates a new string.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Substring</span>
                                        <span className="tag">Contiguous</span>
                                    </div>
                                    <p className="tBody">
                                        A continuous piece of a string.
                                        <br />
                                        Example: In{" "}
                                        <span className="mono">"abcd"</span>,
                                        substrings include{" "}
                                        <span className="mono">"ab"</span>,{" "}
                                        <span className="mono">"bcd"</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Subsequence
                                        </span>
                                        <span className="tag">Order kept</span>
                                    </div>
                                    <p className="tBody">
                                        Characters picked in order, not
                                        necessarily contiguous.
                                        <br />
                                        Example: In{" "}
                                        <span className="mono">"abcd"</span>,
                                        subsequences include{" "}
                                        <span className="mono">"ad"</span>,{" "}
                                        <span className="mono">"abc"</span>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common terms and full forms</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">ASCII</span> -
                                    American Standard Code for Information
                                    Interchange
                                </div>
                                <div className="abbr">
                                    <span className="mono">Unicode</span> - A
                                    universal character set standard
                                </div>
                                <div className="abbr">
                                    <span className="mono">UTF-8</span> -
                                    Unicode Transformation Format - 8-bit
                                </div>
                                <div className="abbr">
                                    <span className="mono">KMP</span> - Knuth
                                    Morris Pratt (pattern matching algorithm)
                                </div>
                                <div className="abbr">
                                    <span className="mono">LPS</span> - Longest
                                    Prefix Suffix (used in KMP)
                                </div>
                                <div className="abbr">
                                    <span className="mono">Regex</span> -
                                    Regular Expression
                                </div>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiAlertTriangle />
                                </span>
                                <p className="nText">
                                    Unicode and UTF-8 matter when strings
                                    contain emojis or non-English characters. In
                                    JavaScript, some characters take more than 1
                                    code unit.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Pattern matching</h3>
                            <p className="p">
                                Pattern matching means finding a smaller string
                                (pattern) inside a bigger string (text).
                            </p>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Naive pattern match
                                    </div>
                                    <p className="p">
                                        Check every possible start position.
                                    </p>
                                    <pre className="code">
                                        {`Text:    "ababcabc"
Pattern: "abc"

Try start at i=0 -> "aba" no
i=1 -> "bab" no
i=2 -> "abc" yes

Worst time can be O(n * m)
n = text length
m = pattern length`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        KMP idea (high level)
                                    </div>
                                    <p className="p">
                                        KMP (Knuth Morris Pratt) avoids
                                        re-checking characters by using LPS
                                        (Longest Prefix Suffix) table.
                                    </p>
                                    <pre className="code">
                                        {`KMP builds LPS for pattern
Then scans text once

Typical time: O(n + m)
Better than O(n * m) for many cases`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Anagram logic</h3>
                            <p className="p">
                                Two strings are anagrams if they contain the
                                same characters with the same frequency, but
                                possibly in different order.
                            </p>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Frequency map approach
                                    </div>
                                    <p className="p">
                                        Count characters and compare counts.
                                    </p>
                                    <pre className="code">
                                        {`"listen" and "silent"

Counts:
l:1 i:1 s:1 t:1 e:1 n:1
Matches -> anagram

Time: O(n)
Space: O(k) where k is unique chars`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        Common use case
                                    </div>
                                    <p className="p">
                                        Find all anagrams of pattern in a text
                                        using sliding window.
                                    </p>
                                    <pre className="code">
                                        {`Text: "cbaebabacd"
Pattern: "abc"

Windows of size 3:
"cba" -> anagram
"bae" -> no
...
"bac" -> anagram`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Substring problems</h3>
                            <p className="p">
                                Many substring problems use sliding window with
                                a frequency map or a set.
                            </p>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Longest substring without repeating
                                    </div>
                                    <p className="p">
                                        Use two pointers as a sliding window and
                                        track last seen position of characters.
                                    </p>
                                    <pre className="code">
                                        {`String: "abcaef"

Window:
"abc" ok
next 'a' repeats -> move left past old 'a'
Now window "caef"

Answer length = 4 ("caef")

Typical time: O(n)`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        Palindrome check
                                    </div>
                                    <p className="p">
                                        Palindrome means reads same forward and
                                        backward.
                                    </p>
                                    <pre className="code">
                                        {`"racecar" -> palindrome
Two pointers:
left at 'r', right at 'r'
Move inward and compare

Time: O(n)
Space: O(1)`}
                                    </pre>
                                </div>
                            </div>

                            <div className="finalNote">
                                If you see "substring", think sliding window. If
                                you see "same characters", think frequency map.
                                If you see "reverse compare", think two
                                pointers.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick checklist</h3>
                            <ul className="list">
                                <li>
                                    Identify if it is substring (contiguous) or
                                    subsequence (not contiguous).
                                </li>
                                <li>
                                    Decide pattern: two pointers, sliding
                                    window, frequency map, hashing.
                                </li>
                                <li>
                                    Write time and space complexity using input
                                    size <span className="mono">n</span>.
                                </li>
                                <li>
                                    Edge cases: empty string, one character, all
                                    same characters, Unicode emojis.
                                </li>
                            </ul>

                            <div className="note ok">
                                <span className="nIcon">
                                    <FiCheckCircle />
                                </span>
                                <p className="nText">
                                    Most string problems become easy after you
                                    master two patterns: frequency map and
                                    sliding window.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Strings;
