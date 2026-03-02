// src/topics/trees/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiLayers,
    FiCpu,
    FiCheckCircle,
    FiZap,
} from "react-icons/fi";

const Trees = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Trees - structure for hierarchical data",
            sub: "Trees are used when data has parent-child relationships. This section covers core terms, traversals, BST, height and depth, and LCA with beginner-friendly examples.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="trees">
            <div className="top">
                <h2 className="title">Trees</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch />
                        Hierarchy
                    </span>
                    <span className="pill">
                        <FiLayers />
                        Traversals
                    </span>
                    <span className="pill">
                        <FiCpu />
                        BST logic
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="trees-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} trees
                                notes with terms and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="trees-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a tree</h3>
                            <p className="p">
                                A <strong>tree</strong> is a connected structure
                                made of <strong>nodes</strong>, where each node
                                can have children. It is used to represent
                                hierarchical data like folders, organization
                                charts, menus, and HTML DOM.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Node</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A single unit that stores a value and
                                        references to children.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Root</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        The top node of the tree. Every node is
                                        reachable from the root.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Edge</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A connection between parent and child.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Leaf</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A node with no children.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Parent</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A node that has a child.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Child</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        A node that comes under a parent.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: a simple tree
                                </div>
                                <pre className="code">
                                    {`        A
       / \\
      B   C
     / \\
    D   E

Root: A
Children of A: B, C
Leaf nodes: D, E, C`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Binary tree and full form</h3>
                            <p className="p">
                                A <strong>binary tree</strong> is a tree where
                                each node has at most <strong>2</strong>{" "}
                                children, usually called <strong>left</strong>{" "}
                                and <strong>right</strong>.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Binary tree</div>
                                    <p className="miniText">
                                        At most 2 children per node.
                                        <br />
                                        Used in heaps, BST, expression trees.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        BST - Binary Search Tree
                                    </div>
                                    <p className="miniText">
                                        A binary tree with ordering rules. Left
                                        values are smaller, right values are
                                        larger.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Tree traversals</h3>
                            <p className="p">
                                Traversal means visiting all nodes in some
                                order. The most common depth-first traversals
                                are <strong>preorder</strong>,{" "}
                                <strong>inorder</strong>, and{" "}
                                <strong>postorder</strong>.
                            </p>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">
                                        Preorder - Root Left Right
                                    </div>
                                    <p className="pBody">
                                        Visit current node first, then left
                                        subtree, then right subtree.
                                    </p>
                                    <pre className="code">
                                        {`Tree:
    A
   / \\
  B   C
 / \\
D   E

Preorder:
A B D E C`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Inorder - Left Root Right
                                    </div>
                                    <p className="pBody">
                                        Visit left subtree, then current node,
                                        then right subtree.
                                        <br />
                                        In BST, inorder gives sorted order.
                                    </p>
                                    <pre className="code">
                                        {`Inorder:
D B E A C`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Postorder - Left Right Root
                                    </div>
                                    <p className="pBody">
                                        Visit children first, then current node.
                                        Useful for deleting nodes, evaluating
                                        expression trees.
                                    </p>
                                    <pre className="code">
                                        {`Postorder:
D E B C A`}
                                    </pre>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        Level order - BFS (Breadth First Search)
                                    </div>
                                    <p className="pBody">
                                        Visit nodes level by level using a
                                        queue. This is BFS - Breadth First
                                        Search.
                                    </p>
                                    <pre className="code">
                                        {`Level order:
A B C D E`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Height and depth - difference
                            </h3>
                            <p className="p">
                                These two terms confuse beginners. Keep this
                                rule:
                                <br />
                                <strong>Depth</strong> is distance from root to
                                a node.
                                <br />
                                <strong>Height</strong> is distance from a node
                                to the farthest leaf.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Depth</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        Number of edges from root to the node.
                                        Root depth is 0.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Height</span>
                                        <span className="tag">Term</span>
                                    </div>
                                    <p className="tBody">
                                        Number of edges from the node to the
                                        farthest leaf. Leaf height is 0.
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: depth and height
                                </div>
                                <pre className="code">
                                    {`        A
       / \\
      B   C
     /
    D

Depth:
A=0, B=1, C=1, D=2

Height:
D=0, B=1, C=0, A=2`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                BST - Binary Search Tree basics
                            </h3>
                            <p className="p">
                                <strong>BST</strong> means{" "}
                                <strong>Binary Search Tree</strong>. It keeps
                                values ordered:
                                <br />
                                Left subtree values are smaller than the node.
                                <br />
                                Right subtree values are larger than the node.
                                <br />
                                This ordering makes search, insert, and delete
                                efficient on average.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: BST insert order
                                </div>
                                <pre className="code">
                                    {`Insert: 8, 3, 10, 1, 6

        8
       / \\
      3  10
     / \\
    1   6

Search 6:
8 -> go left
3 -> go right
6 -> found`}
                                </pre>
                            </div>

                            <div className="finalNote">
                                BST average operations are O(log n), but worst
                                case can become O(n) if the tree becomes skewed
                                like a linked list.
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">LCA - Lowest Common Ancestor</h3>
                            <p className="p">
                                <strong>LCA</strong> means{" "}
                                <strong>Lowest Common Ancestor</strong>.
                                <br />
                                For two nodes in a tree, LCA is the lowest node
                                in the tree that is an ancestor of both nodes.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: LCA in a tree
                                </div>
                                <pre className="code">
                                    {`        A
       / \\
      B   C
     / \\
    D   E

LCA(D, E) = B
LCA(D, C) = A`}
                                </pre>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiZap />
                                </span>
                                <p className="nText">
                                    In interviews, LCA problems often combine
                                    recursion with tree traversal thinking.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Trees;
