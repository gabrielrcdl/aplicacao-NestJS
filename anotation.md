# NestJS comandos

1. nest g controller -> gera um controller (-no-spec) (não criará um arquivo de teste)
2. nest g controller module/courses --dry-run (a flag serve para experimentar a estrutura de pasta antes de ser criada)


# Serviços 
Onde ficam toda regra de négocio e são decorados com @injectable

# Controller
Repassa para o serviços para lidar com as regras

# DTOS - Data Transfer Object
Lidar com informações que vem do front para o back, usado para enviar dados capsulados de uma aplicação para outra, nos ajuda a definir as interfaces e as informações que são recebidas no body da aplicação
usado para tipa os dados de uma requisição

# Validation Pipe
app.useGlobalPipes(new ValidationPipe()); -> essa linha de código fica no arquivo main.ts
É usado como forma de validadar os dados recebidos antes de ser salvos no banco de dados.
para auxiliar nesta validação, se faz necessário instalar via npm duas biblioteca: class-validator e class-transformer

# Criando um container docker postgres
docker run --name postgres -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

--name: da um nome ao container[
-e: definir variável de ambiente para senha do postgres
-p: fazer o binding das portas lado direito porta da maquina:lado esquerdo porta do container
-d: rodar em modo background e o nome da iamgem que quero usar.

Resumindo quero criar um container com o nome postgres e uma iamgem do postgres

# TypeORM
O que ele faz é mapear uma estrutura de banco de dados em uma estrutura de classe e essa estrutura de classes são as entidades ou entitites.

Entidades são uma classe que irá mapear uma tabela no banco de dados