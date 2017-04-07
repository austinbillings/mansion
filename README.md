![Mansion Logo](http://austinbillings.com/projects/Mansion.png)

**Mansion** is a flexbox-based CSS grid, layout, and breakpoint framework, written in LESS, for responsive layout classes that just make sense. Let's dig in.

## A Quick Taste
A little scary and quite new at first, but with expression and composability you will come to adore.
```HTML
<grid wrap>
  
  <row>
    <box xs:12 sm:6> 
      <h1>Dashboard</h1>
    </box>
    <box xs:12 sm:3 offset-sm:3>
      Welcome, {{ user.name }}
    </box>
  </row>
  
  <row flow:around>
    <!-- All tags are fair game. -->
    <img box xs:12 sm:auto src="logo.png">
    <box snap:end>
      <p>{{ welcome.copy }}</p>
    </box>
  </row>
  
  <article row wrap reverse>
    <box>
      <h3>{{ story.title }}</h3>
      <h4>{{ story.subtitle }}</h4>
    </box>
    <box flex:3>
      {{ story.text }}
    </box>
    <box flex:2>
      {{ author.photo }}
    </box>
  </article>
  
</grid>
```

## Preface
This guide, like many front-end recruiters, assumes you have solid knowledge of **CSS** (duh), **HTML** (duh), and, believe it or not, Twitter **Bootstrap**. Additionally, 
  
  > If you aren't familiar with Bootstrap yet, you may still be able to follow along nodding and smiling, and perhaps not missing much. We're going to be talking about its *grid system* mostly, and relating that to how **Mansion**'s works, and what's different. Some other Bootstrap topics are relevant too, like its *responsive breakpoints* and *css-reset* stuff. That'll come in a later bit.

Ideally, you should have some idea about what **Flexbox** is, why you'd wanna use it, and maybe a bit about how it works. On the other hand, if you're already a Flexbox expert, all the better!
  > Quite a few of the features of Mansion are "convenience classes" for flexbox layout properties. Mansion is, in some sense, intended to be a modern, semantic grid system that merges some of the thinking of Bootstrap with some pure-flexbox ideas, plus some spicy attribute flair thrown in.

Mansion is for people want a **responsive flex layout framework**, preferably for use in **the real world**. Mansion has the distinction of leveraging a full, HTML5 collision-free custom-element & attribute CSS selector library. Of course, if you prefer to play it safe with only using classes, that's fully supported.
  
  > What is meant by a **responsive flex layout framework?** Pretty simply, it's a system of display styles that let a web developer *quickly* and easily create complex, vertical and horizontal block layouts. The *responsive* bit means it should respond to various circumstances, whether it's viewed on an iPhone or a MacBook (or a potato, for that matter). that *flex* bit indicates that it's a **flexbox**-based framework. If you've made it this far, you probably know what flexbox is.
  
  > What is meant by the **real world**? If I could explain it, well, it wouldn't be the *real world*. You're on your own with that one.
  
To install, simply run `bower install mansion`.
  
#### Elements and Attributes as selectors
In Bootstrap, layouts are built through classes. Of course, you have the `.container` div, which itself contains `.row` divs, which themselves contain one or more `.col-` type columns. This is great, and is obviously fully supported everywhere. This is what classes are for, and it's not a bad system at all.

Mansion gives you the same option, as all Mansion's features can be used as CSS classes. Additionally, however, there is the ability to the same build simple and complex layouts using Mansion's attribute and element selectors.

For example:
```HTML
<div class="row wrap flow-around">
  <div class="box-xs-12 box-sm-6">
    Hello, world!
  </div>
  <div class="box-xs-12 offset-md-3 box-md-3 snap-center">
    I greatly treasure our camaraderie, from the depths of my heart.
  </div>
</div>
```
...is a perfectly valid, totally cool Mansion layout.

Moving forward, the same can be rewritten to make the most of Mansion's element and attribute selectors:
```HTML
<row wrap flow:around>
  <box xs:12 sm:6>
    Heya, worldie!
  </box>
  <box xs:12 md:3 offset-md:3 snap:center>
    Chu my dawg for life, yung buhl. Real talk.
  </box>
</row>
```

## Reserved Attributes & Element Names
The following plain attribute names (i.e. `<div attribute="value">`) CSS selectors within Mansion and may cause problems if already utilized in your codebase:
 - `wrap`
 - `box`
 
 - `xs="N"` and `xs:N`,
 - `sm="N"` and `sm:N`,
 - `md="N"` and `md:N`,
 - `lg="N"` and `lg:N`, and
 - `xl="N"` and `xl:N`, where N is a number from 1 - 12, or `auto`
 - `flex="N"` and `flex:N`,
 - `grow="N"` and `grow:N`, and
 - `shrink="N"` and `shrink:N`, where N is a number from 1 - 10

## Examples
[Holy Grail Layout](https://goo.gl/Q7XjP7): `stack`-based using **Mansion**;
```HTML
<!-- a 'stack' is like a horizontal row, but vertical.                 -->
<!-- 'column'-like, in the tabular sense, but with the ability to wrap -->
<stack style='height: 100vh; width: 100vw;'>
  <!-- the 'box' attribute is all we need to have a full column, in a stack. -->
  <header box>
    Header
  </header>
  
  <!-- we're using a new 'row' for our non-header/non-footer content. -->
  <row grow:1>
    <!-- Look familiar at all? -->
    <box xs:12 sm:3 lg:2>
      Left Sidebar
    </box>
    <!-- since we can use the 'box' attribute OR element anywhere to indicate a flexible block,   -->
    <!-- the result is more semantic code: <main>, <nav>, <aside>, etc. are now layout components -->
    <main box>
      Main content.
    </main>
    <!-- 'row's and 'stack's are always treated like child <box> elements too, where appropriate-->
    <stack xs:12 sm:3 lg:3 flow:between>
      <section box>
        Sidebar Section 1
      </section>
      <section box>
        Sidebar Section 2
      </section>
      <section box grow:1>
        Sidebar Section 3
      </section>
    </stack>
  </row>
  
  <!-- Nice and simple. -->
  <footer box>
    Footer content. &copy; 2017 Mr. Company Inc.
  </footer>
</stack>
```