import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const restaurantList = [
  {
    info: {
      id: "595261",
      name: "Qaswa Hills Restaurant",
      cloudinaryImageId: "620013707c01ed86862bbd0dc61dd9d0",
      locality: "Station Road",
      areaName: "Khwaja Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai", "Biryani", "North Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "163175",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/qaswa-hills-restaurant-station-road-khwaja-nagar-bijapur-595261",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "199015",
      name: "Hotel blue diamond",
      cloudinaryImageId: "fudhqf6c3e6yu1jj1dyv",
      locality: "MG Road",
      areaName: "Khwaja Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Biryani", "Mughlai", "Chinese"],
      avgRating: 4,
      parentId: "98403",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-blue-diamond-mg-road-khwaja-nagar-bijapur-199015",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "749534",
      name: "Hotel Udupi Sagar",
      cloudinaryImageId: "b573f6a00571c79f8d92ff855351dc01",
      locality: "Azad Road",
      areaName: "Khwaja Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Indian"],
      avgRating: 3.5,
      veg: true,
      parentId: "103173",
      avgRatingString: "3.5",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-udupi-sagar-azad-road-khwaja-nagar-bijapur-749534",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "770295",
      name: "Anna Idli",
      cloudinaryImageId: "260f40c65ff8bc28415c54db4a59ee6b",
      locality: "Bijapur",
      areaName: "Khwaja Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "3790",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/anna-idli-khwaja-nagar-bijapur-770295",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "713614",
      name: "Shree Yadiyur Siddalingeshwar Bhojanalaya Family R",
      cloudinaryImageId: "5b1cde8a979ea59ad34a102537f6ec01",
      locality: "Barakaman Road",
      areaName: "Khwaja Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "North Indian", "Biryani"],
      avgRating: 4.3,
      veg: true,
      parentId: "425991",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/shree-yadiyur-siddalingeshwar-bhojanalaya-family-r-barakaman-road-khwaja-nagar-bijapur-713614",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "569897",
      name: "Kolhapur Chat And FastFood And Hotel",
      cloudinaryImageId: "e9tauestz83gs1khvlmr",
      locality: "Khwaja Nagar",
      areaName: "Khwaja Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Chaat", "Fast Food", "Snacks"],
      avgRating: 4,
      veg: true,
      parentId: "342205",
      avgRatingString: "4.0",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-07 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kolhapur-chat-and-fastfood-and-hotel-khwaja-nagar-bijapur-569897",
      type: "WEBLINK",
    },
  },
];

const RestrauntCard = ({
  areaName,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        />
        <h2>{areaName}</h2>
        <h3>{cuisines} </h3>
        <h4>{avgRating} stars</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="restraunt-container">
      {restaurantList.map((ele) => {
        return <RestrauntCard {...ele.info} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
