const storeOwners = [
    {
      name: 'charles',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'sally',
      stores: 1,
      location: "NM",
    },
    {
      name: 'cassandra',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations += storeOwners[i].stores;
    }   
    return totalLocations;
  };
  
  let locations = listNumberOfStores();
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me who owns stores?');
    }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
        console.log(`Yes, ${person} has one in ${location}`);
    }
  }
  
  tellMeMyStores();
  hasStore();
  