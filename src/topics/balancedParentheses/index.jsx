// src/topics/balancedParentheses/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCheckCircle,
    FiXCircle,
    FiZap,
    FiCpu,
    FiBookOpen,
} from "react-icons/fi";

const BalancedParentheses = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper id="balanced-parentheses">
            <div className="top">
                <h2 className="title">Balanced parentheses</h2>
                <p className="sub">
                    A string is balanced if every opening bracket has a matching
                    closing bracket in the correct order. This is a classic{" "}
                    <strong>stack</strong> problem.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiBookOpen /> Beginner friendly
                    </span>
                    <span className="pill">
                        <FiZap /> Stack pattern
                    </span>
                    <span className="pill">
                        <FiCpu /> O(n) time
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="balanced-parentheses-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">Stack solution</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} theory,
                                examples, and implementation
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="balanced-parentheses-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What does balanced mean</h3>
                            <p className="p">
                                Balanced means:
                                <br />- Every opening bracket{" "}
                                <span className="mono">(</span>{" "}
                                <span className="mono">[</span>{" "}
                                <span className="mono">{"{"}</span> has a
                                closing bracket <span className="mono">)</span>{" "}
                                <span className="mono">]</span>{" "}
                                <span className="mono">{"}"}</span>
                                <br />- Closing must match the most recent
                                opening bracket
                                <br />- Order matters
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Why stack works (simple explanation)
                            </h3>
                            <p className="p">
                                <strong>Stack</strong> is a data structure where
                                the last inserted item is the first removed.
                                This is called{" "}
                                <strong>LIFO - Last In First Out</strong>.
                                <br />
                                For brackets, we always need to close the latest
                                open bracket first, so stack fits perfectly.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Examples</h3>

                            <div className="exRow">
                                <div className="exCard ok">
                                    <div className="exHead">
                                        <FiCheckCircle /> Balanced
                                    </div>
                                    <pre className="code">
                                        {`Input: "()"
Reason: '(' closes with ')'
Output: true`}
                                    </pre>
                                </div>

                                <div className="exCard ok">
                                    <div className="exHead">
                                        <FiCheckCircle /> Balanced
                                    </div>
                                    <pre className="code">
                                        {`Input: "{[()]}"
Reason:
- '{' open
- '[' open
- '(' open
- ')' closes '('
- ']' closes '['
- '}' closes '{'
Output: true`}
                                    </pre>
                                </div>

                                <div className="exCard bad">
                                    <div className="exHead">
                                        <FiXCircle /> Not balanced
                                    </div>
                                    <pre className="code">
                                        {`Input: "(]"
Reason: '(' cannot be closed by ']'
Output: false`}
                                    </pre>
                                </div>

                                <div className="exCard bad">
                                    <div className="exHead">
                                        <FiXCircle /> Not balanced
                                    </div>
                                    <pre className="code">
                                        {`Input: "(()"
Reason: one '(' left open
Output: false`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Algorithm steps</h3>
                            <ol className="steps">
                                <li>
                                    Create an empty stack to store opening
                                    brackets.
                                </li>
                                <li>
                                    Traverse the string character by character.
                                </li>
                                <li>
                                    If the character is an opening bracket, push
                                    it to stack.
                                </li>
                                <li>
                                    If it is a closing bracket, check the top of
                                    stack:
                                    <br />- if stack is empty, return false
                                    <br />- if top does not match, return false
                                    <br />- else pop the top
                                </li>
                                <li>
                                    After the loop, if stack is empty, return
                                    true, otherwise false.
                                </li>
                            </ol>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Implementation (JavaScript)</h3>

                            <div className="hint">
                                Complexity:
                                <span className="mono"> O(n)</span> time and
                                <span className="mono"> O(n)</span> space in the
                                worst case.
                            </div>

                            <pre className="code">
                                {`// isBalancedParentheses checks (), {}, []
// n = length of string
// Time: O(n) because we scan once
// Space: O(n) stack can store up to n opening brackets

export function isBalancedParentheses(s) {
    const stack = [];

    // map closing bracket -> expected opening bracket
    const needOpen = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        // opening brackets go into stack
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
            continue;
        }

        // closing bracket: must match the last opening
        if (ch === ")" || ch === "]" || ch === "}") {
            if (stack.length === 0) return false;

            const top = stack.pop();
            if (top !== needOpen[ch]) return false;
        }
    }

    // if anything is left open, it is not balanced
    return stack.length === 0;
}

// Quick tests
// isBalancedParentheses("()") -> true
// isBalancedParentheses("{[()]}") -> true
// isBalancedParentheses("(]") -> false
// isBalancedParentheses("(()") -> false`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>
                            <ul className="list">
                                <li>
                                    Not checking stack empty before popping.
                                </li>
                                <li>
                                    Only counting brackets, but ignoring order.
                                </li>
                                <li>
                                    Returning true without verifying stack is
                                    empty at the end.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Engineer rule: the moment you see "properly
                                nested" or "matching pairs", think stack.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BalancedParentheses;
