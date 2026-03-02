// src/topics/dijkstra/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiMap,
    FiNavigation,
    FiCpu,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const Dijkstra = () => {
    const [open, setOpen] = useState(false);

    const data = useMemo(() => {
        return {
            title: "Dijkstra - shortest path algorithm",
            sub: "Dijkstra's algorithm finds the shortest path from one source node to all other nodes in a weighted graph with non-negative edge weights.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="dijkstra">
            <div className="top">
                <h2 className="title">Dijkstra</h2>
                <p className="sub">{data.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiNavigation />
                        Shortest paths
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Greedy approach
                    </span>
                    <span className="pill">
                        <FiCheckCircle />
                        Non-negative weights
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="dijkstra-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiMap />
                        </span>

                        <div className="accText">
                            <div className="accTitle">{data.title}</div>
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
                    id="dijkstra-panel"
                    className={`panel ${open ? "open" : ""}`}
                >
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and meaning</h3>
                            <p className="p">
                                <strong>Dijkstra</strong> is named after Dutch
                                computer scientist{" "}
                                <strong>Edsger W. Dijkstra</strong>.
                                <br />
                                It is a <strong>shortest path</strong> algorithm
                                for graphs where every edge weight is{" "}
                                <strong>non-negative</strong>.
                            </p>

                            <div className="note">
                                <span className="nIcon">
                                    <FiAlertTriangle />
                                </span>
                                <p className="nText">
                                    If a graph contains negative edge weights,
                                    Dijkstra can give wrong answers. Use{" "}
                                    <span className="mono">Bellman-Ford</span>{" "}
                                    in that case.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">What problem it solves</h3>
                            <p className="p">
                                Given a source node{" "}
                                <span className="mono">S</span>, Dijkstra finds
                                the minimum distance to every node.
                                <br />
                                It can also help reconstruct the actual shortest
                                path using a{" "}
                                <span className="mono">parent</span> array.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">
                                    Real world example
                                </div>
                                <pre className="code">
                                    {`You are at location S.
Edges represent roads.
Weights represent travel time.

Dijkstra finds the fastest route
from S to every other location.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Key terms explained</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Graph</span>
                                        <span className="tag">DS</span>
                                    </div>
                                    <p className="tBody">
                                        A set of nodes (vertices) connected by
                                        edges. Used to model networks.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Weighted graph
                                        </span>
                                        <span className="tag">Graph</span>
                                    </div>
                                    <p className="tBody">
                                        Each edge has a number (weight) like
                                        cost, time, distance.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Non-negative weight
                                        </span>
                                        <span className="tag">Rule</span>
                                    </div>
                                    <p className="tBody">
                                        Weight is{" "}
                                        <span className="mono">&gt;= 0</span>.
                                        Dijkstra assumes distances never become
                                        better by taking extra edges with
                                        negative cost.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">
                                            Priority Queue
                                        </span>
                                        <span className="tag">PQ</span>
                                    </div>
                                    <p className="tBody">
                                        A data structure where the smallest
                                        distance item is removed first.
                                        <br />
                                        PQ full form is{" "}
                                        <strong>Priority Queue</strong>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">How the algorithm works</h3>

                            <ol className="steps">
                                <li>
                                    Set distance of source{" "}
                                    <span className="mono">S</span> to{" "}
                                    <span className="mono">0</span>. All others
                                    to <span className="mono">Infinity</span>{" "}
                                    (means unknown large).
                                </li>
                                <li>
                                    Use a{" "}
                                    <span className="mono">Priority Queue</span>{" "}
                                    to always pick the node with the current
                                    smallest distance.
                                </li>
                                <li>
                                    For each neighbor, try to relax the edge:
                                    <br />
                                    <span className="mono">
                                        if dist[u] + w &lt; dist[v]
                                    </span>{" "}
                                    then update dist[v].
                                </li>
                                <li>
                                    Repeat until the priority queue is empty.
                                </li>
                            </ol>

                            <div className="exampleBlock">
                                <div className="exTitle">Term - Relaxation</div>
                                <pre className="code">
                                    {`Relaxation means:
Try improving the best known distance to a node.

If you found a cheaper path,
update the distance and the parent.`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Step by step example</h3>

                            <p className="p">
                                Graph (directed or undirected) with weights:
                            </p>

                            <pre className="code">
                                {`Nodes: A, B, C, D
Edges:
A -> B (1)
A -> C (4)
B -> C (2)
B -> D (6)
C -> D (3)

Source: A

Expected shortest distances:
A=0
B=1
C=3  (A->B->C)
D=6  (A->B->C->D)`}
                            </pre>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why A-&gt;C is not chosen
                                    </div>
                                    <p className="miniText">
                                        A-&gt;C cost is 4, but A-&gt;B-&gt;C
                                        cost is 1 + 2 = 3, so 3 is better.
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why D becomes 6
                                    </div>
                                    <p className="miniText">
                                        Best path to D is via C: distance to C
                                        is 3, and C-&gt;D is 3, total 6.
                                    </p>
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
                                        With adjacency list + priority queue:
                                        <br />
                                        <span className="mono">
                                            O((V + E) log V)
                                        </span>
                                        <br />V is number of vertices, E is
                                        number of edges.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Space</span>
                                        <span className="tag">Big O</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">O(V + E)</span>{" "}
                                        for adjacency list and arrays.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">When to use and when not to</h3>

                            <div className="useGrid">
                                <div className="useCard">
                                    <div className="useTitle">Use when</div>
                                    <ul className="list">
                                        <li>Weighted graph</li>
                                        <li>All weights are non-negative</li>
                                        <li>
                                            You need shortest distance from one
                                            source to all nodes
                                        </li>
                                    </ul>
                                </div>

                                <div className="useCard">
                                    <div className="useTitle">Avoid when</div>
                                    <ul className="list">
                                        <li>Negative weights exist</li>
                                        <li>
                                            You need all-pairs shortest paths
                                            (consider Floyd-Warshall)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Quick checklist</h3>
                            <ul className="check">
                                <li>Graph representation: adjacency list</li>
                                <li>
                                    Use priority queue to pick smallest distance
                                </li>
                                <li>Track parent to rebuild shortest path</li>
                                <li>Confirm no negative weights</li>
                            </ul>

                            <div className="finalNote">
                                One line summary: always expand the currently
                                cheapest node and relax edges to improve paths.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Dijkstra;
