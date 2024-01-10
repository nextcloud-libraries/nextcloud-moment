import { GettextExtractor, JsExtractors } from 'gettext-extractor'

const extractor = new GettextExtractor();

extractor
	.createJsParser([
		JsExtractors.callExpression('gt.gettext', {
			arguments: {
				text: 0,
				context: 1,
			},
		}),
	])
	.parseFilesGlob('./lib/**/*.@(ts|js)');

extractor.savePotFile('./l10n/messages.pot')

extractor.printStats()
