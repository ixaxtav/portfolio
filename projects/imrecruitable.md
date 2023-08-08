---
title: ImRecruitable
period: Jun 2018 - Jan 2020
short_description: A web application that connects high school athletes with college coaches.
description: The ImRecruitable Athletic Recruiting App helps high school athletes with college recruiting. It provides tools to showcase skills, connect with coaches, explore scholarships, and learn about NCAA eligibility.
image: /assets/images/imrecruitable/imrecruitable.png
stacks: React, Redux, Node.js, Express, MongoDB, Stripe, Heroku
website: https://app.imrecruitable.com
pics:
  - /assets/images/imrecruitable/imrecruitable-1.webp
  - /assets/images/imrecruitable/imrecruitable-2.webp
  - /assets/images/imrecruitable/imrecruitable-3.webp
  - /assets/images/imrecruitable/imrecruitable-4.webp
---

<div>
    <div style="display: flex;">
        <a href="/projects" style="color: rgb(255, 99, 195)">Projects &raquo;</a>
        <p style="padding-left: 5px;"> {{title}}
        <span>({{period}})</span>
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
                    </a>
                </div>
            </li>
            <li>
                <div>
                <span class="badge">STACK</span>
                <span>{{stacks}}</span>
                </div>
            </li>
        </ul>
    </div>
    <div style="margin-top: 25px">
        <p class="section-title">Snapshots</p>
        {% for pic in pics %}
        <div class="snapshot">
            <img src="{{pic}}">
        </div>
        {% endfor %}
    </div>
</div>
