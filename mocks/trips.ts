import type { Trip, TripDetail } from "~/common/trips";

export const mockTrips: TripDetail[] = [
  {
    id: "6d048c69-36c1-406e-a869-1dbca850c838",
    name: "Paris",
    description: "The city of love",
    departureDate: new Date("2024-12-01"),
    returnDate: new Date("2024-12-10"),
    pricePerPerson: 100,
    picture: "/images/trips/paris.jpg",
    rating: 4,
    region: "europe",
    fullDescription: `
## **Day 1: Arrival and Exploring Montmartre**
- **Morning:**
  - Arrival at Paris Charles de Gaulle Airport.
  - Transfer to your hotel and check-in.
  - Freshen up and relax.
- **Afternoon:**
  - Explore the artistic district of **Montmartre**.
  - Visit **Sacré-Cœur Basilica** and enjoy panoramic views of Paris.
- **Evening:**
  - Stroll through **Place du Tertre**, filled with artists and quaint cafés.
  - Dinner at a local French bistro.

---

## **Day 2: Classic Paris Landmarks**
- **Morning:**
  - Visit the iconic **Eiffel Tower** (pre-book tickets to avoid queues).
  - Stroll along **Champ de Mars** for photo opportunities.
- **Afternoon:**
  - Explore **Champs-Élysées** and shop at luxury boutiques.
  - Marvel at the **Arc de Triomphe** (climb up for stunning views).
- **Evening:**
  - Seine River Cruise with dinner onboard for a magical view of illuminated Paris.

---

## **Day 3: Art and Culture**
- **Morning:**
  - Spend the morning at the **Louvre Museum** (don’t miss the Mona Lisa).
  - Walk through the **Tuileries Garden**.
- **Afternoon:**
  - Head to **Musée d'Orsay** to admire Impressionist masterpieces.
- **Evening:**
  - Relax in **Saint-Germain-des-Prés**, enjoying wine and cheese at a traditional café.

---

## **Day 4: Day Trip to Versailles**
- **Morning:**
  - Take a short train ride to **Palace of Versailles** (book tickets in advance).
  - Tour the opulent palace and the stunning gardens.
- **Afternoon:**
  - Enjoy lunch near the Versailles estate.
  - Return to Paris and visit **Galeries Lafayette** for shopping.
- **Evening:**
  - Dinner at a Michelin-starred restaurant or a cozy brasserie.

---

## **Day 5: Hidden Gems and Departure**
- **Morning:**
  - Discover the charming **Le Marais** district.
  - Visit **Place des Vosges**, the oldest planned square in Paris.
  - Explore local boutiques and trendy art galleries.
- **Afternoon:**
  - Lunch at a hidden gem café.
  - Last-minute sightseeing or souvenir shopping.
- **Evening:**
  - Transfer to the airport for your departure.

---

## **Tips for Your Trip**
- Book museum and attraction tickets in advance to skip long lines.
- Use the **Paris Metro** for quick and easy transportation.
- Try iconic Parisian dishes: croissants, escargot, ratatouille, and macarons.
- Learn a few basic French phrases for a warmer reception.

Enjoy your Parisian adventure! 🇫🇷✨`,
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    name: "London",
    description: "The capital of England",
    departureDate: new Date("2025-01-01"),
    returnDate: new Date("2025-01-10"),
    pricePerPerson: 200,
    picture: "/images/trips/london.jpg",
    rating: 5,
    region: "europe",
    fullDescription: `
Discover the vibrant culture, iconic landmarks, and rich history of London in this 5-day trip.

## **Day 1: Arrival and Exploring the City**
- **Morning:** Arrive at Heathrow/Gatwick, check-in to your hotel, and relax.
- **Afternoon:** Explore **Westminster**:
  - Visit **Big Ben**, **Houses of Parliament**, and **Westminster Abbey**.
  - Walk along the **Thames River**.
- **Evening:** Enjoy dinner in **Covent Garden**, famous for its lively atmosphere.

---

## **Day 2: Royal London**
- **Morning:** Visit **Buckingham Palace** and watch the **Changing of the Guard**.
- **Afternoon:**
  - Tour the **Tower of London** and see the Crown Jewels.
  - Walk across **Tower Bridge**.
- **Evening:** Relax at a traditional English pub near **The Shard**.

---

## **Day 3: Museums and Shopping**
- **Morning:** Explore **The British Museum** (free entry, amazing artifacts).
- **Afternoon:**
  - Visit the **National Gallery** in Trafalgar Square.
  - Walk to **Piccadilly Circus** and shop along **Regent Street** or **Oxford Street**.
- **Evening:** Catch a West End show at one of London’s famous theaters.

---

## **Day 4: Day Trip to Windsor or Harry Potter Studio Tour**
- **Option 1:**
  - Visit **Windsor Castle**, the oldest inhabited castle in the world.
- **Option 2:**
  - Immerse yourself in magic with the **Harry Potter Studio Tour**.
- **Evening:** Return to London and enjoy a relaxed dinner in **Soho**.

---

## **Day 5: Hidden Gems and Departure**
- **Morning:**
  - Stroll through **Camden Market** or **Borough Market** for unique finds.
  - Visit **St. Paul’s Cathedral** or enjoy views from **Sky Garden**.
- **Afternoon:** Lunch and last-minute shopping at **Harrods**.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Use the **Oyster Card** for seamless travel on the Tube and buses.
- Pre-book major attractions like the Tower of London and the Harry Potter Studio.
- Don't miss classic British dishes: fish & chips, afternoon tea, and English breakfast.

Have an unforgettable time in London! 🇬🇧✨`,
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    name: "New York",
    description: "The city that never sleeps",
    departureDate: new Date("2025-02-01"),
    returnDate: new Date("2025-02-10"),
    pricePerPerson: 300,
    picture: "/images/trips/newyork.jpg",
    rating: 3.5,
    region: "america",
    fullDescription: `
Experience the dynamic energy, iconic landmarks, and cultural diversity of the Big Apple in this 5-day adventure.

## **Day 1: Arrival and Midtown Marvels**
- **Morning:** Arrive at JFK/LGA, check-in to your hotel, and freshen up.
- **Afternoon:** Explore **Midtown Manhattan**:
  - Visit **Times Square** and soak in the bright lights.
  - Head to the top of the **Empire State Building** or **Top of the Rock** for stunning city views.
- **Evening:** Dinner at a classic New York pizzeria.

---

## **Day 2: Iconic Landmarks**
- **Morning:** Take the ferry to **Statue of Liberty** and **Ellis Island**.
- **Afternoon:**
  - Walk through **Wall Street** and see the **Charging Bull**.
  - Visit the solemn **9/11 Memorial & Museum**.
- **Evening:** Stroll along the **Brooklyn Bridge** and dine in **DUMBO** with skyline views.

---

## **Day 3: Central Park and Museums**
- **Morning:** Explore **Central Park**:
  - Rent a bike or enjoy a leisurely walk.
  - Visit iconic spots like **Bethesda Fountain** and **Bow Bridge**.
- **Afternoon:** Tour a world-class museum:
  - **The Met** (Metropolitan Museum of Art) or **American Museum of Natural History**.
- **Evening:** Catch a Broadway show in the Theater District.

---

## **Day 4: The High Line and Downtown Gems**
- **Morning:** Walk the **High Line**, a unique elevated urban park.
- **Afternoon:**
  - Explore the trendy **Meatpacking District**.
  - Visit **Hudson Yards** and ascend **The Edge** for breathtaking views.
- **Evening:** Dine in **Greenwich Village** or **Little Italy** for a cozy vibe.

---

## **Day 5: Shopping and Departure**
- **Morning:** Shop along **Fifth Avenue** or explore **SoHo** for chic boutiques.
- **Afternoon:** Enjoy lunch at **Chelsea Market**.
- **Evening:** Depart for the airport with unforgettable memories.

---

## **Tips for Your Trip**
- Use the **NYC Subway** for efficient travel (get a MetroCard).
- Book major attractions in advance to save time.
- Try iconic foods: bagels, hot dogs, NYC cheesecake, and street pretzels.

Have an amazing time in the city that never sleeps! 🗽✨
`,
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    name: "Tokyo",
    description: "The capital of Japan",
    departureDate: new Date("2025-03-01"),
    returnDate: new Date("2025-03-10"),
    pricePerPerson: 400,
    picture: "/images/trips/tokyo.jpg",
    rating: 4.5,
    region: "asia",
    fullDescription: `
Immerse yourself in Tokyo’s vibrant culture, futuristic architecture, and timeless traditions on this 5-day journey.

## **Day 1: Arrival and Shinjuku Vibes**
- **Morning:** Arrive at Narita/Haneda Airport, check-in to your hotel, and relax.
- **Afternoon:** Explore **Shinjuku**:
  - Stroll through **Shinjuku Gyoen National Garden**.
  - Discover the buzzing **Kabukicho** area.
- **Evening:** Enjoy a traditional Japanese dinner at an **izakaya** and take in the neon-lit streets.

---

## **Day 2: Temples and Asakusa**
- **Morning:** Visit the iconic **Senso-ji Temple** in **Asakusa**.
  - Shop for souvenirs and street snacks along **Nakamise Street**.
- **Afternoon:** Walk along the **Sumida River** and view the **Tokyo Skytree**.
- **Evening:** Experience modern Tokyo in **Akihabara**, the hub of anime, manga, and electronics.

---

## **Day 3: Futuristic Odaiba and City Views**
- **Morning:** Head to **Odaiba**, a futuristic entertainment hub:
  - Visit **TeamLab Borderless** or **DiverCity Tokyo Plaza** to see the giant Gundam.
- **Afternoon:** Explore **Roppongi** and visit the **Mori Art Museum** or enjoy the view from **Tokyo City View**.
- **Evening:** Dine with a view at **Shibuya Sky**, overlooking the famous **Shibuya Crossing**.

---

## **Day 4: Traditional Tokyo**
- **Morning:** Discover **Meiji Shrine** in **Harajuku**.
  - Stroll through **Takeshita Street** for quirky shops and crepes.
- **Afternoon:** Visit the serene **Nezu Shrine** or explore the charming **Yanaka Ginza** district for a taste of old Tokyo.
- **Evening:** Experience a traditional **kaiseki dinner** or try sushi at the **Tsukiji Outer Market**.

---

## **Day 5: Shopping and Departure**
- **Morning:** Shop in **Ginza** for luxury brands or explore **Ameya-Yokocho** in Ueno for bargains.
- **Afternoon:** Enjoy lunch at a sushi train or ramen shop.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Get a **Suica or Pasmo card** for convenient subway travel.
- Learn a few Japanese phrases for politeness (e.g., “Arigato” = Thank you).
- Try unique Japanese treats: matcha desserts, wagyu beef, and takoyaki.

Enjoy the perfect blend of tradition and innovation in Tokyo! 🇯🇵✨

`,
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Sydney",
    description: "The largest city in Australia",
    departureDate: new Date("2025-04-01"),
    returnDate: new Date("2025-04-10"),
    pricePerPerson: 500,
    picture: "/images/trips/sydney.jpg",
    rating: 4,
    region: "oceania",
    fullDescription: `

Discover the stunning beaches, iconic landmarks, and vibrant culture of Sydney in this 5-day adventure.

## **Day 1: Arrival and Circular Quay**
- **Morning:** Arrive at Sydney Kingsford Smith Airport, check-in to your hotel, and unwind.
- **Afternoon:** Head to **Circular Quay**:
  - Visit the iconic **Sydney Opera House**.
  - Stroll along the **Royal Botanic Garden** to **Mrs. Macquarie’s Chair** for breathtaking views.
- **Evening:** Dinner at a waterfront restaurant with views of the **Harbour Bridge**.

---

## **Day 2: Harbour Adventures**
- **Morning:** Take a **ferry to Manly Beach**:
  - Enjoy the scenic ride and relax on the sandy shores.
- **Afternoon:** Walk across the **Sydney Harbour Bridge** or climb it for an adventurous experience.
- **Evening:** Watch the sunset at **Barangaroo Reserve** and dine at one of its chic restaurants.

---

## **Day 3: Beaches and Bondi to Coogee Walk**
- **Morning:** Visit **Bondi Beach**, Sydney’s most famous beach.
  - Enjoy surfing or relax by the ocean.
- **Afternoon:** Take the **Bondi to Coogee coastal walk**:
  - Marvel at stunning cliffs, rock pools, and scenic views.
- **Evening:** Relax with dinner at a trendy Bondi café or bar.

---

## **Day 4: Blue Mountains Day Trip**
- **Morning:** Take a day trip to the **Blue Mountains** (2 hours from Sydney):
  - Visit the **Three Sisters** rock formation and **Scenic World**.
- **Afternoon:** Explore charming mountain villages like **Leura** and enjoy local cuisine.
- **Evening:** Return to Sydney and unwind.

---

## **Day 5: Shopping and Departure**
- **Morning:** Explore **The Rocks Market** for unique souvenirs and artisan goods.
- **Afternoon:** Shop at **Pitt Street Mall** or relax at **Darling Harbour**.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Use an **Opal card** for convenient public transport.
- Book popular activities (like the Harbour Bridge Climb) in advance.
- Don’t miss Aussie specialties: lamingtons, meat pies, and fresh seafood.

Experience Sydney’s incredible blend of natural beauty and urban charm! 🇦🇺✨
`,
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
    name: "Rome",
    description: "The capital of Italy",
    departureDate: new Date("2025-05-01"),
    returnDate: new Date("2025-05-10"),
    pricePerPerson: 600,
    picture: "/images/trips/rome.jpg",
    rating: 4.5,
    region: "europe",
    fullDescription: `
Dive into the heart of history, art, and Italian culture with this 5-day exploration of the Eternal City.

## **Day 1: Arrival and Ancient Rome**
- **Morning:** Arrive at Fiumicino Airport, check-in to your hotel, and refresh.
- **Afternoon:** Explore **Ancient Rome**:
  - Visit the **Colosseum** and marvel at this ancient amphitheater.
  - Walk through the **Roman Forum** and **Palatine Hill**, where Roman civilization thrived.
- **Evening:** Dinner at a trattoria in **Monti**, a charming and historic neighborhood.

---

## **Day 2: Vatican City**
- **Morning:** Visit **St. Peter’s Basilica** (climb to the dome for stunning views).
- **Afternoon:** Explore the **Vatican Museums** and admire the **Sistine Chapel**.
- **Evening:** Stroll along the **Tiber River** and enjoy gelato at **Ponte Sant'Angelo**.

---

## **Day 3: Baroque Rome**
- **Morning:** Toss a coin into the **Trevi Fountain** and visit the nearby **Piazza di Spagna** and **Spanish Steps**.
- **Afternoon:** Discover **Piazza Navona** with its fountains and street artists.
  - Stop by the **Pantheon**, a marvel of ancient engineering.
- **Evening:** Relax with dinner in **Campo de' Fiori**, known for its lively atmosphere.

---

## **Day 4: Trastevere and Hidden Gems**
- **Morning:** Explore the bohemian district of **Trastevere**:
  - Visit **Santa Maria in Trastevere**, one of Rome’s oldest churches.
  - Wander its cobbled streets filled with charm.
- **Afternoon:** Climb to **Gianicolo Hill** for panoramic views of the city.
- **Evening:** Savor traditional Roman cuisine at a cozy Trastevere restaurant.

---

## **Day 5: Shopping and Departure**
- **Morning:** Shop for leather goods and souvenirs at **Via del Corso** or explore high-end boutiques in **Via Condotti**.
- **Afternoon:** Enjoy lunch near **Piazza Venezia** and take one last stroll through the city.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Pre-book tickets for the Colosseum and Vatican Museums to skip the lines.
- Wear comfortable shoes for walking on cobblestones.
- Indulge in Roman specialties: cacio e pepe, carbonara, and suppli.

Buon viaggio in Rome, the Eternal City! 🇮🇹✨
`,
  },
  {
    id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
    name: "Dubai",
    description: "The city of luxury",
    departureDate: new Date("2025-07-01"),
    returnDate: new Date("2025-07-10"),
    pricePerPerson: 800,
    picture: "/images/trips/dubai.jpg",
    rating: 3.2,
    region: "asia",
    fullDescription: `
Explore the glitz, glamour, and desert adventures of Dubai with this 5-day itinerary.

## **Day 1: Arrival and Downtown Dubai**
- **Morning:** Arrive at Dubai International Airport, check-in to your hotel, and relax.
- **Afternoon:** Visit **Burj Khalifa** (book tickets for At The Top observation deck).
  - Stroll through **Dubai Mall** and see the **Dubai Aquarium**.
- **Evening:** Watch the **Dubai Fountain Show** and enjoy dinner at a downtown restaurant.

---

## **Day 2: Beaches and Modern Marvels**
- **Morning:** Relax at **Jumeirah Beach** or **La Mer**.
- **Afternoon:** Visit the **Burj Al Arab** (photo stop) and explore **Souk Madinat Jumeirah**.
- **Evening:** Head to **The Palm Jumeirah** and dine at a waterfront restaurant.

---

## **Day 3: Desert Safari Adventure**
- **Morning:** Leisurely breakfast and explore the city at your own pace.
- **Afternoon to Evening:** Go on a **desert safari**:
  - Dune bashing, camel riding, and sandboarding.
  - Traditional dinner in a desert camp with live entertainment.

---

## **Day 4: Old Dubai and Cultural Gems**
- **Morning:** Visit **Al Fahidi Historical Neighborhood**.
  - Tour the **Dubai Museum** and take an **abra ride** across **Dubai Creek**.
- **Afternoon:** Explore the **Gold and Spice Souks** in Deira.
- **Evening:** Relax with a dinner cruise on **Dubai Marina**.

---

## **Day 5: Shopping and Departure**
- **Morning:** Shop at **Mall of the Emirates** (don’t miss **Ski Dubai** if you have time).
- **Afternoon:** Last-minute sightseeing or shopping at **City Walk** or **Bluewaters Island**.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Dress modestly in public spaces, especially in Old Dubai.
- Use taxis or ride-sharing apps for easy transportation.
- Indulge in local delicacies: shawarma, luqaimat, and Arabic coffee.

Enjoy the perfect mix of luxury and adventure in Dubai! 🇦🇪✨
`,
  },
  {
    id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
    name: "Beijing",
    description: "The capital of China",
    departureDate: new Date("2025-10-01"),
    returnDate: new Date("2025-10-10"),
    pricePerPerson: 1100,
    picture: "/images/trips/beijing.jpg",
    rating: 4.2,
    region: "asia",
    fullDescription: `
Experience the history, culture, and modern energy of Beijing in this 5-day exploration.

## **Day 1: Arrival and Tiananmen Square**
- **Morning:** Arrive at Beijing Capital International Airport, check-in to your hotel, and relax.
- **Afternoon:** Visit **Tiananmen Square**:
  - See landmarks like the **Monument to the People’s Heroes** and the **Great Hall of the People**.
  - Enter the **Forbidden City**, the imperial palace of the Ming and Qing Dynasties.
- **Evening:** Dinner at a local restaurant and try **Peking duck**.

---

## **Day 2: The Great Wall**
- **Morning:** Take a day trip to the **Mutianyu section of the Great Wall** (less crowded).
  - Hike along the ancient fortifications and enjoy stunning views.
- **Afternoon:** Return to Beijing and visit the **Olympic Park**:
  - See the **Bird’s Nest Stadium** and **Water Cube**.
- **Evening:** Relax and enjoy local street food at **Wangfujing Snack Street**.

---

## **Day 3: Temple of Heaven and Hutongs**
- **Morning:** Visit the **Temple of Heaven**, where emperors once prayed for good harvests.
  - Stroll through the surrounding park and watch locals practice tai chi.
- **Afternoon:** Explore the **Hutongs** (traditional alleys) in **Nanluoguxiang**.
  - Discover local shops, tea houses, and hidden courtyards.
- **Evening:** Enjoy dinner at a cozy Hutong eatery.

---

## **Day 4: Summer Palace and Modern Beijing**
- **Morning:** Tour the **Summer Palace**:
  - Walk around **Kunming Lake** and climb to the **Tower of Buddhist Incense**.
- **Afternoon:** Visit **798 Art District**, a trendy hub for modern art and culture.
- **Evening:** Dine in the vibrant **Sanlitun** area, known for its restaurants and nightlife.

---

## **Day 5: Shopping and Departure**
- **Morning:** Shop for unique souvenirs at the **Silk Market** or **Panjiayuan Antique Market**.
- **Afternoon:** Visit **Beihai Park** for a peaceful stroll around the lake.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Plan for air quality by checking the AQI and wearing a mask on high pollution days.
- Use the **Beijing Metro** for affordable and efficient travel.
- Must-try dishes: zhajiangmian, dumplings, and hot pot.

Enjoy Beijing’s fascinating blend of history and modernity! 🇨🇳✨
`,
  },
  {
    id: "1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z",
    name: "Rio de Janeiro",
    description: "The city of Carnival",
    departureDate: new Date("2025-11-01"),
    returnDate: new Date("2025-11-10"),
    pricePerPerson: 1200,
    picture: "/images/trips/rio.jpg",
    rating: 4.8,
    region: "america",
    fullDescription: `
Experience the vibrant culture, stunning landscapes, and lively spirit of Rio in this 5-day adventure.

## **Day 1: Arrival and Copacabana Beach**
- **Morning:** Arrive at Rio de Janeiro–Galeão International Airport, check-in to your hotel, and relax.
- **Afternoon:** Visit **Copacabana Beach**:
  - Take a stroll along the iconic promenade and dip your toes in the ocean.
  - Enjoy a refreshing coconut water from one of the beachside vendors.
- **Evening:** Dinner at a beachfront restaurant and try local dishes like **feijoada**.

---

## **Day 2: Christ the Redeemer and Sugarloaf Mountain**
- **Morning:** Take the **train to Corcovado** to visit the **Christ the Redeemer** statue, one of the New Seven Wonders of the World.
  - Enjoy panoramic views of Rio and its beaches.
- **Afternoon:** Ride the cable car to the top of **Sugarloaf Mountain** for breathtaking views of the city, the bay, and the iconic beaches.
- **Evening:** Explore **Lapa** and enjoy the nightlife with samba music at a local bar.

---

## **Day 3: Santa Teresa and Lapa**
- **Morning:** Discover the charming **Santa Teresa** neighborhood:
  - Wander through its winding streets filled with colonial architecture, vibrant street art, and local shops.
  - Visit the **Selarón Steps** (Escadaria Selarón) in Lapa, famous for its colorful mosaic tiles.
- **Afternoon:** Relax in **Lagoa Rodrigo de Freitas** or rent a bike for a scenic ride around the lagoon.
- **Evening:** Enjoy a traditional Brazilian dinner in **Santa Teresa** with local specialties like **moqueca** or **picanha**.

---

## **Day 4: Tijuca National Park and Ipanema**
- **Morning:** Hike through **Tijuca National Park**, one of the world’s largest urban forests. Visit **Cachoeira dos Macacos** (Monkeys Waterfall) for a refreshing stop.
- **Afternoon:** Head to **Ipanema Beach**, known for its lively atmosphere and stunning sunset views.
  - Explore **Feira Hippie de Ipanema** for local crafts and souvenirs.
- **Evening:** Enjoy a sunset caipirinha at a rooftop bar overlooking the beach.

---

## **Day 5: Shopping and Departure**
- **Morning:** Visit **Rio's Downtown** and explore **Saara Market** for souvenirs and local products.
  - Alternatively, shop in **Rio Sul Shopping Mall** for a mix of local and international brands.
- **Afternoon:** Take a final stroll along **Arpoador** and enjoy the last views of the ocean and mountains.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Use the **Vermelho card** for easy access to public transportation.
- Be mindful of Rio's diverse neighborhoods, especially after dark—stick to well-known areas.
- Try traditional Brazilian drinks: **caipirinha**, **mate**, and **guaraná**.

Enjoy the rhythm, beauty, and energy of Rio de Janeiro! 🇧🇷✨
`,
  },
  {
    id: "2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a",
    name: "Cape Town",
    description: "The city at the tip of Africa",
    departureDate: new Date("2025-12-01"),
    returnDate: new Date("2025-12-10"),
    pricePerPerson: 1300,
    picture: "/images/trips/capetown.jpg",
    rating: 4.3,
    region: "africa",
    fullDescription: `

Explore the breathtaking landscapes, rich culture, and vibrant atmosphere of Cape Town in this 5-day itinerary.

## **Day 1: Arrival and V&A Waterfront**
- **Morning:** Arrive at Cape Town International Airport, check-in to your hotel, and relax.
- **Afternoon:** Head to the **V&A Waterfront**:
  - Stroll around the shops, galleries, and restaurants.
  - Visit the **Two Oceans Aquarium** or take a boat trip to **Robben Island**.
- **Evening:** Enjoy dinner at one of the waterfront restaurants with views of the harbor and **Table Mountain**.

---

## **Day 2: Table Mountain and City Exploration**
- **Morning:** Take the **cable car** up to **Table Mountain** for panoramic views of the city and coastline.
  - Hike around the summit or simply enjoy the views.
- **Afternoon:** Explore **Company's Garden** and visit the **Iziko South African Museum**.
  - Wander through **Greenmarket Square** for local crafts and souvenirs.
- **Evening:** Have dinner in **Bo-Kaap**, the colorful neighborhood known for its Malay culture and cuisine.

---

## **Day 3: Cape Point and the Penguins**
- **Morning:** Take a scenic drive along **Chapman’s Peak Drive** to **Cape Point**:
  - Visit the **Cape of Good Hope** and the **Cape Point Lighthouse**.
  - Enjoy the stunning beaches, including **Boulders Beach**, where you can see the famous African penguins.
- **Afternoon:** Explore **Simon's Town** and have lunch at a seaside café.
- **Evening:** Return to Cape Town and relax, perhaps with a cocktail at **Signal Hill** while watching the sunset.

---

## **Day 4: Winelands Tour**
- **Morning:** Take a day trip to the **Cape Winelands**:
  - Visit **Stellenbosch**, **Paarl**, or **Franschhoek** for wine tastings and vineyard tours.
  - Learn about the winemaking process and enjoy a gourmet lunch at a winery.
- **Afternoon:** Continue exploring the picturesque towns and enjoy more wine tasting.
- **Evening:** Return to Cape Town and unwind at your hotel or a local restaurant.

---

## **Day 5: Kirstenbosch Gardens and Departure**
- **Morning:** Visit **Kirstenbosch National Botanical Garden**, one of the most beautiful gardens in the world.
  - Walk along the **Tree Canopy Walkway** for stunning views of the gardens and mountains.
- **Afternoon:** Explore **Hout Bay** or take a relaxing walk along **Camps Bay Beach**.
- **Evening:** Transfer to the airport for your flight home.

---

## **Tips for Your Trip**
- Take a hat, sunscreen, and water when hiking Table Mountain or Cape Point.
- Rent a car to explore the surrounding areas, especially the Winelands and Cape Peninsula.
- Don’t miss the local food: **bobotie**, **biltong**, and fresh seafood.

Experience the stunning beauty and cultural richness of Cape Town! 🇿🇦✨

`,
  },
];
