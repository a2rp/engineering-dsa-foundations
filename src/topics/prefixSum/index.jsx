// src/topics/prefixSum/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiCpu,
    FiZap,
    FiCheckCircle,
    FiHash,
} from "react-icons/fi";

const PrefixSum = () => {
    const [open, setOpen] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Prefix sum",
            sub: "Prefix sum is a precomputation technique. You store running totals so range sum queries become fast.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="prefix-sum">
            <div className="top">
                <h2 className="title">Prefix sum</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap /> Precompute once
                    </span>
                    <span className="pill">
                        <FiCpu /> Query fast
                    </span>
                    <span className="pill">
                        <FiLayers /> Range sums
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="prefix-sum-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiHash />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                clear explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="prefix-sum-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning</h3>
                            <p className="p">
                                A <strong>prefix sum array</strong> stores the
                                sum of elements from index{" "}
                                <span className="mono">0</span> to{" "}
                                <span className="mono">i</span>.
                                <br />
                                If <span className="mono">arr</span> is the
                                original array, then{" "}
                                <span className="mono">pref[i]</span> is:
                            </p>

                            <pre className="code">
                                {`pref[i] = arr[0] + arr[1] + ... + arr[i]`}
                            </pre>

                            <p className="p">
                                The main benefit: sum of any range{" "}
                                <span className="mono">l..r</span> becomes
                                constant time.
                            </p>

                            <pre className="code">
                                {`sum(l..r) = pref[r] - pref[l - 1]

If l == 0, then sum(0..r) = pref[r]`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Beginner example</h3>
                            <p className="p">Suppose we have this array:</p>

                            <pre className="code">
                                {`arr = [2, 5, 3, 6]
index  0  1  2  3`}
                            </pre>

                            <p className="p">
                                Build prefix sums by keeping a running total:
                            </p>

                            <pre className="code">
                                {`pref[0] = 2
pref[1] = 2 + 5 = 7
pref[2] = 7 + 3 = 10
pref[3] = 10 + 6 = 16

pref = [2, 7, 10, 16]`}
                            </pre>

                            <div className="miniList">
                                <div className="row">
                                    <span className="label">
                                        Range sum example
                                    </span>
                                    <span className="value">
                                        Sum(1..3) = 5 + 3 + 6 = 14
                                    </span>
                                </div>
                                <div className="row">
                                    <span className="label">Using prefix</span>
                                    <span className="value">
                                        Sum(1..3) = pref[3] - pref[0] = 16 - 2 =
                                        14
                                    </span>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to use</h3>
                            <ul className="list">
                                <li>
                                    You have multiple queries asking sum of
                                    subarray ranges.
                                </li>
                                <li>
                                    You need fast answers after one-time
                                    preprocessing.
                                </li>
                                <li>
                                    Problems with range totals, cumulative
                                    counts, frequency sums.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Prefix sum is a tradeoff - you spend{" "}
                                <span className="mono">O(n)</span> time and{" "}
                                <span className="mono">O(n)</span> space once,
                                and then each range sum query becomes{" "}
                                <span className="mono">O(1)</span>.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity</h3>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">Build</span> -{" "}
                                    <span className="mono">O(n)</span> time
                                </div>
                                <div className="abbr">
                                    <span className="mono">Query</span> -{" "}
                                    <span className="mono">O(1)</span> time
                                </div>
                                <div className="abbr">
                                    <span className="mono">Space</span> -{" "}
                                    <span className="mono">O(n)</span>
                                </div>
                                <div className="abbr">
                                    <span className="mono">n</span> - number of
                                    elements in the array
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Code pattern (plain logic)</h3>
                            <p className="p">
                                This is the standard way to build prefix sums:
                            </p>

                            <pre className="code">
                                {`Given arr of size n:

pref = new Array(n)
pref[0] = arr[0]

for i from 1 to n-1:
  pref[i] = pref[i-1] + arr[i]

To answer sum(l..r):
  if l == 0: pref[r]
  else: pref[r] - pref[l-1]`}
                            </pre>

                            <div className="finalNote">
                                Prefix sum is the base idea behind many advanced
                                topics like difference array and 2D prefix sums.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Terms and full forms</h3>
                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">pref</span> - prefix
                                    array (running totals)
                                </div>
                                <div className="abbr">
                                    <span className="mono">l</span> - left index
                                    of range
                                </div>
                                <div className="abbr">
                                    <span className="mono">r</span> - right
                                    index of range
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(1)</span> -
                                    constant time
                                </div>
                                <div className="abbr">
                                    <span className="mono">O(n)</span> - linear
                                    time
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PrefixSum;
