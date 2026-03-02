// src/topics/stack/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiChevronDown,
    FiCheckCircle,
    FiCode,
    FiAlertCircle,
    FiCornerDownLeft,
} from "react-icons/fi";

const StackTopic = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Stack",
            sub: "A stack is a simple and powerful data structure used in parsing, undo, recursion, and many classic interview patterns.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="stack">
            <div className="top">
                <h2 className="title">Stack</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers />
                        LIFO - Last In, First Out
                    </span>
                    <span className="pill">
                        <FiCornerDownLeft />
                        Push, pop, peek
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        O(1) operations
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="stack-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Expand stack notes, terms, and examples
                            </div>
                            <div className="accHint">
                                Beginner friendly explanations with patterns
                                like balanced parentheses and monotonic stack
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="stack-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a stack</h3>
                            <p className="p">
                                A <strong>stack</strong> is a data structure
                                where the last item you put in is the first item
                                you take out.
                                <br />
                                This rule is called <strong>LIFO</strong> which
                                means <strong>Last In, First Out</strong>.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Real-life idea
                                    </div>
                                    <p className="miniText">
                                        Think of a stack of plates. You add a
                                        plate on top, and you remove a plate
                                        from the top.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why developers use it
                                    </div>
                                    <p className="miniText">
                                        Stacks model "nested" things: brackets,
                                        function calls, undo history, path
                                        tracking, and more.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Core operations and their meaning
                            </h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">push</span>
                                        <span className="tag">add</span>
                                    </div>
                                    <p className="tBody">
                                        Add an element to the top of the stack.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">pop</span>
                                        <span className="tag">remove</span>
                                    </div>
                                    <p className="tBody">
                                        Remove and return the top element from
                                        the stack.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">peek</span>
                                        <span className="tag">view</span>
                                    </div>
                                    <p className="tBody">
                                        View the top element without removing
                                        it. Sometimes called{" "}
                                        <span className="mono">top</span>.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">isEmpty</span>
                                        <span className="tag">check</span>
                                    </div>
                                    <p className="tBody">
                                        Check if the stack has no elements.
                                        Avoids errors on pop.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: push and pop sequence
                                </div>
                                <pre className="code">{`Start: []

push(10) -> [10]
push(20) -> [10, 20]
peek()   -> 20 (stack stays same)
pop()    -> returns 20, stack becomes [10]
pop()    -> returns 10, stack becomes []`}</pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time and space complexity</h3>
                            <ul className="list">
                                <li>
                                    <span className="mono">push</span> is
                                    usually <span className="mono">O(1)</span>{" "}
                                    time.
                                </li>
                                <li>
                                    <span className="mono">pop</span> is{" "}
                                    <span className="mono">O(1)</span> time.
                                </li>
                                <li>
                                    <span className="mono">peek</span> is{" "}
                                    <span className="mono">O(1)</span> time.
                                </li>
                                <li>
                                    Space is <span className="mono">O(n)</span>{" "}
                                    for storing <span className="mono">n</span>{" "}
                                    elements.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Most stack problems are about maintaining the
                                correct "top" meaning, not about the data
                                structure itself.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Pattern 1 - balanced parentheses
                            </h3>
                            <p className="p">
                                Classic use case: check if brackets are
                                balanced. You push opening brackets, and when
                                you see a closing bracket, you pop and match.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: "({[]})" is valid
                                </div>
                                <pre className="code">{`Input: "({[]})"

Read '(' -> push '('
Read '{' -> push '{'
Read '[' -> push '['
Read ']' -> pop '[' and match ok
Read '}' -> pop '{' and match ok
Read ')' -> pop '(' and match ok

Stack ends empty -> valid`}</pre>
                            </div>

                            <div className="warning">
                                <span className="wIcon">
                                    <FiAlertCircle />
                                </span>
                                <div className="wText">
                                    If you see a closing bracket but the stack
                                    is empty, the string is invalid.
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Pattern 2 - monotonic stack</h3>
                            <p className="p">
                                A <strong>monotonic stack</strong> is a stack
                                that stays in a single order, increasing or
                                decreasing. This helps solve "next greater" and
                                "previous smaller" type problems efficiently.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Monotonic increasing
                                    </div>
                                    <p className="miniText">
                                        Top is the largest. Stack values go up
                                        as you go deeper. Useful for next
                                        smaller element.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Monotonic decreasing
                                    </div>
                                    <p className="miniText">
                                        Top is the smallest. Stack values go
                                        down as you go deeper. Useful for next
                                        greater element.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: Next Greater Element (NGE)
                                </div>
                                <pre className="code">{`NGE means: for each element, find the next element to its right that is bigger.
Full form: NGE - Next Greater Element

Array: [2, 1, 2, 4, 3]
Answer: [4, 2, 4, -1, -1]

Idea:
Use a monotonic decreasing stack of indices.
When current element is bigger than stack top element, pop and set its NGE to current.`}</pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Common abbreviations with full forms
                            </h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">LIFO</span> - Last
                                    In, First Out
                                </div>
                                <div className="abbr">
                                    <span className="mono">RPN</span> - Reverse
                                    Polish Notation
                                </div>
                                <div className="abbr">
                                    <span className="mono">DFS</span> - Depth
                                    First Search
                                </div>
                                <div className="abbr">
                                    <span className="mono">NGE</span> - Next
                                    Greater Element
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Simple JavaScript implementation
                            </h3>
                            <p className="p">
                                In JavaScript, an array can behave like a stack
                                using <span className="mono">push</span> and{" "}
                                <span className="mono">pop</span>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Code example (array as stack)
                                </div>
                                <pre className="code">{`const stack = [];

stack.push(10);
stack.push(20);

const top = stack[stack.length - 1]; // peek -> 20
const removed = stack.pop();         // pop -> 20

const isEmpty = stack.length === 0;`}</pre>
                            </div>

                            <div className="finalNote">
                                Rule: Always guard pop and peek when stack can
                                be empty.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Mini checklist for stack questions
                            </h3>
                            <ol className="steps">
                                <li>
                                    Decide what the stack stores: values or
                                    indices.
                                </li>
                                <li>Define the meaning of top clearly.</li>
                                <li>Write push and pop rules.</li>
                                <li>Handle empty stack cases.</li>
                                <li>Write time and space complexity.</li>
                            </ol>

                            <div className="hintBar">
                                <span className="hIcon">
                                    <FiCode />
                                </span>
                                <span className="hText">
                                    Most stack patterns become easy when you
                                    store indices and not values.
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StackTopic;
