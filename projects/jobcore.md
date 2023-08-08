---
title: JobCore
period: Feb 2020 - Dec 2021
short_description: Schedule and manage shifts easily.
description: JobCore Talent is a platform focused on the hospitality industry that connects caterers, full service restaurants, nightclubs, bars and janitorial services companies to qualified part-time workers.
image: /assets/images/jobcore/emp-calendar.png
stacks: React, React Native, Flux, Python, PostgreSQL, Heroku, Vercel, Gatsby, Django REST Framework
website: https://employer.jobcore.co
pics:
  - /assets/images/jobcore/animation-employer2.gif
  - /assets/images/jobcore/emp-calendar.png
  - /assets/images/jobcore/emp-payroll.png
  - /assets/images/jobcore/emp-report.png
  - /assets/images/jobcore/emp-talent.png
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
                    <span class="badge-danger">INACTIVE</span>
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
