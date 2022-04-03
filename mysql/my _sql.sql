USE sistemadecadastro;
CREATE Table usuario (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


-- ALTERA O TIPO DE DADOS DA TABELA
ALTER TABLE usuario 
MODIFY COLUMN nome  VARCHAR(100);
-- INSERT --
INSERT INTO usuario(nome,email,idade) VALUES(
'lucas','lucas@gmail.com',5    
);
-- DELETE--
DELETE FROM usuario where nome="rafael";

--  UPDATE ---
UPDATE usuario SET nome = "lucas marcos" WHERE nome = "lucas";
UPDATE usuario SET nome = "Antonio Reis" WHERE nome = 'Antonio';
--SELECT--
SELECT * FROM usuario where nome LIKE 'a%';