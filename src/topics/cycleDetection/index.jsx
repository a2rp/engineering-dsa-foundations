// src/topics/cycleDetection/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiRotateCw,
    FiChevronDown,
    FiCheckCircle,
    FiCpu,
    FiAlertTriangle,
    FiLink2,
} from "react-icons/fi";

const CycleDetection = () => {
    const [open, setOpen] = useState(false);

    const data = useMemo(() => {
        return {
            title: "Cycle detection",
            sub: "Cycle detection means checking if a structure loops back to an already visited node. This is common in linked lists and graphs.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="cycle-detection">
            <div className="top">
                <h2 className="title">Cycle detection</h2>
                <p className="sub">{data.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLink2 /> Linked list
                    </span>
                    <span className="pill">
                        <FiRotateCw /> Graphs
                    </span>
                    <span className="pill">
                        <FiCpu /> O(n) patterns
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="cycle-detection-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                What is a cycle and how do we detect it
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                terms, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="cycle-detection-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Meaning in simple words</h3>
                            <p className="p">
                                A <strong>cycle</strong> happens when following
                                next pointers or edges brings you back to a node
                                you have already seen.
                                <br />
                                If a cycle exists, you can keep moving and you
                                will never reach an end.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Cycle in a linked list
                                    </div>
                                    <p className="miniText">
                                        A node points back to a previous node.
                                        <br />
                                        Example: 1 - 2 - 3 - 4 and 4 points to 2
                                    </p>
                                    <pre className="code">
                                        {`1 -> 2 -> 3 -> 4
      ^         |
      |---------|`}
                                    </pre>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Cycle in a graph
                                    </div>
                                    <p className="miniText">
                                        A path exists that returns to the start.
                                        <br />
                                        Example: A -&gt; B -&gt; C -&gt; A
                                    </p>
                                    <pre className="code">
                                        {`A -> B -> C
^         |
|---------|`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Where cycle detection is used
                            </h3>
                            <ul className="list">
                                <li>Prevent infinite loops in traversal.</li>
                                <li>
                                    Detect bugs in linked list pointer wiring.
                                </li>
                                <li>
                                    Graph problems like prerequisites and
                                    dependency graphs.
                                </li>
                                <li>
                                    Identify cyclic dependencies in modules.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Terms and full forms you should know
                            </h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Floyd cycle detection
                                        </span>
                                        <span className="tag">Linked list</span>
                                    </div>
                                    <p className="tBody">
                                        Also called{" "}
                                        <strong>Tortoise and Hare</strong>. Two
                                        pointers move at different speeds. If
                                        there is a cycle, they will meet.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">BFS</span>
                                        <span className="tag">
                                            Breadth First Search
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        BFS explores level by level. In graphs,
                                        cycle detection often uses a{" "}
                                        <strong>visited</strong> set.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">DFS</span>
                                        <span className="tag">
                                            Depth First Search
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        DFS goes deep first. In directed graphs,
                                        a cycle can be detected using a{" "}
                                        <strong>recursion stack</strong> (also
                                        called current path set).
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">DAG</span>
                                        <span className="tag">
                                            Directed Acyclic Graph
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        DAG means a directed graph with no
                                        cycles. Many dependency problems require
                                        the graph to be a DAG.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Linked list cycle detection - Floyd algorithm
                            </h3>

                            <p className="p">
                                Use two pointers:
                                <br />
                                <span className="mono">slow</span> moves 1 step,
                                <span className="mono">fast</span> moves 2
                                steps.
                                <br />
                                If there is a cycle, fast will eventually catch
                                slow.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example and complexity
                                </div>
                                <pre className="code">
                                    {`Steps:
slow = slow.next
fast = fast.next.next

If slow == fast -> cycle exists

Time: O(n)
Space: O(1)`}
                                </pre>
                            </div>

                            <div className="warn">
                                <span className="wIcon">
                                    <FiAlertTriangle />
                                </span>
                                <div className="wText">
                                    Always check null before moving fast two
                                    steps, otherwise you will crash on end of
                                    list.
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Graph cycle detection - visited and path set
                            </h3>

                            <p className="p">
                                Graph cycle detection depends on graph type:
                                <br />- <strong>Undirected graph</strong>: cycle
                                if you reach a visited node that is not the
                                parent.
                                <br />- <strong>Directed graph</strong>: cycle
                                if you visit a node that is already in the
                                current DFS path set.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Undirected graph rule
                                    </div>
                                    <p className="miniText">
                                        Use visited set and parent tracking.
                                    </p>
                                    <pre className="code">
                                        {`DFS(u, parent):
mark u visited
for each v in neighbors(u):
  if not visited(v): DFS(v, u)
  else if v != parent: cycle`}
                                    </pre>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Directed graph rule
                                    </div>
                                    <p className="miniText">
                                        Use visited set and path set.
                                    </p>
                                    <pre className="code">
                                        {`DFS(u):
mark u visited
mark u inPath
for each v in neighbors(u):
  if not visited(v): DFS(v)
  else if inPath(v): cycle
unmark u inPath`}
                                    </pre>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Complexity (graph)
                                </div>
                                <pre className="code">
                                    {`For adjacency list:
Time: O(V + E)
Space: O(V)

V = number of vertices (nodes)
E = number of edges`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Beginner checklist before writing code
                            </h3>

                            <ol className="steps">
                                <li>
                                    Identify the structure: linked list or
                                    graph.
                                </li>
                                <li>Graph type: directed or undirected.</li>
                                <li>
                                    Choose approach: Floyd (linked list) or
                                    visited sets (graph).
                                </li>
                                <li>Write time and space complexity.</li>
                                <li>
                                    Test edge cases: empty, one node, self-loop,
                                    disconnected graph.
                                </li>
                            </ol>

                            <div className="finalNote">
                                Cycle detection is basically "do we revisit a
                                node" - the method changes based on structure.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CycleDetection;
