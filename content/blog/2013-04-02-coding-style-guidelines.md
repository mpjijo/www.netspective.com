---
title: Coding Style Guidelines
author: Abdul Razak
type: post
date: 2013-04-02T11:01:48+00:00
url: /knowledgebase/2013/04/02/coding-style-guidelines/
categories:
  - Developer SOPs
  - Knowledgebase

---
# Coding Style Guidelines

This document describing the preferred coding style, coding style enforcing tools for programming with various languages.

Currently We are focusing on HTML,CSS,JavaScript,XML,PHP,Java, C# and .Net

## IDE (Integrated Development Environment)

For all Microsoft technologies use Microsoft Visual studio.

For HTML,JavaScript,XML, Java, PHP developments Prefer Eclipse IDE.

for php use [PDT enabled eclipse][1] 

Latest eclipse has default support for JavaScript, other wise you can add [JavaScript Development Tools][2] to eclipse.

All style guide xmls, which can easily integrate with eclipse available in this [link][3]

## HTML and CSS

Refer [Google HTML/CSS Style Guide][4] and [JSLINT HTML/CSS Style][5]

## XML

if our project requires create a new XML document format, this [XML Document Format Style Guide][6] is helpful. In addition to actual style rules, it also contains advice on designing our own vs. adapting an existing format, on XML instance document formatting, and on elements vs. attributes.

## JavaScript

### Style Guide

For JavaScript code styling use <a href="https://google.github.io/styleguide/jsguide.html" title="Google JavaScript code style guide " target="_blank">Style guide with Google</a>. also refer [JSLint][7] and [JSHint][8]. JSLint is the http://javascript.crockford.com/code.html

### Closure Compiler

Google provides a true compiler for JavaScript, Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what&#8217;s left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.
  
The [Google Closure Compiler][9] provides warnings for illegal JavaScript and warnings for potentially dangerous operations, helping you to produce JavaScript that is less buggy and easier to maintain.

Google provides another tool named [Google Closure Linter][10], it is a utility that checks JavaScript files for style issues such as operator placement, missing semicolons, spacing, the presence of JsDoc annotations, and more. [The How to use Closure Linter][11] will help installation and usage.

## PHP

[Zend Framework Coding Standard for PHP][12] giving php coding style. Also those who are working in Drupal or wordpress must check [Drupal&#8217;s php coding style][13] and [WordPress coding style][14].

[PHP Coding Standards Fixer tool][15] fixes most issues in our code when we want to follow the PHP coding standards.

## C# or .Net

Design Guidelines for Developing Class Libraries for C# and .net described in the [MSDN site][16] . Also a great blog explains the [coding guide lines][17] .

To enforce a set of style and consistency rules to C# source code [stylecop][18] can be add to visual studio editor.It&#8217;s rules and guidelines available [here][19]

## JAVA

For Java coding standards we must use [oracle&#8217;s coding standards][20] .

To check or enforce the coding standard and coding style with eclipse use the tool named [checkstyle][21]

 [1]: http://www.zend.com/en/community/pdt/downloads
 [2]: http://www.eclipse.org/webtools/jsdt/ "JSDT"
 [3]: https://code.google.com/p/google-styleguide/source/browse/trunk
 [4]: http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml "HTML/CSS Style guide"
 [5]: http://www.jslint.com/lint.html#HTML
 [6]: http://google-styleguide.googlecode.com/svn/trunk/xmlstyle.html
 [7]: http://www.jslint.com/lint.html "JSlint"
 [8]: http://www.jshint.com/
 [9]: http://closure-compiler.appspot.com/home "Google closure compile web UI"
 [10]: https://developers.google.com/closure/utilities/
 [11]: https://developers.google.com/closure/utilities/docs/linter_howto "Closure Linter"
 [12]: http://framework.zend.com/manual/1.12/en/coding-standard.overview.html
 [13]: http://codex.wordpress.org/WordPress_Coding_Standards
 [14]: http://drupal.org/coding-standards
 [15]: https://github.com/fabpot/PHP-CS-Fixer
 [16]: http://msdn.microsoft.com/en-us/library/ms229042.aspx
 [17]: http://blogs.msdn.com/b/brada/archive/2005/01/26/361363.aspx
 [18]: http://stylecop.codeplex.com/
 [19]: http://www.stylecop.com/docs/StyleCop%20Rules.html
 [20]: http://www.oracle.com/technetwork/java/codeconv-138413.html
 [21]: http://checkstyle.sourceforge.net/