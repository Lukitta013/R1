const personagem = {
    nome : 'Steve Rodgers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 90,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}
const personagem2 = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura com tecnologia avançada',
    armaSecundaria: 'Dispositivos integrados',
    velocidade: 85,
    forca: 70,
    resistencia: 75,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem3 = {
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: 'Mjölnir',
    armaSecundaria: 'Poderes de trovão',
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem4 = {
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    armaPrincipal: 'Armas de fogo',
    armaSecundaria: 'Combate corpo a corpo',
    velocidade: 78,
    forca: 55,
    resistencia: 65,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem5 = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Força bruta',
    armaSecundaria: '',
    velocidade: 60,
    forca: 100,
    resistencia: 95,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem6 = {
    nome: 'Peter Parker',
    codinome: 'Homem-Aranha',
    armaPrincipal: 'Lançadores de teia',
    armaSecundaria: 'Agilidade e sentidos aguçados',
    velocidade: 92,
    forca: 65,
    resistencia: 70,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem7 = {
    nome: 'Stephen Strange',
    codinome: 'Doutor Estranho',
    armaPrincipal: 'Magia',
    armaSecundaria: 'Relíquia mística (Olho de Agamotto)',
    velocidade: 70,
    forca: 60,
    resistencia: 85,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const personagem8 = {
    nome: 'Thanos',
    codinome: 'Thanos, o Titã Louco',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: 'Força bruta',
    velocidade: 65,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return 'Nome do personagem: ' + this.nome + '\n'
        + 'Codinome do personagem: ' + this.codinome + '\n'
        + 'Arma principal: ' + this.armaPrincipal + '\n'
        + 'Arma secundária: ' + this.armaSecundaria + '\n'
        + 'Nível de força: ' + this.forca + '\n'
        + 'Nível de velocidade: ' + this.velocidade + '\n'
        + 'Nível de resistência: ' + this.resistencia + '\n'
    }
}

const Personagens = [personagem, personagem2, personagem3, personagem4, personagem5, personagem6, personagem7, personagem8]
for (let p of Personagens) {
    p.vence = [];
    p.perde = [];
}
for (let i = 0; i < Personagens.length; i++) {
    let p1 = Personagens[i];

    for (let j = 0; j < Personagens.length; j++) {
        if (i === j) continue; 

        let p2 = Personagens[j];

        
        const totalP1 = p1.forca + p1.velocidade + p1.resistencia;
        const totalP2 = p2.forca + p2.velocidade + p2.resistencia;

        if (totalP1 > totalP2) {
            p1.vence.push(p2.codinome);
        } else if (totalP1 < totalP2) {
            p1.perde.push(p2.codinome);
        } 
    }
}
for (let p of Personagens) {
    console.log(`\n${p.codinome}`);
    console.log('Vence de:', p.vence.join(', ') || 'Ninguém');
    console.log('Perde para:', p.perde.join(', ') || 'Ninguém');
}
