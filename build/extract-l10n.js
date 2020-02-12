const { GettextExtractor, JsExtractors } = require('gettext-extractor');

let extractor = new GettextExtractor();

extractor
    .createJsParser([
        JsExtractors.callExpression('t', {
            arguments: {
                text: 0,
                context: 1
            }
        }),
        JsExtractors.callExpression('n', {
            arguments: {
                text: 1,
                textPlural: 2,
                context: 3
            }
        })
    ])
    .parseFilesGlob('./lib/**/*.@(ts|js)');

extractor.savePotFile('./l10n/messages.pot');

extractor.printStats();
