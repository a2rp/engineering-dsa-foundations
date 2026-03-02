// src/topics/recursion/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiCpu,
    FiLayers,
    FiAlertTriangle,
    FiCheckCircle,
    FiCornerDownRight,
} from "react-icons/fi";

const Recursion = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Recursion",
            sub: "Recursion is when a function solves a problem by calling itself on a smaller input. It is powerful for trees, divide and conquer, and problems with repeated structure.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="recursion">
            <div className="top">
                <h2 className="title">Recursion</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Smaller subproblem
                    </span>
                    <span className="pill">
                        <FiCpu /> Call stack
                    </span>
                    <span className="pill">
                        <FiLayers /> Divide and conquer
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="recursion-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiRepeat />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner friendly explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="recursion-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                <strong>Recursion</strong> means a function
                                calls itself. The trick is that each call must
                                move toward a simpler case, and you must define
                                a stopping point.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Base case (stop condition)
                                    </div>
                                    <p className="miniText">
                                        The condition where recursion stops.
                                        Without a base case, you get infinite
                                        calls and the program crashes.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Recursive case
                                    </div>
                                    <p className="miniText">
                                        The part where the function calls itself
                                        on a smaller input.
                                        <br />
                                        Example: f(n) = n * f(n - 1)
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and key terms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">Call stack</span> -
                                    Memory area that stores function calls, one
                                    frame per call
                                </div>
                                <div className="abbr">
                                    <span className="mono">Stack frame</span> -
                                    A single function call record (arguments,
                                    local variables, return address)
                                </div>
                                <div className="abbr">
                                    <span className="mono">Tail recursion</span>{" "}
                                    - Recursion where the recursive call is the
                                    last operation
                                </div>
                                <div className="abbr">
                                    <span className="mono">
                                        Divide and conquer
                                    </span>{" "}
                                    - Break problem into smaller parts, solve,
                                    then combine
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How the call stack behaves</h3>
                            <p className="p">
                                Think of recursion like stacking plates. Each
                                recursive call adds a new plate (a new stack
                                frame). When the base case is reached, plates
                                are removed one by one as results return.
                            </p>

                            <div className="stackBox">
                                <div className="stackTitle">
                                    Example stack growth for factorial(3)
                                </div>
                                <div className="stackLines">
                                    <div className="line">
                                        <FiCornerDownRight /> factorial(3)
                                    </div>
                                    <div className="line">
                                        <FiCornerDownRight /> factorial(2)
                                    </div>
                                    <div className="line">
                                        <FiCornerDownRight /> factorial(1)
                                    </div>
                                    <div className="line">
                                        <FiCornerDownRight /> factorial(0) -
                                        base case
                                    </div>
                                </div>
                                <div className="stackNote">
                                    After base case returns, results come back
                                    upward: factorial(1) -&gt; factorial(2)
                                    -&gt; factorial(3)
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 1 - Factorial</h3>
                            <p className="p">
                                Factorial means product of numbers from 1 to n.
                                It is written as n!
                            </p>

                            <div className="mathRow">
                                <span className="chip">Definition</span>
                                <span className="mathText">
                                    5! = 5 x 4 x 3 x 2 x 1
                                </span>
                            </div>

                            <pre className="code">
                                {`factorial(n)
Base case: n == 0 -> 1
Recursive case: n * factorial(n - 1)

factorial(3)
= 3 * factorial(2)
= 3 * (2 * factorial(1))
= 3 * (2 * (1 * factorial(0)))
= 3 * (2 * (1 * 1))
= 6`}
                            </pre>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        Each call reduces n by 1, total n calls
                                        - <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Space</span>
                                    <span className="value">
                                        Call stack stores n frames -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - Sum of array</h3>
                            <p className="p">
                                Recursion can process arrays by reducing the
                                problem size. Here we sum elements from index i
                                to end.
                            </p>

                            <pre className="code">
                                {`sum(arr, i)
Base case: i == arr.length -> 0
Recursive case: arr[i] + sum(arr, i + 1)

arr = [2, 5, 3]
sum(arr, 0)
= 2 + sum(arr, 1)
= 2 + (5 + sum(arr, 2))
= 2 + (5 + (3 + sum(arr, 3)))
= 2 + 5 + 3 + 0
= 10`}
                            </pre>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Time</span>
                                    <span className="value">
                                        Visits each element once -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Space</span>
                                    <span className="value">
                                        Call stack frames -{" "}
                                        <span className="mono">O(n)</span>
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>

                            <div className="warnGrid">
                                <div className="warnCard">
                                    <div className="wHead">
                                        <span className="wIcon">
                                            <FiAlertTriangle />
                                        </span>
                                        <div className="wTitle">
                                            Missing base case
                                        </div>
                                    </div>
                                    <p className="wBody">
                                        Without a base case, recursion never
                                        stops and causes stack overflow.
                                    </p>
                                </div>

                                <div className="warnCard">
                                    <div className="wHead">
                                        <span className="wIcon">
                                            <FiAlertTriangle />
                                        </span>
                                        <div className="wTitle">
                                            Not reducing the problem
                                        </div>
                                    </div>
                                    <p className="wBody">
                                        You must move toward the base case. If
                                        input stays same, infinite recursion
                                        happens.
                                    </p>
                                </div>

                                <div className="warnCard">
                                    <div className="wHead">
                                        <span className="wIcon">
                                            <FiAlertTriangle />
                                        </span>
                                        <div className="wTitle">
                                            Ignoring space usage
                                        </div>
                                    </div>
                                    <p className="wBody">
                                        Recursion uses extra memory for call
                                        stack. Mention space complexity clearly.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When recursion is a good fit</h3>

                            <div className="fitGrid">
                                <div className="fitCard">
                                    <div className="fHead">
                                        <span className="fIcon ok">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="fTitle">Trees</div>
                                    </div>
                                    <p className="fBody">
                                        Tree traversal naturally uses recursion
                                        because each node has subtrees.
                                    </p>
                                </div>

                                <div className="fitCard">
                                    <div className="fHead">
                                        <span className="fIcon ok">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="fTitle">
                                            Divide and conquer
                                        </div>
                                    </div>
                                    <p className="fBody">
                                        Problems like merge sort and quick sort
                                        break data into parts and recurse.
                                    </p>
                                </div>

                                <div className="fitCard">
                                    <div className="fHead">
                                        <span className="fIcon ok">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="fTitle">
                                            Backtracking
                                        </div>
                                    </div>
                                    <p className="fBody">
                                        Try all possibilities with undo steps,
                                        like subsets, permutations, maze paths.
                                    </p>
                                </div>
                            </div>

                            <div className="finalNote">
                                If recursion depth can become very large, an
                                iterative solution may be safer to avoid stack
                                overflow.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Recursion;
