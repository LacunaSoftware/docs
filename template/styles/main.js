// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
$(function () {

	var currentLocale = null;
	var pathAfterLocale = null;

	var init = function () {
		var m = /^\/(\w{2}-\w{2})\/(.*)$/.exec(document.location.pathname);
		if (m) {
			currentLocale = m[1];
			pathAfterLocale = m[2];
			$('#locale-picker').val(currentLocale);
			$('#locale-picker').change(localeSelectionChanged);
		} else {
			console.log('Could not determine current locale');
		}
	};

	var localeSelectionChanged = function (e) {
		var newLocale = $(e.target).val();
		document.location = '/' + newLocale + '/' + pathAfterLocale;
	};

	init();

});
