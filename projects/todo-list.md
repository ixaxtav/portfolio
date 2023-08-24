---
title: Todo List
short_description: This app is a simple todo list application built with React.
description: When you open the app, you will see a form where you can enter a task and click "Add Task" to add it to the list. The tasks are displayed as a list below the form. Each task has an "Update" button, which allows you to edit the task, and a "Delete" button to remove it from the list.
image: /assets/images/todo-list/todo-list.png
stacks: React, Typescript
website: https://ixaxtav.github.io/todo-list/
code: https://github.com/ixaxtav/todo-list
pics:
  - /assets/images/todo-list/todo-list.gif
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
