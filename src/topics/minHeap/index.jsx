// src/topics/minHeap/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiArrowDownCircle,
    FiCpu,
    FiCheckCircle,
    FiTool,
} from "react-icons/fi";

const MinHeap = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Min heap",
            sub: "A min heap is a complete binary tree where the smallest value is always at the top. It is the core idea behind a priority queue.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="min-heap">
            <div className="top">
                <h2 className="title">Min heap</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiArrowDownCircle />
                        Smallest on top
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Fast top element
                    </span>
                    <span className="pill">
                        <FiTool />
                        Insert and remove
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="min-heap-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Click to {open ? "collapse" : "expand"} min heap
                                notes
                            </div>
                            <div className="accHint">
                                Terms, properties, operations, and beginner
                                examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="min-heap-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning and full forms</h3>
                            <p className="p">
                                <strong>Heap</strong> in DSA means a special{" "}
                                <strong>tree based data structure</strong>, not
                                "heap memory".
                            </p>
                            <p className="p">
                                <strong>Min heap</strong> means the{" "}
                                <strong>minimum</strong> value has the highest
                                priority and stays at the top.
                            </p>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">PQ</span> - Priority
                                    Queue
                                </div>
                                <div className="abbr">
                                    <span className="mono">DSA</span> - Data
                                    Structures and Algorithms
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Core properties</h3>
                            <ul className="list">
                                <li>
                                    <strong>Heap property</strong> - Every
                                    parent node value is{" "}
                                    <strong>less than or equal</strong> to its
                                    children.
                                </li>
                                <li>
                                    <strong>Complete binary tree</strong> - All
                                    levels are full except possibly the last,
                                    and the last level is filled from{" "}
                                    <strong>left to right</strong>.
                                </li>
                                <li>
                                    The root always contains the{" "}
                                    <strong>minimum</strong> element.
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example min heap layout
                                </div>
                                <pre className="code">
                                    {`        2
      /   \\
     5     7
    / \\   /
   9  10 8

Root is 2 (minimum)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Array representation (important)
                            </h3>
                            <p className="p">
                                Heaps are usually stored in an{" "}
                                <strong>array</strong>.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Parent</span>
                                        <span className="tag">Index</span>
                                    </div>
                                    <p className="tBody">
                                        For a node at index{" "}
                                        <span className="mono">i</span>, parent
                                        index is{" "}
                                        <span className="mono">
                                            Math.floor((i - 1) / 2)
                                        </span>
                                        .
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Left child</span>
                                        <span className="tag">Index</span>
                                    </div>
                                    <p className="tBody">
                                        Left child index is{" "}
                                        <span className="mono">2 * i + 1</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Right child
                                        </span>
                                        <span className="tag">Index</span>
                                    </div>
                                    <p className="tBody">
                                        Right child index is{" "}
                                        <span className="mono">2 * i + 2</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Root</span>
                                        <span className="tag">Index</span>
                                    </div>
                                    <p className="tBody">
                                        Root is always at{" "}
                                        <span className="mono">index 0</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">Example array</div>
                                <pre className="code">
                                    {`Heap array: [2, 5, 7, 9, 10, 8]

Index:  0  1  2  3   4  5
Value:  2  5  7  9  10  8`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Operations and complexity</h3>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Peek (get min)
                                    </div>
                                    <p className="miniText">
                                        Return the top element without removing
                                        it.
                                        <br />
                                        Time -{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">Insert</div>
                                    <p className="miniText">
                                        Add element at the end, then bubble it
                                        up.
                                        <br />
                                        Time -{" "}
                                        <span className="mono">O(log n)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Extract min (remove top)
                                    </div>
                                    <p className="miniText">
                                        Swap top with last, remove last, then
                                        bubble down.
                                        <br />
                                        Time -{" "}
                                        <span className="mono">O(log n)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Build heap (heapify)
                                    </div>
                                    <p className="miniText">
                                        Convert array into a heap using bottom
                                        up heapify.
                                        <br />
                                        Time -{" "}
                                        <span className="mono">O(n)</span>
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Step by step examples (beginner friendly)
                            </h3>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Insert example - insert 3 into [2, 5, 7, 9]
                                </div>
                                <pre className="code">
                                    {`Heap array: [2, 5, 7, 9]
Insert 3 at end -> [2, 5, 7, 9, 3]

Bubble up:
- compare 3 with parent 5, swap
  [2, 3, 7, 9, 5]

Now parent of 3 is 2, ok
Result: [2, 3, 7, 9, 5]`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Extract min example - remove min from [2, 3,
                                    7, 9, 5]
                                </div>
                                <pre className="code">
                                    {`Heap array: [2, 3, 7, 9, 5]
Remove min = 2

Swap root with last:
[5, 3, 7, 9, 2]
Remove last:
[5, 3, 7, 9]

Bubble down:
- compare 5 with children 3 and 7, swap with 3
  [3, 5, 7, 9]

Now 5 has child 9 only, heap property ok
Result: [3, 5, 7, 9]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Where min heap is used</h3>
                            <ul className="list">
                                <li>
                                    Priority queue for scheduling smallest task
                                    first.
                                </li>
                                <li>
                                    Dijkstra algorithm for shortest path (picks
                                    smallest distance next).
                                </li>
                                <li>
                                    Top K problems (keep smallest or largest in
                                    a controlled heap).
                                </li>
                                <li>Merge K sorted lists or arrays.</li>
                            </ul>

                            <div className="finalNote">
                                If you need "always get the smallest element
                                fast" while still supporting inserts, a min heap
                                is the tool.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MinHeap;
