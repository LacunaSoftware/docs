# Ruby on Rails samples project

The **Ruby on Rails samples project** shows how to use [Rest PKI](../index.md) together with [Web PKI](../../web-pki/index.md)
on a Ruby project using the [Ruby on Rails](http://rubyonrails.org/) framework. It is hosted on GitHub at:

https://github.com/LacunaSoftware/RestPkiSamples/tree/master/Ruby

## Running the project

1. [Download the project](https://github.com/LacunaSoftware/RestPkiSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/RestPkiSamples.git)
1. Generate an API access token on the [REST PKI website](https://pki.rest/)
1. Paste your access token on the initializer file [restpki.rb](https://github.com/LacunaSoftware/RestPkiSamples/blob/master/Ruby/config/initializers/restpki.rb)
1. Install dependencies: `bundle install`
1. Run application: `rails server`
1. Access the URL [http://localhost:3000](http://localhost:3000)
