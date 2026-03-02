// src/topics/anagramLogic/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShuffle,
    FiHash,
    FiCheckCircle,
    FiZap,
    FiSearch,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const AnagramLogic = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Anagram logic",
            sub: "An anagram means two strings contain the same characters with the same counts, but the order can be different. The core trick is counting frequency.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    useEffect(() => {
        let tId = null;

        if (open) {
            setIsMounted(true);
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            tId = window.setTimeout(() => {
                setIsMounted(false);
            }, TRANSITION_MS);
        }

        return () => {
            if (tId) window.clearTimeout(tId);
        };
    }, [open]);

    return (
        <Styled.Wrapper id="anagram-logic">
            <div className="top">
                <h2 className="title">Anagram logic</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiHash /> Frequency counts
                    </span>
                    <span className="pill">
                        <FiShuffle /> Order does not matter
                    </span>
                    <span className="pill">
                        <FiZap /> Common interview pattern
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="anagram-logic-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear terms and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="anagram-logic-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    An <strong>anagram</strong> is formed by
                                    rearranging letters of a word.
                                    <br />
                                    Two strings are anagrams if:
                                    <br />- same length
                                    <br />- same characters
                                    <br />- same frequency of each character
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Example</div>
                                        <p className="miniText">
                                            <span className="mono">listen</span>{" "}
                                            and{" "}
                                            <span className="mono">silent</span>{" "}
                                            are anagrams.
                                            <br />
                                            Same letters: l, i, s, t, e, n
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Not an anagram
                                        </div>
                                        <p className="miniText">
                                            <span className="mono">rat</span>{" "}
                                            and{" "}
                                            <span className="mono">car</span>{" "}
                                            are not anagrams.
                                            <br />
                                            Because letters differ: t vs c
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Core idea</h3>
                                <p className="p">
                                    The order of characters does not matter. The
                                    counts matter.
                                    <br />
                                    This is called a{" "}
                                    <strong>frequency map</strong>. It is
                                    usually an object like:
                                    <span className="mono">
                                        {" { a: 2, b: 1 }"}
                                    </span>
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Frequency
                                            </span>
                                            <span className="tag">Count</span>
                                        </div>
                                        <p className="tBody">
                                            Frequency means how many times a
                                            character appears.
                                            <br />
                                            Example: in{" "}
                                            <span className="mono">
                                                aab
                                            </span>,{" "}
                                            <span className="mono">a</span> has
                                            frequency 2,{" "}
                                            <span className="mono">b</span> has
                                            frequency 1.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Frequency map
                                            </span>
                                            <span className="tag">Store</span>
                                        </div>
                                        <p className="tBody">
                                            A frequency map stores character
                                            counts. It makes checking anagrams
                                            fast.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Approach 1 - count and compare
                                </h3>
                                <p className="p">
                                    Best beginner approach:
                                    <br />- if lengths differ, return false
                                    <br />- count characters of first string
                                    <br />- reduce counts using second string
                                    <br />- if any count goes negative, not an
                                    anagram
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example walkthrough
                                    </div>
                                    <pre className="code">{`s = "aab"
t = "aba"

Count s:
a -> 2
b -> 1

Scan t:
a -> reduce a to 1
b -> reduce b to 0
a -> reduce a to 0

All counts end at 0
So it is an anagram`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        JavaScript example code
                                    </div>
                                    <pre className="code">{`function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!freq[ch]) return false;
    freq[ch] -= 1;
  }

  return true;
}

isAnagram("listen", "silent") -> true
isAnagram("rat", "car") -> false`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Approach 2 - sorted strings
                                </h3>
                                <p className="p">
                                    Another simple method:
                                    <br />- sort both strings
                                    <br />- compare them
                                    <br />
                                    This is easy, but sorting costs more time.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Time complexity
                                        </div>
                                        <p className="miniText">
                                            Sorting approach is{" "}
                                            <span className="mono">
                                                O(n log n)
                                            </span>
                                            .
                                            <br />
                                            Frequency approach is{" "}
                                            <span className="mono">O(n)</span>.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            When to use sorting
                                        </div>
                                        <p className="miniText">
                                            Use sorting when input is small and
                                            you want quick implementation.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Sorting example
                                    </div>
                                    <pre className="code">{`"listen" -> "eilnst"
"silent" -> "eilnst"
Same sorted output -> anagram`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Common anagram questions</h3>
                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Check if two strings are anagrams
                                        </div>
                                        <div className="a">
                                            Use frequency map and compare
                                            counts.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            Group anagrams from a list of words
                                        </div>
                                        <div className="a">
                                            Use sorted string or frequency
                                            signature as key in a map.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            Find anagram substrings in a bigger
                                            string
                                        </div>
                                        <div className="a">
                                            Use sliding window with frequency
                                            diff.
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    The anagram pattern is always about
                                    frequency. If order matters, it is not an
                                    anagram problem.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Full forms and terms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">O(n)</span> -
                                        Linear time
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">O(n log n)</span>{" "}
                                        - Linearithmic time
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">n</span> - Input
                                        size (number of characters)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">freq</span> -
                                        Frequency map (character count object)
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Is{" "}
                                            <span className="mono">
                                                "aabbcc"
                                            </span>{" "}
                                            an anagram of{" "}
                                            <span className="mono">
                                                "abcabc"
                                            </span>
                                            ?
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            Yes. Same letters and same counts.
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default AnagramLogic;
