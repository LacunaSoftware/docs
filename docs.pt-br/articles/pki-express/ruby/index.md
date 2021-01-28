# Usando o PKI Express em Ruby

Este artigo mostra como usar o [PKI Express](../index.md) em Ruby

## Projeto de exemplos

O projeto de exemplos demonstra o uso de PKI Express junto com o componente [Web PKI](../../web-pki/index.md)
em um projeto **Ruby** usando o framework [Ruby on Rails](http://rubyonrails.org/). Ele encontra-se hospedado no GitHub:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/ruby/rails

### Executando o projeto

1. [Instale o PKI Express](../setup/index.md)
1. [Baixe o projeto](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) ou faça um *clone* do [repositório](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. Em um terminal, navegue ate a pasta `ruby/rails` e execute o comando `bundle install` para baixar as dependências do projeto.
1. Execute a aplicação web: `rails server`
1. Acesse a URL: [http://localhost:3000](http://localhost:3000)

## Biblioteca do cliente
 
Para usar o PKI Express em aplicações Ruby, use nosso **Ruby Gem** [pki_express](https://rubygems.org/gems/pki_express) declarando em seu `Gemfile`:

[!include[Gemfile](../../../../includes/pki-express/ruby/gemfile.md)]

Após isos, faça um `bundle install` para download do gem e suas dependências (se você não tiver o Bundler instalado, pegue [aqui](http://bundler.io/))

Como alternativa, você pode instalar a gema diretamente na linha de comando:

```
gem install pki_express
```

O gem é código aberto, hospedado no [GitHub](https://github.com/LacunaSoftware/RestPkiRubyClient). Sinta-se à vontade para fazer o *fork* do repositório se precisar de alguma personalização.
