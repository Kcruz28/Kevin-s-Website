import { FloatingNav } from "@/components/ui/floating-navbar";
import "../app/globals.css";
export default function Projects() {
    return (
        <div>
            <FloatingNav />
        <h1>Projects</h1>
        <p>
            Here are some of the projects I have worked on:
        </p>
        <ul>
            <li>Project 1: Description of project 1</li>
            <li>Project 2: Description of project 2</li>
            <li>Project 3: Description of project 3</li>
        </ul>
        </div>
    );
 }