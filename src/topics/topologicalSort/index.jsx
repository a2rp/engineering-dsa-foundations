// src/topics/topologicalSort/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiCpu,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const TopologicalSort = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Topological sort",
            sub: "Topological sort is used to order tasks that have dependencies. It works only on a DAG - Directed Acyclic Graph.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="topological-sort">
            <div className="top">
                <h2 className="title">Topological sort</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch /> Dependencies
                    </span>
                    <span className="pill">
                        <FiCpu /> DAG only
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Build order
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="topo-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGitBranch />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                Click to {open ? "collapse" : "expand"} topic
                            </div>
                            <div className="accHint">
                                Definitions, examples, algorithms, and edge
                                cases
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="topo-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What it means</h3>
                            <p className="p">
                                <strong>Topological sort</strong> is an ordering
                                of nodes in a directed graph where every
                                directed edge{" "}
                                <span className="mono">u -&gt; v</span> means{" "}
                                <span className="mono">u</span> comes before{" "}
                                <span className="mono">v</span>.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">DAG</span>
                                        <span className="tag">Full form</span>
                                    </div>
                                    <p className="tBody">
                                        <strong>DAG</strong> means{" "}
                                        <strong>Directed Acyclic Graph</strong>.
                                        <br />
                                        Directed means edges have direction.
                                        Acyclic means there is no cycle.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Cycle</span>
                                        <span className="tag">Meaning</span>
                                    </div>
                                    <p className="tBody">
                                        A cycle means you can start at a node
                                        and come back to it by following
                                        directions.
                                        <br />
                                        If a cycle exists, a valid topological
                                        order is not possible.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Where it is used</h3>
                            <ul className="list">
                                <li>
                                    Course scheduling - finish prerequisites
                                    first
                                </li>
                                <li>
                                    Build systems - compile dependencies before
                                    dependents
                                </li>
                                <li>
                                    Task planning - execute blocked tasks later
                                </li>
                                <li>
                                    Data pipelines - stage order in ETL
                                    workflows
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">A simple example</h3>
                            <p className="p">
                                Suppose you have tasks:
                                <br />
                                <span className="mono">A</span> = Learn basics,
                                <span className="mono">B</span> = Learn arrays,
                                <span className="mono">C</span> = Learn graphs,
                                <span className="mono">D</span> = Solve topo
                                sort.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Dependencies as edges
                                </div>
                                <pre className="code">
                                    {`A -> B
B -> C
C -> D

One valid topological order:
A, B, C, D`}
                                </pre>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Another graph example
                                </div>
                                <pre className="code">
                                    {`Edges:
1 -> 2
1 -> 3
2 -> 4
3 -> 4

Valid orders:
1, 2, 3, 4
1, 3, 2, 4`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Two standard algorithms (both important)
                            </h3>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Kahn's algorithm (BFS based)
                                    </div>
                                    <p className="miniText">
                                        Kahn's algorithm uses{" "}
                                        <strong>in-degree</strong>.
                                        <br />
                                        In-degree means how many incoming edges
                                        a node has.
                                        <br />
                                        Start with nodes that have in-degree 0
                                        and remove edges step by step.
                                    </p>

                                    <div className="exampleBlock">
                                        <div className="exTitle">
                                            Core steps (high level)
                                        </div>
                                        <pre className="code">
                                            {`1) Compute in-degree for every node
2) Push all nodes with in-degree 0 into a queue
3) Pop from queue, add to answer
4) Reduce in-degree of its neighbors
5) If a neighbor becomes 0, push it
6) If answer size != nodes count -> cycle exists`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        DFS based topological sort
                                    </div>
                                    <p className="miniText">
                                        DFS means{" "}
                                        <strong>Depth First Search</strong>.
                                        <br />
                                        In DFS topo sort, you add a node to the
                                        result after exploring all its outgoing
                                        neighbors.
                                        <br />
                                        Final answer is reverse of finishing
                                        order.
                                    </p>

                                    <div className="exampleBlock">
                                        <div className="exTitle">
                                            Core idea (high level)
                                        </div>
                                        <pre className="code">
                                            {`1) Run DFS from every unvisited node
2) After visiting all neighbors, push node into a stack/list
3) Reverse the stack/list to get topo order
4) If you detect a back edge -> cycle exists`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity</h3>
                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Time</span>
                                        <span className="tag">Big O</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">O(V + E)</span>{" "}
                                        where
                                        <br />
                                        <span className="mono">V</span> is
                                        number of vertices (nodes)
                                        <br />
                                        <span className="mono">E</span> is
                                        number of edges
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Space</span>
                                        <span className="tag">Big O</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">O(V + E)</span>{" "}
                                        for adjacency list plus extra arrays
                                        like in-degree or visited.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Edge cases and pitfalls</h3>

                            <div className="warn">
                                <span className="wIcon">
                                    <FiAlertTriangle />
                                </span>
                                <div className="wText">
                                    <div className="wTitle">
                                        Topological sort works only for DAG
                                    </div>
                                    <div className="wSub">
                                        If the graph has a cycle, there is no
                                        valid ordering that satisfies all
                                        dependencies.
                                    </div>
                                </div>
                            </div>

                            <ul className="list">
                                <li>
                                    Multiple valid orders can exist - any valid
                                    order is fine.
                                </li>
                                <li>
                                    Disconnected graph is fine - you still get a
                                    valid order covering all nodes.
                                </li>
                                <li>
                                    Cycle detection: if Kahn's result length is
                                    less than V, a cycle exists.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Mini practice</h3>
                            <ol className="steps">
                                <li>
                                    Convert prerequisites into directed edges.
                                </li>
                                <li>
                                    Try Kahn's algorithm and write topo order.
                                </li>
                                <li>
                                    Check if all nodes appear - if not, cycle
                                    exists.
                                </li>
                            </ol>

                            <div className="finalNote">
                                Think of topo sort as "dependency safe order".
                                If something must happen before something else,
                                topo sort is the tool.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TopologicalSort;
