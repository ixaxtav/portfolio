---
title: Task Management App
short_description: Simple Task Management App
description: The app consists of a form where users can enter task details such as title, description, and deadline. When the user submits the form, the addTask function is triggered. It validates the input fields, creates a task object, and stores it in the browser's localStorage.
image: /assets/images/task-management-app/task-management-app.png
stacks: HTML, CSS
website: https://ixaxtav.github.io/simple-task-management-app/
code: https://github.com/ixaxtav/task-management-app
pics:
  - /assets/images/task-management-app/task-management-app.gif
---

<div>
    <div style="display: flex;">
        <a href="/projects" style="color: rgb(255, 99, 195)">Projects &raquo;</a>
        <p style="padding-left: 5px;"> {{title}}
        </p>
    </div>
    <div style="margin-top: 25px">
        <p class="section-title">Description</p>
        <p style="text-indent: 1em">{{description}}</p>
    </div>
    <div style="margin-top: 25px">
        <ul>
            <li>
                <div>
                    <span class="badge">WEBSITE</span>
                    <a href="{{website}}" class="project-url">
                    {{website}}
                    <svg viewBox="0 0 24 24" focusable="false" class="icon"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></g></svg>
                    </a>
                </div>
            </li>
            <li>
                <div>
                <span class="badge">STACK</span>
                <span>{{stacks}}</span>
                </div>
            </li>
            <li>
                <div>
                <span class="badge">CODE</span>
                   <a href="{{code}}" class="project-url">
                    {{code}}
                    <svg viewBox="0 0 24 24" focusable="false" class="icon"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></g></svg>
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <div style="margin-top: 25px">
        <p class="section-title">App Demonstration</p>
        {% for pic in pics %}
        <div class="app-demonstration">
            <img src="{{pic}}">
        </div>
        {% endfor %}
    </div>
</div>
