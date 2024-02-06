export const menuData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "158855",
              name: "Candice's Gourmet Sandwiches & Wraps",
              city: "Bangalore",
              slugs: {
                restaurant: "candice39s-gourmet-sandwiches-koramangala",
                city: "bangalore",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "d1331113564b015c9d55c48ff48a2553",
              locality: "5th Block",
              areaName: "Koramangala",
              costForTwo: "60000",
              costForTwoMessage: "₹600 for two",
              cuisines: ["Continental", "American"],
              avgRating: 4.6,
              feeDetails: {
                restaurantId: "158855",
                fees: [
                  { name: "distance", fee: 3800 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 3800,
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "0.4 kms | ₹38 Delivery fee will apply",
              },
              parentId: "465403",
              avgRatingString: "4.6",
              totalRatingsString: "1K+ ratings",
              sla: {
                restaurantId: "158855",
                deliveryTime: 22,
                minDeliveryTime: 22,
                maxDeliveryTime: 22,
                lastMileTravel: 0.4,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 1,
                slaString: "22 MINS",
                lastMileTravelString: "0.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-01-17 23:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "30% off",
                shortDescriptionList: [
                  {
                    meta: "30% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "15% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "30% off up to ₹75 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "15% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "candice39s-gourmet-sandwiches-koramangala",
              multiOutlet: true,
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "Chinita Real Mexican Food 25, 1st Floor, 5th Cross, 5th Block, Koramangala, Bangalore - 560095",
                },
                { title: "Cuisines", message: "Continental,American" },
              ],
              logo: "v1657612703/gourmet%20header%20logos/Candice_s_Gourmet_Sandwiches.png",
              totalRatings: 1000,
              aggregatedDiscountInfoV2: {
                header: "30% off",
                shortDescriptionList: [
                  {
                    meta: "30% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "15% off | Use PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "30% off up to ₹75 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "15% off | Use code PARTY",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 560,
                  maxValue: 800,
                  priority: 2,
                  couponCode: "PARTY",
                  discountInfo: { discountType: "Percentage", value: 15 },
                  lockedMessage:
                    "Add items worth ₹<amount> to unlock flat 15% off | Code PARTY",
                  unlockedMessage:
                    "PARTY Coupon Unlocked! Use it to save flat 15% off",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/158855",
              },
              expectationNotifiers: [
                {
                  text: "0.4 kms | ₹38 Delivery fee will apply",
                  icon: { imageId: "v1648635511/Delivery_fee_new_cjxumu" },
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "<b>0.4 kms</b> | ₹38 Delivery fee will apply",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              generalPurposeInfoListV2: [
                { cta: { info: { recordings: {} }, linkCta: {} } },
              ],
              ratingSlab: "RATING_SLAB_5",
              restaurantCategory: "RESTAURANT_CATEGORY_GOURMET",
              backgroundImage:
                "v1657612827/gourmet%20menu%20header/Candice_s_Gourmet_Sandwiches_1.png",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              hasGuiltfreeItems: true,
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              latLong: "12.9354051,77.62242509999999",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 3,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "30% OFF UPTO ₹75",
                      offerTagColor: "#E46D47",
                      offerIds: ["45562f28-60d4-454a-9b59-27e72c69c243"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹159",
                      offerType: "offers",
                      restId: "158855",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT 15% OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["ad051379-9366-4e9f-8b0a-f44608910225"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE PARTY",
                      description: "ABOVE ₹800",
                      offerType: "offers",
                      restId: "158855",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹120 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                      offerIds: ["0681e750-4d60-4066-9e7d-be11d720f180"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE AXIS120",
                      description: "ABOVE ₹500",
                      offerType: "offers",
                      restId: "158855",
                      offerLogo:
                        "rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
                habitMilestoneInfo: { callout: {} },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {},
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: { attributes: { displayText: "VEG" } },
                      nonvegFilter: { attributes: { displayText: "NONVEG" } },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1454633",
                          creativeId: "TopPicks/CBMS.png",
                          title: "Chicken Banh Mi Sandwich",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "59775946",
                              name: "Chicken Banh Mi Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled lemongrass marinated chicken, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo.",
                              imageId: "83ba23de9bbcebaf96c6643f8614c080",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821255",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 365,
                                        default: 1,
                                        id: "65537247",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 390,
                                        id: "65537248",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 395,
                                        id: "65537249",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537247",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537248",
                                      },
                                    ],
                                    price: 39000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537249",
                                      },
                                    ],
                                    price: 39500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379047",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379049",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594381",
                                      name: "Extra Sriracha",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594382",
                                      name: "Extra Jalapenos",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379052",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379053",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 36500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1454636",
                          creativeId: "TopPicks/MPCS.png",
                          title: "Mushroom Philly Cheesesteak Sandwich",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "68537075",
                              name: "Mushroom Philly Cheesesteak Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Pan-fried mushroom, melted mozzarella and mild cheddar, grilled onions and green peppers, garlic butter.",
                              imageId: "13219187d703fa2854a9e525bbb846f5",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821397",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 345,
                                        default: 1,
                                        id: "65537659",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 370,
                                        id: "65537660",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 375,
                                        id: "65537661",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537659",
                                      },
                                    ],
                                    price: 34500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537660",
                                      },
                                    ],
                                    price: 37000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537661",
                                      },
                                    ],
                                    price: 37500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379595",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594403",
                                      name: "Extra Mushroom",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379597",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594421",
                                      name: "Extra Green Pepper",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379600",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379608",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 34500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1454639",
                          creativeId: "TopPicks/CMMGW.png",
                          title: "Chicken, Mushroom & Mojo Grilled Wrap",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "76128892",
                              name: "Chicken, Mushroom & Mojo Grilled Wrap",
                              category: "Grilled Wraps",
                              description:
                                "Serves 1 | Grilled wrap with grilled chicken, pan-fried mushroom, roasted garlic mojo, cheese and lettuce.",
                              imageId: "acc5c693ff3673c5431888de6d404614",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379632",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594403",
                                      name: "Extra Mushroom",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379634",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379636",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379638",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1454642",
                          creativeId: "TopPicks/LTPGW.png",
                          title: "Lemongrass Tofu & Peanut Grilled Wrap",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "76128897",
                              name: "Lemongrass Tofu & Peanut Grilled Wrap",
                              category: "Grilled Wraps",
                              description:
                                "Serves 1 | Grilled wrap with grilled lemongrass-marinated tofu, pickled radish & carrot, crispy rice noodles, sriracha and lettuce.",
                              imageId: "8878dd861b10d34fbe6b4a21b756f08f",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379669",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594429",
                                      name: "Extra Tofu",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379670",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594381",
                                      name: "Extra Sriracha",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379672",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379673",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1454645",
                          creativeId: "TopPicks/Flan.png",
                          title: "Flan",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "60067914",
                              name: "Flan",
                              category: "Desserts",
                              description:
                                "Serves 1 | Creamy, silky Mexican caramel custard, with a hint of bitter caramel.",
                              imageId: "e6f497880699aa9fd8b945c589202353",
                              inStock: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "38066304",
                              name: "Mushrooms in Garlic Mojo Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Sauteed mushrooms, mozzarella cheese, roasted garlic mojo, jalapeno, lettuce and tomatoes.",
                              imageId: "f9cd1e768b0f9e0b282658e33d58d178",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821265",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 335,
                                        default: 1,
                                        id: "65537273",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 360,
                                        id: "65537274",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 365,
                                        id: "65537275",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821265",
                                        variationId: "65537273",
                                      },
                                    ],
                                    price: 33500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379087",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379084",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379079",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821265",
                                        variationId: "65537274",
                                      },
                                    ],
                                    price: 36000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379087",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379084",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379079",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821265",
                                        variationId: "65537275",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379087",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379087",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379084",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379083",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379079",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379079",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594403",
                                      name: "Extra Mushroom",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379083",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594404",
                                      name: "Extra Mozzarella Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379084",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379087",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 33500,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "158 ratings",
                                  ratingCountV2: "158",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68537075",
                              name: "Mushroom Philly Cheesesteak Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Pan-fried mushroom, melted mozzarella and mild cheddar, grilled onions and green peppers, garlic butter.",
                              imageId: "13219187d703fa2854a9e525bbb846f5",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821397",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 345,
                                        default: 1,
                                        id: "65537659",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 370,
                                        id: "65537660",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 375,
                                        id: "65537661",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537659",
                                      },
                                    ],
                                    price: 34500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537660",
                                      },
                                    ],
                                    price: 37000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821397",
                                        variationId: "65537661",
                                      },
                                    ],
                                    price: 37500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379597",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379597",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379608",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379600",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379595",
                                        addonId: "50594403",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379595",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594403",
                                      name: "Extra Mushroom",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379597",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594421",
                                      name: "Extra Green Pepper",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379600",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379608",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 34500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "107 ratings",
                                  ratingCountV2: "107",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "38066302",
                              name: "Pesto Paneer Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Broiled balsamic marinated paneer, basil pesto, red capsicum, eggplant, pickled onions, lettuce and tomatoes.",
                              imageId: "9506fe532e616c9823d270b857bd277c",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821271",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 345,
                                        default: 1,
                                        id: "65537291",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 370,
                                        id: "65537292",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 375,
                                        id: "65537293",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821271",
                                        variationId: "65537291",
                                      },
                                    ],
                                    price: 34500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379117",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379109",
                                        addonId: "50594409",
                                      },
                                      {
                                        groupId: "63379115",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594411",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594398",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821271",
                                        variationId: "65537292",
                                      },
                                    ],
                                    price: 37000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379117",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379109",
                                        addonId: "50594409",
                                      },
                                      {
                                        groupId: "63379115",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594411",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594398",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821271",
                                        variationId: "65537293",
                                      },
                                    ],
                                    price: 37500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379117",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379117",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379109",
                                        addonId: "50594409",
                                      },
                                      {
                                        groupId: "63379115",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594411",
                                      },
                                      {
                                        groupId: "63379112",
                                        addonId: "50594398",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379109",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594409",
                                      name: "Extra Paneer",
                                      price: 10500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379112",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594408",
                                      name: "Extra Pesto",
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594411",
                                      name: "Extra Red Capsicum & Eggplant",
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379115",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379117",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 34500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "207 ratings",
                                  ratingCountV2: "207",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59775949",
                              name: "Tofu Banh Mi Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Baked lemongrass marinated tofu, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo.",
                              imageId: "3e450a89308e3a7806fea43d24382a07",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821286",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 335,
                                        default: 1,
                                        id: "65537334",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 360,
                                        id: "65537335",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 365,
                                        id: "65537336",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821286",
                                        variationId: "65537334",
                                      },
                                    ],
                                    price: 33500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379177",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379172",
                                        addonId: "50594429",
                                      },
                                      {
                                        groupId: "63379175",
                                        addonId: "50594383",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821286",
                                        variationId: "65537335",
                                      },
                                    ],
                                    price: 36000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379177",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379172",
                                        addonId: "50594429",
                                      },
                                      {
                                        groupId: "63379175",
                                        addonId: "50594383",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821286",
                                        variationId: "65537336",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379177",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379177",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379173",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379172",
                                        addonId: "50594429",
                                      },
                                      {
                                        groupId: "63379175",
                                        addonId: "50594383",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379172",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594429",
                                      name: "Extra Tofu",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379173",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594381",
                                      name: "Extra Sriracha",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594382",
                                      name: "Extra Jalapenos",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379175",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379177",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 33500,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "97 ratings",
                                  ratingCountV2: "97",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60138695",
                              name: "Melted Caprese Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Broiled tomatoes, basil pesto, melted mozzarella.",
                              imageId: "86c8c1dacbba8e0b5ae5c683eced13f6",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821336",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 335,
                                        default: 1,
                                        id: "65537480",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 360,
                                        id: "65537481",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 365,
                                        id: "65537482",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821336",
                                        variationId: "65537480",
                                      },
                                    ],
                                    price: 33500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379400",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379398",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594454",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821336",
                                        variationId: "65537481",
                                      },
                                    ],
                                    price: 36000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379400",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379398",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594454",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821336",
                                        variationId: "65537482",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379400",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379400",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379398",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379397",
                                        addonId: "50594454",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379397",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594408",
                                      name: "Extra Pesto",
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594404",
                                      name: "Extra Mozzarella Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594454",
                                      name: "Extra Broiled Tomatoes",
                                      price: 8000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379398",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379400",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 6,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 33500,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "91 ratings",
                                  ratingCountV2: "91",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59775947",
                              name: "Grilled Chicken & Cheese Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled chicken, emmental cheese, pickled onion and house creamy cheese dressing.",
                              imageId: "aa3fb84b0689611be82d5c9e77745c4c",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821260",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 365,
                                        default: 1,
                                        id: "65537260",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 390,
                                        id: "65537261",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 395,
                                        id: "65537262",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821260",
                                        variationId: "65537260",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379068",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379068",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379070",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379065",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821260",
                                        variationId: "65537261",
                                      },
                                    ],
                                    price: 39000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379068",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379068",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379070",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379065",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821260",
                                        variationId: "65537262",
                                      },
                                    ],
                                    price: 39500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379068",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379068",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379070",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379071",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379065",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379065",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379068",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594399",
                                      name: "Extra Emmental Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379070",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379071",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 36500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "342 ratings",
                                  ratingCountV2: "342",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59775946",
                              name: "Chicken Banh Mi Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled lemongrass marinated chicken, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo.",
                              imageId: "83ba23de9bbcebaf96c6643f8614c080",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821255",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 365,
                                        default: 1,
                                        id: "65537247",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 390,
                                        id: "65537248",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 395,
                                        id: "65537249",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537247",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537248",
                                      },
                                    ],
                                    price: 39000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821255",
                                        variationId: "65537249",
                                      },
                                    ],
                                    price: 39500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379049",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379049",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379052",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379053",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379047",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379047",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379049",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594381",
                                      name: "Extra Sriracha",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594382",
                                      name: "Extra Jalapenos",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379052",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379053",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 36500,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "219 ratings",
                                  ratingCountV2: "219",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "45618899",
                              name: "Pesto Chicken Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled chicken, basil pesto, mozzarella, red capsicum, house mayo, lettuce and tomatoes.",
                              imageId: "9f0e011fa0d022d5be9359e77d74f19a",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821269",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 365,
                                        default: 1,
                                        id: "65537285",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 390,
                                        id: "65537286",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 395,
                                        id: "65537287",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821269",
                                        variationId: "65537285",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379103",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379098",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821269",
                                        variationId: "65537286",
                                      },
                                    ],
                                    price: 39000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379103",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379098",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821269",
                                        variationId: "65537287",
                                      },
                                    ],
                                    price: 39500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379103",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379104",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594408",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379101",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379098",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379098",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379101",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594408",
                                      name: "Extra Pesto",
                                      price: 7500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594404",
                                      name: "Extra Mozzarella Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379103",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379104",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 36500,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "180 ratings",
                                  ratingCountV2: "180",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59975731",
                              name: "Spicy Chipotle Chicken Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Shredded chipotle chicken, mozzarella, pickled onions, chipotle mayo, lettuce",
                              imageId: "12c34bd259fe1076e430268119cd06fe",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821308",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 365,
                                        default: 1,
                                        id: "65537400",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 390,
                                        id: "65537401",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 395,
                                        id: "65537402",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821308",
                                        variationId: "65537400",
                                      },
                                    ],
                                    price: 36500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379302",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379299",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821308",
                                        variationId: "65537401",
                                      },
                                    ],
                                    price: 39000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379302",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379299",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821308",
                                        variationId: "65537402",
                                      },
                                    ],
                                    price: 39500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379302",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379301",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379306",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379299",
                                        addonId: "50594380",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379299",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379301",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594404",
                                      name: "Extra Mozzarella Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379302",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379306",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 36500,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "87 ratings",
                                  ratingCountV2: "87",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "38066307",
                              name: "The Cuban Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Roasted pork, shaved ham, mozzarella cheese, kobo fermented pickles and mustard.",
                              imageId: "657e1ea52c65bd28bceeca7cb288c618",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821282",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 440,
                                        default: 1,
                                        id: "65537322",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 465,
                                        id: "65537323",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 470,
                                        id: "65537324",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821282",
                                        variationId: "65537322",
                                      },
                                    ],
                                    price: 44000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379154",
                                        addonId: "50594424",
                                      },
                                      {
                                        groupId: "63379162",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594426",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594415",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821282",
                                        variationId: "65537323",
                                      },
                                    ],
                                    price: 46500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379154",
                                        addonId: "50594424",
                                      },
                                      {
                                        groupId: "63379162",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594426",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594415",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821282",
                                        variationId: "65537324",
                                      },
                                    ],
                                    price: 47000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379154",
                                        addonId: "50594424",
                                      },
                                      {
                                        groupId: "63379162",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379167",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594404",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594426",
                                      },
                                      {
                                        groupId: "63379157",
                                        addonId: "50594415",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379154",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594424",
                                      name: "Extra Roasted Pork",
                                      price: 15000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379157",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594404",
                                      name: "Extra Mozzarella Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594426",
                                      name: "Extra Ham",
                                      price: 11500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594415",
                                      name: "Extra Pickle",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379162",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379167",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 44000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "574 ratings",
                                  ratingCountV2: "574",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59975732",
                              name: "Pulled Pork Banh Mi Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Roasted pulled pork, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo",
                              imageId: "e1f1aefd3d32128feb57996f1b4ae463",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821312",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 440,
                                        default: 1,
                                        id: "65537412",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 465,
                                        id: "65537413",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 470,
                                        id: "65537414",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821312",
                                        variationId: "65537412",
                                      },
                                    ],
                                    price: 44000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379315",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379315",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379313",
                                        addonId: "50594448",
                                      },
                                      {
                                        groupId: "63379319",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821312",
                                        variationId: "65537413",
                                      },
                                    ],
                                    price: 46500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379315",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379315",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379313",
                                        addonId: "50594448",
                                      },
                                      {
                                        groupId: "63379319",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821312",
                                        variationId: "65537414",
                                      },
                                    ],
                                    price: 47000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379315",
                                        addonId: "50594381",
                                      },
                                      {
                                        groupId: "63379315",
                                        addonId: "50594382",
                                      },
                                      {
                                        groupId: "63379313",
                                        addonId: "50594448",
                                      },
                                      {
                                        groupId: "63379319",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379321",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379313",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594448",
                                      name: "Extra Pulled Pork",
                                      price: 15000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379315",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594381",
                                      name: "Extra Sriracha",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594382",
                                      name: "Extra Jalapenos",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379319",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379321",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 44000,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "38066306",
                              name: "Tenderloin, Peppers & Onions Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled beef tenderloin, emmental cheese, green peppers, caramelized onions, jalapeno salsa, house mayo, lettuce and tomatoes.",
                              imageId: "a726504015f4c4ec3a146bbe9a3be08b",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821275",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 440,
                                        default: 1,
                                        id: "65537303",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 465,
                                        id: "65537304",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 470,
                                        id: "65537305",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821275",
                                        variationId: "65537303",
                                      },
                                    ],
                                    price: 44000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379137",
                                        addonId: "50594419",
                                      },
                                      {
                                        groupId: "63379141",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594420",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594421",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821275",
                                        variationId: "65537304",
                                      },
                                    ],
                                    price: 46500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379137",
                                        addonId: "50594419",
                                      },
                                      {
                                        groupId: "63379141",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594420",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594421",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821275",
                                        variationId: "65537305",
                                      },
                                    ],
                                    price: 47000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379137",
                                        addonId: "50594419",
                                      },
                                      {
                                        groupId: "63379141",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379142",
                                        addonId: "50594394",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594398",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594399",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594420",
                                      },
                                      {
                                        groupId: "63379139",
                                        addonId: "50594421",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379137",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594419",
                                      name: "Extra Tenderloin",
                                      price: 15500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379139",
                                  groupName: "Add ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594399",
                                      name: "Extra Emmental Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594420",
                                      name: "Extra Caramelized Onions",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594421",
                                      name: "Extra Green Pepper",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379141",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379142",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 44000,
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "269 ratings",
                                  ratingCountV2: "269",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "68537074",
                              name: "Philly Cheesesteak Sandwich",
                              category: "Sandwiches",
                              description:
                                "Serves 1 | Grilled thinly sliced tenderloin steak, melted mozzarella and mild cheddar, grilled onions and green peppers, garlic butter.",
                              imageId: "8d74b7a274c668bda9a5fd37d1ecbff4",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821392",
                                    name: "Choice of Breads",
                                    variations: [
                                      {
                                        name: "Ciabatta",
                                        price: 440,
                                        default: 1,
                                        id: "65537646",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "French Baguette",
                                        price: 465,
                                        id: "65537647",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Sourdough Baguette",
                                        price: 470,
                                        id: "65537648",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821392",
                                        variationId: "65537646",
                                      },
                                    ],
                                    price: 44000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379575",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379575",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379573",
                                        addonId: "50594483",
                                      },
                                      {
                                        groupId: "63379577",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821392",
                                        variationId: "65537647",
                                      },
                                    ],
                                    price: 46500,
                                    addonCombinations: [
                                      {
                                        groupId: "63379575",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379575",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379573",
                                        addonId: "50594483",
                                      },
                                      {
                                        groupId: "63379577",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821392",
                                        variationId: "65537648",
                                      },
                                    ],
                                    price: 47000,
                                    addonCombinations: [
                                      {
                                        groupId: "63379575",
                                        addonId: "50594421",
                                      },
                                      {
                                        groupId: "63379575",
                                        addonId: "50594417",
                                      },
                                      {
                                        groupId: "63379573",
                                        addonId: "50594483",
                                      },
                                      {
                                        groupId: "63379577",
                                        addonId: "50594383",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594384",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594385",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594387",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594388",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594390",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594392",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594393",
                                      },
                                      {
                                        groupId: "63379581",
                                        addonId: "50594394",
                                      },
                                    ],
                                  },
                                ],
                              },
                              addons: [
                                {
                                  groupId: "63379573",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594483",
                                      name: "Extra Steak",
                                      price: 15500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379575",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594421",
                                      name: "Extra Green Pepper",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379577",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379581",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 44000,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "183 ratings",
                                  ratingCountV2: "183",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76128892",
                              name: "Chicken, Mushroom & Mojo Grilled Wrap",
                              category: "Grilled Wraps",
                              description:
                                "Serves 1 | Grilled wrap with grilled chicken, pan-fried mushroom, roasted garlic mojo, cheese and lettuce.",
                              imageId: "acc5c693ff3673c5431888de6d404614",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379632",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594403",
                                      name: "Extra Mushroom",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379634",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594398",
                                      name: "Extra Lettuce",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379636",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379638",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "58 ratings",
                                  ratingCountV2: "58",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "76128894",
                              name: "Steak, Charred Scallion & Slaw Grilled Wrap",
                              category: "Grilled Wraps",
                              description:
                                "Serves 1 | Grilled wrap with grilled thinly sliced steak, charred scallions, red cabbage slaw and cheese.",
                              imageId: "0cd216c06149fb9d382c5e283f7a1465",
                              inStock: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379640",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594483",
                                      name: "Extra Steak",
                                      price: 15500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379642",
                                  groupName: "Add Ons",
                                  choices: [
                                    {
                                      id: "50594417",
                                      name: "Extra Cheese",
                                      price: 7000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594487",
                                      name: "Extra Charred Scallions",
                                      price: 5500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379644",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379645",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97953777",
                              name: "Chicken Quesadilla",
                              category: "Appetizers",
                              description:
                                "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                              imageId: "bfe599c6df7b5c35901bb2117f247f87",
                              inStock: 1,
                              price: 35500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "41524733",
                              name: "Chicken Tortilla Salad",
                              category: "Salads",
                              description:
                                "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                              imageId: "384bb1aa4075fe04eaba18a7de34a4d6",
                              inStock: 1,
                              price: 39500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379238",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379239",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379241",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "145 ratings",
                                  ratingCountV2: "145",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "41524713",
                              name: "Chicken Thai Crunch Salad",
                              category: "Salads",
                              description:
                                "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                              imageId: "5654e91b0a4c8647b6fbf8df8fccf61a",
                              inStock: 1,
                              price: 39500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "63379228",
                                  groupName: "Extra Filling",
                                  choices: [
                                    {
                                      id: "50594380",
                                      name: "Extra Chicken",
                                      price: 14000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379229",
                                  groupName: "Add Chips",
                                  choices: [
                                    {
                                      id: "50594383",
                                      name: "Side of Tortilla Chips",
                                      price: 14500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "63379230",
                                  groupName: "Make Your Meal More Exciting!",
                                  choices: [
                                    {
                                      id: "50594384",
                                      name: "Churros",
                                      price: 29500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594385",
                                      name: "Flan",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594387",
                                      name: "Rich Chocolate Fudge Cake",
                                      price: 29500,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594388",
                                      name: "Tortilla Chips & Salsa",
                                      price: 28000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594390",
                                      name: "Iced Lime Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594392",
                                      name: "Iced Coffee",
                                      price: 18500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594393",
                                      name: "Virgin Margarita",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "50594394",
                                      name: "Orange Iced Tea",
                                      price: 18000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 8,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "69 ratings",
                                  ratingCountV2: "69",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067914",
                              name: "Flan",
                              category: "Desserts",
                              description:
                                "Serves 1 | Creamy, silky Mexican caramel custard, with a hint of bitter caramel.",
                              imageId: "e6f497880699aa9fd8b945c589202353",
                              inStock: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067915",
                              name: "Churros",
                              category: "Desserts",
                              description:
                                "Serves 1 | Perfectly crisp on the outside and soft on the inside. Golden fried and coated in cinnamon and sugar. Served with thick chocolate sauce.",
                              imageId: "6c0ac2019021a305a31699baa9710b10",
                              inStock: 1,
                              isVeg: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "121 ratings",
                                  ratingCountV2: "121",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Monthly Special - Mexican Pambazo Sandwiches",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551684",
                              name: "Grilled Chicken Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "02ee8a342458b9b89be632fefe188e40",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551685",
                              name: "Spicy Chicken Tinga Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "4a8283df3176ea51ecee89cea511f753",
                              inStock: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551686",
                              name: "Braised Pork Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "8837058d464709a301d7b32d6f8fc79e",
                              inStock: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551695",
                              name: "Grilled Tenderloin Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "cee4521c82c65e1251bdaf7c41b16cfd",
                              inStock: 1,
                              price: 44000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551687",
                              name: "Mushroom Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "ab7861b022e5278f01d04ed706ab7d8c",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551688",
                              name: "Spicy Soyrizo Potato Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "09db04d3e53950ac12a52c926e7f05c6",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551689",
                              name: "Jackfruit Carne Asada Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "17498aed5af2091b405f2828ae499abf",
                              inStock: 1,
                              isVeg: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551690",
                              name: "Grilled Paneer Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with cheese, queso fresco, pickled onions, jalapeno salsa, sour cream, lettuce & tomatoes",
                              imageId: "c755463e87aa4883bf2d053c2a2acff6",
                              inStock: 1,
                              isVeg: 1,
                              price: 34500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551691",
                              name: "Vegan Mushroom Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with mashed beans, vegan cheese, pickled onions, jalapeno salsa, lettuce & tomatoes",
                              imageId: "b6a40637176ff158bdd80fead1f7d1cb",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551692",
                              name: "Vegan Spicy Soyrizo Potato Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with mashed beans, vegan cheese, pickled onions, jalapeno salsa, lettuce & tomatoes",
                              imageId: "8e6650765ee486bdb38bf3d6b37f863d",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551693",
                              name: "Vegan Jackfruit Carne Asada Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with mashed beans, vegan cheese, pickled onions, jalapeno salsa, lettuce & tomatoes",
                              imageId: "bb1a4be9881b3e5ac72fc9a47a5cede6",
                              inStock: 1,
                              isVeg: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "127551694",
                              name: "Vegan Tofu Pambazo Sandwich",
                              category:
                                "Monthly Special - Mexican Pambazo Sandwiches",
                              description:
                                "Serves 1 | Baguette coated with red salsa and crisped to perfection stuffed with mashed beans, vegan cheese, pickled onions, jalapeno salsa, lettuce & tomatoes",
                              imageId: "e872ba84772263557a868e2b40685064",
                              inStock: 1,
                              isVeg: 1,
                              price: 33500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Sandwiches",
                      categories: [
                        {
                          title: "Veg Sandwiches",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38066304",
                                  name: "Mushrooms in Garlic Mojo Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Sauteed mushrooms, mozzarella cheese, roasted garlic mojo, jalapeno, lettuce and tomatoes.",
                                  imageId: "f9cd1e768b0f9e0b282658e33d58d178",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821265",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537273",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537274",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537275",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821265",
                                            variationId: "65537273",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379087",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379084",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379079",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821265",
                                            variationId: "65537274",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379087",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379084",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379079",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821265",
                                            variationId: "65537275",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379087",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379087",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379084",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379083",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379079",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379079",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379083",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594404",
                                          name: "Extra Mozzarella Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379084",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379087",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "158 ratings",
                                      ratingCountV2: "158",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "68537075",
                                  name: "Mushroom Philly Cheesesteak Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Pan-fried mushroom, melted mozzarella and mild cheddar, grilled onions and green peppers, garlic butter.",
                                  imageId: "13219187d703fa2854a9e525bbb846f5",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821397",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 345,
                                            default: 1,
                                            id: "65537659",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 370,
                                            id: "65537660",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 375,
                                            id: "65537661",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821397",
                                            variationId: "65537659",
                                          },
                                        ],
                                        price: 34500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379597",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379597",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379600",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379595",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821397",
                                            variationId: "65537660",
                                          },
                                        ],
                                        price: 37000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379597",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379597",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379600",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379595",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821397",
                                            variationId: "65537661",
                                          },
                                        ],
                                        price: 37500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379597",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379597",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379608",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379600",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379595",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379595",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379597",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594421",
                                          name: "Extra Green Pepper",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379600",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379608",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 34500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "107 ratings",
                                      ratingCountV2: "107",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38066302",
                                  name: "Pesto Paneer Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Broiled balsamic marinated paneer, basil pesto, red capsicum, eggplant, pickled onions, lettuce and tomatoes.",
                                  imageId: "9506fe532e616c9823d270b857bd277c",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821271",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 345,
                                            default: 1,
                                            id: "65537291",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 370,
                                            id: "65537292",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 375,
                                            id: "65537293",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821271",
                                            variationId: "65537291",
                                          },
                                        ],
                                        price: 34500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379117",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379109",
                                            addonId: "50594409",
                                          },
                                          {
                                            groupId: "63379115",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594411",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594398",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821271",
                                            variationId: "65537292",
                                          },
                                        ],
                                        price: 37000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379117",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379109",
                                            addonId: "50594409",
                                          },
                                          {
                                            groupId: "63379115",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594411",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594398",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821271",
                                            variationId: "65537293",
                                          },
                                        ],
                                        price: 37500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379117",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379117",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379109",
                                            addonId: "50594409",
                                          },
                                          {
                                            groupId: "63379115",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594411",
                                          },
                                          {
                                            groupId: "63379112",
                                            addonId: "50594398",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379109",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594409",
                                          name: "Extra Paneer",
                                          price: 10500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379112",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594408",
                                          name: "Extra Pesto",
                                          price: 7500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594411",
                                          name: "Extra Red Capsicum & Eggplant",
                                          price: 7500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 3,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379115",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379117",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 34500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "207 ratings",
                                      ratingCountV2: "207",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775949",
                                  name: "Tofu Banh Mi Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Baked lemongrass marinated tofu, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo.",
                                  imageId: "3e450a89308e3a7806fea43d24382a07",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821286",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537334",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537335",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537336",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821286",
                                            variationId: "65537334",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379177",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379172",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379175",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821286",
                                            variationId: "65537335",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379177",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379172",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379175",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821286",
                                            variationId: "65537336",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379177",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379177",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379173",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379172",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379175",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379172",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594429",
                                          name: "Extra Tofu",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379173",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379175",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379177",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "97 ratings",
                                      ratingCountV2: "97",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60138694",
                                  name: "Roasted Cauliflower Banh Mi Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Roasted lemongrass-marinated cauliflower, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo",
                                  imageId: "866c2496f8f67dafce3525a29cf392bd",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821333",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537471",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537472",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537473",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821333",
                                            variationId: "65537471",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379389",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379383",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379380",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821333",
                                            variationId: "65537472",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379389",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379383",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379380",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821333",
                                            variationId: "65537473",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379389",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379389",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379382",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379383",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379380",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379380",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594453",
                                          name: "Extra Cauliflower",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379382",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379383",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379389",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60138695",
                                  name: "Melted Caprese Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Broiled tomatoes, basil pesto, melted mozzarella.",
                                  imageId: "86c8c1dacbba8e0b5ae5c683eced13f6",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821336",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537480",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537481",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537482",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821336",
                                            variationId: "65537480",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379400",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379398",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594454",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821336",
                                            variationId: "65537481",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379400",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379398",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594454",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821336",
                                            variationId: "65537482",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379400",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379400",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379398",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379397",
                                            addonId: "50594454",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379397",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594408",
                                          name: "Extra Pesto",
                                          price: 7500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594404",
                                          name: "Extra Mozzarella Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594454",
                                          name: "Extra Broiled Tomatoes",
                                          price: 8000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 3,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379398",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379400",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "91 ratings",
                                      ratingCountV2: "91",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775948",
                                  name: "Soya Sloppy Joe Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Soya granules in tomato salsa, cheese, mustard, red cabbage, lettuce and onions.",
                                  imageId: "9a2b11ddf9269561696e630de572ec94",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821274",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537300",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537301",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537302",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821274",
                                            variationId: "65537300",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379135",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379133",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594418",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821274",
                                            variationId: "65537301",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379135",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379133",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594418",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821274",
                                            variationId: "65537302",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379135",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379135",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379133",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379130",
                                            addonId: "50594418",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379130",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594418",
                                          name: "Extra Sour Cream",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 4,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379133",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379135",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "35 ratings",
                                      ratingCountV2: "35",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non-Veg Sandwiches",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775947",
                                  name: "Grilled Chicken & Cheese Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled chicken, emmental cheese, pickled onion and house creamy cheese dressing.",
                                  imageId: "aa3fb84b0689611be82d5c9e77745c4c",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821260",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 365,
                                            default: 1,
                                            id: "65537260",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 390,
                                            id: "65537261",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 395,
                                            id: "65537262",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821260",
                                            variationId: "65537260",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379068",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379068",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379070",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379065",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821260",
                                            variationId: "65537261",
                                          },
                                        ],
                                        price: 39000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379068",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379068",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379070",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379065",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821260",
                                            variationId: "65537262",
                                          },
                                        ],
                                        price: 39500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379068",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379068",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379070",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379071",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379065",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379065",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379068",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594399",
                                          name: "Extra Emmental Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379070",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379071",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 36500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "342 ratings",
                                      ratingCountV2: "342",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775946",
                                  name: "Chicken Banh Mi Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled lemongrass marinated chicken, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo.",
                                  imageId: "83ba23de9bbcebaf96c6643f8614c080",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821255",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 365,
                                            default: 1,
                                            id: "65537247",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 390,
                                            id: "65537248",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 395,
                                            id: "65537249",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821255",
                                            variationId: "65537247",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379049",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379049",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379052",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379047",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821255",
                                            variationId: "65537248",
                                          },
                                        ],
                                        price: 39000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379049",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379049",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379052",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379047",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821255",
                                            variationId: "65537249",
                                          },
                                        ],
                                        price: 39500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379049",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379049",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379052",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379053",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379047",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379047",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379049",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379052",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379053",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 36500,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "219 ratings",
                                      ratingCountV2: "219",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "45618899",
                                  name: "Pesto Chicken Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled chicken, basil pesto, mozzarella, red capsicum, house mayo, lettuce and tomatoes.",
                                  imageId: "9f0e011fa0d022d5be9359e77d74f19a",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821269",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 365,
                                            default: 1,
                                            id: "65537285",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 390,
                                            id: "65537286",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 395,
                                            id: "65537287",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821269",
                                            variationId: "65537285",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379103",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379098",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821269",
                                            variationId: "65537286",
                                          },
                                        ],
                                        price: 39000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379103",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379098",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821269",
                                            variationId: "65537287",
                                          },
                                        ],
                                        price: 39500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379103",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379104",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594408",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379101",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379098",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379098",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379101",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594408",
                                          name: "Extra Pesto",
                                          price: 7500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594404",
                                          name: "Extra Mozzarella Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 3,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379103",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379104",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 36500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "180 ratings",
                                      ratingCountV2: "180",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59975731",
                                  name: "Spicy Chipotle Chicken Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Shredded chipotle chicken, mozzarella, pickled onions, chipotle mayo, lettuce",
                                  imageId: "12c34bd259fe1076e430268119cd06fe",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821308",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 365,
                                            default: 1,
                                            id: "65537400",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 390,
                                            id: "65537401",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 395,
                                            id: "65537402",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821308",
                                            variationId: "65537400",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379302",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379299",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821308",
                                            variationId: "65537401",
                                          },
                                        ],
                                        price: 39000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379302",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379299",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821308",
                                            variationId: "65537402",
                                          },
                                        ],
                                        price: 39500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379302",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379301",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379306",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379299",
                                            addonId: "50594380",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379299",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379301",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594404",
                                          name: "Extra Mozzarella Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379302",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379306",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 36500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "87 ratings",
                                      ratingCountV2: "87",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38066307",
                                  name: "The Cuban Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Roasted pork, shaved ham, mozzarella cheese, kobo fermented pickles and mustard.",
                                  imageId: "657e1ea52c65bd28bceeca7cb288c618",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821282",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 440,
                                            default: 1,
                                            id: "65537322",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 465,
                                            id: "65537323",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 470,
                                            id: "65537324",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821282",
                                            variationId: "65537322",
                                          },
                                        ],
                                        price: 44000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379154",
                                            addonId: "50594424",
                                          },
                                          {
                                            groupId: "63379162",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594426",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821282",
                                            variationId: "65537323",
                                          },
                                        ],
                                        price: 46500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379154",
                                            addonId: "50594424",
                                          },
                                          {
                                            groupId: "63379162",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594426",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821282",
                                            variationId: "65537324",
                                          },
                                        ],
                                        price: 47000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379154",
                                            addonId: "50594424",
                                          },
                                          {
                                            groupId: "63379162",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379167",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594404",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594426",
                                          },
                                          {
                                            groupId: "63379157",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379154",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594424",
                                          name: "Extra Roasted Pork",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379157",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594404",
                                          name: "Extra Mozzarella Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594426",
                                          name: "Extra Ham",
                                          price: 11500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594415",
                                          name: "Extra Pickle",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 3,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379162",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379167",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 44000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "574 ratings",
                                      ratingCountV2: "574",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59975732",
                                  name: "Pulled Pork Banh Mi Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Roasted pulled pork, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha and house mayo",
                                  imageId: "e1f1aefd3d32128feb57996f1b4ae463",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821312",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 440,
                                            default: 1,
                                            id: "65537412",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 465,
                                            id: "65537413",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 470,
                                            id: "65537414",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821312",
                                            variationId: "65537412",
                                          },
                                        ],
                                        price: 44000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379315",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379315",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379313",
                                            addonId: "50594448",
                                          },
                                          {
                                            groupId: "63379319",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821312",
                                            variationId: "65537413",
                                          },
                                        ],
                                        price: 46500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379315",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379315",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379313",
                                            addonId: "50594448",
                                          },
                                          {
                                            groupId: "63379319",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821312",
                                            variationId: "65537414",
                                          },
                                        ],
                                        price: 47000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379315",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379315",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379313",
                                            addonId: "50594448",
                                          },
                                          {
                                            groupId: "63379319",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379321",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379313",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594448",
                                          name: "Extra Pulled Pork",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379315",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379319",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379321",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 44000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "102 ratings",
                                      ratingCountV2: "102",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38066306",
                                  name: "Tenderloin, Peppers & Onions Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled beef tenderloin, emmental cheese, green peppers, caramelized onions, jalapeno salsa, house mayo, lettuce and tomatoes.",
                                  imageId: "a726504015f4c4ec3a146bbe9a3be08b",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821275",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 440,
                                            default: 1,
                                            id: "65537303",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 465,
                                            id: "65537304",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 470,
                                            id: "65537305",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821275",
                                            variationId: "65537303",
                                          },
                                        ],
                                        price: 44000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379137",
                                            addonId: "50594419",
                                          },
                                          {
                                            groupId: "63379141",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594420",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821275",
                                            variationId: "65537304",
                                          },
                                        ],
                                        price: 46500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379137",
                                            addonId: "50594419",
                                          },
                                          {
                                            groupId: "63379141",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594420",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821275",
                                            variationId: "65537305",
                                          },
                                        ],
                                        price: 47000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379137",
                                            addonId: "50594419",
                                          },
                                          {
                                            groupId: "63379141",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379142",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594399",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594420",
                                          },
                                          {
                                            groupId: "63379139",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379137",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594419",
                                          name: "Extra Tenderloin",
                                          price: 15500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379139",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594399",
                                          name: "Extra Emmental Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594420",
                                          name: "Extra Caramelized Onions",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594421",
                                          name: "Extra Green Pepper",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 4,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379141",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379142",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 44000,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "269 ratings",
                                      ratingCountV2: "269",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "68537074",
                                  name: "Philly Cheesesteak Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled thinly sliced tenderloin steak, melted mozzarella and mild cheddar, grilled onions and green peppers, garlic butter.",
                                  imageId: "8d74b7a274c668bda9a5fd37d1ecbff4",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821392",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 440,
                                            default: 1,
                                            id: "65537646",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 465,
                                            id: "65537647",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 470,
                                            id: "65537648",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821392",
                                            variationId: "65537646",
                                          },
                                        ],
                                        price: 44000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379575",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379575",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379573",
                                            addonId: "50594483",
                                          },
                                          {
                                            groupId: "63379577",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821392",
                                            variationId: "65537647",
                                          },
                                        ],
                                        price: 46500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379575",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379575",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379573",
                                            addonId: "50594483",
                                          },
                                          {
                                            groupId: "63379577",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821392",
                                            variationId: "65537648",
                                          },
                                        ],
                                        price: 47000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379575",
                                            addonId: "50594421",
                                          },
                                          {
                                            groupId: "63379575",
                                            addonId: "50594417",
                                          },
                                          {
                                            groupId: "63379573",
                                            addonId: "50594483",
                                          },
                                          {
                                            groupId: "63379577",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379581",
                                            addonId: "50594394",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379573",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594483",
                                          name: "Extra Steak",
                                          price: 15500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379575",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594421",
                                          name: "Extra Green Pepper",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379577",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379581",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 44000,
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "183 ratings",
                                      ratingCountV2: "183",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "38066305",
                                  name: "Prawns Po' Boy Sandwich",
                                  category: "Sandwiches",
                                  description:
                                    "Serves 1 | Grilled adobo marinated prawns, house remoulade, kobo fermented pickle, lettuce and tomatoes.",
                                  imageId: "2f540bb26832c53066309a17664223d1",
                                  inStock: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821272",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 395,
                                            default: 1,
                                            id: "65537294",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 420,
                                            id: "65537295",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 425,
                                            id: "65537296",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821272",
                                            variationId: "65537294",
                                          },
                                        ],
                                        price: 39500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379119",
                                            addonId: "50594414",
                                          },
                                          {
                                            groupId: "63379122",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821272",
                                            variationId: "65537295",
                                          },
                                        ],
                                        price: 42000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379119",
                                            addonId: "50594414",
                                          },
                                          {
                                            groupId: "63379122",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821272",
                                            variationId: "65537296",
                                          },
                                        ],
                                        price: 42500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379119",
                                            addonId: "50594414",
                                          },
                                          {
                                            groupId: "63379122",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594384",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594385",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594387",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594388",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594390",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594392",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594393",
                                          },
                                          {
                                            groupId: "63379124",
                                            addonId: "50594394",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379120",
                                            addonId: "50594415",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379119",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594414",
                                          name: "Extra Prawns",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379120",
                                      groupName: "Add ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594415",
                                          name: "Extra Pickle",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379122",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379124",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 39500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "70 ratings",
                                      ratingCountV2: "70",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Grilled Wraps",
                      categories: [
                        {
                          title: "Veg Grilled Wraps",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128896",
                                  name: "Spicy Cauliflower Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with roasted cauliflower, parmesan, roasted chilly flakes, caramelized onions, melted mozzarella and lettuce.",
                                  imageId: "8b4ccc827f4ef2070152d280bc956014",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 35500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379649",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594453",
                                          name: "Extra Cauliflower",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379653",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594420",
                                          name: "Extra Caramelized Onions",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 4,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379656",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379658",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128897",
                                  name: "Lemongrass Tofu & Peanut Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with grilled lemongrass-marinated tofu, pickled radish & carrot, crispy rice noodles, sriracha and lettuce.",
                                  imageId: "8878dd861b10d34fbe6b4a21b756f08f",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 33500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379669",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594429",
                                          name: "Extra Tofu",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379670",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379672",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379673",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77649325",
                                  name: "Mushroom, Cheese & Spinach Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with mushroom, parmesan, mozzarella, cheddar, spinach, pickled onions and jalapeno vinaigrette.",
                                  imageId: "cd6f9414396200307a21a66bf4537171",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379691",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379692",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594500",
                                          name: "Extra Spinach",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379693",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379694",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non-Veg Grilled Wraps",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128892",
                                  name: "Chicken, Mushroom & Mojo Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with grilled chicken, pan-fried mushroom, roasted garlic mojo, cheese and lettuce.",
                                  imageId: "acc5c693ff3673c5431888de6d404614",
                                  inStock: 1,
                                  price: 36500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379632",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379634",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379636",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379638",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "58 ratings",
                                      ratingCountV2: "58",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128894",
                                  name: "Steak, Charred Scallion & Slaw Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with grilled thinly sliced steak, charred scallions, red cabbage slaw and cheese.",
                                  imageId: "0cd216c06149fb9d382c5e283f7a1465",
                                  inStock: 1,
                                  price: 44000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379640",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594483",
                                          name: "Extra Steak",
                                          price: 15500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379642",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594487",
                                          name: "Extra Charred Scallions",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379644",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379645",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "32 ratings",
                                      ratingCountV2: "32",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77649324",
                                  name: "Spicy Garlic Shrimp Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with garlicky grilled prawns, cheese, cherry tomatoes, cucumbers and lettuce.",
                                  imageId: "285dcf4e50ca61e094b6f0d57a9bc287",
                                  inStock: 1,
                                  price: 39500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379684",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594499",
                                          name: "Extra Shrimp",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379685",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379686",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379688",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77649323",
                                  name: "Pulled Pork, Pineapple & Slaw Grilled Wrap",
                                  category: "Grilled Wraps",
                                  description:
                                    "Serves 1 | Grilled wrap with pulled pork, pineapple, red cabbage slaw, remoulade and cheese.",
                                  imageId: "d98415c966f4d5fc703fe781f88f39bd",
                                  inStock: 1,
                                  price: 44000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379680",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594448",
                                          name: "Extra Pulled Pork",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379681",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594417",
                                          name: "Extra Cheese",
                                          price: 7000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594491",
                                          name: "Extra Pineapple Salsa",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379682",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379683",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Appetizers",
                      categories: [
                        {
                          title: "Veg Appetizers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "73637910",
                                  name: "Tortilla Chips & Salsa",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips with spicy roasted tomato salsa and pico de gallo (fresh salsa made of tomato, onion, lime, chilli & cilantro).",
                                  imageId: "6c88a9e0d2695377b185247bec3627d2",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953766",
                                  name: "Grilled Corn",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | A Mexican classic. Sweet corn on the cob with cheese and chilli powder.",
                                  imageId: "82b7e0dcdecf5e3e7013dcfe54c2512e",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953769",
                                  name: "Veg Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "e015ab83245f0166ba77d922402807b4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "98986416",
                                  name: "Plain Cheese Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Grilled flour tortilla stuffed with cheese. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "72c8ca3d93497ec28df6002f5c4a5c24",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953770",
                                  name: "Corn & Green Pepper Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "f8efcc8a88a0a1a0cb4e5f96e6ffe99d",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953773",
                                  name: "Mushroom Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "ffcf629f01b7cc8a5e6eb30ded43d9ff",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953775",
                                  name: "Soyrizo Quesadilla (Spicy)",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "f49e63b4e9a354d34ca57b3c1e74910e",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953757",
                                  name: "Veg Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "6b9650907c53a81000ae798a974cce95",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 41500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953758",
                                  name: "Mushroom Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "34858064ce9f8d3f5e0519c3bfc45aae",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 45000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953759",
                                  name: "Soyrizo Nachos (Spicy)",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "a9380739971be68a3b3261431cf6d5ce",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 45000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non-Veg Appetizers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953777",
                                  name: "Chicken Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "bfe599c6df7b5c35901bb2117f247f87",
                                  inStock: 1,
                                  price: 35500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953780",
                                  name: "Beef Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "099da4a34062616881e066f0cbd41dc3",
                                  inStock: 1,
                                  price: 39500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953788",
                                  name: "Prawns Quesadilla",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Grilled flour tortilla stuffed with cheese, onions and spring onions. Served with spicy, roasted tomato salsa and sour cream.",
                                  imageId: "1a63aae5adb25f872b58fad3ea04b3f6",
                                  inStock: 1,
                                  price: 39500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953760",
                                  name: "Chicken Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "03e2f26db763b0cc5707b9703cfd666b",
                                  inStock: 1,
                                  price: 46500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953761",
                                  name: "Braised Pork Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "d32445f1cc4d69b8faaf1dc4bc694abf",
                                  inStock: 1,
                                  price: 47500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953762",
                                  name: "Beef Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "bdb432bd24b94b013fddbd5ff91cd7c6",
                                  inStock: 1,
                                  price: 52000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953763",
                                  name: "Prawns Nachos",
                                  category: "Appetizers",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips topped with melted cheese, beans, salsa, sour cream and jalapeno.",
                                  imageId: "640856bedb4c4d7778cd46be70909867",
                                  inStock: 1,
                                  price: 49000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Salads",
                      categories: [
                        {
                          title: "Veg Salads",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524704",
                                  name: "Mushroom Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "75693d67654721d5e48f78348aa90e11",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379256",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379257",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379259",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "28 ratings",
                                      ratingCountV2: "28",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524710",
                                  name: "Paneer Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "2042957e8ea5ddf71ca9a6f0af7dd586",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379273",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594409",
                                          name: "Extra Paneer",
                                          price: 10500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379275",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379276",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "35 ratings",
                                      ratingCountV2: "35",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524737",
                                  name: "Paneer Thai Crunch Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                                  imageId: "396581bc35f5f9974e7f62f4f73a2d0d",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379266",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594409",
                                          name: "Extra Paneer",
                                          price: 10500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379267",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379270",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524734",
                                  name: "Lemongrass Tofu Thai Crunch Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                                  imageId: "de876bf39fbf3ac2d582938a7c715204",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379246",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594429",
                                          name: "Extra Tofu",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379248",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379250",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 6,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "43 ratings",
                                      ratingCountV2: "43",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Non-Veg Salads",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524733",
                                  name: "Chicken Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "384bb1aa4075fe04eaba18a7de34a4d6",
                                  inStock: 1,
                                  price: 39500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379238",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379239",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379241",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "145 ratings",
                                      ratingCountV2: "145",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775952",
                                  name: "Prawns Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "7936a5a387dfcb503a513980d6876e33",
                                  inStock: 1,
                                  price: 41500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379288",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594414",
                                          name: "Extra Prawns",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379290",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379292",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524708",
                                  name: "Beef Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "5f13ffde7ac802eca7ee0bb104697a53",
                                  inStock: 1,
                                  price: 42000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379206",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594433",
                                          name: "Extra Beef",
                                          price: 15500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379208",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379210",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "16 ratings",
                                      ratingCountV2: "16",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775950",
                                  name: "Carnitas Pork Tortilla Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, queso fresco, spring onions, cilantro, tortilla crisps, jalapeno vinaigrette.",
                                  imageId: "72a5a0c1e1f6cdfa2d8bb8d50c44aedd",
                                  inStock: 1,
                                  price: 40500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379217",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594442",
                                          name: "Extra Carnitas",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379218",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379220",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "16 ratings",
                                      ratingCountV2: "16",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524713",
                                  name: "Chicken Thai Crunch Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                                  imageId: "5654e91b0a4c8647b6fbf8df8fccf61a",
                                  inStock: 1,
                                  price: 39500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379228",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594380",
                                          name: "Extra Chicken",
                                          price: 14000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379229",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379230",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "69 ratings",
                                      ratingCountV2: "69",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "59775951",
                                  name: "Prawns Thai Crunch Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                                  imageId: "6e1bf839cf4d4cb617d9d29e0adc8f25",
                                  inStock: 1,
                                  price: 41500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379281",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594414",
                                          name: "Extra Prawns",
                                          price: 15000,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379282",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379283",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "41524735",
                                  name: "Beef Thai Crunch Salad",
                                  category: "Salads",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, pickled carrots & radish, fresh herbs, roasted peanuts, crispy rice sticks, Thai peanut dressing.",
                                  imageId: "959ccf9545642fc1a2be76f2d25e3ada",
                                  inStock: 1,
                                  price: 42000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379192",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594433",
                                          name: "Extra Beef",
                                          price: 15500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379194",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379198",
                                      groupName:
                                        "Make Your Meal More Exciting!",
                                      choices: [
                                        {
                                          id: "50594384",
                                          name: "Churros",
                                          price: 29500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594385",
                                          name: "Flan",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594387",
                                          name: "Rich Chocolate Fudge Cake",
                                          price: 29500,
                                          inStock: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594388",
                                          name: "Tortilla Chips & Salsa",
                                          price: 28000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594390",
                                          name: "Iced Lime Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594392",
                                          name: "Iced Coffee",
                                          price: 18500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594393",
                                          name: "Virgin Margarita",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594394",
                                          name: "Orange Iced Tea",
                                          price: 18000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 8,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "37533397",
                              name: "Rich Chocolate Fudge Cake",
                              category: "Desserts",
                              description:
                                "Serves 1 | Rich and dense fudge cake. Made with dark chocolate.",
                              imageId: "8a5444a72e8ebb528ec52ec43b50a78e",
                              inStock: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "129 ratings",
                                  ratingCountV2: "129",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067914",
                              name: "Flan",
                              category: "Desserts",
                              description:
                                "Serves 1 | Creamy, silky Mexican caramel custard, with a hint of bitter caramel.",
                              imageId: "e6f497880699aa9fd8b945c589202353",
                              inStock: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067915",
                              name: "Churros",
                              category: "Desserts",
                              description:
                                "Serves 1 | Perfectly crisp on the outside and soft on the inside. Golden fried and coated in cinnamon and sugar. Served with thick chocolate sauce.",
                              imageId: "6c0ac2019021a305a31699baa9710b10",
                              inStock: 1,
                              isVeg: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "121 ratings",
                                  ratingCountV2: "121",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "97953796",
                              name: "Chocolate Chilli Cake (Spicy)",
                              category: "Desserts",
                              description:
                                "Serves 1 | Rich, dense, chocolate cake with a hint of chilli.",
                              imageId: "348c0a8b01a295f10149b8d36258e17d",
                              inStock: 1,
                              price: 29500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Vegan",
                      categories: [
                        {
                          title: "Vegan Appetizers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953791",
                                  name: "Vegan Tortilla Chips & Salsa",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Authentic masa corn tortilla chips with spicy roasted tomato salsa and pico de gallo (fresh salsa made of tomato, onion, lime, chilli & cilantro).",
                                  imageId: "389d9ec566f8c6ce3383cbe570b7e6f4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Vegan Sandwiches",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60019287",
                                  name: "Vegan Mushrooms in Garlic Mojo Sandwich",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Sauteed mushrooms, vegan cheese, roasted garlic mojo, jalapeno, lettuce and tomatoes.",
                                  imageId: "03125a647b0653138863c0fa4f259b09",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821327",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537453",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537454",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537455",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821327",
                                            variationId: "65537453",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379365",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379360",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821327",
                                            variationId: "65537454",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379365",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379360",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821327",
                                            variationId: "65537455",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379365",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379363",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379360",
                                            addonId: "50594403",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379360",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379363",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379365",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60019285",
                                  name: "Vegan Tofu Banh Mi Sandwich",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Baked lemongrass marinated tofu, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha.",
                                  imageId: "bf1c07fb94f8bb2a4d9bbe38b0d3ecde",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821320",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537432",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537433",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537434",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821320",
                                            variationId: "65537432",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379344",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379344",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379342",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379347",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821320",
                                            variationId: "65537433",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379344",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379344",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379342",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379347",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821320",
                                            variationId: "65537434",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379344",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379344",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379342",
                                            addonId: "50594429",
                                          },
                                          {
                                            groupId: "63379347",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379342",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594429",
                                          name: "Extra Tofu",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379344",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379347",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60138696",
                                  name: "Vegan Roasted Cauliflower Banh Mi Sandwich",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Roasted lemongrass-marinated cauliflower, pickled radish and carrot, jalapeno, cucumber, cilantro, ginger scallion oil, sriracha.",
                                  imageId: "866c2496f8f67dafce3525a29cf392bd",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821340",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537492",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537493",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537494",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821340",
                                            variationId: "65537492",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379410",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379410",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379412",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379408",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821340",
                                            variationId: "65537493",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379410",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379410",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379412",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379408",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821340",
                                            variationId: "65537494",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379410",
                                            addonId: "50594381",
                                          },
                                          {
                                            groupId: "63379410",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379412",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379408",
                                            addonId: "50594453",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379408",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594453",
                                          name: "Extra Cauliflower",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379410",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379412",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "60019286",
                                  name: "Vegan Soya Sloppy Joe Sandwich",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Soya granules in tomato salsa, vegan cheese, mustard, red cabbage, lettuce and onions.",
                                  imageId: "9a2b11ddf9269561696e630de572ec94",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821323",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 335,
                                            default: 1,
                                            id: "65537441",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 360,
                                            id: "65537443",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 365,
                                            id: "65537446",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821323",
                                            variationId: "65537441",
                                          },
                                        ],
                                        price: 33500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379352",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379352",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379355",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821323",
                                            variationId: "65537443",
                                          },
                                        ],
                                        price: 36000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379352",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379352",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379355",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821323",
                                            variationId: "65537446",
                                          },
                                        ],
                                        price: 36500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379352",
                                            addonId: "50594382",
                                          },
                                          {
                                            groupId: "63379352",
                                            addonId: "50594398",
                                          },
                                          {
                                            groupId: "63379355",
                                            addonId: "50594383",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379352",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379355",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 33500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "68777486",
                                  name: "Vegan Mushroom Philly Cheesesteak Sandwich",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Pan-fried mushroom, vegan cheese, grilled onions, green peppers, garlic oil.",
                                  imageId: "5d4ef6cbf5945cab4ae48854b23ff9e5",
                                  inStock: 1,
                                  isVeg: 1,
                                  variants: {},
                                  variantsV2: {
                                    variantGroups: [
                                      {
                                        groupId: "19821402",
                                        name: "Choice of Breads",
                                        variations: [
                                          {
                                            name: "Ciabatta",
                                            price: 345,
                                            default: 1,
                                            id: "65537674",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "French Baguette",
                                            price: 370,
                                            id: "65537675",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                          {
                                            name: "Sourdough Baguette",
                                            price: 375,
                                            id: "65537676",
                                            inStock: 1,
                                            isVeg: 1,
                                            isEnabled: 1,
                                          },
                                        ],
                                      },
                                    ],
                                    pricingModels: [
                                      {
                                        variations: [
                                          {
                                            groupId: "19821402",
                                            variationId: "65537674",
                                          },
                                        ],
                                        price: 34500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379629",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379622",
                                            addonId: "50594403",
                                          },
                                          {
                                            groupId: "63379625",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821402",
                                            variationId: "65537675",
                                          },
                                        ],
                                        price: 37000,
                                        addonCombinations: [
                                          {
                                            groupId: "63379629",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379622",
                                            addonId: "50594403",
                                          },
                                          {
                                            groupId: "63379625",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                      {
                                        variations: [
                                          {
                                            groupId: "19821402",
                                            variationId: "65537676",
                                          },
                                        ],
                                        price: 37500,
                                        addonCombinations: [
                                          {
                                            groupId: "63379629",
                                            addonId: "50594383",
                                          },
                                          {
                                            groupId: "63379622",
                                            addonId: "50594403",
                                          },
                                          {
                                            groupId: "63379625",
                                            addonId: "50594421",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  addons: [
                                    {
                                      groupId: "63379622",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379625",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594421",
                                          name: "Extra Green Pepper",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379629",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  defaultPrice: 34500,
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Vegan Grilled Wraps",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128898",
                                  name: "Vegan Spicy Cauliflower Grilled Wrap",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Grilled wrap with roasted cauliflower, roasted chilly flakes, caramelized onions, melted vegan cheese and lettuce.",
                                  imageId: "ba76bb3c4332c9697d8e37d399f09ffd",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 35500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379674",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594453",
                                          name: "Extra Cauliflower",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379675",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594382",
                                          name: "Extra Jalapenos",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594398",
                                          name: "Extra Lettuce",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "50594420",
                                          name: "Extra Caramelized Onions",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 3,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379676",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "76128900",
                                  name: "Vegan Lemongrass Tofu & Peanut Grilled Wrap",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Grilled wrap with grilled lemongrass-marinated tofu, pickled radish & carrot, crispy rice noodles, sriracha and lettuce.",
                                  imageId: "d94a74aa741a3d61227d44a25dc1be23",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 33500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379677",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594429",
                                          name: "Extra Tofu",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379678",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594381",
                                          name: "Extra Sriracha",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379679",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77649326",
                                  name: "Vegan Mushroom, Cheese & Spinach Grilled Wrap",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Grilled wrap with mushroom, vegan cheese sauce, spinach, pickled onions and jalapeno vinaigrette.",
                                  imageId: "cd6f9414396200307a21a66bf4537171",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34500,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "63379695",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379696",
                                      groupName: "Add Ons",
                                      choices: [
                                        {
                                          id: "50594500",
                                          name: "Extra Spinach",
                                          price: 5500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "63379697",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Vegan Salads",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100014439",
                                  name: "Vegan Mushroom Tortilla Salad",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | With lettuce, shaved red cabbage, cucumber, roasted corn kernels, pinto beans, pico de gallo, spring onions, cilantro, tortilla crisps, vegan creamy jalapeno vinaigrette",
                                  imageId: "eb1f14f5912661fb805c502498eb6e08",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "107466423",
                                      groupName: "Extra Filling",
                                      choices: [
                                        {
                                          id: "50594403",
                                          name: "Extra Mushroom",
                                          price: 10000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "107466424",
                                      groupName: "Add Chips",
                                      choices: [
                                        {
                                          id: "50594383",
                                          name: "Side of Tortilla Chips",
                                          price: 14500,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Vegan Dessert",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "97953793",
                                  name: "Vegan Churros",
                                  category: "Vegan",
                                  description:
                                    "Serves 1 | Perfectly crisp on the outside and soft on the inside. Golden fried and coated in cinnamon and sugar. Served with thick vegan chocolate sauce.",
                                  imageId: "6c0ac2019021a305a31699baa9710b10",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isGuiltfree: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Drinks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "37533393",
                              name: "Fresh Lime Soda",
                              category: "Drinks",
                              description:
                                "Serves 1 | Muddled lime, mint and soda.",
                              imageId: "6ababf1390fe30af42b29e24fa10d179",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821257",
                                    name: "Sweet or Salt",
                                    variations: [
                                      {
                                        name: "Sweet",
                                        price: 175,
                                        default: 1,
                                        id: "65537253",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Salt",
                                        price: 175,
                                        id: "65537254",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821257",
                                        variationId: "65537253",
                                      },
                                    ],
                                    price: 17500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821257",
                                        variationId: "65537254",
                                      },
                                    ],
                                    price: 17500,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 17500,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "37533394",
                              name: "Fresh Lime Water",
                              category: "Drinks",
                              description:
                                "Serves 1 | Muddled lime, mint and purified water.",
                              imageId: "571a970003e8d1b48b92f2294a012845",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "19821258",
                                    name: "Sweet or Salt",
                                    variations: [
                                      {
                                        name: "Sweet",
                                        price: 175,
                                        default: 1,
                                        id: "65537255",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Salt",
                                        price: 175,
                                        id: "65537256",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "19821258",
                                        variationId: "65537255",
                                      },
                                    ],
                                    price: 17500,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "19821258",
                                        variationId: "65537256",
                                      },
                                    ],
                                    price: 17500,
                                  },
                                ],
                              },
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              defaultPrice: 17500,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "56565101",
                              name: "Iced Coffee",
                              category: "Drinks",
                              description: "Serves 1 | Coffee and milk on ice.",
                              imageId: "349a003999f3ff50cfc263cb61780a71",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "37533396",
                              name: "Passion Fruit Iced Tea",
                              category: "Drinks",
                              description:
                                "Serves 1 | Brewed black tea and passion fruit.",
                              imageId: "df07bcf32c78542693ecc64758ebc07e",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "37 ratings",
                                  ratingCountV2: "37",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067913",
                              name: "Iced Lime Tea",
                              category: "Drinks",
                              description:
                                "Serves 1 | Brewed black tea, splash of orange, lime juice.",
                              imageId: "467059ef2768f938c42585c7da85e9c5",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "37533395",
                              name: "Orange Iced Tea",
                              category: "Drinks",
                              description:
                                "Serves 1 | Brewed black tea, orange and lime juice.",
                              imageId: "f340005a9dac6b13fa08e2dd0e738b3d",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "60 ratings",
                                  ratingCountV2: "60",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067911",
                              name: "Watermelon Agua Fresca",
                              category: "Drinks",
                              description:
                                "Serves 1 | Fresh watermelon juice with a splash of lime juice",
                              imageId: "47ff400d0ebd9355b21722b8a4317e06",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59894280",
                              name: "Virgin Margarita",
                              category: "Drinks",
                              description:
                                "Serves 1 | Made with fresh lime juice, pineapple.",
                              imageId: "2e2b9c8bcf9ed1e44bfcdee2b410545d",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60067912",
                              name: "Tamarind Margarita",
                              category: "Drinks",
                              description:
                                "Serves 1 | Made with tamarind pulp and lime juice.",
                              imageId: "fc8a57a35d9027431afea9ea0581714d",
                              inStock: 1,
                              isVeg: 1,
                              price: 18500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11217334001299"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Candice's Gourmet Sandwiches & Wraps",
                      area: "Koramangala",
                      completeAddress:
                        "Chinita Real Mexican Food 25, 1st Floor, 5th Cross, 5th Block, Koramangala, Bangalore - 560095",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "14ad4350-2c53-4b79-bf8b-029fc10d2c50",
  sid: "bn776033-a1b7-4a84-a9b2-b4d108a3786a",
  deviceId: "dcda4783-065d-80c0-7969-55f07f44711c",
  csrfToken: "B8mrNFL31SCS-2jbZs4aU76pOdfmBTw7_EI-5JAY",
};
