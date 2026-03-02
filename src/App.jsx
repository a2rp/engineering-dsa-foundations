// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import CoreFoundations from "./topics/coreFoundations";
import TimeSpaceComplexity from "./topics/timeSpaceComplexity";
import BigONotation from "./topics/bigONotation";
import BestAverageWorst from "./topics/bestAverageWorst";
import AmortizedAnalysis from "./topics/amortizedAnalysis";
import Arrays from "./topics/arrays";
import PrefixSum from "./topics/prefixSum";
import SlidingWindow from "./topics/slidingWindow";
import TwoPointers from "./topics/twoPointers";
import Strings from "./topics/strings";
import PatternMatching from "./topics/patternMatching";
import AnagramLogic from "./topics/anagramLogic";
import SubstringProblems from "./topics/substringProblems";
import Recursion from "./topics/recursion";
import BaseCaseLogic from "./topics/baseCaseLogic";
import CallStack from "./topics/callStack";
import TailRecursion from "./topics/tailRecursion";
import LinkedList from "./topics/linkedList";
import Reverse from "./topics/reverse";
import DetectCycle from "./topics/detectCycle";
import Merge from "./topics/linkedList/merge";
import StackTopic from "./topics/stack";
import BalancedParentheses from "./topics/balancedParentheses";
import MonotonicStack from "./topics/monotonicStack";
import QueueTopic from "./topics/queue";
import CircularQueue from "./topics/circularQueue";
import Deque from "./topics/deque";
import Trees from "./topics/trees";
import BinaryTree from "./topics/binaryTree";
import BST from "./topics/bst";
import Traversals from "./topics/traversals";
import HeightDepth from "./topics/heightDepth";
import Lca from "./topics/lca";
import HeapPriorityQueue from "./topics/heapPriorityQueue";
import MinHeap from "./topics/minHeap";
import MaxHeap from "./topics/maxHeap";
import Heapify from "./topics/heapify";
import Graphs from "./topics/graphs";
import BFS from "./topics/bfs";
import DFS from "./topics/dfs";
import TopologicalSort from "./topics/topologicalSort";
import Dijkstra from "./topics/dijkstra";
import CycleDetection from "./topics/cycleDetection";
import DynamicProgramming from "./topics/dynamicProgramming";
import Memoization from "./topics/memoization";
import Tabulation from "./topics/tabulation";
import Knapsack from "./topics/knapsack";
import Lis from "./topics/lis";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <About />

                    <CoreFoundations />
                    <TimeSpaceComplexity />
                    <BigONotation />
                    <BestAverageWorst />
                    <AmortizedAnalysis />
                    <Arrays />
                    <PrefixSum />
                    <SlidingWindow />
                    <TwoPointers />
                    <Strings />
                    <PatternMatching />
                    <AnagramLogic />
                    <SubstringProblems />
                    <Recursion />
                    <BaseCaseLogic />
                    <CallStack />
                    <TailRecursion />
                    <LinkedList />
                    <Reverse />
                    <DetectCycle />
                    <Merge />
                    <StackTopic />
                    <BalancedParentheses />
                    <MonotonicStack />
                    <QueueTopic />
                    <CircularQueue />
                    <Deque />
                    <Trees />
                    <BinaryTree />
                    <BST />
                    <Traversals />
                    <HeightDepth />
                    <Lca />
                    <HeapPriorityQueue />
                    <MinHeap />
                    <MaxHeap />
                    <Heapify />
                    <Graphs />
                    <BFS />
                    <DFS />
                    <TopologicalSort />
                    <Dijkstra />
                    <CycleDetection />
                    <DynamicProgramming />
                    <Memoization />
                    <Tabulation />
                    <Knapsack />
                    <Lis />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
