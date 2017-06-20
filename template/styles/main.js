// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
$(function () {

	var i18n = {
		'en-us': {
			'_name': 'English',
			'not-available': 'Not Available',
			'not-available-message': 'Sorry, this article is not yet available in the selected language. Please choose between one of the available versions:'
		},
		'pt-br': {
			'_name': 'Português',
			'not-available': 'Indisponível',
			'not-available-message': 'Desculpe, este artigo ainda não está disponível no idioma selecionado. Por favor escolha uma das versões disponíveis:'
		}
	};

	var currentLocale = null;
	var pathAfterLocale = null;

	var init = function () {

		detectCurrentLocale();

		if (currentLocale) {
			initLocalePicker();
			initAltLocales();
		}
	};

	var detectCurrentLocale = function () {
		var m = /^\/(\w{2}-\w{2})\/(.*)$/.exec(document.location.pathname);
		if (m) {
			currentLocale = m[1];
			pathAfterLocale = m[2];
		} else {
			console.log('Could not determine current locale');
		}
	};

	var initLocalePicker = function () {
		$('#locale-picker').val(currentLocale);
		$('#locale-picker').change(onLocaleSelectionChanged);
	};

	var onLocaleSelectionChanged = function (e) {
		document.location = '/' + $(e.target).val() + '/' + pathAfterLocale;
	};

	var initAltLocales = function () {
		var divs = $('div[data-alt-locales]');
		if (divs.length > 0) {
			var div = divs.eq(0);
			var locales = div.attr('data-alt-locales').split(',');
			var noteDiv = $('<div>').addClass('alert alert-warning').appendTo(div);
			$('<h5>').html(i18n[currentLocale]['not-available']).appendTo(noteDiv);
			$('<p>').html(i18n[currentLocale]['not-available-message']).appendTo(noteDiv);
			var ul = $('<ul>').appendTo(noteDiv);
			$.each(locales, function (index, locale) {
				var li = $('<li>').appendTo(ul);
				$('<a>').attr('href', '/' + locale + '/' + pathAfterLocale).html(i18n[locale]._name).appendTo(li);
			});
		}
	};

	init();

});
