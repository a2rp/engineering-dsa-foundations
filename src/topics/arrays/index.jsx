// src/topics/arrays/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGrid,
    FiCpu,
    FiSearch,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const Arrays = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Arrays",
            sub: "An array is a fixed-size, indexed collection of values stored in continuous memory. Arrays are the base of many DSA patterns like prefix sum, sliding window, and two pointers.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="arrays">
            <div className="top">
                <h2 className="title">Arrays</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGrid /> Indexed storage
                    </span>
                    <span className="pill">
                        <FiCpu /> Fast access
                    </span>
                    <span className="pill">
                        <FiZap /> Pattern heavy
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="arrays-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGrid />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                basics, terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="arrays-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is an array</h3>
                            <p className="p">
                                An <strong>array</strong> is a list where every
                                item has an index. Index starts from{" "}
                                <span className="mono">0</span>.
                                <br />
                                Most languages store arrays in{" "}
                                <strong>contiguous memory</strong> which makes
                                access fast.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Index based access
                                    </div>
                                    <p className="miniText">
                                        Get value by index quickly.
                                        <br />
                                        Example:{" "}
                                        <span className="mono">arr[3]</span>
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Contiguous memory
                                    </div>
                                    <p className="miniText">
                                        Items are stored next to each other in
                                        memory.
                                        <br />
                                        This helps CPU caching.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">Example: indexes</div>
                                <pre className="code">
                                    {`arr = [10, 20, 30, 40]
index:  0   1   2   3

arr[0] = 10
arr[3] = 40`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common operations and costs</h3>
                            <p className="p">
                                Arrays are powerful because some operations are
                                very fast, but inserts in the middle can be
                                costly.
                            </p>

                            <div className="tableLike">
                                <div className="tRow tHead">
                                    <div>Operation</div>
                                    <div>Meaning</div>
                                    <div>Time</div>
                                </div>

                                <div className="tRow">
                                    <div className="mono">Access</div>
                                    <div>Read value at an index</div>
                                    <div className="mono">O(1)</div>
                                </div>

                                <div className="tRow">
                                    <div className="mono">Update</div>
                                    <div>Change value at an index</div>
                                    <div className="mono">O(1)</div>
                                </div>

                                <div className="tRow">
                                    <div className="mono">Search</div>
                                    <div>Find a value by scanning</div>
                                    <div className="mono">O(n)</div>
                                </div>

                                <div className="tRow">
                                    <div className="mono">Insert</div>
                                    <div>Insert in middle (shift items)</div>
                                    <div className="mono">O(n)</div>
                                </div>

                                <div className="tRow">
                                    <div className="mono">Delete</div>
                                    <div>Delete in middle (shift items)</div>
                                    <div className="mono">O(n)</div>
                                </div>
                            </div>

                            <div className="finalNote">
                                <strong>O(1)</strong> means constant time,{" "}
                                <strong>O(n)</strong> means linear time, and{" "}
                                <strong>n</strong> is number of elements.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Array patterns</h3>
                            <p className="p">
                                These patterns appear in a large number of array
                                questions. Learn them deeply.
                            </p>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">
                                        Prefix sum (running total)
                                    </div>
                                    <p className="pBody">
                                        Prefix sum means you store the sum from{" "}
                                        <span className="mono">0</span> to{" "}
                                        <span className="mono">i</span>.
                                        <br />
                                        It makes range sum queries fast.
                                    </p>
                                    <pre className="code">
                                        {`arr:    [2, 5, 3, 6]
prefix: [2, 7, 10, 16]

sum(1..3) = prefix[3] - prefix[0]
          = 16 - 2 = 14`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Sliding window (fixed or variable size)
                                    </div>
                                    <p className="pBody">
                                        Sliding window means keep a moving range
                                        and update it without recomputing
                                        everything.
                                    </p>
                                    <pre className="code">
                                        {`Max sum of size k=3
arr: [2, 1, 5, 1, 3, 2]

window sums:
(2+1+5)=8
(1+5+1)=7
(5+1+3)=9
(1+3+2)=6

answer: 9`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Two pointers</div>
                                    <p className="pBody">
                                        Two pointers means two indexes move
                                        based on a rule. Often used on sorted
                                        arrays.
                                    </p>
                                    <pre className="code">
                                        {`Sorted arr: [1, 2, 4, 6, 9], target=10
l=0 (1), r=4 (9)
1+9=10 -> found`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        In-place (no extra array)
                                    </div>
                                    <p className="pBody">
                                        In-place means you modify the same array
                                        without using big extra memory.
                                        <br />
                                        Useful when space matters.
                                    </p>
                                    <pre className="code">
                                        {`Remove duplicates from sorted array:
use write pointer

i moves forward
write updates positions
extra space stays O(1)`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner mistakes</h3>
                            <div className="mistakeGrid">
                                <div className="mistake">
                                    <div className="mTitle">
                                        Off-by-one error
                                    </div>
                                    <p className="mText">
                                        Using wrong loop bounds, like{" "}
                                        <span className="mono">i &lt;= n</span>{" "}
                                        instead of{" "}
                                        <span className="mono">i &lt; n</span>.
                                    </p>
                                </div>

                                <div className="mistake">
                                    <div className="mTitle">
                                        Forgetting edge cases
                                    </div>
                                    <p className="mText">
                                        Empty array, single element, all same
                                        values, negative numbers.
                                    </p>
                                </div>

                                <div className="mistake">
                                    <div className="mTitle">
                                        Recomputing sums
                                    </div>
                                    <p className="mText">
                                        Not using prefix sum or sliding window,
                                        leading to{" "}
                                        <span className="mono">O(n^2)</span>.
                                    </p>
                                </div>

                                <div className="mistake">
                                    <div className="mTitle">
                                        Sorting without reason
                                    </div>
                                    <p className="mText">
                                        Sorting changes order and costs{" "}
                                        <span className="mono">O(n log n)</span>
                                        . Use it only when it helps.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and terms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">CPU</span> - Central
                                    Processing Unit
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(1)</span> -
                                    Constant time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n)</span> - Linear
                                    time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n log n)</span> -
                                    Linearithmic time
                                </div>
                            </div>

                            <div className="finalNote">
                                Arrays are everywhere. If you master arrays and
                                these patterns, many other topics become easy.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Arrays;
