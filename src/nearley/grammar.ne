CONTENT_LINE -> NAME (";" PARAM):+ ":" VALUE {% ([name, params, _, value]) => ({name, value, parameters: params.map(p => p[1])}) %}
	| NAME ":" VALUE {% ([name, _, value]) => ({name, value}) %}

NAME -> IANA_TOKEN {% id %}
VALUE -> VALUE_CHAR {% id %}

PARAM -> PARAM_NAME "=" PARAM_VALUE ("," PARAM_VALUE):+ {% ([name, _, value, [additional]]) => ({name, value: value + additional.join('')}) %}
	| PARAM_NAME "=" PARAM_VALUE {% ([name, _, value]) => ({name, value}) %}

PARAM_NAME -> IANA_TOKEN {% id %}
PARAM_VALUE -> "\"" QSAFE_CHAR "\"" {% ([_, char]) => char %} | SAFE_CAHR {% id %}

IANA_TOKEN -> [0-9A-Za-z-]:+ {% ([term]) => term.join('') %}
VENDOR_ID -> [0-9A-Za-z]:+ {% ([term]) => term.join('') %}

VALUE_CHAR -> .:* {% ([term]) => term.join('') %}
SAFE_CAHR -> [^";:,\x00-\x08\x0A-\x1F\x7F]:* {% ([term]) => term.join('') %}
QSAFE_CHAR -> [^"\x00-\x08\x0A-\x1F\x7F]:* {% ([term]) => term.join('') %}
