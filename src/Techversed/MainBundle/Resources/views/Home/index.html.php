<html>
    <head>
        <script type="text/javascript" src="/js/libs/jquery-1.8.1.js"></script>
        <script data-main="/app/js/main.js" src="/components/requirejs/require.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/techversed.css">
    </head>
    <body ut-body class="v2">
        <div id="navigation-container" ng-controller="NavigationController">
            <div class="inner">
                <ul class="group-list">
                    <li class="group" ng-repeat="group in groups" navigation-group>
                        <a class="title">{{group.name}}</a>
                        <div class="group-children-container">
                            <ul class="child-list">
                                <li class="child">About Techversed</li>
                                <li class="child">The Team</li>
                                <li class="child">Insights</li>
                                <li class="child">Jobs And Careers</li>
                                <li class="child">Publications</li>
                                <li class="child">Press</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
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
