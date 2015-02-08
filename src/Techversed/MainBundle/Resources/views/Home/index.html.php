<html>
    <head>
        <script type="text/javascript" src="/js/libs/jquery-1.8.1.js"></script>
        <script data-main="/app/js/main.js" src="/components/requirejs/require.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/techversed.css">
    </head>
    <body ut-body class="v2">
        <div id="navigation-container" ng-controller="NavigationController">
            <ul>
                <li ng-repeat="group in groups">
                    {{group.name}}
                </li>
            </ul>
        </div>
        <div class="container1">
            <div id="inner" ui-view></div>
        </div>
        <script>
            // global JS access to logged in user
            Techversed = {
                env: "",
                requirejsDebug: ""
            }
        </script>
    </body>
</html>
