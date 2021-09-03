export default {
  destinations: [
    {
      slug: "1",
      title: "First, some general considerations:",
      teaser: "RWE has been consslugered as supportive data, or in select cases as a central evslugence in achieving a regulatory objective. For example, in situations with:",
      listItems: [
        "Rare diseases",
        "High magnitude of treatment effect",
        "Randomized clinical trial (RCT) not feasible",
        "Real world data (RWD) available or can be generated"
      ],
      optionCardIntro: "Sound similar to your situation? If so, what is your regulatory objective? Click one of the following categories:",
      optionCards: [
        {
          slug : "1.1",
          option : "Option 1", 
          title : "Option card on destination page",
          teaser: "This is option card one",
          image : "new.png",
          listItems: [
            "Rare diseases",
            "High magnitude of treatment effect",
            "Randomized clinical trial (RCT) not feasible",
            "Real world data (RWD) available or can be generated"
          ],
          TierTwo : [
          {
            slug: "1.1.1",
            title: "This is the next set of cards down after Destination --> Option 1",
            teaser: "This is option-1, Tier 2",
            listItems: [
              "Rare diseases",
              "High magnitude of treatment effect",
              "Randomized clinical trial (RCT) not feasible",
              "Real world data (RWD) available or can be generated"
            ],
            optionCardIntro: "Click on one to learn more:",
            TierTwoOptionCards: {
              OptionOne: {
                slug : "1.1.1.1",
                option : "Option 1",
                details : "Option Card on Tier Two Page",
                TierThree: {
                  optionCards: {
                  OptionOne: {
                    "0" : "Case 1",
                    "1" : "Case name and details",
                    "caseStudy": "case study 1"
                    }
                  }
                },
              },
              OptionTwo: {
                slug : "1.1.1.2",
                option : "Option 2",
                details : "Option Card on Tier Two Page",
              }
            }
          }
            
          ],
          },
        {
          option : "Option 2",
          slug : "1.2",
          title : "Option card on destination page",
          teaser: "This is a page decription",
          image : "new.png",
          listItems: [
            "Rare diseases",
            "High magnitude of treatment effect",
            "Randomized clinical trial (RCT) not feasible",
            "Real world data (RWD) available or can be generated"
          ],
          TierTwo : {
              slug: "1.2.2",
              title: "option-1, option-2",
              teaser: "Some kind of a description",
              listItems: [
                "Rare diseases",
                "High magnitude of treatment effect",
                "Randomized clinical trial (RCT) not feasible",
                "Real world data (RWD) available or can be generated"
              ],
              optionCardIntro: "Intro to option card choices",
              TierTwoOptionCards: {
                  OptionOne: {
                    slug : "1.2.2.1",
                    option : "Option 1",
                    details : "Option Card on Tier Two Page",
                    image : "new.png"
                  },
                  OptionTwo: {
                    slug : "1.2.2.2",
                    option : "Option 2",
                    details : "Option Card on Tier Two Page",
                    image : "new.png"
                  }
              }
            },
        },
        {
          slug : "1.3",
          option : "Option 3",
          title : "Option card on destination page",
          teaser: "Option card on destination page",
          image : "new.png",
          listItems: [
            "Rare diseases",
            "High magnitude of treatment effect",
            "Randomized clinical trial (RCT) not feasible",
            "Real world data (RWD) available or can be generated"
          ],
          TierTwo : {
            slug : "1.3.2",
            title: "option-1, option-2",
            teaser: "Some kind of a description",
            listItems: [
              "Rare diseases",
              "High magnitude of treatment effect",
              "Randomized clinical trial (RCT) not feasible",
              "Real world data (RWD) available or can be generated"
            ],
              optionCardIntro: "Intro to option card choices",
              tierTwoOptionCards: {
                  OptionOne: {
                    slug : "1.3.2.1",
                    option : "Option 1",
                    details : "Option Card on Tier Two Page",
                    image : "new.png"
                  },
                  OptionTwo: {
                    slug : "1.3.2.2",
                    option : "option 2",
                    details : "Option Card on Tier Two Page",
                    image : "new.png"
                  }
              }
            },
        }
       
      ],
    },

  ]
};
