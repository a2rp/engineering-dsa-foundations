// src/topics/detectCycle/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLink,
    FiRefreshCw,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const DetectCycle = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Detect cycle in linked list",
            sub: "Learn how to detect a loop in a singly linked list using Floyd's Cycle Detection algorithm. Includes beginner explanation, terms, and examples.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="detect-cycle">
            <div className="top">
                <h2 className="title">Detect cycle</h2>
                <p className="sub">{meta.sub}</p>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="detect-cycle-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLink />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} - full
                                explanation, terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="detect-cycle-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a cycle</h3>
                            <p className="p">
                                A <strong>cycle</strong> (also called a{" "}
                                <strong>loop</strong>) in a linked list means
                                some node points back to an earlier node instead
                                of pointing to{" "}
                                <span className="mono">null</span>. Because of
                                this, traversal never ends.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Singly Linked List
                                    </div>
                                    <p className="miniText">
                                        A list where each node has{" "}
                                        <span className="mono">value</span> and{" "}
                                        <span className="mono">next</span>.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Cycle</div>
                                    <p className="miniText">
                                        A node's{" "}
                                        <span className="mono">next</span>{" "}
                                        points to a previous node, creating a
                                        loop.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example - cycle exists
                                </div>
                                <pre className="code">
                                    {`1 -> 2 -> 3 -> 4 -> 5
          ^         |
          |         v
          8 <- 7 <- 6

Here, node 6 points back to node 3, so traversal loops forever.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                The standard method - Floyd's Cycle Detection
                            </h3>
                            <p className="p">
                                The most common solution is{" "}
                                <strong>
                                    Floyd's Cycle Detection algorithm
                                </strong>
                                , also known as the{" "}
                                <strong>tortoise and hare</strong> method.
                            </p>

                            <div className="callout">
                                <div className="calloutLeft">
                                    <span className="bIcon">
                                        <FiRefreshCw />
                                    </span>
                                    <div className="calloutText">
                                        <div className="bTitle">Core idea</div>
                                        <div className="bSub">
                                            Use two pointers:
                                            <br />-{" "}
                                            <span className="mono">
                                                slow
                                            </span>{" "}
                                            moves 1 step
                                            <br />-{" "}
                                            <span className="mono">
                                                fast
                                            </span>{" "}
                                            moves 2 steps
                                            <br />
                                            If there is a cycle, fast will
                                            eventually catch slow.
                                        </div>
                                    </div>
                                </div>

                                <div className="calloutRight">
                                    <span className="chip">
                                        <FiCheckCircle /> O(n) time
                                    </span>
                                    <span className="chip">
                                        <FiCheckCircle /> O(1) space
                                    </span>
                                </div>
                            </div>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">O(n)</span>
                                        <span className="tag">Time</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">n</span> means
                                        number of nodes. Each pointer advances
                                        through nodes, so work is linear.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">O(1)</span>
                                        <span className="tag">Space</span>
                                    </div>
                                    <p className="tBody">
                                        Only a constant number of pointers are
                                        used, no extra arrays or sets.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Step by step example</h3>
                            <p className="p">
                                Suppose we have:
                                <br />
                                <span className="mono">
                                    1 - 2 - 3 - 4 - 5 - 6 - 3
                                </span>{" "}
                                (cycle starts at 3)
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Pointer movement</div>
                                <pre className="code">
                                    {`Start:
slow = 1
fast = 1

Step 1:
slow = 2 (1 step)
fast = 3 (2 steps)

Step 2:
slow = 3
fast = 5

Step 3:
slow = 4
fast = 3 (fast enters cycle and loops)

Step 4:
slow = 5
fast = 5

They meet -> cycle exists.`}
                                </pre>
                            </div>

                            <div className="warn">
                                <span className="wIcon">
                                    <FiAlertTriangle />
                                </span>
                                <div className="wText">
                                    Meeting point is not necessarily where the
                                    cycle starts. It only proves a cycle exists.
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Code example in JavaScript</h3>
                            <p className="p">
                                Assumption: each node is like:
                                <br />
                                <span className="mono">
                                    {"{ value: any, next: Node | null }"}
                                </span>
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Floyd's cycle detection
                                </div>
                                <pre className="code">
                                    {`function hasCycle(head) {
  // empty list or single node cannot form a cycle (unless it points to itself)
  if (!head) return false;

  let slow = head;
  let fast = head;

  // fast moves 2 steps, slow moves 1 step
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // if they meet, there is a cycle
    if (slow === fast) return true;
  }

  // fast hit null, so no cycle
  return false;
}`}
                                </pre>
                            </div>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why fast catches slow
                                    </div>
                                    <p className="miniText">
                                        Inside a cycle, fast moves 1 extra step
                                        relative to slow each loop, so the gap
                                        becomes 0 eventually.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        When to use this
                                    </div>
                                    <p className="miniText">
                                        Any time you suspect loops in pointer
                                        based structures like linked lists.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common edge cases</h3>
                            <ul className="list">
                                <li>
                                    Empty list -{" "}
                                    <span className="mono">head = null</span>
                                </li>
                                <li>
                                    One node, no loop -{" "}
                                    <span className="mono">
                                        head.next = null
                                    </span>
                                </li>
                                <li>
                                    One node, self loop -{" "}
                                    <span className="mono">
                                        head.next = head
                                    </span>
                                </li>
                                <li>
                                    Large list - avoid recursion here, iterative
                                    is safer
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DetectCycle;
