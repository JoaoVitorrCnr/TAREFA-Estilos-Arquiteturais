
1.
Concentrar tudo em um único arquivo deixa o código bagunçado e difícil de entender, principalmente se a aplicação crescer. Além disso, fica complicado fazer manutenção, porque qualquer mudança pode impactar várias partes do sistema. Também não dá para reutilizar as funcionalidades em outros projetos, e testar o código de forma organizada se torna mais complicado. Tudo fica muito dependente, então, se algo der errado em uma parte, pode quebrar o resto.

2. 
Separar em camadas facilita bastante a manutenção, porque cada parte (interface, lógica e dados) fica isolada e independente. Assim, se eu precisar corrigir um erro na lógica de negócios, não preciso mexer na interface. Também dá para reutilizar a lógica e os dados em outros projetos. Outra vantagem é que a aplicação pode crescer de forma mais organizada, já que é possível melhorar uma camada sem interferir nas outras. E se eu quiser trocar o banco de dados ou o layout do frontend, dá para fazer isso sem muitos problemas.

3.
A arquitetura Pipe e Filtros é legal porque permite que as transformações sejam feitas passo a passo e de forma organizada. Cada filtro faz uma coisa específica, e eu posso adicionar ou remover filtros sem mexer nos outros. Também é mais fácil testar cada filtro sozinho para garantir que ele está funcionando. Se precisar mudar a ordem dos filtros ou adicionar novos, é só ajustar a sequência. Isso deixa o sistema mais flexível e preparado para lidar com mudanças.
