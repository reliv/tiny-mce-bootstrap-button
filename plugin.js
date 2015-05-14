/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('bootstrap_button', function(editor) {
	editor.addCommand('InsertBootstrapButton', function() {
		editor.execCommand('mceInsertContent', false,'<a class="btn btn-primary">button</a>');
	});

	editor.addButton('bootstrap_button', {
        text: 'Button',
		tooltip: 'Button',
        cmd: 'InsertBootstrapButton'
	});

	editor.addMenuItem('bootstrap_button', {
		text: 'Button',
        cmd: 'InsertBootstrapButton',
		context: 'insert'
	});
});
