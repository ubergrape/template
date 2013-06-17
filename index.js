
module.exports = template;

function template(name, locals) {
	locals = extend(extend({}, template.locals), locals || {});
	return require(template.root + '/' + name)(locals);
}

template.root = '';
template.locals = {};

function extend(a, b) {
	for (var k in b) {
		a[k] = b[k];
	}
	return a;
}
