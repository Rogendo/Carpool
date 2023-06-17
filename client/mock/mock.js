ridesMock = [
  {
    id: "ride_id",
    driver: {
      id: "driver_id",
      name: "Driver Name",
      profilePicture: "driver_profile_picture_url",
      rating: 4.8,
    },
    pickupLocation: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: "Pickup Location Address",
    },
    dropOffLocation: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: "Drop-off Location Address",
    },
    dateTime: "2023-06-18T09:00:00",
    availableSeats: 3,
    passengers: [
      {
        id: "passenger_id",
        name: "Passenger Name",
        profilePicture: "passenger_profile_picture_url",
        rating: 4.5,
      },
    ],
    price: 15.99,
    description: "Additional details about the ride",
    status: "active",
  },
];
