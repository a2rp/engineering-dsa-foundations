// src/topics/heightDepth/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiLayers, FiCpu, FiGitBranch } from "react-icons/fi";

const HeightDepth = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="height-depth">
            <div className="top">
                <h2 className="title">Height / Depth in Trees</h2>
                <p className="sub">
                    Understanding height and depth is fundamental to mastering
                    tree recursion and tree-based algorithms.
                </p>
            </div>

            <div className="accordion">
                <button type="button" className="accBtn" onClick={toggle}>
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiLayers />
                        </span>
                        <div>
                            <div className="accTitle">
                                Height and Depth explained with examples
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"}
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3>What is a Tree?</h3>
                            <p>
                                A <strong>Tree</strong> is a hierarchical data
                                structure where each element is called a node.
                                The top node is called the <strong>root</strong>
                                .
                            </p>

                            <pre className="code">
                                {`Example Tree:

        1
       / \
      2   3
     /
    4`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3>Depth - Definition</h3>
                            <p>
                                <strong>Depth</strong> of a node is the number
                                of edges from the root node to that node.
                            </p>

                            <p>Root node depth = 0.</p>

                            <pre className="code">
                                {`Depth of node 1 = 0
Depth of node 2 = 1
Depth of node 4 = 2`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3>Height - Definition</h3>
                            <p>
                                <strong>Height</strong> of a node is the number
                                of edges in the longest downward path from that
                                node to a leaf node.
                            </p>

                            <p>Height of a leaf node = 0.</p>

                            <pre className="code">
                                {`Height of node 4 = 0
Height of node 2 = 1
Height of node 1 = 2`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3>Height of a Tree</h3>
                            <p>
                                Height of the tree is the height of the root
                                node.
                            </p>

                            <pre className="code">
                                {`Height of entire tree = 2`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3>Recursive Formula</h3>
                            <p>Height can be calculated using recursion.</p>

                            <pre className="code">
                                {`height(node):
    if node is null:
        return -1

    leftHeight = height(node.left)
    rightHeight = height(node.right)

    return 1 + max(leftHeight, rightHeight)`}
                            </pre>

                            <p>
                                Time Complexity: O(n)
                                <br />
                                Space Complexity: O(h) where h is height of tree
                            </p>
                        </section>

                        <section className="sec">
                            <h3>Common Confusion</h3>
                            <ul>
                                <li>Depth counts from root downward.</li>
                                <li>Height counts from node downward.</li>
                                <li>Height of tree = height of root.</li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3>Why This Matters</h3>
                            <ul>
                                <li>Used in Balanced Binary Trees</li>
                                <li>Used in AVL Trees</li>
                                <li>Used in Red Black Trees</li>
                                <li>Helps in analyzing recursion stack</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HeightDepth;
