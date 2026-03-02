// src/topics/traversals/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiLayers,
    FiCheckCircle,
    FiZap,
} from "react-icons/fi";

const Traversals = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="traversals">
            <div className="top">
                <h2 className="title">Traversals</h2>
                <p className="sub">
                    Traversal means visiting every node of a data structure in a
                    specific order. Most commonly, traversal is used for trees
                    and graphs. In trees, traversal order decides what you see
                    first: root, left, right, or level by level.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch /> Tree orders
                    </span>
                    <span className="pill">
                        <FiLayers /> BFS vs DFS
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Recursive and iterative
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="traversals-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiZap />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Tree traversals - preorder, inorder, postorder,
                                level order
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                examples, and full forms
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="traversals-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a traversal</h3>
                            <p className="p">
                                A traversal is a systematic way to visit nodes
                                exactly once (or in a controlled way) to read,
                                search, print, validate, or transform the data.
                                <br />
                                In trees, traversal is usually{" "}
                                <span className="mono">DFS</span> or{" "}
                                <span className="mono">BFS</span>.
                            </p>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">DFS</span> - Depth
                                    First Search
                                </div>
                                <div className="abbr">
                                    <span className="mono">BFS</span> - Breadth
                                    First Search
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                The 3 classic DFS traversal orders
                            </h3>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Preorder (Root - Left - Right)
                                    </div>
                                    <p className="miniText">
                                        Visit the root first, then left subtree,
                                        then right subtree.
                                        <br />
                                        Useful for copying a tree, creating a
                                        prefix expression, or exporting
                                        structure.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Inorder (Left - Root - Right)
                                    </div>
                                    <p className="miniText">
                                        Visit left subtree first, then root,
                                        then right subtree.
                                        <br />
                                        In a <span className="mono">
                                            BST
                                        </span>{" "}
                                        (Binary Search Tree), inorder gives
                                        sorted order.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Postorder (Left - Right - Root)
                                    </div>
                                    <p className="miniText">
                                        Visit left subtree, then right subtree,
                                        then root.
                                        <br />
                                        Useful for deleting a tree, computing
                                        subtree results, or evaluating an
                                        expression tree.
                                    </p>
                                </div>
                            </div>

                            <div className="treeExample">
                                <div className="exTitle">
                                    Example tree used below
                                </div>
                                <pre className="code">
                                    {`      1
     / \\
    2   3
   / \\   \\
  4   5   6`}
                                </pre>

                                <div className="exampleGrid">
                                    <div className="exampleCard">
                                        <div className="exH">Preorder</div>
                                        <div className="exV">
                                            1, 2, 4, 5, 3, 6
                                        </div>
                                    </div>
                                    <div className="exampleCard">
                                        <div className="exH">Inorder</div>
                                        <div className="exV">
                                            4, 2, 5, 1, 3, 6
                                        </div>
                                    </div>
                                    <div className="exampleCard">
                                        <div className="exH">Postorder</div>
                                        <div className="exV">
                                            4, 5, 2, 6, 3, 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Level order traversal (BFS)</h3>
                            <p className="p">
                                Level order means visiting nodes level by level
                                from top to bottom, left to right.
                                <br />
                                This uses a <span className="mono">
                                    Queue
                                </span>{" "}
                                because we process nodes in the same order they
                                were discovered.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Level order output for the same tree
                                </div>
                                <pre className="code">
                                    {`Level order: 1, 2, 3, 4, 5, 6

Queue idea:
Start: [1]
Pop 1 -> push 2, 3
Pop 2 -> push 4, 5
Pop 3 -> push 6
...`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Recursive vs iterative (what changes)
                            </h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Recursive</span>
                                        <span className="tag">
                                            Uses call stack
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        Uses function calls. Simple and
                                        readable. But deep trees can cause stack
                                        overflow if recursion gets too deep.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Iterative</span>
                                        <span className="tag">
                                            Uses explicit stack or queue
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        You manually manage data structure like{" "}
                                        <span className="mono">Stack</span> for{" "}
                                        <span className="mono">DFS</span> or{" "}
                                        <span className="mono">Queue</span> for{" "}
                                        <span className="mono">BFS</span>. More
                                        control, safer for deep inputs.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity for traversals</h3>

                            <ul className="list">
                                <li>
                                    Visiting each node once means{" "}
                                    <span className="mono">O(n)</span> time,
                                    where <span className="mono">n</span> is
                                    number of nodes.
                                </li>
                                <li>
                                    Space depends on height of tree or queue
                                    size.
                                    <br />
                                    DFS recursion stack is{" "}
                                    <span className="mono">O(h)</span>, where{" "}
                                    <span className="mono">h</span> is height.
                                </li>
                                <li>
                                    BFS queue can grow up to the maximum width
                                    of the tree in worst case.
                                </li>
                            </ul>

                            <div className="finalNote">
                                Quick memory: preorder is for structure, inorder
                                is for sorted output in BST, postorder is for
                                cleanup and subtree results, level order is for
                                layer wise processing.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Traversals;
