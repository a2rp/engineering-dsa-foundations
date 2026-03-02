// src/topics/bst/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiSearch,
    FiCornerDownRight,
    FiCheckCircle,
    FiCpu,
} from "react-icons/fi";

const BST = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "BST - Binary Search Tree",
            sub: "BST is a tree where values are kept in sorted order so searching, inserting, and deleting can be efficient.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="bst">
            <div className="top">
                <h2 className="title">BST</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch />
                        Sorted tree property
                    </span>
                    <span className="pill">
                        <FiSearch />
                        Fast search (average)
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Depends on height
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="bst-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                rules, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="bst-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and meaning</h3>
                            <p className="p">
                                <span className="mono">BST</span> means{" "}
                                <strong>Binary Search Tree</strong>.
                                <br />
                                Binary means each node can have at most{" "}
                                <strong>2 children</strong>: left and right.
                                <br />
                                Search means it follows a{" "}
                                <strong>sorted rule</strong> that helps you find
                                values efficiently.
                            </p>
                        </section>

                        <section className="sec">
                            <h3 className="h3">BST property (the rule)</h3>
                            <ul className="list">
                                <li>
                                    For any node with value{" "}
                                    <span className="mono">X</span>
                                </li>
                                <li>
                                    All values in the{" "}
                                    <strong>left subtree</strong> are{" "}
                                    <strong>less than X</strong>
                                </li>
                                <li>
                                    All values in the{" "}
                                    <strong>right subtree</strong> are{" "}
                                    <strong>greater than X</strong>
                                </li>
                            </ul>

                            <div className="exampleBlock">
                                <div className="exTitle">Example tree</div>
                                <pre className="code">
                                    {`        8
      /   \\
     3     10
    / \\      \\
   1   6      14
      / \\     /
     4   7   13`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Core operations with beginner explanation
                            </h3>

                            <div className="grid">
                                <div className="card">
                                    <div className="cardTop">
                                        <span className="cIcon">
                                            <FiSearch />
                                        </span>
                                        <div className="cTitle">Search</div>
                                    </div>
                                    <p className="p">
                                        Start at root. If target is smaller, go
                                        left. If larger, go right. Repeat until
                                        found or reach null.
                                    </p>
                                    <pre className="code">
                                        {`Search 7 in the tree above:
8 -> go left (7 < 8)
3 -> go right (7 > 3)
6 -> go right (7 > 6)
7 -> found`}
                                    </pre>
                                </div>

                                <div className="card">
                                    <div className="cardTop">
                                        <span className="cIcon">
                                            <FiCornerDownRight />
                                        </span>
                                        <div className="cTitle">Insert</div>
                                    </div>
                                    <p className="p">
                                        Insert is like search. You walk left or
                                        right until you find an empty spot, then
                                        place the new node there.
                                    </p>
                                    <pre className="code">
                                        {`Insert 5 in the tree above:
8 -> left
3 -> right
6 -> left
4 -> right
(null) -> place 5`}
                                    </pre>
                                </div>

                                <div className="card">
                                    <div className="cardTop">
                                        <span className="cIcon">
                                            <FiGitBranch />
                                        </span>
                                        <div className="cTitle">Delete</div>
                                    </div>
                                    <p className="p">
                                        Delete has 3 cases: leaf node, one
                                        child, or two children. Two children
                                        case uses inorder successor or
                                        predecessor.
                                    </p>
                                    <pre className="code">
                                        {`Delete node with two children (example: delete 3)
Option 1: replace 3 with inorder successor (smallest in right subtree)
Then delete that successor node from its original place`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Height, balance, and time</h3>
                            <p className="p">
                                BST speed depends on tree{" "}
                                <strong>height</strong>.
                                <br />
                                If the tree is balanced, height is about{" "}
                                <span className="mono">log2(n)</span> and
                                operations are fast.
                                <br />
                                If the tree becomes skewed (like a linked list),
                                height becomes <span className="mono">
                                    n
                                </span>{" "}
                                and operations become slow.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Average</span>
                                        <span className="tag">
                                            Balanced-ish
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        Search/Insert/Delete:{" "}
                                        <span className="mono">O(log n)</span>
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Worst</span>
                                        <span className="tag">Skewed</span>
                                    </div>
                                    <p className="tBody">
                                        Search/Insert/Delete:{" "}
                                        <span className="mono">O(n)</span>
                                    </p>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Skewed BST (worst case)
                                </div>
                                <pre className="code">
                                    {`1
 \\
  2
   \\
    3
     \\
      4`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">BST traversal note</h3>
                            <p className="p">
                                In a BST, <strong>inorder traversal</strong>{" "}
                                (left, node, right) gives values in{" "}
                                <strong>sorted order</strong>.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Inorder result (tree above)
                                </div>
                                <pre className="code">
                                    {`Inorder: 1, 3, 4, 6, 7, 8, 10, 13, 14`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common use cases</h3>
                            <ul className="list">
                                <li>
                                    Maintain a sorted set of numbers with fast
                                    insert and search
                                </li>
                                <li>
                                    Range queries (depends on implementation)
                                </li>
                                <li>
                                    As a base idea for balanced trees like AVL
                                    Tree and Red Black Tree
                                </li>
                            </ul>

                            <div className="finalNote">
                                Remember: BST is fast only when height stays
                                small. Height controls performance.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BST;
