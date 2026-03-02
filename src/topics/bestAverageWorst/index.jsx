// src/topics/caseAnalysis/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrendingUp,
    FiAlertTriangle,
    FiCheckCircle,
    FiCpu,
    FiActivity,
} from "react-icons/fi";

const CaseAnalysis = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Best, average, worst case",
            sub: "These cases describe how an algorithm behaves under different inputs. They help you predict performance and choose the right approach.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="best-average-worst">
            <div className="top">
                <h2 className="title">Best, average, worst case</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCpu /> Time complexity view
                    </span>
                    <span className="pill">
                        <FiActivity /> Input dependent
                    </span>
                    <span className="pill">
                        <FiTrendingUp /> Predict performance
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="case-analysis-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiTrendingUp />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear definitions and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="case-analysis-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                Algorithms can run faster or slower depending on
                                the input. We describe this using three standard
                                cases:
                            </p>

                            <div className="caseGrid">
                                <div className="caseCard">
                                    <div className="cHead">
                                        <span className="cIcon ok">
                                            <FiCheckCircle />
                                        </span>
                                        <div className="cTitle">Best case</div>
                                    </div>
                                    <p className="cBody">
                                        The fastest scenario. Input is arranged
                                        in the most favorable way.
                                    </p>
                                </div>

                                <div className="caseCard">
                                    <div className="cHead">
                                        <span className="cIcon mid">
                                            <FiActivity />
                                        </span>
                                        <div className="cTitle">
                                            Average case
                                        </div>
                                    </div>
                                    <p className="cBody">
                                        The expected scenario for typical input.
                                        It is not always easy to compute, but it
                                        describes realistic behavior.
                                    </p>
                                </div>

                                <div className="caseCard">
                                    <div className="cHead">
                                        <span className="cIcon warn">
                                            <FiAlertTriangle />
                                        </span>
                                        <div className="cTitle">Worst case</div>
                                    </div>
                                    <p className="cBody">
                                        The slowest scenario. Input is arranged
                                        in the most unfavorable way.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Real examples</h3>

                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exTitle">
                                        Example 1 - Linear search
                                    </div>
                                    <p className="p">
                                        <strong>Linear search</strong> means
                                        scanning an array one by one until you
                                        find the target.
                                    </p>

                                    <div className="miniList">
                                        <div className="row">
                                            <span className="label">
                                                Best case
                                            </span>
                                            <span className="value">
                                                Target is first element -{" "}
                                                <span className="mono">
                                                    O(1)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <span className="label">
                                                Average case
                                            </span>
                                            <span className="value">
                                                Target is somewhere in middle -{" "}
                                                <span className="mono">
                                                    O(n)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <span className="label">
                                                Worst case
                                            </span>
                                            <span className="value">
                                                Target is last or not present -{" "}
                                                <span className="mono">
                                                    O(n)
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <pre className="code">
                                        {`Array: [4, 7, 2, 9], target = 9
Check 4 (no)
Check 7 (no)
Check 2 (no)
Check 9 (yes)

Best: target at index 0 -> O(1)
Worst: target at last or missing -> O(n)`}
                                    </pre>
                                </div>

                                <div className="exCard">
                                    <div className="exTitle">
                                        Example 2 - Binary search
                                    </div>
                                    <p className="p">
                                        <strong>Binary search</strong> works on
                                        a <strong>sorted</strong> array. It
                                        repeatedly halves the search space.
                                    </p>

                                    <div className="miniList">
                                        <div className="row">
                                            <span className="label">
                                                Best case
                                            </span>
                                            <span className="value">
                                                Middle element is target -{" "}
                                                <span className="mono">
                                                    O(1)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <span className="label">
                                                Average case
                                            </span>
                                            <span className="value">
                                                Usually takes a few halvings -{" "}
                                                <span className="mono">
                                                    O(log n)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <span className="label">
                                                Worst case
                                            </span>
                                            <span className="value">
                                                Target not found after full
                                                halving -{" "}
                                                <span className="mono">
                                                    O(log n)
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <pre className="code">
                                        {`Sorted: [1, 3, 5, 7, 9, 11], target = 11
Mid = 7 -> go right
Mid = 9 -> go right
Mid = 11 -> found

Worst still O(log n) because we halve each step.`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                How to write this in interviews
                            </h3>
                            <p className="p">
                                When you explain complexity, you can say:
                            </p>

                            <div className="sayGrid">
                                <div className="sayCard">
                                    <div className="sayTitle">
                                        Best case time
                                    </div>
                                    <p className="sayText">
                                        The fastest input arrangement leads to
                                        this runtime.
                                    </p>
                                </div>
                                <div className="sayCard">
                                    <div className="sayTitle">
                                        Worst case time
                                    </div>
                                    <p className="sayText">
                                        The slowest input arrangement leads to
                                        this runtime. It is usually the safest
                                        guarantee.
                                    </p>
                                </div>
                                <div className="sayCard">
                                    <div className="sayTitle">
                                        Average case time
                                    </div>
                                    <p className="sayText">
                                        Expected runtime for typical input. If
                                        not known, mention you are focusing on
                                        worst case guarantee.
                                    </p>
                                </div>
                            </div>

                            <div className="finalNote">
                                Most production systems care about worst case
                                guarantees and real-world average behavior. Use
                                best case only when you can prove it happens
                                often.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Full forms and terms</h3>
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
                                    <span className="mono">O(log n)</span> -
                                    Logarithmic time
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - Input size
                                    (number of elements)
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CaseAnalysis;
