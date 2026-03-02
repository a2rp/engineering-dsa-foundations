// src/components/about/index.jsx
import React from "react";
import { Styled } from "./styled";
import {
    FiTarget,
    FiTrendingUp,
    FiZap,
    FiCpu,
    FiCheckCircle,
    FiLayers,
} from "react-icons/fi";

const About = () => {
    return (
        <Styled.Wrapper id="about">
            <div className="top">
                <h2 className="title">About</h2>
                <p className="sub">
                    Engineering DSA Foundations is a structured revision space
                    for core data structures and algorithms. It focuses on
                    patterns, time-space analysis, and clear implementation.
                </p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap /> At-a-glance revision
                    </span>
                    <span className="pill">
                        <FiCpu /> Complexity first
                    </span>
                    <span className="pill">
                        <FiCheckCircle /> Edge cases included
                    </span>
                </div>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="cardTop">
                        <span className="cIcon">
                            <FiTarget />
                        </span>
                        <h3 className="h3">Goal</h3>
                    </div>
                    <p className="p">
                        Build strong problem-solving intuition with clean
                        patterns. Not random problems, but repeatable thinking.
                    </p>
                    <ul className="list">
                        <li>Pattern recognition</li>
                        <li>Constraints and tradeoffs</li>
                        <li>Readable implementations</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="cIcon">
                            <FiTrendingUp />
                        </span>
                        <h3 className="h3">How to use</h3>
                    </div>
                    <p className="p">
                        Pick a topic, skim the notes, and run the
                        implementations. Then solve a few curated problems and
                        review edge cases.
                    </p>
                    <ul className="list">
                        <li>Theory first, then code</li>
                        <li>Always write complexity</li>
                        <li>Note common pitfalls</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="cIcon">
                            <FiLayers />
                        </span>
                        <h3 className="h3">What is inside</h3>
                    </div>
                    <p className="p">
                        Topic-wise structure with quick notes and practical
                        patterns used across interviews and real systems.
                    </p>
                    <ul className="list">
                        <li>Arrays, strings, recursion</li>
                        <li>Trees, heaps, graphs</li>
                        <li>Dynamic programming patterns</li>
                    </ul>
                </div>
            </div>

            <div className="bottom">
                <div className="callout">
                    <div className="calloutLeft">
                        <span className="bIcon">
                            <FiCpu />
                        </span>
                        <div className="calloutText">
                            <div className="bTitle">Rule for every problem</div>
                            <div className="bSub">
                                Explain why it works, then write time and space
                                complexity, and list edge cases.
                            </div>
                        </div>
                    </div>

                    <div className="calloutRight">
                        <span className="chip">
                            <FiZap /> Pattern
                        </span>
                        <span className="chip">
                            <FiTarget /> Approach
                        </span>
                        <span className="chip">
                            <FiCheckCircle /> Edge cases
                        </span>
                        <span className="chip">
                            <FiCpu /> Complexity
                        </span>
                    </div>
                </div>

                <div className="note">
                    <span className="nIcon">
                        <FiZap />
                    </span>
                    <p className="nText">
                        Focus on mastering a small set of patterns deeply. Most
                        problems are variations of the same moves.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default About;
