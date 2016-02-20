# Flexi

[![npm version](https://badge.fury.io/js/flexi.svg)](http://badge.fury.io/js/flexi)
[![Ember Observer Score](http://emberobserver.com/badges/flexi.svg)](http://emberobserver.com/addons/flexi)
[![Build Status](https://travis-ci.org/runspired/flexi.svg)](https://travis-ci.org/runspired/flexi)
[![Code Climate](https://codeclimate.com/github/runspired/flexi/badges/gpa.svg)](https://codeclimate.com/github/runspired/flexi)
[![Test Coverage](https://codeclimate.com/github/runspired/flexi/badges/coverage.svg)](https://codeclimate.com/github/runspired/flexi/coverage)

### Layout Components

```hbs
<centered></centered>
<container></container>
<grid responsive></grid>
```

### Layout Elements

```hbs
<page></page>
<screen></screen>
<box></box>
<hbox></hbox>
<vbox></vbox>
<grid></grid>
```

### Layout Attributes

```hbs
<box centered="start|end|center|between|around">

<box align="start|end|stretch|center|baseline">

<box fit>
```


### Mobile First Grid

12 columns with container based breakpoints which fall back to viewport based breakpoints.
Wrap your grid usage with `grid`.  If you add the `responsive` attribute to `grid` it will
be converted to a `component` allowing for container based breakpoints.

```hbs
<grid responsive>
  <box xs="6" sm="4" md="3" lg="2">
</grid>
```

The attribute syntax here is a shorthand for
```hbs
<box class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
```

### Container

Container is a component which set's its class depending on it's current width to be one of

- `.layout-xs`
- `.layout-sm`
- `.layout-md`
- `.layout-lg`

```hbs
<container></container>
```


### Services

- `device/`
- `device/orientation`
- `device/layout`
- `-sustains`


### Blog Post

http://blog.isleofcode.com/p/2a16f7dd-52ab-4daa-b15d-0531fd432ede/


### Sustain

Sustain inserts a medium-life singleton component (called a sustainable) which wraps
 a feature group, and provides it stability by seamlessly swapping it's location as 
 layouts change from one position to the next.


```hbs
{{sustain <path-to-sustain> model}}
```

Sustainables wrap use of a component or groups of components (think of it as a feature
or feature set).  Sustainables are technically components (and you can create them with
 a `component.js`), but it is recommended to use them as simple templates expecting to
be supplied a `model`.

```cli
app
  /<pod-prefix>
    /foo
      /sustainables
        /bar.hbs
        /baz.hbs
        /spam.hbs
```

Only one instance of the sustainable is alive and rendered at a time, but if you are animating
from one location to another you can choose to leave behind a copy.

```hbs
{{sustain <path-to-sustain> model copy=true}}
```

By default, a sustain is destroyed when it has gone unused for one minute. You can alter this
expiration. A value of `0` will cause the sustain to live forever.

```hbs
{{sustain <path-to-sustain> expires=<time-in-ms>}}
```

### Layouts

With flexi, you can separate your markup into layouts for
`mobile`, `tablet`, `desktop`, and `huge`.

**Example:**
```cli
ember g layout index/<size>
```

Layouts are compiled into a single `template.hbs` which will
activate the correct layout based on booleans provided by the
`device/layout` service.


### Resolver

In your `app.js` you will need to import the custom resolver. The custom resolver
extends the default ember resolver with the `sustainables-resolver` mixin to account
for sustainables. 

```js
import Resolver from 'flexi';
```

```
app/routes/foo/
             layouts/
                 default.hbs
                 desktop.hbs
                 tablet.hbs
                 mobile.hbs
             sustainables/
                 bar.hbs
                 baz.hbs
                 spam.hbs
             components/
                 ham/
                     component.js
                     template.hbs
                 eggs/
                     component.js
                     template.hbs
```



## Example Layouts

**tablet.hbs**
```hbs
<screen>
  <page>
    <vbox md="4">
        {{sustain 'bar' model.foo}}
    </vbox>
    <vbox md="8">
        {{sustain 'baz' model.baz}}
    </vbox>
  </page>
</screen>
```

**phone.hbs**

```hbs
<screen>
  <page>
    {{sustain 'bar' model.foo}}
  </page>
</screen>
```

**tablet.hbs**

```hbs
<screen>
  <page>
    <vbox class="col-md-3">
        {{sustain 'bar' model.foo}}
    </vbox>
    <vbox class="col-md-5">
        {{sustain 'baz' model.baz}}
    </vbox>
    <vbox class="col-md-5">
        {{sustain 'spam' model.biz}}
    </vbox>
  </page>
</screen>
```

## Cross Route Example

**emails/structures/index.hbs**

```hbs
<ul>
{{#each model.email as |email|}}
  <li>{{#link-to 'emails.single' email}}{{email.title}}{{/link-to}}</li>
{{/each}}
</ul>
```

**emails/layouts/phone.hbs**

```hbs
{{#liquid-outlet}}
```

**emails/layouts/tablet.hbs**

```hbs
<screen>
  <page>
    <vbox class="col-md-4">
        {{sustain 'emails/index' model}}
    </vbox>
    <vbox class="col-md-8">
        {{#liquid-outlet}}
    </vbox>
  </page>
</screen>
```

**emails/index/layouts/phone.hbs**

```hbs
<screen>
  <page>
    {{sustain 'emails/index' model}}
  </page>
</screen>
```

**emails/index/layouts/tablet.hbs**

```hbs
<h1>Select from sidebar</h1>
```

**emails/index/route.js**

```js
export default Route.extend({
  model() {
    return this.modelFor('emails');
  }
});
```


## Support, Questions, Collaboration

Join the [Slack](https://embercommunity.slack.com/).

[![Slack Status](https://ember-community-slackin.herokuapp.com/badge.svg)](https://ember-community-slackin.herokuapp.com/)



## Contributing

 - Open an Issue for discussion first if you're unsure a feature/fix is wanted.
 - Branch off of `develop` (default branch)
 - Use descriptive branch names (e.g. `<type>/<short-description>`)
 - Use [Angular Style Commits](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit)
 - PR against `develop` (default branch).

### Commmits 

Angular Style commit messages have the full form:
 
 ```cli
 <type>(<scope>): <title>
 
 <body>
 
 <footer>
 ```
 
 But the abbreviated form (below) is acceptable and often preferred.
 
 ```cli
 <type>(<scope>): <title>
 ```
 
 Examples:
 
 - chore(deps): bump deps in package.json and bower.json
 - docs(component): document the `fast-action` component


