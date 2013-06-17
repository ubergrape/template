# template

Small template helper component

## Installation

    $ component install Swatinem/template

## Usage

If you have collection of templates, which might be compiled by `component-jade`
or something similar, you need to set up `template` to find those templates.
You have to specify your projects name and template directory.

So if you have declared your templates in `component.json` like so:

```json
{
	"name": "foo"
	"templates": [
		"templates/bar.jade"
	]
}
```

You can use `template` like so:

```js
template.root = '/foo/templates';
template.locals.foo = 'bar';
template('bar', {more: 'locals'});
```

## License

  LGPLv3

