---
title: Tic-Tac-Toe
short_description: A Tic Tac Toe app is a game where two players try to get three in a row on a grid.
description: A Tic Tac Toe app is a digital adaptation of the classic game where two players take turns marking a grid with X's and O's, aiming to get three in a row horizontally, vertically, or diagonally..
image: /assets/images/tictactoe/tictactoe1.png
stacks: React, Vite, Typescript, Tailwind CSS
website: https://ixaxtav.github.io/tic-tac-toe
code: https://github.com/ixaxtav/tic-tac-toe
pics:
  - /assets/images/tictactoe/tictactoe.gif
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
