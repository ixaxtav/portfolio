---
title: BMI Calculator
short_description: This is the code for a simple BMI (Body Mass Index) calculator using HTML and jQuery.
description: The BMI calculator consists of two tabs "Metric" and "Imperial". Users can switch between these tabs to enter their weight and height in the respective units.
image: /assets/images/bmi-calculator/bmi-calculator.png
stacks: HTML, CSS
website: https://ixaxtav.github.io/bmi-calculator/
code: https://github.com/ixaxtav/bmi-calculator
pics:
  - /assets/images/bmi-calculator/bmi-calculator.gif
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
