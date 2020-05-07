use lessons_db;
db.dropDatabase();

db.lessons.insertMany(
  [{
        name: "Arctic Animals",
        image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        details: [
          {
                name: "Polar Bear",
                text: "Polar bears roam the Arctic ice sheets and swim in that region's coastal waters. They are very strong swimmers, and their large front paws, which they use to paddle, are slightly webbed. Some polar bears have been seen swimming hundreds of miles from land—though they probably cover most of that distance by floating on sheets of ice.",
                pic: "https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1739&q=80"
            },
            {
                name: "Arctic Fox",
                text: "The arctic fox is an incredibly hardy animal that can survive frigid Arctic temperatures as low as –58°F in the treeless lands where it makes its home. It has furry soles, short ears, and a short muzzle—all-important adaptations to the chilly clime. Arctic foxes live in burrows, and in a blizzard they may tunnel into the snow to create shelter.",
                pic: "https://images.unsplash.com/photo-1485094142704-b05d3759b589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                name: "Emperor Penguin",
                text: "Emperors are the largest of all penguins—an average bird stands some 45 inches tall. These flightless animals live on the Antarctic ice and in the frigid surrounding waters. They huddle together to escape wind and conserve warmth. Individuals take turns moving to the group's protected and relatively toasty interior. Once a penguin has warmed a bit it will move to the perimeter of the group so that others can enjoy protection from the icy elements.",
                pic: "https://images.unsplash.com/photo-1551986781-2f5b76ad4a88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
            }
        ]
    },
    {
          name: "Savannah Animals",
          image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          details: [{
                  name: "Elephant",
                  text: "Elephants are matriarchal, meaning they live in female-led groups. The matriarch is usually the biggest and oldest. She presides over a multi-generational herd that includes other females, called cows, and their young. Adult males, called bulls, tend to roam on their own, sometimes forming smaller, more loosely associated all-male groups. Having a baby elephant is a serious commitment. Elephants have a longer pregnancy than any other mammal—almost 22 months. Cows usually give birth to one calf every two to four years. At birth, elephants already weigh some 200 pounds and stand about three feet tall.",
                  pic: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              },
              {
                  name: "Zebra",
                  text: "No animal has a more distinctive coat than the zebra. Each animal's stripes are as unique as fingerprints—no two are exactly alike—although each of the three species has its own general pattern.",
                  pic: "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              },
              {
                  name: "Lion",
                  text: "Lions have been admired throughout history for as symbols of courage and strength. These iconic animals have powerful bodies—in the cat family, they’re second in size only to tigers—and roars that can be heard from five miles away. An adult lion’s coat is yellow-gold, and juveniles have some light spots that disappear with age. Only male lions typically boast manes, the impressive fringe of long hair that encircles their heads.",
                  pic: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              }
          ]
      },
    {
        name: "Human Body",
        image: "https://images.unsplash.com/photo-1508387027939-27cccde53673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80",
        details: [{
                name: "Eye",
                text: "The human eye is an organ that reacts to light and allows vision. Rod and cone cells in the retina allow conscious light perception and vision including color differentiation and the perception of depth. The human eye can differentiate between about 10 million colors and is possibly capable of detecting a single photon.",
                pic: "https://images.unsplash.com/photo-1521487825080-8276b36eb200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            },
            {
                name: "Foot",
                text: "The human foot is a strong and complex mechanical structure containing 26 bones, 33 joints (20 of which are actively articulated), and more than a hundred muscles, tendons, and ligaments.",
                pic: "https://images.unsplash.com/photo-1508387104394-d13e1b497f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1673&q=80"
            },
            {
                name: "Hand",
                text: "Each human hand has five metacarpals and eight carpal bones. Fingers contain some of the densest areas of nerve endings in the body, and are the richest source of tactile feedback. They also have the greatest positioning capability of the body; thus, the sense of touch is intimately associated with hands.",
                pic: "https://images.unsplash.com/photo-1581093581417-60b6c94a7945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            }
        ]
    },
    { name: "Solar System",
      image: "https://images.unsplash.com/photo-1485832329521-e944d75fa65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
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
    ]
  },
]
)
