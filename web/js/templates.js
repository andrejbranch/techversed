define(["app"], function (app) { app.run(["$templateCache", function($templateCache) { if (Techversed.requirejsDebug && Techversed.env == "dev") { return; }   'use strict';

  $templateCache.put('/app/partials/antibodyRequest/_culture_module.html',
    "<div class=\"ut-relative-plus-icon\" ng-if=\"canEdit()\" ng-click=\"cultureModal(culture)\">\n" +
    "    <i class=\"icon-pencil\"></i>\n" +
    "</div>\n" +
    "<div class=\"detail-column\">\n" +
    "    <table class=\"detail\">\n" +
    "        <tr>\n" +
    "            <td>ID:</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"culture({cultureId:culture.id})\" class=\"link\">\n" +
    "                    Culture {{culture.id}}\n" +
    "                </a>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td>Sample:</td>\n" +
    "            <td>\n" +
    "                <a ui-sref=\"sample({sampleId:culture.sampleId})\" class=\"flat-link\">\n" +
    "                {{culture.Sample.description}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<div class=\"detail-column\">\n" +
    "    <table class=\"detail\">\n" +
    "        <tr>\n" +
    "            <td>Culture Status:</td>\n" +
    "            <td>{{culture.CultureStatusDetail.name}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td>Concentration (mg/mL):</td>\n" +
    "            <td>{{culture.concentration}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td>Volume (mL):</td>\n" +
    "            <td>{{culture.volume}}</td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table id=\"antibody-request-table\" ng-if=\"antibodyRequests[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Contact\"\n" +
    "                    sort-field=\"con.name\"\n" +
    "                    ng-show=\"showColumns.indexOf('contactId') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Sample (mAb)\"\n" +
    "                    sort-field=\"s.description\"\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Target\"\n" +
    "                    ng-show=\"showColumns.indexOf('targetId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Amount Requested (mg)\"\n" +
    "                    ng-show=\"showColumns.indexOf('amountRequested') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Form Requested\"\n" +
    "                    ng-show=\"showColumns.indexOf('formRequested') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date Needed By\"\n" +
    "                    sort-field=\"dateNeededBy\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateNeededBy') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Vim Sents\"\n" +
    "                    ng-show=\"showColumns.indexOf('vimSents') > -1\"\n" +
    "                    sort-field=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Culture Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('cultureId') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\" ng-if=\"canEdit()\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"antibodyRequest in antibodyRequests\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"antibodyRequest({antibodyRequestId:antibodyRequest.id})\" class=\"link\">{{antibodyRequest.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('contactId') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"contact({contactId:antibodyRequest.Contact.id})\">{{antibodyRequest.Contact.name}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"sample({sampleId:antibodyRequest.Sample.id})\" class=\"link\">{{antibodyRequest.Sample.description}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('targetId') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.Target.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('amountRequested') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.amountRequested}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('formRequested') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.formRequested}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateNeededBy') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.dateNeededBy | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('vimSents') > -1\"\n" +
    "                >\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"vimSent in antibodyRequest.vimSents\">\n" +
    "                            <a ng-if=\"!$last\" ng-href=\"/vim/sent/{{vimSent.id}}\" class=\"flat-link\">\n" +
    "                                {{vimSent.placeholder + \",&nbsp;\"}}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" ng-href=\"/vim/sent/{{vimSent.id}}\" class=\"flat-link\">\n" +
    "                                {{vimSent.placeholder}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.created_at | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{antibodyRequest.updated_at | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-class=\"getCultureStatusClass(antibodyRequest)\"\n" +
    "                    ng-show=\"showColumns.indexOf('cultureId') > -1\"\n" +
    "                >\n" +
    "                    <a ng-if=\"hasCulture(antibodyRequest)\">{{antibodyRequest.Culture.statusName}}</a>\n" +
    "                    <a ng-if=\"!hasCulture(antibodyRequest)\">Not in culture</a>\n" +
    "                </td>\n" +
    "                <td class=\"actions\" ng-if=\"canEdit()\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/antibodyRequest/grid_actions.html\"\n" +
    "                        data=\"antibodyRequest\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!antibodyRequests[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/antibody_request_detail_more_dropdown.html',
    "<div id=\"sample-detail-more\" ng-controller=\"AntibodyRequestDetailMoreController\">\n" +
    "    <ul>\n" +
    "        <li ng-if=\"culture\" ng-click=\"cultureStatusModal(cultureStatus)\">\n" +
    "            <i class=\"icon-plus\"></i>\n" +
    "            Add To Culture Status Log\n" +
    "        </li>\n" +
    "        <li ng-if=\"culture\" ng-click=\"cultureModal(culture)\">\n" +
    "            <i class=\"icon-pencil\"></i>\n" +
    "            Edit Culture\n" +
    "        </li>\n" +
    "        <li ng-if=\"!culture\" ng-click=\"cultureModal()\">\n" +
    "            <i class=\"icon-plus\"></i>\n" +
    "            Create Culture\n" +
    "        </li>\n" +
    "        <li ng-if=\"!culture\" ng-click=\"linkCulture()\">\n" +
    "            <i class=\"icon-pencil\"></i>\n" +
    "            Link Culture\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/csvExport.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'AntibodyRequestGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Antibody Request {{antibodyRequest.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this antibody request?</p>\n" +
    "            <p class=\"text-error\"><strong> The culture will not be deleted, you must delete it from the culture app.</strong></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li ui-sref=\"antibodyRequestGrid.search\">Antibody Requests</li>\n" +
    "            <li class=\"end\">Antibody Request {{antibodyRequest.id}}</li>\n" +
    "            <li class=\"title\">Antibody Request {{antibodyRequest.Sample.description}} </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button  class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit AB Request\n" +
    "            </button>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"More\"\n" +
    "                template=\"/app/partials/antibodyRequest/antibody_request_detail_more_dropdown.html\"\n" +
    "                data=\"{culture:culture, cultureStatuses:cultureStatuses, antibodyRequest:antibodyRequest}\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Sample:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"sample({sampleId:antibodyRequest.sampleId})\" class=\"flat-link\">\n" +
    "                                {{antibodyRequest.Sample.description}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Target:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"target({targetId:antibodyRequest.targetId})\" class=\"flat-link\">\n" +
    "                                {{antibodyRequest.Target.name}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Amount Requested (mg):</td>\n" +
    "                            <td>{{antibodyRequest.amountRequested}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Form Requested:</td>\n" +
    "                            <td>{{antibodyRequest.formRequested}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Culture\" ng-if=\"hasCulture()\" class=\"ut-position-relative\">\n" +
    "                <div ng-include=\"'/app/partials/antibodyRequest/_culture_module.html'\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Culture Status Log\" ng-if=\"hasCutureStatuses()\" class=\"ut-position-relative\">\n" +
    "                <div ng-include=\"'/app/partials/culture/_culture_status_log.html'\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"AntibodyRequest\"\n" +
    "                    oid=\"antibodyRequest.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"AntibodyRequest\"\n" +
    "                    oid=\"antibodyRequest.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Creator:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"antibodyRequest.userId\" ng-src=\"/profile/avatar/{{antibodyRequest.userId}}\" />\n" +
    "                            {{antibodyRequest.User.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Contact:</td>\n" +
    "                        <td>\n" +
    "                            <a class=\"flat-link\" ui-sref=\"contact({contactId:antibodyRequest.Contact.id})\">{{antibodyRequest.Contact.name}}</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Sents:</td>\n" +
    "                        <td ng-if=\"antibodyRequest.vimSents\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimSent in antibodyRequest.vimSents\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"mAb Request Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Date Needed By:</td>\n" +
    "                        <td>{{ antibodyRequest.dateNeededBy | utDate | date:'MM/dd/yy'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ antibodyRequest.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ antibodyRequest.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Culture Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Date of Purification:</td>\n" +
    "                        <td>{{ culture.dateOfPurification }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Date of Last Status Update:</td>\n" +
    "                        <td>{{ culture.dateOfLastStatusUpdate }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Expected Availability:</td>\n" +
    "                        <td>{{ culture.expectedAvailability }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ culture.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ culture.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/editForm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 >Edit Antibody Request {{antibodyRequest.id}} - {{antibodyRequest.Sample.description}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in antibodyRequest.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Contact\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"antibodyRequest.Contact\"\n" +
    "                    key=\"antibodyRequest.contactId\"\n" +
    "                    resource=\"contact\"\n" +
    "                    placeholder=\"name\"\n" +
    "                    error=\"antibodyRequest.errors.contactId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Sample\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"antibodyRequest.Sample\"\n" +
    "                    key=\"antibodyRequest.sampleId\"\n" +
    "                    resource=\"sample-typeahead\"\n" +
    "                    placeholder=\"description\"\n" +
    "                    error=\"antibodyRequest.errors.sampleId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Target\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"antibodyRequest.Target\"\n" +
    "                    key=\"antibodyRequest.targetId\"\n" +
    "                    resource=\"target-typeahead\"\n" +
    "                    placeholder=\"name\"\n" +
    "                    error=\"antibodyRequest.errors.targetId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Amount Requested (mg)\">\n" +
    "                <ut-input\n" +
    "                    model=\"antibodyRequest.amountRequested\"\n" +
    "                    error=\"antibodyRequest.errors.amountRequested\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Form Requested\">\n" +
    "                <select ng-model=\"antibodyRequest.formRequested\">\n" +
    "                    <option value=\"IgG\">IgG</option>\n" +
    "                    <option value=\"Fab\">Fab</option>\n" +
    "                    <option value=\"Other\">Other</option>\n" +
    "                </select>\n" +
    "                <div ng-if=\"antibodyRequest.errors.formRequested\" class=\"ut-global-error\">{{antibodyRequest.errors.formRequested}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Date Needed By\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"antibodyRequest.dateNeededBy\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"VIM Sents\" class=\"ut-many-input-max-width\">\n" +
    "                <ut-one-to-many\n" +
    "                    resource=\"vim-sent\"\n" +
    "                    model=\"antibodyRequest\"\n" +
    "                    foreign-key=\"vimSentId\"\n" +
    "                    relation=\"AntibodyRequestRelations\"\n" +
    "                    access=\"antibodyRequest.vimSents\"\n" +
    "                    placeholder=\"placeholder\"\n" +
    "                />\n" +
    "                </ut-one-to-many>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group label=\"Attachments\">\n" +
    "                <ut-attachment-uploader o=\"AntibodyRequest\" oid=\"antibodyRequest.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/antibodyRequest/csvExport.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Antibody Request Search</h3>\n" +
    "                <button ng-if=\"canEdit()\" class=\"btn\" ng-click=\"createAntibodyRequest()\">Create Antibody Request</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-dropdown\n" +
    "                title=\"Contact: All\"\n" +
    "                template=\"/app/partials/filters/contacts.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Sample: All\"\n" +
    "                template=\"/app/partials/filters/samples.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Target: All\"\n" +
    "                template=\"/app/partials/filters/targets.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"AntibodyRequestGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"antibodyRequest({antibodyRequestId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/linkCulture.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 >Link Culture to AB {{antibodyRequest.id}} - {{antibodyRequest.Sample.description}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in antibodyRequest.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Culture\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"antibodyRequest.Culture\"\n" +
    "                    key=\"antibodyRequest.cultureId\"\n" +
    "                    resource=\"culture\"\n" +
    "                    placeholder=\"placeholder\"\n" +
    "                    error=\"antibodyRequest.errors.cultureId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/antibodyRequest/multiForm.html',
    "<div id=\"antibody-request-create-form\">\n" +
    "    <div class=\"header\">\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li class=\"end\" ui-sref=\"antibodyRequestGrid.search\">Antibody Requests</li>\n" +
    "            <li class=\"title\">Antibody Request Create </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"select-rows\">\n" +
    "        <a>\n" +
    "            Select how many mAb Requests you are making.\n" +
    "        </a>\n" +
    "        <select ng-model=\"formModel.selectedNumber\">\n" +
    "            <option ng-repeat=\"number in numbers\" value=\"{{number}}\">{{number}}</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "    <form >\n" +
    "        <ut-control-group>\n" +
    "            <div ng-repeat=\"globalError in model.globalErrors\" class=\"ut-global-error\">\n" +
    "                {{globalError}}\n" +
    "            </div>\n" +
    "        </ut-control-group>\n" +
    "        <table class=\"ab-request-table\">\n" +
    "            <thead>\n" +
    "                <tr class=\"ut-label horizontal-input-head\">\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Contact\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                    </th>\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Sample\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                    </th>\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Target\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                    </th>\n" +
    "                    <th>Amount Requested (mg)</th>\n" +
    "                    <th>Form Requested (IgG or Fab)</th>\n" +
    "                    <th>Date Needed By</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody class=\"ab-request-table-body\">\n" +
    "                <tr ng-repeat=\"model in models\">\n" +
    "                    <div class=\"space-small\">\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-typeahead\n" +
    "                                model=\"model.Contact\"\n" +
    "                                key=\"model.contactId\"\n" +
    "                                resource=\"contact\"\n" +
    "                                placeholder=\"name\"\n" +
    "                                error=\"model.errors.contactId\"\n" +
    "                            >\n" +
    "                            </ut-typeahead>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-typeahead\n" +
    "                                model=\"model.Sample\"\n" +
    "                                key=\"model.sampleId\"\n" +
    "                                resource=\"sample-typeahead\"\n" +
    "                                placeholder=\"description\"\n" +
    "                                error=\"model.errors.sampleId\"\n" +
    "                            >\n" +
    "                            </ut-typeahead>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-typeahead\n" +
    "                                model=\"model.Target\"\n" +
    "                                key=\"model.targetId\"\n" +
    "                                resource=\"target-typeahead\"\n" +
    "                                placeholder=\"name\"\n" +
    "                                error=\"model.errors.targetId\"\n" +
    "                            >\n" +
    "                            </ut-typeahead>\n" +
    "                         </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-input\n" +
    "                                model=\"model.amountRequested\"\n" +
    "                                error=\"model.errors.amountRequested\"\n" +
    "                            >\n" +
    "                            </ut-input>\n" +
    "                        </td class=\"ab-request-td\">\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <select ng-model=\"model.formRequested\">\n" +
    "                                <option value=\"IgG\">IgG</option>\n" +
    "                                <option value=\"Fab\">Fab</option>\n" +
    "                                <option value=\"Other\">Other</option>\n" +
    "                            </select>\n" +
    "                            <div ng-if=\"model.errors.formRequested\" class=\"ut-global-error\">{{model.errors.formRequested}}</div>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <input\n" +
    "                                type=\"text\"\n" +
    "                                datepicker-popup=\"M/dd/yyyy\"\n" +
    "                                ng-model=\"model.dateNeededBy\"\n" +
    "                                class=\"ut-input\"\n" +
    "                            />\n" +
    "                        </td>\n" +
    "                    </div>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"ab-request-foot\">\n" +
    "            <button class=\"btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"save()\">Submit Requests</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/box.html',
    "<ul class=\"box-view-list\">\n" +
    "    <div ng-include=\"'/app/partials/box/boxViewActions.html'\"></div>\n" +
    "    <li id=\"box-container\">\n" +
    "        <div class=\"box-wrapper\">\n" +
    "            <div ng-include class=\"box\" src=\"'/app/partials/box/boxViewTable.html'\"></div>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <div class=\"actions-container\">\n" +
    "            <div class=\"search-container\">\n" +
    "                <a>Find your sample</a>\n" +
    "                <div class=\"input-container inline\">\n" +
    "                    <ut-grid-pop resource=\"SampleTypeahead\" properties=\"id description aliases\" method=\"description\"></ut-grid-pop>\n" +
    "                </div>\n" +
    "                <div style=\"color:black; display: inline-block\">\n" +
    "                    <button\n" +
    "                        class=\"btn\"\n" +
    "                        ng-click=\"open()\"\n" +
    "                        popover=\"Create a new sample\"\n" +
    "                        popover-trigger=\"mouseenter\"\n" +
    "                        popover-popup-delay=\"700\"\n" +
    "                        popover-placement=\"top\"\n" +
    "                    >\n" +
    "                        +\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <ul>\n" +
    "            <table>\n" +
    "                <tr>\n" +
    "                    <td ng-class=\"{'inactive': !brush.active}\" class=\"brush\" ut-box-brush brush=\"{{brush.active}}\"></td>\n" +
    "                    <td class=\"paint {{paint.sample.gradient}}\">\n" +
    "                        <ut-box-paint></ut-box-paint>\n" +
    "                    </td>\n" +
    "                    <td class=\"filler\" ut-sample-toggle></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <div ui-view></div>\n" +
    "            <div ng-include src=\"'/app/partials/box/iceBox.html'\"></div>\n" +
    "            <div ng-include src=\"'/app/partials/box/saveBox.html'\"></div>\n" +
    "        </div>\n" +
    "    </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/app/partials/box/boxList.html',
    "<div id=\"freezer-navigation\" ng-class=\"{expanded:freezerNavExpanded}\">\n" +
    "    <div class=\"header\" ng-click=\"openFreezerNav()\">\n" +
    "        <i class=\"icon-white icon-chevron-down\"></i>\n" +
    "        <a>Freezer Navigation</a>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <ul class=\"tabs\">\n" +
    "            <li class=\"freezers\" ui-sref=\"boxView.freezerList\"><i class=\"icon-white icon-book\"></i></li>\n" +
    "            <li class=\"divisions\" ui-sref=\"boxView.divisionList({freezerId:divisionBoxes.0.Division.freezerId})\"><i class=\"icon-white icon-th-large\"></i></li>\n" +
    "            <li class=\"boxes active\"><i class=\"icon-white icon-th\"></i></li>\n" +
    "            <li class=\"search\" ui-sref=\"boxView.search()\"><i class=\"icon-white icon-search\"></i></li>\n" +
    "            <li class=\"fill\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"box-list\">\n" +
    "            <ul class=\"freezer-breadcrumb\">\n" +
    "                <li class=\"freezer-nickname\">\n" +
    "                    {{divisionBoxes.0.Division.Freezer.nickname}}\n" +
    "                    <span class=\"divider\">/</span>\n" +
    "                </li>\n" +
    "                <li class-\"division-name\">{{divisionBoxes.0.Division.name}}</li>\n" +
    "            </ul>\n" +
    "            <div class=\"box-list-container\">\n" +
    "                <ul>\n" +
    "                    <li ng-if=\"isInventoryAdmin()\" ng-click=\"createBox()\">\n" +
    "                        <i class=\"icon-white icon-plus\"></i>\n" +
    "                        <a>Create Box</a>\n" +
    "                    </li>\n" +
    "                    <li\n" +
    "                        ng-repeat=\"divisionBox in divisionBoxes | orderBy : 'name'\"\n" +
    "                        class=\"box-t\"\n" +
    "                        data-id=\"{{divisionBox.id}}\"\n" +
    "\n" +
    "                    >\n" +
    "                        <div class=\"description-container\">\n" +
    "                            <i class=\"icon-white icon-th\"></i>\n" +
    "                            <div\n" +
    "                                class=\"description\"\n" +
    "                                ui-sref=\"boxView.boxList({boxId:divisionBox.id, divisionId:divisionBox.divisionId, snapshot: null, edit: null})\"\n" +
    "                            >\n" +
    "                                <a>{{divisionBox.name + ' - ' + divisionBox.description}}</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"actions\" ng-if=\"isInventoryAdmin()\">\n" +
    "                            <i class=\"icon-white icon-pencil\" ng-click=\"editBox(divisionBox)\"></i>\n" +
    "                            <i class=\"icon-white icon-trash\" ng-click=\"deleteBox(divisionBox)\"></i>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/boxView.html',
    "<ut-box id=\"box-view-container\"></ut-box>\n" +
    "<ng-include src=\"'/app/partials/box/sampleGhosts.html'\"></ng-include>\n"
  );


  $templateCache.put('/app/partials/box/boxViewActions.html',
    "<div id=\"is2-box-actions\">\n" +
    "    <div class=\"dropdown inline\">\n" +
    "        <a class=\"dropdown-toggle\" id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\"><i class=\"icon-cog\"></i></a>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\n" +
    "            <li ng-class=\"{true: '', false: 'disabled'}[box.isEditableByUser]\" ng-click=\"openBoxEdit()\">\n" +
    "                <a tabindex=\"-1\" href=\"\">\n" +
    "                    <i ng-class=\"{true: 'icon-edit', false: 'ut-icon-edit'}[box.isEditableByUser]\"></i>\n" +
    "                    <div class=\"pad-left-small inline\">\n" +
    "                        Edit Box\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"print\">\n" +
    "                <a tabindex=\"-1\" href=\"/box/{{box.id}}/print\">\n" +
    "                    <i class=\"icon-print\"></i>\n" +
    "                    <div class=\"pad-left-small inline\">Print</div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"clear-box-contents\" ng-click=\"clearBoxContents()\" >\n" +
    "                <a tabindex=\"-1\" href=\"\">\n" +
    "                    <i class=\"icon-remove\"></i>\n" +
    "                    <div class=\"pad-left-small inline\">\n" +
    "                        Clear Box Contents\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li ng-click=\"openMoveBox()\">\n" +
    "                <a tabindex=\"-1\" href=\"\">\n" +
    "                    <i class=\"icon-share\"></i>\n" +
    "                    <div class=\"pad-left-small inline\">Move Box</div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li ng-if=\"box.isEditableByUser\" ng-click=\"deleteBox()\">\n" +
    "                <a tabindex=\"-1\" href=\"\">\n" +
    "                    <i class=\"icon-trash\"></i>\n" +
    "                    <div class=\"pad-left-small inline\">\n" +
    "                        Delete\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <i\n" +
    "        class=\"icon-refresh\"\n" +
    "        ng-click=\"refreshBox()\"\n" +
    "        popover=\"Unselect all positions\"\n" +
    "        popover-trigger=\"mouseenter\"\n" +
    "        popover-popup-delay=\"700\"\n" +
    "        popover-placement=\"right\"\n" +
    "    ></i>\n" +
    "    <i\n" +
    "        class=\"icon-trash\"\n" +
    "        ng-click=\"removeSampleBoxPositions()\"\n" +
    "        popover=\"Remove selected samples\"\n" +
    "        popover-trigger=\"mouseenter\"\n" +
    "        popover-popup-delay=\"700\"\n" +
    "        popover-placement=\"right\"\n" +
    "    ></i>\n" +
    "    <i\n" +
    "        class=\"history icon-calendar\"\n" +
    "        ng-click=\"openBoxHistory()\"\n" +
    "        popover=\"View box history or restore box to an earlier state\"\n" +
    "        popover-trigger=\"mouseenter\"\n" +
    "        popover-popup-delay=\"700\"\n" +
    "        popover-placement=\"right\"\n" +
    "    >\n" +
    "    </i>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/boxViewTable.html',
    "<div class=\"f{{box.width}} box-description\">\n" +
    "    <h3>{{box.heading}}</h3>\n" +
    "</div>\n" +
    "<table\n" +
    "    id=\"is2-box-table\"\n" +
    "    data-id=\"{{box.id}}\"\n" +
    "    cellspacing=\"10\"\n" +
    "    oncontextmenu=\"return false\"\n" +
    "    ng-class=\"{'editable': box.userCanEdit, 'awaiting': box.userAwaitingPermission }\"\n" +
    ">\n" +
    "    <tr ng-repeat='row in box.positions'>\n" +
    "        <td\n" +
    "            ng-repeat=\"sampleBoxPosition in row\"\n" +
    "            data-position=\"{{ sampleBoxPosition.position }}\"\n" +
    "            ng-class=\"{'full':sampleBoxPosition.description}\"\n" +
    "            class=\"g{{sampleGradients[sampleBoxPosition.description]}}\"\n" +
    "            ut-sample-box-position\n" +
    "        >\n" +
    "            <div class=\"count\">{{ sampleBoxPosition.position }}</div>\n" +
    "\n" +
    "            <i\n" +
    "                class=\"edit-icon icon-pencil\"\n" +
    "                ng-if=\"sampleBoxPosition.sampleId\"\n" +
    "                ng-click=\"open(sampleBoxPosition.sampleId)\"\n" +
    "            />\n" +
    "\n" +
    "            <i\n" +
    "                class=\"detail-icon icon-list-alt\"\n" +
    "                ng-if=\"sampleBoxPosition.sampleId\"\n" +
    "                ui-sref=\"sample({sampleId:sampleBoxPosition.sampleId})\"\n" +
    "            />\n" +
    "\n" +
    "            <div class=\"wrapper\">\n" +
    "                <a class=\"description\">{{ sampleBoxPosition.description }}</a>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>"
  );


  $templateCache.put('/app/partials/box/createSample.html',
    "<div id=\"sample-form-modal\">\n" +
    "    <form>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Created By</label>\n" +
    "            <div class=\"controls\">\n" +
    "                <input type=\"text\" ng-model=\"sample.user\" required />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Date</label>\n" +
    "            <div class=\"controls\">\n" +
    "                 <input type=\"text\" ng-model=\"sample.date\" required /><br />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Name</label>\n" +
    "            <div class=\"controls\">\n" +
    "                 <input type=\"text\" ng-model=\"sample.description\" required /><br />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Aliases</label>\n" +
    "            <div class=\"controls\">\n" +
    "                 <input type=\"text\" ng-model=\"sample.aliases\" required /><br />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Donor</label>\n" +
    "            <div class=\"controls\">\n" +
    "                 <input type=\"text\" ng-model=\"sample.donor_id\" required /><br />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"control-group\">\n" +
    "            <label class=\"control-label\">Protocol</label>\n" +
    "            <div class=\"controls\">\n" +
    "                 <input type=\"text\" ng-model=\"sample.protocol_id \" required /><br />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-actions\">\n" +
    "            <input ng-click=\"saveSample(sample)\" class=\"btn btn-primary\" type=\"submit\" value=\"Save\">\n" +
    "            <button ng-click=\"reset()\" type=\"button\" class=\"btn\">Cancel</button>\n" +
    "        <div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"shadow\"></div>"
  );


  $templateCache.put('/app/partials/box/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Box {{box.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this box?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\" class=\"created\">\n" +
    "                <div> {{box.name}} </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Inventory Description\" class=\"created\">\n" +
    "                <div> {{box.description}} </div>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/divisionList.html',
    "<div id=\"freezer-navigation\" ng-class=\"{expanded:freezerNavExpanded}\">\n" +
    "    <div class=\"header\" ng-click=\"openFreezerNav()\">\n" +
    "        <i class=\"icon-white icon-chevron-down\"></i>\n" +
    "        <a>Freezer Navigation</a>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <ul class=\"tabs\">\n" +
    "            <li class=\"freezers\" ui-sref=\"boxView.freezerList\"><i class=\"icon-white icon-book\"></i></li>\n" +
    "            <li class=\"divisions active\" ui-sref=\"boxView.divisionList\"><i class=\"icon-white icon-th-large\"></i></li>\n" +
    "            <li class=\"boxes\" ui-sref=\"boxView.boxList({divisionId:box.divisionId})\"><i class=\"icon-white icon-th\"></i></li>\n" +
    "            <li class=\"search\"><i class=\"icon-white icon-search\"></i></li>\n" +
    "            <li class=\"fill\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"division-list\">\n" +
    "            <ul>\n" +
    "                <ul class=\"freezer-breadcrumb\">\n" +
    "                    <li class=\"freezer-nickname\">{{freezer.nickname}}</li>\n" +
    "                </ul>\n" +
    "                <div class=\"division-container\">\n" +
    "                    <li ng-if=\"isInventoryAdmin()\" ng-click=\"createDivision()\">\n" +
    "                        <i class=\"icon-white icon-plus\"></i>\n" +
    "                        <a>Create Division</a>\n" +
    "                    </li>\n" +
    "                    <li data-id=\"{{division.id}}\" ng-repeat='division in divisions'>\n" +
    "                        <div class=\"description-container\">\n" +
    "                            <div\n" +
    "                                ui-sref=\"boxView.boxList({divisionId:division.id})\"\n" +
    "                                class=\"description\"\n" +
    "                            >\n" +
    "                                <i class=\"icon-white icon-th-large\"></i>\n" +
    "                                <a>{{division.name}}</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"actions\" ng-if=\"isInventoryAdmin()\">\n" +
    "                            <i class=\"icon-white icon-pencil\" ng-click=\"editDivision(division)\"></i>\n" +
    "                            <i class=\"icon-white icon-trash\" ng-click=\"deleteDivision(division)\"></i>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </div>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!box.id\">Create Box in division {{box.divisionId}}</h3>\n" +
    "    <h3 ng-if=\"box.id\">Edit Box {{box.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"box-form-container\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in box.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\">\n" +
    "                <ut-input\n" +
    "                    model=\"box.name\"\n" +
    "                    error=\"box.errors.name\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "            <ut-control-group label=\"Height\">\n" +
    "                <select ng-model=\"box.height\" class=\"input-small\" ng-if=\"canModifyDimensions()\">\n" +
    "                    <option ng-repeat=\"i in getHeights()\" value=\"{{i}}\">{{i}}</option>\n" +
    "                </select>\n" +
    "                <ut-input\n" +
    "                    model=\"box.height\"\n" +
    "                    disabled=\"true\"\n" +
    "                    ng-if=\"!canModifyDimensions()\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "                <div ng-if=\"box.errors.height\" class=\"ut-global-error\">{{box.errors.height}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Width\">\n" +
    "                <select ng-model=\"box.width\" class=\"input-small\" ng-if=\"canModifyDimensions()\">\n" +
    "                    <option ng-repeat=\"i in getHeights()\" value=\"{{i}}\">{{i}}</option>\n" +
    "                </select>\n" +
    "                <ut-input\n" +
    "                    model=\"box.width\"\n" +
    "                    disabled=\"true\"\n" +
    "                    ng-if=\"!canModifyDimensions()\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "                <div ng-if=\"box.errors.width\" class=\"ut-global-error\">{{box.errors.height}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Inventory Description\">\n" +
    "                <textarea type=\"text\" ng-model=\"box.description\" class=\"span5 ut-typeahead\" />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Editable By\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"user\"\n" +
    "                    resource=\"user\"\n" +
    "                    callback=\"addEditableByUser\"\n" +
    "                    placeholder=\"fullName\"\n" +
    "                    hint=\"Search for users to add ..\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "                <table id=\"box-editable-by-table\">\n" +
    "                    <tr ng-repeat=\"userThatCanEdit in box.usersThatCanEdit\">\n" +
    "                        <td class=\"image inline\">\n" +
    "                            <div class=\"img-avatar inline\">\n" +
    "                                <img ng-src=\"/profile/avatar/{{userThatCanEdit.u_id}}\" />\n" +
    "                            </div>\n" +
    "                        </td>\n" +
    "                        <td class=\"content\">\n" +
    "                            {{userThatCanEdit.fullName}}\n" +
    "                        </td>\n" +
    "                        <td class=\"remove\">\n" +
    "                            <a ng-click=\"removeUserThatCanEdit($index, userThatCanEdit.u_id)\" class=\"ut-icon-minus\"></a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-control-group>\n" +
    "            <ut-control-group label=\"Awaiting Permission\">\n" +
    "                    <table id=\"box-awaiting-table\">\n" +
    "                        <tr ng-repeat=\"awaitingUser in box.awaitingUsers\">\n" +
    "                            <td class=\"image\">\n" +
    "                                <div class=\"img-avatar inline\">\n" +
    "                                    <img ng-src=\"/profile/avatar/{{awaitingUser.u_id}}\" />\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                            <td class=\"content\">\n" +
    "                                {{awaitingUser.fullName}}\n" +
    "                            </td>\n" +
    "                            <td class=\"grant\">\n" +
    "                                <button ng-click=\"grantUserPermission($index, awaitingUser)\" class=\"btn btn-success\">Grant</button>\n" +
    "                            </td>\n" +
    "                            <td class=\"deny\">\n" +
    "                                <button ng-click=\"denyUserPermission($index, awaitingUser.u_id)\" class=\"btn btn-danger\">Deny</button>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </ut-control-group>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"box.id\">Save</a>\n" +
    "        <a ng-if=\"!box.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/freezerList.html',
    "<div id=\"freezer-navigation\" ng-class=\"{expanded:freezerNavExpanded}\" ng-controller=\"FreezerListController\">\n" +
    "    <div class=\"header\" ng-click=\"openFreezerNav()\">\n" +
    "        <i class=\"icon-white icon-chevron-down\"></i>\n" +
    "        <a>Freezer Navigation</a>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <ul class=\"tabs\">\n" +
    "            <li class=\"freezers active\" ui-sref=\"boxView.freezerList\"><i class=\"icon-white icon-book\"></i></li>\n" +
    "            <li class=\"divisions\" ui-sref=\"boxView.divisionList({freezerId:box.freezerId})\"><i class=\"icon-white icon-th-large\"></i></li>\n" +
    "            <li class=\"boxes\" ui-sref=\"boxView.boxList({divisionId:box.divisionId})\"><i class=\"icon-white icon-th\"></i></li>\n" +
    "            <li class=\"search\"><i class=\"icon-white icon-search\"></i></li>\n" +
    "            <li class=\"fill\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"freezer-list\">\n" +
    "            <ul>\n" +
    "                <li ng-if=\"isInventoryAdmin()\" ng-click=\"createFreezer()\">\n" +
    "                    <i class=\"icon-white icon-plus\"></i>\n" +
    "                    <a>Create Freezer</a>\n" +
    "                </li>\n" +
    "                <li ng-repeat='freezer in freezers' data-id=\"{{freezer.id}}\" >\n" +
    "                    <div class=\"description-container\">\n" +
    "                        <div\n" +
    "                            ui-sref=\"boxView.divisionList({freezerId:freezer.id})\"\n" +
    "                            class=\"description\"\n" +
    "                        >\n" +
    "                            <i class=\"icon-white icon-book\"></i>\n" +
    "                            <a >{{freezer.nickname}}</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"actions\" ng-if=\"isInventoryAdmin()\">\n" +
    "                        <i class=\"icon-white icon-pencil\" ng-click=\"editFreezer(freezer)\"></i>\n" +
    "                        <i class=\"icon-white icon-trash\" ng-click=\"deleteFreezer(freezer)\"></i>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/history.html',
    "<div id=\"move-box-container\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h3>Box History for Box {{ box.id }}</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <div id=\"box-history-container\">\n" +
    "            <p class=\"text-warning\">A box snapshot is the last save point of a box. Below are all the snapshots for this box.</p>\n" +
    "            <ul>\n" +
    "                <li ng-repeat=\"boxSnapshot in boxSnapshots\">\n" +
    "                    - {{ boxSnapshot.created_at }}\n" +
    "                    <button\n" +
    "                        ng-if=\"$index == 0\"\n" +
    "                        class=\"btn btn-success\"\n" +
    "                        ng-click=\"currentState()\"\n" +
    "                    >\n" +
    "                        Current State\n" +
    "                    </button>\n" +
    "                    <button\n" +
    "                        ng-if=\"$index != 0\"\n" +
    "                        class=\"btn\"\n" +
    "                        ng-click=\"viewSnapshot(boxSnapshot.created_at)\"\n" +
    "                    >\n" +
    "                        View snapshot\n" +
    "                    </button>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/box/iceBox.html',
    "<div id=\"ice-box\" ng-class=\"{expanded:iceBoxExpanded}\" ut-ice-box>\n" +
    "    <div class=\"header\" ng-click=\"openIceBox()\">\n" +
    "        <i class=\"icon-white icon-chevron-right\"></i>\n" +
    "        <a>Ice Bucket</a>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"samples-wrapper\">\n" +
    "            <table id=\"ice-box-sample\" ng-repeat=\"sample in iceBoxSamples\">\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <td data-sample-id=\"{{sample.id}}\" class=\"g1\" ut-ice-box-sample index=\"{{$index}}\">\n" +
    "                            <div class=\"wrapper\">\n" +
    "                                <a class=\"description\">\n" +
    "                                    {{ sample.description }}\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/move.html',
    "<div id=\"move-box-container\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h3>Move Box</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <div class=\"move-box-wrapper\">\n" +
    "            <div class=\"freezer-list\" ng-if=\"freezerListShow\">\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"freezer in freezers\" ng-click=\"selectFreezer(freezer)\">\n" +
    "                        <i class=\"icon-book\"></i>\n" +
    "                        {{ freezer.nickname }}\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"division-list\" ng-if=\"divisionListShow\">\n" +
    "                <div class=\"freezer-breadcrumb\">\n" +
    "                    <i class=\"icon-arrow-left\" ng-click=\"toggleView('freezerList')\"></i>\n" +
    "                    {{ selectedFreezer.nickname }}\n" +
    "                </div>\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"division in divisions\" ng-click=\"selectDivision(division)\">\n" +
    "                        <i class=\"icon-th-large\"></i>\n" +
    "                        <a>{{ division.name }}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"box-list\" ng-if=\"boxListShow\">\n" +
    "                <div class=\"freezer-breadcrumb\">\n" +
    "                    <i class=\"icon-arrow-left\" ng-click=\"toggleView('divisionList')\"></i>\n" +
    "                    {{ selectedFreezer.nickname }}\n" +
    "                    <span class=\"divider\">/</span>\n" +
    "                    {{ selectedDivision.name }}\n" +
    "                </div>\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"divisionBox in divisionBoxes\" ng-click=\"selectBox(divisionBox)\">\n" +
    "                        <i class=\"icon-th\"></i>\n" +
    "                        {{ divisionBox.name + ' - ' + divisionBox.description }}\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"success\" ng-if=\"successShow\">\n" +
    "                <!-- user can edit -->\n" +
    "                <div ng-if=\"moveToBox.isEditableByUser && moveToBox.height == boxToMove.height\">\n" +
    "                    <h3>Would you like to move the contents of:</h3>\n" +
    "                    <p>{{ boxToMove.heading }}</p>\n" +
    "                    <h3>to</h3>\n" +
    "                    <p>{{ moveToBox.heading }}</p>\n" +
    "                    <p class=\"note text-warning\">Note, any contents in this box will be replaced, however both boxes can be restored if needed.</p>\n" +
    "                    <div class=\"actions\">\n" +
    "                        <a>\n" +
    "                            <button class=\"btn btn-success\" ng-click=\"moveBox(boxToMove, moveToBox)\">Lets Do it!</button>\n" +
    "                        </a>\n" +
    "                        <button class=\"btn\" ng-click=\"toggleView('boxList')\">Pick Another Box</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- user cant edit -->\n" +
    "                <div ng-if=\"!moveToBox.isEditableByUser\">\n" +
    "                    <p class=\"text-error\">Sorry, you dont have permission to edit {{ moveToBox.heading }}. Either pick another box or request permission of this one.</p>\n" +
    "                    <div class=\"actions\">\n" +
    "                        <button class=\"btn\" ng-click=\"toggleView('boxList')\">Pick Another Box</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- boxes are different proportions -->\n" +
    "                <div ng-if=\"moveToBox.height != boxToMove.height\">\n" +
    "                    <p class=\"text-error\">Sorry, these boxes have different proportions and therefore this move is not possible</p>\n" +
    "                    <div class=\"actions\">\n" +
    "                        <button class=\"btn\" ng-click=\"toggleView('boxList')\">Pick Another Box</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/box/paint.html',
    "<div class=\"wrapper\" data-sample-id=\"{{paint.sample.id}}\">\n" +
    "    <a ng-if=\"!paint.sample\" class=\"description\">Right click a sample</a>\n" +
    "    <a ng-if=\"paint.sample\" class=\"description\">{{paint.sample.description}}</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/box/sampleFind.html',
    "<div id=\"freezer-navigation\" ng-class=\"{expanded:freezerNavExpanded}\">\n" +
    "    <div class=\"header\" ng-click=\"openFreezerNav()\">\n" +
    "        <i class=\"icon-white icon-chevron-down\"></i>\n" +
    "        <a>Freezer Navigation</a>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <ul class=\"tabs\">\n" +
    "            <li class=\"freezers\" ui-sref=\"boxView.freezerList\"><i class=\"icon-white icon-book\"></i></li>\n" +
    "            <li class=\"divisions\" ui-sref=\"boxView.divisionList({freezerId:box.Division.freezerId})\"><i class=\"icon-white icon-th-large\"></i></li>\n" +
    "            <li class=\"boxes\" ui-sref=\"boxView.boxList({divisionId:box.Division.id})\"><i class=\"icon-white icon-th-large\"></i></li>\n" +
    "            <li class=\"search active\"><i class=\"icon-white icon-search\"></i></li>\n" +
    "            <li class=\"fill\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"search-list\">\n" +
    "            <div class=\"search-list-container\">\n" +
    "                <p ng-if=\"boxesWithSample.length\">{{ 'Sample ' + sample.id + ' - ' + sample.description + ' exists in boxes:' }}</p>\n" +
    "                <ul>\n" +
    "                    <li\n" +
    "                        ui-sref=\"boxView.search({boxId:box.id, sampleId: sampleId})\"\n" +
    "                        ng-repeat=\"box in boxesWithSample\" class=\"box-t\"\n" +
    "                    >\n" +
    "                        <i class=\"icon-white icon-th\"></i>\n" +
    "                        <div class=\"description\">\n" +
    "                            <a>{{ box.heading }}</a>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <div ng-if=\"!boxesWithSample\" class=\"help\">Search for a sample to find what boxes its in.</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/box/sampleGhosts.html',
    "<table\n" +
    "    id=\"ghost-table\"\n" +
    "    ng-repeat=\"ghost in ghosts\"\n" +
    "    ut-sample-ghost\n" +
    ">\n" +
    "    <tr>\n" +
    "        <td\n" +
    "            class=\"ghost {{ghost.gradient}}\"\n" +
    "            style=\"top:{{ghost.top}}; left: {{ghost.left}};\"\n" +
    "        >\n" +
    "            <div class=\"wrapper\">\n" +
    "                <a class=\"description\">{{ghost.description}}</a>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>"
  );


  $templateCache.put('/app/partials/box/saveBox.html',
    "<ul>\n" +
    "    <li ng-if='box.userCanEdit && !isSnapshot' class=\"save-box\" ng-class=\"{'disabled':!positionsHaveChanged}\" ut-box-save>\n" +
    "        <p>Save</p>\n" +
    "    </li>\n" +
    "\t<li ng-if='box.id && !box.userCanEdit' id=\"permission-box\" ng-class=\"{'disabled': box.awaitingPermission}\" ut-box-request>\n" +
    "\t\t<p ng-if='!box.awaitingPermission'>Request Permission</p>\n" +
    "\t\t<p ng-if='box.awaitingPermission'>Awaiting Permission</p>\n" +
    "\t</li>\n" +
    "    <li ng-if='box.userCanEdit && isSnapshot' id=\"restore-box\" ut-box-restore>\n" +
    "        <p>Restore</p>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('/app/partials/cda/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"cdas[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"description\"\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"CDA Number\"\n" +
    "                    ng-show=\"showColumns.indexOf('cdaNumber') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Investigators\"\n" +
    "                    ng-show=\"showColumns.indexOf('Investigators') > -1\"\n" +
    "                    sort-field=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Institutions\"\n" +
    "                    ng-show=\"showColumns.indexOf('Institutions') > -1\"\n" +
    "                    sort-field=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Recipients\"\n" +
    "                    ng-show=\"showColumns.indexOf('Recipients') > -1\"\n" +
    "                    allow-sort=\"recipient\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                    allow-sort=\"status\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"cda in cdas\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"cda({cdaId:cda.id})\" class=\"link\">{{cda.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    ui-sref=\"cda({cdaId:cda.id})\"\n" +
    "                    class=\"link\"\n" +
    "                >\n" +
    "                    {{cda.description}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('cdaNumber') > -1\"\n" +
    "                >\n" +
    "                    {{cda.cdaNumber}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('Investigators') > -1\"\n" +
    "                >\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"investigator in cda.Investigators\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"contact({contactId:investigator.id})\" class=\"flat-link\">\n" +
    "                                {{investigator.name + \",&nbsp;\"}}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"contact({contactId:investigator.id})\" class=\"flat-link\">\n" +
    "                                {{investigator.name}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('Institutions') > -1\"\n" +
    "                >\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"institution in cda.Institutions\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:institution.id})\" class=\"flat-link\">\n" +
    "                                {{institution.groupName + \",&nbsp;\"}}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:institution.id})\" class=\"flat-link\">\n" +
    "                                {{institution.groupName}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('Recipients') > -1\"\n" +
    "                >\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"recipient in cda.Recipients\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:recipient.id})\" class=\"flat-link\">\n" +
    "                                {{recipient.groupName + \",&nbsp;\"}}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:recipient.id})\" class=\"flat-link\">\n" +
    "                                {{recipient.groupName}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"directory({userId:cda.User.u_id})\" class=\"flat-link\">\n" +
    "                        {{cda.User.fullName}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                >\n" +
    "                    {{cda.status}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{cda.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{cda.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/cda/grid_actions.html\"\n" +
    "                        data=\"cda\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!cdas[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/cda/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'ConfidentialityDisclosureAgreementGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cda/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete CDA {{cda.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this CDA?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Description\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ cda.description}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cda/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/mta/mta-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"cdaGrid.search\">Confidentiality Disclosure Agreements</li>\n" +
    "            <li class=\"end\">CDA {{cda.id}}</li>\n" +
    "            <li class=\"title\">{{cda.description}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{cda.description}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>CDA Number:</td>\n" +
    "                            <td>{{cda.cdaNumber}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Status:</td>\n" +
    "                            <td>{{cda.status}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"ConfidentialityDisclosureAgreement\"\n" +
    "                    oid=\"cda.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"ConfidentialityDisclosureAgreement\"\n" +
    "                    oid=\"cda.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Contacts\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Investigators:</td>\n" +
    "                        <td ng-if=\"cda.Investigators\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"investigator in cda.Investigators\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"contact({contactId:investigator.id})\" class=\"flat-link\">\n" +
    "                                        {{investigator.name + \",&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"contact({contactId:investigator.id})\" class=\"flat-link\">\n" +
    "                                        {{investigator.name}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Collaborators\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Institutions:</td>\n" +
    "                        <td ng-if=\"cda.Institutions\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"institution in cda.Institutions\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:institution.id})\" class=\"flat-link\">\n" +
    "                                        {{institution.groupName + \",&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:institution.id})\" class=\"flat-link\">\n" +
    "                                        {{institution.groupName}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Recipients:</td>\n" +
    "                        <td ng-if=\"cda.Recipients\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"recipient in cda.Recipients\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:recipient.id})\" class=\"flat-link\">\n" +
    "                                        {{recipient.groupName + \",&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:recipient.id})\" class=\"flat-link\">\n" +
    "                                        {{recipient.groupName}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "               </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"CDA Creator\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>User:</td>\n" +
    "                        <td >\n" +
    "                            <a ui-sref=\"directory({userId:cda.User.u_id})\" class=\"flat-link\">\n" +
    "                                {{cda.User.fullName}}\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ cda.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ cda.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cda/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!mta.id\">Create CDA</h3>\n" +
    "    <h3 ng-if=\"mta.id\">Edit CDA {{ cda.id }} - {{ cda.description }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"utilities-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in cda.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"User\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"cda.User\"\n" +
    "                        key=\"cda.userId\"\n" +
    "                        resource=\"user\"\n" +
    "                        resource-primary-key=\"u_id\"\n" +
    "                        placeholder=\"fullName\"\n" +
    "                        template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                        disabled\n" +
    "                        error=\"cda.errors.userId\"\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"CDA Number\">\n" +
    "                    <ut-input\n" +
    "                        model=\"cda.cdaNumber\"\n" +
    "                        error=\"cda.errors.cdaNumber\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"cda.description\"\n" +
    "                        error=\"cda.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Recipients\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"collaborator\"\n" +
    "                        model=\"cda\"\n" +
    "                        foreign-key=\"recipientId\"\n" +
    "                        relation=\"CDARelations\"\n" +
    "                        access=\"cda.Recipients\"\n" +
    "                        placeholder=\"groupName\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Investigators\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"contact\"\n" +
    "                        model=\"cda\"\n" +
    "                        foreign-key=\"investigatorId\"\n" +
    "                        relation=\"CDARelations\"\n" +
    "                        access=\"cda.Investigators\"\n" +
    "                        placeholder=\"name\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Institutions\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"collaborator\"\n" +
    "                        model=\"cda\"\n" +
    "                        foreign-key=\"institutionId\"\n" +
    "                        relation=\"CDARelations\"\n" +
    "                        access=\"cda.Institutions\"\n" +
    "                        placeholder=\"groupName\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\" ng-if=\"cda.id\" required>\n" +
    "                    <select ng-model=\"cda.status\">\n" +
    "                        <option value=\"Fully Executed\">Fully Executed</option>\n" +
    "                        <option value=\"Pending\">Pending</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"cda.errors.status\" class=\"ut-global-error\">{{cda.errors.status}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"ConfidentialityDisclosureAgreement\" oid=\"cda.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"cda.id\">Save</a>\n" +
    "        <a ng-if=\"!cda.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cda/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/cda/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Confidentiality Disclosure Agreement Search</h3>\n" +
    "                <button class=\"btn\" ng-if=\"canEdit()\" ng-click=\"createCda()\">Create New CDA</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Users: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cda/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"CdaGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"cda({cdaId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/collaborator/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"collaborators[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Group Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('groupName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Group Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Location\"\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"collaborator in collaborators\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"collaborator({collaboratorId:collaborator.id})\" class=\"link\">{{collaborator.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('groupName') > -1\"\n" +
    "                    ui-sref=\"collaborator({collaboratorId:collaborator.id})\"\n" +
    "                    class=\"link\"\n" +
    "                >\n" +
    "                    {{collaborator.groupName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{collaborator.description}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                >\n" +
    "                    {{collaborator.location}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/collaborator/grid_actions.html\"\n" +
    "                        data=\"collaborator\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!collaborators[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/collaborator/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'CollaboratorGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/collaborator/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Collaborator {{collaborator.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this collaborator?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Group Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{collaborator.groupName}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/collaborator/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/collaborator-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"collaboratorGrid.search\">Collaborators</li>\n" +
    "            <li class=\"end\">{{collaborator.id}}</li>\n" +
    "            <li class=\"title\">{{collaborator.groupName}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{collaborator.groupName}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{collaborator.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Location:</td>\n" +
    "                            <td>{{collaborator.location}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Collaborator\"\n" +
    "                    oid=\"collaborator.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Collaborator\"\n" +
    "                    oid=\"collaborator.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>Contacts:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"contact in collaborator.contacts\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/#/contact/{{contact.id}}\">\n" +
    "                                        {{contact.name + \", \" + \"&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/#/contact/{{contact.id}}\">\n" +
    "                                        {{contact.name}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/collaborator/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!collaborator.id\">Create Collaborator</h3>\n" +
    "    <h3 ng-if=\"collaborator.id\">Edit Collaborator {{ collaborator.id }} - {{ collaborator.groupName }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in collaborator.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Group Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"collaborator.groupName\"\n" +
    "                        error=\"collaborator.errors.groupName\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"collaborator.description\"\n" +
    "                        error=\"collaborator.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Location\">\n" +
    "                    <ut-input\n" +
    "                        model=\"collaborator.location\"\n" +
    "                        error=\"collaborator.errors.location\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Contacts\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"contact\"\n" +
    "                        model=\"collaborator\"\n" +
    "                        foreign-key=\"contactId\"\n" +
    "                        relation=\"CollaboratorContacts\"\n" +
    "                        access=\"collaborator.contacts\"\n" +
    "                        placeholder=\"name\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Collaborator\" oid=\"collaborator.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"collaborator.id\">Save</a>\n" +
    "        <a ng-if=\"!collaborator.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/collaborator/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/collaborator/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Collaborator Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createCollaborator()\">Create New Collaborator</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/collaborator/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"CollaboratorGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"collaborator({collaboratorId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul> \n" +
    "</div>"
  );


  $templateCache.put('/app/partials/comment/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Comment</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this comment?</p>\n" +
    "            <ut-control-group label=\"Author:\" class=\"author\">\n" +
    "                <img class=\"ut-comment-img\" ng-src=\"/profile/avatar/{{comment.userId}}\"/>\n" +
    "                {{ comment.User.fullName }}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Created at:\" class=\"created\">\n" +
    "                <div> {{comment.created_at | utDate | date:'MM/dd/yy @ h:mma'}} </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Notes:\" class=\"notes\">\n" +
    "                {{comment.comment}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/comment/edit.html',
    "<div id=\"ut-comment-modal\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h3 >Edit Comment</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <ut-control-group label=\"Author:\" class=\"author\">\n" +
    "                <img ng-src=\"/profile/avatar/{{comment.userId}}\"/>\n" +
    "                {{comment.User.fullName}}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Created at:\" class=\"created\">\n" +
    "                {{comment.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Notes:\">\n" +
    "                <textarea ng-model=\"commentVars.comment\" class=\"ut-comment-text-box\"></textarea>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "            <a>Save</a>\n" +
    "        </button>\n" +
    "        <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/contact/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"contacts[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"name\"\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Position\"\n" +
    "                    ng-show=\"showColumns.indexOf('position') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Location\"\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Email\"\n" +
    "                    ng-show=\"showColumns.indexOf('email') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Address\"\n" +
    "                    ng-show=\"showColumns.indexOf('address') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"City\"\n" +
    "                    ng-show=\"showColumns.indexOf('city') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"State\"\n" +
    "                    ng-show=\"showColumns.indexOf('state') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Zip\"\n" +
    "                    ng-show=\"showColumns.indexOf('zip') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Phone\"\n" +
    "                    ng-show=\"showColumns.indexOf('phone') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Fedex Account Number\"\n" +
    "                    ng-show=\"showColumns.indexOf('fedexAccountNumber') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Fax Number\"\n" +
    "                    ng-show=\"showColumns.indexOf('faxNumber') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"contact in contacts\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"contact({contactId:contact.id})\" class=\"link\">{{contact.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    ui-sref=\"contact({contactId:contact.id})\"\n" +
    "                    class=\"flat-link ut-flat-link-cursor\"\n" +
    "                >\n" +
    "                    {{contact.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('position') > -1\"\n" +
    "                >\n" +
    "                    {{contact.position}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                >\n" +
    "                    {{contact.location}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('email') > -1\"\n" +
    "                >\n" +
    "                    {{contact.email}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('address') > -1\"\n" +
    "                >\n" +
    "                    {{contact.address}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('city') > -1\"\n" +
    "                >\n" +
    "                    {{contact.city}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('state') > -1\"\n" +
    "                >\n" +
    "                    {{contact.state}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('zip') > -1\"\n" +
    "                >\n" +
    "                    {{contact.zip}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('phone') > -1\"\n" +
    "                >\n" +
    "                    {{contact.phone}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('fedexAccountNumber') > -1\"\n" +
    "                >\n" +
    "                    {{contact.fedexAccountNumber}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('faxNumber') > -1\"\n" +
    "                >\n" +
    "                    {{contact.faxNumber}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/contact/grid_actions.html\"\n" +
    "                        data=\"contact\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!contacts[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/contact/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'ContactGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/contact/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Contact {{contact.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this contact?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ contact.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/contact/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/contact-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"contactGrid.search\">Contacts</li>\n" +
    "            <li class=\"end\">{{contact.id}}</li>\n" +
    "            <li class=\"title\">{{contact.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{contact.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Position:</td>\n" +
    "                            <td>{{contact.position}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Email:</td>\n" +
    "                            <td>{{contact.email}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Phone:</td>\n" +
    "                            <td>{{contact.phone}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Fax Number:</td>\n" +
    "                            <td>{{contact.faxNumber}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Fedex Account Number:</td>\n" +
    "                            <td>{{contact.fedexAccountNumber}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Location:</td>\n" +
    "                            <td>{{contact.location}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Address:</td>\n" +
    "                            <td>{{contact.address}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>City:</td>\n" +
    "                            <td>{{contact.city}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>State:</td>\n" +
    "                            <td>{{contact.state}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Zip Code:</td>\n" +
    "                            <td>{{contact.zip}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Contact\"\n" +
    "                    oid=\"contact.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Contact\"\n" +
    "                    oid=\"contact.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Contact's Collaborator Groups\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Collaborator:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"collaborator in contact.collaborators\">\n" +
    "                                    <a class=\"flat-link\" ng-href=\"/#/collaborator/{{collaborator.id}}\">\n" +
    "                                        {{collaborator.groupName}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/contact/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!contact.id\">Create Contact</h3>\n" +
    "    <h3 ng-if=\"contact.id\">Edit Contact {{ contact.id }} - {{ contact.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in contact.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.name\"\n" +
    "                        error=\"contact.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Position\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.position\"\n" +
    "                        error=\"contact.errors.position\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group  >\n" +
    "\n" +
    "                <ut-control-group label=\"Location\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.location\"\n" +
    "                        error=\"contact.errors.location\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Email\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.email\"\n" +
    "                        error=\"contact.errors.email\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Address\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.address\"\n" +
    "                        error=\"contact.errors.address\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"City\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.city\"\n" +
    "                        error=\"contact.errors.city\"\n" +
    "                    />\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"State\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.state\"\n" +
    "                        error=\"contact.errors.state\"\n" +
    "                    />\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Zip\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.zip\"\n" +
    "                        error=\"contact.error.zip\"\n" +
    "                    />\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Phone\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.phone\"\n" +
    "                        error=\"contact.errors.phone\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Fax Number\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.faxNumber\"\n" +
    "                        error=\"contact.errors.faxNumber\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Fedex Account Number\">\n" +
    "                    <ut-input\n" +
    "                        model=\"contact.fedexAccountNumber\"\n" +
    "                        error=\"contact.errors.fedexAccountNumber\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Collaborators\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"collaborator\"\n" +
    "                        model=\"contact\"\n" +
    "                        foreign-key=\"collaboratorId\"\n" +
    "                        relation=\"CollaboratorContact\"\n" +
    "                        access=\"contact.collaborators\"\n" +
    "                        placeholder=\"groupName\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Contact\" oid=\"contact.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"contact.id\">Save</a>\n" +
    "        <a ng-if=\"!contact.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/contact/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/contact/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Contact Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createContact()\">Create New Contact</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/contact/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"ContactGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"contact({contactId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul> \n" +
    "</div>"
  );


  $templateCache.put('/app/partials/contextMenu/contextMenu.html',
    "<div id='ut-context-menu' ng-style=\"contextStyle\" ng-if=\"!hidden\">\n" +
    "    <div ng-include=\"template\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/_culture_status_log.html',
    "<div class=\"ut-relative-plus-icon\" ng-if=\"canEdit()\" ng-click=\"cultureStatusModal()\">\n" +
    "    <i class=\"icon-plus\"></i>\n" +
    "</div>\n" +
    "<div id=\"ut-detail-table\">\n" +
    "    <table >\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th> Date of Status </th>\n" +
    "                <th> Status Name</th>\n" +
    "                <th> Notes </th>\n" +
    "                <th ng-if=\"canEdit()\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody id=\"antibody-request-table\">\n" +
    "            <tr ng-repeat=\"cultureStatus in cultureStatuses\">\n" +
    "                <td> {{cultureStatus.date}} </td>\n" +
    "                <td >\n" +
    "                    <a  ui-sref=\"cultureStatusDetail({cultureStatusDetailId:cultureStatus.statusDetailId})\" class=\"flat-link\" class=\"ut-flat-link-cursor\">\n" +
    "                        {{cultureStatus.CultureStatusDetail.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td> {{cultureStatus.notes}} </td>\n" +
    "                <td class=\"ut-actions-td\" ng-if=\"canEdit()\">\n" +
    "                    <div class=\"ut-table-edit-delete-icons\">\n" +
    "                        <i class=\"icon-pencil\" ng-click=\"cultureStatusModal(cultureStatus)\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"ut-table-edit-delete-icons\" ng-click=\"deleteCultureStatus(cultureStatus)\">\n" +
    "                        <i class=\"icon-trash\"></i>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table id=\"antibody-request-table\" ng-if=\"cultures[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Sample\"\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"s.description\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date Of Last Status Update\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfLastStatusUpdate') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"dateOfLastStatusUpdate\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date of Purifcation\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfPurification') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"dateOfPurification\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Concentration (mg/mL)\"\n" +
    "                    ng-show=\"showColumns.indexOf('concentration') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"concentration\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Volume (mL)\"\n" +
    "                    ng-show=\"showColumns.indexOf('volume') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"volume\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Expected Availability\"\n" +
    "                    ng-show=\"showColumns.indexOf('expectedAvailability') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"expectedAvailability\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Culture Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('currentCultureStatusId') > -1\"\n" +
    "                    sort-field=\"currentCultureStatusId\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\" ng-if=\"canEdit()\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"culture in cultures\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"culture({cultureId:culture.id})\" class=\"link\">{{culture.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"sample({sampleId:culture.Sample.id})\">{{culture.Sample.description}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{culture.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfLastStatusUpdate') > -1\"\n" +
    "                >\n" +
    "                    {{culture.dateOfLastStatusUpdate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfPurification') > -1\"\n" +
    "                >\n" +
    "                    {{culture.dateOfPurification | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('concentration') > -1\"\n" +
    "                >\n" +
    "                    {{culture.concentration}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('volume') > -1\"\n" +
    "                >\n" +
    "                    {{culture.volume}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('expectedAvailability') > -1\"\n" +
    "                >\n" +
    "                    {{culture.expectedAvailability | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    class=\"culture-status-{{culture.CultureStatusDetail.color}}\"\n" +
    "                    ng-show=\"showColumns.indexOf('currentCultureStatusId') > -1\"\n" +
    "                >\n" +
    "                    {{culture.CultureStatusDetail.name}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{culture.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{culture.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\" ng-if=\"canEdit()\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/culture/grid_actions.html\"\n" +
    "                        data=\"culture\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!cultures[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/culture/csvExport.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'CultureGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/cultureStatusDelete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Culture Status {{cultureStatus.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this culture status?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/cultureStatusForm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!cultureStatus.id\">Create Culture Status</h3>\n" +
    "    <h3 ng-if=\"cultureStatus.id\">Edit Culture Status {{ cultureStatus.id }} - {{ cultureStatus.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in cultureStatus.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"cultureStatus.CultureStatusDetail\"\n" +
    "                        key=\"cultureStatus.statusDetailId\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"culture-status-detail\"\n" +
    "                        error=\"cultureStatus.errors.statusDetailId\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Date\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"cultureStatus.date\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                    <div ng-if=\"cultureStatus.errors.date\" class=\"ut-global-error\">{{cultureStatus.errors.date}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Notes\">\n" +
    "                    <textarea ng-model=\"cultureStatus.notes\"></textarea>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"cultureStatus.id\">Save</a>\n" +
    "        <a ng-if=\"!cultureStatus.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Culture {{culture.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this culture?</p>\n" +
    "            <p class=\"text-error\">\n" +
    "                <strong>\n" +
    "                    If this culture is associated with a mAb request you must delete the mAb request first.\n" +
    "                </strong>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li ui-sref=\"cultureGrid.search\">Cultures</li>\n" +
    "            <li class=\"end\">Culture {{culture.id}}</li>\n" +
    "            <li class=\"title\">Culture - {{culture.Sample.description}} </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-success\" ng-click=\"cultureStatusModal(cultureStatus)\">\n" +
    "                <i class=\"icon-plus\" />\n" +
    "                Add To Culture Log\n" +
    "            </button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Sample:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"sample({sampleId:culture.sampleId})\" class=\"flat-link\">\n" +
    "                                {{culture.Sample.description}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Culture Status:</td>\n" +
    "                            <td>{{culture.CultureStatusDetail.name}}</td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Concentration (mg/mL):</td>\n" +
    "                            <td>{{culture.concentration}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Volume (mL):</td>\n" +
    "                            <td>{{culture.volume}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Culture Status Log\" ng-if=\"hasCutureStatuses()\" class=\"ut-position-relative\">\n" +
    "                <div ng-include=\"'/app/partials/culture/_culture_status_log.html'\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Culture\"\n" +
    "                    oid=\"culture.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Culture\"\n" +
    "                    oid=\"culture.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Antibody Requests\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>mAb Requests:</td>\n" +
    "                        <td ng-if=\"culture.antibodyRequests.length != 0\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"antibodyRequest in culture.antibodyRequests\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"antibodyRequest({antibodyRequestId:antibodyRequest.id})\">\n" +
    "                                        {{antibodyRequest.toString + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"antibodyRequest({antibodyRequestId:antibodyRequest.id})\">\n" +
    "                                        {{antibodyRequest.toString}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Creator:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"culture.userId\" ng-src=\"/profile/avatar/{{culture.userId}}\" />\n" +
    "                            {{culture.User.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Date of Purification:</td>\n" +
    "                        <td>{{ culture.dateOfPurification }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Date of Last Status Update:</td>\n" +
    "                        <td>{{ culture.dateOfLastStatusUpdate }}</td>\n" +
    "                    </tr>\n" +
    "                                        <tr>\n" +
    "                        <td>Expected Availability:</td>\n" +
    "                        <td>{{ culture.expectedAvailability }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ culture.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ culture.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!culture.id\">Create Culture</h3>\n" +
    "    <h3 ng-if=\"culture.id\">Edit Culture {{ culture.id }} - {{ culture.Sample.description}}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in culture.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Sample\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"culture.Sample\"\n" +
    "                        key=\"culture.sampleId\"\n" +
    "                        placeholder=\"description\"\n" +
    "                        resource=\"sample-typeahead\"\n" +
    "                        error=\"culture.errors.sampleId\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Concentration (mg/mL):\">\n" +
    "                    <ut-input\n" +
    "                        model=\"culture.concentration\"\n" +
    "                        error=\"culture.errors.concentration\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Volume (mL):\">\n" +
    "                    <ut-input\n" +
    "                        model=\"culture.volume\"\n" +
    "                        error=\"culture.errors.volume\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Date of Purification:\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"culture.dateOfPurification\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Expected Availability:\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"culture.expectedAvailability\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"AntibodyRequest\" oid=\"antibodyRequest.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"culture.id\">Save</a>\n" +
    "        <a ng-if=\"!culture.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/culture/csvExport.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Culture Search</h3>\n" +
    "                <button class=\"btn\" ng-if=\"canEdit()\" ng-click=\"createCulture()\">Create Culture</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-dropdown\n" +
    "                title=\"Sample: All\"\n" +
    "                template=\"/app/partials/filters/samples.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/culture/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"CultureGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"culture({cultureId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table id=\"antibody-request-table\" ng-if=\"cultureStatusDetails[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Sort Order\"\n" +
    "                    ng-show=\"showColumns.indexOf('sort') > -1\"\n" +
    "                    sort-field=\"sort\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Culture Status Detail Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Color\"\n" +
    "                    ng-show=\"showColumns.indexOf('color') > -1\"\n" +
    "                    sort-field=\"color\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"cultureStatusDetail in cultureStatusDetails\" class=\"ut-fade\">\n" +
    "                <td\n" +
    "                    ui-sref=\"cultureStatusDetail({cultureStatusDetailId:cultureStatusDetail.id})\" class=\"link\"\n" +
    "                    ng-show=\"showColumns.indexOf('sort') > -1\"\n" +
    "                >\n" +
    "                    {{cultureStatusDetail.sort}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{cultureStatusDetail.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    class=\"culture-status-{{cultureStatusDetail.color}}\"\n" +
    "                    ng-show=\"showColumns.indexOf('color') > -1\"\n" +
    "                >\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/cultureStatusDetail/grid_actions.html\"\n" +
    "                        data=\"cultureStatusDetail\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!cultureStatusDetails[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/csvExport.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'CultureStatusDetailGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Culture Status Detail {{cultureStatusDetail.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this culture status detail?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li ui-sref=\"cultureStatusDetailGrid.search\">Cultures Status Details</li>\n" +
    "            <li class=\"end\">Culture Status Details {{cultureStatusDetail.id}}</li>\n" +
    "            <li class=\"title\">Culture Status Details - {{cultureStatusDetail.name}} </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>\n" +
    "                                {{cultureStatusDetail.name}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Sort Number:</td>\n" +
    "                            <td>\n" +
    "                                {{cultureStatusDetail.sort}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\" id=\"antibody-request-table\">\n" +
    "                        <tr>\n" +
    "                            <td>Color:</td>\n" +
    "                            <td class=\"culture-status-{{cultureStatusDetail.color}}\">\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"CultureStatusDetail\"\n" +
    "                    oid=\"cultureStatusDetail.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"CultureStatusDetail\"\n" +
    "                    oid=\"cultureStatusDetail.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!cultureStatusDetail.id\">Create Culture Status Detail</h3>\n" +
    "    <h3 ng-if=\"cultureStatusDetail.id\">Edit Culture Status Detail {{ cultureStatusDetail.id }} - {{ cultureStatusDetail.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in cultureStatusDetail.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name:\">\n" +
    "                    <ut-input\n" +
    "                        model=\"cultureStatusDetail.name\"\n" +
    "                        error=\"cultureStatusDetail.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Sort Order:\">\n" +
    "                    <ut-input\n" +
    "                        model=\"cultureStatusDetail.sort\"\n" +
    "                        error=\"cultureStatusDetail.errors.sort\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\" required>\n" +
    "                    <select ng-model=\"cultureStatusDetail.color\">\n" +
    "                        <option value=\"1\">Red</option>\n" +
    "                        <option value=\"2\">Orange</option>\n" +
    "                        <option value=\"3\">Yellow</option>\n" +
    "                        <option value=\"4\">Light Green</option>\n" +
    "                        <option value=\"5\">Green</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"cultureStatusDetail.errors.color\" class=\"ut-global-error\">{{mta.errors.status}}</div>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"cultureStatusDetail.id\">Save</a>\n" +
    "        <a ng-if=\"!cultureStatusDetail.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/cultureStatusDetail/csvExport.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Culture Status Detail Search</h3>\n" +
    "                <button class=\"btn\" ng-if=\"canEdit()\" ng-click=\"createCultureStatusDetail()\">Create Culture Status Detail</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/cultureStatusDetail/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"CultureStatusDetailGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"cultureStatusDetail({cultureStatusDetailId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/directory/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"users[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"u_id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u_first_name\"\n" +
    "                    label=\"First Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_first_name') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u_last_name\"\n" +
    "                    label=\"Last Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_last_name') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"User Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_user_name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Email\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_email') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Office Phone\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_office_phone') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Mobile Phone\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_mobile_phone') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Room Number\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_office_room') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Degree\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_degree') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Role\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_role') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Member Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('u_lab_membership') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Lab Core\"\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"created_at\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th ut-grid-header allow-sort=\"false\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"user in users\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"directory({userId:user.u_id})\" class=\"link\">{{user.u_id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_first_name') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_first_name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_last_name') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_last_name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_user_name') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_user_name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_email') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_email}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_office_phone') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_office_phone}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_mobile_phone') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_mobile_phone}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_office_room') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_office_room}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_degree') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_degree}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_role') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_role}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('u_lab_membership') > -1\"\n" +
    "                >\n" +
    "                    {{user.u_lab_membership}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                >\n" +
    "                    {{user.LabCore.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{user.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/directory/grid_actions.html\"\n" +
    "                        data=\"user\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!users[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/directory/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'UsersGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/directory/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" ng-if=\"user.u_id\" ng-src=\"/profile/avatar/{{user.u_id}}\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li onclick=\"window.location='/'\">Home</li>\n" +
    "            <li ui-sref=\"directoryGrid.search\">Directory</li>\n" +
    "            <li class=\"end\">{{user.u_id}}</li>\n" +
    "            <li class=\"title\">{{user.u_first_name}} {{user.u_last_name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Lab Core:</td>\n" +
    "                            <td>{{user.labCore.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Room Number:</td>\n" +
    "                            <td>{{user.u_office_room}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Member Status:</td>\n" +
    "                            <td>{{user.u_lab_membership}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Degree:</td>\n" +
    "                            <td>{{user.u_degree}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Role:</td>\n" +
    "                            <td>{{user.u_role}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>User Name:</td>\n" +
    "                            <td>{{user.u_user_name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Email:</td>\n" +
    "                            <td>{{user.u_email}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Mobile Phone:</td>\n" +
    "                            <td>{{user.u_mobile_phone}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Office Phone:</td>\n" +
    "                            <td>{{user.u_office_phone}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"User\"\n" +
    "                    oid=\"user.u_id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"User\"\n" +
    "                    oid=\"user.u_id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/directory/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"user.u_id\">Edit User {{ user.u_id }} - {{ user.fullName }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in user.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"First Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_first_name\"\n" +
    "                        error=\"user.errors.u_first_name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Last Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_last_name\"\n" +
    "                        error=\"user.errors.u_last_name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Lab Core\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"user.labCore\"\n" +
    "                        key=\"user.lab_core\"\n" +
    "                        resource=\"lab-core-typeahead\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"user.errors.lab_core\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"User Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_user_name\"\n" +
    "                        error=\"user.errors.u_user_name\"\n" +
    "                        disabled=\"true\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Email\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_email\"\n" +
    "                        error=\"user.errors.u_email\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Office Phone\">\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_office_phone\"\n" +
    "                        error=\"user.errors.u_office_phone\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Mobile Phone\">\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_mobile_phone\"\n" +
    "                        error=\"user.errors.u_mobile_phone\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Room Number\">\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_office_room\"\n" +
    "                        error=\"user.errors.u_office_room\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Degree\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_degree\"\n" +
    "                        error=\"user.errors.u_degree\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Role\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"user.u_role\"\n" +
    "                        error=\"user.errors.u_role\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Member Status\" required>\n" +
    "                    <select ng-model=\"user.u_lab_membership\">\n" +
    "                        <option value=\"None\">None</option>\n" +
    "                        <option value=\"Former\">Former</option>\n" +
    "                        <option value=\"Current\">Current</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"user.errors.u_lab_membership\" class=\"ut-global-error\">{{user.errors.u_lab_membership}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"User\" oid=\"user.u_id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"user.u_id\">Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/directory/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/directory/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Directory Search</h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/directory/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"DirectoryGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"directory({userId:data.u_id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/division/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Division {{division.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this division?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\" class=\"created\">\n" +
    "                <div> {{division.name}} </div>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/division/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!division.id\">Create Division in freezer {{division.freezerId}}</h3>\n" +
    "    <h3 ng-if=\"division.id\">Edit Division {{division.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"division-form-container\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in division.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}} </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\">\n" +
    "                <ut-input\n" +
    "                    model=\"division.name\"\n" +
    "                    error=\"division.errors.name\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"division.id\">Save</a>\n" +
    "        <a ng-if=\"!division.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/_cart.html',
    "<div id=\"cart-requests\" class=\"utilities-grid-container\" ng-controller=\"DnaPurificationCartController\">\n" +
    "    <div class=\"cart-header\">\n" +
    "        DNA Purification Request Cart\n" +
    "    </div>\n" +
    "    <div id=\"cart-table-container\">\n" +
    "        <table>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td class=\"fifty\">\n" +
    "                        <div class=\"content\">\n" +
    "                            <div class=\"ut-fade\" ng-include=\"'/app/partials/dnaPurification/_cartRequestTable.html'\"></div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td class=\"fifty\">\n" +
    "                        <div class=\"content\">\n" +
    "                            <div class=\"ut-fade\" ng-include=\"'/app/partials/dnaPurification/_cartActions.html'\"></div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/_cartActions.html',
    "<div class=\"first\">\n" +
    "    Cart Actions:\n" +
    "</div>\n" +
    "<table class=\"action-table\">\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            <select ng-model=\"model.status\">\n" +
    "                <option value=\"review\">review</option>\n" +
    "                <option value=\"processing\">processing</option>\n" +
    "                <option value=\"finishing\">finishing</option>\n" +
    "            </select>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            <input ng-click=\"updateStatus()\" type=\"submit\" class=\"btn btn-primary\" value=\"Update Status\"></input>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td class=\"no-padding\">\n" +
    "            <input\n" +
    "                type=\"text\"\n" +
    "                datepicker-popup=\"M/dd/yyyy\"\n" +
    "                ng-model=\"model.expectedDate\"\n" +
    "                class=\"ut-input\"\n" +
    "            />\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            <input type=\"submit\" class=\"btn btn-success\" value=\"Update Expected Date\" ng-click=\"updateExpectedDate()\"></input>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td class=\"no-padding\">\n" +
    "            <input\n" +
    "                type=\"text\"\n" +
    "                datepicker-popup=\"M/dd/yyyy\"\n" +
    "                ng-model=\"model.completionDate\"\n" +
    "                class=\"ut-input\"\n" +
    "            />\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            <input type=\"submit\" class=\"btn btn-warning\" value=\"Update Completion Date\" ng-click=\"updateCompletionDate()\"></input>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            <input id=\"nanodrop\" type=\"file\" onchange=\"angular.element(this).scope().setFile(this)\"></input>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "            <input type=\"submit\" ng-click=\"nanoDropModal()\" class=\"btn btn-danger\" value=\"Upload Nanodrop file\"></input>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            <a ng-click=\"emptyCart()\" class=\"empty\" href=\"\">Empty Cart</a>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/_cartRequestTable.html',
    "<div ng-if=\"!hasCart()\">\n" +
    "    Your cart is currently empty\n" +
    "</div>\n" +
    "<table id=\"cart-request-preview-table\" ng-if=\"hasCart()\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>Id</th>\n" +
    "            <th>Sample</th>\n" +
    "            <th>Status</th>\n" +
    "            <th>Expected Date</th>\n" +
    "            <th>Concentration</th>\n" +
    "            <th></th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"purificationRequest in purificationRequests\">\n" +
    "            <td>\n" +
    "                {{purificationRequest.DnaPurification.id}}\n" +
    "            </td>\n" +
    "            <td >\n" +
    "                {{purificationRequest.DnaPurification.Sample.description}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{purificationRequest.DnaPurification.status}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{purificationRequest.DnaPurification.expectedDate}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{purificationRequest.DnaPurification.concentration}}\n" +
    "            </td>\n" +
    "            <td class=\"cart-icon\">\n" +
    "                <span ng-if=\"purificationRequest\" class=\"ut-icon-minus\" ng-click=\"removeFromCart(purificationRequest.DnaPurification)\"></span>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table id=\"dna-purification-table\" ng-if=\"dnaPurifications[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Date of Submission\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Sample\"\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"s.description\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Culture Volume\"\n" +
    "                    ng-show=\"showColumns.indexOf('cultureVolume') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"cultureVolume\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Elution Volume\"\n" +
    "                    ng-show=\"showColumns.indexOf('elutionVolume') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"elutionVolume\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Concentration (mg/mL)\"\n" +
    "                    ng-show=\"showColumns.indexOf('concentration') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"concentration\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Yield (mg/mL)\"\n" +
    "                    ng-show=\"showColumns.indexOf('dnaYield') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"dnaYield\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"chain\"\n" +
    "                    label=\"Chain\"\n" +
    "                    ng-show=\"showColumns.indexOf('chain') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"expectedDate\"\n" +
    "                    label=\"Expected Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('expectedDate') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"status\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"completionDate\"\n" +
    "                    label=\"Completion Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('completionDate') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Comments\"\n" +
    "                    ng-show=\"showColumns.indexOf('comments') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"comments\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Notes\"\n" +
    "                    ng-show=\"showColumns.indexOf('notes') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"notes\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\" ng-if=\"canEdit()\"></th>\n" +
    "                <th class=\"actions\" ng-if=\"canEdit()\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr\n" +
    "                ng-repeat=\"dnaPurification in dnaPurifications\" class=\"ut-fade\"\n" +
    "                ng-class=\"inCartClass(dnaPurification)\"\n" +
    "            >\n" +
    "                <td ui-sref=\"dnaPurification({dnaPurificationId:dnaPurification.id})\" class=\"link\">{{dnaPurification.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.created_at | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('sampleId') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"sample({sampleId:dnaPurification.Sample.id})\">{{dnaPurification.Sample.description}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('cultureVolume') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.cultureVolume}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('elutionVolume') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.elutionVolume}}\n" +
    "                </td>\n" +
    "\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('concentration') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.concentration}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dnaYield') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.dnaYield}}\n" +
    "                </td>\n" +
    "\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('chain') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.chain}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('expectedDate') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.expectedDate | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.status}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('completionDate') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.completionDate | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('comments') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.comments}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('notes') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.notes}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{dnaPurification.updated_at | utDate | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td class=\"cart-icon\">\n" +
    "                    <span ng-if=\"!inCartClass(dnaPurification)\" id=\"ut-cart-icon\" ng-click=\"addToCart(dnaPurification)\"></span>\n" +
    "                    <span ng-if=\"inCartClass(dnaPurification)\" class=\"ut-icon-minus\" ng-click=\"removeFromCart(dnaPurification)\"></span>\n" +
    "                </td>\n" +
    "                <td class=\"actions\" ng-if=\"canEdit()\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/dnaPurification/grid_actions.html\"\n" +
    "                        data=\"dnaPurification\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!dnaPurifications[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/dnaPurification/_cart.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/csvExport.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'DnaPurificationGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete DNA Purification {{purification.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this DNA Purification request?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/drive/icon_sequencing.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li ui-sref=\"dnaPurificationGrid.search\">DNA Purification</li>\n" +
    "            <li class=\"end\">DNA Purification {{dnaPurification.id}}</li>\n" +
    "            <li class=\"title\">Purification Request {{dnaPurification.Sample.description}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Sample:</td>\n" +
    "                            <td>{{dnaPurification.Sample.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Chain:</td>\n" +
    "                            <td>{{dnaPurification.chain}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Elution Buffer:</td>\n" +
    "                            <td>{{dnaPurification.elutionBuffer}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Values\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                         <tr>\n" +
    "                            <td>Elution Volume:</td>\n" +
    "                            <td>{{dnaPurification.elutionVolume}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Culture Volume:</td>\n" +
    "                            <td>{{dnaPurification.cultureVolume}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Concentration:</td>\n" +
    "                            <td>{{dnaPurification.concentration}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>DNA Yield:</td>\n" +
    "                            <td>{{dnaPurification.dnaYield}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Legacy Notes and Comments\" ng-if=\"oldComments()\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                         <tr>\n" +
    "                            <td>Notes:</td>\n" +
    "                            <td>{{dnaPurification.notes}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Comments:</td>\n" +
    "                            <td>{{dnaPurification.comments}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"NanoDrop File\">\n" +
    "                <a ng-if=\"dnaPurification.NanoDropFile\" ng-click=\"downloadNanodropFile()\" class=\"link\" href=\"\">\n" +
    "                    Download Nanodrop File\n" +
    "                </a>\n" +
    "                <a ng-if=\"!dnaPurification.NanoDropFile\">\n" +
    "                    NanoDrop File Missing\n" +
    "                </a>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"DnaPurification\"\n" +
    "                    oid=\"dnaPurification.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"DnaPurification\"\n" +
    "                    oid=\"dnaPurification.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Purification Status\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Status:</td>\n" +
    "                        <td>\n" +
    "                            {{dnaPurification.status}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Purification Requester\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>User:</td>\n" +
    "                        <td >\n" +
    "                            <a ui-sref=\"directory({userId:dnaPurification.User.u_id})\" class=\"flat-link\">\n" +
    "                                {{dnaPurification.User.fullName}}\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Expected:</td>\n" +
    "                        <td>{{ dnaPurification.expectedDate | utDate | date:'MM/dd/yy'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Completion:</td>\n" +
    "                        <td>{{ dnaPurification.completionDate | utDate | date:'MM/dd/yy'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ dnaPurification.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ dnaPurification.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/editForm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 >Edit DNA Purification {{dnaPurification.id}} - {{dnaPurification.Sample.description}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in dnaPurification.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"User\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"dnaPurification.User\"\n" +
    "                        key=\"dnaPurification.userId\"\n" +
    "                        resource=\"user\"\n" +
    "                        resource-primary-key=\"u_id\"\n" +
    "                        placeholder=\"fullName\"\n" +
    "                        template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                        disabled\n" +
    "                        error=\"dnaPurification.errors.userId\"\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Sample\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"dnaPurification.Sample\"\n" +
    "                    key=\"dnaPurification.sampleId\"\n" +
    "                    resource=\"sample-typeahead\"\n" +
    "                    placeholder=\"description\"\n" +
    "                    error=\"dnaPurification.errors.sampleId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Chain\">\n" +
    "                <select ng-model=\"dnaPurification.chain\">\n" +
    "                    <option value=\"HC\">HC</option>\n" +
    "                    <option value=\"Fab\">Fab</option>\n" +
    "                    <option value=\"LC\">LC</option>\n" +
    "                    <option value=\"protein\">protein</option>\n" +
    "                </select>\n" +
    "                <div ng-if=\"dnaPurification.errors.chain\" class=\"ut-global-error\">{{dnaPurification.errors.chain}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Culture Volume (mL)\" required>\n" +
    "                <ut-input\n" +
    "                    model=\"dnaPurification.cultureVolume\"\n" +
    "                    error=\"dnaPurification.errors.cultureVolume\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Elution Buffer\" required>\n" +
    "                <select ng-model=\"dnaPurification.elutionBuffer\">\n" +
    "                    <option value=\"TE\">TE</option>\n" +
    "                    <option value=\"Water\">Water</option>\n" +
    "                    <option value=\"EB\">EB</option>\n" +
    "                </select>\n" +
    "                <div ng-if=\"dnaPurification.errors.elutionBuffer\" class=\"ut-global-error\">{{dnaPurification.errors.elutionBuffer}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Elution Volume (μL)\">\n" +
    "                <ut-input\n" +
    "                    model=\"dnaPurification.elutionVolume\"\n" +
    "                    error=\"dnaPurification.errors.elutionVolume\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Expected Date\" class=\"date-no-padding\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"dnaPurification.expectedDate\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Completion Date\" class=\"date-no-padding\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"dnaPurification.completionDate\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Status\">\n" +
    "                <select ng-model=\"dnaPurification.status\" disabled=\"true\">\n" +
    "                    <option value=\"review\">review</option>\n" +
    "                    <option value=\"processing\">processing</option>\n" +
    "                    <option value=\"finished\">finished</option>\n" +
    "                </select>\n" +
    "                <div ng-if=\"dnaPurification.errors.status\" class=\"ut-global-error\">{{dnaPurification.errors.status}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Concentration\">\n" +
    "                <ut-input\n" +
    "                    model=\"dnaPurification.concentration\"\n" +
    "                    error=\"dnaPurification.errors.concentration\"\n" +
    "                    disabled=\"true\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"DNA Yield\">\n" +
    "                <ut-input\n" +
    "                    model=\"dnaPurification.dnaYield\"\n" +
    "                    error=\"dnaPurification.errors.dnaYield\"\n" +
    "                    disabled=\"true\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                (Not Nanodrop file)\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Attachments\">\n" +
    "                <ut-attachment-uploader o=\"DnaPurification\" oid=\"dnaPurification.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/culture/csvExport.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>DNA Purification Search</h3>\n" +
    "                <button class=\"btn\" ng-if=\"canEdit()\" ng-click=\"createDnaPurification()\">Create DNA Purification</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-dropdown\n" +
    "                title=\"Sample: All\"\n" +
    "                template=\"/app/partials/filters/samples.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"User: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Status: All\"\n" +
    "                template=\"/app/partials/filters/gocoreStatus.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"DnaPurificationGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ng-if=\"!inCart()\" ng-click=\"addToCart()\"><i class=\"icon-plus\" />Add to Cart</li>\n" +
    "        <li ng-if=\"inCart()\" ng-click=\"removeFromCart()\"><i class=\"icon-minus\" />Remove from Cart</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ui-sref=\"dnaPurification({dnaPurificationId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/multiForm.html',
    "<div id=\"antibody-request-create-form\">\n" +
    "    <div class=\"header\">\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li class=\"end\" ui-sref=\"dnaPurificationGrid.search\">DNA Purifications</li>\n" +
    "            <li class=\"title\">DNA Purification Create </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"select-rows\">\n" +
    "        <a>\n" +
    "            Select how many DNA Purifications you are making.\n" +
    "        </a>\n" +
    "        <select ng-model=\"formModel.selectedNumber\">\n" +
    "            <option ng-repeat=\"number in numbers\" value=\"{{number}}\">{{number}}</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "    <form >\n" +
    "        <ut-control-group>\n" +
    "            <div ng-repeat=\"globalError in model.globalErrors\" class=\"ut-global-error\">\n" +
    "                {{globalError}}\n" +
    "            </div>\n" +
    "        </ut-control-group>\n" +
    "        <table class=\"ab-request-table\">\n" +
    "            <thead>\n" +
    "                <tr class=\"ut-label horizontal-input-head\">\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Sample\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                        <span class=\"icon-chevron-down form-chevron\" ng-click=\"cascadeSample()\"></span>\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Antibody Chain\n" +
    "                        <span class=\"icon-chevron-down form-chevron\" ng-click=\"cascadeChain()\"></span>\n" +
    "                    </th>\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Culture Volume (mL)\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                        <span class=\"icon-chevron-down form-chevron\" ng-click=\"cascadeCultureVolume()\"></span>\n" +
    "                    </th>\n" +
    "                    <th class=\"horizontal-control-label\">\n" +
    "                        Elution Buffer\n" +
    "                        <span class='horizontal-required-control'>*</span>\n" +
    "                        <span class=\"icon-chevron-down form-chevron\" ng-click=\"cascadeElutionBuffer()\"></span>\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Comments\n" +
    "                        <span class=\"icon-chevron-down form-chevron\" ng-click=\"cascadeComment()\"></span>\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody class=\"ab-request-table-body\">\n" +
    "                <tr ng-repeat=\"model in models\">\n" +
    "                    <div class=\"space-small\">\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-typeahead\n" +
    "                                model=\"model.Sample\"\n" +
    "                                key=\"model.sampleId\"\n" +
    "                                resource=\"sample-typeahead\"\n" +
    "                                placeholder=\"description\"\n" +
    "                                error=\"model.errors.sampleId\"\n" +
    "                            >\n" +
    "                            </ut-typeahead>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <select ng-model=\"model.chain\">\n" +
    "                                <option value=\"HC\">HC</option>\n" +
    "                                <option value=\"Fab\">Fab</option>\n" +
    "                                <option value=\"LC\">LC</option>\n" +
    "                                <option value=\"protein\">protein</option>\n" +
    "                            </select>\n" +
    "                            <div ng-if=\"model.errors.chain\" class=\"ut-global-error\">{{model.errors.chain}}</div>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-input\n" +
    "                                model=\"model.cultureVolume\"\n" +
    "                                error=\"model.errors.cultureVolume\"\n" +
    "                            >\n" +
    "                            </ut-input>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <select ng-model=\"model.elutionBuffer\">\n" +
    "                                <option value=\"Water\">Water</option>\n" +
    "                                <option value=\"TE\">TE</option>\n" +
    "                                <option value=\"EB\">EB</option>\n" +
    "                            </select>\n" +
    "                            <div ng-if=\"model.errors.elutionBuffer\" class=\"ut-global-error\">{{model.errors.elutionBuffer}}</div>\n" +
    "                        </td>\n" +
    "                        <td class=\"ab-request-td\">\n" +
    "                            <ut-input\n" +
    "                                model=\"model.comments\"\n" +
    "                                error=\"model.errors.comments\"\n" +
    "                            >\n" +
    "                            </ut-input>\n" +
    "                        </td>\n" +
    "                    </div>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"ab-request-foot\">\n" +
    "            <button class=\"btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"save()\">Submit Requests</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/dnaPurification/nanoDropModal.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Upload NanoDrop File</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Make sure <strong>Elution Volume</strong> is correct. The yield will be calculated upon nanodrop file upload.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-success\" ng-click=\"uploadNanodropFile()\" style=\"margin-right:5px;\">\n" +
    "        <a>Upload</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"donors[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"first_name\"\n" +
    "                    label=\"First Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('first_name') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    ng-if=\"isCtcUser()\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"last_name\"\n" +
    "                    label=\"Last Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('last_name') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    ng-if=\"isCtcUser()\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Aliases\"\n" +
    "                    ng-show=\"showColumns.indexOf('aliases') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Species\"\n" +
    "                    ng-show=\"showColumns.indexOf('species_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Ethnicity\"\n" +
    "                    ng-show=\"showColumns.indexOf('ethnicity_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Race\"\n" +
    "                    ng-show=\"showColumns.indexOf('race_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Gender\"\n" +
    "                    ng-show=\"showColumns.indexOf('gender') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Age\"\n" +
    "                    ng-show=\"showColumns.indexOf('age') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"created_at\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th ut-grid-header allow-sort=\"false\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"donor in donors\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"donor({donorId:donor.id})\" class=\"link\">{{donor.id}}</td>\n" +
    "                <td\n" +
    "                    ng-if=\"isCtcUser()\"\n" +
    "                    ng-show=\"showColumns.indexOf('first_name') > -1\"\n" +
    "                >\n" +
    "                    <div>{{donor.first_name}}</div>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-if=\"isCtcUser()\"\n" +
    "                    ng-show=\"showColumns.indexOf('last_name') > -1\"\n" +
    "                >\n" +
    "                    <div>{{donor.last_name}}</div>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('aliases') > -1\"\n" +
    "                >\n" +
    "                    {{donor.aliases}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('species_id') > -1\"\n" +
    "                >\n" +
    "                    {{donor.Species.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('ethnicity_id') > -1\"\n" +
    "                >\n" +
    "                    {{donor.Ethnicity.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('race_id') > -1\"\n" +
    "                >\n" +
    "                    {{donor.Race.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('gender') > -1\"\n" +
    "                >\n" +
    "                    {{donor.gender}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('age') > -1\"\n" +
    "                >\n" +
    "                    {{donor.age}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{donor.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/donor/grid_actions.html\"\n" +
    "                        data=\"donor\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!donors[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/donor/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'DonorGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Donor {{donor.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this donor?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/donor-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"donorGrid.search\">Donors</li>\n" +
    "            <li class=\"end\">{{donor.id}}</li>\n" +
    "            <li class=\"title\">{{donor.toString}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "\n" +
    "            <ut-edit-module title=\"Contact (CTC users only)\" ng-if=\"isCtcUser()\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>First Name:</td>\n" +
    "                            <td>{{donor.first_name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Last Name:</td>\n" +
    "                            <td>{{donor.last_name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Phone:</td>\n" +
    "                            <td>{{donor.phone}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Address:</td>\n" +
    "                            <td>{{donor.address}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Email</td>\n" +
    "                            <td>{{donor.email}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Notes (CTC Users)\" ng-if=\"isCtcUser()\">\n" +
    "                <div ng-bind-html=\"donor.notes\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Gender:</td>\n" +
    "                            <td>{{donor.gender}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Age:</td>\n" +
    "                            <td>{{donor.age}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Aliases:</td>\n" +
    "                            <td>{{donor.aliases}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Species:</td>\n" +
    "                            <td>{{donor.Species.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td style=\"vertical-align: top\">Immunities:</td>\n" +
    "                            <td>\n" +
    "                                <ul>\n" +
    "                                    <li ng-repeat=\"immunity in donor.immunities\">\n" +
    "                                        <a ng-if=\"!$last\" class=\"flat-link\" ui-sref=\"target({targetId:immunity.id})\">\n" +
    "                                            {{immunity.name + \",&nbsp;\" }}\n" +
    "                                        </a>\n" +
    "                                        <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"target({targetId:immunity.id})\">\n" +
    "                                            {{immunity.name}}\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "\n" +
    "                        <tr>\n" +
    "                            <td>Ethnicity:</td>\n" +
    "                            <td>{{donor.Ethnicity.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Race:</td>\n" +
    "                            <td>{{donor.Race.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Human Specimens:</td>\n" +
    "                            <td><a ui-sref=\"humanSpecimenGrid.search({donor:donor.id})\">View Specimens Drawn from this Donor</a></td>\n" +
    "                        </tr>\n" +
    "                       <tr>\n" +
    "                            <td>Samples:</td>\n" +
    "                            <td><a ui-sref=\"sampleGrid.search({donor:donor.id})\">View Samples Derived from this Donor</a></td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Donor\"\n" +
    "                    oid=\"donor.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Donor\"\n" +
    "                    oid=\"donor.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/form.html',
    "    <div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!donor.id\">Create Donor</h3>\n" +
    "    <h3 ng-if=\"donor.id\">Edit Donor {{ donor.id }} - {{ donor.toString }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in donor.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div ng-if=\"isCtcUser()\">\n" +
    "\n" +
    "                    <ut-control-group label=\"First Name\">\n" +
    "                        <ut-input\n" +
    "                            model=\"donor.first_name\"\n" +
    "                            error=\"donor.errors.first_name\"\n" +
    "                        >\n" +
    "                        </ut-input>\n" +
    "                    </ut-control-group>\n" +
    "\n" +
    "                    <ut-control-group label=\"Last Name\">\n" +
    "                        <ut-input\n" +
    "                            model=\"donor.last_name\"\n" +
    "                            error=\"donor.errors.last_name\"\n" +
    "                        >\n" +
    "                        </ut-input>\n" +
    "                    </ut-control-group>\n" +
    "\n" +
    "                    <ut-control-group label=\"Phone\">\n" +
    "                        <ut-input\n" +
    "                            model=\"donor.phone\"\n" +
    "                            error=\"donor.errors.phone\"\n" +
    "                        >\n" +
    "                        </ut-input>\n" +
    "                    </ut-control-group>\n" +
    "\n" +
    "                    <ut-control-group label=\"Email\">\n" +
    "                        <ut-input\n" +
    "                            model=\"donor.email\"\n" +
    "                            error=\"donor.errors.email\"\n" +
    "                        >\n" +
    "                        </ut-input>\n" +
    "                    </ut-control-group>\n" +
    "\n" +
    "                    <ut-control-group label=\"Address\">\n" +
    "                        <ut-input\n" +
    "                            model=\"donor.address\"\n" +
    "                            error=\"donor.errors.address\"\n" +
    "                        >\n" +
    "                        </ut-input>\n" +
    "                    </ut-control-group>\n" +
    "\n" +
    "                    <div class=\"ut-form-divider\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <ut-control-group label=\"Aliases\">\n" +
    "                    <ut-input\n" +
    "                        model=\"donor.aliases\"\n" +
    "                        error=\"donor.errors.aliases\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Species\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"donor.Species\"\n" +
    "                        key=\"donor.species_id\"\n" +
    "                        resource=\"species\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"donor.errors.species\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Race\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"donor.Race\"\n" +
    "                        key=\"donor.race_id\"\n" +
    "                        resource=\"race\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"donor.errors.race\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "               <ut-control-group label=\"Ethnicity\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"donor.Ethnicity\"\n" +
    "                        key=\"donor.ethnicity_id\"\n" +
    "                        resource=\"ethnicity\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"donor.errors.ethnicity\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Gender\" required>\n" +
    "                    <select ng-model=\"donor.gender\">\n" +
    "                        <option value=\"\"></option>\n" +
    "                        <option value=\"Male\">Male</option>\n" +
    "                        <option value=\"Female\">Female</option>\n" +
    "                        <option value=\"Unknown\">Unknown</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"donor.errors.gender\" class=\"ut-global-error\">{{donor.errors.gender}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Age\">\n" +
    "                    <ut-input\n" +
    "                        model=\"donor.age\"\n" +
    "                        error=\"donor.errors.age\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Immunities / Targets\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"target\"\n" +
    "                        model=\"donor\"\n" +
    "                        foreign-key=\"immunityId\"\n" +
    "                        relation=\"DonorImmunities\"\n" +
    "                        access=\"donor.immunities\"\n" +
    "                        placeholder=\"name\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Notes\" ng-if=\"isCtcUser()\">\n" +
    "                    <textarea ng-model=\"donor.notes\"></textarea>\n" +
    "                    <div ng-if=\"donor.errors.notes\" class=\"ut-global-error\">{{donor.errors.notes}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Donor\" oid=\"donor.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"donor.id\">Save</a>\n" +
    "        <a ng-if=\"!donor.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/donor/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Donor Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createDonor()\">Create Donor</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Immunities: All\"\n" +
    "                template=\"/app/partials/filters/targets.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Gender: All\"\n" +
    "                template=\"/app/partials/filters/genders.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/donor/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"DonorGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"donor({donorId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"delete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/action-dropdown.html',
    "<div id=\"drive-actions-container\" ng-controller=\"DriveActionsController\">\n" +
    "    <ul>\n" +
    "        <li ng-click=\"createFolder()\">New Folder</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/drive.html',
    "<div id=\"drive-main-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"close\" ng-click=\"close()\">X</div>\n" +
    "        <ut-drive-dropdown\n" +
    "            icon=\"icon-cog\"\n" +
    "            title=\"\"\n" +
    "            template=\"/app/partials/drive/action-dropdown.html\"\n" +
    "        >\n" +
    "        </ut-drive-dropdown>\n" +
    "    </div>\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <td>\n" +
    "                <div class=\"sidebar\" ng-controller=\"DriveSidebarController\">\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"folder in folders\" ng-click=\"selectFolder(folder)\" ng-class=\"{selected:isSelected(folder)}\">\n" +
    "                            <div class=\"{{getFolderImageClass(folder)}}\"></div>\n" +
    "                            <a ng-if=\"folder.isUserDirectory\">My Drive</a>\n" +
    "                            <a ng-if=\"!folder.isUserDirectory\">{{folder.name}}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "            <td class=\"main-cell\">\n" +
    "                <div class=\"main-view\" ng-controller=\"DriveMainViewController\" ng-class=\"{'folder-view-enabled':folderViewEnabled()}\">\n" +
    "                    <div class=\"folder-view\" ng-show=\"folderViewEnabled()\">\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat='folder in folders'>\n" +
    "                                <ut-drive-folder folder=\"folder\"></ut-drive-folder>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"file-view\" ng-if=\"fileViewEnabled()\">\n" +
    "                        laksdjflaskdjf\n" +
    "                    </div>\n" +
    "                    <div class=\"upload-view\" ng-if=\"uploadViewEnabled()\">\n" +
    "                        <div class=\"progress-header-img\"></div>\n" +
    "                        <div class=\"progress-header\">Uploading {{fileBeingUploaded}}</div>\n" +
    "                        <div class=\"progress\">\n" +
    "                            <progressbar type=\"success\" width=\"percentUploaded\"></progressbar>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"download-view\" ng-if=\"downloadViewEnabled()\">\n" +
    "                        <div class=\"archive-header-img\"></div>\n" +
    "                        <div class=\"archive-header\">Archiving... please wait</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/folderContext.html',
    "<div id=\"drive-folder-context\" ng-controller=\"DriveFolderContextController\">\n" +
    "\n" +
    "    <ul>\n" +
    "        <li ng-click=\"open()\">Open</li>\n" +
    "        <li ng-click=\"rename()\">Rename...</li>\n" +
    "        <li ng-click=\"addChildFolder()\">New Folder</li>\n" +
    "        <li ng-click=\"upload()\">Upload</li>\n" +
    "        <li ng-click=\"download()\">Download</li>\n" +
    "        <li ng-click=\"delete()\">Delete</li>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/folderViewTable.html',
    "<ul>\n" +
    "    <li ng-repeat='childFile in selectedfolder.childfiles'>\n" +
    "        {{childfile.name}}\n" +
    "    </li>\n" +
    "    <li ng-repeat='folder in selectedfolder.children'>\n" +
    "        {{folder.name}}\n" +
    "    </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/app/partials/drive/uploader.html',
    "<input type=\"file\" id=\"drive-uploader\" webkitdirectory=\"\" directory=\"\" onchange=\"angular.element(this).scope().setFiles(this)\">\n"
  );


  $templateCache.put('/app/partials/drive/utDriveDropdown.html',
    "<div ng-class=\"{'active':active, 'left':left}\" class=\"ut-btn {{q}}\" data-q=\"{{q}}\">\n" +
    "    <i ng-if=\"icon\" class=\"{{icon}}\" ng-click=\"toggle()\" />\n" +
    "    <div class='preview' ng-click=\"toggle()\">{{title}}</div>\n" +
    "    <div class=\"drop-down\">\n" +
    "        <div ng-include=\"template\"></div>\n" +
    "    <div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/utDriveFile.html',
    "<div class=\"item\" ng-style=\"itemPadding\">\n" +
    "    <div class=\"spacer\"></div>\n" +
    "    <div class=\"file-icon\"></div>\n" +
    "    {{file.name}}\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/drive/utDriveFolder.html',
    "<div class=\"item\" ng-style=\"itemPadding\" ng-class=\"{selected:isSelected()}\">\n" +
    "    <div\n" +
    "        ng-if=\"isExpandable()\"\n" +
    "        ng-class=\"{right:!expanded, down:expanded}\"\n" +
    "        class=\"arrow\"\n" +
    "        ng-click=\"toggle()\"\n" +
    "    />\n" +
    "    <div ng-if=\"!isExpandable()\" class=\"spacer\"></div>\n" +
    "\n" +
    "    <div class=\"folder-icon\"></div>\n" +
    "    <div ng-if=\"!renaming\" class=\"name\">{{folder.name}}</div>\n" +
    "    <input ng-if=\"renaming\" ng-model=\"folder.name\" ut-focus></input>\n" +
    "</div>\n" +
    "\n" +
    "<ul class=\"children\"></ul>\n"
  );


  $templateCache.put('/app/partials/ethnicity/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"ethnicities[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"ethnicity in ethnicities\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"ethnicity({ethnicityId:ethnicity.id})\" class=\"link\">{{ethnicity.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{ethnicity.name}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/ethnicity/grid_actions.html\"\n" +
    "                        data=\"ethnicity\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!ethnicities[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/ethnicity/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'EthnicityGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/ethnicity/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Ethnicity {{ethnicity.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this ethnicity?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Ethnicity Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ ethnicity.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/ethnicity/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/ethnicity-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"ethnicityGrid.search\">Ethnicities</li>\n" +
    "            <li class=\"end\">{{ethnicity.id}}</li>\n" +
    "            <li class=\"title\">{{ethnicity.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{ethnicity.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Ethnicity\"\n" +
    "                    oid=\"ethnicity.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Ethnicity\"\n" +
    "                    oid=\"ethnicity.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/ethnicity/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!ethnicity.id\">Create Ethnicity</h3>\n" +
    "    <h3 ng-if=\"ethnicity.id\">Edit Ethnicity {{ ethnicity.id }} - {{ ethnicity.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in ethnicity.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"ethnicity.name\"\n" +
    "                        error=\"ethnicity.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Ethnicity\" oid=\"ethnicity.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"ethnicity.id\">Save</a>\n" +
    "        <a ng-if=\"!ethnicity.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/ethnicity/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/ethnicity/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Ethnicity Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createEthnicity()\" ng-if=\"canCreate()\">Create New Ethnicity</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/ethnicity/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"EthnicityGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"ethnicity({ethnicityId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/filters/collaborators.html',
    "<div id=\"targets-filter-container\" ng-controller=\"CollaboratorsFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Collaborators...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredCollaborators.length\">\n" +
    "            <li ng-repeat=\"filteredCollaborator in filteredCollaborators\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleCollaborator('remove', filteredCollaborator)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredCollaborator.groupName}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"collaborator in collaborators | filter:search | orderBy:'groupName'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleCollaborator('append', collaborator)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{collaborator.groupName}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Collaborators</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/contacts.html',
    "<div class=\"utilities-filter-container\" ng-controller=\"ContactsFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Contacts...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredContacts.length\">\n" +
    "            <li ng-repeat=\"filteredContact in filteredContacts\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleContact('remove', filteredContact)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredContact.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"contact in contacts | filter:search | orderBy:'groupName'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleContact('append', contact)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{contact.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Contacts</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/created_at.html',
    "<div id=\"created-at-filter-container\" ng-controller=\"CreatedAtFilterController\">\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <div class=\"date-range-wrapper\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-model=\"withinLast\"\n" +
    "                        ng-change=\"toggle('withinLast')\"\n" +
    "                    />\n" +
    "                    Within the last\n" +
    "                </label>\n" +
    "                <input\n" +
    "                    class=\"number-input\"\n" +
    "                    ng-model=\"within\"\n" +
    "                    type=\"text\"\n" +
    "                />\n" +
    "                <select ng-model=\"withinUnits\" type=\"text\" class=\"date-type-chooser\">\n" +
    "                    <option value=\"hour\"> hours </option>\n" +
    "                    <option value=\"day\"> days </option>\n" +
    "                    <option value=\"week\"> weeks </option>\n" +
    "                    <option value=\"month\"> months </option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"date-range-wrapper\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-model=\"moreThan\"\n" +
    "                        ng-change=\"toggle('moreThan')\"\n" +
    "                    />\n" +
    "                    More than\n" +
    "                </label>\n" +
    "                <input\n" +
    "                    class=\"number-input\"\n" +
    "                    ng-model=\"more\"\n" +
    "                    type=\"text\"\n" +
    "                />\n" +
    "                <select ng-model=\"moreUnits\" class=\"date-type-chooser\">\n" +
    "                    <option value=\"hour\"> hours </option>\n" +
    "                    <option value=\"day\"> days </option>\n" +
    "                    <option value=\"week\"> weeks </option>\n" +
    "                    <option value=\"month\"> months </option>\n" +
    "                </select>\n" +
    "                <label> ago</label>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <div class=\"date-range-wrapper\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-model=\"betweenDate\"\n" +
    "                        ng-change=\"toggle('betweenDate')\"\n" +
    "                    />\n" +
    "                    Between\n" +
    "                </label>\n" +
    "                <input\n" +
    "                    class=\"date-input\"\n" +
    "                    ng-model=\"start\"\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                />\n" +
    "                <label> and </label>\n" +
    "                <input\n" +
    "                    class=\"date-input\"\n" +
    "                    ng-model=\"end\"\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                />\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"date-range-buttons\">\n" +
    "        <button class=\"btn btn-small\" ng-click=\"update()\" style=\"margin-right:5px;\">\n" +
    "            <a>Update</a>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-small\" ng-click=\"clear()\" style=\"margin-right:5px;\">\n" +
    "            <a>Clear</a>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/filters/donors.html',
    "<div id=\"donors-filter-container\" ng-controller=\"DonorsFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Donors...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredDonors.length\">\n" +
    "            <li ng-repeat=\"filteredDonor in filteredDonors\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleDonor('remove', filteredDonor)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredDonor.toString}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"donor in donors | orderBy:'toString'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleDonor('append', donor)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{donor.toString}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Donors</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/fromDonorsWithImmunities.html',
    "<div id=\"targets-filter-container\" ng-controller=\"FromDonorsWithImmunitiesFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Targets...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredTargets.length\">\n" +
    "            <li ng-repeat=\"filteredTarget in filteredTargets\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleTarget('remove', filteredTarget)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredTarget.abbreviation + \" \" + filteredTarget.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"target in targets | filter:search | orderBy:'abbreviation'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleTarget('append', target)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{target.abbreviation + \" \" + target.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Targets</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/genders.html',
    "<div id=\"targets-filter-container\" ng-controller=\"GendersFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Genders...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredGenders.length\">\n" +
    "            <li ng-repeat=\"filteredGender in filteredGenders\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleGender('remove', filteredGender)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredGender}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"gender in genders | filter:search\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleGender('append', gender)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{gender}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Genders</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/gocoreStatus.html',
    "<div id=\"samples-filter-container\" ng-controller=\"GocoreStatusFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Statuses...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredStatuses.length\">\n" +
    "            <li ng-repeat=\"filteredStatus in filteredStatuses\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleStatus('remove', filteredStatus)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredStatus.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"status in statuses\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleStatus('append', status)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{status.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Statuses</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/human_specimen_drawers.html',
    "<div id=\"users-filter-container\" ng-controller=\"HumanSpecimenDrawersFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Blood Drawers...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredUsers.length\">\n" +
    "            <li class=\"ut-fade\" ng-repeat=\"filteredUser in filteredUsers\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleUser('remove', filteredUser)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <img ng-src=\"/profile/avatar/{{filteredUser.u_id}}\"  />\n" +
    "                    {{filteredUser.fullName}}\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li class=\"ut-fade\" ng-repeat=\"user in users | orderBy:'fullName'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleUser('append', user)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <img ng-src=\"/profile/avatar/{{user.u_id}}\"  />\n" +
    "                {{ user.fullName }}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for more Blood Drawers</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/human_specimen_requesters.html',
    "<div id=\"users-filter-container\" ng-controller=\"HumanSpecimenRequestersFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Blood Requesters...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredUsers.length\">\n" +
    "            <li class=\"ut-fade\" ng-repeat=\"filteredUser in filteredUsers\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleUser('remove', filteredUser)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <img ng-src=\"/profile/avatar/{{filteredUser.u_id}}\"  />\n" +
    "                    {{filteredUser.fullName}}\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li class=\"ut-fade\" ng-repeat=\"user in users | orderBy:'fullName'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleUser('append', user)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <img ng-src=\"/profile/avatar/{{user.u_id}}\"  />\n" +
    "                {{ user.fullName }}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for more Blood Requesters</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/molecules.html',
    "<div id=\"molecules-filter-container\" ng-controller=\"MoleculesFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Molecules...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredMolecules.length\">\n" +
    "            <li ng-repeat=\"filteredMolecule in filteredMolecules\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleMolecule('remove', filteredMolecule)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredMolecule.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"molecule in molecules | filter:search | orderBy:'name'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleMolecule('append', molecule)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{molecule.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Molecules</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/protocols.html',
    "<div id=\"protocols-filter-container\" ng-controller=\"ProtocolsFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Protocols...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredProtocols.length\">\n" +
    "            <li ng-repeat=\"filteredProtocol in filteredProtocols\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleProtocol('remove', filteredProtocol)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    {{filteredProtocol.protocol}}\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"protocol in protocols | orderBy:'protocol'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleProtocol('append', protocol)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                {{protocol.protocol}}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Protocols</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/filters/sample_types.html',
    "<div id=\"sample-types-filter-container\" ng-controller=\"SampleTypesFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Sample Types...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredSampleTypes.length\">\n" +
    "            <li ng-repeat=\"filteredSampleType in filteredSampleTypes\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleSampleType('remove', filteredSampleType)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredSampleType.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"sampleType in sampleTypes | filter:search | orderBy:'name'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleSampleType('append', sampleType)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{sampleType.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Sample Types</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/samples.html',
    "<div id=\"samples-filter-container\" ng-controller=\"SamplesFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Samples...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredSamples.length\">\n" +
    "            <li ng-repeat=\"filteredSample in filteredSamples\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleSample('remove', filteredSample)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredSample.description}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"sample in samples | orderBy:'description'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleSample('append', sample)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{sample.description}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Samples</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/tags.html',
    "<div id=\"tags-filter-container\" ng-controller=\"TagsFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Tags...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredTags.length\">\n" +
    "            <li ng-repeat=\"filteredTag in filteredTags\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleTag('remove', filteredTag)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredTag.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"tag in tags | filter:search | orderBy:'name'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleTag('append', tag)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{tag.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Tags</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/targets.html',
    "<div id=\"targets-filter-container\" ng-controller=\"TargetsFilterController\" class=\"utilities-filter-container\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Targets...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredTargets.length\">\n" +
    "            <li ng-repeat=\"filteredTarget in filteredTargets\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleTarget('remove', filteredTarget)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <div class=\"description\">{{filteredTarget.abbreviation + \" \" + filteredTarget.name}}</div>\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li ng-repeat=\"target in targets | filter:search | orderBy:'abbreviation'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleTarget('append', target)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <div class=\"description\">{{target.abbreviation + \" \" + target.name}}</div>\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Targets</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/filters/users.html',
    "<div id=\"users-filter-container\" ng-controller=\"UsersFilterController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Find Users ...\"></input>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\" ng-if=\"filteredUsers.length\">\n" +
    "            <li class=\"ut-fade\" ng-repeat=\"filteredUser in filteredUsers\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                        ng-change=\"toggleUser('remove', filteredUser)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                    />\n" +
    "                    <img ng-src=\"/profile/avatar/{{filteredUser.u_id}}\"  />\n" +
    "                    {{filteredUser.fullName}}\n" +
    "                </label>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <li class=\"ut-fade\" ng-repeat=\"user in users | orderBy:'fullName'\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleUser('append', user)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <img ng-src=\"/profile/avatar/{{user.u_id}}\"  />\n" +
    "                {{ user.fullName }}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <li class=\"help\">Start typing for Users</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/attachmentDelete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Attachment</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this attachment?</p>\n" +
    "            <ut-control-group label=\"Creator:\" class=\"author\">\n" +
    "                <img class=\"ut-comment-img\" ng-src=\"/profile/avatar/{{objectAttachment.Attachment.uploadedby}}\"/>\n" +
    "                {{ objectAttachment.Attachment.UploadedBy.fullName }}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Created at:\" class=\"created\">\n" +
    "                <div> {{objectAttachment.Attachment.created_at | utDate | date:'MM/dd/yy @ h:mma'}} </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Attachment:\" class=\"notes\">\n" +
    "                {{objectAttachment.Attachment.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"deleteObjectAttachment()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/controlGroup.html',
    "<div class=\"control-group\">\n" +
    "    <label class=\"control-label ut-label\">\n" +
    "        {{label}}\n" +
    "        <span class='required-control' ng-if=\"required\">*</span>\n" +
    "    </label>\n" +
    "    <div class=\"controls\" ng-transclude></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/form/horizontalControlGroup.html',
    "<div class=\"horizontal-input\">\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utActivityModule.html',
    "<div id=\"ut-activity-module-container\">\n" +
    "    <ul class=\"tabs\">\n" +
    "        <li class=\"active\">\n" +
    "            <a>Comments</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <ul class=\"comments\">\n" +
    "        <li ng-repeat=\"comment in comments\">\n" +
    "            <div class=\"comment-container\">\n" +
    "                <div class=\"comment-heading\">\n" +
    "                    <img ng-src=\"/profile/avatar/{{comment.userId}}\"  />\n" +
    "                    {{comment.User.fullName}} added a comment on - {{comment.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                    <div ng-show=\"canView(comment)\" class=\"comment-icon-wrapper\">\n" +
    "                        <a ng-click=\"editComment(comment)\">\n" +
    "                            <i class=\"icon-pencil\"/>\n" +
    "                        </a>\n" +
    "                        <a ng-click=\"deleteComment(comment)\">\n" +
    "                            <i class=\"icon-trash\"/>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"comment\">{{comment.comment}}</div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <ul id=\"new-comment\" class=\"new-comment\">\n" +
    "        <li ng-if=\"newComment\">\n" +
    "            <textarea ng-model=\"newComment.comment\" />\n" +
    "            <button class=\"btn btn-small\" ng-click=\"save()\">Add</button>\n" +
    "            <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"comment-actions\">\n" +
    "        <button ng-if=\"!newComment\" class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utAttachmentModule.html',
    "<div id=\"attachment-module-container\">\n" +
    "    <table>\n" +
    "        <tr ng-repeat=\"attachmentFile in attachmentFiles\" class=\"file\">\n" +
    "            <td>\n" +
    "                <a target=\"_blank\" href=\"/attachment/{{attachmentFile.attachmentId}}\">{{attachmentFile.Attachment.name}}</a>\n" +
    "            </td>\n" +
    "            <td>{{attachmentFile.Attachment.size | bytes}}</td>\n" +
    "            <td>{{attachmentFile.Attachment.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "            <td ng-if=\"canEdit(attachmentFile)\" class=\"delete\"><i class=\"icon-trash\" ng-click=\"deleteAttachment(attachmentFile)\"/></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"attachmentImage in attachmentImages\" class=\"image\">\n" +
    "            <img ng-src=\"/attachment/{{attachmentImage.attachmentId}}\" />\n" +
    "            <div class=\"name\">\n" +
    "                <a target=\"_blank\" href=\"/attachment/{{attachmentImage.attachmentId}}\">{{attachmentImage.Attachment.name}}</a>\n" +
    "            </div>\n" +
    "            <div class=\"size\">{{attachmentImage.Attachment.size | bytes}}</div>\n" +
    "            <i ng-if=\"canEdit(attachmentImage)\" class=\"icon-trash\" ng-click=\"deleteAttachment(attachmentImage)\"/>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utAttachmentUploader.html',
    "<div id=\"ut-attachment-uploader-container\">\n" +
    "<table ng-if=\"files.length\">\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"file in files\">\n" +
    "            <td>\n" +
    "                <img ng-if=\"isImage(file)\" class=\"img-polaroid\" ng-src=\"{{file.src}}\" title=\"file.name\" />\n" +
    "            </td>\n" +
    "            <td class=\"name\">{{file.name}}</td>\n" +
    "            <td class=\"loading\">\n" +
    "                <progress max=\"100\" percent=\"file.progress\"></progress>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "    <input type=\"file\" multiple onchange=\"angular.element(this).scope().setFiles(this)\"></input>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utDropdown.html',
    "<div ng-class=\"{'active':active, 'left':left}\" class=\"ut-btn {{q}}\" data-q=\"{{q}}\">\n" +
    "    <i ng-if=\"icon\" class=\"{{icon}}\" ng-click=\"toggle()\" />\n" +
    "    <div class='preview' ng-click=\"toggle()\">{{title}}</div>\n" +
    "    <div class=\"drop-down\">\n" +
    "        <div ng-include=\"template\"></div>\n" +
    "    <div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utEditModule.html',
    "<div class=\"module\">\n" +
    "    <div class=\"module-heading\">\n" +
    "        <div class=\"title\">{{title}}</div>\n" +
    "        <div class=\"line\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"module-content\" ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/form/utOneToMany.html',
    "<input type=\"hidden\"/>\n" +
    "<div id=\"ut-one-to-many-container\">\n" +
    "    <ul class=\"selected\">\n" +
    "        <li ng-repeat=\"selectedItem in selectedItems\">\n" +
    "            {{selectedItem[placeholder]}}\n" +
    "            <div class=\"remove\" ng-click=\"remove(selectedItem)\">x</div>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <input id=\"one-to-many-search\" type=\"text\" ng-model=\"search\"></input>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"results-container\" ng-show=\"items\">\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"item in items\" ng-click=\"select(item)\" ng-show=\"items[0].gridParams.total\">\n" +
    "                {{item[placeholder]}}\n" +
    "            </li>\n" +
    "            <li class=\"no-results\" ng-show=\"!items[0].gridParams.total\">\n" +
    "                No results found\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/form/utTypeahead.html',
    "<input\n" +
    "    type=\"text\"\n" +
    "    ng-model=\"model\"\n" +
    "    typeahead=\"item as item[placeholder] for item in getItems($viewValue)\"\n" +
    "    typeahead-template-url=\"{{templateUrl}}\"\n" +
    "    class=\"ut-input\"\n" +
    "    ut-typeahead-initializable\n" +
    "    typeahead-on-select=\"callback($item)\"\n" +
    "    placeholder=\"{{hint}}\"\n" +
    "/>\n" +
    "<ut-typeahead-init></ut-typeahead-init>\n" +
    "<div ng-if=\"error\" class=\"ut-global-error\">{{error}}</div>"
  );


  $templateCache.put('/app/partials/freezer/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Freezer {{freezer.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this freezer?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\" class=\"created\">\n" +
    "                <div> {{freezer.nickname}} </div>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/freezer/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!freezer.id\">Create Freezer</h3>\n" +
    "    <h3 ng-if=\"freezer.id\">Edit Freezer {{freezer.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"freezer-form-container\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in freezer.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.nickname\"\n" +
    "                    error=\"freezer.errors.nickname\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "           <ut-control-group label=\"Model\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.model\"\n" +
    "                    error=\"freezer.errors.model\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "           <ut-control-group label=\"Serial Number\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.serial\"\n" +
    "                    error=\"freezer.errors.serial\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "           <ut-control-group label=\"Purchase year\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.purchase_year\"\n" +
    "                    error=\"freezer.errors.purchase_year\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "           <ut-control-group label=\"Purchase cost\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.purchase_cost\"\n" +
    "                    error=\"freezer.errors.purchase_cost\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Location\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.location\"\n" +
    "                    error=\"freezer.errors.location\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"PO\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.po\"\n" +
    "                    error=\"freezer.errors.po\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Center\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.center\"\n" +
    "                    error=\"freezer.errors.center\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Service\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.service\"\n" +
    "                    error=\"freezer.errors.service\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Renewal\">\n" +
    "                <ut-input\n" +
    "                    model=\"freezer.renewal\"\n" +
    "                    error=\"freezer.errors.renewal\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"freezer.id\">Save</a>\n" +
    "        <a ng-if=\"!freezer.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/grid/column_selection.html',
    "<div id=\"column-selection-container\" ng-controller=\"ColumnSelectionController\">\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            <input class=\"init-focus\" ng-model=\"search\" type=\"text\" placeholder=\"Search for Columns...\"></input>\n" +
    "        </li>\n" +
    "        <li ng-repeat=\"column in  userGridSetting.columns | filter:search\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c\"\n" +
    "                    ng-change=\"toggleColumn(column.name)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                    ng-checked=\"column.selected\"\n" +
    "                />\n" +
    "                {{column.label}}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/grid/pagination_bottom.html',
    "<div ng-if=\"gridParams && gridParams.total\" class=\"grid-range\" ng-controller=\"GridPaginationController\">\n" +
    "    <div class=\"page-select\">\n" +
    "        <a\n" +
    "            ng-click=\"turnPage(gridParams.previousPage)\"\n" +
    "            class=\"previous\"\n" +
    "            ng-if=\"gridParams.previousPage\"\n" +
    "        >\n" +
    "        <a\n" +
    "            ng-click=\"turnPage(page.number)\"\n" +
    "            ng-repeat=\"page in pages\"\n" +
    "            ng-class=\"{current: page.number == gridParams.page}\"\n" +
    "            class=\"page\"\n" +
    "        >\n" +
    "            {{page.number}}\n" +
    "        </a>\n" +
    "        <a\n" +
    "            ng-click=\"turnPage(nextPage)\"\n" +
    "            class=\"next\"\n" +
    "            ng-if=\"gridParams.hasNextPage\"\n" +
    "        >\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <a class=\"range\">{{gridParams.range}}</a>\n" +
    "    <a>of</a>\n" +
    "    <a class=\"range\">{{gridParams.total}}</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/grid/pagination_top.html',
    "<div ng-if=\"gridParams && gridParams.total\" class=\"grid-range ut-fade\">\n" +
    "    <div class=\"column-selection\">\n" +
    "        <ut-dropdown\n" +
    "            title=\"Columns\"\n" +
    "            template=\"/app/partials/grid/column_selection.html\"\n" +
    "            callback=\"refresh\"\n" +
    "            data=\"gridParams\"\n" +
    "        >\n" +
    "        </ut-dropdown>\n" +
    "    </div>\n" +
    "    <a class=\"range\">{{gridParams.range}}</a>\n" +
    "    <a>of</a>\n" +
    "    <a class=\"range\">{{gridParams.total}}</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/grid/share.html',
    "<div id=\"share-container\" ng-controller=\"ShareController\">\n" +
    "    <ul>\n" +
    "        <label class=\"share-label\">Link</label>\n" +
    "        <input disabled type=\"text\" ng-model=\"shareLink\"/>\n" +
    "        <label>User name</label>\n" +
    "        <li>\n" +
    "            <input ng-model=\"search\" type=\"text\" placeholder=\"Find Users ...\"/>\n" +
    "        </li>\n" +
    "        <ul class=\"selected\">\n" +
    "            <li class=\"ut-fade\" ng-repeat=\"selectedUser in selectedUsers\">\n" +
    "                <label>\n" +
    "                    <input\n" +
    "                        ng-model=\"c1\"\n" +
    "                        ng-change=\"removeUser($index)\"\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-checked=\"true\"\n" +
    "                    />\n" +
    "                    <img ng-src=\"/profile/avatar/{{selectedUser.u_id}}\" />\n" +
    "                    {{selectedUser.fullName}}\n" +
    "                </label>\n" +
    "            </li>\n" +
    "            <div class=\"line-separator\" ng-if=\"selectedUsers.length\"></div>\n" +
    "        </ul>\n" +
    "        <li class=\"ut-fade\" ng-repeat=\"user in users\">\n" +
    "            <label>\n" +
    "                <input\n" +
    "                    ng-model=\"c2\"\n" +
    "                    ng-change=\"toggleUser(user, $index)\"\n" +
    "                    type=\"checkbox\"\n" +
    "                />\n" +
    "                <img ng-src=\"/profile/avatar/{{user.u_id}}\"/>\n" +
    "                {{ user.fullName }}\n" +
    "            </label>\n" +
    "        </li>\n" +
    "        <label>Note</label>\n" +
    "        <textarea ng-model=\"shareNote\" placeholder=\"Describe this link\"></textarea>\n" +
    "    </ul>\n" +
    "    <div id=\"share-buttons\">\n" +
    "        <button class=\"btn btn-small\" ng-click=\"share()\" style=\"margin-left:0px;\">\n" +
    "            <a>Share</a>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-small\" ng-click=\"clear()\" style=\"margin-left:0px;\">\n" +
    "            <a>Clear</a>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/gridPop/gridPop.html',
    "<input data-value=\"{{value}}\" ng-model=\"search\"></input>\n" +
    "<div class=\"grid-pop-results-container\" ng-show=\"hidden\" ut-position-aware>\n" +
    "    <table>\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ng-repeat=\"property in properties\">{{property}}</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr\n" +
    "                class=\"selectable\"\n" +
    "                ng-click=\"setInput({value:row.id, placeholder:row[method]})\"\n" +
    "                ng-repeat='row in results'\n" +
    "                ut-grid-pop-row\n" +
    "            >\n" +
    "                <td ng-repeat=\"property in properties\">{{row[property]}}</td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "        <tfoot>\n" +
    "            <tr>\n" +
    "                <td colspan=\"3\">\n" +
    "                    <i ng-click=\"previousPage()\" class=\"icon-backward\"></i>\n" +
    "                    <div class=\"result-count\">\n" +
    "                        {{ results.0.rangeString }}\n" +
    "                    </div>\n" +
    "                    <i ng-click=\"nextPage()\" class=\"icon-forward\"></i>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tfoot>\n" +
    "    </table>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/homePage/_adminCore.html',
    "<div id=\"admin-core-container\">\n" +
    "    <h2>Administration Core</h2>\n" +
    "    <div class=\"admin-core lead\">\n" +
    "        <ut-web-text name=\"aboutAdminCore\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"apps\">\n" +
    "        <h2>Applications</h2>\n" +
    "        <table class=\"utility-app-icon\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"vvc_admin\"\n" +
    "                        link=\"/#/lab-core/search\"\n" +
    "                        title=\"Labs & Cores\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"vvc_admin\"\n" +
    "                        link=\"/#/news/search\"\n" +
    "                        title=\"News\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"vvc_admin\"\n" +
    "                        link=\"/#/research/search\"\n" +
    "                        title=\"Research\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        link=\"/travel/request\"\n" +
    "                        title=\"Travel\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"vvc_admin\"\n" +
    "                        link=\"/#/web-text/search\"\n" +
    "                        title=\"Web Texts\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"admin-core-address\">\n" +
    "        <address>\n" +
    "            <strong>Administration Core</strong><br>\n" +
    "            1161 21st Avenue South, B-3307 Medical Center North<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.6070\n" +
    "        </address>\n" +
    "        <address>\n" +
    "          <strong>Email</strong><br>\n" +
    "          <a href=\"mailto:admin@vvcenter.org\">admin@vvcenter.org</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/homePage/_crowelab.html',
    "<div id=\"crowe-lab-container\">\n" +
    "    <h2>Crowe Lab</h2>\n" +
    "    <div class=\"crowe-lab lead\">\n" +
    "        <ut-web-text name=\"aboutCrowelab\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"apps\">\n" +
    "        <h2>Applications</h2>\n" +
    "        <table class=\"utility-app-icon\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/vim\"\n" +
    "                        title=\"VIM\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/mta/search\"\n" +
    "                        title=\"MTA\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        sref=\"cdaGrid.search\"\n" +
    "                        title=\"CDA\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/contact/search\"\n" +
    "                        title=\"Contacts\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/collaborator/search\"\n" +
    "                        title=\"Collaborators\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/repository/search\"\n" +
    "                        title=\"Repositories\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/publication/search\"\n" +
    "                        title=\"Publications\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div id=\"inventory-home-container\">\n" +
    "            <div class=\"wrapper-1\">\n" +
    "                <ut-inventory-icon sref=\"donorGrid.search\" icon-class=\"donors\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"humanSpecimenGrid.search\" icon-class=\"blood\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"sampleGrid.search\" icon-class=\"samples\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"presetGrid.search\" icon-class=\"presets\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"boxView.freezerList\" params=\"boxSrefParams\" icon-class=\"freezers\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon link=\"/gene_synthesis\" icon-class=\"gene-synthesis\"></ut-inventory-icon>\n" +
    "            </div>\n" +
    "            <div class=\"wrapper-2\">\n" +
    "                <ut-inventory-icon sref=\"moleculeGrid.search\" icon-class=\"molecules\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"tagGrid.search\" icon-class=\"tags\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"sampleTypeGrid.search\" icon-class=\"types\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"targetGrid.search\" icon-class=\"targets\"></ut-inventory-icon>\n" +
    "                <br>\n" +
    "                <ut-inventory-icon sref=\"speciesGrid.search\" icon-class=\"species\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"raceGrid.search\" icon-class=\"races\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"ethnicityGrid.search\" icon-class=\"ethnicities\"></ut-inventory-icon>\n" +
    "                <ut-inventory-icon sref=\"protocolGrid.search\" icon-class=\"protocols\"></ut-inventory-icon>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"crowe-lab-address\">\n" +
    "        <address>\n" +
    "            <strong>Crowe Lab</strong><br>\n" +
    "            2213 Garland Avenue, 11475 Medical Research Building IV<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.8064\n" +
    "        </address>\n" +
    "        <address>\n" +
    "            <strong>Email</strong><br>\n" +
    "            <a href=\"mailto:crowelab@vvcenter.org\">crowelab@vvcenter.org</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/_flowCore.html',
    "<div id=\"flow-core-container\">\n" +
    "    <h2>Flow Core</h2>\n" +
    "    <div class=\"flow-core lead\">\n" +
    "        <ut-web-text name=\"aboutFlowCore\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"flow-core-address\">\n" +
    "        <address>\n" +
    "            <strong>Flow Core</strong><br>\n" +
    "            1161 21st Avenue S., T0101 Medical Center North<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.3661\n" +
    "        </address>\n" +
    "        <address>\n" +
    "            <strong>Email</strong><br>\n" +
    "            <a href=\"mailto:flowcore@vvcenter.org\">flowcore@vvcenter.org</a><br>\n" +
    "            <strong>Website</strong><br>\n" +
    "            <a href=\"http://www.mc.vanderbilt.edu/root/vumc.php?site=flowcytometry\">http://www.mc.vanderbilt.edu/root/vumc.php?site=flowcytometry</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/_gocore.html',
    "<div id=\"go-core-container\">\n" +
    "    <h2>GoCore</h2>\n" +
    "    <div class=\"go-core lead\">\n" +
    "        <ut-web-text name=\"aboutGocore\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"apps\">\n" +
    "        <h2>Applications</h2>\n" +
    "        <table class=\"utility-app-icon\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        sref=\"dnaPurificationGrid.search\"\n" +
    "                        title=\"DNA Purification NEW\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/gocore/maxiprep\"\n" +
    "                        title=\"DNA Purification\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/expression\"\n" +
    "                        title=\"Protein Expression\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/hybridoma-purification\"\n" +
    "                        title=\"Hybridoma Purification\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/high_density_culture\"\n" +
    "                        title=\"High density cell culture\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        sref=\"antibodyRequestGrid.search\"\n" +
    "                        title=\"Antibody Request\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"http://crowelab.com:8090/display/AVGCR/Antibody+V+gene+cloning+requests\"\n" +
    "                        title=\"V Gene Cloning\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"http://crowelab.com:8090/display/AIR/Antibody+isotyping+requests\"\n" +
    "                        title=\"Isotype Determination\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"http://crowelab.com:8090/display/MD/Mycoplasma+detection\"\n" +
    "                        title=\"Mycoplasma detection\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"users\"\n" +
    "                        link=\"/#/hybridoma-project/search\"\n" +
    "                        title=\"Hybridoma Project\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        sref=\"cultureGrid.search\"\n" +
    "                        title=\"Culture\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div ng-if=\"isGocoreAdmin\">\n" +
    "        <div id=\"gocore-tools-container\">\n" +
    "            <div class=\"tools\">\n" +
    "                <h2>GoCore Admin Tools</h2>\n" +
    "                <table class=\"icons\">\n" +
    "                    <tbody>\n" +
    "                        <tr>\n" +
    "                            <td\n" +
    "                                class='icon'\n" +
    "                                group=\"GoCore\"\n" +
    "                                link=\"/affinity_column\"\n" +
    "                                title=\"Affinity Columns\"\n" +
    "                                ut-app-icon\n" +
    "                            >\n" +
    "                            <td\n" +
    "                                class='icon'\n" +
    "                                group=\"GoCore\"\n" +
    "                                link=\"/#/culture-status-detail/search\"\n" +
    "                                title=\"Culture Statuses\"\n" +
    "                                ut-app-icon\n" +
    "                            >\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"go-core-address\">\n" +
    "        <address>\n" +
    "            <strong>Go Core</strong><br>\n" +
    "            2213 Garland Avenue, 11475 Medical Research Building IV<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.8064\n" +
    "        </address>\n" +
    "        <address>\n" +
    "          <strong>Email</strong><br>\n" +
    "          <a href=\"mailto:gocore@vvcenter.org\">gocore@vvcenter.org</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/_immunologyCore.html',
    "<div id=\"immunology-container\">\n" +
    "    <h2>Immunology Core</h2>\n" +
    "    <div class=\"immunology lead\">\n" +
    "        <ut-web-text name=\"aboutImmunologyCore\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"immunology-address\">\n" +
    "        <address>\n" +
    "            <strong>Immunology Core</strong><br>\n" +
    "            1161 21st Avenue S., T3316 Medical Center North<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.322.4494 \n" +
    "        </address>\n" +
    "        <address>\n" +
    "            <strong>Email</strong><br>\n" +
    "            <a href=\"mailto:immunology@vvcenter.org\">immunology@vvcenter.org</a><br>\n" +
    "            <strong>Website</strong><br>\n" +
    "            <a href=\"https://www.mc.vanderbilt.edu/root/vumc.php?site=immunocore\">https://www.mc.vanderbilt.edu/root/vumc.php?site=immunocore</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/homePage/_labCores.html',
    "<div id=\"labs-and-cores\"></div>\n" +
    "<div id=\"lab-core-container\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Labs and Cores</h2>\n" +
    "        <table class=\"utility-app-icon\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td class=\"icon\" ui-sref=\"adminCore\"><div class=\"lead\">Administration Core</div></td>\n" +
    "                    <td class=\"icon\" ui-sref=\"croweLab\"><div class=\"lead\">CroweLab</div></td>\n" +
    "                    <td class=\"icon\" ui-sref=\"flowCore\"><div class=\"lead\">Flow Core</div></td>\n" +
    "                    <td class=\"icon\" ui-sref=\"gocore\"><div class=\"lead\">GoCore</div></td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td class=\"icon\" ui-sref=\"immunologyCore\"><div class=\"lead\">Immunology Core</div></td>\n" +
    "                    <td class=\"icon\" ui-sref=\"polackLab\"><div class=\"lead\">Polack Lab</div></td>\n" +
    "                    <td class=\"icon\" onclick=\"window.location='/seeq'\"><div class=\"lead\">Sequencing Core</div></td>\n" +
    "                    <td class=\"icon\" ui-sref=\"techCore\"><div class=\"lead\"><div class=\"lead\">Tech Core</div></td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/_polackLab.html',
    "<div id=\"polack-lab-container\">\n" +
    "    <h2>Polack Lab</h2>\n" +
    "    <div class=\"polack-lab lead\">\n" +
    "        <ut-web-text name=\"aboutPolackLab\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"polack-lab-address\">\n" +
    "        <address>\n" +
    "            <strong>Polack Lab</strong><br>\n" +
    "            1161 21st Avenue S., C2210 Medical Center North<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.6738\n" +
    "        </address>\n" +
    "        <address>\n" +
    "            <strong>Email</strong><br>\n" +
    "            <a href=\"mailto:polacklab@vvcenter.org\">polacklab@vvcenter.org</a><br>\n" +
    "            <strong>Websites</strong><br>\n" +
    "            <a href=\"http://pediatrics.mc.vanderbilt.edu/directory.php?did=7978\">http://pediatrics.mc.vanderbilt.edu/directory.php?did=7978</a><br>\n" +
    "            <strong> Fundación INFANT: </strong><a href=\"http://www.infant.org.ar/\">http://www.infant.org.ar/</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/homePage/_techCore.html',
    "<div id=\"tech-core-container\">\n" +
    "    <h2>Technology Core</h2>\n" +
    "    <div class=\"tech-core lead\">\n" +
    "        <ut-web-text name=\"aboutTechCore\"></ut-web-text>\n" +
    "    </div>\n" +
    "    <div class=\"apps\">\n" +
    "        <h2>Applications</h2>\n" +
    "        <table class=\"utility-app-icon\">\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"admin\"\n" +
    "                        link=\"/utilities/sf_user\"\n" +
    "                        title=\"Users\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        link=\"/software\"\n" +
    "                        title=\"Software\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"admin\"\n" +
    "                        link=\"/permission\"\n" +
    "                        title=\"Permissions\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        class='icon'\n" +
    "                        group=\"admin\"\n" +
    "                        link=\"/groups\"\n" +
    "                        title=\"Groups\"\n" +
    "                        ut-app-icon\n" +
    "                    >\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "    <div class=\"tech-core-address\">\n" +
    "        <address>\n" +
    "            <strong>Technology Core</strong><br>\n" +
    "            2213 Garland Avenue, 11476 Medical Research Building IV<br>\n" +
    "            Nashville, TN 37232 <br>\n" +
    "            <abbr title=\"Phone\">P:</abbr> 615.343.8064\n" +
    "        </address>\n" +
    "        <address>\n" +
    "            <strong>Email</strong><br>\n" +
    "            <a href=\"mailto:tech@vvcenter.org\">tech@vvcenter.org</a>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/adminCore.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_adminCore.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/crowelab.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_crowelab.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/flowCore.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_flowCore.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/gocore.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_gocore.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/homePage.html',
    "<div id=\"about-utilities-container\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Data organization and manipulation</h2>\n" +
    "        <div class=\"data-organization\"></div>\n" +
    "        <div class=\"about lead\">\n" +
    "            <ut-web-text name=\"aboutUtilities\"></ut-web-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_labCores.html'\"></div>\n" +
    "<div id=\"homepage-publications-container\">\n" +
    "    <div class=\"content\">\n" +
    "        <h2>Publications</h2>\n" +
    "        <div class=\"publications lead\">\n" +
    "            <ut-web-text name=\"aboutPublications\"></ut-web-text>\n" +
    "        </div>\n" +
    "        <div class=\"pub-med-icon\"></div>\n" +
    "        <ul class=\"pub-sync-steps\">\n" +
    "            <li onclick=\"window.location='/publication-sync/search'\">Search</li>\n" +
    "            <li onclick=\"window.location='/publication-sync/review'\">Review</li>\n" +
    "            <li onclick=\"window.location='/publication-sync/confirmed'\">Confirm</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/homePage/immunologyCore.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_immunologyCore.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/labCores.html',
    "<ut-title title=\"Labs and Cores\"></ut-title>\n" +
    "<div id=\"labCoresContainer\">\n" +
    "    <div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_labCores.html'\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/homePage/polackLab.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_polackLab.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/homePage/techCore.html',
    "<div class=\"labCore\" ng-include src=\"'/app/partials/homePage/_techCore.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table id=\"human-specimen-table\" ng-if=\"humanSpecimens[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Donor\"\n" +
    "                    ng-show=\"showColumns.indexOf('donorId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Requester\"\n" +
    "                    ng-show=\"showColumns.indexOf('requesterId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date of Consent\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfConsent') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date of Draw\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfDraw') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Protocol\"\n" +
    "                    ng-show=\"showColumns.indexOf('protocolId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('statusId') > -1\"\n" +
    "                    allow-sort=\"true\"\n" +
    "                    sort-field=\"statusId\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"humanSpecimen in humanSpecimens\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"humanSpecimen({humanSpecimenId:humanSpecimen.id})\" class=\"link\">{{humanSpecimen.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('donorId') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"donor({donorId:humanSpecimen.Donor.id})\">{{humanSpecimen.Donor.toString | truncate:40}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('requesterId') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.Requester.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfConsent') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.dateOfConsent | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateOfDraw') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.dateOfDraw | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('protocolId') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"protocol({protocolId:humanSpecimen.Protocol.id})\">{{humanSpecimen.Protocol.protocol}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('statusId') > -1\"\n" +
    "                    class=\"specimen-status-{{humanSpecimen.statusId}}\"\n" +
    "                >\n" +
    "                    {{humanSpecimen.Status.status}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/humanSpecimen/grid_actions.html\"\n" +
    "                        data=\"humanSpecimen\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!humanSpecimens[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/csvExport.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'HumanSpecimenGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"humanSpecimenGrid.search\">Human Specimen Samples</li>\n" +
    "            <li class=\"end\">Human Specimen Sample {{humanSpecimen.id}}</li>\n" +
    "            <li class=\"title\">Human Specimen Sample {{humanSpecimen.id}} From Donor {{humanSpecimen.donorId}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <button class=\"btn\" ng-click=\"updateStatus()\"><i class=\"icon-time\" /> Update Status</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Protocol:</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"flat-link\" ui-sref=\"protocol({protocolId:humanSpecimen.Protocol.id})\">{{humanSpecimen.Protocol.protocol}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr></tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Status Updates\">\n" +
    "                <div ng-include=\"'/app/partials/humanSpecimen/statusList.html'\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Samples\" class=\"ut-position-relative\">\n" +
    "                <div ng-include src=\"'/app/partials/humanSpecimen/samplesList.html'\"/>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"HumanSpecimen\"\n" +
    "                    oid=\"humanSpecimen.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"HumanSpecimen\"\n" +
    "                    oid=\"humanSpecimen.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Donor:</td>\n" +
    "                        <td>\n" +
    "                            <a class=\"flat-link\" ui-sref=\"donor({donorId:humanSpecimen.Donor.id})\">{{humanSpecimen.Donor.toString}}</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Blood Drawer:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"humanSpecimen.userId\" ng-src=\"/profile/avatar/{{humanSpecimen.userId}}\" />\n" +
    "                            {{humanSpecimen.User.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Blood Requester:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"humanSpecimen.requesterId\" ng-src=\"/profile/avatar/{{humanSpecimen.requesterId}}\" />\n" +
    "                            {{humanSpecimen.Requester.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Date of Consent:</td>\n" +
    "                        <td>{{ humanSpecimen.dateOfConsent | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Date of Draw:</td>\n" +
    "                        <td>{{ humanSpecimen.dateOfDraw | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ humanSpecimen.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ humanSpecimen.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!humanSpecimen.id\">Create Human Specimen Sample</h3>\n" +
    "    <h3 ng-if=\"humanSpecimen.id\">Edit Human Specimen Sample {{humanSpecimen.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in humanSpecimen.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Donor\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"humanSpecimen.Donor\"\n" +
    "                    key=\"humanSpecimen.donorId\"\n" +
    "                    resource=\"donor-typeahead\"\n" +
    "                    placeholder=\"toString\"\n" +
    "                    error=\"humanSpecimen.errors.donorId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"User\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"humanSpecimen.User\"\n" +
    "                    key=\"humanSpecimen.userId\"\n" +
    "                    resource=\"user\"\n" +
    "                    resource-primary-key=\"u_id\"\n" +
    "                    placeholder=\"fullName\"\n" +
    "                    template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                    disabled=\"\"\n" +
    "                    error=\"humanSpecimen.errors.userId\"\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Requester\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"humanSpecimen.Requester\"\n" +
    "                    key=\"humanSpecimen.requesterId\"\n" +
    "                    resource=\"user\"\n" +
    "                    resource-primary-key=\"u_id\"\n" +
    "                    placeholder=\"fullName\"\n" +
    "                    template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                    error=\"humanSpecimen.errors.requesterId\"\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Date of Consent\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"humanSpecimen.dateOfConsent\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Date of Draw\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"humanSpecimen.dateOfDraw\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Protocol\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"humanSpecimen.Protocol\"\n" +
    "                    key=\"humanSpecimen.protocolId\"\n" +
    "                    resource=\"protocol\"\n" +
    "                    placeholder=\"protocol\"\n" +
    "                    error=\"humanSpecimen.errors.protocolId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group label=\"Attachments\">\n" +
    "                <ut-attachment-uploader o=\"Blood\" oid=\"humanSpecimen.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"humanSpecimen.id\">Save</a>\n" +
    "        <a ng-if=\"!humanSpecimen.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/humanSpecimen/csvExport.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Human Specimen Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createHumanSpecimenSample()\">Create Human Specimen Sample</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Donor: All\"\n" +
    "                template=\"/app/partials/filters/donors.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Protocol: All\"\n" +
    "                template=\"/app/partials/filters/protocols.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Users: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Requesters: All\"\n" +
    "                template=\"/app/partials/filters/human_specimen_requesters.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"From Donors with Immunities: All\"\n" +
    "                template=\"/app/partials/filters/fromDonorsWithImmunities.html\"\n" +
    "                class=\"human-specimen-grid\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"HumanSpecimenGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"humanSpecimen({humanSpecimenId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-click=\"updateStatus()\"><i class=\"icon-time\" />Update Status</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/humanSpecimenDelete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Human Specimen {{humanSpecimen.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this specimen?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/humanSpecimenSampleDelete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Human Specimen Sample</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this status update?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Sample Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ humanSpecimenSample.Sample.description }}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/humanSpecimenSampleForm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Create Sample Derived from Human Specimen {{humanSpecimen.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this specimen?</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/humanSpecimenStatusDelete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Human Specimen Sample Status {{humanSpecimenStatus.HumanSpecimenStatusDetail.status}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this status update?</p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/samplesList.html',
    "<div id=\"ut-detail-table\" ng-controller=\"HumanSpecimenSampleListController\">\n" +
    "    <div class=\"ut-relative-plus-icon\" ng-click=\"create()\">\n" +
    "        <i class=\"icon-plus\"></i>\n" +
    "    </div>\n" +
    "    <table ng-show=\"humanSpecimenSamples.length\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th>User</th>\n" +
    "                <th>Description</th>\n" +
    "                <th>Created At</th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"humanSpecimenSample in humanSpecimenSamples\">\n" +
    "                <td ui-sref=\"sample({sampleId:humanSpecimenSample.sampleId})\" class=\"link\">{{humanSpecimenSample.sampleId}}</td>\n" +
    "                <td>{{humanSpecimenSample.Sample.User.fullName}}</td>\n" +
    "                <td> {{humanSpecimenSample.Sample.description}} </td>\n" +
    "                <td> {{humanSpecimenSample.Sample.created_at | utDate | date:'MM/dd/yy @ h:mma'}} </td>\n" +
    "                <td class=\"ut-actions-td\">\n" +
    "                    <div class=\"ut-table-edit-delete-icons\">\n" +
    "                        <i class=\"icon-pencil\" ng-click=\"edit(humanSpecimenSample.sampleId)\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"ut-table-edit-delete-icons\" ng-click=\"delete(humanSpecimenSample)\">\n" +
    "                        <i class=\"icon-trash\"></i>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/statusForm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Update Human Specimen Sample {{humanSpecimenId}} Status</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"human-specimen-status-form-container\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in humanSpecimenStatus.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Status\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"humanSpecimenStatus.HumanSpecimenStatusDetail\"\n" +
    "                    key=\"humanSpecimenStatus.statusId\"\n" +
    "                    resource=\"human-specimen-status-detail\"\n" +
    "                    placeholder=\"status\"\n" +
    "                    error=\"humanSpecimenStatus.errors.statusId\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Date\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"humanSpecimenStatus.date\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "                <div ng-if=\"humanSpecimenStatus.errors.date\" class=\"ut-global-error\">{{humanSpecimenStatus.errors.date}}</div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group label=\"Notes\">\n" +
    "                <textarea ng-model=\"humanSpecimenStatus.notes\"></textarea>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/humanSpecimen/statusList.html',
    "<div id=\"ut-detail-table\" ng-controller=\"HumanSpecimenStatusListController\">\n" +
    "    <table>\n" +
    "        <thead>\n" +
    "            <th>Date Updated</th>\n" +
    "            <th>Status</th>\n" +
    "            <th>User</th>\n" +
    "            <th>Notes</th>\n" +
    "            <th></th>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"humanSpecimenStatus in humanSpecimenStatuses\">\n" +
    "            <td>{{humanSpecimenStatus.date}}</td>\n" +
    "            <td>{{humanSpecimenStatus.HumanSpecimenStatusDetail.status}}</td>\n" +
    "            <td>{{humanSpecimenStatus.User.fullName}}</td>\n" +
    "            <td>{{humanSpecimenStatus.notes}}</td>\n" +
    "            <td class=\"ut-actions-td\">\n" +
    "                <div class=\"ut-table-edit-delete-icons\" ng-click=\"edit(humanSpecimenStatus)\">\n" +
    "                    <i class=\"icon-pencil\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"ut-table-edit-delete-icons\" ng-click=\"delete(humanSpecimenStatus)\">\n" +
    "                    <i class=\"icon-trash\"></i>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"projects[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"name\"\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"trg.name\"\n" +
    "                    label=\"Target\"\n" +
    "                    ng-show=\"showColumns.indexOf('targetId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Antigen\"\n" +
    "                    ng-show=\"showColumns.indexOf('antigen') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Objective\"\n" +
    "                    ng-show=\"showColumns.indexOf('objective') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Screening Protocol\"\n" +
    "                    ng-show=\"showColumns.indexOf('screeningProtocol') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Neutralization Protocol\"\n" +
    "                    ng-show=\"showColumns.indexOf('neutProtocol') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Neutralization Location\"\n" +
    "                    ng-show=\"showColumns.indexOf('neutLocation') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Last Meeting Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('lastMeetingDate') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Last Meeting Summary\"\n" +
    "                    ng-show=\"showColumns.indexOf('lastMeetingSummary') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Next Meeting Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('nextMeetingDate') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Last Experiment Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('lastExperimentDate') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Last Experiment Summary\"\n" +
    "                    ng-show=\"showColumns.indexOf('lastExperimentSummary') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"project in projects\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"project({projectId:project.id})\" class=\"link\">{{project.id}}</td>\n" +
    "                <td\n" +
    "                    ui-sref=\"project({projectId:project.id})\"\n" +
    "                    class=\"link\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{project.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{project.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('targetId') > -1\"\n" +
    "                >\n" +
    "                    <a \n" +
    "                        ui-sref=\"target({targetId:project.targetId})\"\n" +
    "                        class=\"flat-link\"\n" +
    "                    >\n" +
    "                        {{project.Target.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('antigen') > -1\"\n" +
    "                >\n" +
    "                    {{project.antigen}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('objective') > -1\"\n" +
    "                >\n" +
    "                    {{project.objective}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('screeningProtocol') > -1\"\n" +
    "                >\n" +
    "                    {{project.screeningProtocol}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('neutProtocol') > -1\"\n" +
    "                >\n" +
    "                    {{project.neutProtocol}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('neutLocation') > -1\"\n" +
    "                >\n" +
    "                    {{project.neutLocation}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lastMeetingDate') > -1\"\n" +
    "                >\n" +
    "                    {{project.lastMeetingDate}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lastMeetingSummary') > -1\"\n" +
    "                >\n" +
    "                    {{project.lastMeetingSummary | truncate:100}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('nextMeetingDate') > -1\"\n" +
    "                >\n" +
    "                    {{project.nextMeetingDate}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lastExperimentDate') > -1\"\n" +
    "                >\n" +
    "                    {{project.lastExperimentDate}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lastExperimentSummary') > -1\"\n" +
    "                >\n" +
    "                    {{project.lastExperimentSummary | truncate:100}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{project.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{project.updated_at | utDate| date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/hybridomaProject/grid_actions.html\"\n" +
    "                        data=\"project\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!projects[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'HybridomaProjectGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Hybridoma Project {{project.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this project? This will delete all <strong>reagents</strong>, <strong>meetings</strong>, and <strong>experiements</strong> as well.</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Project Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ project.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/project-icon.jpg\"/>\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"gocore\">GoCore</li>\n" +
    "            <li ui-sref=\"projectGrid.search\">Hybridoma Projects</li>\n" +
    "            <li class=\"end\">{{project.id}}</li>\n" +
    "            <li class=\"title\">{{project.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Objective:</td>\n" +
    "                            <td>{{project.objective}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Target:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"target({targetId:project.targetId})\" class=\"flat-link\">\n" +
    "                                {{project.Target.name}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Antigen:</td>\n" +
    "                            <td>{{project.antigen}}</td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Screening Protocol:</td>\n" +
    "                            <td>{{project.screeningProtocol}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Neutralization Protocol:</td>\n" +
    "                            <td>{{project.neutProtocol}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Neutralization Location:</td>\n" +
    "                            <td>{{project.neutLocation}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Scheduling Notes\">\n" +
    "                <div ng-bind-html=\"project.schedulingNotes\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Experiments\" class=\"ut-position-relative\">\n" +
    "                <div ng-include src=\"'/app/partials/hybridomaProject/experiment/_experiments_table.html'\"/>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Reagents\" class=\"ut-position-relative\">\n" +
    "                <div ng-include src=\"'/app/partials/hybridomaProject/reagent/_reagents_table.html'\"/>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Meetings\" class=\"ut-position-relative\">\n" +
    "                <div ng-include src=\"'/app/partials/hybridomaProject/meeting/_meetings_table.html'\"/>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"HybridomaProject\"\n" +
    "                    oid=\"project.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Hyridoma Project\"\n" +
    "                    oid=\"project.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Creator:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"project.userId\" ng-src=\"/profile/avatar/{{project.userId}}\" />\n" +
    "                            {{project.User.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>Collaborators:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"collaborator in project.collaborators\" class=\"collaborator\">\n" +
    "                                    <a ng-if=\"!$last\"class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:collaborator.id})\">\n" +
    "                                        {{collaborator.groupName + \", \" + \"&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"collaborator({collaboratorId:collaborator.id})\">\n" +
    "                                        {{collaborator.groupName}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"VIMs and MTAs\">\n" +
    "                <table class=\"detail\" ng-controller=\"HybridomaProjectVimMtaController\">\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Orders:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimOrder in projectVimMta.vimOrders\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{vimOrder.placeholder + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{vimOrder.placeholder}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Sents:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimSent in projectVimMta.vimSents\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{vimSent.placeholder + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{vimSent.placeholder}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>MTAs:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"mta in projectVimMta.mtas\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                        {{mta.placeholder + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                        {{mta.placeholder}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Proposed Start Date:</td>\n" +
    "                        <td ng-if=\"project.proposedStartDate\">{{project.proposedStartDate | utDate | date:'MM/dd/yy'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{project.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{project.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/experiment/_experiments_table.html',
    "<div id=\"ut-detail-table\" ng-controller=\"HybridomaProjectExperimentsController\">\n" +
    "    <div class=\"ut-relative-plus-icon\" ng-click=\"experimentModal()\">\n" +
    "        <i class=\"icon-plus\"></i>\n" +
    "    </div>\n" +
    "    <table ng-show=\"experiments.length\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th> Protocol </th>\n" +
    "                <th> Description </th>\n" +
    "                <th> Planned Date </th>\n" +
    "                <th> Completed Date </th>\n" +
    "                <th> Plates </th>\n" +
    "                <th> Results Summary </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"experiment in experiments\">\n" +
    "                <td ui-sref=\"experiment({projectId:experiment.hybridomaProjectId, experimentId:experiment.id})\" class=\"link\">{{experiment.id}}</td>\n" +
    "                <td> \n" +
    "                    <a  ui-sref=\"protocol({protocolId:experiment.protocolId})\" class=\"flat-link\" class=\"ut-flat-link-cursor\">\n" +
    "                        {{experiment.Protocol.protocol}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td> {{experiment.description}} </td>\n" +
    "                <td> {{experiment.plannedDate}} </td>\n" +
    "                <td> {{experiment.completedDate}} </td>\n" +
    "                <td> {{experiment.plates}} </td>\n" +
    "                <td> \n" +
    "                    <a class=\"ut-column-text-sizer\">\n" +
    "                        {{experiment.resultSummary}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td class=\"ut-actions-td\">\n" +
    "                    <div class=\"ut-table-edit-delete-icons\">\n" +
    "                        <i class=\"icon-pencil\" ng-click=\"experimentModal(experiment)\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"ut-table-edit-delete-icons\" ng-click=\"deleteExperiment(experiment)\">\n" +
    "                        <i class=\"icon-trash\"></i>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/experiment/deleteExperiment.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Experiment</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this experiment?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Description\" class=\"created\">\n" +
    "                {{ experiment.description }}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/experiment/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/experiment-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"project({projectId:experiment.hybridomaProjectId})\">Hybridoma Project {{experiment.hybridomaProjectId}}</li>\n" +
    "            <li class=\"end\">Experiment {{experiment.id}}</li>\n" +
    "            <li class=\"title\">{{experiment.description}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit(experiment)\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Hybridoma Project Id</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"project({projectId:experiment.hybridomaProjectId})\" class=\"flat-link\">\n" +
    "                                    Hybridoma Project {{experiment.hybridomaProjectId}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Experiment Description</td>\n" +
    "                            <td>{{experiment.description}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Planned Date of Completion</td>\n" +
    "                            <td>{{experiment.plannedDate}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Date of Completion</td>\n" +
    "                            <td>{{experiment.completedDate}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Protocol</td>\n" +
    "                            <td>\n" +
    "                                <a href=\"/protocol/{{experiment.protocolId}}\" class=\"flat-link\">\n" +
    "                                    {{experiment.Protocol.protocol}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Plates</td>\n" +
    "                            <td>{{experiment.plates}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Result Summary\">\n" +
    "                <div ng-bind-html=\"experiment.resultSummary\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"HybridomaProjectExperiment\"\n" +
    "                    oid=\"experiment.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"experiment\"\n" +
    "                    oid=\"experiment.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/experiment/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!experiment.id\">Create Hybridoma Experiment</h3>\n" +
    "    <h3 ng-if=\"experiment.id\">Edit Hybridoma Experiment {{ experiment.id }} - {{ experiment.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in experiment.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Protocol\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"experiment.Protocol\"\n" +
    "                        key=\"experiment.protocolId\"\n" +
    "                        placeholder=\"protocol\"\n" +
    "                        resource=\"protocol-typeahead\"\n" +
    "                        error=\"experiment.errors.protocolId\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description:\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"experiment.description\"\n" +
    "                        error=\"experiment.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Planned Date:\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"experiment.plannedDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Completed Date:\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"experiment.completedDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Plate(s):\">\n" +
    "                    <ut-input\n" +
    "                        model=\"experiment.plates\"\n" +
    "                        error=\"experiment.errors.plates\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Result Summary:\">\n" +
    "                    <textarea ng-model=\"experiment.resultSummary\" class=\"ut-big-text-input\"/>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"HybridomaProjectExperiment\" oid=\"experiment.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"experiment.id\">Save</a>\n" +
    "        <a ng-if=\"!experiment.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!project.id\">Create Hybridoma Project</h3>\n" +
    "    <h3 ng-if=\"project.id\">Edit Hybridoma Project {{ project.id }} - {{ project.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in project.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"User\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"project.User\"\n" +
    "                        key=\"project.userId\"\n" +
    "                        resource=\"user\"\n" +
    "                        resource-primary-key=\"u_id\"\n" +
    "                        placeholder=\"fullName\"\n" +
    "                        template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                        disabled\n" +
    "                        error=\"project.errors.userId\"\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Project Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"project.name\"\n" +
    "                        error=\"project.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Target\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"project.Target\"\n" +
    "                        key=\"project.targetId\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"target-typeahead\"\n" +
    "                        error=\"project.errors.targetId\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Proposed start date\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"project.proposedStartDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Antigen (if applicable)\">\n" +
    "                    <ut-input\n" +
    "                        model=\"project.antigen\"\n" +
    "                        error=\"project.errors.antigen\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Collaborators\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"collaborator\"\n" +
    "                        model=\"project\"\n" +
    "                        foreign-key=\"collaboratorId\"\n" +
    "                        relation=\"HybridomaProjectCollaborators\"\n" +
    "                        access=\"project.collaborators\"\n" +
    "                        placeholder=\"groupName\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Experimental Objective\">\n" +
    "                    <ut-input\n" +
    "                        model=\"project.objective\"\n" +
    "                        error=\"project.errors.objective\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Screening ELISA Protocol\">\n" +
    "                    <ut-input\n" +
    "                        model=\"project.screeningProtocol\"\n" +
    "                        error=\"project.errors.screeningProtocol\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Neutralization assay protocol\">\n" +
    "                    <ut-input\n" +
    "                        model=\"project.neutProtocol\"\n" +
    "                        error=\"project.errors.neutProtocol\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Neutralization Location\">\n" +
    "                    <ut-input\n" +
    "                        model=\"project.neutLocation\"\n" +
    "                        error=\"project.errors.neutLocation\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Notes on scheduling\">\n" +
    "                    <textarea ng-model=\"project.schedulingNotes\" class=\"ut-big-text-input\"/>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"HybridomaProject\" oid=\"project.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"project.id\">Save</a>\n" +
    "        <a ng-if=\"!project.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/hybridomaProject/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Hybridoma Project Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createProject()\">Create New Project</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"HybridomaProjectGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"project({projectId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul> \n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/meeting/_meetings_table.html',
    "<div id=\"ut-detail-table\" ng-controller=\"HybridomaProjectMeetingsController\">\n" +
    "    <div class=\"ut-relative-plus-icon\" ng-click=\"meetingModal()\">\n" +
    "        <i class=\"icon-plus\"></i>\n" +
    "    </div>\n" +
    "    <table ng-show=\"meetings.length\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th> Contacts </th>\n" +
    "                <th> Meeting Date </th>\n" +
    "                <th> Meeting Summary </th>\n" +
    "                <th> Next Meeting Date </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"meeting in meetings\">\n" +
    "                <td ui-sref=\"meeting({projectId:meeting.hybridomaProjectId, meetingId:meeting.id})\" class=\"link\">{{meeting.id}}</td>\n" +
    "                <td >\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"contact in meeting.contacts\">\n" +
    "                            <a ng-if=\"!$last\"class=\"flat-link\" ui-sref=\"contact({contactId:contact.id})\">\n" +
    "                                {{contact.name + \", \" + \"&nbsp;\"}}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"contact({contactId:contact.id})\">\n" +
    "                                {{contact.name}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td> {{meeting.meetingDate}} </td>\n" +
    "                <td> {{meeting.summary | truncate:250}} </td>\n" +
    "                <td> {{meeting.nextMeetingDate}} </td>\n" +
    "                <td class=\"ut-actions-td\">\n" +
    "                    <div class=\"ut-table-edit-delete-icons\">\n" +
    "                        <i class=\"icon-pencil\" ng-click=\"meetingModal(meeting)\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"ut-table-edit-delete-icons\" ng-click=\"deleteMeeting(meeting)\">\n" +
    "                        <i class=\"icon-trash\"></i>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/meeting/deleteMeeting.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Meeting</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this meeting?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Summary\" class=\"created\">\n" +
    "                {{ meeting.summary }}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/meeting/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/meeting-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"project({projectId:meeting.hybridomaProjectId})\">Hybridoma Project {{meeting.hybridomaProjectId}}</li>\n" +
    "            <li class=\"end\">Meeting {{meeting.id}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit(meeting)\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Hybridoma Project Id:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"project({projectId:meeting.hybridomaProjectId})\" class=\"flat-link\">\n" +
    "                                    Hybridoma Project {{meeting.hybridomaProjectId}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Meeting Date:</td>\n" +
    "                            <td>{{meeting.meetingDate}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Next Meeting Date:</td>\n" +
    "                            <td>{{meeting.nextMeetingDate}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Meeting Summary\">\n" +
    "                <div ng-bind-html=\"meeting.summary\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"HybridomaProjectMeeting\"\n" +
    "                    oid=\"meeting.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"meeting\"\n" +
    "                    oid=\"meeting.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>Contacts:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"contact in meeting.contacts\" class=\"collaborator\">\n" +
    "                                    <a ng-if=\"!$last\"class=\"flat-link\" ui-sref=\"contact({contactId:contact.id})\">\n" +
    "                                        {{contact.name + \", \" + \"&nbsp;\"}}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ui-sref=\"contact({contactId:contact.id})\">\n" +
    "                                        {{contact.name}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/meeting/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!meeting.id\">Create Hybridoma Meeting</h3>\n" +
    "    <h3 ng-if=\"meeting.id\">Edit Hybridoma Meeting {{ meeting.id }} </h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in meeting.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Contacts\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"contact\"\n" +
    "                        model=\"meeting\"\n" +
    "                        foreign-key=\"contactId\"\n" +
    "                        relation=\"HybridomaProjectMeetingContacts\"\n" +
    "                        access=\"meeting.contacts\"\n" +
    "                        placeholder=\"name\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Meeting Date\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"meeting.meetingDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                        error=\"meeting.errors.meetingDate\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                    <div ng-if=\"meeting.errors.meetingDate\" class=\"ut-global-error\">{{meeting.errors.meetingDate}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Summary\">\n" +
    "                    <textarea ng-model=\"meeting.summary\" class=\"ut-big-text-input\"/>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Next Meeting Date\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"meeting.nextMeetingDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                        error=\"meeting.errors.nextMeetingDate\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"HybridomaProjectMeeting\" oid=\"meeting.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"meeting.id\">Save</a>\n" +
    "        <a ng-if=\"!meeting.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/hybridomaProject/reagent/_reagents_table.html',
    "<div id=\"ut-detail-table\" ng-controller=\"HybridomaProjectReagentsController\">\n" +
    "    <div class=\"ut-relative-plus-icon\" ng-click=\"reagentModal()\">\n" +
    "        <i class=\"icon-plus\"></i>\n" +
    "    </div>\n" +
    "    <table ng-show=\"reagents.length\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th> Description </th>\n" +
    "                <th> Status </th>\n" +
    "                <th> VIM Order</th>\n" +
    "                <th> VIM Sent</th>\n" +
    "                <th> MTA </th>\n" +
    "                <th> Scheduled Date </th>\n" +
    "                <th> Received Date </th>\n" +
    "                <th> Sample </th>\n" +
    "                <th> Initial Amount </th>\n" +
    "                <th> Last Used On </th>\n" +
    "                <th> Last Used Amount </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"reagent in reagents\" class=\"collaborator-list\">\n" +
    "                <td ui-sref=\"reagent({projectId:reagent.hybridomaProjectId, reagentId:reagent.id})\" class=\"link\">{{reagent.id}}</td>\n" +
    "                <td> {{reagent.description}} </td>\n" +
    "                <td> {{reagent.status}} </td>\n" +
    "                <td>\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"vimOrder in reagent.vimOrders\" class=\"collaborator\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                {{\"VIM Order \" + vimOrder.id + \",&nbsp;\" }}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                {{\"VIM Order \" + vimOrder.id}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"vimSent in reagent.vimSents\" class=\"collaborator\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                {{\"VIM Sent \" + vimSent.id + \",&nbsp;\" }}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                {{\"VIM Sent \" + vimSent.id}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"mta in reagent.mtas\" class=\"collaborator\">\n" +
    "                            <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                {{\"MTA \" + mta.id + \",&nbsp;\" }}\n" +
    "                            </a>\n" +
    "                            <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                {{\"MTA \" + mta.id}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </td>\n" +
    "                <td> {{reagent.scheduledDate}} </td>\n" +
    "                <td> {{reagent.receivedDate}} </td>\n" +
    "                <td>\n" +
    "                    <a  ui-sref=\"sample({sampleId:reagent.sampleId})\" class=\"flat-link ut-flat-link-cursor\">\n" +
    "                        {{reagent.Sample.description}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td> {{reagent.initialAmount}} </td>\n" +
    "                <td> {{reagent.lastUsedOn}} </td>\n" +
    "                <td> {{reagent.lastUsedAmount}} </td>\n" +
    "                <td class=\"ut-actions-td\">\n" +
    "                    <i class=\"icon-pencil ut-table-edit-delete-icons\" ng-click=\"reagentModal(reagent)\"></i>\n" +
    "                    <i class=\"icon-trash ut-table-edit-delete-icons\" ng-click=\"deleteReagent(reagent)\"></i>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/reagent/deleteReagent.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Reagent</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this reagent?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Status\" class=\"created\">\n" +
    "                {{ reagent.status }}\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/reagent/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/gocore/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"project({projectId:reagent.hybridomaProjectId})\">Hybridoma Project {{reagent.hybridomaProjectId}}</li>\n" +
    "            <li class=\"end\">Reagent {{reagent.description}}</li>\n" +
    "            <li class=\"title\">{{reagent.description}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit(reagent)\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Hybridoma Project Id:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"project({projectId:reagent.hybridomaProjectId})\" class=\"flat-link\">\n" +
    "                                    Hybridoma Project {{reagent.hybridomaProjectId}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{reagent.description}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Delivery Status:</td>\n" +
    "                            <td>{{reagent.status}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Scheduled Arrival Date:</td>\n" +
    "                            <td>{{reagent.scheduledDate}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Reagent Date Received:</td>\n" +
    "                            <td>{{reagent.receivedDate}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Sample:</td>\n" +
    "                            <td>\n" +
    "                                <a ng-if=\"reagent.sampleId\" ui-sref=\"sample({sampleId:reagent.sampleId})\" class=\"flat-link\">\n" +
    "                                    Sample {{reagent.sampleId}} - {{reagent.Sample.description}}\n" +
    "                                </a>\n" +
    "                                <a ng-if=\"!reagent.sampleId\">\n" +
    "                                    Sample not choosen\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Initial Reagent Amount:</td>\n" +
    "                            <td>{{reagent.initialAmount}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Reagent Last Used Date:</td>\n" +
    "                            <td>{{reagent.lastUsedOn}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Reagent Last Used Amount:</td>\n" +
    "                            <td>{{reagent.lastUsedAmount}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"HybridomaProjectReagent\"\n" +
    "                    oid=\"reagent.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"reagent\"\n" +
    "                    oid=\"reagent.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"VIMs and MTAs\">\n" +
    "                <table class=\"detail\"> \n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Orders:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimOrder in reagent.vimOrders\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Sents:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimSent in reagent.vimSents\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>MTAs:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"mta in reagent.mtas\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                        {{\"MTA \" + mta.id + \" \" + mta.short_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/utilities/mta/{{mta.id}}\">\n" +
    "                                        {{\"MTA \" + mta.id + \" \" + mta.short_description }}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/hybridomaProject/reagent/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!reagent.id\">Create Hybridoma Reagent</h3>\n" +
    "    <h3 ng-if=\"reagent.id\">Edit Hybridoma Reagent {{ reagent.id }} - {{ reagent.description }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in reagent.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"reagent.description\"\n" +
    "                        error=\"reagent.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\">\n" +
    "                    <ut-input\n" +
    "                        model=\"reagent.status\"\n" +
    "                        error=\"reagent.errors.status\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"VIM Orders\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"vim-order\"\n" +
    "                        model=\"reagent\"\n" +
    "                        foreign-key=\"vimOrderId\"\n" +
    "                        relation=\"ReagentRelations\"\n" +
    "                        access=\"reagent.vimOrders\"\n" +
    "                        placeholder=\"placeholder\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"VIM Sents\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"vim-sent\"\n" +
    "                        model=\"reagent\"\n" +
    "                        foreign-key=\"vimSentId\"\n" +
    "                        relation=\"ReagentRelations\"\n" +
    "                        access=\"reagent.vimSents\"\n" +
    "                        placeholder=\"placeholder\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"MTAs\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"mta\"\n" +
    "                        model=\"reagent\"\n" +
    "                        foreign-key=\"mtaId\"\n" +
    "                        relation=\"ReagentRelations\"\n" +
    "                        access=\"reagent.mtas\"\n" +
    "                        placeholder=\"placeholder\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Scheduled Date\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"reagent.scheduledDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Received Date\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"reagent.receivedDate\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Sample\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"reagent.Sample\"\n" +
    "                        key=\"reagent.sampleId\"\n" +
    "                        resource=\"sample-typeahead\"\n" +
    "                        placeholder=\"description\" \n" +
    "                        error=\"reagent.errors.sampleId\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Initial Amount\">\n" +
    "                    <ut-input\n" +
    "                        model=\"reagent.initialAmount\"\n" +
    "                        error=\"reagent.errors.initialAmount\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Last Used On\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"reagent.lastUsedOn\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Last Used Amount\">\n" +
    "                    <ut-input\n" +
    "                        model=\"reagent.lastUsedAmount\"\n" +
    "                        error=\"reagent.errors.lastUsedAmount\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"HybridomaProjectReagent\" oid=\"reagent.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"reagent.id\">Save</a>\n" +
    "        <a ng-if=\"!reagent.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/labCore/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"labCores[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Slug\"\n" +
    "                    ng-show=\"showColumns.indexOf('slug') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Mission\"\n" +
    "                    ng-show=\"showColumns.indexOf('mission') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Website\"\n" +
    "                    ng-show=\"showColumns.indexOf('website') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"labCore in labCores\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"vvcLabCore({labCoreId:labCore.id})\" class=\"link\">{{labCore.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('slug') > -1\"\n" +
    "                >\n" +
    "                    {{labCore.slug}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{labCore.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('mission') > -1\"\n" +
    "                >\n" +
    "                    {{labCore.mission | truncate: 250 }}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('website') > -1\"\n" +
    "                >\n" +
    "                    {{labCore.website}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/labCore/grid_actions.html\"\n" +
    "                        data=\"labCore\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!labCores[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/labCore/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'VvcLabCoreGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/labCore/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete LabCore {{labCore.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this Lab Core?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"LabCore Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ labCore.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/labCore/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/lab-core-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"adminCore\">Admin Core</li>\n" +
    "            <li ui-sref=\"vvcLabCoreGrid.search\">Labs and Cores</li>\n" +
    "            <li class=\"end\">{{labCore.id}}</li>\n" +
    "            <li class=\"title\">{{labCore.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"openDelete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{labCore.name}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Slug:</td>\n" +
    "                            <td>{{labCore.slug}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Website:</td>\n" +
    "                            <td>\n" +
    "                                <a href=\"{{labCore.website}}\"> {{labCore.website}} </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"LabCore\"\n" +
    "                    oid=\"labCore.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Mission\">\n" +
    "                <div ng-bind-html=\"labCore.mission\"></div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"LabCore\"\n" +
    "                    oid=\"labCore.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Contact Info\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Street:</td>\n" +
    "                        <td>\n" +
    "                            {{labCoreContact.street}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>City:</td>\n" +
    "                        <td>\n" +
    "                            {{labCoreContact.city}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>State:</td>\n" +
    "                        <td>\n" +
    "                            {{labCoreContact.state}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Zip:</td>\n" +
    "                        <td>\n" +
    "                            {{labCoreContact.zip}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Phone:</td>\n" +
    "                        <td>\n" +
    "                            {{labCoreContact.phone}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/labCore/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!labCore.id\">Create Lab Core</h3>\n" +
    "    <h3 ng-if=\"labCore.id\">Edit Lab Core {{ labCore.id }} - {{ labCore.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in labCore.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCore.name\"\n" +
    "                        error=\"labCore.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Slug\">\n" +
    "                    <ut-input\n" +
    "                        model=\"labCore.slug\"\n" +
    "                        error=\"labCore.errors.slug\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Mission\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCore.mission\"\n" +
    "                        error=\"labCore.errors.mission\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Website\">\n" +
    "                    <ut-input\n" +
    "                        model=\"labCore.website\"\n" +
    "                        error=\"labCore.errors.website\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Street\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCoreContact.street\"\n" +
    "                        error=\"labCoreContact.errors.street\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"City\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCoreContact.city\"\n" +
    "                        error=\"labCoreContact.errors.city\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"State\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCoreContact.state\"\n" +
    "                        error=\"labCoreContact.errors.state\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Zip\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCoreContact.zip\"\n" +
    "                        error=\"labCoreContact.errors.zip\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Phone Number\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"labCoreContact.phone\"\n" +
    "                        error=\"labCoreContact.errors.phone\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"LabCore\" oid=\"labCore.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"labCore.id\">Save</a>\n" +
    "        <a ng-if=\"!labCore.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/labCore/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/labCore/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Lab Core Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createLabCore()\" ng-if=\"canCreate()\">Create New Lab Core</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/labCore/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"LabCoreGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"vvcLabCore({labCoreId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/molecule/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"molecules[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"molecule in molecules\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"molecule({moleculeId:molecule.id})\" class=\"link\">{{molecule.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{molecule.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{molecule.description}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/molecule/grid_actions.html\"\n" +
    "                        data=\"molecule\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!molecules[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/molecule/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'MoleculeGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/molecule/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Molecule {{molecule.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this molecule?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Molecule Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ molecule.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/molecule/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/molecule-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"moleculeGrid.search\">Molecules</li>\n" +
    "            <li class=\"end\">{{molecule.id}}</li>\n" +
    "            <li class=\"title\">{{molecule.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{molecule.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{molecule.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Molecule\"\n" +
    "                    oid=\"molecule.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Molecule\"\n" +
    "                    oid=\"molecule.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/molecule/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!molecule.id\">Create Molecule</h3>\n" +
    "    <h3 ng-if=\"molecule.id\">Edit Molecule {{ molecule.id }} - {{ molecule.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in molecule.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"molecule.name\"\n" +
    "                        error=\"molecule.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"molecule.description\"\n" +
    "                        error=\"molecule.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Molecule\" oid=\"molecule.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"molecule.id\">Save</a>\n" +
    "        <a ng-if=\"!molecule.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/molecule/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/molecule/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Molecule Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createMolecule()\" ng-if=\"canCreate()\">Create New Molecule</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/molecule/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"MoleculeGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"molecule({moleculeId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/mta/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"mtas[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"shortDescription\"\n" +
    "                    label=\"Short Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('shortDescription') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Investigator\"\n" +
    "                    ng-show=\"showColumns.indexOf('investigator') > -1\"\n" +
    "                    sort-field=\"investigator\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date Effective\"\n" +
    "                    ng-show=\"showColumns.indexOf('dateEffective') > -1\"\n" +
    "                    sort-field=\"dateEffective\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Agreement Number\"\n" +
    "                    ng-show=\"showColumns.indexOf('agreementNumber') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Materials\"\n" +
    "                    ng-show=\"showColumns.indexOf('materials') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Purpose\"\n" +
    "                    ng-show=\"showColumns.indexOf('purpose') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                    sort-field=\"status\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Provider\"\n" +
    "                    ng-show=\"showColumns.indexOf('provider') > -1\"\n" +
    "                    sort-field=\"provider\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Recipient\"\n" +
    "                    ng-show=\"showColumns.indexOf('recipient') > -1\"\n" +
    "                    sort-field=\"recipient\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Material Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('materialStatus') > -1\"\n" +
    "                    sort-field=\"materialStatus\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"mta in mtas\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"mta({mtaId:mta.id})\" class=\"link\">{{mta.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('shortDescription') > -1\"\n" +
    "                    ui-sref=\"mta({mtaId:mta.id})\"\n" +
    "                    class=\"link\"\n" +
    "                >\n" +
    "                    {{mta.shortDescription}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('investigator') > -1\"\n" +
    "                >\n" +
    "                    {{mta.investigator}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('dateEffective') > -1\"\n" +
    "                >\n" +
    "                    {{mta.dateEffective}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('agreementNumber') > -1\"\n" +
    "                >\n" +
    "                    {{mta.agreementNumber}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('materials') > -1\"\n" +
    "                >\n" +
    "                    {{mta.materials | truncate: 50}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('purpose') > -1\"\n" +
    "                >\n" +
    "                    {{mta.purpose | truncate: 50}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                >\n" +
    "                    {{mta.status}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('provider') > -1\"\n" +
    "                >\n" +
    "                    {{mta.provider}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('recipient') > -1\"\n" +
    "                >\n" +
    "                    {{mta.recipient}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    ui-sref=\"directory({userId:mta.User.u_id})\" class=\"flat-link ut-flat-link-cursor\"\n" +
    "                >\n" +
    "                    {{mta.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('materialStatus') > -1\"\n" +
    "                >\n" +
    "                    {{mta.materialStatus}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{mta.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{mta.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/mta/grid_actions.html\"\n" +
    "                        data=\"mta\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!mtas[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/mta/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'MaterialTransferAgreementGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/mta/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete MTA {{mta.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p>Are you sure you want to delete this mta?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Short Description\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ mta.shortDescription}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/mta/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/mta/mta-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"mtaGrid.search\">MTAs</li>\n" +
    "            <li class=\"end\">MTA {{mta.id}}</li>\n" +
    "            <li class=\"title\">{{mta.shortDescription}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\" ng-if=\"canEdit()\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"delete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Short Description:</td>\n" +
    "                            <td>{{mta.shortDescription}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Materials:</td>\n" +
    "                            <td>{{mta.materials}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Purpose:</td>\n" +
    "                            <td>{{mta.purpose}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Agreement Number:</td>\n" +
    "                            <td>{{mta.agreementNumber}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Status:</td>\n" +
    "                            <td>{{mta.status}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Provider:</td>\n" +
    "                            <td>{{mta.provider}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Material Status:</td>\n" +
    "                            <td>{{mta.materialStatus}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"MaterialTransferAgreement\"\n" +
    "                    oid=\"mta.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"MaterialTransferAgreement\"\n" +
    "                    oid=\"mta.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Investigator:</td>\n" +
    "                        <td>\n" +
    "                            {{mta.investigator}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Recipient:</td>\n" +
    "                        <td>\n" +
    "                            {{mta.recipient}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>User:</td>\n" +
    "                        <td >\n" +
    "                            <a ui-sref=\"directory({userId:mta.User.u_id})\" class=\"flat-link\">\n" +
    "                                {{mta.User.fullName}}\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Sents:</td>\n" +
    "                        <td ng-if=\"mta.vimSents\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimSent in mta.vimSents\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"ut-align-top\">\n" +
    "                        <td>VIMs Orders:</td>\n" +
    "                        <td ng-if=\"mta.vimOrders\">\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimOrder in mta.vimOrders\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Date Effective:</td>\n" +
    "                        <td>{{ mta.dateEffective | utDate | date:'MM/dd/yy'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ mta.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ mta.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/mta/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!mta.id\">Create MTA</h3>\n" +
    "    <h3 ng-if=\"mta.id\">Edit MTA {{ mta.id }} - {{ mta.shortDescription }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in mta.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Short Description\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.shortDescription\"\n" +
    "                        error=\"mta.errors.shortDescription\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Investigator\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.investigator\"\n" +
    "                        error=\"mta.errors.investigator\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group  >\n" +
    "\n" +
    "                <ut-control-group label=\"Date Effective\">\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"mta.dateEffective\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Agreement Number\">\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.agreementNumber\"\n" +
    "                        error=\"mta.errors.agreementNumber\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Materials\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.materials\"\n" +
    "                        error=\"mta.errors.materials\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Purpose\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.purpose\"\n" +
    "                        error=\"mta.errors.purpose\"\n" +
    "                    />\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\" required>\n" +
    "                    <select ng-model=\"mta.status\">\n" +
    "                        <option value=\"Fully Executed\">Fully Executed</option>\n" +
    "                        <option value=\"Pending\">Pending</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"mta.errors.status\" class=\"ut-global-error\">{{mta.errors.status}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Provider\">\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.provider\"\n" +
    "                        error=\"mta.error.provider\"\n" +
    "                    />\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Recipient\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"mta.recipient\"\n" +
    "                        error=\"mta.errors.recipient\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"User\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"mta.User\"\n" +
    "                        key=\"mta.userId\"\n" +
    "                        resource=\"user\"\n" +
    "                        resource-primary-key=\"u_id\"\n" +
    "                        placeholder=\"fullName\"\n" +
    "                        template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                        disabled\n" +
    "                        error=\"mta.errors.userId\"\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Material Status\" required>\n" +
    "                    <select ng-model=\"mta.materialStatus\">\n" +
    "                        <option value=\"Pending\">Pending</option>\n" +
    "                        <option value=\"Sent\">Sent</option>\n" +
    "                        <option value=\"Received\">Received</option>\n" +
    "                        <option value=\"Waiting for Shipment\">Waiting for Shipment</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"mta.errors.materialStatus\" class=\"ut-global-error\">{{mta.errors.materialStatus}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"MaterialTransferAgreement\" oid=\"mta.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"mta.id\">Save</a>\n" +
    "        <a ng-if=\"!mta.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/mta/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/mta/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>MTA Search</h3>\n" +
    "                <button class=\"btn\" ng-if=\"canEdit()\" ng-click=\"createMta()\">Create New MTA</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Users: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/mta/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"MtaGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"mta({mtaId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/news/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\" class=\"news-grid\">\n" +
    "    <table ng-if=\"news[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Title\"\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Content\"\n" +
    "                    ng-show=\"showColumns.indexOf('content') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Lab Core\"\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('date') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Published\"\n" +
    "                    ng-show=\"showColumns.indexOf('published') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"news in news\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"news({newsId:news.id})\" class=\"link\">{{news.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                >\n" +
    "                    {{news.title | truncate:70 }}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('content') > -1\"\n" +
    "                >\n" +
    "                    {{news.content | truncate:130 }}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                >\n" +
    "                    {{news.LabCore.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('date') > -1\"\n" +
    "                >\n" +
    "                    {{news.date}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('published') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"confirmed-icons\">\n" +
    "                        <img ng-if=\"news.published\" ng-src=\"/images/utilities/inventory/green-checkmark.png\" />\n" +
    "                        <img ng-if=\"!news.published\" ng-src=\"/images/utilities/inventory/red-x.png\" />\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/news/grid_actions.html\"\n" +
    "                        data=\"news\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!news[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/news/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'VvcNewsGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/news/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete News {{news.title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this VVC News?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"News Text\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ news.content}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/news/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/news-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"adminCore\">Admin Core</li>\n" +
    "            <li ui-sref=\"newsGrid.search\">News</li>\n" +
    "            <li class=\"end\">{{news.id}}</li>\n" +
    "            <li class=\"title\">{{news.title}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"openDelete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Lab Core:</td>\n" +
    "                            <td>{{news.LabCore.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Date:</td>\n" +
    "                            <td>{{news.date}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Content\">\n" +
    "                <div ng-bind-html=\"news.content\"></div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Image\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"VvcNews\"\n" +
    "                    oid=\"news.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"VvcNews\"\n" +
    "                    oid=\"news.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Status\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Has news been published?:</td>\n" +
    "                        <td ng-if=\"news.published\">\n" +
    "                            <img ng-src=\"/images/utilities/inventory/green-checkmark.png\" />\n" +
    "                        </td>\n" +
    "                        <td ng-if=\"!news.published\">\n" +
    "                            <img ng-src=\"/images/utilities/inventory/red-x.png\" />\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/news/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!news.id\">Create News</h3>\n" +
    "    <h3 ng-if=\"news.id\">Edit News {{ news.id }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in news.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Title\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"news.title\"\n" +
    "                        error=\"news.errors.title\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Lab Core\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"news.LabCore\"\n" +
    "                        key=\"news.lab_core\"\n" +
    "                        resource=\"lab-core-typeahead\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"news.errors.lab_core\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Date\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"news.date\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                    <div ng-if=\"news.errors.date\" class=\"ut-global-error\">{{news.errors.date}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Published\">\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-model=\"news.published\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Content\" required>\n" +
    "                    <textarea class=\"rich ut-big-text-input\" ng-model=\"news.content\"></textarea>\n" +
    "                    <div ng-if=\"news.errors.content\" class=\"ut-global-error\">{{news.errors.content}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Image\">\n" +
    "                    <ut-attachment-uploader o=\"VvcNews\" oid=\"news.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"news.id\">Save</a>\n" +
    "        <a ng-if=\"!news.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/news/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/news/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>News Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createNews()\" ng-if=\"canCreate()\">Create News</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/news/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"NewsGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"news({newsId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"presets[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Sample Type\"\n" +
    "                    ng-show=\"showColumns.indexOf('sample_type_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Molecule\"\n" +
    "                    ng-show=\"showColumns.indexOf('molecule_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Tag\"\n" +
    "                    ng-show=\"showColumns.indexOf('tag_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Parent\"\n" +
    "                    ng-show=\"showColumns.indexOf('parent_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Target\"\n" +
    "                    ng-show=\"showColumns.indexOf('target_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"preset in presets\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"preset({presetId:preset.id})\" class=\"link\">{{preset.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{preset.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('sample_type_id') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"sampleType({sampleTypeId:preset.SampleType.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                        {{preset.SampleType.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('molecule_id') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"molecule({moleculeId:preset.Molecule.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                        {{preset.Molecule.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('tag_id') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"tag({tagId:preset.Tag.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                        {{preset.Tag.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('parent_id') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"sample({sampleId:preset.Parent.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                        {{preset.Parent.description}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('target_id') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"target({targetId:preset.Target.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                        {{preset.Target.name}}\n" +
    "                    </a>\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/preset/grid_actions.html\"\n" +
    "                        data=\"preset\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!presets[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/preset/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'PresetGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Preset {{preset.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this preset?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Preset Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ preset.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon medium\" src=\"/images/utilities/inventory/preset-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"presetGrid.search\">Presets</li>\n" +
    "            <li class=\"end\">{{preset.id}}</li>\n" +
    "            <li class=\"title\">{{preset.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Sample Type:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"sampleType({sampleTypeId:preset.SampleType.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                                    {{preset.SampleType.name}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Molecule:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"molecule({moleculeId:preset.Molecule.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                                    {{preset.Molecule.name}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Tag:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"tag({tagId:preset.Tag.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                                    {{preset.Tag.name}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Parent:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"parent({parentId:preset.Parent.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                                    {{preset.Parent.description}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Target:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"target({targetId:preset.Target.id})\" class=\"flat-link\" class=\"ut-link-cursor\">\n" +
    "                                    {{preset.Target.name}}\n" +
    "                                </a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Preset\"\n" +
    "                    oid=\"preset.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Preset\"\n" +
    "                    oid=\"preset.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!preset.id\">Create Preset</h3>\n" +
    "    <h3 ng-if=\"preset.id\">Edit Preset {{ preset.id }} - {{ preset.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in preset.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"preset.name\"\n" +
    "                        error=\"preset.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "               <ut-control-group label=\"Sample Type\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"preset.SampleType\"\n" +
    "                        key=\"preset.sample_type_id\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"sample-type-typeahead\"\n" +
    "                        error=\"preset.errors.sample_type_id\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "               <ut-control-group label=\"Molecule\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"preset.Molecule\"\n" +
    "                        key=\"preset.molecule_id\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"molecule-typeahead\"\n" +
    "                        error=\"preset.errors.sample_type_id\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Tag\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"preset.Tag\"\n" +
    "                        key=\"preset.tag_id\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"tag-typeahead\"\n" +
    "                        error=\"preset.errors.tag_id\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Parent\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"preset.Parent\"\n" +
    "                        key=\"preset.parent_id\"\n" +
    "                        placeholder=\"description\"\n" +
    "                        resource=\"sample-typeahead\"\n" +
    "                        error=\"preset.errors.parent_id\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Target\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"preset.Target\"\n" +
    "                        key=\"preset.target_id\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        resource=\"target-typeahead\"\n" +
    "                        error=\"preset.errors.target_id\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Preset\" oid=\"preset.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"preset.id\">Save</a>\n" +
    "        <a ng-if=\"!preset.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/preset/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Preset Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createPreset()\" ng-if=\"canCreate()\">Create New Preset</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/preset/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"PresetGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"preset({presetId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/protocol/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"protocols[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Protocol\"\n" +
    "                    ng-show=\"showColumns.indexOf('protocol') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"protocol in protocols\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"protocol({protocolId:protocol.id})\" class=\"link\">{{protocol.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('protocol') > -1\"\n" +
    "                >\n" +
    "                    {{protocol.protocol}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{protocol.description}}\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!protocols[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/protocol/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'ProtocolGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/protocol/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/gocore/protocol-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"protocolGrid.search\">Protocols</li>\n" +
    "            <li class=\"end\">{{protocol.id}}</li>\n" +
    "            <li class=\"title\">{{protocol.protocol}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Protocol:</td>\n" +
    "                            <td>{{protocol.protocol}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{protocol.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Protocol\"\n" +
    "                    oid=\"protocol.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Protocol\"\n" +
    "                    oid=\"protocol.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/protocol/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!protocol.id\">Create Protocol</h3>\n" +
    "    <h3 ng-if=\"protocol.id\">Edit Protocol {{ protocol.id }} - {{ protocol.protocol }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in protocol.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Protocol\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"protocol.protocol\"\n" +
    "                        error=\"protocol.errors.protocol\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"protocol.description\"\n" +
    "                        error=\"protocol.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Protocol\" oid=\"protocol.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"protocol.id\">Save</a>\n" +
    "        <a ng-if=\"!protocol.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/protocol/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/protocol/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Protocol Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createProtocol()\">Create New Protocol</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/_grid_table.html',
    "<div id=\"publication-grid-container\">\n" +
    "    <div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "    <div id=\"ut-grid-table-container\">\n" +
    "        <table ng-if=\"publications[0].gridParams.total\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"PubMed Id\"\n" +
    "                        ng-show=\"showColumns.indexOf('pub_med_id') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"User\"\n" +
    "                        ng-show=\"showColumns.indexOf('user') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Publication Date\"\n" +
    "                        ng-show=\"showColumns.indexOf('pub_date') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"E Publication Date\"\n" +
    "                        ng-show=\"showColumns.indexOf('e_pub_date') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"PubMed Date\"\n" +
    "                        ng-show=\"showColumns.indexOf('pub_med_date') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Source\"\n" +
    "                        ng-show=\"showColumns.indexOf('source') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Authors\"\n" +
    "                        ng-show=\"showColumns.indexOf('authors') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Last Author\"\n" +
    "                        ng-show=\"showColumns.indexOf('last_author') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Title\"\n" +
    "                        ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Volume\"\n" +
    "                        ng-show=\"showColumns.indexOf('volume') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Issue\"\n" +
    "                        ng-show=\"showColumns.indexOf('issue') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Pages\"\n" +
    "                        ng-show=\"showColumns.indexOf('pages') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Languages\"\n" +
    "                        ng-show=\"showColumns.indexOf('languages') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"NLM Unique Id\"\n" +
    "                        ng-show=\"showColumns.indexOf('nlm_unique_id') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"ISSN\"\n" +
    "                        ng-show=\"showColumns.indexOf('issn') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"ESSN\"\n" +
    "                        ng-show=\"showColumns.indexOf('essn') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Publication Types\"\n" +
    "                        ng-show=\"showColumns.indexOf('pub_types') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Record Status\"\n" +
    "                        ng-show=\"showColumns.indexOf('record_status') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Publication Status\"\n" +
    "                        ng-show=\"showColumns.indexOf('pub_status') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Full Journal Name\"\n" +
    "                        ng-show=\"showColumns.indexOf('full_journal_name') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th\n" +
    "                        ut-grid-header\n" +
    "                        label=\"Confirmed\"\n" +
    "                        ng-show=\"showColumns.indexOf('confirmed') > -1\"\n" +
    "                        allow-sort=\"false\"\n" +
    "                    >\n" +
    "                    </th>\n" +
    "                    <th></th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"publication in publications\" class=\"ut-fade\" ng-class=\"{true:'', false:'ut-bold-row'}[publication.confirmed]\">\n" +
    "                    <td ui-sref=\"publication({publicationId:publication.id})\" class=\"link\">{{publication.id}}</td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pub_med_id') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pub_med_id}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('user') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.User.fullName}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pub_date') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pub_date}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('e_pub_date') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.e_pub_date}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pub_med_date') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pub_med_date}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('source') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.source}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('authors') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.authors | truncate:110}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('last_author') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.last_author}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.title | truncate:110}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('volume') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.volume}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('issue') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.issue}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pages') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pages}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('languages') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.languages}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('nlm_unique_id') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.nlm_unique_id}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('issn') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.issn}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('essn') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.essn}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pub_types') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pub_types}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('record_status') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.record_status}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('pub_status') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.pub_status}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('full_journal_name') > -1\"\n" +
    "                    >\n" +
    "                        {{publication.full_journal_name}}\n" +
    "                    </td>\n" +
    "                    <td\n" +
    "                        ng-show=\"showColumns.indexOf('confirmed') > -1\"\n" +
    "                    >\n" +
    "                        <a class=\"confirmed-icons\">\n" +
    "                            <img ng-if=\"publication.confirmed\" ng-src=\"/images/utilities/inventory/green-checkmark.png\" />\n" +
    "                            <img ng-if=\"!publication.confirmed\" ng-src=\"/images/utilities/inventory/red-x.png\" />\n" +
    "                        </a>\n" +
    "                    </td>\n" +
    "                    <td class=\"actions ut-normal-font\">\n" +
    "                        <ut-dropdown\n" +
    "                            icon=\"icon-cog\"\n" +
    "                            template=\"/app/partials/publication/grid_actions.html\"\n" +
    "                            data=\"publication\"\n" +
    "                        >\n" +
    "                        </ut-dropdown>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div ng-if=\"!publications[0].gridParams.total\" class=\"no-results\">\n" +
    "            No Results Found\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/blacklist.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Blacklist Publication - \"{{publication.title}}\"</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to blacklist this publication? </p>\n" +
    "\n" +
    "            <ut-control-group label=\"Molecule Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                \"{{ publication.title}}\"\"\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"blacklist()\" style=\"margin-right:5px;\">\n" +
    "        <a>Blacklist</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/publication/confirm.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Confirm Publication - \"{{publication.title}}\"</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to confirm this publication?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Publication Title\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                \"{{ publication.title}}\"\"\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-success\" ng-click=\"confirm()\" style=\"margin-right:5px;\">\n" +
    "        <a>Confirm</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/publication/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'PublicationGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/detail.html',
    "<div id=\"publication-detail-container\">\n" +
    "    <div id=\"ut-detail-container\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <img class=\"publication-header-icon\" src=\"/images/utilities/inventory/publication-icon.png\" />\n" +
    "            <ul class=\"ut-breadcrumbs\">\n" +
    "                <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "                <li ui-sref=\"publicationGrid.search\">Publications</li>\n" +
    "                <li class=\"end\">{{publication.id}}</li>\n" +
    "                <li class=\"title\">{{publication.title | truncate : 100 }}</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"content\">\n" +
    "            <div class=\"toolbar\">\n" +
    "                <button nf-if=\"canEdit()\" class=\"btn\" ng-click=\"edit()\">\n" +
    "                    <i class=\"icon-pencil\" />\n" +
    "                    Edit\n" +
    "                </button>\n" +
    "                <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "                <button\n" +
    "                    ng-if=\"initialized && !publication.confirmed && canConfirm()\"\n" +
    "                    class=\"btn btn-success\" ng-click=\"confirm()\"\n" +
    "                    >\n" +
    "                    <i class=\"icon-check\" /> \n" +
    "                    Confirm\n" +
    "                </button>\n" +
    "                <button\n" +
    "                    ng-if=\"initialized && !publication.confirmed && canBlacklist()\"\n" +
    "                    class=\"btn btn-danger\" ng-click=\"openBlacklist()\"\n" +
    "                    >\n" +
    "                    <i class=\"icon-list\" /> \n" +
    "                    Blacklist\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div class=\"main-column\">\n" +
    "                <ut-edit-module title=\"Details\">\n" +
    "                    <div class=\"detail-column\">\n" +
    "                        <table class=\"detail\">\n" +
    "                            <tr>\n" +
    "                                <td>Source:</td>\n" +
    "                                <td>{{publication.source}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>Full Journal Name:</td>\n" +
    "                                <td>{{publication.full_journal_name}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>Volume:</td>\n" +
    "                                <td>{{publication.volume}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>Issue:</td>\n" +
    "                                <td>{{publication.issue}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>Pages:</td>\n" +
    "                                <td>{{publication.pages}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>PubMed ID:</td>\n" +
    "                                <td>{{publication.pub_med_id}}</td>\n" +
    "                            </tr>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                    <div class=\"detail-column\">\n" +
    "                        <table class=\"detail\">\n" +
    "\n" +
    "                            <tr>\n" +
    "                                <td>Publication Type(s):</td>\n" +
    "                                <td>{{publication.pub_types}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>ISSN:</td>\n" +
    "                                <td>{{publication.issn}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>ESSN:</td>\n" +
    "                                <td>{{publication.essn}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>NLM Unique Id:</td>\n" +
    "                                <td>{{publication.nlm_unique_id}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>Languages:</td>\n" +
    "                                <td>{{publication.languages}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td>PubMed Url:</td>\n" +
    "                                <td>\n" +
    "                                    <a class=\"link\" href=\"http://www.ncbi.nlm.nih.gov/pubmed/{{publication.pub_med_id}}\">\n" +
    "                                        http://www.ncbi.nlm.nih.gov/pubmed/{{publication.pub_med_id}}\n" +
    "                                    </a>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </ut-edit-module>\n" +
    "                <ut-edit-module title=\"Attachments\">\n" +
    "                    <ut-attachment-module\n" +
    "                        o=\"Publication\"\n" +
    "                        oid=\"publication.id\"\n" +
    "                    >\n" +
    "                    </ut-attachment-module>\n" +
    "                </ut-edit-module>\n" +
    "\n" +
    "                <ut-edit-module title=\"Activity\">\n" +
    "                    <ut-activity-module\n" +
    "                        o=\"Publication\"\n" +
    "                        oid=\"publication.id\"\n" +
    "                        comment=\"comment\"\n" +
    "                    >\n" +
    "                    </ut-activity-module>\n" +
    "                </ut-edit-module>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"side-column\">\n" +
    "                <ut-edit-module title=\"Status\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Has publication been confirmed?:</td>\n" +
    "                            <td ng-if=\"publication.confirmed\">\n" +
    "                                <img ng-src=\"/images/utilities/inventory/green-checkmark.png\" />\n" +
    "                            </td>\n" +
    "                            <td ng-if=\"!publication.confirmed\">\n" +
    "                                <img ng-src=\"/images/utilities/inventory/red-x.png\" />\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Publication Status:</td>\n" +
    "                            <td>\n" +
    "                                {{publication.pub_status}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Record Status:</td>\n" +
    "                            <td>\n" +
    "                                {{publication.record_status}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </ut-edit-module>\n" +
    "                <ut-edit-module title=\"People\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>User:</td>\n" +
    "                            <td>\n" +
    "                                <img ng-if=\"publication.user_id\" ng-src=\"/profile/avatar/{{publication.user_id}}\" />\n" +
    "                                {{publication.User.fullName}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class=\"ut-vertical-align\">Authors:</td>\n" +
    "                            <td>\n" +
    "                                {{publication.authors}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td class=\"ut-vertical-align\">Last Author:</td>\n" +
    "                            <td>\n" +
    "                                {{publication.last_author}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </ut-edit-module>\n" +
    "                <ut-edit-module title=\"Dates\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Publication Date:</td>\n" +
    "                            <td>{{publication.pub_date}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>E Publication Date:</td>\n" +
    "                            <td>{{publication.e_pub_date}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>PubMed Date:</td>\n" +
    "                            <td>{{publication.pub_med_date}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </ut-edit-module>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!publication.id\">Create Publication</h3>\n" +
    "    <h3 ng-if=\"publication.id\">Edit Publication {{ publication.id }} - {{ publication.title }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in publication.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Title\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.title\"\n" +
    "                        error=\"publication.errors.title\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Pub Med Id\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.pub_med_id\"\n" +
    "                        error=\"publication.errors.pub_med_id\"\n" +
    "                        disabled=\"true\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Source\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.source\"\n" +
    "                        error=\"publication.errors.source\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Full Journal Name\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.full_journal_name\"\n" +
    "                        error=\"publication.errors.full_journal_name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Volume\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.volume\"\n" +
    "                        error=\"publication.errors.volume\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Issue\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.issue\"\n" +
    "                        error=\"publication.errors.issue\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Pages\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.pages\"\n" +
    "                        error=\"publication.errors.pages\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Authors\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.authors\"\n" +
    "                        error=\"publication.errors.authors\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Last Author\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.last_author\"\n" +
    "                        error=\"publication.errors.last_author\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Publication Type(s)\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.pub_types\"\n" +
    "                        error=\"publication.errors.pub_types\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"ISSN\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.issn\"\n" +
    "                        error=\"publication.errors.issn\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"ESSN\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.essn\"\n" +
    "                        error=\"publication.errors.essn\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"NLM Unique Id\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.nlm_unique_id\"\n" +
    "                        error=\"publication.errors.nlm_unique_id\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Languages\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.languages\"\n" +
    "                        error=\"publication.errors.languages\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Publication Status\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.pub_status\"\n" +
    "                        error=\"publication.errors.pub_status\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Record Status\">\n" +
    "                    <ut-input\n" +
    "                        model=\"publication.record_status\"\n" +
    "                        error=\"publication.errors.record_status\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Confirmed\">\n" +
    "                    <input\n" +
    "                        type=\"checkbox\"\n" +
    "                        ng-model=\"publication.confirmed\"\n" +
    "                    >\n" +
    "                    </input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Publication\" oid=\"publication.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"publication.id\">Save</a>\n" +
    "        <a ng-if=\"!publication.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/grid.html',
    "<div id=\"publication-grid-head-container\">\n" +
    "    <div id=\"ut-grid-container\">\n" +
    "        <div class=\"header\">\n" +
    "            <div class=\"header-section\">\n" +
    "                <div class=\"operations\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"operations-icon-export\"\n" +
    "                        title=\"Export\"\n" +
    "                        template=\"/app/partials/publication/csv_export.html\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"operations\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"operations-icon-share\"\n" +
    "                        title=\"Share\"\n" +
    "                        template=\"/app/partials/grid/share.html\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"header-primary\">\n" +
    "                    <h3>Publication Search</h3>\n" +
    "                    <a class=\"btn link-button-position\" href=\"/publication-sync/search\"> Import Publications </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"filters-container\">\n" +
    "            <div class=\"filters\">\n" +
    "                <ut-dropdown\n" +
    "                    title=\"Users: All\"\n" +
    "                    template=\"/app/partials/filters/users.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "                <ut-contains-text></ut-contains-text>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ui-view class=\"ut-fade\"></div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/publication/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"PublicationGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"publication({publicationId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-if=\"canConfirm()\" ng-click=\"openConfirm()\"><i class=\"icon-check\" />Confirm</li>\n" +
    "        <li ng-if=\"canBlacklist()\" ng-click=\"openBlacklist()\"><i class=\"icon-list\" />Blacklist</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"races[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"race in races\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"race({raceId:race.id})\" class=\"link\">{{race.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{race.name}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/race/grid_actions.html\"\n" +
    "                        data=\"race\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!races[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/race/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'RaceGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Race {{race.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this race?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Race Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ race.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon medium\" src=\"/images/utilities/inventory/race-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"raceGrid.search\">Races</li>\n" +
    "            <li class=\"end\">{{race.id}}</li>\n" +
    "            <li class=\"title\">{{race.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{race.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Race\"\n" +
    "                    oid=\"race.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Race\"\n" +
    "                    oid=\"race.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!race.id\">Create Race</h3>\n" +
    "    <h3 ng-if=\"race.id\">Edit Race {{ race.id }} - {{ race.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in race.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"race.name\"\n" +
    "                        error=\"race.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Race\" oid=\"race.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"race.id\">Save</a>\n" +
    "        <a ng-if=\"!race.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/race/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Race Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createRace()\" ng-if=\"canCreate()\">Create New Race</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/race/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"RaceGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"race({raceId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"repositories[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Title\"\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"repository in repositories\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"repository({repositoryId:repository.id})\" class=\"link\">{{repository.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                >\n" +
    "                    {{repository.title}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userId') > -1\"\n" +
    "                >\n" +
    "                    {{repository.User.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{repository.description}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/repository/grid_actions.html\"\n" +
    "                        data=\"repository\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!repositories[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/repository/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'MoleculeGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Repository {{repository.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this repository?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Repository Title\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ repository.title}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/repository/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/repository_icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"repositoryGrid.search\">Repositories</li>\n" +
    "            <li class=\"end\">{{repository.id}}</li>\n" +
    "            <li class=\"title\">{{repository.title}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" />Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Title:</td>\n" +
    "                            <td>{{repository.title}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Description\">\n" +
    "                {{repository.description}}\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Samples\" class=\"ut-position-relative\">\n" +
    "                <div ng-include=\"'app/partials/repository/repository_samples.html'\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Repository\"\n" +
    "                    oid=\"repository.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Repository\"\n" +
    "                    oid=\"repository.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <tr>\n" +
    "                            <td>Creator:</td>\n" +
    "                            <td>\n" +
    "                                <img ng-if=\"repository.userId\" ng-src=\"/profile/avatar/{{repository.userId}}\" />\n" +
    "                                {{repository.User.fullName}}\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{repository.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{repository.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!repository.id\">Create Repository</h3>\n" +
    "    <h3 ng-if=\"repository.id\">Edit Repository {{ repository.id }} - {{ repository.title }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in repository.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Title\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"repository.title\"\n" +
    "                        error=\"repository.errors.title\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"repository.description\"\n" +
    "                        error=\"repository.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Samples\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"sample\"\n" +
    "                        model=\"repository\"\n" +
    "                        foreign-key=\"sampleId\"\n" +
    "                        relation=\"RepositorySamples\"\n" +
    "                        access=\"repository.samples\"\n" +
    "                        placeholder=\"description\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Repository\" oid=\"repository.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"repository.id\">Save</a>\n" +
    "        <a ng-if=\"!repository.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/molecule/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Repository Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createRepository()\" ng-if=\"canCreate()\">Create New Repository</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"RepositoryGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"repository({repositoryId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/repository/repository_sample_form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Add Repository Samples</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <ut-control-group label=\"Samples\" class=\"ut-many-input-max-width\">\n" +
    "                <ut-one-to-many\n" +
    "                    resource=\"sample\"\n" +
    "                    model=\"repository\"\n" +
    "                    foreign-key=\"sampleId\"\n" +
    "                    relation=\"RepositorySamples\"\n" +
    "                    access=\"repository.samples\"\n" +
    "                    placeholder=\"description\"\n" +
    "                />\n" +
    "                </ut-one-to-many>\n" +
    "            </ut-control-group>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/repository/repository_samples.html',
    "<div id=\"repository-samples-container\" ng-controller=\"RepositorySampleController\">\n" +
    "    <div class=\"plus-icon\" ng-click=\"addSample()\">\n" +
    "        <i class=\"icon-pencil\" ng-click=\"createRepositorySample()\"></i>\n" +
    "    </div>\n" +
    "    <table>\n" +
    "        <thead>\n" +
    "            <th>Id</th>\n" +
    "            <th>Description</th>\n" +
    "            <th>Citations</th>\n" +
    "            <th>Frozen</th>\n" +
    "            <th># of Vials</th>\n" +
    "            <th>Sequence</th>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"repositorySample in repositorySamples\" class=\"ut-fade\">\n" +
    "                <td class=\"link\" ui-sref=\"sample({sampleId:repositorySample.Sample.id})\">{{repositorySample.Sample.id}}</td>\n" +
    "                <td>{{repositorySample.Sample.description}}</td>\n" +
    "                <td></td>\n" +
    "                <td>{{repositorySample.numVials ? \"Yes\" : \"No\"}}</td>\n" +
    "                <td ng-class=\"{link:repositorySample.numVials}\">\n" +
    "                    <a ng-if=\"repositorySample.numVials\" ui-sref=\"boxView.search({boxId:322, sampleId:repositorySample.Sample.id})\">{{repositorySample.numVials}}</a>\n" +
    "                    <a ng-if=\"!repositorySample.numVials\">{{repositorySample.numVials}}</a>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <a ng-if=\"repositorySample.hasSequence\" href=\"/seeq/fl-seqs\">Yes</a>\n" +
    "                    <a ng-if=\"!repositorySample.hasSequence\">No</a>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/research/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"research[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Title\"\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Content\"\n" +
    "                    ng-show=\"showColumns.indexOf('content') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Lab Core\"\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Category\"\n" +
    "                    ng-show=\"showColumns.indexOf('category') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"research in research\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"research({researchId:research.id})\" class=\"link\">{{research.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('title') > -1\"\n" +
    "                >\n" +
    "                    {{research.title}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('content') > -1\"\n" +
    "                >\n" +
    "                    {{research.content | truncate:200 }}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('lab_core') > -1\"\n" +
    "                >\n" +
    "                    {{research.LabCore.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('category') > -1\"\n" +
    "                >\n" +
    "                    {{research.category}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/research/grid_actions.html\"\n" +
    "                        data=\"research\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!research[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/research/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'VvcResearchGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/research/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Research {{research.title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this VVC research?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Research Text\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ research.content}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/research/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/research-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"adminCore\">Admin Core</li>\n" +
    "            <li ui-sref=\"researchGrid.search\">Research</li>\n" +
    "            <li class=\"end\">{{research.id}}</li>\n" +
    "            <li class=\"title\">{{research.title}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"openDelete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Lab Core:</td>\n" +
    "                            <td>{{research.LabCore.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Category:</td>\n" +
    "                            <td>{{research.category}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Content\">\n" +
    "                <div ng-bind-html=\"research.content\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Images\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"VvcResearch\"\n" +
    "                    oid=\"research.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"VvcResearch\"\n" +
    "                    oid=\"research.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/research/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!research.id\">Create Research</h3>\n" +
    "    <h3 ng-if=\"research.id\">Edit Research {{ research.id }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in research.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Title\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"research.title\"\n" +
    "                        error=\"research.errors.title\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Lab Core\">\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"research.LabCore\"\n" +
    "                        key=\"research.lab_core\"\n" +
    "                        resource=\"lab-core-typeahead\"\n" +
    "                        placeholder=\"name\"\n" +
    "                        error=\"research.errors.lab_core\"\n" +
    "                    >\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "\n" +
    "                <ut-control-group label=\"Category\" required>\n" +
    "                    <select ng-model=\"research.category\">\n" +
    "                        <option value=\"Viruses\">Viruses</option>\n" +
    "                        <option value=\"Immunology\">Immunology</option>\n" +
    "                        <option value=\"Vaccines\">Vaccines</option>\n" +
    "                        <option value=\"Experience\">Experience</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"research.errors.category\" class=\"ut-global-error\">{{research.errors.category}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Content\" required>\n" +
    "                    <textarea class=\"rich\" ng-model=\"research.content\" ut-rich-text-area></textarea>\n" +
    "                    <div ng-if=\"research.errors.content\" class=\"ut-global-error\">{{research.errors.content}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Image\">\n" +
    "                    <ut-attachment-uploader o=\"VvcResearch\" oid=\"research.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"research.id\">Save</a>\n" +
    "        <a ng-if=\"!research.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/research/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/research/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Research Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createResearch()\" ng-if=\"canCreate()\">Create Research</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/research/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"ResearchGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"research({researchId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sample/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"samples[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"description\"\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"u.u_first_name\"\n" +
    "                    label=\"User\"\n" +
    "                    ng-show=\"showColumns.indexOf('userFullName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"date\"\n" +
    "                    label=\"Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('date') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"aliases\"\n" +
    "                    label=\"Aliases\"\n" +
    "                    ng-show=\"showColumns.indexOf('aliases') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"d.aliases\"\n" +
    "                    label=\"Donor\"\n" +
    "                    ng-show=\"showColumns.indexOf('donorAliases') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"p.description\"\n" +
    "                    label=\"Protocol\"\n" +
    "                    ng-show=\"showColumns.indexOf('protocolName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"st.name\"\n" +
    "                    label=\"Sample Type\"\n" +
    "                    ng-show=\"showColumns.indexOf('sampleTypeName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"m.name\"\n" +
    "                    label=\"Molecule\"\n" +
    "                    ng-show=\"showColumns.indexOf('moleculeName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"tg.name\"\n" +
    "                    label=\"Tag\"\n" +
    "                    ng-show=\"showColumns.indexOf('tagName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"pt.description\"\n" +
    "                    label=\"Parent\"\n" +
    "                    ng-show=\"showColumns.indexOf('parentDescription') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"trg.name\"\n" +
    "                    label=\"Target\"\n" +
    "                    ng-show=\"showColumns.indexOf('targetName') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"created_at\"\n" +
    "                    label=\"Created At\"\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"updated_at\"\n" +
    "                    label=\"Updated At\"\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th class=\"actions\"></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"sample in samples\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"sample({sampleId:sample.id})\" class=\"link\">{{sample.id}}</td>\n" +
    "                <td\n" +
    "                    ui-sref=\"sample({sampleId:sample.id})\"\n" +
    "                    class=\"link\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{sample.description}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('userFullName') > -1\"\n" +
    "                >\n" +
    "                    {{sample.userFullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('date') > -1\"\n" +
    "                >\n" +
    "                    {{sample.date | date:'MM/dd/yy'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('aliases') > -1\"\n" +
    "                >\n" +
    "                    {{sample.aliases}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('donorAliases') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"donor({donorId:sample.donor_id})\">{{sample.donorAliases | truncate:40}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('protocolName') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ng-href=\"/protocol/{{sample.protocol_id}}\">{{sample.protocolName}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('sampleTypeName') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"sampleType({sampleTypeId:sample.sample_type_id})\" class=\"flat-link\" class=\"ut-link-cursor\">{{sample.sampleTypeName}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('moleculeName') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"molecule({moleculeId:sample.molecule_id})\" class=\"flat-link\">{{sample.moleculeName}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('tagName') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"tag({tagId:sample.tag_id})\" class=\"flat-link\" class=\"ut-link-cursor\">{{sample.tagName}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('parentDescription') > -1\"\n" +
    "                >\n" +
    "                    <a class=\"flat-link\" ui-sref=\"sample({sampleId:sample.parent_id})\">{{sample.parentDescription}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('targetName') > -1\"\n" +
    "                >\n" +
    "                    <a ui-sref=\"target({targetId:sample.target_id})\" class=\"flat-link\">{{sample.targetName}}</a>\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('created_at') > -1\"\n" +
    "                >\n" +
    "                    {{sample.created_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('updated_at') > -1\"\n" +
    "                >\n" +
    "                    {{sample.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/sample/grid_actions.html\"\n" +
    "                        data=\"sample\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!samples[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/sample/batch_upload.html',
    "<form action=\"/sample/batch-upload\" method=\"post\" enctype=\"multipart/form-data\">\n" +
    "    <input name=\"sample_file\" type=\"file\"></input>\n" +
    "    <input type=\"submit\" value=\"batch upload\"></input>\n" +
    "</form>\n" +
    "<form action=\"/sample/batch-alias-fix\" method=\"post\" enctype=\"multipart/form-data\">\n" +
    "    <input name=\"sample_file\" type=\"file\"></input>\n" +
    "    <input type=\"submit\" value=\"batch alias fix\"></input>\n" +
    "</form>\n"
  );


  $templateCache.put('/app/partials/sample/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'SampleGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sample/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Sample {{sample.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this sample?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Sample Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ sample.description }}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon\" src=\"/images/utilities/inventory/sample-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"sampleGrid.search\">Samples</li>\n" +
    "            <li class=\"end\">Sample {{sample.id}}</li>\n" +
    "            <li class=\"title\">{{sample.description}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <ut-dropdown\n" +
    "                title=\"More\"\n" +
    "                template=\"/app/partials/sample/sample_detail_more_dropdown.html\"\n" +
    "                data=\"sample\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Sample Type:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"sampleType({sampleTypeId:sample.SampleType.id})\" class=\"flat-link\" class=\"ut-link-cursor\">{{sample.SampleType.name}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Target:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"target({targetId:sample.Target.id})\" class=\"flat-link\">{{sample.Target.name}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Molecule:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"molecule({moleculeId:sample.Molecule.id})\" class=\"flat-link\">{{sample.Molecule.name}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Tag:</td>\n" +
    "                            <td>\n" +
    "                                <a ui-sref=\"tag({tagId:sample.Tag.id})\" class=\"flat-link\" class=\"ut-link-cursor\">{{sample.Tag.name}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Parent:</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"flat-link\" ui-sref=\"sample({sampleId:sample.Parent.id})\">{{sample.Parent.description}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Aliases:</td>\n" +
    "                            <td>{{sample.aliases}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Protocol:</td>\n" +
    "                            <td>\n" +
    "                                <a class=\"flat-link\" ui-sref=\"protocol({protocolId:sample.Protocol.id})\">{{sample.Protocol.protocol}}</a>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Sample\"\n" +
    "                    oid=\"sample.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Notes\">\n" +
    "                <div ng-bind-html=\"sample.notes\"></div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Sample\"\n" +
    "                    oid=\"sample.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"People\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Creator:</td>\n" +
    "                        <td>\n" +
    "                            <img ng-if=\"sample.user_id\" ng-src=\"/profile/avatar/{{sample.user_id}}\" />\n" +
    "                            {{sample.User.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Donor:</td>\n" +
    "                        <td>\n" +
    "                            <a class=\"flat-link\" ui-sref=\"donor({donorId:sample.Donor.id})\">{{sample.Donor.toString}}</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Created:</td>\n" +
    "                        <td>{{ sample.created_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Updated:</td>\n" +
    "                        <td>{{ sample.updated_at | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Location\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr ng-repeat=\"boxWithSample in boxesWithSample\">\n" +
    "                        <td>Box {{boxWithSample.id}}:</td>\n" +
    "                        <td>\n" +
    "                            <a ui-sref=\"boxView.search({boxId:boxWithSample.id, sampleId: sample.id})\">\n" +
    "                                {{boxWithSample.heading}}\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td><i class=\"icon-plus\" /></td>\n" +
    "                        <td><a ui-sref=\"boxView.search({boxId:322, sampleId:sample.id})\" class=\"link\">Add to box</a></td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"VIMs\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td style=\"vertical-align: top\">VIM Orders:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimOrder in sample.vimOrders\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/order/{{vimOrder.id}}\">\n" +
    "                                        {{\"VIM Order \" + vimOrder.id + \" \" + vimOrder.vim_order_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td style=\"vertical-align: top\">VIM Shipments :</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"vimSent in sample.vimSents\">\n" +
    "                                    <a ng-if=\"!$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description + \",&nbsp;\" }}\n" +
    "                                    </a>\n" +
    "                                    <a ng-if=\"$last\" class=\"flat-link\" ng-href=\"/vim/sent/{{vimSent.id}}\">\n" +
    "                                        {{\"VIM Sent \" + vimSent.id + \" \" + vimSent.vim_sent_description}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Related Publications\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td style=\"vertical-align: top\">Publications:</td>\n" +
    "                        <td>\n" +
    "                            <ul>\n" +
    "                                <li ng-repeat=\"publication in sample.publications\" class=\"publication\">\n" +
    "                                    <a class=\"flat-link\" ui-sref=\"publication({publicationId:publication.id})\">\n" +
    "                                        {{publication.title | truncate:100}}\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!sample.id\">Create Sample</h3>\n" +
    "    <h3 ng-if=\"sample.id\">Edit Sample {{ sample.id }} - {{ sample.description }}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "        <div class=\"space-medium\">\n" +
    "\n" +
    "            <ut-control-group>\n" +
    "                <div ng-repeat=\"globalError in sample.globalErrors\" class=\"ut-global-error\">\n" +
    "                    {{globalError}}\n" +
    "                </div>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"User\" required>\n" +
    "                <ut-typeahead\n" +
    "                    model=\"sample.User\"\n" +
    "                    key=\"sample.user_id\"\n" +
    "                    resource=\"user\"\n" +
    "                    resource-primary-key=\"u_id\"\n" +
    "                    placeholder=\"fullName\"\n" +
    "                    template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                    disabled\n" +
    "                    error=\"sample.errors.user_id\"\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Date\">\n" +
    "                <input\n" +
    "                    type=\"text\"\n" +
    "                    datepicker-popup=\"M/dd/yyyy\"\n" +
    "                    ng-model=\"sample.date\"\n" +
    "                    class=\"ut-input\"\n" +
    "                />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Name\" required>\n" +
    "                <ut-input\n" +
    "                    model=\"sample.description\"\n" +
    "                    error=\"sample.errors.description\"\n" +
    "                    disabled=\"sampleDescriptionDisabled\"\n" +
    "                >\n" +
    "                </ut-input>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Aliases\">\n" +
    "                <textarea type=\"text\" ng-model=\"sample.aliases\" class=\"span5 ut-typeahead\" />\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Donor\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"sample.Donor\"\n" +
    "                    key=\"sample.donor_id\"\n" +
    "                    resource=\"donor\"\n" +
    "                    placeholder=\"toString\"\n" +
    "                    error=\"sample.errors.donor_id\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Protocol\">\n" +
    "                <ut-typeahead\n" +
    "                    model=\"sample.Protocol\"\n" +
    "                    key=\"sample.protocol_id\"\n" +
    "                    resource=\"protocol\"\n" +
    "                    placeholder=\"protocol\"\n" +
    "                    error=\"sample.errors.protocol_id\"\n" +
    "                >\n" +
    "                </ut-typeahead>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <ut-control-group label=\"Repositories\" class=\"ut-many-input-max-width\">\n" +
    "                <ut-one-to-many\n" +
    "                    resource=\"repository\"\n" +
    "                    model=\"sample\"\n" +
    "                    foreign-key=\"repositoryId\"\n" +
    "                    relation=\"RepositorySamples\"\n" +
    "                    access=\"sample.repositories\"\n" +
    "                    placeholder=\"title\"\n" +
    "                />\n" +
    "                </ut-one-to-many>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <table>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <ut-control-group label=\"Preset\">\n" +
    "                            <ut-typeahead\n" +
    "                                model=\"preset\"\n" +
    "                                resource=\"preset-typeahead\"\n" +
    "                                placeholder=\"name\"\n" +
    "                                key=\"preset_id\"\n" +
    "                                callback=\"presetSelect\"\n" +
    "                                disabled=\"sampleClassificationDisabled\"\n" +
    "                            >\n" +
    "                            </ut-typeahead>\n" +
    "                            <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                        </ut-control-group>\n" +
    "                    </td>\n" +
    "                    <td class=\"classification-c2\">\n" +
    "                        <div>\n" +
    "\n" +
    "                            <ut-control-group label=\"Sample Type\">\n" +
    "                                <ut-typeahead\n" +
    "                                    model=\"sample.SampleType\"\n" +
    "                                    key=\"sample.sample_type_id\"\n" +
    "                                    resource=\"sample-type-typeahead\"\n" +
    "                                    placeholder=\"name\"\n" +
    "                                    error=\"sample.errors.sample_type_id\"\n" +
    "                                    callback=\"classify\"\n" +
    "                                    disabled=\"sampleClassificationDisabled\"\n" +
    "                                >\n" +
    "                                </ut-typeahead>\n" +
    "                                <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                            </ut-control-group>\n" +
    "\n" +
    "                            <ut-control-group label=\"Molecule\">\n" +
    "                                <ut-typeahead\n" +
    "                                    model=\"sample.Molecule\"\n" +
    "                                    key=\"sample.molecule_id\"\n" +
    "                                    resource=\"molecule-typeahead\"\n" +
    "                                    placeholder=\"name\"\n" +
    "                                    error=\"sample.errors.molecule_id\"\n" +
    "                                    callback=\"classify\"\n" +
    "                                    disabled=\"sampleClassificationDisabled\"\n" +
    "                                >\n" +
    "                                </ut-typeahead>\n" +
    "                                <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                            </ut-control-group>\n" +
    "\n" +
    "                            <ut-control-group label=\"Tag\">\n" +
    "                                <ut-typeahead\n" +
    "                                    model=\"sample.Tag\"\n" +
    "                                    key=\"sample.tag_id\"\n" +
    "                                    resource=\"tag-typeahead\"\n" +
    "                                    placeholder=\"name\"\n" +
    "                                    error=\"sample.errors.tag_id\"\n" +
    "                                    callback=\"classify\"\n" +
    "                                    disabled=\"sampleClassificationDisabled\"\n" +
    "                                >\n" +
    "                                </ut-typeahead>\n" +
    "                                <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                            </ut-control-group>\n" +
    "\n" +
    "                            <ut-control-group label=\"Target\">\n" +
    "                                <ut-typeahead\n" +
    "                                    model=\"sample.Target\"\n" +
    "                                    key=\"sample.target_id\"\n" +
    "                                    resource=\"target-typeahead\"\n" +
    "                                    placeholder=\"name\"\n" +
    "                                    error=\"sample.errors.target_id\"\n" +
    "                                    callback=\"classify\"\n" +
    "                                    disabled=\"sampleClassificationDisabled\"\n" +
    "                                >\n" +
    "                                </ut-typeahead>\n" +
    "                                <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                            </ut-control-group>\n" +
    "\n" +
    "                            <ut-control-group label=\"Parent\">\n" +
    "                                <ut-typeahead\n" +
    "                                    model=\"sample.Parent\"\n" +
    "                                    key=\"sample.parent_id\"\n" +
    "                                    resource=\"sample\"\n" +
    "                                    placeholder=\"description\"\n" +
    "                                    error=\"sample.errors.parent_id\"\n" +
    "                                    callback=\"classify\"\n" +
    "                                    disabled=\"sampleClassificationDisabled\"\n" +
    "                                >\n" +
    "                                </ut-typeahead>\n" +
    "                                <ut-help-icon link=\"/sample-classification-help\"></ut-help-icon>\n" +
    "                            </ut-control-group>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group label=\"Notes\">\n" +
    "                <textarea class=\"rich\" ng-model=\"sample.notes\" ut-rich-text-area></textarea>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"VIM Orders\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"vim-order\"\n" +
    "                        model=\"sample\"\n" +
    "                        foreign-key=\"vimOrderId\"\n" +
    "                        relation=\"SampleVimOrders\"\n" +
    "                        access=\"sample.vimOrders\"\n" +
    "                        placeholder=\"placeholder\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"VIM Shipments\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"vim-sent\"\n" +
    "                        model=\"sample\"\n" +
    "                        foreign-key=\"vimSentId\"\n" +
    "                        relation=\"SampleVimSents\"\n" +
    "                        access=\"sample.vimSents\"\n" +
    "                        placeholder=\"placeholder\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Related Publications\" class=\"ut-many-input-max-width\">\n" +
    "                    <ut-one-to-many\n" +
    "                        resource=\"publication\"\n" +
    "                        model=\"sample\"\n" +
    "                        foreign-key=\"pubMedPublicationId\"\n" +
    "                        relation=\"SamplePublications\"\n" +
    "                        access=\"sample.publications\"\n" +
    "                        placeholder=\"title\"\n" +
    "                    />\n" +
    "                    </ut-one-to-many>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "            <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "            <ut-control-group label=\"Attachments\">\n" +
    "                <ut-attachment-uploader o=\"Sample\" oid=\"sample.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"sample.id\">Save</a>\n" +
    "        <a ng-if=\"!sample.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/sample/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Sample Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createSample()\">Create Sample</button>\n" +
    "                <button class=\"btn\" ng-click=\"createFusionSample()\">Create Fusion Samples</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"operations\">\n" +
    "            <button class=\"btn\"><i class=\"icon-list\"></i></button>\n" +
    "        </div>\n" +
    "        <div class=\"filters\">\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Sample Type: All\"\n" +
    "                template=\"/app/partials/filters/sample_types.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Tag: All\"\n" +
    "                template=\"/app/partials/filters/tags.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Molecule: All\"\n" +
    "                template=\"/app/partials/filters/molecules.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Protocol: All\"\n" +
    "                template=\"/app/partials/filters/protocols.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Donor: All\"\n" +
    "                template=\"/app/partials/filters/donors.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Target: All\"\n" +
    "                template=\"/app/partials/filters/targets.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Users: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Parent: All\"\n" +
    "                template=\"/app/partials/filters/samples.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"From Donors with Immunities: All\"\n" +
    "                template=\"/app/partials/filters/fromDonorsWithImmunities.html\"\n" +
    "                class=\"human-specimen-grid\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-dropdown\n" +
    "                title=\"Created At: All\"\n" +
    "                template=\"/app/partials/filters/created_at.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"SampleGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"sample({sampleId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-click=\"openRepository()\"><i class=\"icon-plus\" />Add to Repo</li>\n" +
    "        <li class=\"divider\"></li>\n" +
    "        <li ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/repository.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Add Sample {{sample.id}} to Repositories</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Please select the repositories</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Repositories\" class=\"ut-many-input-max-width\">\n" +
    "                <ut-one-to-many\n" +
    "                    resource=\"repository\"\n" +
    "                    model=\"sample\"\n" +
    "                    foreign-key=\"repositoryId\"\n" +
    "                    relation=\"RepositorySamples\"\n" +
    "                    access=\"sample.repositories\"\n" +
    "                    placeholder=\"title\"\n" +
    "                />\n" +
    "                </ut-one-to-many>\n" +
    "            </ut-control-group>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a>Save</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sample/sample_detail_more_dropdown.html',
    "<div id=\"sample-detail-more\" ng-controller=\"SampleDetailMoreController\">\n" +
    "    <ul>\n" +
    "        <li ng-click=\"addToRepository()\"><i class=\"icon-plus\" />Add To Repository</li>\n" +
    "        <li ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/sampleType/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"sampleTypes[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"sampleType in sampleTypes\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"sampleType({sampleTypeId:sampleType.id})\" class=\"link\">{{sampleType.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{sampleType.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{sampleType.description}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/sampleType/grid_actions.html\"\n" +
    "                        data=\"sampleType\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!sampleTypes[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/sampleType/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'SampleTypeGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sampleType/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Sample Type {{sampleType.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this Sample Type?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Sample Type Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ sampleType.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sampleType/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon medium\" src=\"/images/utilities/inventory/sample-type-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"sampleTypeGrid.search\">Sample Types</li>\n" +
    "            <li class=\"end\">{{sampleType.id}}</li>\n" +
    "            <li class=\"title\">{{sampleType.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{sampleType.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{sampleType.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"SampleType\"\n" +
    "                    oid=\"sampleType.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"SampleType\"\n" +
    "                    oid=\"sampleType.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sampleType/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!sampleType.id\">Create Sample Type</h3>\n" +
    "    <h3 ng-if=\"sampleType.id\">Edit Sample Type {{ sampleType.id }} - {{ sampleType.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in sampleType.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"sampleType.name\"\n" +
    "                        error=\"sampleType.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"sampleType.description\"\n" +
    "                        error=\"sampleType.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"SampleType\" oid=\"sampleType.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"sampleType.id\">Save</a>\n" +
    "        <a ng-if=\"!sampleType.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sampleType/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/sampleType/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Sample Type Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createSampleType()\" ng-if=\"canCreate()\">Create New Sample Type</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/sampleType/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"SampleTypeGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"sampleType({sampleTypeId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"species[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Common Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('common_name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"species in species\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"species({speciesId:species.id})\" class=\"link\">{{species.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{species.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('common_name') > -1\"\n" +
    "                >\n" +
    "                    {{species.common_name}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/species/grid_actions.html\"\n" +
    "                        data=\"species\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!species[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/species/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'SpeciesGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Species {{species.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this species?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"species Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ species.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/species-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"speciesGrid.search\">Species</li>\n" +
    "            <li class=\"end\">{{species.id}}</li>\n" +
    "            <li class=\"title\">{{species.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{species.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Common Name:</td>\n" +
    "                            <td>{{species.common_name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Species\"\n" +
    "                    oid=\"species.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Species\"\n" +
    "                    oid=\"species.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!species.id\">Create Species</h3>\n" +
    "    <h3 ng-if=\"species.id\">Edit Species {{ species.id }} - {{ species.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in species.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"species.name\"\n" +
    "                        error=\"species.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Common name\">\n" +
    "                    <ut-input\n" +
    "                        model=\"species.common_name\"\n" +
    "                        error=\"species.errors.common_name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Species\" oid=\"species.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"species.id\">Save</a>\n" +
    "        <a ng-if=\"!species.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/species/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Species Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createSpecies()\" ng-if=\"canCreate()\">Create New Species</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/species/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"SpeciesGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"species({speciesId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"tags[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"tag in tags\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"tag({tagId:tag.id})\" class=\"link\">{{tag.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{tag.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{tag.description}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/tag/grid_actions.html\"\n" +
    "                        data=\"tag\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!tags[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/tag/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'TagGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Tag {{tag.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this Tag?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Tag Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ tag.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/tag-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"tagGrid.search\">Tags</li>\n" +
    "            <li class=\"end\">{{tag.id}}</li>\n" +
    "            <li class=\"title\">{{tag.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{tag.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{tag.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Tag\"\n" +
    "                    oid=\"tag.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Tag\"\n" +
    "                    oid=\"tag.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!tag.id\">Create Tag</h3>\n" +
    "    <h3 ng-if=\"tag.id\">Edit Tag {{ tag.id }} - {{ tag.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in tag.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"tag.name\"\n" +
    "                        error=\"tag.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"tag.description\"\n" +
    "                        error=\"tag.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Tag\" oid=\"tag.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"tag.id\">Save</a>\n" +
    "        <a ng-if=\"!tag.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/tag/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Tag Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createTag()\" ng-if=\"canCreate()\">Create New Tag</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/tag/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"TagGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"tag({tagId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/target/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"targets[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Abbreviation\"\n" +
    "                    ng-show=\"showColumns.indexOf('abbreviation') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Name\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Description\"\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"target in targets\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"target({targetId:target.id})\" class=\"link\">{{target.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('abbreviation') > -1\"\n" +
    "                >\n" +
    "                    {{target.abbreviation}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{target.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('description') > -1\"\n" +
    "                >\n" +
    "                    {{target.description}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/target/grid_actions.html\"\n" +
    "                        data=\"target\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!targets[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>\n"
  );


  $templateCache.put('/app/partials/target/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'TargetGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/target/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Target {{target.id}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this target?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Target Name\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ target.name}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/target/detail.html',
    "<div id=\"ut-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/target-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"croweLab\">Crowelab</li>\n" +
    "            <li ui-sref=\"targetGrid.search\">Targets</li>\n" +
    "            <li class=\"end\">{{target.id}}</li>\n" +
    "            <li class=\"title\">{{target.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "            <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Abbreviation:</td>\n" +
    "                            <td>{{target.abbreviation}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Name:</td>\n" +
    "                            <td>{{target.name}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Description:</td>\n" +
    "                            <td>{{target.description}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"Target\"\n" +
    "                    oid=\"target.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"Target\"\n" +
    "                    oid=\"target.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/app/partials/target/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!target.id\">Create Target</h3>\n" +
    "    <h3 ng-if=\"target.id\">Edit Target {{ target.id }} - {{ target.name }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in target.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Abbreviation\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"target.abbreviation\"\n" +
    "                        error=\"target.errors.abbreviation\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"target.name\"\n" +
    "                        error=\"target.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Description\">\n" +
    "                    <ut-input\n" +
    "                        model=\"target.description\"\n" +
    "                        error=\"target.errors.description\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"Target\" oid=\"target.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"target.id\">Save</a>\n" +
    "        <a ng-if=\"!target.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/target/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/target/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Target Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createTarget()\" ng-if=\"canCreate()\">Create New Target</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/target/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"TargetGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"target({targetId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"travelLogs[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"taf\"\n" +
    "                    ng-show=\"showColumns.indexOf('taf') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Traveler\"\n" +
    "                    ng-show=\"showColumns.indexOf('traveler_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Event\"\n" +
    "                    ng-show=\"showColumns.indexOf('event') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Location\"\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"departure_date\"\n" +
    "                    label=\"Departure Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('departure_date') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    sort-field=\"return_date\"\n" +
    "                    label=\"Return Date\"\n" +
    "                    ng-show=\"showColumns.indexOf('return_date') > -1\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Purpose\"\n" +
    "                    ng-show=\"showColumns.indexOf('purpose') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Project Center\"\n" +
    "                    ng-show=\"showColumns.indexOf('project_center') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Estimated Cost\"\n" +
    "                    ng-show=\"showColumns.indexOf('estimated_cost') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"RBV Whole\"\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_whole') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"RBV in Part\"\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_in_part') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"RBV non VUMC\"\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_non_vumc') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Actual Cost\"\n" +
    "                    ng-show=\"showColumns.indexOf('actual_cost') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Actual Center\"\n" +
    "                    ng-show=\"showColumns.indexOf('actual_center') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Comments\"\n" +
    "                    ng-show=\"showColumns.indexOf('comments') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Status\"\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Approver ID\"\n" +
    "                    ng-show=\"showColumns.indexOf('approver_id') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"travelLog in travelLogs\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"travelLog({travelLogId:travelLog.id})\" class=\"link\">{{travelLog.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('taf') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.taf}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('traveler_id') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.Traveler.fullName}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('event') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.event}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('location') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.location}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('departure_date') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.departure_date}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('return_date') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.return_date}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('purpose') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.purpose}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('project_center') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.project_center}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('estimated_cost') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.estimated_cost}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_whole') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.rbv_whole}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_in_part') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.rbv_in_part}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('rbv_non_vumc') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.rbv_in_part}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('actual_cost') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.actual_cost}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('actual_center') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.actual_center}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('comments') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.comments}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('status') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.status}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('approver_id') > -1\"\n" +
    "                >\n" +
    "                    {{travelLog.Approver.fullName}}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/travelLog/grid_actions.html\"\n" +
    "                        data=\"travelLog\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!travelLogs[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/travelLog/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'TravelLogGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Travel Log {{travelLog.event}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this VVC Travel Log?</p>\n" +
    "            <p class=\"text-error\">Approved travel requests can't be deleted.</p>\n" +
    "            <ut-control-group label=\"Content\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ travelLog.Traveler.fullName}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/travel-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"adminCore\">Admin Core</li>\n" +
    "            <li ui-sref=\"travelLogGrid.search\">Travel Logs</li>\n" +
    "            <li class=\"end\">{{travelLog.id}}</li>\n" +
    "            <li class=\"title\">{{travelLog.event}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"openDelete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column\">\n" +
    "                <ut-edit-module title=\"Details\">\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>TAF:</td>\n" +
    "                            <td>{{travelLog.taf}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Traveler:</td>\n" +
    "                            <td>{{travelLog.Traveler.fullName}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Event:</td>\n" +
    "                            <td>{{travelLog.event}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Location:</td>\n" +
    "                            <td>{{travelLog.location}}</td>\n" +
    "                        </tr>\n" +
    "                         <tr>\n" +
    "                            <td>Purpose:</td>\n" +
    "                            <td>{{travelLog.purpose}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Projected Center:</td>\n" +
    "                            <td>{{travelLog.projected_center}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"detail-column\">\n" +
    "                    <table class=\"detail\">\n" +
    "                        <tr>\n" +
    "                            <td>Estimated Cost:</td>\n" +
    "                            <td>{{travelLog.estimated_cost}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>RBV Whole:</td>\n" +
    "                            <td>{{travelLog.rbv_whole}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>RBV in part:</td>\n" +
    "                            <td>{{travelLog.rbv_in_part}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>RBV non VUMC:</td>\n" +
    "                            <td>{{travelLog.rbv_non_vumc}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Actual Cost:</td>\n" +
    "                            <td>{{travelLog.actual_cost}}</td>\n" +
    "                        </tr>\n" +
    "                        <tr>\n" +
    "                            <td>Actual Center:</td>\n" +
    "                            <td>{{travelLog.actual_center}}</td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Comments\">\n" +
    "                <div ng-bind-html=\"travelLog.comments\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"TravelLog\"\n" +
    "                    oid=\"travelLog.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"TravelLog\"\n" +
    "                    oid=\"travelLog.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"side-column\">\n" +
    "            <ut-edit-module title=\"Approval\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Status:</td>\n" +
    "                        <td>\n" +
    "                            {{travelLog.status}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>Approver:</td>\n" +
    "                        <td>\n" +
    "                            {{travelLog.Approver.fullName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "            <ut-edit-module title=\"Dates\">\n" +
    "                <table class=\"detail\">\n" +
    "                    <tr>\n" +
    "                        <td>Departure Date:</td>\n" +
    "                        <td>{{ travelLog.departure_date | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr>\n" +
    "                                        <tr>\n" +
    "                        <td>Return Date:</td>\n" +
    "                        <td>{{ travelLog.return_date | utDate | date:'MM/dd/yy @ h:mma'}}</td>\n" +
    "                    </tr\n" +
    "                </table>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!travelLog.id\">Create Travel Log</h3>\n" +
    "    <h3 ng-if=\"travelLog.id\">Edit Travel Log {{ travelLog.id }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in travelLog.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Traveler\" required>\n" +
    "                    <ut-typeahead\n" +
    "                        model=\"travelLog.Traveler\"\n" +
    "                        key=\"travelLog.traveler_id\"\n" +
    "                        resource=\"user\"\n" +
    "                        resource-primary-key=\"u_id\"\n" +
    "                        placeholder=\"fullName\"\n" +
    "                        template-url=\"/app/partials/typeahead/user.html\"\n" +
    "                        disabled\n" +
    "                        error=\"travelLog.errors.traveler_id\"\n" +
    "                    </ut-typeahead>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Event\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.event\"\n" +
    "                        error=\"travelLog.errors.event\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Location\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.location\"\n" +
    "                        error=\"travelLog.errors.location\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Departure Date\" required>\n" +
    "                     <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"travelLog.departure_date\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                    <div ng-if=\"travelLog.errors.departure_date\" class=\"ut-global-error\">{{travelLog.errors.departure_date}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Return Date\" required>\n" +
    "                    <input\n" +
    "                        type=\"text\"\n" +
    "                        datepicker-popup=\"M/dd/yyyy\"\n" +
    "                        ng-model=\"travelLog.return_date\"\n" +
    "                        class=\"ut-input\"\n" +
    "                    />\n" +
    "                    <div ng-if=\"travelLog.errors.return_date\" class=\"ut-global-error\">{{travelLog.errors.return_date}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Status\" required>\n" +
    "                    <select ng-model=\"travelLog.status\">\n" +
    "                        <option value=\"pending\">Pending</option>\n" +
    "                        <option value=\"approved\">Approved</option>\n" +
    "                        <option value=\"denied\">Denied</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"travelLog.errors.status\" class=\"ut-global-error\">{{travelLog.errors.status}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Approver\" required>\n" +
    "                    <select ng-model=\"travelLog.approver_id\">\n" +
    "                        <option value=\"109\">Gay Nell Krauss</option>\n" +
    "                        <option value=\"1\">James Crowe</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"travelLog.errors.approver_id\" class=\"ut-global-error\">{{travelLog.errors.approver_id}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Purpose\" required>\n" +
    "                    <select ng-model=\"travelLog.purpose\">\n" +
    "                        <option value=\"presenter\">Presenter</option>\n" +
    "                        <option value=\"organizer\">Organizer</option>\n" +
    "                        <option value=\"attendee\">Attendee</option>\n" +
    "                    </select>\n" +
    "                    <div ng-if=\"travelLog.errors.purpose\" class=\"ut-global-error\">{{travelLog.errors.purpose}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Projected Center\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.projected_center\"\n" +
    "                        error=\"travelLog.errors.projected_center\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Estimated Cost\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.estimated_cost\"\n" +
    "                        error=\"travelLog.errors.estimated_cost\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"RBV Whole\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.rbv_whole\"\n" +
    "                        error=\"travelLog.errors.rbv_whole\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"RBV in Part\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.rbv_in_part\"\n" +
    "                        error=\"travelLog.errors.rbv_in_part\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"RBV non VUMC\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.rbv_non_vumc\"\n" +
    "                        error=\"travelLog.errors.rbv_non_vumc\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Actual Cost\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.actual_cost\"\n" +
    "                        error=\"travelLog.errors.actual_cost\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Actual Center\">\n" +
    "                    <ut-input\n" +
    "                        model=\"travelLog.actual_center\"\n" +
    "                        error=\"travelLog.errors.actual_center\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Comments\">\n" +
    "                    <textarea class=\"rich ut-big-text-input\" ng-model=\"travelLog.comments\"></textarea>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"TravelLog\" oid=\"travelLog.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"travelLog.id\">Save</a>\n" +
    "        <a ng-if=\"!travelLog.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/travelLog/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Travel Log Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createTravelLog()\" ng-if=\"canCreate()\">Create Travel Log</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-dropdown\n" +
    "                title=\"Users: All\"\n" +
    "                template=\"/app/partials/filters/users.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/travelLog/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"TravelLogGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"travelLog({travelLogId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/typeahead/user.html',
    "<a tabindex=\"-1\">\n" +
    "\t<span>\n" +
    "\t\t{{ match.model.u_first_name + ' ' + match.model.u_last_name }}\t\n" +
    "\t</span>\n" +
    "</a>"
  );


  $templateCache.put('/app/partials/webText/_grid_table.html',
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_top.html'\"></div>\n" +
    "<div id=\"ut-grid-table-container\">\n" +
    "    <table ng-if=\"webTexts[0].gridParams.total\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th ut-grid-header sort-field=\"id\" label=\"Id\"></th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Title\"\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th\n" +
    "                    ut-grid-header\n" +
    "                    label=\"Value\"\n" +
    "                    ng-show=\"showColumns.indexOf('value') > -1\"\n" +
    "                    allow-sort=\"false\"\n" +
    "                >\n" +
    "                </th>\n" +
    "                <th></th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"webText in webTexts\" class=\"ut-fade\">\n" +
    "                <td ui-sref=\"webText({webTextId:webText.id})\" class=\"link\">{{webText.id}}</td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('name') > -1\"\n" +
    "                >\n" +
    "                    {{webText.name}}\n" +
    "                </td>\n" +
    "                <td\n" +
    "                    ng-show=\"showColumns.indexOf('value') > -1\"\n" +
    "                >\n" +
    "                    {{webText.value | truncate:200 }}\n" +
    "                </td>\n" +
    "                <td class=\"actions\">\n" +
    "                    <ut-dropdown\n" +
    "                        icon=\"icon-cog\"\n" +
    "                        template=\"/app/partials/webText/grid_actions.html\"\n" +
    "                        data=\"webText\"\n" +
    "                    >\n" +
    "                    </ut-dropdown>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div ng-if=\"!webTexts[0].gridParams.total\" class=\"no-results\">\n" +
    "        No Results Found\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"ut-fade\" ng-include=\"'/app/partials/grid/pagination_bottom.html'\"></div>"
  );


  $templateCache.put('/app/partials/webText/csv_export.html',
    "<div id=\"csv-export-container\" ng-controller=\"ExportController\">\n" +
    "    <ul class=\"filters-users-list\">\n" +
    "        <li>\n" +
    "            <a ng-click=\"csvPost('csv', 'VvcWebTextGrid')\">CSV</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/webText/delete.html',
    "<div class=\"modal-header\">\n" +
    "    <h3>Delete Web Text {{webText.name}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ut-modal-body>\n" +
    "    <div id=\"ut-comment-modal\">\n" +
    "        <div class=\"form-horizontal\">\n" +
    "            <p class=\"text-error\">Are you sure you want to delete this VVC WebText?</p>\n" +
    "\n" +
    "            <ut-control-group label=\"Content\" class=\"created\">\n" +
    "                <input type=\"hidden\" />\n" +
    "                {{ webText.value}}\n" +
    "            </ut-control-group>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" ng-click=\"delete()\" style=\"margin-right:5px;\">\n" +
    "        <a>Delete</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/webText/detail.html',
    "<div id=\"ut-detail-container\" class=\"ut-classification-detail-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"operations\">\n" +
    "            <ut-dropdown\n" +
    "                icon=\"operations-icon-share\"\n" +
    "                title=\"Share\"\n" +
    "                template=\"/app/partials/grid/share.html\"\n" +
    "            >\n" +
    "            </ut-dropdown>\n" +
    "        </div>\n" +
    "        <img class=\"header-icon big\" src=\"/images/utilities/inventory/web-text-icon.png\" />\n" +
    "        <ul class=\"ut-breadcrumbs\">\n" +
    "            <li ui-sref=\"adminCore\">Admin Core</li>\n" +
    "            <li ui-sref=\"webTextGrid.search\">Web Text</li>\n" +
    "            <li class=\"end\">{{webText.id}}</li>\n" +
    "            <li class=\"title\">{{webText.name}}</li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"toolbar\">\n" +
    "            <button class=\"btn\" ng-click=\"edit()\" ng-if=\"canEdit()\">\n" +
    "                <i class=\"icon-pencil\" />\n" +
    "                Edit\n" +
    "            </button>\n" +
    "            <button class=\"btn\" ng-click=\"comment()\"><i class=\"icon-comment\" /> Comment</button>\n" +
    "            <div class=\"right\">\n" +
    "                <img src=\"/images/utilities/inventory/trash_icon.png\" ng-click=\"openDelete()\"></img>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-column full-width\">\n" +
    "\n" +
    "            <ut-edit-module title=\"Value\">\n" +
    "                <div ng-bind-html=\"webText.value\"></div>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Attachments\">\n" +
    "                <ut-attachment-module\n" +
    "                    o=\"WebText\"\n" +
    "                    oid=\"webText.id\"\n" +
    "                >\n" +
    "                </ut-attachment-module>\n" +
    "            </ut-edit-module>\n" +
    "\n" +
    "            <ut-edit-module title=\"Activity\">\n" +
    "                <ut-activity-module\n" +
    "                    o=\"WebText\"\n" +
    "                    oid=\"webText.id\"\n" +
    "                    comment=\"comment\"\n" +
    "                >\n" +
    "                </ut-activity-module>\n" +
    "            </ut-edit-module>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/webText/form.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 ng-if=\"!webText.id\">Create Web Text</h3>\n" +
    "    <h3 ng-if=\"webText.id\">Edit Web Text {{ webText.id }}</h3>\n" +
    "</div>\n" +
    "<div class=\"ut-form-body\">\n" +
    "    <div class=\"modal-body\" ut-modal-body>\n" +
    "        <form id=\"sample-modal-form\" class=\"form-horizontal\">\n" +
    "            <div class=\"space-medium\">\n" +
    "\n" +
    "                <ut-control-group>\n" +
    "                    <div ng-repeat=\"globalError in webText.globalErrors\" class=\"ut-global-error\">\n" +
    "                        {{globalError}}\n" +
    "                    </div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Name\" required>\n" +
    "                    <ut-input\n" +
    "                        model=\"webText.name\"\n" +
    "                        error=\"webText.errors.name\"\n" +
    "                    >\n" +
    "                    </ut-input>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <ut-control-group label=\"Value\" required>\n" +
    "                    <textarea class=\"rich ut-big-text-input\" ng-model=\"webText.value\"></textarea>\n" +
    "                    <div ng-if=\"webText.errors.value\" class=\"ut-global-error\">{{webText.errors.value}}</div>\n" +
    "                </ut-control-group>\n" +
    "\n" +
    "                <div class=\"ut-form-divider\"></div>\n" +
    "\n" +
    "                <ut-control-group label=\"Attachments\">\n" +
    "                    <ut-attachment-uploader o=\"WebText\" oid=\"webText.id\" trigger=\"handleUpload\"></ut-attachment-uploader>\n" +
    "                </ut-control-group>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn\" ng-click=\"save()\" style=\"margin-right:5px;\">\n" +
    "        <a ng-if=\"webText.id\">Save</a>\n" +
    "        <a ng-if=\"!webText.id\">Create</a>\n" +
    "    </button>\n" +
    "    <a href=\"\" ng-click=\"cancel()\">Cancel</a>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/webText/grid.html',
    "<div id=\"ut-grid-container\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"header-section\">\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-export\"\n" +
    "                    title=\"Export\"\n" +
    "                    template=\"/app/partials/webText/csv_export.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"operations\">\n" +
    "                <ut-dropdown\n" +
    "                    icon=\"operations-icon-share\"\n" +
    "                    title=\"Share\"\n" +
    "                    template=\"/app/partials/grid/share.html\"\n" +
    "                >\n" +
    "                </ut-dropdown>\n" +
    "            </div>\n" +
    "            <div class=\"header-primary\">\n" +
    "                <h3>Web Text Search</h3>\n" +
    "                <button class=\"btn\" ng-click=\"createWebText()\" ng-if=\"canCreate()\">Create Web Text</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"filters-container\">\n" +
    "        <div class=\"filters\">\n" +
    "            <ut-contains-text></ut-contains-text>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view class=\"ut-fade\"></div>\n" +
    "</div>"
  );


  $templateCache.put('/app/partials/webText/grid_actions.html',
    "<div id=\"ut-grid-actions\" ng-controller=\"WebTextGridActionsController\">\n" +
    "   <ul class=\"filters-users-list\">\n" +
    "        <li ui-sref=\"webText({webTextId:data.id})\"><i class=\"icon-file\" />View</li>\n" +
    "        <li ng-if=\"canEdit()\" ng-click=\"openEdit()\"><i class=\"icon-pencil\" />Edit</li>\n" +
    "        <li ng-if=\"canDelete()\" ng-click=\"openDelete()\"><i class=\"icon-trash\" />Delete</li>\n" +
    "    </ul>\n" +
    "</div>"
  );
}]) })