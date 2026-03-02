// src/topics/lca/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiCpu,
    FiCheckCircle,
    FiCode,
    FiHelpCircle,
} from "react-icons/fi";

const Lca = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "LCA - Lowest Common Ancestor",
            sub: "LCA helps you find the closest shared ancestor of two nodes in a tree. It is a common pattern in tree questions.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="lca">
            <div className="top">
                <h2 className="title">LCA</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch />
                        Trees
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Pattern
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        Interview classic
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="lca-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiHelpCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} -
                                definition, examples, and code
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="lca-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and meaning</h3>
                            <p className="p">
                                <strong>LCA</strong> means{" "}
                                <strong>Lowest Common Ancestor</strong>.
                                <br />
                                In a tree, the LCA of two nodes{" "}
                                <span className="mono">p</span> and{" "}
                                <span className="mono">q</span> is the node
                                that:
                            </p>

                            <ul className="list">
                                <li>
                                    is an <strong>ancestor</strong> of{" "}
                                    <span className="mono">p</span>
                                </li>
                                <li>
                                    is an <strong>ancestor</strong> of{" "}
                                    <span className="mono">q</span>
                                </li>
                                <li>
                                    and is the <strong>closest</strong> such
                                    shared ancestor to both nodes
                                </li>
                            </ul>

                            <div className="note">
                                <span className="noteTitle">Ancestor</span>
                                <span className="noteText">
                                    A node is an ancestor of another node if it
                                    lies on the path from the root to that node.
                                    The node itself is also considered its own
                                    ancestor in most LCA problems.
                                </span>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Small visual example</h3>

                            <pre className="code">
                                {`Tree:

        3
      /   \
     5     1
    / \   / \
   6   2 0   8
      / \
     7   4

LCA(6, 4) = 5
- Path(6): 3 -> 5 -> 6
- Path(4): 3 -> 5 -> 2 -> 4
Closest common node is 5

LCA(7, 8) = 3
- Path(7): 3 -> 5 -> 2 -> 7
- Path(8): 3 -> 1 -> 8
Closest common node is 3`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Approach 1 - General Binary Tree (DFS)
                            </h3>
                            <p className="p">
                                This works for any binary tree (not necessarily
                                a BST - Binary Search Tree).
                                <br />
                                Idea: return the node if it matches{" "}
                                <span className="mono">p</span> or{" "}
                                <span className="mono">q</span>. Search left and
                                right. If both sides return non-null, current
                                node is the LCA.
                            </p>

                            <div className="kGrid">
                                <div className="kCard">
                                    <div className="kTitle">DFS</div>
                                    <div className="kText">
                                        DFS means Depth First Search. You go
                                        deep into one branch before moving to
                                        another.
                                    </div>
                                </div>
                                <div className="kCard">
                                    <div className="kTitle">Base case</div>
                                    <div className="kText">
                                        Stop when node is null, or node matches
                                        p or q.
                                    </div>
                                </div>
                            </div>

                            <div className="codeBlock">
                                <div className="codeHead">
                                    <span className="codeIcon">
                                        <FiCode />
                                    </span>
                                    <span className="codeTitle">
                                        JavaScript - LCA in Binary Tree
                                    </span>
                                </div>

                                <pre className="code">
                                    {`// Node shape used in this example
// { val: number, left: Node | null, right: Node | null }

// LCA in a general binary tree (DFS recursion)
// Time: O(n) - visits each node at most once
// Space: O(h) - recursion stack (h = height of tree)
function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;

  // If current node is p or q, return it upward
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // If p and q are found in different subtrees, root is LCA
  if (left && right) return root;

  // Otherwise return the side that has a match
  return left ? left : right;
}`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">Quick run example</div>
                                <pre className="code">
                                    {`If p is found in left subtree and q is found in right subtree:
- left returns a node
- right returns a node
Then current node becomes the first split point, so it is the LCA.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Approach 2 - BST (Binary Search Tree)
                            </h3>
                            <p className="p">
                                <strong>BST</strong> means{" "}
                                <strong>Binary Search Tree</strong>.
                                <br />
                                Property: left subtree values are smaller, right
                                subtree values are larger.
                                <br />
                                Using this, you can walk down from root:
                                <br />
                                - if both nodes are smaller, go left
                                <br />
                                - if both are larger, go right
                                <br />- otherwise current node is the LCA
                            </p>

                            <div className="codeBlock">
                                <div className="codeHead">
                                    <span className="codeIcon">
                                        <FiCode />
                                    </span>
                                    <span className="codeTitle">
                                        JavaScript - LCA in BST
                                    </span>
                                </div>

                                <pre className="code">
                                    {`// LCA in a BST using value comparisons
// Time: O(h) where h = height of tree
// Space: O(1) iterative
function lowestCommonAncestorBST(root, p, q) {
  let cur = root;

  while (cur !== null) {
    if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left;
    } else if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right;
    } else {
      // split point, or one node equals current
      return cur;
    }
  }

  return null;
}`}
                                </pre>
                            </div>

                            <div className="note">
                                <span className="noteTitle">When to use</span>
                                <span className="noteText">
                                    Use BST approach only when the question
                                    clearly says the tree is a BST. Otherwise
                                    use the general binary tree DFS solution.
                                </span>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time and space summary</h3>
                            <div className="table">
                                <div className="row head">
                                    <div className="cell">Case</div>
                                    <div className="cell">Time</div>
                                    <div className="cell">Space</div>
                                </div>

                                <div className="row">
                                    <div className="cell">
                                        Binary Tree (DFS)
                                    </div>
                                    <div className="cell mono">O(n)</div>
                                    <div className="cell mono">O(h)</div>
                                </div>

                                <div className="row">
                                    <div className="cell">BST (Iterative)</div>
                                    <div className="cell mono">O(h)</div>
                                    <div className="cell mono">O(1)</div>
                                </div>
                            </div>

                            <div className="finalNote">
                                LCA is basically about finding the first split
                                point in the paths of two nodes.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Lca;
