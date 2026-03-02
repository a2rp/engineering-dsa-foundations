// src/topics/maxHeap/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiTrendingUp,
    FiLayers,
    FiCheckCircle,
    FiTool,
} from "react-icons/fi";

const MaxHeap = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Max heap",
            sub: "A max heap is a complete binary tree where the maximum value is always at the top (root). It is commonly used to quickly get the largest element.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="max-heap">
            <div className="top">
                <h2 className="title">Max heap</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiTrendingUp />
                        Largest on top
                    </span>
                    <span className="pill">
                        <FiLayers />
                        Complete tree
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Fast max access
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="max-heap-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Click to {open ? "collapse" : "expand"} full
                                notes with examples
                            </div>
                            <div className="accHint">
                                Includes terms, array representation, operations
                                and complexities
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="max-heap-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a heap</h3>
                            <p className="p">
                                A <strong>heap</strong> is a special tree based
                                structure used to efficiently get the highest or
                                lowest element.
                                <br />- <strong>Max heap</strong> keeps the
                                largest value at the root.
                                <br />- <strong>Min heap</strong> keeps the
                                smallest value at the root.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Key rules and terms (with meaning)
                            </h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Complete binary tree
                                        </span>
                                        <span className="tag">Shape</span>
                                    </div>
                                    <p className="tBody">
                                        A complete binary tree means all levels
                                        are fully filled except maybe the last,
                                        and the last level is filled from left
                                        to right.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Heap property
                                        </span>
                                        <span className="tag">Order</span>
                                    </div>
                                    <p className="tBody">
                                        In a max heap, every parent is{" "}
                                        <span className="mono">&gt;=</span> its
                                        children. This is why the largest
                                        element is always at the root.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Root</span>
                                        <span className="tag">Top</span>
                                    </div>
                                    <p className="tBody">
                                        Root is the top node. In a max heap, the
                                        root stores the maximum element.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Height (h)</span>
                                        <span className="tag">Depth</span>
                                    </div>
                                    <p className="tBody">
                                        Height is number of edges from root to
                                        the deepest node. For a heap with{" "}
                                        <span className="mono">n</span> nodes,
                                        height is about{" "}
                                        <span className="mono">log2(n)</span>,
                                        which is why insert and delete are fast.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                How a max heap is stored in an array
                            </h3>
                            <p className="p">
                                Most heaps are stored in arrays because a
                                complete binary tree maps neatly to indexes.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Array index formulas (0-based)
                                </div>
                                <pre className="code">
                                    {`parent(i) = floor((i - 1) / 2)
left(i)   = 2*i + 1
right(i)  = 2*i + 2`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">Example mapping</div>
                                <pre className="code">
                                    {`Heap array: [50, 30, 40, 10, 5, 20]

Index: 0  1  2  3  4  5
Value: 50 30 40 10 5  20

- 50 is root (index 0)
- children of 30 (index 1) are 10 (index 3) and 5 (index 4)
- children of 40 (index 2) is 20 (index 5)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Operations with explanation</h3>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">Get max (peek)</div>
                                    <p className="pBody">
                                        Peek means read the root without
                                        removing it. In a max heap, this gives
                                        the largest value instantly.
                                    </p>
                                    <pre className="code">
                                        {`max = heap[0]
Time: O(1)`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Insert (push)</div>
                                    <p className="pBody">
                                        Insert means add the new element at the
                                        end, then bubble it up until the heap
                                        property is restored.
                                        <br />
                                        This bubbling up is called{" "}
                                        <span className="mono">
                                            heapify up
                                        </span>{" "}
                                        or <span className="mono">sift up</span>
                                        .
                                    </p>
                                    <pre className="code">
                                        {`Steps:
1) place new value at end
2) while parent < value, swap with parent

Time: O(log n)`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Remove max (extract max)
                                    </div>
                                    <p className="pBody">
                                        Extract max means remove the root.
                                        Replace the root with the last element,
                                        then push it down until heap property is
                                        restored.
                                        <br />
                                        This pushing down is called{" "}
                                        <span className="mono">
                                            heapify down
                                        </span>{" "}
                                        or{" "}
                                        <span className="mono">sift down</span>.
                                    </p>
                                    <pre className="code">
                                        {`Steps:
1) save root (max)
2) move last element to root
3) sift down by swapping with larger child

Time: O(log n)`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">Build heap</div>
                                    <p className="pBody">
                                        Building a heap from an existing array
                                        can be done efficiently by heapifying
                                        from the last parent down to the root.
                                        <br />
                                        This is often called{" "}
                                        <span className="mono">
                                            heapify
                                        </span> or{" "}
                                        <span className="mono">build heap</span>
                                        .
                                    </p>
                                    <pre className="code">
                                        {`Start from i = floor((n/2) - 1) down to 0
heapifyDown(i)

Time: O(n)`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Mini example (step by step)</h3>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Insert 45 into [50, 30, 40, 10, 5, 20]
                                </div>
                                <pre className="code">
                                    {`Start heap: [50, 30, 40, 10, 5, 20]
Insert 45 at end:
[50, 30, 40, 10, 5, 20, 45]

Now compare with parent:
- 45 parent index = floor((6-1)/2)=2 -> parent is 40
- 45 > 40 -> swap

Result:
[50, 30, 45, 10, 5, 20, 40]

Now parent of 45 is 50 -> 45 < 50 stop`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Extract max from [50, 30, 45, 10, 5, 20, 40]
                                </div>
                                <pre className="code">
                                    {`Remove root = 50
Move last element 40 to root:
[40, 30, 45, 10, 5, 20]

Sift down:
- children of 40 are 30 and 45 -> larger child is 45
- 45 > 40 -> swap

[45, 30, 40, 10, 5, 20]
Done`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexities summary</h3>

                            <div className="summaryGrid">
                                <div className="sumCard">
                                    <div className="sumTitle">Peek</div>
                                    <div className="sumVal">O(1)</div>
                                </div>
                                <div className="sumCard">
                                    <div className="sumTitle">Insert</div>
                                    <div className="sumVal">O(log n)</div>
                                </div>
                                <div className="sumCard">
                                    <div className="sumTitle">Extract max</div>
                                    <div className="sumVal">O(log n)</div>
                                </div>
                                <div className="sumCard">
                                    <div className="sumTitle">Build heap</div>
                                    <div className="sumVal">O(n)</div>
                                </div>
                            </div>

                            <div className="finalNote">
                                A max heap is best when you repeatedly need the
                                largest element quickly, like top K problems,
                                scheduling, and priority based processing.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Full forms you should remember
                            </h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">PQ</span> - Priority
                                    Queue
                                </div>
                                <div className="abbr">
                                    <span className="mono">log2(n)</span> - Log
                                    base 2 of n
                                </div>
                                <div className="abbr">
                                    <span className="mono">O</span> - Order of
                                    growth (Big O)
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Next practice tasks</h3>
                            <ul className="list">
                                <li>Implement max heap from scratch in JS.</li>
                                <li>Find top K largest elements.</li>
                                <li>Sort an array using heap (heap sort).</li>
                            </ul>

                            <div className="tools">
                                <span className="tool">
                                    <FiTool /> Implementation
                                </span>
                                <span className="tool">
                                    <FiCpu /> Complexity notes
                                </span>
                                <span className="tool">
                                    <FiCheckCircle /> Test cases
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MaxHeap;
