---
layout: /layouts/base
title: Blog
eleventyNavigation:
    key: Blog
    order: 2
---
{% for post in collections.posts %}
    <ul>
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    </ul>
{% endfor %}