export function filterData(inputData, allRestaurantMenu) {
    if (inputData == "") {
      return allRestaurantMenu;
    }
    const filterData = allRestaurantMenu.filter((menuItem) => {
      if (menuItem.info.name.toUpperCase().includes(inputData.toUpperCase())) {
        return menuItem;
      }
    });

    return filterData;
  }