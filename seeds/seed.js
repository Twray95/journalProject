const sequelize = require("../config/connection");
const { User, Journal } = require("../models/index");

const userSeedData = require("./userSeedData.json");
const journalSeedData = require("./journalSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  for (const journal of journalSeedData) {
    const newJournal = await Journal.create({
      ...journal,
      //attach each journal to random user ID
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
