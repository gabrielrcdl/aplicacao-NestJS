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