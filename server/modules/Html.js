function printHtmlOpen(){
    return `
        <!DOCTYPE html>
        <html lang="nl" dir="ltr">
    `;
}


function printHead(){
    return `
        <head>
            <meta charset="utf-8">
            <title>Marco's OBA Avontuur</title>
            <link rel="stylesheet" href="/css/style.css">
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

function printResults(htmlResults){
    let openResults = `
        <div id="results" class="grid">
            <!--add data here-->
    `;

    let closeResults = `
        </div>
    `;

    return openResults + htmlResults + closeResults;
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
    printHead,
    printBodyOpen,
    printResults,
    printBodyClose,
    printHtmlClose
}