// src/topics/callStack/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiLayers,
    FiCornerDownRight,
    FiRotateCcw,
    FiFileText,
} from "react-icons/fi";

const CallStack = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="call-stack">
            <div className="top">
                <h2 className="title">Call stack</h2>
                <p className="sub">
                    The call stack is how a program keeps track of active
                    function calls. It explains why recursion works, why some
                    bugs happen, and why stack overflow occurs.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> Function tracking
                    </span>
                    <span className="pill">
                        <FiCpu /> Execution order
                    </span>
                    <span className="pill">
                        <FiRotateCcw /> Recursion mental model
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="call-stack-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div className="accText">
                            <div className="accTitle">Call stack overview</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                terms and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="call-stack-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                <strong>Call stack</strong> is a stack data
                                structure used by a program runtime to manage
                                function calls.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Stack</span>
                                        <span className="tag">LIFO</span>
                                    </div>
                                    <p className="tBody">
                                        A stack works on{" "}
                                        <span className="mono">LIFO</span>,
                                        which means{" "}
                                        <strong>Last In, First Out</strong>. The
                                        last function called is the first to
                                        return.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Stack frame
                                        </span>
                                        <span className="tag">Memory</span>
                                    </div>
                                    <p className="tBody">
                                        A stack frame is a block of memory for a
                                        single function call. It typically holds
                                        parameters, local variables, and the
                                        return address.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Push</span>
                                        <span className="tag">Enter</span>
                                    </div>
                                    <p className="tBody">
                                        When a function starts, a new frame is
                                        <strong> pushed</strong> onto the call
                                        stack.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Pop</span>
                                        <span className="tag">Return</span>
                                    </div>
                                    <p className="tBody">
                                        When a function finishes, its frame is
                                        <strong> popped</strong> from the stack,
                                        and execution goes back to the caller.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Simple example</h3>
                            <p className="p">
                                Three functions call each other. The stack grows
                                as calls happen, and shrinks as returns happen.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example - nested calls
                                </div>
                                <pre className="code">
                                    {`function a() { b(); }
function b() { c(); }
function c() { return; }

a();`}
                                </pre>
                            </div>

                            <div className="flowGrid">
                                <div className="flowCard">
                                    <div className="flowTitle">Call order</div>
                                    <div className="flowLine">
                                        <FiCornerDownRight /> a() calls b()
                                    </div>
                                    <div className="flowLine">
                                        <FiCornerDownRight /> b() calls c()
                                    </div>
                                    <div className="flowLine">
                                        <FiCornerDownRight /> c() returns
                                    </div>
                                    <div className="flowLine">
                                        <FiCornerDownRight /> b() returns
                                    </div>
                                    <div className="flowLine">
                                        <FiCornerDownRight /> a() returns
                                    </div>
                                </div>

                                <div className="flowCard">
                                    <div className="flowTitle">
                                        Stack view (top at top)
                                    </div>
                                    <pre className="code">
                                        {`Start:
[ ]

After a():
[ a ]

After b():
[ b ]
[ a ]

After c():
[ c ]
[ b ]
[ a ]

Return from c():
[ b ]
[ a ]

Return from b():
[ a ]

Return from a():
[ ]`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Recursion and the call stack</h3>
                            <p className="p">
                                Recursion works because each call gets its own
                                stack frame. The base case stops new frames from
                                being added forever.
                            </p>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Example - factorial
                                    </div>
                                    <p className="p">
                                        Factorial is often written as{" "}
                                        <span className="mono">n!</span>. It
                                        means multiply numbers from{" "}
                                        <span className="mono">1..n</span>.
                                    </p>
                                    <pre className="code">
                                        {`factorial(3)
= 3 * factorial(2)
= 3 * (2 * factorial(1))
= 3 * (2 * (1 * factorial(0)))
factorial(0) = 1`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        Call stack idea
                                    </div>
                                    <p className="p">
                                        Each recursive call pushes a frame. When
                                        the base case returns, frames pop and
                                        the multiplications complete in reverse
                                        order.
                                    </p>
                                    <pre className="code">
                                        {`Top
factorial(0) returns 1
factorial(1) returns 1 * 1
factorial(2) returns 2 * 1
factorial(3) returns 3 * 2
Bottom`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Stack overflow</h3>
                            <p className="p">
                                A <strong>stack overflow</strong> happens when
                                too many frames are pushed and the stack runs
                                out of space. Common reasons are missing base
                                case in recursion or extremely deep recursion.
                            </p>

                            <div className="note">
                                <span className="nIcon">
                                    <FiFileText />
                                </span>
                                <p className="nText">
                                    In practice, if recursion depth can get very
                                    large, use an iterative approach or manage
                                    your own stack data structure.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms and full forms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">LIFO</span> - Last
                                    In, First Out
                                </div>
                                <div className="abbr">
                                    <span className="mono">CPU</span> - Central
                                    Processing Unit
                                </div>
                                <div className="abbr">
                                    <span className="mono">Frame</span> - A
                                    function call memory record
                                </div>
                                <div className="abbr">
                                    <span className="mono">Stack overflow</span>{" "}
                                    - Too many call frames
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick checklist</h3>
                            <ol className="steps">
                                <li>Identify the base case for recursion.</li>
                                <li>
                                    Track what each frame stores (inputs and
                                    locals).
                                </li>
                                <li>Remember LIFO: last call returns first.</li>
                                <li>
                                    If depth is huge, prefer iterative or custom
                                    stack.
                                </li>
                            </ol>

                            <div className="finalNote">
                                The call stack is the hidden engine behind
                                function execution. If you can draw it, most
                                recursion problems become easier.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CallStack;
