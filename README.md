Triple dots
================

[![Latest Version on NPM](https://img.shields.io/npm/v/triple-dots.svg?style=flat-square)](https://npmjs.com/package/triple-dots)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/triple-dots.svg?style=flat-square)](https://npmjs.com/package/triple-dots)
[![npm](https://img.shields.io/npm/dm/triple-dots.svg?style=flat-square)](https://npmjs.com/package/triple-dots)

Triple dots is a javascript plugin for truncating multiple line content on a webpage. 
It uses an ellipsis to indicate that there is more text than currently visible. 
Optionally, the plugin can keep a "read more" anchor visible at the end of the content, after the ellipsis.

When using triple-dots to truncate HTML, you don't need to worry about your HTML markup, the plugin knows its way around most elements. 
It's responsive, so when resizing the browser, the ellipsis will update on the fly.

## How to use

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <meta name="author" content="#"/>

    <title>triple-dots, javascript plugin for multiple line content ellipsis.</title>
    <style type="text/css" media="all">
        html,
        body {
            padding: 0;
            margin: 0;
        }

        body {
            background-color: #eed;
            font-family: Arial, Helvetica, Verdana;
            line-height: 20px;
            color: #222538;
            padding: 50px;

            -webkit-text-size-adjust: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        :first-child {
            margin-top: 0;
        }

        :last-child {
            margin-bottom: 0;
        }

        p {
            margin: 10px 0;
        }


        a {
            color: inherit;
            text-decoration: underline;
        }

        .wrapper {
            box-sizing: border-box;
            width: 80%;
            max-width: 600px;
            min-width: 220px;
            margin: 0 auto;
        }

        .example {
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            background: #222538;
            background: -webkit-linear-gradient(bottom left, #222538, #46454d);
            background: linear-gradient(to top right, #222538, #46454d);

            color: #eed;
            font-size: 20px;
            line-height: 30px;
            padding: 50px;
            margin: 50px -50px;
            overflow: hidden;
        }

        .example > div {
            max-height: 250px;
        }

        /* readable pathnames */
        .example ul,
        .example ol,
        .example li {
            display: block;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .example li {
            height: 35px;
            padding: 7px 0;
        }

        .example li + li {
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* toggle full story */
        .example > .full-story {
            max-height: initial;
        }

        .example .toggle:before {
            content: 'Show more';
        }

        .example > .full-story .toggle:before {
            content: 'Show less';
        }

        .oldbrowser {
            display: none;
        }

        @media screen and (min-width: 0\0
        ) {
            .oldbrowser {
                background: red;
                color: white;
                font-weight: bold;
                font-size: 20px;
                line-height: 1.5;
                display: block;
                padding: 50px;
                margin: 50px -50px;
            }
        }
    </style>
</head>

<body>
<br/>
<br/>
<div class="wrapper">

    <div class="oldbrowser">
        <big>Oh no!</big><br/>
        You're using an old browser.
        Although the TripleDots plugin will work in older browsers (although you might need some polyfills),
        these examples use modern JS your browser probably doesn't understand.
    </div>

    <div>
        <h1>triple-dots</h1>
        <p>Javascript plugin for truncating multiple line content on a webpage.<br/>
            Resize your browser to see the examples below in action.</p>
        <p>Documentation: <a href="#" target="_blank">Hello</a></p>
    </div>

    <div class="example">
        <div id="xmpl-1">
            <h3>Truncate multiple line content</h3>
            <p><em>Lorem Ipsum</em> is simply <strong>dummy text</strong> of the printing and typesetting industry.
                It has been the industry's standard dummy text ever <strong>since the 1500s</strong>, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
                <em>Lorem Ipsum</em> has survived not only <strong>five centuries</strong>, but also the leap into
                <strong>electronic typesetting</strong>, remaining essentially unchanged.
                <a href="#/" class="read-more">Read more &raquo;</a></p>
        </div>
    </div>

    <div class="example">
        <div id="xmpl-2">
            <h3>Truncate to readable pathnames</h3>
            <ol>
                <li>file:///users/your-name/desktop/project/website/htdocs/index.html</li>
                <li>file:///users/your-name/desktop/project/website/htdocs/css/style.css</li>
                <li>file:///users/your-name/desktop/project/website/htdocs/css/layout.css</li>
            </ol>
        </div>
    </div>

    <div class="example">
        <div id="xmpl-3">
            <h3>Toggle full story</h3>
            <div class="ticket__description loom" id="issueDescription"
                 data-bind="embed: description, highlight:{'global-search-keyword-highlight': $root.query}, checklist: description">
                <div class="markdown-body"><p>不具合の内容<br>新UIのコンタクトページにおいて、リードのノートの欄において省略表示の動作が不適切である。</p>
                    <p>入力が1行の場合<br>"…"と"もっと見る"が表示され、省略された内容があるかの様に表示している。<br>"もっと見る"を押すと表示上の行数が減る。</p>
                    <p>入力が2行の場合<br>二行目の末尾の文字が"…"に置き換わっている。<br>表示上の行数が減っていない。</p>
                    <p>入力が3行の場合<br>三行目の途中の文字から"…"に置き換わっている。<br>表示上の行数が減っていない。</p>
                    <p>入力が4行の場合<br>三行目までが完全に表示され、三行目の末尾が"…"に置き換わらない。</p>
                    <p>期待する動作<br>何行を超えたら省略するのかを定義する。<br>省略する行を超えるまでは省略の表示をしない。（"…"と"もっと見る"を表示しない）<br>省略する行を超えた場合は、表示する内容の最後の文字を"…"に置き換えて"もっと見る"を表示する。
                    </p>
                    <p>動画<br><a href="https://www.loom.com/share/2fabf5a65a784c5d951269d1b31dda2d" target="_blank"
                                rel="noopener noreferrer" class="loom-link-another backlog-card-checked">https://www.loom.com/share/2fabf5a65a784c5d951269d1b31dda2d</a>
                    </p>
                    <p>Bug Description<br>In the contact page of the new UI, the abbreviation behavior of the lead's
                        note column is inappropriate.</p>
                    <p>If the input is a single line<br>"..." and "More" are displayed as if there is omitted
                        content.<br>Clicking "More" reduces the number of lines in the display.</p>
                    <p>When there are two lines of input<br>The last character of the second line is replaced by
                        "...".<br>The number of lines in the display is not decreasing.</p>
                    <p>When there are three lines of input<br>The character in the middle of the third line has been
                        replaced by "...".<br>The number of lines in the display is not decreasing.</p>
                    <p>If there are four lines of input<br>The third line is completely displayed, and the end of the
                        third line is not replaced by "...".</p>
                    <p>Expected behavior<br>Define how many lines are to be omitted.<br>The omission is not indicated
                        until the number of lines to be omitted is exceeded. (Don't show "..." and "more")<br>When the
                        number of lines to be omitted is exceeded, replace the last character of the content to be
                        displayed with "..." and display "more".</p>
                    <p>Video<br><a href="https://www.loom.com/share/2fabf5a65a784c5d951269d1b31dda2d" target="_blank"
                                   rel="noopener noreferrer" class="loom-link-another backlog-card-checked">https://www.loom.com/share/2fabf5a65a784c5d951269d1b31dda2d</a>
                    </p></div>
            </div>
            <a class="toggle" href="#"></a>
        </div>
    </div>

</div>


<script src="dist/triple-dots.js"></script>
<script>


    /*
        Basic example
    */
    new TripleDots(document.querySelector('#xmpl-1'), {

        // Prevents the <a class="read-more" /> from being removed
        keep: '.read-more'
    });


    /*
        Truncate to readable pathnames example
    */
    document.querySelector('#xmpl-2')
        .querySelectorAll('li')
        .forEach((listitem) => {

            listitem.innerHTML = '<span>' + listitem.innerHTML.split('/').join('</span><span>/') + '</span>';
            listitem.children.item(listitem.children.length - 1).classList.add('file');

            new TripleDots(listitem, {

                //	Add a slash before the ellipsis
                ellipsis: '/\u2026',

                //	Adjustment for the top- and bottom padding.
                tolerance: 20,

                // Prevents the <span class="file" /> from being removed
                keep: '.file'
            });
        });


    /*
        Toggle full story example
    */
    let xmpl = document.querySelector('#xmpl-3');
    let dot = new TripleDots(xmpl, {

        // Prevents the <a class="toggle" /> from being removed
        keep: '.toggle'

    })

    // Get the triple-dots API
    let api = dot.API;

    xmpl.addEventListener('click', (evnt) => {
        if (evnt.target.closest('.toggle')) {
            evnt.preventDefault();

            //	When truncated, restore
            if (xmpl.matches('.ddd-truncated')) {
                api.restore();
                xmpl.classList.add('full-story');
            }

            //	Not truncated, truncate
            else {
                xmpl.classList.remove('full-story');
                api.truncate();
                api.watch();
            }
        }
    });


    /*
        For the demos
    */
    document.body.addEventListener('click', (evnt) => {
        if (evnt.target.closest('a[href^="#/"]')) {
            evnt.preventDefault();
            alert('Thank you for clicking, but that\'s a demo link.');
        }
    });

</script>
</body>

</html>

```

### Licence
The Triple dots javascript plugin is licensed under the [MIT](LICENSE).<br />

### Development
This project uses [Gulp(4)](http://gulpjs.com/) to minify the JS file.
If you are unfamiliar with Gulp, check [this tutorial](https://travismaynard.com/writing/getting-started-with-gulp) on how to get started.<br />
Run `gulp watch` in the command-line to put a watch on the files and run all scripts immediately after saving your changes.
