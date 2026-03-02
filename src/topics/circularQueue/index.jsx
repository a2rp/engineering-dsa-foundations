// src/topics/circularQueue/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiCpu,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const CircularQueue = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Circular queue",
            sub: "A circular queue uses a fixed-size array in a circular way so enqueue and dequeue stay efficient without shifting elements.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="circular-queue">
            <div className="top">
                <h2 className="title">Circular queue</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat />
                        Ring buffer
                    </span>
                    <span className="pill">
                        <FiCpu />
                        O(1) ops
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        Fixed size
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="circular-queue-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiRepeat />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="circular-queue-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a queue</h3>
                            <p className="p">
                                A <strong>queue</strong> follows{" "}
                                <strong>FIFO</strong> which means{" "}
                                <strong>First In, First Out</strong>.
                                <br />
                                The first element that enters the queue will be
                                the first one removed.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    FIFO example (simple queue)
                                </div>
                                <pre className="code">
                                    {`enqueue(10) -> [10]
enqueue(20) -> [10, 20]
dequeue()   -> returns 10, remaining [20]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Why "circular" is needed</h3>
                            <p className="p">
                                In an array-based queue, if you{" "}
                                <strong>dequeue</strong> from the front, you
                                would normally need to shift all elements left.
                                That shifting costs{" "}
                                <span className="mono">O(n)</span>.
                                <br />A <strong>circular queue</strong> avoids
                                shifting by treating the array like a circle
                                where indices wrap around.
                            </p>

                            <ul className="list">
                                <li>
                                    Works well for fixed-size buffers (network,
                                    audio, logs)
                                </li>
                                <li>
                                    Enqueue and dequeue remain{" "}
                                    <span className="mono">O(1)</span>
                                </li>
                                <li>
                                    Uses a fixed-size array, no extra shifting
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Key terms and full forms</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">FIFO</span>
                                        <span className="tag">Order</span>
                                    </div>
                                    <p className="tBody">
                                        FIFO means First In, First Out. The
                                        earliest inserted item is removed first.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">enqueue</span>
                                        <span className="tag">Add</span>
                                    </div>
                                    <p className="tBody">
                                        Enqueue means insert an item at the rear
                                        of the queue.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">dequeue</span>
                                        <span className="tag">Remove</span>
                                    </div>
                                    <p className="tBody">
                                        Dequeue means remove an item from the
                                        front of the queue.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">front</span>
                                        <span className="tag">Pointer</span>
                                    </div>
                                    <p className="tBody">
                                        Front points to the current first item
                                        to be removed.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">rear</span>
                                        <span className="tag">Pointer</span>
                                    </div>
                                    <p className="tBody">
                                        Rear points to the position where the
                                        next item will be inserted.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">modulo</span>
                                        <span className="tag">Wrap</span>
                                    </div>
                                    <p className="tBody">
                                        Modulo (often written as %) keeps index
                                        inside range by wrapping around.
                                        Example:{" "}
                                        <span className="mono">
                                            (i + 1) % size
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How circular indexing works</h3>
                            <p className="p">
                                We store elements in an array of fixed size.
                                When rear reaches the last index, the next
                                position becomes index 0.
                                <br />
                                This is done using modulo:
                                <br />
                                <span className="mono">
                                    nextIndex = (index + 1) % size
                                </span>
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Wrap example</div>
                                <pre className="code">
                                    {`size = 5
index = 4 (last slot)
next = (4 + 1) % 5 = 0

So we wrap back to 0.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Full walk-through (enqueue, dequeue)
                            </h3>
                            <p className="p">
                                Consider a circular queue of size 5.
                                <br />
                                We track <span className="mono">
                                    front
                                </span>, <span className="mono">rear</span>, and{" "}
                                <span className="mono">count</span>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example with positions
                                </div>
                                <pre className="code">
                                    {`size = 5
front = 0, rear = 0, count = 0

enqueue(10)
arr[rear]=10, rear=(0+1)%5=1, count=1
front=0, rear=1

enqueue(20)
arr[1]=20, rear=2, count=2

dequeue()
take arr[front]=10
front=(0+1)%5=1, count=1
now front=1, rear=2

enqueue(30)
arr[2]=30, rear=3, count=2`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Full implementation example (JavaScript)
                            </h3>
                            <p className="p">
                                Below is a simple fixed-size circular queue
                                implementation using an array. This is the most
                                common interview-style version.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    CircularQueue (fixed size)
                                </div>
                                <pre className="code">
                                    {`class CircularQueue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }

  enqueue(value) {
    if (this.isFull()) return false;

    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.size;
    this.count += 1;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.arr[this.front];
    this.arr[this.front] = undefined;

    this.front = (this.front + 1) % this.size;
    this.count -= 1;
    return value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.front];
  }

  toArray() {
    const out = [];
    for (let i = 0; i < this.count; i++) {
      const idx = (this.front + i) % this.size;
      out.push(this.arr[idx]);
    }
    return out;
  }
}

// Quick demo
const q = new CircularQueue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.dequeue();      // 10
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.toArray();      // [20, 30, 40, 50, 60]`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time and space complexity</h3>
                            <div className="calloutRow">
                                <div className="call">
                                    <div className="cTitle">
                                        Time complexity
                                    </div>
                                    <div className="cBody">
                                        Enqueue:{" "}
                                        <span className="mono">O(1)</span>
                                        <br />
                                        Dequeue:{" "}
                                        <span className="mono">O(1)</span>
                                        <br />
                                        Peek: <span className="mono">O(1)</span>
                                    </div>
                                </div>

                                <div className="call">
                                    <div className="cTitle">
                                        Space complexity
                                    </div>
                                    <div className="cBody">
                                        Array storage:{" "}
                                        <span className="mono">O(n)</span> where
                                        n is the queue size.
                                    </div>
                                </div>
                            </div>

                            <div className="warn">
                                <span className="wIcon">
                                    <FiAlertCircle />
                                </span>
                                <div className="wText">
                                    Common bug: confusing full vs empty when{" "}
                                    <span className="mono">front === rear</span>
                                    . Using <span className="mono">count</span>{" "}
                                    avoids this confusion.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CircularQueue;
