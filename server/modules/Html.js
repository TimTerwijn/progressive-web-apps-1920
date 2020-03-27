function printHtmlOpen(){
    return `
        <!DOCTYPE html>
        <html lang="nl" dir="ltr">
    `;
}

function printHeadOpen(){
    return `
            <head>
                <meta charset="utf-8">
                <title>Marco's OBA Avontuur</title>
    `;
}

function printCriticalCss(){
    return `
                <style>
                    .grid{
                        display: grid;
                        justify-items: center;
                        font-family: sans-serif;
                    }
                
                    .grid>div{
                        min-height: 5rem;
                    }

                    .hidden{
                        display: none;
                    }

                    .letter{
                        margin: 0;
                    }

                    #search_page{
                        background-color: #99b1dd;
                        padding-top: 1rem;
                    }

                    #background{
                        border-bottom: 1rem solid green;
                        width: 100%;
                        margin-top: 5rem;
                    }

                    #player{
                        height: 5rem;
                        width: 5rem;
                    }

                    #messages{
                        width: 100%;
                        text-align: left;
                        background-color: white;
                    }
                </style>
    `;
}

function printCss(){
    return `
                <link rel="stylesheet" href="/css/style.min.css">
    `;
}

function printHeadClose(){
    return `
            </head>
    `;
}

function printBodyOpen(){
    return `
            <body>
                <div id="search_page">
                    <div class="grid page">
                        <div id="background" class="grid"><!-- player  -->
                            <div id="player-flip-box">
                                <div class="flip-box-inner">
                                <div class="flip-box-front">
                                    <img src="/img/marco_r.png" id="player">
                                </div>
                                <div class="flip-box-back">
                                    <img src="/img/marco_l.png" id="player">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="messages">

                        </div>
                        <script type="module" src="/js/app.js"></script>
    `;
}

function printResultsOpen(){
    return `
                        <div id="results" class="grid">
                            <!--here comes the server data-->
    `;
}

function printResultsClose(){
    return `
                        </div>
    `;
}
function printBodyClose(){
    return `
                    </div>
                </div>
            </body>
    `;
}

function printHtmlClose(){
    return `
        </html>
    `;
}

module.exports = {
    printHtmlOpen,
    printHeadOpen,
    printCriticalCss,
    printCss,
    printHeadClose,
    printBodyOpen,
    printResultsOpen,
    printResultsClose,
    printBodyClose,
    printHtmlClose
}