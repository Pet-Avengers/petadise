const defaultHappinessBonus = {
  "favorate2": {"value": 10, "reason": "[petName] loves it sooooo much!"},
  "favorate1": {"value": 8, "reason": "[petName] does love it!"},
  "good": {"value": 5, "reason": "[petName] thinks it is good"},
  "fair": {"value": 3, "reason": "[petName] thinks it just so so"},
  "dislike": {"value": 0, "reason": "[petName] seems don't like this"},
  "dislike1": {"value": -1, "reason": "[petName] doesn't like it"},
  "dislike2": {"value": -3, "reason": "[petName] hates it!!"},
  "notHungry": {"value": 1, "reason": "[petName] is happy to eat food. But it's recommended to feed [petName] twice a day"},
  "boneForOldDog": {"value": -2, "reason": "Protein may exist in the bone. But [petName]'s teeth is inappropriate to bite this"},
  "boneForPuppy": {"value": 2, "reason": "Biting bones helps puppy to clean teeth, but remember that chicken bone is dangerous to their stomach"},
  "boneForCat": {"value": -5, "reason": "Bones are dangerous for cat. Stop doing that!"},
  "fishForYoungerCat": {"value": -2, "reason": "Remember that fish bones might can be dangerous for [petName]"},
  "fishForOldCat": {"value": -2, "reason": "[petName] loves fish very much"},
  "fishForDogs": {"value": -2, "reason": "Remember that cooked bones of any kind can be dangerous for [petName]"},
  "frisbee": {"value": 5, "reason": "[petName] likes to play frisbee! You have a great time with [petName]"},
  "ball": {"value": 5, "reason": "[petName] feels exciting! Catch the ball, catch happier life!"},
  "bear": {"value": 2, "reason": "[petName] stays with dear bear, feeling relaxed"},
  "collar": {"value": 1, "reason": "[petName] doesn't like collar that much, but it's a good idea to train [petName] before walk out."},
  "collarCat": {"value": 1, "reason": "[petName] doesn't like collar that much, but it's a good idea to find [petName] when [petName] is playing hide and seek."},
  "cannedFoodForYoung": {"value": 5, "reason": "[petName] likes canned food. But it's better to feed [petName] with dog food of its age because [petName] is young"},
  "cannedFoodForCat": {"value": 3, "reason": "[petName] likes canned food. But it's better to feed [petName] with cat food to protect her stomach."}
};

const defaultNonDemandHappinessBonus = {
  "feed_1": {"value": 1, "reason": "[petName] is happy for your attention, but feeding too much is not good to its body"},
  "walk_1": {"value": 0, "reason": "[petName] is very tired and wants to stay at home"},
  "play_1": {"value": 2, "reason": "[petName] wants to play with you at any time"},
  "play_2": {"value": 0, "reason": "[petName] doesn't want to play with you now"},
};

const petTags = {
  "species": {
    "question": "Which species do you prefer?",
    "choices": {"cat": "cat", "dog": "dog"}
  },
  "age": {
    "question": "What age do you prefer?",
    "choices": {"young": "young", "mature": "mature"}
  }
}

const petInfo =
{
  // old dog
  // petName
  "Frankie":
  {
    //tag
    "tag":
      {
        "species": petTags.species.choices.dog,
        "age": petTags.age.choices.mature
      },
    //description
    "description": "Frankie is 6 years old. You have to pay more attention about his health. " + 
    "Also, the nutrient supply is very important to him. " + 
    "His teeth starts shedding. So you have to care about his teeth condition. " + 
    "Frankie eats two meals a day, also he might need some snacks in the afternoon. " + 
    "His energy is less than before, but he still needs to walk outside to explore the world. ",
    // type
    "feed"://done
      {
        "demand":
          [
            { 
              "tips": "[petName] wants to have breakfast at [startTime], which food do you want to feed [petName]?",
              "startTime": "08:00:00",
              "endTime": "08:30:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.favorate2,
                  defaultHappinessBonus.favorate1,
                  defaultHappinessBonus.boneForOldDog,
                  defaultHappinessBonus.good
                ]
            },
            { 
              "tips": "It's time for [petName] to have dinner, pick an ideal food for [petName]",
              "startTime": "18:00:00",
              "endTime": "18:30:00",
              "happinessBonus":
                [
                  {"value": 2, "reason": "[petName] likes it. But he can't eat too much of this"},
                  defaultHappinessBonus.favorate1,
                  defaultHappinessBonus.boneForOldDog,
                  defaultHappinessBonus.good
                ]
            }
          ],
        "nondemand":
        [
          {
            "tips": "[petName] is not hungry",
            "startTime": "00:00:00",
            "endTime": "08:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.notHungry,
                defaultNonDemandHappinessBonus.notHungry,
                defaultHappinessBonus.boneForOldDog,
                defaultNonDemandHappinessBonus.notHungry
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "08:30:00",
            "endTime": "18:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.notHungry,
                defaultNonDemandHappinessBonus.notHungry,
                defaultHappinessBonus.boneForOldDog,
                defaultNonDemandHappinessBonus.notHungry
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "18:30:00",
            "endTime": "24:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.notHungry,
                defaultNonDemandHappinessBonus.notHungry,
                defaultHappinessBonus.boneForOldDog,
                defaultNonDemandHappinessBonus.notHungry
              ]
          }
        ]

      },
    // type
    "play":
      {
        "demand":
          [
            {
              "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
              "startTime": "15:00:00",
              "endTime": "18:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.frisbee,
                  defaultHappinessBonus.ball,
                  defaultHappinessBonus.bear,
                  defaultHappinessBonus.collar
                ]
            },
            {
              "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
              "startTime": "18:00:00",
              "endTime": "21:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.frisbee,
                  defaultHappinessBonus.ball,
                  defaultHappinessBonus.bear,
                  defaultHappinessBonus.collar
                ]
            }
          ],
        "nondemand":
        [
          {
            "tips": "[petName] enjoy playing with you!",
            "startTime": "00:00:00",
            "endTime": "15:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1
              ]
          },
          {
            "tips": "[petName] enjoy playing with you!",
            "startTime": "21:00:00",
            "endTime": "24:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1,
                defaultNonDemandHappinessBonus.play_1
              ]
          }
        ]

      },
    // type
    "walk":
      {
        "demand":
          [
            {
              "tips": "[petName] wants to have a walk at [startTime], and...",
              "startTime": "19:00:00",
              "endTime": "22:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.favorate,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.favorate1,
                  defaultHappinessBonus.dislike2
                ]
            }
          ],
        "nondemand":
          {
            "tips": "[petName] doesn't want to go outside",
            "startTime": "00:00:00",
            "endTime": "24:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1
              ]
          }
      }
  },
  // young dog
  // petName
  "Cooper":
  {
    //tag
    "tag":
      {
        "species": petTags.species.choices.dog,
        "age": petTags.age.choices.young
      },
    //description
    "description": "Frankie is a 5 month old puppy. He loves biting everything. He has a lot of energy, you have to spend more time teaching and playing with Frankie. "+
    "And he needs to eat three times to four times a day. Remember to prepare good food for him so that he can grow stronger.",
    // type
    "feed":
      {
        "demand":
          [
            {
              "tips": "[petName] wants to have breakfast at [startTime], which food do you want to feed [petName]?",
              "startTime": "08:00:00",
              "endTime": "08:30:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.cannedFoodForYoung,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.boneForPuppy,
                  defaultHappinessBonus.fishForDogs
                ]
            },
            {
              "tips": "[petName] wants to have snacks at [startTime], which food do you want to feed [petName]?",
              "startTime": "12:00:00",
              "endTime": "13:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.cannedFoodForYoung,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.boneForPuppy,
                  defaultHappinessBonus.fishForDogs
                ]
            },
            {
              "tips": "[petName] wants to have snacks at [startTime], which food do you want to feed [petName]?",
              "startTime": "15:00:00",
              "endTime": "16:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.cannedFoodForYoung,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.boneForPuppy,
                  defaultHappinessBonus.fishForDogs
                ]
            },
            {
              "tips": "It's time for [petName] to have dinner, which food do you want to feed [petName]?",
              "startTime": "18:00:00",
              "endTime": "19:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.cannedFoodForYoung,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.boneForPuppy,
                  defaultHappinessBonus.fishForDogs
                ]
            }
          ],
        "nondemand":
        [
          {
            "tips": "[petName] is not hungry",
            "startTime": "00:00:00",
            "endTime": "08:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "08:30:00",
            "endTime": "12:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "13:00:00",
            "endTime": "15:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "16:00:00",
            "endTime": "18:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1
              ]
          },
          {
            "tips": "[petName] is not hungry",
            "startTime": "19:00:00",
            "endTime": "24:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1,
                defaultNonDemandHappinessBonus.feed_1
              ]
          },
        ]

      },
    // type
    "play":
    {
      "demand":
        [
          {
            "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
            "startTime": "8:00:00",
            "endTime": "12:00:00",
            "happinessBonus":
              [
                defaultHappinessBonus.frisbee,
                defaultHappinessBonus.ball,
                defaultHappinessBonus.bear,
                defaultHappinessBonus.collar
              ]
          },
          {
            "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
            "startTime": "12:00:00",
            "endTime": "15:00:00",
            "happinessBonus":
              [
                defaultHappinessBonus.frisbee,
                defaultHappinessBonus.ball,
                defaultHappinessBonus.bear,
                defaultHappinessBonus.collar
              ]
          },
          {
            "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
            "startTime": "15:00:00",
            "endTime": "18:00:00",
            "happinessBonus":
              [
                defaultHappinessBonus.frisbee,
                defaultHappinessBonus.ball,
                defaultHappinessBonus.bear,
                defaultHappinessBonus.collar
              ]
          },
          {
            "tips": "[petName] wants to play with you now, pick up a toy to play with [petName]",
            "startTime": "18:00:00",
            "endTime": "21:00:00",
            "happinessBonus":
              [
                defaultHappinessBonus.frisbee,
                defaultHappinessBonus.ball,
                defaultHappinessBonus.bear,
                defaultHappinessBonus.collar
              ]
          }
        ],
      "nondemand":
      [
        {
          "tips": "[petName] enjoy playing with you!",
          "startTime": "00:00:00",
          "endTime": "15:00:00",
          "happinessBonus":
            [
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1
            ]
        },
        {
          "tips": "[petName] enjoy playing with you!",
          "startTime": "21:00:00",
          "endTime": "24:00:00",
          "happinessBonus":
            [
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1,
              defaultNonDemandHappinessBonus.play_1
            ]
        }
      ]

    },
    // type
    "walk":
      {
        "demand":
          [
            {
              "tips": "[petName] wants to have a walk at [startTime], and...",
              "startTime": "19:00:00",
              "endTime": "22:00:00",
              "happinessBonus":
                [
                  defaultHappinessBonus.favorate,
                  defaultHappinessBonus.fair,
                  defaultHappinessBonus.favorate1,
                  defaultHappinessBonus.dislike2
                ]
            }
          ],
        "nondemand":
          {
            "tips": "[petName] doesn't want to go outside",
            "startTime": "00:00:00",
            "endTime": "24:00:00",
            "happinessBonus":
              [
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1,
                defaultNonDemandHappinessBonus.walk_1
              ]
          }
      }
  },
  // old cat
  // petName
  "Mikky":
    {
      //tag
      "tag":
      {
        "species": petTags.species.choices.cat,
        "age": petTags.age.choices.mature
      },
      //description
      "description": "Mikky is a 7 years old kitty. She is a little sweetheart. " +
      "She loves to be near people, but isn't much for being held/contained. She'll climb on your lap or ask to be picked up on her terms.",
      // type
      "feed":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to have breakfast at [startTime], which food do you want to pick?",
                "startTime": "07:00:00",
                "endTime": "08:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForOldCat
                  ]
              },
              {
                "tips": "[petName] wants to have snacks at [startTime], which food do you want to pick?",
                "startTime": "13:00:00",
                "endTime": "14:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForOldCat
                  ]
              },
              {
                "tips": "[petName] wants to have dinner at [startTime], which food do you want to pick?",
                "startTime": "18:00:00",
                "endTime": "19:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForOldCat
                  ]
              },
            ],
          "nondemand":
          [
            {
              "tips": "[petName] is not hungry",
              "startTime": "00:00:00",
              "endTime": "07:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },            
            {
              "tips": "[petName] is not hungry",
              "startTime": "08:00:00",
              "endTime": "13:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "14:00:00",
              "endTime": "18:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "19:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            }
          ]
        },
      // type
      "play":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to play with you, pick up a toy to play with [petName]",
                "startTime": "18:00:00",
                "endTime": "23:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.frisbee,
                    defaultHappinessBonus.ball,
                    defaultHappinessBonus.bear,
                    defaultHappinessBonus.collarCat
                  ]
              }
            ],
          "nondemand":
          [
            {
              "tips": "[petName] enjoy playing with you!",
              "startTime": "00:00:00",
              "endTime": "18:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2
                ]
            },
            {
              "tips": "[petName] enjoy playing with you!",
              "startTime": "23:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2
                ]
            }
          ]
        },
      // type
      "walk":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to have a walk at [startTime], and...",
                "startTime": "19:00:00",
                "endTime": "22:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.favorate,
                    defaultHappinessBonus.fair,
                    defaultHappinessBonus.favorate1,
                    defaultHappinessBonus.dislike2
                  ]
              }
            ],
          "nondemand":
            {
              "tips": "[petName] doesn't want to go outside",
              "startTime": "00:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1
                ]
            }
        }
    },
  // young cat
  // petName
  "Max":
    {
      //tag
      "tag":
      {
        "species": petTags.species.choices.cat,
        "age": petTags.age.choices.young
      },
      //description
      "description": "Mikky is a five months old kitty. She's a gorgeous little kitten who loves to play, pounce, purr and cuddle. She loves toys! Even if it's not a toy, She'll find a way to play with it." +
      "You have to spend so much time teaching and feeding them, it will be a huge mission.",
      // type
      "feed":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to have breakfast at [startTime], which food do you want to feed [petName]?",
                "startTime": "07:00:00",
                "endTime": "08:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForYoungerCat
                  ]
              },
              {
                "tips": "[petName] wants to have snacks at [startTime], which food do you want to feed [petName]?",
                "startTime": "12:00:00",
                "endTime": "13:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForYoungerCat
                  ]
              },
              {
                "tips": "[petName] wants to have snacks at [startTime], which food do you want to feed [petName]?",
                "startTime": "15:00:00",
                "endTime": "16:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.cannedFoodForCat,
                    defaultHappinessBonus.good,
                    defaultHappinessBonus.boneForCat,
                    defaultHappinessBonus.fishForYoungerCat
                  ]
              },
              {
                "tips": "It's time for dinner! which food do you want to feed [petName]?",
                "startTime": "18:00:00",
                "endTime": "19:00:00",
                "happinessBonus":
                  [
                    [
                      defaultHappinessBonus.cannedFoodForCat,
                      defaultHappinessBonus.good,
                      defaultHappinessBonus.boneForCat,
                      defaultHappinessBonus.fishForYoungerCat
                    ]
                  ]
              }
            ],
          "nondemand":
          [
            {
              "tips": "[petName] is not hungry",
              "startTime": "00:00:00",
              "endTime": "07:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "08:00:00",
              "endTime": "12:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "13:00:00",
              "endTime": "15:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "16:00:00",
              "endTime": "18:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            },
            {
              "tips": "[petName] is not hungry",
              "startTime": "19:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1,
                  defaultNonDemandHappinessBonus.feed_1
                ]
            }
          ]

        },
      // type
      "play":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to play with you, and...",
                "startTime": "18:00:00",
                "endTime": "23:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.frisbee,
                    defaultHappinessBonus.bear,
                    defaultHappinessBonus.ball,
                    defaultHappinessBonus.collarCat
                  ]
              }
            ],
          "nondemand":
          [
            {
              "tips": "[petName] enjoy playing with you!",
              "startTime": "00:00:00",
              "endTime": "18:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2
                ]
            },            
            {
              "tips": "[petName] enjoy playing with you!",
              "startTime": "23:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2,
                  defaultNonDemandHappinessBonus.play_2
                ]
            }
          ]

        },
      // type
      "walk":
        {
          "demand":
            [
              {
                "tips": "[petName] wants to have a walk at [startTime], and...",
                "startTime": "19:00:00",
                "endTime": "22:00:00",
                "happinessBonus":
                  [
                    defaultHappinessBonus.favorate,
                    defaultHappinessBonus.fair,
                    defaultHappinessBonus.favorate1,
                    defaultHappinessBonus.dislike2
                  ]
              }
            ],
          "nondemand":
            {
              "tips": "[petName] doesn't want to go outside",
              "startTime": "00:00:00",
              "endTime": "24:00:00",
              "happinessBonus":
                [
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1,
                  defaultNonDemandHappinessBonus.walk_1
                ]
            }
        }
    }
};

exports.petInfo = petInfo;
exports.petTags = petTags;
