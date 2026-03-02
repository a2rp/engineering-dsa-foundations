// src/topics/deque/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiArrowLeft,
    FiArrowRight,
    FiLayers,
    FiCheckCircle,
} from "react-icons/fi";

const Deque = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Deque",
            sub: "Deque means Double Ended Queue. It allows insertion and deletion from both ends. This makes it flexible for sliding window, BFS style logic, and monotonic queue patterns.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="deque">
            <div className="top">
                <h2 className="title">Deque</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Double ended
                    </span>
                    <span className="pill">
                        <FiArrowLeft /> Push and pop front
                    </span>
                    <span className="pill">
                        <FiArrowRight /> Push and pop back
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="deque-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                operations, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="deque-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is Deque</h3>
                            <p className="p">
                                <strong>Deque</strong> is short for{" "}
                                <strong>Double Ended Queue</strong>. A normal
                                queue usually allows:
                                <span className="mono"> enqueue</span> at back
                                and <span className="mono">dequeue</span> from
                                front.
                                <br />A deque allows both ends to be used, so
                                you can add or remove from{" "}
                                <strong>front</strong> and <strong>back</strong>
                                .
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Front operations
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">
                                            pushFront(x)
                                        </span>{" "}
                                        adds x to the front.
                                        <br />
                                        <span className="mono">
                                            popFront()
                                        </span>{" "}
                                        removes front item.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Back operations
                                    </div>
                                    <p className="miniText">
                                        <span className="mono">
                                            pushBack(x)
                                        </span>{" "}
                                        adds x to the back.
                                        <br />
                                        <span className="mono">
                                            popBack()
                                        </span>{" "}
                                        removes back item.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Key terms and full forms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">Deque</span> - Double
                                    Ended Queue
                                </div>
                                <div className="abbr">
                                    <span className="mono">FIFO</span> - First
                                    In First Out
                                </div>
                                <div className="abbr">
                                    <span className="mono">LIFO</span> - Last In
                                    First Out
                                </div>
                                <div className="abbr">
                                    <span className="mono">BFS</span> - Breadth
                                    First Search
                                </div>
                            </div>

                            <p className="p">
                                Deque can behave like a queue (FIFO) or like a
                                stack (LIFO) depending on which end you use.
                                That is why deque is a flexible structure.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to use Deque</h3>
                            <ul className="list">
                                <li>
                                    You need fast add and remove from both ends.
                                </li>
                                <li>
                                    You want a queue but also need to remove
                                    from back sometimes.
                                </li>
                                <li>
                                    Sliding window maximum or minimum problems
                                    using a monotonic deque.
                                </li>
                                <li>
                                    BFS like logic where you sometimes push to
                                    front and sometimes to back.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity</h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">pushFront</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Typically{" "}
                                        <span className="mono">O(1)</span> time.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">popFront</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Typically{" "}
                                        <span className="mono">O(1)</span> time.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">pushBack</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Typically{" "}
                                        <span className="mono">O(1)</span> time.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">popBack</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        Typically{" "}
                                        <span className="mono">O(1)</span> time.
                                    </p>
                                </div>
                            </div>

                            <p className="p">
                                Space is <span className="mono">O(n)</span>{" "}
                                because deque stores up to n items.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - using deque like a queue
                            </h3>
                            <p className="p">
                                Here we insert at back and remove from front.
                                This behaves like a standard queue.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Queue style</div>
                                <pre className="code">
                                    {`Deque: []

pushBack(10)  -> [10]
pushBack(20)  -> [10, 20]
pushBack(30)  -> [10, 20, 30]

popFront() -> removes 10 -> [20, 30]
popFront() -> removes 20 -> [30]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 2 - using deque like a stack
                            </h3>
                            <p className="p">
                                Here we insert at back and remove from back.
                                This behaves like a stack.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Stack style</div>
                                <pre className="code">
                                    {`Deque: []

pushBack(5)   -> [5]
pushBack(7)   -> [5, 7]
pushBack(9)   -> [5, 7, 9]

popBack() -> removes 9 -> [5, 7]
popBack() -> removes 7 -> [5]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 3 - sliding window max idea
                            </h3>
                            <p className="p">
                                A common use of deque is to keep indexes of
                                elements in decreasing order so the front always
                                holds the max for the current window. This is
                                called a <strong>monotonic deque</strong>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Sliding window max (concept)
                                </div>
                                <pre className="code">
                                    {`Array: [1, 3, -1, -3, 5, 3, 6, 7], k = 3
We keep indexes in deque, values decreasing.

Window [1,3,-1] max is 3
Window [3,-1,-3] max is 3
Window [-1,-3,5] max is 5
...`}
                                </pre>
                            </div>

                            <div className="finalNote">
                                Key idea: remove smaller elements from the back,
                                and remove out-of-window index from the front.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>
                            <ul className="list">
                                <li>
                                    Forgetting to remove items that are outside
                                    the current window (sliding window case).
                                </li>
                                <li>
                                    Mixing up front and back operations and
                                    breaking FIFO or LIFO behavior.
                                </li>
                                <li>
                                    Using array shift in JavaScript for queue
                                    operations which becomes slow.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">JavaScript note</h3>
                            <p className="p">
                                JavaScript does not have a built-in deque type.
                                For learning, you can simulate using an array,
                                but for performance you should avoid frequent{" "}
                                <span className="mono">shift</span> calls. In
                                real projects, a deque is usually implemented
                                using a circular buffer.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick recap</h3>
                            <ol className="steps">
                                <li>Deque = Double Ended Queue</li>
                                <li>Add and remove from both ends</li>
                                <li>Typical operations are O(1) time</li>
                                <li>
                                    Used in sliding window and BFS style logic
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Deque;
