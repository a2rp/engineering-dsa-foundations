// src/topics/graphs/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShare2,
    FiGitBranch,
    FiMap,
    FiActivity,
    FiCheckCircle,
} from "react-icons/fi";

const Graphs = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Graphs - connected data and traversal patterns",
            sub: "Graphs show relationships. Learn how to represent them, traverse them, and solve common patterns like shortest path and cycle detection.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="graphs">
            <div className="top">
                <h2 className="title">Graphs</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiShare2 />
                        Relationships
                    </span>
                    <span className="pill">
                        <FiGitBranch />
                        Traversals
                    </span>
                    <span className="pill">
                        <FiMap />
                        Shortest paths
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="graphs-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiActivity />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} graphs
                                notes with full forms, rules, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div
                    id="graphs-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What is a graph</h3>
                            <p className="p">
                                A <strong>graph</strong> is a set of{" "}
                                <strong>nodes</strong> (also called{" "}
                                <strong>vertices</strong>) connected by{" "}
                                <strong>edges</strong>.
                                <br />
                                Graphs are used to model relationships like
                                roads between cities, friends in social network,
                                or dependencies between tasks.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Vertex</div>
                                    <p className="miniText">
                                        A point in the graph.
                                        <br />
                                        Example: user, city, web page, task.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">Edge</div>
                                    <p className="miniText">
                                        A connection between vertices.
                                        <br />
                                        Example: friendship, road, link,
                                        dependency.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Types of graphs</h3>
                            <ul className="list">
                                <li>
                                    <strong>Undirected graph</strong> - edges go
                                    both ways (A - B).
                                </li>
                                <li>
                                    <strong>Directed graph</strong> - edges have
                                    direction (A - B does not mean B - A).
                                </li>
                                <li>
                                    <strong>Weighted graph</strong> - edges have
                                    weights like distance or cost.
                                </li>
                                <li>
                                    <strong>Unweighted graph</strong> - edges
                                    are treated equally.
                                </li>
                                <li>
                                    <strong>Cyclic graph</strong> - contains a
                                    cycle (you can return to a node).
                                </li>
                                <li>
                                    <strong>Acyclic graph</strong> - no cycles.
                                    A directed acyclic graph is called{" "}
                                    <span className="mono">DAG</span>.
                                </li>
                            </ul>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">DAG</span> - Directed
                                    Acyclic Graph
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How to represent a graph</h3>
                            <p className="p">
                                Two common representations are{" "}
                                <strong>adjacency list</strong> and{" "}
                                <strong>adjacency matrix</strong>.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Adjacency list
                                        </span>
                                        <span className="tag">Most common</span>
                                    </div>
                                    <p className="tBody">
                                        For each vertex, store a list of its
                                        neighbors.
                                        <br />
                                        Best for sparse graphs.
                                    </p>
                                    <pre className="code">
                                        {`0: [1, 2]
1: [0, 3]
2: [0]
3: [1]`}
                                    </pre>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Adjacency matrix
                                        </span>
                                        <span className="tag">Simple</span>
                                    </div>
                                    <p className="tBody">
                                        A 2D grid where matrix[i][j] is 1 if
                                        edge exists.
                                        <br />
                                        Best for dense graphs.
                                    </p>
                                    <pre className="code">
                                        {`   0 1 2 3
0: 0 1 1 0
1: 1 0 0 1
2: 1 0 0 0
3: 0 1 0 0`}
                                    </pre>
                                </div>
                            </div>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    When to choose which
                                </div>
                                <pre className="code">
                                    {`Adjacency list:
- memory: O(V + E)
- iterate neighbors fast

Adjacency matrix:
- memory: O(V * V)
- check edge i->j fast`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                BFS and DFS with full forms and usage
                            </h3>

                            <div className="patternGrid">
                                <div className="pattern">
                                    <div className="pHead">
                                        BFS - Breadth First Search
                                    </div>
                                    <p className="pBody">
                                        BFS visits nodes level by level.
                                        <br />
                                        Use BFS for shortest path in{" "}
                                        <strong>unweighted</strong> graphs.
                                    </p>
                                    <pre className="code">
                                        {`Graph:
0 - 1 - 3
|   |
2   4

BFS from 0:
0, 1, 2, 3, 4`}
                                    </pre>
                                    <div className="miniHint">
                                        Time: O(V + E), Space: O(V)
                                    </div>
                                </div>

                                <div className="pattern">
                                    <div className="pHead">
                                        DFS - Depth First Search
                                    </div>
                                    <p className="pBody">
                                        DFS goes deep first, then backtracks.
                                        <br />
                                        Use DFS for connected components, cycle
                                        detection, and topological sort.
                                    </p>
                                    <pre className="code">
                                        {`Graph:
0 - 1 - 3
|   |
2   4

One DFS from 0:
0, 1, 3, 4, 2`}
                                    </pre>
                                    <div className="miniHint">
                                        Time: O(V + E), Space: O(V)
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Topological sort with full form and meaning
                            </h3>
                            <p className="p">
                                <strong>Topological sort</strong> is an ordering
                                of nodes in a <span className="mono">DAG</span>{" "}
                                such that for every directed edge A - B, A comes
                                before B.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Example: task dependencies
                                </div>
                                <pre className="code">
                                    {`A -> C
B -> C
C -> D

Valid order:
A, B, C, D
or
B, A, C, D`}
                                </pre>
                            </div>

                            <ul className="list">
                                <li>
                                    Use in build systems, course prerequisites,
                                    scheduling, dependency graphs.
                                </li>
                                <li>
                                    If a directed graph has a cycle, topological
                                    sort is not possible.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Dijkstra with full form and when to use
                            </h3>
                            <p className="p">
                                <strong>Dijkstra algorithm</strong> finds the
                                shortest paths from a source node to all other
                                nodes in a <strong>weighted</strong> graph with{" "}
                                <strong>non-negative</strong> edge weights.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Quick example (costs)
                                </div>
                                <pre className="code">
                                    {`0 -> 1 (4)
0 -> 2 (1)
2 -> 1 (2)

Shortest 0 to 1:
0 -> 2 -> 1
cost = 1 + 2 = 3`}
                                </pre>
                            </div>

                            <ul className="list">
                                <li>
                                    Uses a <span className="mono">PQ</span> -
                                    Priority Queue internally.
                                </li>
                                <li>Avoid when negative weights exist.</li>
                            </ul>

                            <div className="abbrGrid">
                                <div className="abbr">
                                    <span className="mono">PQ</span> - Priority
                                    Queue
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Cycle detection with full forms
                            </h3>
                            <p className="p">
                                A <strong>cycle</strong> means you can start at
                                a node and come back to it by following edges.
                                Cycle detection depends on graph type.
                            </p>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Undirected graph
                                        </span>
                                        <span className="tag">DFS</span>
                                    </div>
                                    <p className="tBody">
                                        Use DFS and track parent. If you see a
                                        visited neighbor that is not the parent,
                                        a cycle exists.
                                    </p>
                                    <pre className="code">
                                        {`A - B
|   |
D - C

There is a cycle.`}
                                    </pre>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Directed graph
                                        </span>
                                        <span className="tag">
                                            Recursion stack
                                        </span>
                                    </div>
                                    <p className="tBody">
                                        Use DFS with recursion stack (currently
                                        in path). If you visit a node that is
                                        still in the current path, cycle exists.
                                    </p>
                                    <pre className="code">
                                        {`A -> B -> C -> A

Back edge creates a cycle.`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">A simple workflow to follow</h3>
                            <ol className="steps">
                                <li>
                                    Identify graph type - directed or
                                    undirected, weighted or unweighted.
                                </li>
                                <li>
                                    Choose representation - adjacency list in
                                    most cases.
                                </li>
                                <li>
                                    Pick traversal - BFS for level order or
                                    shortest path in unweighted graphs, DFS for
                                    exploration.
                                </li>
                                <li>Track visited to avoid infinite loops.</li>
                                <li>Write time complexity as O(V + E).</li>
                            </ol>

                            <div className="finalNote">
                                Graph problems look scary, but most reduce to:
                                representation + traversal + one extra rule.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Graphs;
