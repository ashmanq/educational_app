use lessons_db;

db.dropDatabase();

db.lessons.insertMany(
  [{
        name: "Arctic Animals",
        image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        lesson_complete: "false",
        details: [
          {
                name: "Polar Bear",
                text: "Polar bears roam the Arctic ice sheets and swim in that region's coastal waters. They are very strong swimmers, and their large front paws, which they use to paddle, are slightly webbed. Some polar bears have been seen swimming hundreds of miles from land—though they probably cover most of that distance by floating on sheets of ice. Their main source of food is seals, which they hunt when the seals emerge from the ice to breathe. They can sense the seals thanks to their excellent sense of smell. The oldest polar bear recorded was 43 years old. They are classed as a 'vulnerable species' by the IUCN Red List.",
                pic: "https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1739&q=80"
            },
            {
                name: "Arctic Fox",
                text: "The arctic fox is an incredibly hardy animal that can survive frigid Arctic temperatures as low as –58°F in the treeless lands where it makes its home. It has furry soles, short ears, and a short muzzle—all-important adaptations to the chilly clime. Arctic foxes live in burrows, and in a blizzard they may tunnel into the snow to create shelter and it may also use its fluffy tail to protect its body from the cold. They may live for up to 11 years. They eat a wide, varied diet and are excellent scavengers. They can develop complex social structures, with each fox playing a role in the pack.",
                pic: "https://images.unsplash.com/photo-1485094142704-b05d3759b589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                name: "Emperor Penguin",
                text: "Emperors are the largest of all penguins—an average bird stands some 45 inches tall. These flightless animals live on the Antarctic ice and in the frigid surrounding waters. They huddle together to escape wind and conserve warmth. Individuals take turns moving to the group's protected and relatively toasty interior. Once a penguin has warmed a bit it will move to the perimeter of the group so that others can enjoy protection from the icy elements. They can a lifespan of up to 50 years. There are currently around 600,000 emperor penguins in the wild.",
                pic: "https://images.unsplash.com/photo-1551986781-2f5b76ad4a88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
            }
        ],
        questions: [
          {
            question: "What is the average height of a penguin?",
            answers: ["45 Inches", "45cm", "20 Inches", "4 Inches"],
            correct: "45 Inches"
          },
          {
            question: "What part of the body do polar bears use to help them swim?",
            answers: ["Front Paws", "Ears", "Fur", "Tail"],
            correct: "Front Paws"
          },
          {
            question: "Which one of these body parts would not help a polar bear survive in low artic temperatures?",
            answers: ["Short Ears", "Muzzle", "Dark Eyes", "Thick Fur"],
            correct: "Dark Eyes"
          },
          {
            question: "Where do arctic foxes usually live?",
            answers: ["Travelodge", "Burrow", "Tree", "Igloo"],
            correct: "Burrow"
          },
          {
            question: "How do emperor penguins cope with the cold Arctic climate?",
            answers: ["Central Heating", "Nests", "Huddling", "Blankets"],
            correct: "Huddling"
          },
          {
            question: "How many emperor penguins are there in the wild?",
            answers: ["100", "30,000", "600,000", "850,00"],
            correct: "600,000"
          },
          {
            question: "An arctic fox uses its tail to protect it from what?",
            answers: ["Other Foxes", "Cold", "Birds", "Polar Bears"],
            correct: "Cold"
          },
          {
            question: "What sense helps a polar bear hunt its main food source, seals?",
            answers: ["Taste", "Hearing", "Smell", "Touch"],
            correct: "Smell"
          }
        ]
    },
    {
          name: "Savannah Animals",
          image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          lesson_complete: "false",
          details: [{
                  name: "Elephant",
                  text: "Elephants are matriarchal, meaning they live in female-led groups. The matriarch is usually the biggest and oldest. She presides over a multi-generational herd that includes other females, called cows, and their young. Adult males, called bulls, tend to roam on their own, sometimes forming smaller, more loosely associated all-male groups. Having a baby elephant is a serious commitment. Elephants have a longer pregnancy than any other mammal—almost 22 months. Cows usually give birth to one calf every two to four years. At birth, elephants already weigh some 200 pounds and stand about three feet tall.",
                  pic: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              },
              {
                  name: "Zebra",
                  text: "No animal has a more distinctive coat than the zebra. Each animal's stripes are as unique as fingerprints—no two are exactly alike—although each of the three species has its own general pattern. The hotter the climate, the more stripes a zebra has though in rare cases, zebras have had black coats with white spots. They are highly social animals, who live in groups.",
                  pic: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              },
              {
                  name: "Lion",
                  text: "Lions have been admired throughout history for as symbols of courage and strength. These iconic animals have powerful bodies—in the cat family, they’re second in size only to tigers—and roars that can be heard from five miles away. An adult lion’s coat is yellow-gold, and young lions have some light spots that disappear with age. Only male lions typically boast manes, the puff of hair around the lion's head.",
                  pic: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              }
          ],
          questions: [
          {
            question: "What type of lion usually has a mane?",
            answers: ["Pregnant Females", "Males", "Elderly", "Virtual"],
            correct: "Males"
          },
          {
            question: "A zebra's ____ are usually unique.",
            answers: ["Fingerprints", "Stripes", "Names", "Tails"],
            correct: "Stripes"
          },
          {
            question: "From how far away can you hear a lion's roar?",
            answers: ["10 Miles", "10 Meters", "5 Miles", "500 Miles"],
            correct: "5 Miles"
          },
          {
            question: "How much does an elephant usually weigh at birth?",
            answers: ["20 Pounds", "200 Pounds", "10 Pounds", "65 Pounds"],
            correct: "200 Pounds"
          },
          {
            question: "In the wild, which elephant usually leads the group of elephants?",
            answers: ["Oldest Female", "Strongest Male", "Youngest Female", "Oldest Male"],
            correct: "Oldest Female"
          },
          {
            question: "How tall are elephants?",
            answers: ["2 Feet", "3 Feet", "12 Feet", "5 Feet"],
            correct: "3 Feet"
          },
          {
           question: "Which big cat is typically bigger than a typical lion?",
           answers: ["Tiger", "Dog", "Domestic Cat", "Leopard"],
           correct: "Tiger"
          },
          {
          question: "What is the puff of hair around a lion's head called?",
          answers: ["Main", "Maine", "Mane", "Man"],
          correct: "Mane"
        }
      ]
    },
    {
        name: "Human Body",
        image: "https://images.unsplash.com/photo-1508387027939-27cccde53673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80",
        lesson_complete: "false",
        details: [{
                name: "Eye",
                text: "You blink more than 10,000 times a day. Your eyelid is used to protect your eye. It takes less than half a second for a blink to be completed. Your pupils (the dark circle in your eye) get bigger in brighter light - this is to allow them to let the correct level of light into your eye as is this important to allowing you to see properly.",
                pic: "https://images.unsplash.com/photo-1521487825080-8276b36eb200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                name: "Teeth",
                text: "A person has two sets of teeth throughout their lifetimes, baby teeth and adult teeth. Teeth are also unique - any two people will have their own identical teeth! There are 20 teeth in a person's first set of teeth, increasing to 32 for a person's set of adult teeth. There are four separate types of teeth.",
                pic: "https://images.unsplash.com/photo-1530213709681-b7e537c923cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                name: "Hair",
                text: "There is hair all over your body - from your head to your cheek. Some of the hair is so fine that we can't see it with our eyes, although other parts, like the hair on our head, is 100,000 hairs thick! Between 50 - 100 hairs fall out of your head every day, from washing your hair or brushing it. Each hair stays in our head for up to 6 years. The colour of hair comes from melanin. The lighter someone's hair is, the less melanin present.",
                pic: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }
        ],
        questions: [
          {
            question: "How many teeth are in a set of human baby teeth?",
            answers: ["2", "20", "10", "7"],
            correct: "20"
          },
          {
            question: "How many hairs does a typical human have on their head?",
            answers: ["100", "250,000", "100,000", "10"],
            correct: "250,000"
          },
          {
            question: "How many different types of teeth do humans have?",
            answers: ["4", "2", "10", "8"],
            correct: "10"
          },
          {
            question: "How many times do we blink in a day?",
            answers: ["10", "10,000", "100,000,000", "5"],
            correct: "10,000"
          },
          {
            question: "How many teeth are in a set a human adult teeth?",
            answers: ["32", "100", "1", "22"],
            correct: "32"
          },
          {
            question: "What determines how our hair is coloured?",
            answers: ["Keratin", "Dopamine", "The Sun", "Melanin"],
            correct: "Melanin"
          },
          {
            question: "How many types of teeth do humans have?",
            answers: ["2", "3", "4", "10"],
            correct: "4"
          },
          {
            question: "What happens to your pupil when your eye is exposed to light?",
            answers: ["It gets smaller", "It gets bigger", "It changes colour", "It goes away"],
            correct: "It gets smaller"
          }
        ]
    },
    { name: "Solar System",
      image: "https://images.unsplash.com/photo-1485832329521-e944d75fa65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      lesson_complete: "false",
      details: [
    {
    name: "Mercury",
    text: "Mercury is the first planet from the sun. It is named after the Roman god Mercury, the messenger of the gods. It is also the smallest planet in the solar system.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/mercury.png"
    },
    {
    name: "Venus",
    text: "Venus is the second planet from the sun. It was given the name Venus after the goddess of love and beauty. Venus is one of the brightest objects that can be seen from Earth.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/venus.png"
    },
    {
    name: "Earth",
    text: "Earth is the third planet from the sun. It is the only planet in our solar system not to be named after a Roman God. Earth is a Germanic word which roughly translates to the ground.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/earth.png"
    },
    {
    name: "Mars",
    text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. The planet appears red because of the concentration of iron oxide on the surface of the planet.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/mars.png"
    },
    {
    name: "Jupiter",
    text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is named after the Roman god of the sky. The planet has brown and orange coloured zones, due to parts of the cloud reacting with the ultraviolet rays of the sun.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/jupiter.png"
    },
    {
    name: "Saturn",
    text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. Saturn is named after the Roman god of agriculture. It is a pale yellow colour due to ammonia crystals in the atmosphere.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/saturn.png"
    },
    {
    name: "Neptune",
    text: "Neptune is the furtherest planet from the Sun. It has the most powerful wind speeds of all the planets. It is the only planet that cannot be seen from Earth with the naked eye. It was named after the Roman god of the seas.",
    pic: "https://nineplanets.org/wp-content/uploads/2019/09/neptune.png"
    }
  ],
  questions: [
    {
    question: "Which planet was named after the Roman god of war?",
    answers: ["Mars", "Venus", "Earth", "Jupiter"],
    correct: "Mars"
    },
    {
      question: "Which planet is closest to the sun?",
      answers: ["Pluto", "The Moon", "Earth", "Mercury"],
      correct: "Mercury"
    },
    {
      question: "Which planet is the largest?",
      answers: ["Earth", "Jupiter", "Mars", "Neptune"],
      correct: "Jupiter"
    },
    {
      question: "Which planet cannot be seen from earth with the naked eye?",
      answers: ["Neptune", "Venus", "Earth", "The Moon"],
      correct: "Neptune"
    },
    {
      question: "Which planet is known for its red colour?",
      answers: ["Mars", "Venus", "Saturn", "Uranus"],
      correct: "Mars"
    },
    {
      question: "Which planet is furtherest from the sun?",
      answers: ["Mars", "Jupiter", "Earth", "Venus"],
      correct: "Jupiter"
    },
    {
      question: "Which planet was named after the Roman god of love and beauty?",
      answers: ["Venus", "Pluto", "Uranus", "Mars"],
      correct: "Venus"
    },
    {
      question: "Which planet is a pale yellow colour?",
      answers: ["Venus", "Mars", "Earth", "Saturn"],
      correct: "Saturn"
    }
    ]
    },
    {
      name: "Periodic Elements",
      image: "https://d2ebzu6go672f3.cloudfront.net/media/content/images/cr/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
      lesson_complete: "false",
      details: [{
            name: "Oxygen",
            text: "Oxygen is the chemical element with the symbol O. It is a gas at room temperature. It is the third most common element in the entire universe and animals, plants and humans alike need it to live! It, combined with another, element, hydrogen to make water - the chemical formula for this is H20.",
            pic: "https://trello-attachments.s3.amazonaws.com/5eb2cc1a9fc1de5b95b42ae3/5eb3fc7309233d1054762e33/ea7536c62924fcb693ae7078a2428054/Untitled_Diagram.png"
          },
          {
            name: 'Hydrogen',
            text: "Hydrogen is the chemical element with the symbol H. It is a gas at room temperature. It is the most common element in the Milky Way Galaxy. It is a gas at room temperature and is highly flammable, meaning that it catches fire very easily.",
            pic: "https://trello-attachments.s3.amazonaws.com/5eb2cc1a9fc1de5b95b42ae3/5eb3fc7309233d1054762e33/0cb16afc6b09686dace08a8319d1e60c/hydrogen.png"
          },
          {
            name: 'Gold',
            text: "Gold is the chemical element with the symbol Au. It is a solid at room temperature. It is also one of the softer metal elements in it's purest form. This is why it's almost always mixed with other metal elements like silver or palladium. It is also used in electronics; 10% of the gold produced in the world is used for electronics!",
            pic: "https://trello-attachments.s3.amazonaws.com/5eb2cc1a9fc1de5b95b42ae3/5eb3fc7309233d1054762e33/ccba786edab72f8c0d4b8ec974c0b045/gold.png"
          }],
        questions: [
          { question: "Which element is most likely to be used in jewellery?",
            answers: ["Gold", "Oxygen", "Carbon", "Water"],
            correct: "Gold"
          },
          {
            question: "What element has the symbol Au?",
            answers: ["Silver", "Oxygen", "Carbon", "Gold"],
            correct: "Gold"
          },
          {
            question: "Which element is most likely to be a gas at room temperature?",
            answers: ["Gold", "Silver", "Hydrogen", "Water"],
            correct: "Hydrogen"
          },
          {
            question: "Which element has the symbol O?",
            answers: ["Oxygen", "Water", "Carbon", "Silver"],
            correct: "Oxygen"
          },
          {
            question: "Which element is most likely to be used in electronics?",
            answers: ["Oxygen", "Hydrogen", "Helium", "Gold"],
            correct: "Gold"
          },
          {
            question: "Which element has the symbol H?",
            answers: ["Hydrogen", "Oxygen", "Gold", "Silver"],
            correct: "Hydrogen"
          },
          {
            question: "What does flammable mean?",
            answers: ["Is always on fire", "Cannot catch fire", "Catches Fire easily", "Makes a cold fire"],
            correct: "Catches fire easily"
          },
          {
            question: "What is H20?",
            answers: ["A poison", "Salt", "Water", "Air"],
            correct: "Water"
          }
          ]
}

    ]
)
