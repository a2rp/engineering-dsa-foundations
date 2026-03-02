// src/topics/bfs/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiCpu,
    FiCheckCircle,
    FiGitBranch,
    FiMapPin,
} from "react-icons/fi";

const BFS = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "BFS - Breadth First Search",
            sub: "BFS is a graph or tree traversal technique that explores level by level. It is the default tool for shortest path in an unweighted graph.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="bfs">
            <div className="top">
                <h2 className="title">BFS</h2>
                <p className="sub">{meta.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers />
                        Level order
                    </span>
                    <span className="pill">
                        <FiCpu />
                        Queue based
                    </span>
                    <span className="pill">
                        <FiMapPin />
                        Shortest path (unweighted)
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="bfs-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGitBranch />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{meta.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                examples, and common use cases
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="bfs-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">Full form and core idea</h3>
                            <p className="p">
                                <strong>BFS</strong> means{" "}
                                <strong>Breadth First Search</strong>.
                                <br />
                                It visits nodes in increasing distance from the
                                start node. In simple words, it explores
                                neighbors first, then neighbors of neighbors.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Key data structure
                                    </div>
                                    <p className="miniText">
                                        A <span className="mono">Queue</span> is
                                        used to process nodes in the same order
                                        they were discovered.
                                    </p>
                                </div>
                                <div className="miniCard">
                                    <div className="miniTitle">
                                        Why it finds shortest path
                                    </div>
                                    <p className="miniText">
                                        In an <strong>unweighted</strong> graph,
                                        each edge has equal cost, so level order
                                        exploration reaches the nearest node
                                        first.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Where BFS is used</h3>
                            <ul className="list">
                                <li>
                                    Shortest path in unweighted graphs (minimum
                                    number of edges)
                                </li>
                                <li>Level order traversal in trees</li>
                                <li>Finding connected components</li>
                                <li>Flood fill problems (grid traversal)</li>
                                <li>
                                    Nearest something problems (nearest 0,
                                    nearest exit, nearest route)
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Important terms explained</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Node</span>
                                        <span className="tag">Graph</span>
                                    </div>
                                    <p className="tBody">
                                        A node (also called vertex) is a point
                                        in a graph. Example: a city in a map.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Edge</span>
                                        <span className="tag">Graph</span>
                                    </div>
                                    <p className="tBody">
                                        An edge is a connection between two
                                        nodes. Example: a road between cities.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Neighbor</span>
                                        <span className="tag">Graph</span>
                                    </div>
                                    <p className="tBody">
                                        A neighbor is a node directly connected
                                        by an edge.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Visited</span>
                                        <span className="tag">Safety</span>
                                    </div>
                                    <p className="tBody">
                                        A visited set prevents infinite loops in
                                        graphs with cycles. It ensures each node
                                        is processed once.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Step by step example (levels)
                            </h3>

                            <p className="p">
                                Example graph (undirected):
                                <br />
                                A connected to B and C
                                <br />
                                B connected to D
                                <br />C connected to E
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">BFS order from A</div>
                                <pre className="code">
                                    {`Level 0: A
Level 1: B, C
Level 2: D, E

Traversal order: A -> B -> C -> D -> E`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                JavaScript implementation (queue based)
                            </h3>

                            <p className="p">
                                This is a basic BFS for a graph using an
                                adjacency list.
                                <br />
                                Adjacency list means each node stores a list of
                                its neighbors.
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Code example</div>
                                <pre className="code">
                                    {`// Adjacency list graph
// A: [B, C], B: [A, D], C: [A, E], D: [B], E: [C]

function bfs(graph, start) {
  const visited = new Set();
  const queue = [];

  visited.add(start);
  queue.push(start);

  const order = [];

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue
    order.push(node);

    const neighbors = graph[node] || [];
    for (const next of neighbors) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }

  return order;
}`}
                                </pre>
                            </div>

                            <div className="note">
                                <span className="nIcon">
                                    <FiCheckCircle />
                                </span>
                                <p className="nText">
                                    Tip: In large inputs, using{" "}
                                    <span className="mono">queue.shift()</span>{" "}
                                    can be slower. You can keep a pointer index
                                    for the queue to make it faster.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Complexity (time and space)</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Time</span>
                                        <span className="tag">O(V + E)</span>
                                    </div>
                                    <p className="tBody">
                                        <span className="mono">V</span> means
                                        number of vertices (nodes).
                                        <br />
                                        <span className="mono">E</span> means
                                        number of edges (connections).
                                        <br />
                                        BFS visits each node once and checks
                                        each edge at most once.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Space</span>
                                        <span className="tag">O(V)</span>
                                    </div>
                                    <p className="tBody">
                                        Visited set can store up to V nodes, and
                                        the queue can also hold up to V nodes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common beginner mistakes</h3>
                            <ul className="list">
                                <li>
                                    Forgetting the visited set in a cyclic graph
                                    leads to infinite loops.
                                </li>
                                <li>
                                    Marking visited too late can add the same
                                    node multiple times to the queue.
                                </li>
                                <li>
                                    Using BFS for weighted shortest path is
                                    wrong. Use Dijkstra for weighted graphs.
                                </li>
                            </ul>

                            <div className="finalNote">
                                BFS is the default tool for "nearest" problems
                                in unweighted graphs and grid maps.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BFS;
