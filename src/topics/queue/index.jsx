// src/topics/queue/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiInbox,
    FiRepeat,
    FiShuffle,
    FiLayers,
    FiCpu,
    FiCheckCircle,
} from "react-icons/fi";

const QueueTopic = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="queue">
            <div className="top">
                <h2 className="title">Queue</h2>
                <p className="sub">
                    A queue is a linear data structure that follows{" "}
                    <strong>FIFO</strong> - <strong>First In First Out</strong>.
                    The first element added is the first one removed. Queues are
                    used in scheduling, buffering, and graph traversal.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiInbox /> FIFO - First In First Out
                    </span>
                    <span className="pill">
                        <FiRepeat /> Enqueue and Dequeue
                    </span>
                    <span className="pill">
                        <FiCpu /> O(1) ops
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="queue-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Queue - concepts, terms, and examples
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} the full
                                notes
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="queue-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Core idea</h3>
                            <p className="p">
                                Think of a real-life line at a counter. People
                                join at the back and leave from the front.
                                <br />
                                In a queue:
                                <br />- <span className="mono">
                                    enqueue
                                </span>{" "}
                                means add to the back
                                <br />- <span className="mono">
                                    dequeue
                                </span>{" "}
                                means remove from the front
                                <br />- <span className="mono">front</span>{" "}
                                points to the next item to remove
                                <br />- <span className="mono">rear</span>{" "}
                                points to the last inserted item
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: FIFO behavior
                                </div>
                                <pre className="code">
                                    {`Start: []
enqueue(10) -> [10]
enqueue(20) -> [10, 20]
enqueue(30) -> [10, 20, 30]
dequeue()   -> removes 10, remaining [20, 30]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common operations and complexity
                            </h3>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">enqueue(x)</div>
                                    <p className="miniText">
                                        Add item to the back.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">dequeue()</div>
                                    <p className="miniText">
                                        Remove item from the front.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">peek()</div>
                                    <p className="miniText">
                                        Look at the front item without removing.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">isEmpty()</div>
                                    <p className="miniText">
                                        Check whether the queue has elements.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiCheckCircle />
                                </span>
                                <p className="nText">
                                    Implementation detail matters. Using a raw
                                    JS array with{" "}
                                    <span className="mono">shift()</span> can be{" "}
                                    <span className="mono">O(n)</span> because
                                    it shifts elements. A pointer-based queue or
                                    deque avoids that.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Circular Queue</h3>
                            <p className="p">
                                A <strong>circular queue</strong> is a
                                fixed-size queue where the end connects back to
                                the start. It reuses empty spaces created after
                                dequeues. It uses{" "}
                                <span className="mono">front</span> and{" "}
                                <span className="mono">rear</span> indices with{" "}
                                <span className="mono">mod</span> (modulus)
                                math.
                                <br />
                                <br />
                                <strong>mod</strong> means remainder operation.
                                Example: <span className="mono">7 % 5 = 2</span>
                                .
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: circular wrap using mod
                                </div>
                                <pre className="code">
                                    {`Size = 5
rear = (rear + 1) % size

If rear = 4 and you insert:
rear becomes (4 + 1) % 5 = 0 (wraps to start)`}
                                </pre>
                            </div>

                            <ul className="list">
                                <li>
                                    Used in buffers, streaming,
                                    producer-consumer scenarios.
                                </li>
                                <li>
                                    Helps avoid wasted space in fixed arrays.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Deque</h3>
                            <p className="p">
                                A <strong>deque</strong> means{" "}
                                <strong>Double Ended Queue</strong>. It allows
                                insertion and removal at both ends:
                                <br />- push front, pop front
                                <br />- push back, pop back
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">pushFront</div>
                                    <p className="miniText">
                                        Insert at front.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">pushBack</div>
                                    <p className="miniText">
                                        Insert at back.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">popFront</div>
                                    <p className="miniText">
                                        Remove from front.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">popBack</div>
                                    <p className="miniText">
                                        Remove from back.
                                        <br />
                                        Typical time:{" "}
                                        <span className="mono">O(1)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: sliding window using deque
                                </div>
                                <pre className="code">
                                    {`Problem idea: maximum in each window of size k
Approach: maintain a deque of useful indices

Deque stores indices in decreasing order of values.
Front of deque is the max for current window.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Queue in BFS</h3>
                            <p className="p">
                                <strong>BFS</strong> means{" "}
                                <strong>Breadth First Search</strong>. BFS
                                explores level by level, so it naturally uses a
                                queue.
                                <br />
                                BFS is common in shortest path in unweighted
                                graphs and level order traversal in trees.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: BFS level order idea
                                </div>
                                <pre className="code">
                                    {`Queue starts with a node.
Repeat:
- take front node
- add its neighbors to back

This ensures nodes are processed in the order they are discovered.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner pitfalls</h3>
                            <ul className="list">
                                <li>
                                    Using array shift repeatedly can degrade
                                    performance.
                                </li>
                                <li>
                                    Forgetting empty checks before dequeue or
                                    peek.
                                </li>
                                <li>
                                    Off-by-one errors in circular queue index
                                    updates.
                                </li>
                                <li>
                                    In BFS, forgetting to mark visited nodes
                                    causes infinite loops.
                                </li>
                            </ul>

                            <div className="finalNote">
                                When you hear "process in order of arrival" or
                                "level by level", think Queue.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default QueueTopic;
