# Desenvolvimento

![DreamSaved](64819777.png)

# (PROJETO ABANDONADO)

### Equipe DreamSaved
- Giovanni 
- Emannuel
- Armando
- Joanderson
- Allan

### Github e Trello
Vamos usar o **Github** para fazer o versionamento de código, que consiste em hospedar todo o código do projeto em um repositório privado, com isso conseguimos hospedar todas as versões do código sem nenhuma dor de cabeça, com as branch’s Master (código final) e Develop (código de desenvolvimento), nós vamos codar tudo em novas branch’s, exemplo: backend-criacao-de-login, feito isso, vamos analisar essa Pull-Request e ver se não existe nenhum erro, se estiver tudo bem, o seu código vai para a Develop, quando tudo estiver testado e funcionando nós mandamos para a Master, com isso temos o controle do código, desde bug até o código limpo.

Basicamente é isso, vou listar alguns artigos para vocês entenderem melhor.

Trello ([https://www.desenvolvimentoagil.com.br/scrum/](https://www.desenvolvimentoagil.com.br/scrum/))

Github/Gitlab ([https://imasters.com.br/agile/fluxo-de-desenvolvimento-com-gitflow](https://imasters.com.br/agile/fluxo-de-desenvolvimento-com-gitflow))
#
### Semantic Commit Messages

Semantic Commit Messages é uma opção que podemos adotar para organizar os commit's, padrões:
-   `feat`: (new feature for the user, not a new feature for build script)
-   `fix`: (bug fix for the user, not a fix to a build script)
-   `docs`: (changes to the documentation)
-   `style`: (formatting, missing semi colons, etc; no production code change)
-   `refactor`: (refactoring production code, eg. renaming a variable)
-   `test`: (adding missing tests, refactoring tests; no production code change)

Exemplo:
```
feat: Upload de imagem dashboard
fix: Erro na hora de logar
```
Semantic ([https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716))

# 
### Eslint

Isso ainda vai ser definido, mas por enquanto por padrão vamos usar o **Eslint Airbnb**.

Eslint ([https://www.npmjs.com/package/eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
