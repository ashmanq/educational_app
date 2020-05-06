use lessons_db;
db.dropDatabase;

db.lessons.insertMany(
  [{
        name: "Arctic Animals",
        image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        details: [{
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
    }
]
)
