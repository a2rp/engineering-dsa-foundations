// src/topics/linkedList/merge/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitMerge,
    FiCheckCircle,
    FiCpu,
    FiLink,
} from "react-icons/fi";

const Merge = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper id="linked-list-merge">
            <div className="top">
                <h2 className="title">Merge</h2>
                <p className="sub">
                    Merge means combining two linked lists into one. The most
                    common interview problem is "merge two sorted linked lists"
                    into a single sorted linked list.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitMerge /> Combine two lists
                    </span>
                    <span className="pill">
                        <FiCpu /> Time: O(n + m)
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Stable ordering
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="merge-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLink />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Merge two sorted linked lists
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                terms, steps, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="merge-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What does "merge" mean here</h3>
                            <p className="p">
                                You have two linked lists. Each list is already
                                sorted in increasing order. You need to create
                                one sorted list by taking nodes from both lists.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Input</div>
                                    <p className="miniText">
                                        List A: 1 - 3 - 5
                                        <br />
                                        List B: 2 - 4 - 6
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Output</div>
                                    <p className="miniText">
                                        Merged: 1 - 2 - 3 - 4 - 5 - 6
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Key terms and full forms</h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Node</span>
                                        <span className="tag">Linked List</span>
                                    </div>
                                    <p className="tBody">
                                        A node is a unit that stores{" "}
                                        <span className="mono">value</span> and
                                        a reference to the{" "}
                                        <span className="mono">next</span> node.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Pointer</span>
                                        <span className="tag">Reference</span>
                                    </div>
                                    <p className="tBody">
                                        A pointer is a variable that points to a
                                        node. In JavaScript it is a reference to
                                        an object.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Dummy node</span>
                                        <span className="tag">Technique</span>
                                    </div>
                                    <p className="tBody">
                                        A dummy node is a fake starting node to
                                        simplify linking. It helps avoid special
                                        cases for the head.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Stable</span>
                                        <span className="tag">Ordering</span>
                                    </div>
                                    <p className="tBody">
                                        Stable means if values are equal, you
                                        keep a consistent order. Here, if equal,
                                        taking from List A first keeps it
                                        stable.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How the merge works</h3>
                            <ol className="steps">
                                <li>
                                    Start with two pointers:{" "}
                                    <span className="mono">a</span> at head of
                                    List A, and <span className="mono">b</span>{" "}
                                    at head of List B.
                                </li>
                                <li>
                                    Compare <span className="mono">a.val</span>{" "}
                                    and <span className="mono">b.val</span>.
                                </li>
                                <li>
                                    Attach the smaller node to the result list,
                                    and move that pointer forward.
                                </li>
                                <li>
                                    Continue until one list ends, then attach
                                    the remaining part of the other list.
                                </li>
                            </ol>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Walkthrough example
                                </div>
                                <pre className="code">
                                    {`List A: 1 -> 3 -> 5
List B: 2 -> 4 -> 6

Compare 1 and 2 -> pick 1
Compare 3 and 2 -> pick 2
Compare 3 and 4 -> pick 3
Compare 5 and 4 -> pick 4
Compare 5 and 6 -> pick 5
List A ends -> attach remaining 6

Result: 1 -> 2 -> 3 -> 4 -> 5 -> 6`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Complexity with full explanation
                            </h3>
                            <ul className="list">
                                <li>
                                    <span className="mono">
                                        Time complexity
                                    </span>{" "}
                                    means how runtime grows with input size.
                                    Merge checks each node once.
                                </li>
                                <li>
                                    If List A has{" "}
                                    <span className="mono">n</span> nodes and
                                    List B has <span className="mono">m</span>{" "}
                                    nodes, total checks are about{" "}
                                    <span className="mono">n + m</span>.
                                </li>
                                <li>
                                    So time is{" "}
                                    <span className="mono">O(n + m)</span>.
                                </li>
                                <li>
                                    <span className="mono">
                                        Space complexity
                                    </span>{" "}
                                    means extra memory used. If you reuse nodes
                                    (no new nodes created), extra space is{" "}
                                    <span className="mono">O(1)</span>.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Code example in JavaScript</h3>
                            <p className="p">
                                This merges two sorted linked lists by reusing
                                existing nodes. It uses a dummy node to keep the
                                code simple.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    mergeTwoSortedLists
                                </div>
                                <pre className="code">
                                    {`// Node shape:
// { val: number, next: Node | null }

function mergeTwoSortedLists(headA, headB) {
    const dummy = { val: 0, next: null };
    let tail = dummy;

    let a = headA;
    let b = headB;

    while (a && b) {
        if (a.val <= b.val) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }
        tail = tail.next;
    }

    // attach remaining nodes
    tail.next = a || b;

    return dummy.next;
}`}
                                </pre>
                            </div>

                            <div className="finalNote">
                                Tip: Always test edge cases - one list is empty,
                                both lists are empty, duplicates, and one list
                                is much longer than the other.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Merge;
