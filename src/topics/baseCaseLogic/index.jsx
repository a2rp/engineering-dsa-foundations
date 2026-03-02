// src/topics/baseCaseLogic/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiStopCircle,
    FiRepeat,
    FiAlertTriangle,
    FiCpu,
    FiCheckCircle,
} from "react-icons/fi";

const BaseCaseLogic = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Base case logic",
            sub: "Base case is the stopping condition in recursion. Without it, recursion keeps calling forever and the call stack overflows.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="base-case-logic">
            <div className="top">
                <h2 className="title">Base case logic</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiStopCircle /> Stop condition
                    </span>
                    <span className="pill">
                        <FiRepeat /> Repeated self-call
                    </span>
                    <span className="pill">
                        <FiCpu /> Stack safety
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="base-case-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiStopCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                rules and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="base-case-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                <strong>Recursion</strong> means a function
                                calls itself. A <strong>base case</strong> is
                                the condition where the function stops calling
                                itself and returns a direct answer.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Base case</div>
                                    <p className="miniText">
                                        The stop rule. Returns a value without
                                        making another recursive call.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Recursive step
                                    </div>
                                    <p className="miniText">
                                        The repeat rule. Moves the input closer
                                        to the base case.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Why it is required</h3>
                            <div className="calloutRow">
                                <div className="callout good">
                                    <div className="cHead">
                                        <span className="cIcon">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="cTitle">
                                            Guarantees termination
                                        </div>
                                    </div>
                                    <p className="cBody">
                                        If each call reduces the problem size,
                                        base case ensures recursion ends.
                                    </p>
                                </div>

                                <div className="callout bad">
                                    <div className="cHead">
                                        <span className="cIcon">
                                            <FiAlertTriangle />
                                        </span>
                                        <div className="cTitle">
                                            Prevents stack overflow
                                        </div>
                                    </div>
                                    <p className="cBody">
                                        Without base case, calls keep stacking
                                        until memory limit is hit and the
                                        program crashes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Rule of thumb</h3>
                            <ul className="list">
                                <li>
                                    Write the base case first, then the
                                    recursive step.
                                </li>
                                <li>
                                    Ensure the recursive step moves the input
                                    toward the base case.
                                </li>
                                <li>Confirm every path returns a value.</li>
                            </ul>

                            <div className="finalNote">
                                Base case is not optional. It is the exit door.
                                Recursive step is the staircase toward it.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 1 - factorial</h3>
                            <p className="p">
                                <span className="mono">factorial(n)</span> means
                                product of all integers from{" "}
                                <span className="mono">1</span> to{" "}
                                <span className="mono">n</span>.
                            </p>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Base case</span>
                                    <span className="value">
                                        <span className="mono">n === 0</span>{" "}
                                        returns <span className="mono">1</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">
                                        Recursive step
                                    </span>
                                    <span className="value">
                                        <span className="mono">
                                            n * factorial(n - 1)
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`factorial(3)
= 3 * factorial(2)
= 3 * (2 * factorial(1))
= 3 * (2 * (1 * factorial(0)))
= 3 * (2 * (1 * 1))
= 6`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - sum of array</h3>
                            <p className="p">
                                Recursively sum array elements by reducing the
                                index.
                            </p>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Base case</span>
                                    <span className="value">
                                        <span className="mono">i &lt; 0</span>{" "}
                                        returns <span className="mono">0</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">
                                        Recursive step
                                    </span>
                                    <span className="value">
                                        <span className="mono">
                                            arr[i] + sum(i - 1)
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <pre className="code">
                                {`arr = [2, 5, 3]
sum(2) = arr[2] + sum(1)
       = 3 + (arr[1] + sum(0))
       = 3 + (5 + (arr[0] + sum(-1)))
       = 3 + (5 + (2 + 0))
       = 10`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>
                            <div className="mistGrid">
                                <div className="mist">
                                    <div className="mTitle">
                                        Base case never reached
                                    </div>
                                    <p className="mText">
                                        Recursive step does not reduce input
                                        size, so it loops forever.
                                    </p>
                                    <pre className="code small">
                                        {`bad(n) {
  if (n === 0) return 0;
  return bad(n + 1); // moves away from base case
}`}
                                    </pre>
                                </div>

                                <div className="mist">
                                    <div className="mTitle">
                                        Missing return in base case
                                    </div>
                                    <p className="mText">
                                        Base case exists but does not return a
                                        value, causing undefined behavior.
                                    </p>
                                    <pre className="code small">
                                        {`f(n) {
  if (n === 0) { /* forgot return */ }
  return n * f(n - 1);
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">Base case</span> -
                                    stopping condition in recursion
                                </div>
                                <div className="abbr">
                                    <span className="mono">Recursive step</span>{" "}
                                    - the repeated call that reduces the problem
                                </div>
                                <div className="abbr">
                                    <span className="mono">Call stack</span> -
                                    memory area storing active function calls
                                </div>
                                <div className="abbr">
                                    <span className="mono">Stack overflow</span>{" "}
                                    - crash when call stack exceeds memory limit
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BaseCaseLogic;
