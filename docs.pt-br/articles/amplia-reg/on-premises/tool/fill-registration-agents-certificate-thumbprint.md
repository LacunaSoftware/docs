# Comando Amplia Reg: `fill-registration-agents-certificate-thumbprint`

## Nome

`fill-registration-agents-certificate-thumbprint` – Preenche a impressão digital (thumbprint) do certificado para os agentes de registro.

## Sintaxe

```sh
dotnet Lacuna.AmpliaRegNg.Site.dll [configurações] -- fill-registration-agents-certificate-thumbprint
```

Ou, no Docker:

```sh
docker run -i lacunasoftware/ampliareg:x.y.z [configurações] -- fill-registration-agents-certificate-thumbprint
```

> [!IMPORTANT]
> Substitua `x.y.z` acima pela versão do Amplia Reg que você está utilizando.

Consulte a documentação de configurações para mais detalhes sobre os parâmetros disponíveis.

### Opções

* `--batchsize <tamanho-do-lote>`: Número de registros processados por iteração. Padrão: `100`.
* `--logfrequency <frequencia-do-log>`: Frequência de registro do progresso em log. Padrão: `100`.

## Descrição

O comando `fill-registration-agents-certificate-thumbprint` lê os certificados armazenados no blob storage para agentes de registro que possuem um certificado armazenado, mas não têm uma impressão digital (thumbprint) registrada. Em seguida, calcula a thumbprint de cada certificado e a persiste no banco de dados.

> [!IMPORTANT]
> Este comando deve ser executado **uma única vez** após a atualização para a versão que introduziu a validação da impressão digital (thumbprint) do certificado.
>
> Caso ele não seja executado, os agentes de registro que já possuíam certificados armazenados anteriormente não conseguirão fazer login até que o certificado seja reenviado (upload) novamente.

## Veja também

* Ferramenta de linha de comando do Amplia Reg.
