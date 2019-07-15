# desafiocsumbler
Desafio para nível dois de CS na Umbler.

Desafio Node.JS - CS

O que é o Node.js?

Node.js é uma plataforma server-side que utiliza JavaScript. Ou seja, você pode construir
aplicações backend (da mesma forma que PHP, .NET, Java) usando apenas JavaScript.

Alguns motivos que tornaram o Node.js tão popular:

● Ele é Open-Source
● É leve, comparando com outras plataformas de backend
● Tem um repositório gigante para dependências, o npm, que é muito fácil de usar
● Usar JS tanto no frontend quanto no backend é mais simples

Requisitos:

● Instalar o Node.js em seu PC
● Instalar o Git-SCM
● Ter um conta na Umbler
● Ter uma conta em um repositório online, como o GitHub, BitBucket, GitLab. (Caso
não tenha ainda, é só criar uma conta)
● Ter um domínio registrado e disponível para uso (pode ser um .tk, por exemplo)

Desafio 1:

O Express.js é o framework web mais usado no Node. Seu objetivo é pesquisar um pouco
sobre como usar esse framework, e criar uma aplicação em seu PC local, que exiba uma
mensagem de “Hello World” quando acessada.

Dicas:

● https://expressjs.com/pt-br/starter/hello-world.html

Resultado esperado:

Que a aplicação rode com sucesso localmente, e exiba a mensagem “Hello World”.

Desafio 2:

Rodar a aplicação localmente é o primeiro passo para garantir que ela está funcionando.

Seu objetivo agora é colocar a mesma aplicação em produção na Umbler, em um domínio
de sua propriedade.

Dicas:

● Para o domínio: http://www.dot.tk/pt/index.html
● Para hospedar o site:
https://help.umbler.com/hc/pt-br/articles/115001793863-Node-JS-na-Umbler

Resultado esperado:

Que ao acessar o seu domínio hospedado na Umbler, a mensagem de “”Hello World”
apareça.

Desafio 3:

O MongoDB é um banco de dados NoSQL, Open-Source, e muito usado atualmente em
função da sua performance e praticidade. Muitos sites Node.js usam o MongoDB para
guardar suas informações, e por isso é interessante sabermos um pouco sobre como ele
funciona.

Uma diferença do MongoDB para outros bancos é que ele não guarda tabelas, e sim
collections. Na prática elas não diferem tanto assim, mas é apenas para mostrar uma das
diferenças do MongoDB em relação a outros bancos, como MySQL e SQL Server.

Seu objetivo é criar um banco de dados MongoDB na Umbler, se conectar nesse banco
através de um SGBD, e criar 5 registros dentro de uma nova collection.

A collection deve se chamar alunos, e cada um dos 5 registros deve conter o nome e idade
de um colega que trabalha com você.

Dicas:

● Recomendação de SGBD: https://robomongo.org/

Resultado esperado:

Ao consultar a collection alunos, devem aparecer 5 registros, cada um deles com um
campo de nome e um campo de idade, por exemplo: {“Nome”: “Carlos”, “Idade”: 18},
{“Nome”: “Ana”, “Idade”: 22}, {“Nome”: “Thaís”, “Idade”: 19}, {“Nome”: “Rafael”, “Idade”: 27},
{“Nome”: “Carol”, “Idade”: 20}

Desafio 4:

No passo 2 você hospedou sua aplicação na Umbler, só que ela funciona com HTTP. Se
seus usuários forem colocar informações mais relevantes e pessoais em sua aplicação, eles
podem se sentir inseguros por seu site não ter o famoso “cadeado verde” no navegador.

Seu objetivo é habilitar o certificado Let’s Encrypt em seu site da Umbler, e além disso,
fazer com que todos os acessos feitos em seu site sejam redirecionados para HTTPS.

Dicas:

● https://help.umbler.com/hc/pt-br/articles/115001793863-Node-JS-na-Umbler

Resultados esperado:

● Que todas as URLs da aplicação sejam redirecionadas para HTTPS (exemplo,
“https://seusite.com”), mesmo que o acesso seja explicitamente forçado via browser
com “http://”. Ou seja, um acesso http deve virar https na URL.
● Que o browser considere a aplicação segura ao clicar no ícone de cadeado ao lado
da URL.

Desafio 5:

Agora que você hospedou sua aplicação e ela está rodando bonitinha com HTTPS, está na
hora de colocar ela web.

Usando Git, suba sua aplicação para um repositório seu em um versionador online (GitHub,
BitBucket, GitLab).

Dicas:

● Sobre Git: https://rogerdudler.github.io/git-guide/index.pt_BR.html

Resultado esperado:

Que o código de sua aplicação esteja acessível publicamente em um repositório online,
para que possamos ver código-fonte :)

Desafio bônus:

Ao lado do “Hello World” que aparece em sua aplicação, exiba o horário exato em que a
página foi aberta. Exemplo, se a página for acessada às 10h da manhã de um determinado
dia, ela deve mostrar o seguinte: Hello World 10:00, e a cada novo refresh na página, o
horário deve ser atualizado com o horário atual.

Dica:

● Node rainha, PHP nadinha. É tudo com JS :)

E é isso aí, parabéns! Você concluiu um desafio de Node um tanto
quanto difícil.
