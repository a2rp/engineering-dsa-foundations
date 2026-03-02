// src/topics/tailRecursion/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCornerDownRight,
    FiCpu,
    FiLayers,
    FiCheckCircle,
    FiActivity,
} from "react-icons/fi";

const TailRecursion = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Tail recursion",
            sub: "Tail recursion is a recursion style where the recursive call is the last operation. The function does not need to do extra work after the call returns.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="tail-recursion">
            <div className="top">
                <h2 className="title">Tail recursion</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCpu /> Call stack behavior
                    </span>
                    <span className="pill">
                        <FiLayers /> No extra work after call
                    </span>
                    <span className="pill">
                        <FiActivity /> Convert to loop easily
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="tail-recursion-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCornerDownRight />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                meaning, examples, and conversion
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="tail-recursion-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                In <strong>tail recursion</strong>, the
                                recursive call happens at the end of the
                                function. After that call, the current function
                                has nothing left to compute.
                            </p>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">
                                        Tail recursion
                                    </span>
                                    <span className="value">
                                        Recursive call is last statement, no
                                        pending operations after it.
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">
                                        Non-tail recursion
                                    </span>
                                    <span className="value">
                                        Work remains after returning, like
                                        multiplying or adding.
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Example 1 - Factorial (non-tail vs tail)
                            </h3>

                            <div className="twoCol">
                                <div className="col">
                                    <div className="colTitle">
                                        Non-tail factorial
                                    </div>
                                    <p className="p">
                                        Multiplication happens after the call
                                        returns, so each stack frame keeps
                                        pending work.
                                    </p>
                                    <pre className="code">
                                        {`// factorial(n) = n * factorial(n - 1)
function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1); // not tail recursion
}

// fact(4)
// = 4 * fact(3)
// = 4 * (3 * fact(2))
// = 4 * (3 * (2 * fact(1)))
// = 4 * (3 * (2 * (1 * fact(0))))
// = 24`}
                                    </pre>
                                </div>

                                <div className="col">
                                    <div className="colTitle">
                                        Tail factorial
                                    </div>
                                    <p className="p">
                                        All the work is carried forward in an
                                        accumulator. The recursive call becomes
                                        the last operation.
                                    </p>
                                    <pre className="code">
                                        {`// accumulator carries the result so far
function factTail(n, acc = 1) {
  if (n === 0) return acc;
  return factTail(n - 1, acc * n); // tail recursion
}

// factTail(4, 1)
// -> factTail(3, 4)
// -> factTail(2, 12)
// -> factTail(1, 24)
// -> factTail(0, 24)
// -> 24`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Example 2 - Fibonacci</h3>
                            <p className="p">
                                Classic Fibonacci recursion is non-tail because
                                it does extra addition after returning. Tail
                                version uses two accumulators.
                            </p>

                            <div className="twoCol">
                                <div className="col">
                                    <div className="colTitle">
                                        Non-tail fibonacci
                                    </div>
                                    <pre className="code">
                                        {`function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // not tail recursion
}`}
                                    </pre>
                                </div>

                                <div className="col">
                                    <div className="colTitle">
                                        Tail fibonacci
                                    </div>
                                    <pre className="code">
                                        {`function fibTail(n, a = 0, b = 1) {
  if (n === 0) return a;
  return fibTail(n - 1, b, a + b); // tail recursion
}

// fibTail(6)
// returns 8`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Why it matters</h3>
                            <ul className="list">
                                <li>
                                    Tail recursion can be converted to a loop
                                    directly because state is explicit.
                                </li>
                                <li>
                                    In some languages, compilers can apply
                                    <span className="mono">TCO</span> which is
                                    <span className="mono">
                                        Tail Call Optimization
                                    </span>
                                    to reuse stack frames.
                                </li>
                                <li>
                                    In JavaScript, tail call optimization is not
                                    reliably available across engines, so deep
                                    recursion can still cause stack overflow.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Practical rule: use tail recursion style when it
                                makes the state clear. For very deep calls, a
                                loop is usually safer in JavaScript.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Convert tail recursion to loop
                            </h3>
                            <p className="p">
                                Tail recursion keeps state as parameters. The
                                same state can be kept as variables in a loop.
                            </p>

                            <pre className="code">
                                {`// tail recursion
function factTail(n, acc = 1) {
  if (n === 0) return acc;
  return factTail(n - 1, acc * n);
}

// loop version
function factLoop(n) {
  let acc = 1;
  while (n !== 0) {
    acc = acc * n;
    n = n - 1;
  }
  return acc;
}`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms and full forms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">TCO</span> - Tail
                                    Call Optimization
                                </div>
                                <div className="abbr">
                                    <span className="mono">Acc</span> -
                                    Accumulator
                                </div>
                                <div className="abbr">
                                    <span className="mono">Call stack</span> -
                                    Stack of active function calls
                                </div>
                                <div className="abbr">
                                    <span className="mono">Stack overflow</span>
                                    - Stack memory limit exceeded
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick check</h3>
                            <div className="miniList">
                                <div className="row">
                                    <span className="label">Tail</span>
                                    <span className="value">
                                        <span className="mono">
                                            return f(...)
                                        </span>{" "}
                                        and nothing after it
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Not tail</span>
                                    <span className="value">
                                        <span className="mono">
                                            return x + f(...)
                                        </span>{" "}
                                        or{" "}
                                        <span className="mono">
                                            return f(...) * x
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className="finalNote">
                                If you can rewrite recursion with an accumulator
                                so the last line is the recursive call, that is
                                tail recursion.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TailRecursion;
