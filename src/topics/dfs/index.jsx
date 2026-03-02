// src/topics/dfs/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGitBranch,
    FiCpu,
    FiCheckCircle,
    FiAlertTriangle,
} from "react-icons/fi";

const DFS = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper id="dfs">
            <div className="top">
                <h2 className="title">DFS</h2>
                <p className="sub">
                    DFS means Depth First Search. It is a graph and tree
                    traversal technique where you go as deep as possible first,
                    then backtrack and explore other paths.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiGitBranch /> Traversal
                    </span>
                    <span className="pill">
                        <FiCpu /> Stack based
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Works on graphs and trees
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="dfs-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiGitBranch />
                        </span>
                        <div className="accText">
                            <div className="accTitle">
                                DFS - Depth First Search
                            </div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} notes,
                                examples, and complexity
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                <div id="dfs-panel" className={`panel ${open ? "open" : ""}`}>
                    <div className="panelInner">
                        <section className="sec">
                            <h3 className="h3">What DFS does</h3>
                            <p className="p">
                                DFS explores one path fully before trying the
                                next path.
                                <br />
                                It naturally uses a <strong>stack</strong>
                                concept.
                                <br />
                                In recursion, the <strong>call stack</strong> is
                                that stack.
                            </p>

                            <div className="miniGrid">
                                <div className="miniCard">
                                    <div className="miniTitle">Best for</div>
                                    <p className="miniText">
                                        - Finding connected components
                                        <br />
                                        - Detecting cycles
                                        <br />
                                        - Topological sort (with finishing time)
                                        <br />- Path existence problems
                                    </p>
                                </div>

                                <div className="miniCard">
                                    <div className="miniTitle">Key idea</div>
                                    <p className="miniText">
                                        Mark a node visited, then keep moving to
                                        an unvisited neighbor until stuck, then
                                        backtrack.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">DFS on a small graph</h3>
                            <p className="p">
                                Graph (undirected):
                                <span className="mono">
                                    {" "}
                                    1 - 2 - 4
                                </span> and <span className="mono">2 - 3</span>
                                <br />
                                Adjacency list:
                                <span className="mono">
                                    {" "}
                                    1:[2], 2:[1,3,4], 3:[2], 4:[2]
                                </span>
                            </p>

                            <div className="exampleBlock">
                                <div className="exTitle">Traversal order</div>
                                <pre className="code">
                                    {`Start at 1:
visit 1
go to 2
go to 3 (dead end) backtrack to 2
go to 4 (dead end) backtrack to 2
done

One possible DFS order: 1, 2, 3, 4`}
                                </pre>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Recursive DFS (uses call stack)
                            </h3>
                            <p className="p">
                                Recursion means a function calls itself.
                                <br />
                                The system remembers where to return using the{" "}
                                <strong>call stack</strong>.
                            </p>

                            <pre className="code">
                                {`// adjacency list: graph[u] = array of neighbors
function dfs(u, graph, visited) {
  visited[u] = true;

  for (const v of graph[u]) {
    if (!visited[v]) {
      dfs(v, graph, visited);
    }
  }
}`}
                            </pre>

                            <div className="note">
                                <span className="nIcon">
                                    <FiAlertTriangle />
                                </span>
                                <p className="nText">
                                    On very large graphs, recursion can hit call
                                    stack limits. In that case, use an iterative
                                    DFS with an explicit stack.
                                </p>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">
                                Iterative DFS (explicit stack)
                            </h3>
                            <p className="p">
                                Here, you maintain your own stack array. This is
                                safe when recursion depth can be huge.
                            </p>

                            <pre className="code">
                                {`function dfsIterative(start, graph) {
  const visited = {};
  const stack = [start];

  while (stack.length) {
    const u = stack.pop();
    if (visited[u]) continue;

    visited[u] = true;

    // push neighbors
    for (const v of graph[u]) {
      if (!visited[v]) stack.push(v);
    }
  }

  return visited;
}`}
                            </pre>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Time and space complexity</h3>

                            <div className="termGrid">
                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Time</span>
                                        <span className="tag">O(V + E)</span>
                                    </div>
                                    <p className="tBody">
                                        V means number of vertices (nodes).
                                        <br />
                                        E means number of edges (connections).
                                        <br />
                                        DFS visits each node once and checks
                                        each edge at most a constant number of
                                        times.
                                    </p>
                                </div>

                                <div className="term">
                                    <div className="tHead">
                                        <span className="mono">Space</span>
                                        <span className="tag">O(V)</span>
                                    </div>
                                    <p className="tBody">
                                        Visited array takes O(V).
                                        <br />
                                        Stack or recursion depth can take up to
                                        O(V) in worst case.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Common mistakes</h3>
                            <ul className="list">
                                <li>
                                    Not using a visited structure, causing
                                    infinite loops in graphs.
                                </li>
                                <li>
                                    Marking visited too late. Mark it when you
                                    take a node, not after exploring everything.
                                </li>
                                <li>
                                    Assuming DFS order is always unique. It
                                    depends on neighbor ordering.
                                </li>
                            </ul>
                        </section>

                        <section className="sec">
                            <h3 className="h3">Where DFS is used</h3>
                            <ul className="list">
                                <li>Connected components in graphs</li>
                                <li>Cycle detection</li>
                                <li>Topological ordering in directed graphs</li>
                                <li>Flood fill (grid problems)</li>
                                <li>Maze and path exploration</li>
                            </ul>

                            <div className="finalNote">
                                DFS is basically "go deep, then backtrack". If
                                you can visualize the stack, you understand DFS.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DFS;
