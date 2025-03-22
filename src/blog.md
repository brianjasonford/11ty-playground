---
layout: /layouts/base
title: Blog
eleventyExcludeFromCollections: ["posts"]
eleventyNavigation:
    key: Blog
    order: 2
---
This is a blog index page.

{% for post in collections.posts %}
    <ul>
        <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    </ul>
{% endfor %}