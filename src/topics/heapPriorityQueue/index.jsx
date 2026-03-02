// src/topics/heapPriorityQueue/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiLayers,
    FiArrowUpCircle,
    FiArrowDownCircle,
    FiZap,
    FiCheckCircle,
} from "react-icons/fi";

const HeapPriorityQueue = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Heap - Priority Queue",
            sub: "Heaps are special trees used to quickly get the smallest or largest element. Priority Queue is the practical usage of a heap.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="heap-priority-queue">
            <div className="top">
                <h2 className="title">Heap - Priority Queue</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCpu /> Fast min or max
                    </span>
                    <span className="pill">
                        <FiLayers /> Complete binary tree
                    </span>
                    <span className="pill">
                        <FiZap /> Great for Top K
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="heap-pq-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Click to {open ? "collapse" : "expand"} - notes,
                                terms, and examples
                            </div>
                            <div className="accHint">
                                Covers heap rules, min heap, max heap, heapify,
                                priority queue usage
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="heap-pq-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">
                                What is a heap, in simple words
                            </h3>
                            <p className="p">
                                A <strong>heap</strong> is a{" "}
                                <strong>complete binary tree</strong> with a
                                special order rule.
                                <br />
                                Complete binary tree means every level is full,
                                except maybe the last level, and the last level
                                fills from left to right.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Min heap</div>
                                    <p className="miniText">
                                        Parent is always smaller than or equal
                                        to its children.
                                        <br />
                                        The smallest element stays at the top
                                        (root).
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Max heap</div>
                                    <p className="miniText">
                                        Parent is always bigger than or equal to
                                        its children.
                                        <br />
                                        The largest element stays at the top
                                        (root).
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Priority Queue - full form and meaning
                            </h3>
                            <p className="p">
                                <strong>Priority Queue</strong> means a queue
                                where removal happens by priority, not by time.
                                <br />
                                Example: in a hospital, critical patients are
                                treated first. That is a priority queue idea.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: hospital queue
                                </div>
                                <pre className="code">
                                    {`Patients (priority):
- A (priority 5)
- B (priority 1)
- C (priority 3)

Pop order (highest priority first):
A -> C -> B`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Core operations and costs</h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">peek</span>
                                        <span className="tag">O(1)</span>
                                    </div>
                                    <p className="tBody">
                                        See the top element (min or max) without
                                        removing it.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">insert</span>
                                        <span className="tag">O(log n)</span>
                                    </div>
                                    <p className="tBody">
                                        Add an element, then fix heap order by
                                        moving it up. This is called{" "}
                                        <span className="mono">bubble up</span>{" "}
                                        or <span className="mono">sift up</span>
                                        .
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">extract</span>
                                        <span className="tag">O(log n)</span>
                                    </div>
                                    <p className="tBody">
                                        Remove the top element, then fix heap
                                        order by moving the new root down. This
                                        is called{" "}
                                        <span className="mono">
                                            bubble down
                                        </span>{" "}
                                        or{" "}
                                        <span className="mono">sift down</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">build heap</span>
                                        <span className="tag">O(n)</span>
                                    </div>
                                    <p className="tBody">
                                        Convert an array into a heap using
                                        heapify from bottom to top. This is
                                        faster than inserting one by one.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Heapify explained</h3>
                            <p className="p">
                                <strong>Heapify</strong> means "fix the heap
                                property" for a node. If a parent breaks the
                                rule, swap with the correct child and continue.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Heapify down
                                    </div>
                                    <p className="miniText">
                                        Used after extracting root. Put last
                                        element at root, then push it down until
                                        heap rule is restored.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Heapify up</div>
                                    <p className="miniText">
                                        Used after inserting. Insert at the end,
                                        then move up by swapping with parent
                                        until heap rule is restored.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: min heap insert
                                </div>
                                <pre className="code">
                                    {`Min heap (array view): [3, 5, 8, 10]
Insert 2 at end: [3, 5, 8, 10, 2]
Heapify up:
- swap 2 with 5 -> [3, 2, 8, 10, 5]
- swap 2 with 3 -> [2, 3, 8, 10, 5]
Now heap is valid`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Min heap vs max heap</h3>

                            <div className="compare">
                                <div className="box">
                                    <div className="boxHead">
                                        <span className="bIcon">
                                            <FiArrowDownCircle />
                                        </span>
                                        <span className="bTitle">Min heap</span>
                                    </div>
                                    <p className="p">
                                        Best when you need smallest element
                                        quickly.
                                    </p>
                                    <ul className="list">
                                        <li>Find min quickly</li>
                                        <li>Merge sorted lists</li>
                                        <li>Shortest tasks first</li>
                                    </ul>
                                </div>

                                <div className="box">
                                    <div className="boxHead">
                                        <span className="bIcon">
                                            <FiArrowUpCircle />
                                        </span>
                                        <span className="bTitle">Max heap</span>
                                    </div>
                                    <p className="p">
                                        Best when you need largest element
                                        quickly.
                                    </p>
                                    <ul className="list">
                                        <li>Top K largest elements</li>
                                        <li>Rank leaderboards</li>
                                        <li>Scheduling by high priority</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common use cases</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">Top K</span> - keep a
                                    heap of size K and update while scanning
                                    data
                                </div>
                                <div className="abbr">
                                    <span className="mono">Kth</span> - Kth
                                    smallest or Kth largest using heap
                                </div>
                                <div className="abbr">
                                    <span className="mono">Streaming</span> -
                                    keep best elements while new data arrives
                                </div>
                                <div className="abbr">
                                    <span className="mono">Scheduling</span> -
                                    always pick next best task
                                </div>
                            </div>

                            <div className="finalNote">
                                Heaps shine when you repeatedly need the best
                                element while inserts and removals keep
                                happening.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Quick recap - beginner checklist
                            </h3>
                            <ol className="steps">
                                <li>
                                    Heap is a complete binary tree with an order
                                    rule.
                                </li>
                                <li>
                                    Min heap gives smallest at top, max heap
                                    gives largest at top.
                                </li>
                                <li>
                                    Priority Queue is the usage of heap to pop
                                    highest priority element.
                                </li>
                                <li>
                                    Insert and extract are O(log n), peek is
                                    O(1).
                                </li>
                                <li>
                                    Heapify means restoring heap order after a
                                    change.
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HeapPriorityQueue;
