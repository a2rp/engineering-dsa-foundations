// src/topics/linkedList/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiRepeat,
    FiLink,
    FiCheckCircle,
    FiAlertTriangle,
    FiCpu,
} from "react-icons/fi";

const LinkedList = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Linked List",
            sub: "A linked list stores data as connected nodes. It is great when you need flexible inserts and deletes without shifting elements like arrays.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="linked-list">
            <div className="top">
                <h2 className="title">Linked List</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLink /> Nodes + pointers
                    </span>
                    <span className="pill">
                        <FiGitBranch /> Flexible insert delete
                    </span>
                    <span className="pill">
                        <FiCpu /> Pointer logic
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="linked-list-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLink />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                terms, and patterns
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="linked-list-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Core idea</h3>
                            <p className="p">
                                A linked list is a chain of nodes. Each{" "}
                                <strong>node</strong> stores:
                            </p>

                            <ul className="list">
                                <li>
                                    <span className="mono">value</span> - the
                                    data
                                </li>
                                <li>
                                    <span className="mono">next</span> - a
                                    reference (pointer) to the next node
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">Visualization</div>
                                <pre className="code">
                                    {`head
 |
 v
[10] -> [20] -> [30] -> null

Each box is a node.
Arrow is the next reference.
null means the chain ends.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms and meanings</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Node</span>
                                        <span className="tag">Structure</span>
                                    </div>
                                    <p className="tBody">
                                        A small object that holds{" "}
                                        <span className="mono">value</span> and
                                        links to other nodes.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Head</span>
                                        <span className="tag">Start</span>
                                    </div>
                                    <p className="tBody">
                                        The first node of the list. The entry
                                        point of the chain.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Tail</span>
                                        <span className="tag">End</span>
                                    </div>
                                    <p className="tBody">
                                        The last node of the list. Its{" "}
                                        <span className="mono">next</span> is{" "}
                                        <span className="mono">null</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Pointer</span>
                                        <span className="tag">Reference</span>
                                    </div>
                                    <p className="tBody">
                                        A reference that points to another node.
                                        In JavaScript you can think of it as an
                                        object reference.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">null</span>
                                        <span className="tag">End</span>
                                    </div>
                                    <p className="tBody">
                                        A special value meaning "nothing here".
                                        Used to mark the end of a list.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Traversal</span>
                                        <span className="tag">Walk</span>
                                    </div>
                                    <p className="tBody">
                                        Moving node by node using{" "}
                                        <span className="mono">next</span>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Types of linked lists</h3>

                            <div className="typeGrid">
                                <div className="typeCard">
                                    <div className="typeTitle">
                                        Singly linked list
                                    </div>
                                    <p className="typeText">
                                        Each node has only{" "}
                                        <span className="mono">next</span>.
                                        Movement is forward only.
                                    </p>
                                    <pre className="code">
                                        {`[A] -> [B] -> [C] -> null`}
                                    </pre>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        Doubly linked list
                                    </div>
                                    <p className="typeText">
                                        Each node has{" "}
                                        <span className="mono">next</span> and{" "}
                                        <span className="mono">prev</span>
                                        (previous). Movement both directions.
                                    </p>
                                    <pre className="code">
                                        {`null <- [A] <-> [B] <-> [C] -> null`}
                                    </pre>
                                </div>

                                <div className="typeCard">
                                    <div className="typeTitle">
                                        Circular linked list
                                    </div>
                                    <p className="typeText">
                                        The tail points back to the head, so
                                        there is no{" "}
                                        <span className="mono">null</span> end.
                                    </p>
                                    <pre className="code">
                                        {`[A] -> [B] -> [C]
 ^             |
 |_____________|`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Where it is useful</h3>
                            <ul className="list">
                                <li>
                                    Frequent inserts and deletes in the middle
                                    of a sequence.
                                </li>
                                <li>
                                    Implementing stacks and queues internally.
                                </li>
                                <li>
                                    Memory allocation patterns where contiguous
                                    array memory is not ideal.
                                </li>
                            </ul>

                            <div className="compare">
                                <div className="compareRow">
                                    <span className="label">Array insert</span>
                                    <span className="value">
                                        Often needs shifting -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="compareRow">
                                    <span className="label">
                                        Linked list insert
                                    </span>
                                    <span className="value">
                                        After you have the node reference -{" "}
                                        <span className="mono">O(1)</span>
                                    </span>
                                </div>
                                <div className="compareRow">
                                    <span className="label">
                                        Access by index
                                    </span>
                                    <span className="value">
                                        Linked list needs traversal -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Must know patterns</h3>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">
                                        Reverse a linked list
                                    </div>
                                    <p className="pBody">
                                        Reversing means flipping the direction
                                        of pointers. You keep three references:
                                        <span className="mono">
                                            {" "}
                                            prev
                                        </span>,{" "}
                                        <span className="mono">
                                            {" "}
                                            curr
                                        </span>,{" "}
                                        <span className="mono"> next</span>.
                                    </p>
                                    <pre className="code">
                                        {`Before:
[10] -> [20] -> [30] -> null

Steps idea:
prev = null
curr = 10
next = 20
flip curr.next to prev

After:
[30] -> [20] -> [10] -> null`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Detect cycle (Floyd cycle detection)
                                    </div>
                                    <p className="pBody">
                                        Floyd cycle detection uses two pointers:
                                        <span className="mono"> slow</span>{" "}
                                        moves 1 step,{" "}
                                        <span className="mono"> fast</span>{" "}
                                        moves 2 steps. If they meet, a cycle
                                        exists.
                                    </p>
                                    <pre className="code">
                                        {`slow: 1 step
fast: 2 steps

If cycle:
fast will eventually catch slow

If no cycle:
fast hits null`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Merge two sorted linked lists
                                    </div>
                                    <p className="pBody">
                                        Use two pointers, pick the smaller node
                                        each time, and build a new merged chain.
                                    </p>
                                    <pre className="code">
                                        {`List A: 1 -> 3 -> 5 -> null
List B: 2 -> 4 -> 6 -> null

Merged:
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity notes</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">O(1)</span> -
                                    Constant time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n)</span> - Linear
                                    time
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - Number of
                                    nodes
                                </div>
                                <div className="abbr">
                                    <span className="mono">Floyd</span> - Floyd
                                    cycle detection algorithm name
                                </div>
                            </div>

                            <div className="finalNote">
                                A linked list feels simple, but most mistakes
                                happen due to pointer updates in the wrong
                                order. Always store{" "}
                                <span className="mono">next</span> before you
                                change links.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick mental checklist</h3>
                            <ol className="steps">
                                <li>
                                    Is head null or single node case handled
                                </li>
                                <li>
                                    Did you store{" "}
                                    <span className="mono">next</span> before
                                    changing{" "}
                                    <span className="mono">curr.next</span>
                                </li>
                                <li>
                                    Are you updating{" "}
                                    <span className="mono">prev</span>,{" "}
                                    <span className="mono">curr</span> correctly
                                </li>
                                <li>
                                    For cycle problems, check{" "}
                                    <span className="mono">fast</span> and{" "}
                                    <span className="mono">fast.next</span>
                                </li>
                            </ol>

                            <div className="warnLine">
                                <span className="wIcon">
                                    <FiAlertTriangle />
                                </span>
                                <span className="wText">
                                    Never lose the remaining list. Always keep a
                                    safe reference to{" "}
                                    <span className="mono">next</span>.
                                </span>
                            </div>

                            <div className="okLine">
                                <span className="wIcon ok">
                                    <FiCheckCircle />
                                </span>
                                <span className="wText">
                                    If pointer order is correct, linked list
                                    questions become very predictable.
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default LinkedList;
