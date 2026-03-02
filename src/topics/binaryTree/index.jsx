// src/topics/binaryTree/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiCpu,
    FiLayers,
    FiCheckCircle,
    FiZap,
} from "react-icons/fi";

const BinaryTree = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Binary tree",
            sub: "A beginner friendly overview of binary trees with key terms, common traversals, and practical examples.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="binary-tree">
            <div className="top">
                <h2 className="title">Binary tree</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch /> Node based structure
                    </span>
                    <span className="pill">
                        <FiLayers /> Traversals
                    </span>
                    <span className="pill">
                        <FiCpu /> Height and depth
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="binary-tree-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGitBranch />
                        </span>

                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} full
                                notes with terms and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="binary-tree-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Definition</h3>
                            <p className="p">
                                A <strong>Binary Tree</strong> is a tree data
                                structure where each node can have{" "}
                                <strong>at most 2 children</strong>.
                                <br />
                                These children are called{" "}
                                <strong>Left child</strong> and{" "}
                                <strong>Right child</strong>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example tree (concept)
                                </div>
                                <pre className="code">
                                    {`        A
      /   \\
     B     C
    / \\     \\
   D   E     F

A is root
B and C are children of A
D and E are children of B
F is right child of C`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Terms and full forms explained
                            </h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Node</span>
                                        <span className="tag">Unit</span>
                                    </div>
                                    <p className="tBody">
                                        A node is a single element in a tree. It
                                        contains a value and references to
                                        children.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Root</span>
                                        <span className="tag">Top</span>
                                    </div>
                                    <p className="tBody">
                                        The topmost node. Every tree starts from
                                        root.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Parent and child
                                        </span>
                                        <span className="tag">Relation</span>
                                    </div>
                                    <p className="tBody">
                                        If node X connects to node Y below it,
                                        then X is parent and Y is child.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Leaf</span>
                                        <span className="tag">End</span>
                                    </div>
                                    <p className="tBody">
                                        A leaf node has no children. Example: D,
                                        E, F in the diagram.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Edge</span>
                                        <span className="tag">Link</span>
                                    </div>
                                    <p className="tBody">
                                        A connection between two nodes. Example:
                                        A - B is one edge.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Depth (node)
                                        </span>
                                        <span className="tag">Distance</span>
                                    </div>
                                    <p className="tBody">
                                        Depth of a node is number of edges from
                                        root to that node.
                                        <br />
                                        Root depth is 0.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Height (node)
                                        </span>
                                        <span className="tag">Down</span>
                                    </div>
                                    <p className="tBody">
                                        Height of a node is the number of edges
                                        in the longest path from that node to a
                                        leaf.
                                        <br />
                                        Leaf height is 0.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Height (tree)
                                        </span>
                                        <span className="tag">Overall</span>
                                    </div>
                                    <p className="tBody">
                                        Height of a tree is the height of the
                                        root node.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common types</h3>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Full binary tree
                                    </div>
                                    <p className="miniText">
                                        Every node has either 0 children or 2
                                        children. No node has only 1 child.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Complete binary tree
                                    </div>
                                    <p className="miniText">
                                        All levels are completely filled except
                                        possibly the last level, and the last
                                        level is filled from left to right.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Perfect binary tree
                                    </div>
                                    <p className="miniText">
                                        All internal nodes have 2 children and
                                        all leaves are at the same level.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Skewed binary tree
                                    </div>
                                    <p className="miniText">
                                        Looks like a linked list. Mostly one
                                        side only (all left or all right).
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Traversals (ways to visit nodes)
                            </h3>
                            <p className="p">
                                Traversal means visiting every node in a defined
                                order.
                            </p>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">
                                        Preorder - Root Left Right
                                    </div>
                                    <p className="pBody">
                                        Visit root first, then left subtree,
                                        then right subtree.
                                    </p>
                                    <pre className="code">
                                        {`Tree:
    A
   / \\
  B   C
 / \\
D   E

Preorder: A B D E C`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Inorder - Left Root Right
                                    </div>
                                    <p className="pBody">
                                        Visit left subtree, then root, then
                                        right subtree.
                                        <br />
                                        In a Binary Search Tree, inorder gives
                                        sorted order.
                                    </p>
                                    <pre className="code">
                                        {`Same tree:
Inorder: D B E A C`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Postorder - Left Right Root
                                    </div>
                                    <p className="pBody">
                                        Visit left subtree, then right subtree,
                                        then root.
                                    </p>
                                    <pre className="code">
                                        {`Same tree:
Postorder: D E B C A`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Level order - BFS
                                    </div>
                                    <p className="pBody">
                                        BFS means Breadth First Search. Visit
                                        nodes level by level using a queue.
                                    </p>
                                    <pre className="code">
                                        {`Same tree:
Level order: A B C D E`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Practical examples where trees appear
                            </h3>
                            <ul className="list">
                                <li>
                                    Folder structure in file systems
                                    (directories and subdirectories).
                                </li>
                                <li>
                                    HTML DOM - Document Object Model is a tree
                                    of elements.
                                </li>
                                <li>
                                    Organization chart - manager and team
                                    hierarchy.
                                </li>
                                <li>
                                    Expression trees in compilers and
                                    calculators.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time complexity intuition</h3>
                            <p className="p">
                                Many tree operations depend on tree height.
                                <br />
                                Balanced tree height is about{" "}
                                <span className="mono">log2(n)</span> which
                                means logarithmic. Skewed tree height becomes{" "}
                                <span className="mono">n</span> which is linear.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Quick comparison</div>
                                <pre className="code">
                                    {`Balanced tree:
height ~ log2(n)
search can feel like O(log n)

Skewed tree:
height ~ n
search can become O(n)`}
                                </pre>
                            </div>

                            <div className="finalNote">
                                Rule: trees are powerful when kept balanced.
                                Unbalanced trees behave like linked lists.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick beginner checklist</h3>
                            <ol className="steps">
                                <li>Always define root, left, right.</li>
                                <li>
                                    Know the 4 traversals and when to use them.
                                </li>
                                <li>Understand height vs depth.</li>
                                <li>When stuck, draw the tree on paper.</li>
                                <li>Think about base cases on null nodes.</li>
                            </ol>

                            <div className="tip">
                                Tip: Most tree recursion problems are "work at
                                node + solve left + solve right".
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BinaryTree;
