CREATE TABLE IF NOT EXISTS EMPRESAS (
    id SERIAL,
    nome VARCHAR(40) NOT NULL,
    endereco VARCHAR(100) NOT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS SERVICOS (
    nome VARCHAR(40) NOT NULL,
    tipo VARCHAR(30) NOT NULL,

    PRIMARY KEY(nome)
);

CREATE TABLE IF NOT EXISTS CIDADES (
    nome VARCHAR(40) NOT NULL,
    estado VARCHAR(30) NOT NULL,

    PRIMARY KEY(nome)
);

CREATE TABLE IF NOT EXISTS CLIENTES (
    id SERIAL,
    cpf CHAR(11) NOT NULL,
    rg VARCHAR(11) NOT NULL,
    nome VARCHAR(40) NOT NULL,
    endereco VARCHAR(100) NOT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
    cpf CHAR(11) NOT NULL,
    rg VARCHAR(11) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    nome VARCHAR(40) NOT NULL,
    telefone VARCHAR(15),
    tipo VARCHAR(30) NOT NULL,
    salario NUMERIC(8, 2) NOT NULL,

    PRIMARY KEY(cpf)
);

CREATE TABLE IF NOT EXISTS PEDIDOS (
    id SERIAL,
    empresa_id INT NOT NULL,
    cliente_id INT NOT NULL,
    cidade_nome_destino VARCHAR(40),
    cidade_nome_partida VARCHAR(40),
    data_solicitacao DATE DEFAULT CURRENT_DATE,
    data_resolucao DATE,
    aceite VARCHAR(9),
    preco_total NUMERIC(8, 2),
    endereco_partida VARCHAR(100),
    endereco_destino VARCHAR(100),

    PRIMARY KEY(id),
    FOREIGN KEY(empresa_id) REFERENCES EMPRESAS (id),
    FOREIGN KEY(cliente_id) REFERENCES CLIENTES (id),
    FOREIGN KEY(cidade_nome_destino) REFERENCES CIDADES (nome),
    FOREIGN KEY(cidade_nome_partida) REFERENCES CIDADES (nome),
    CHECK(aceite IN ('Análise', 'Aceito', 'Preterido' ))
);

CREATE TABLE IF NOT EXISTS OFERECEM (
    id SERIAL,
    empresa_id INT NOT NULL,
    cidade_nome VARCHAR(40) NOT NULL,
    servico_nome VARCHAR(40) NOT NULL,
    preco_por_hora_servico NUMERIC(8, 2),

    PRIMARY KEY(id),
    FOREIGN KEY(empresa_id) REFERENCES EMPRESAS (id),
    FOREIGN KEY(cidade_nome) REFERENCES CIDADES (nome),
    FOREIGN KEY(servico_nome) REFERENCES SERVICOS (nome)
);

CREATE TABLE IF NOT EXISTS SOLICITAM (
    id SERIAL,
    servico_nome VARCHAR(40) NOT NULL,
    funcionario_cpf CHAR(11) NOT NULL,
    pedido_id INT NOT NULL,
    tempo_duracao INT,
    preco NUMERIC(8, 2),
    carga NUMERIC(8, 2),
    data_finalizacao DATE,

    PRIMARY KEY(id),
    FOREIGN KEY(servico_nome) REFERENCES SERVICOS (nome),
    FOREIGN KEY(funcionario_cpf) REFERENCES FUNCIONARIOS (cpf),
    FOREIGN KEY(pedido_id) REFERENCES PEDIDOS (id)

);

CREATE TABLE IF NOT EXISTS EMPRESA_TELEFONES (
    id SERIAL,
    empresa_id INT NOT NULL,
    telefone VARCHAR(15),

    PRIMARY KEY(id),
    FOREIGN KEY(empresa_id) REFERENCES EMPRESAS (id)

);

CREATE TABLE IF NOT EXISTS CLIENTE_TELEFONES (
    id SERIAL,
    cliente_id INT NOT NULL,
    telefone VARCHAR(15),

    PRIMARY KEY(id),
    FOREIGN KEY(cliente_id) REFERENCES CLIENTES (id)

);

CREATE TABLE IF NOT EXISTS GUINDASTE (
    servico_nome VARCHAR(40) NOT NULL,
    tamanho_base VARCHAR(11)  NOT NULL,
    altura NUMERIC(6, 2) NOT NULL,
    bonus_aumentado NUMERIC(5, 2),

    PRIMARY KEY(servico_nome),
    CONSTRAINT fk_guindaste_servico
       FOREIGN KEY (servico_nome)
           REFERENCES SERVICOS (nome)
           ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS TRANSPORTE (
    servico_nome VARCHAR(40) NOT NULL,
    limite_carga NUMERIC(8,2),
    percentual NUMERIC(5,2),

    PRIMARY KEY(servico_nome, limite_carga),
    CONSTRAINT fk_transporte_servico
        FOREIGN KEY (servico_nome)
            REFERENCES SERVICOS (nome)
            ON DELETE CASCADE
);