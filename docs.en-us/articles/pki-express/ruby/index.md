# Using PKI Express on Ruby

PKI Express can be used on Ruby. To get started, see the [Ruby on Rails samples project](rails.md).

## Client library

To use PKI Express on Ruby applications, use our **Ruby Gem** [pki_express](https://rubygems.org/gems/pki_express)
by declaring on your `Gemfile`:

```gemspec
gem 'pki_express', '~> 1.0.0'
```

After that, do a `bundle install` to download the gem and its dependencies (if you don't have Bundler installed,
get it [here](http://bundler.io/))

Alternatively, you can install the gem directly on command-line:

```
gem install pki_express
```

The gem is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressRuby). Feel free to
fork it if you need to make any customizations.
