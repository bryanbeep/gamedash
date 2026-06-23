const bcrypt = require("bcryptjs");
const sequelize = require("./config/database");
const User = require("./models/User");
const Product = require("./models/Product");

async function seed() {
  try {
    await sequelize.sync();

    // Crear usuario admin (solo si no existe)
    const existingAdmin = await User.findOne({ where: { username: "admin" } });
    if (!existingAdmin) {
      const passwordHash = await bcrypt.hash("admin123", 10);
      await User.create({ username: "admin", password: passwordHash });
      console.log("Usuario admin creado");
    } else {
      console.log("Usuario admin ya existe, se omite");
    }

    // Limpiar productos previos
    await Product.destroy({ where: {} });
    console.log("Productos previos eliminados");

    // Cargar productos
    const products = [
      {
        title: "Super Mario Bros.",
        description:
          "El plomero más famoso del mundo en su aventura original. Un clásico imprescindible que definió el género de plataformas.",
        genre: "Plataformas",
        platform: "NES",
        price: 45.0,
        stock: 8,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
      },
      {
        title: "The Legend of Zelda",
        description:
          "La aventura que dio origen a una de las sagas más queridas. Explorá Hyrule, resolvé acertijos y derrotá a Ganon.",
        genre: "Aventura",
        platform: "NES",
        price: 55.0,
        stock: 5,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",
      },
      {
        title: "Super Metroid",
        description:
          "Samus Aran regresa al planeta Zebes en una de las mejores aventuras de exploración jamás creadas.",
        genre: "Aventura",
        platform: "SNES",
        price: 70.0,
        stock: 3,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/6/6c/Smetroidbox.jpg",
      },
      {
        title: "Chrono Trigger",
        description:
          "Una historia épica de viajes en el tiempo. Considerado uno de los mejores JRPG de la historia.",
        genre: "RPG",
        platform: "SNES",
        price: 90.0,
        stock: 4,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger.jpg",
      },
      {
        title: "Sonic the Hedgehog",
        description:
          "El erizo azul más rápido del mundo en su debut. Velocidad pura y bandas sonoras inolvidables.",
        genre: "Plataformas",
        platform: "Mega Drive",
        price: 40.0,
        stock: 10,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg",
      },
      {
        title: "Streets of Rage 2",
        description:
          "Beat 'em up clásico con una banda sonora que marcó una época. Para jugar solo o en cooperativo.",
        genre: "Beat 'em up",
        platform: "Mega Drive",
        price: 50.0,
        stock: 6,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/c/c8/Streetsofrage2.jpg",
      },
      {
        title: "Final Fantasy VII",
        description:
          "La aventura de Cloud Strife que llevó los JRPG al mainstream. Materia, Sephiroth y una historia inolvidable.",
        genre: "RPG",
        platform: "PlayStation",
        price: 65.0,
        stock: 7,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/c/ce/FF7_cover.jpg",
      },
      {
        title: "Metal Gear Solid",
        description:
          "Sigilo, acción y una historia digna del cine. Solid Snake en una infiltración que marcó la historia del medio.",
        genre: "Sigilo",
        platform: "PlayStation",
        price: 60.0,
        stock: 4,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/4f/Metal_Gear_Solid_cover_art.png",
      },
      {
        title: "Pokémon Red",
        description:
          "El comienzo de una de las sagas más exitosas de la historia. ¡Hazte con todos!",
        genre: "RPG",
        platform: "Game Boy",
        price: 50.0,
        stock: 9,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/4d/Pok%C3%A9mon_Red_Version_box_art.jpg",
      },
      {
        title: "Tetris",
        description:
          "El puzzle más adictivo de todos los tiempos. Simple, perfecto y eterno.",
        genre: "Puzzle",
        platform: "Game Boy",
        price: 35.0,
        stock: 12,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/7/7d/Tetris_Boxshot.jpg",
      },
      {
        title: "Castlevania: Symphony of the Night",
        description:
          "Alucard contra los demonios de Drácula en uno de los mejores juegos del género metroidvania.",
        genre: "Aventura",
        platform: "PlayStation",
        price: 80.0,
        stock: 3,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a4/Castlevania_-_Symphony_of_the_Night_-_PlayStation_-_USA.jpg",
      },
      {
        title: "Donkey Kong Country",
        description:
          "Gráficos pre-renderizados revolucionarios y un platformer impecable. Donkey y Diddy Kong al rescate.",
        genre: "Plataformas",
        platform: "SNES",
        price: 55.0,
        stock: 6,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/4/41/Donkey_Kong_Country_SNES_cover.png",
      },
    ];

    await Product.bulkCreate(products);
    console.log(`${products.length} productos creados correctamente`);

    process.exit(0);
  } catch (error) {
    console.error("Error en el seed:", error.message);
    process.exit(1);
  }
}

seed();
