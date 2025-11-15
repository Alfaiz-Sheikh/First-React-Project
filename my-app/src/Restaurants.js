import './Restaurants.css';

function ResCards(props){
    const {resData} = props;
    return(
        <div className="resCard">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} alt="res-logo" className='resImage'/>
            <h2 className='resName'>{resData.name}</h2>
            <p className='cusine'>{resData.cuisines.join(", ")}</p>
            <p className='price'>{resData.costForTwo}</p>
            <p className='time'>{resData.sla.slaString}</p>
        </div>
    );
}

function Restaurants() {
    return (
        <section id="restaurants">
            <div className="restaurant-sec">
                <ResCards resData = {resList[0].card.card.info}/>
                <ResCards resData = {resList[1].card.card.info}/>
                <ResCards resData = {resList[2].card.card.info}/>
                <ResCards resData = {resList[3].card.card.info}/>
                <ResCards resData = {resList[4].card.card.info}/>
                <ResCards resData = {resList[5].card.card.info}/>
                <ResCards resData = {resList[6].card.card.info}/>
            </div>
        </section>
    );
}

const resList = [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "919025",
              "name": "Burger King",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
              "locality": "Bhawarkuan main Road",
              "areaName": "Ashok Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.2,
              "parentId": "166",
              "avgRatingString": "4.2",
              "totalRatingsString": "4.0K+",
              "promoted": true,
              "adTrackingId": "cid=0718b3f8-a0e1-4e6c-9e7a-cb3819d46027~p=1~adgrpid=0718b3f8-a0e1-4e6c-9e7a-cb3819d46027#ag18~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=919025~plpr=COLLECTION~eid=0738566b-8e71-44d4-a1bd-e4faa1a67f76~srvts=1763192868504~collid=83637",
              "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-16 05:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0718b3f8-a0e1-4e6c-9e7a-cb3819d46027"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=919025&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1248863",
              "name": "Paratha House",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/29/071f2477-3ad8-4d31-8213-5f85f0f51a88_1248863.jpg",
              "locality": "Sudama Nagar",
              "areaName": "Sudama Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian"
              ],
              "avgRating": 3.7,
              "veg": true,
              "parentId": "155380",
              "avgRatingString": "3.7",
              "totalRatingsString": "\u003C3",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-16 00:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1248863&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "65267",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/833443f7-fa3c-43c0-b23a-7677ed1a666f_65267.JPG",
              "locality": "South Tukoganj",
              "areaName": "South Tukoganj",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "17K+",
              "promoted": true,
              "adTrackingId": "cid=0b2338a3-0d71-43e3-851e-2080bca41c63~p=4~adgrpid=0b2338a3-0d71-43e3-851e-2080bca41c63#ag14~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=65267~plpr=COLLECTION~eid=8f35393b-4755-47e6-8a71-1bcac13b08cc~srvts=1763192868504~collid=83637",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-15 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "7.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0b2338a3-0d71-43e3-851e-2080bca41c63"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=65267&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "937952",
              "name": "Chaat House",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/11/e04f7bad-a838-46b3-bf3d-ed0d9c5e3362_49630aa3-21c2-4dc7-bad8-955676302af2.jpg",
              "locality": "Sarafa",
              "areaName": "Sarafa",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Beverages",
                "Street Food",
                "Snacks"
              ],
              "avgRating": 4,
              "veg": true,
              "parentId": "56650",
              "avgRatingString": "4.0",
              "totalRatingsString": "33",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-15 22:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=937952&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "737926",
              "name": "KFC",
              "cloudinaryImageId": "d5bc5b32dd177f5f207cad66556a572b",
              "locality": "Indore",
              "areaName": "Bhavarkua",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
              ],
              "avgRating": 4.3,
              "parentId": "547",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.9K+",
              "promoted": true,
              "adTrackingId": "cid=34515124~p=8~adgrpid=34515124#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=737926~plpr=COLLECTION~eid=9eb98235-058f-4565-be83-aeaf20b74167~srvts=1763192868504~collid=83637",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-16 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "34515124"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=737926&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "684979",
              "name": "Chai Sutta Bar",
              "cloudinaryImageId": "z3bie8ex0i6jzm1id3mg",
              "locality": "Naredra",
              "areaName": "Sudama Nagar",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Beverages",
                "Burgers",
                "Fast Food",
                "Pizzas",
                "Snacks"
              ],
              "avgRating": 4.3,
              "veg": true,
              "parentId": "14909",
              "avgRatingString": "4.3",
              "totalRatingsString": "89",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-15 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=684979&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "851705",
              "name": "Wok This Way",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/f73b54e1-8022-47fb-91a2-5d1d3c40de78_297695c0-8989-4830-be3a-a62d45891122.jpg",
              "locality": "Khatiwala Tank",
              "areaName": "Bhawar Kuan",
              "costForTwo": "₹159 for two",
              "cuisines": [
                "Pizzas",
                "Burger"
              ],
              "avgRating": 3.3,
              "veg": true,
              "parentId": "987",
              "avgRatingString": "3.3",
              "totalRatingsString": "441",
              "promoted": true,
              "adTrackingId": "cid=32764164~p=10~adgrpid=32764164#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=851705~plpr=COLLECTION~eid=d57115d1-cf45-4eb6-a4ea-289e0b28ca7f~srvts=1763192868504~collid=83637",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-11-15 22:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32764164"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=851705&source=collection&query=Burger",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }]

export default Restaurants;