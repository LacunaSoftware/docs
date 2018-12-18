# Geração de PDF

Para gerar um PDF da documentação:

1. Copie o arquivo `toc.md` da subpasta desejada por cima do arquivo `C:\AppData\DocsBuild\docs-pre\docs.pt-br\articles\toc.md`
1. Num Powershell, navegue até a pasta `C:\AppData\DocsBuild\docs-pre\docs.pt-br`
1. Execute o script `Fill-Articles.ps1` (a partir da pasta mencionada)
1. Execute o comando `docfx.exe docfx-pdf.json`
1. Gere uma capa (PDF de uma página)
1. Utilize um serviço online (sugestão: https://www.pdfmerge.com/) para juntar a capa ao restante do PDF
