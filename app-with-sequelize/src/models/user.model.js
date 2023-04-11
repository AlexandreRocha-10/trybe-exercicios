const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    });
    (async () => {
        await sequelize.sync({ force: true });
        // const sara = User.build({
        //     fullName: 'Sara Silva Santos',
        //     email: 'sara.ss@trybe.com',
        //   });
          
        //   console.log(sara instanceof User); // true
        //   console.log(sara.fullName); // "Sara Silva Santos"
        //   await sara.save();
        //   console.log('Pessoa salva no banco de dados!');

        const sara = await User.create({
            fullName: 'Sara Silva Santos',
            email: 'sara.ss@trybe.com',
            phoneNum: DataTypes.STRING,
        });
          
        console.log(sara instanceof User); // true
        console.log(sara.name); // "Sara Silva Santos"

        sara.fullName = "Jane Doe";

        // O nome ainda está "Sara Silva Santos" no banco de dados!

        await sara.save();

        // Agora o nome foi atualizado para "Jane Doe" no banco de dados!
    })();
  
    return User;
  };
  
  module.exports = UserModel;