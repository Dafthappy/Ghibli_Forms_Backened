'use strict';

module.exports = {
	up: async(queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
    await queryInterface.bulkInsert('movies', [
      {
        title: "Castle in the Sky",
        original_title: "天空の城ラピュタ",
        original_title_romanised: "Tenkū no shiro Rapyuta",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
        description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: "Grave of the Fireflies",
        original_title: "火垂るの墓",
        original_title_romanised: "Hotaru no haka",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
        description: "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "My Neighbor Totoro",
        original_title: "となりのトトロ",
        original_title_romanised: "Tonari no Totoro",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        description: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1988",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Kiki's Delivery Service",
        original_title: "魔女の宅急便",
        original_title_romanised: "Majo no takkyūbin",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
        description: "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Only Yesterday",
        original_title: "おもひでぽろぽろ",
        original_title_romanised: "Omoide poro poro",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg",
        description: "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
        release_date: "1991",
        createdAt: new Date(),
        updatedAt: new Date()  
      },

      {
        title: "Porco Rosso",
        original_title: "紅の豚",
        original_title_romanised: "Kurenai no buta",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
        description: "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "1992",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Pom Poko",
        original_title: "平成狸合戦ぽんぽこ",
        original_title_romanised: "Heisei tanuki gassen Ponpoko",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kowo9E1e1JcWLXj9cCvAOFZcy5n.jpg",
        description: "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
        release_date: "1994",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Whisper of the Heart",
        original_title: "耳をすませば",
        original_title_romanised: "Mimi wo sumaseba",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5E3Hvbu0bg38ouYf6chGftVGqZ7.jpg",
        description: "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
        director: "Yoshifumi Kondō",
        producer: "Toshio Suzuki",
        release_date: "1995",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Princess Mononoke",
        original_title: "もののけ姫",
        original_title_romanised: "Mononoke hime",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
        description: "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "1997",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "My Neighbors the Yamadas",
        original_title: "ホーホケキョ となりの山田くん",
        original_title_romanised: "Hōhokekyo tonari no Yamada-kun",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTGuHmMIBBgKakY80J1D52VvQKI.jpg",
        description: "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
        release_date: "1999",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Spirited Away",
        original_title: "千と千尋の神隠し",
        original_title_romanised: "Sen to Chihiro no kamikakushi",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        description: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2001",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Cat Returns",
        original_title: "猫の恩返し",
        original_title_romanised: "Neko no ongaeshi",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/avPMO5cnaGHgLaNiAIhy33WoQLm.jpg",
        description: "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
        director: "Hiroyuki Morita",
        producer: "Toshio Suzuki",
        release_date: "2002",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Howl's Moving Castle",
        original_title: "ハウルの動く城",
        original_title_romanised: "Hauru no ugoku shiro",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
        description: "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2004",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Tales from Earthsea",
        original_title: "ゲド戦記",
        original_title_romanised: "Gedo senki",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/67yYwCPq7NbxSF6BIIXCMD34sY0.jpg",
        description: "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2006",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Ponyo",
        original_title: "崖の上のポニョ",
        original_title_romanised: "Gake no ue no Ponyo",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
        description: "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2008",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Arrietty",
        original_title: "借りぐらしのアリエッティ",
        original_title_romanised: "Karigurashi no Arietti",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oc2OB2KDmSRDMelKEAA1n4YRQL0.jpg",
        description: "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
        director: "Hiromasa Yonebayashi",
        producer: "Toshio Suzuki",
        release_date: "2010",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "From Up on Poppy Hill",
        original_title: "コクリコ坂から",
        original_title_romanised: "Kokuriko zaka kara",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rRLYX4RZIyloHSJwvZKAhphAjiB.jpg",
        description: "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2011",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Wind Rises",
        original_title: "風立ちぬ",
        original_title_romanised: "Kaze tachinu",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg",
        description: "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        release_date: "2013",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Tale of the Princess Kaguya",
        original_title: "かぐや姫の物語",
        original_title_romanised: "Kaguya-Hime no Monogatari",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mWRQNlWXYYfd2z4FRm99MsgHgiA.jpg",
        description: "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
        director: "Isao Takahata",
        producer: "Yoshiaki Nishimura",
        release_date: "2013",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "When Marnie Was There",
        original_title: "思い出のマーニー",
        original_title_romanised: "Omoide no Marnie",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg",
        description: "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
        director: "Hiromasa Yonebayashi",
        producer: "Yoshiaki Nishimura",
        release_date: "2014",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Red Turtle",
        original_title: "レッドタートル ある島の物語",
        original_title_romanised: "Reddotātoru aru shima no monogatari",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOBU3SLjQ9358Km9YWYasPZyebp.jpg",
        description: "A man set adrift by a storm wakes up on a beach. He discovers that he is on a deserted island with plenty of fresh water, fruit and a dense bamboo forest. He builds a raft from bamboo and attempts to sail away, but his raft is destroyed by an unseen monster in the sea, forcing him back to the island. He tries again with another, larger raft, but is again foiled by the creature. A third attempt again ends with the raft destroyed, but this time he is confronted by a giant red turtle, which stares at him, and forces him back to the island.",
        director: "Michaël Dudok de Wit",
        producer: "Toshio Suzuki, Isao Takahata, Vincent Maraval, Pascal Caucheteux, Grégoire Sorlat",
        release_date: "2016",
        createdAt: new Date(),
        updatedAt: new Date()
      }
		])
	},

	down: async(queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};