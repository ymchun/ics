// Generated automatically by nearley, version 2.19.6
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "CONTENT_LINE$ebnf$1$subexpression$1", "symbols": [{"literal":";"}, "PARAM"]},
    {"name": "CONTENT_LINE$ebnf$1", "symbols": ["CONTENT_LINE$ebnf$1$subexpression$1"]},
    {"name": "CONTENT_LINE$ebnf$1$subexpression$2", "symbols": [{"literal":";"}, "PARAM"]},
    {"name": "CONTENT_LINE$ebnf$1", "symbols": ["CONTENT_LINE$ebnf$1", "CONTENT_LINE$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CONTENT_LINE", "symbols": ["NAME", "CONTENT_LINE$ebnf$1", {"literal":":"}, "VALUE"], "postprocess": ([name, params, _, value]) => ({name, value, parameters: params.map(p => p[1])})},
    {"name": "CONTENT_LINE", "symbols": ["NAME", {"literal":":"}, "VALUE"], "postprocess": ([name, _, value]) => ({name, value})},
    {"name": "NAME", "symbols": ["IANA_TOKEN"], "postprocess": id},
    {"name": "VALUE", "symbols": ["VALUE_CHAR"], "postprocess": id},
    {"name": "PARAM$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "PARAM_VALUE"]},
    {"name": "PARAM$ebnf$1", "symbols": ["PARAM$ebnf$1$subexpression$1"]},
    {"name": "PARAM$ebnf$1$subexpression$2", "symbols": [{"literal":","}, "PARAM_VALUE"]},
    {"name": "PARAM$ebnf$1", "symbols": ["PARAM$ebnf$1", "PARAM$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "PARAM", "symbols": ["PARAM_NAME", {"literal":"="}, "PARAM_VALUE", "PARAM$ebnf$1"], "postprocess": ([name, _, value, [additional]]) => ({name, value: value + additional.join('')})},
    {"name": "PARAM", "symbols": ["PARAM_NAME", {"literal":"="}, "PARAM_VALUE"], "postprocess": ([name, _, value]) => ({name, value})},
    {"name": "PARAM_NAME", "symbols": ["IANA_TOKEN"], "postprocess": id},
    {"name": "PARAM_VALUE", "symbols": [{"literal":"\""}, "QSAFE_CHAR", {"literal":"\""}], "postprocess": ([_, char]) => char},
    {"name": "PARAM_VALUE", "symbols": ["SAFE_CAHR"], "postprocess": id},
    {"name": "IANA_TOKEN$ebnf$1", "symbols": [/[0-9A-Za-z-]/]},
    {"name": "IANA_TOKEN$ebnf$1", "symbols": ["IANA_TOKEN$ebnf$1", /[0-9A-Za-z-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "IANA_TOKEN", "symbols": ["IANA_TOKEN$ebnf$1"], "postprocess": ([term]) => term.join('')},
    {"name": "VENDOR_ID$ebnf$1", "symbols": [/[0-9A-Za-z]/]},
    {"name": "VENDOR_ID$ebnf$1", "symbols": ["VENDOR_ID$ebnf$1", /[0-9A-Za-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VENDOR_ID", "symbols": ["VENDOR_ID$ebnf$1"], "postprocess": ([term]) => term.join('')},
    {"name": "VALUE_CHAR$ebnf$1", "symbols": []},
    {"name": "VALUE_CHAR$ebnf$1", "symbols": ["VALUE_CHAR$ebnf$1", /./], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "VALUE_CHAR", "symbols": ["VALUE_CHAR$ebnf$1"], "postprocess": ([term]) => term.join('')},
    {"name": "SAFE_CAHR$ebnf$1", "symbols": []},
    {"name": "SAFE_CAHR$ebnf$1", "symbols": ["SAFE_CAHR$ebnf$1", /[^";:,\x00-\x08\x0A-\x1F\x7F]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "SAFE_CAHR", "symbols": ["SAFE_CAHR$ebnf$1"], "postprocess": ([term]) => term.join('')},
    {"name": "QSAFE_CHAR$ebnf$1", "symbols": []},
    {"name": "QSAFE_CHAR$ebnf$1", "symbols": ["QSAFE_CHAR$ebnf$1", /[^"\x00-\x08\x0A-\x1F\x7F]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "QSAFE_CHAR", "symbols": ["QSAFE_CHAR$ebnf$1"], "postprocess": ([term]) => term.join('')}
]
  , ParserStart: "CONTENT_LINE"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
