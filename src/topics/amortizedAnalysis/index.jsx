// src/topics/amortizedAnalysis/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrendingUp,
    FiRepeat,
    FiLayers,
    FiCpu,
    FiCheckCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const AmortizedAnalysis = () => {
    const [open, setOpen] = useState(false);

    // For "load on click"
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Amortized analysis",
            sub: "Amortized analysis means average cost per operation over a long sequence, not just one operation. It explains why some operations are usually fast even if they are occasionally expensive.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    // Mount only when opening, unmount after closing animation
    useEffect(() => {
        let tId = null;

        if (open) {
            setIsMounted(true);

            // Next frame so CSS transition can kick in
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);

            // Unmount after animation finishes
            tId = window.setTimeout(() => {
                setIsMounted(false);
            }, TRANSITION_MS);
        }

        return () => {
            if (tId) window.clearTimeout(tId);
        };
    }, [open]);

    return (
        <Styled.Wrapper id="amortized-analysis">
            <div className="top">
                <h2 className="title">Amortized analysis</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Sequence based
                    </span>
                    <span className="pill">
                        <FiLayers /> Occasional spikes
                    </span>
                    <span className="pill">
                        <FiCpu /> Average per operation
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="amortized-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiTrendingUp />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and real examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="amortized-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>Amortized analysis</strong> means
                                    you look at the cost of many operations
                                    together and compute the average cost per
                                    operation.
                                    <br />
                                    This is useful when an operation is usually
                                    cheap but sometimes becomes expensive.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Key idea
                                        </div>
                                        <p className="miniText">
                                            Occasional expensive operations are
                                            "paid for" by many cheap operations.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What it prevents
                                        </div>
                                        <p className="miniText">
                                            Avoids judging performance by a rare
                                            worst moment only.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Classic example - dynamic array push
                                </h3>
                                <p className="p">
                                    A <strong>dynamic array</strong> grows when
                                    it becomes full. Many languages use this
                                    idea behind the scenes.
                                    <br />
                                    When the array is full, a bigger array is
                                    created, and old items are copied.
                                </p>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiLayers />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Why it sometimes costs O(n)
                                        </div>
                                        <div className="cSub">
                                            On resize, copying{" "}
                                            <span className="mono">n</span>{" "}
                                            elements takes{" "}
                                            <span className="mono">O(n)</span>{" "}
                                            time.
                                        </div>
                                    </div>
                                </div>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Most pushes
                                        </div>
                                        <p className="flowText">
                                            Just place the element at the end.
                                            <br />
                                            Cost is{" "}
                                            <span className="mono">O(1)</span>.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Rare resize
                                        </div>
                                        <p className="flowText">
                                            Allocate bigger array + copy items.
                                            <br />
                                            Cost is{" "}
                                            <span className="mono">O(n)</span>.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Amortized result
                                        </div>
                                        <p className="flowText">
                                            Over many pushes, average cost per
                                            push becomes close to{" "}
                                            <span className="mono">O(1)</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example sequence (doubling strategy)
                                    </div>
                                    <pre className="code">{`Capacity starts at 1

Push 1 -> ok (cost 1)
Push 2 -> resize to 2, copy 1 (cost 2)
Push 3 -> resize to 4, copy 2 (cost 3)
Push 4 -> ok (cost 1)
Push 5 -> resize to 8, copy 4 (cost 5)

Resizes are expensive, but they happen rarely.`}</pre>
                                </div>

                                <div className="mathBox">
                                    <div className="mTitle">
                                        Simple intuition
                                    </div>
                                    <p className="mText">
                                        If capacity doubles each time, total
                                        number of copied elements across many
                                        pushes is roughly less than{" "}
                                        <span className="mono">2n</span>. So
                                        total work across{" "}
                                        <span className="mono">n</span> pushes
                                        is <span className="mono">O(n)</span>,
                                        which means amortized per push is{" "}
                                        <span className="mono">O(1)</span>.
                                    </p>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Another example - stack with resizing array
                                </h3>
                                <p className="p">
                                    If a stack is implemented using a dynamic
                                    array, then <strong>push</strong> has
                                    amortized <span className="mono">O(1)</span>{" "}
                                    time for the same reason: occasional
                                    resizing.
                                </p>

                                <div className="miniList">
                                    <div className="row">
                                        <span className="label">Push</span>
                                        <span className="value">
                                            Worst case{" "}
                                            <span className="mono">O(n)</span>,
                                            but amortized{" "}
                                            <span className="mono">O(1)</span>
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Pop</span>
                                        <span className="value">
                                            Usually{" "}
                                            <span className="mono">O(1)</span>
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Terms and full forms (quick)
                                </h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">O(1)</span> -
                                        Constant time
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">O(n)</span> -
                                        Linear time
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">n</span> - Input
                                        size (number of elements)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DSA</span> - Data
                                        Structures and Algorithms
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Amortized analysis does not mean the worst
                                    case disappears. It means the expensive
                                    steps happen rarely enough that the average
                                    stays small.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Push is amortized O(1) because resizing
                                        happens occasionally and total copying
                                        across n pushes is O(n)."
                                    </li>
                                    <li>
                                        "Worst case of a single push can be O(n)
                                        on resize, but average per push over
                                        time is O(1)."
                                    </li>
                                    <li>
                                        "Amortized is average over a sequence of
                                        operations, not average over random
                                        inputs."
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default AmortizedAnalysis;
