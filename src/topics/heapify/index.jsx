// src/topics/heapify/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiCheckCircle,
    FiLayers,
    FiZap,
} from "react-icons/fi";

const Heapify = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Heapify",
            sub: "Heapify is the process of turning an array into a Heap. You use it to build a Heap fast, and to fix a Heap after changes.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="heapify">
            <div className="top">
                <h2 className="title">Heapify</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> Build heap from array
                    </span>
                    <span className="pill">
                        <FiCpu /> Fix heap property
                    </span>
                    <span className="pill">
                        <FiZap /> Common in priority queue
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="heapify-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                {content.title} - overview with examples
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} heapify
                                explanation, terms, and code
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="heapify-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a Heap</h3>
                            <p className="p">
                                A <strong>Heap</strong> is a tree-like structure
                                stored in an array that follows the{" "}
                                <strong>heap property</strong>.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Min Heap</div>
                                    <p className="miniText">
                                        Parent value is smaller than or equal to
                                        its children.
                                        <br />
                                        Root is the minimum element.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Max Heap</div>
                                    <p className="miniText">
                                        Parent value is greater than or equal to
                                        its children.
                                        <br />
                                        Root is the maximum element.
                                    </p>
                                </div>
                            </div>

                            <div className="note">
                                <span className="mono">PQ</span> means{" "}
                                <strong>Priority Queue</strong>. A priority
                                queue is commonly implemented using a heap.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Array representation</h3>
                            <p className="p">
                                A heap is usually stored in an array. For index{" "}
                                <span className="mono">i</span>:
                            </p>

                            <div className="formulaGrid">
                                <div className="formula">
                                    <div className="fTitle">Left child</div>
                                    <div className="fVal">
                                        <span className="mono">2 * i + 1</span>
                                    </div>
                                </div>
                                <div className="formula">
                                    <div className="fTitle">Right child</div>
                                    <div className="fVal">
                                        <span className="mono">2 * i + 2</span>
                                    </div>
                                </div>
                                <div className="formula">
                                    <div className="fTitle">Parent</div>
                                    <div className="fVal">
                                        <span className="mono">
                                            Math.floor((i - 1) / 2)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example mapping (0-based index)
                                </div>
                                <pre className="code">
                                    {`Array indexes:   0   1   2   3   4   5   6
Values:           a   b   c   d   e   f   g

Tree:
          a (0)
       /        \
    b (1)      c (2)
   /   \      /   \
 d(3) e(4)  f(5) g(6)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">What does Heapify mean</h3>
                            <p className="p">
                                <strong>Heapify</strong> means: fix the heap
                                property at a node assuming its children are
                                already heaps.
                            </p>

                            <ul className="list">
                                <li>
                                    Heapify down is used when a node may be too
                                    large (min heap) or too small (max heap)
                                    compared to its children.
                                </li>
                                <li>
                                    Heapify up is used when a node may be too
                                    small (min heap) or too large (max heap)
                                    compared to its parent.
                                </li>
                            </ul>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Heapify down
                                    </div>
                                    <p className="miniText">
                                        Compare with children, swap with the
                                        correct child, continue down.
                                        <br />
                                        Used after removing root.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Heapify up</div>
                                    <p className="miniText">
                                        Compare with parent, swap if needed,
                                        continue up.
                                        <br />
                                        Used after inserting a new element.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Build heap from an array (bottom-up)
                            </h3>
                            <p className="p">
                                Building a heap from an array is usually done
                                using bottom-up heapify. Start from the last
                                non-leaf node and heapify down.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Why start from last non-leaf
                                </div>
                                <pre className="code">
                                    {`For n elements (0..n-1):
Last index = n - 1
Parent of last index = floor((n - 2) / 2)

All indexes > floor((n - 2) / 2) are leaf nodes.
Leaf nodes already satisfy heap property by themselves.`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Complexity (important)
                                </div>
                                <pre className="code">
                                    {`Build heap (bottom-up heapify):
Time: O(n) for building from an array
Space: O(1) extra (in-place)

Heapify down single node:
Time: O(log n) in worst case`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Beginner example (min heap heapify down)
                            </h3>
                            <p className="p">
                                Suppose we want a min heap. If a parent is
                                bigger than a child, we swap with the smaller
                                child.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example step (min heap)
                                </div>
                                <pre className="code">
                                    {`Array: [9, 3, 7, 6, 5]
At index 0 value 9
Children: index 1 value 3, index 2 value 7
Swap 9 with smaller child 3

After swap: [3, 9, 7, 6, 5]
Now heapify down index 1 value 9
Children: index 3 value 6, index 4 value 5
Swap 9 with smaller child 5

Result: [3, 5, 7, 6, 9] (min heap)`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">JavaScript implementation</h3>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Heapify down (min heap)
                                </div>
                                <pre className="code">
                                    {`// Heapify down fixes heap property for index i
// Assumes subtrees are already heaps
const heapifyDownMin = (arr, i, n = arr.length) => {
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    let smallest = i;

    if (left < n && arr[left] < arr[smallest]) smallest = left;
    if (right < n && arr[right] < arr[smallest]) smallest = right;

    if (smallest === i) break;

    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    i = smallest;
  }
};`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Build min heap from array
                                </div>
                                <pre className="code">
                                    {`const buildMinHeap = (arr) => {
  const n = arr.length;
  // last non-leaf index
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
    heapifyDownMin(arr, i, n);
  }
  return arr;
};

// Example:
const a = [9, 3, 7, 6, 5];
buildMinHeap(a);
// a becomes: [3, 5, 7, 6, 9]`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Heapify up (min heap)
                                </div>
                                <pre className="code">
                                    {`const heapifyUpMin = (arr, i) => {
  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (arr[parent] <= arr[i]) break;

    [arr[parent], arr[i]] = [arr[i], arr[parent]];
    i = parent;
  }
};`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common uses</h3>
                            <ul className="list">
                                <li>Top K elements, Kth smallest or largest</li>
                                <li>
                                    Scheduling problems, always pick next best
                                    candidate
                                </li>
                                <li>
                                    Dijkstra algorithm uses a priority queue
                                    (often a min heap)
                                </li>
                            </ul>

                            <div className="finalNote">
                                Remember: heapify is the operation that keeps
                                the heap property true after a change.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Heapify;
