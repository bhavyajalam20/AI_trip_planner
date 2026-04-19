// itinerary-data.js - Comprehensive Itinerary Database

const itineraryTemplates = {
    // Paris Templates
    'paris': {
        name: 'Paris, France',
        description: 'The City of Light',
        activities: {
            'art': [
                { name: 'Louvre Museum', time: '9:00 AM', description: 'Explore the world\'s largest art museum, home to the Mona Lisa and countless masterpieces. Book skip-the-line tickets in advance.' },
                { name: 'Musée d\'Orsay', time: '2:00 PM', description: 'Visit this renowned museum housing the world\'s finest collection of Impressionist masterpieces by Monet, Renoir, and Van Gogh.' },
                { name: 'Centre Pompidou', time: '3:00 PM', description: 'Modern art museum with contemporary works and great city views from the top floor.' }
            ],
            'history': [
                { name: 'Notre-Dame Cathedral', time: '10:00 AM', description: 'Visit the iconic Gothic cathedral (exterior viewing during restoration) and learn about its 850-year history.' },
                { name: 'Sainte-Chapelle', time: '11:30 AM', description: 'Marvel at the stunning 13th-century stained glass windows in this Gothic chapel.' },
                { name: 'Palace of Versailles', time: '9:00 AM', description: 'Day trip to the opulent palace of French royalty with magnificent gardens and Hall of Mirrors.' }
            ],
            'food': [
                { name: 'French Bistro Experience', time: '7:00 PM', description: 'Experience authentic French cuisine at a traditional bistro. Try classic dishes like coq au vin or beef bourguignon.' },
                { name: 'Marché des Enfants Rouges', time: '11:00 AM', description: 'Explore Paris\'s oldest covered market for gourmet food tastings and local specialties.' },
                { name: 'Wine Tasting in Montmartre', time: '4:00 PM', description: 'Discover French wines in the artistic quarter with a professional sommelier.' }
            ],
            'nature': [
                { name: 'Luxembourg Gardens', time: '10:00 AM', description: 'Stroll through beautiful formal gardens, watch children sail boats in the pond.' },
                { name: 'Seine River Walk', time: '2:00 PM', description: 'Take a leisurely walk along the Seine River, passing by iconic landmarks.' },
                { name: 'Bois de Boulogne', time: '9:00 AM', description: 'Escape the city in this large park with lakes, gardens, and walking trails.' }
            ],
            'adventure': [
                { name: 'Eiffel Tower Climb', time: '9:00 AM', description: 'Climb the stairs to the second floor of the Eiffel Tower for spectacular views and a workout.' },
                { name: 'Paris Catacombs', time: '2:00 PM', description: 'Explore the underground ossuary holding the remains of over 6 million people.' },
                { name: 'Seine River Cruise', time: '6:00 PM', description: 'Evening cruise along the Seine, watching the city lights illuminate the monuments.' }
            ],
            'shopping': [
                { name: 'Champs-Élysées Shopping', time: '2:00 PM', description: 'Walk down the famous avenue and shop at flagship stores and boutiques.' },
                { name: 'Le Marais District', time: '10:00 AM', description: 'Browse vintage shops, designer boutiques, and unique Parisian finds.' },
                { name: 'Galeries Lafayette', time: '11:00 AM', description: 'Visit the iconic department store with its beautiful Art Nouveau dome.' }
            ],
            'nightlife': [
                { name: 'Moulin Rouge Show', time: '9:00 PM', description: 'Experience the famous cabaret show in Montmartre with dinner and champagne.' },
                { name: 'Latin Quarter Bar Crawl', time: '8:00 PM', description: 'Explore the vibrant nightlife in the historic Latin Quarter.' },
                { name: 'Rooftop Bar at Galeries Lafayette', time: '6:00 PM', description: 'Enjoy cocktails with panoramic views of Paris skyline.' }
            ],
            'relaxation': [
                { name: 'Spa Day at Le Bristol', time: '10:00 AM', description: 'Luxurious spa treatment at one of Paris\'s finest hotels.' },
                { name: 'Tuileries Garden Stroll', time: '3:00 PM', description: 'Peaceful walk through the historic royal garden.' },
                { name: 'Seine Sunset Picnic', time: '6:00 PM', description: 'Romantic picnic along the Seine with French delicacies.' }
            ]
        }
    },

    // Tokyo Templates
    'tokyo': {
        name: 'Tokyo, Japan',
        description: 'Where tradition meets innovation',
        activities: {
            'art': [
                { name: 'Tokyo National Museum', time: '9:00 AM', description: 'Discover Japan\'s largest collection of cultural artifacts and national treasures.' },
                { name: 'Mori Art Museum', time: '2:00 PM', description: 'Contemporary art museum in Roppongi Hills with stunning city views.' },
                { name: 'teamLab Borderless', time: '10:00 AM', description: 'Immersive digital art experience in a futuristic setting.' }
            ],
            'history': [
                { name: 'Senso-ji Temple', time: '8:00 AM', description: 'Visit Tokyo\'s oldest temple in historic Asakusa district, built in 628 AD.' },
                { name: 'Imperial Palace East Gardens', time: '10:00 AM', description: 'Explore the former grounds of Edo Castle with beautiful traditional gardens.' },
                { name: 'Meiji Shrine', time: '9:00 AM', description: 'Peaceful Shinto shrine dedicated to Emperor Meiji, surrounded by forest.' }
            ],
            'food': [
                { name: 'Tsukiji Outer Market Food Tour', time: '6:00 AM', description: 'Early morning sushi breakfast and street food exploration at the famous market.' },
                { name: 'Ramen Tasting in Shibuya', time: '12:00 PM', description: 'Try different regional ramen styles at Tokyo\'s best ramen shops.' },
                { name: 'Kaiseki Dinner Experience', time: '6:00 PM', description: 'Traditional multi-course Japanese dinner showcasing seasonal ingredients.' }
            ],
            'nature': [
                { name: 'Shinjuku Gyoen Garden', time: '9:00 AM', description: 'Beautiful park combining Japanese, English, and French garden styles.' },
                { name: 'Hakone Day Trip', time: '7:00 AM', description: 'Visit Mount Fuji area with hot springs, lakes, and mountain views.' },
                { name: 'Ueno Park Cherry Blossoms', time: '10:00 AM', description: 'Enjoy hanami (cherry blossom viewing) in one of Tokyo\'s most popular parks.' }
            ],
            'adventure': [
                { name: 'Tokyo Skytree', time: '10:00 AM', description: 'Ascend Japan\'s tallest structure for panoramic views of the metropolis.' },
                { name: 'Robot Restaurant Show', time: '8:00 PM', description: 'Bizarre and entertaining robot show in Shinjuku\'s entertainment district.' },
                { name: 'Shibuya Crossing Experience', time: '6:00 PM', description: 'Navigate the world\'s busiest pedestrian crossing and explore the vibrant district.' }
            ],
            'shopping': [
                { name: 'Harajuku Takeshita Street', time: '11:00 AM', description: 'Explore quirky fashion, anime goods, and youth culture in this iconic street.' },
                { name: 'Ginza Luxury Shopping', time: '2:00 PM', description: 'High-end shopping district with department stores and luxury boutiques.' },
                { name: 'Akihabara Electronics District', time: '10:00 AM', description: 'Electronics wonderland with gadgets, anime merchandise, and gaming culture.' }
            ],
            'nightlife': [
                { name: 'Shinjuku Golden Gai', time: '9:00 PM', description: 'Experience Tokyo\'s famous tiny bars in this historic drinking district.' },
                { name: 'Karaoke in Shibuya', time: '8:00 PM', description: 'Sing your heart out at a traditional Japanese karaoke box.' },
                { name: 'Roppongi Club Scene', time: '10:00 PM', description: 'International nightlife district with clubs and bars.' }
            ],
            'relaxation': [
                { name: 'Traditional Onsen Experience', time: '2:00 PM', description: 'Relax in natural hot springs at a traditional Japanese bathhouse.' },
                { name: 'Zen Meditation at Temple', time: '7:00 AM', description: 'Morning meditation session at a peaceful Buddhist temple.' },
                { name: 'Japanese Tea Ceremony', time: '3:00 PM', description: 'Participate in a traditional tea ceremony and learn about Japanese culture.' }
            ]
        }
    },

    // Bali Templates
    'bali': {
        name: 'Bali, Indonesia',
        description: 'Island of the Gods',
        activities: {
            'art': [
                { name: 'Ubud Art Market', time: '9:00 AM', description: 'Browse traditional Balinese art, handicrafts, and textiles in the cultural heart of Bali.' },
                { name: 'Agung Rai Museum of Art', time: '2:00 PM', description: 'Explore Indonesian and international art in beautiful traditional buildings.' },
                { name: 'Wood Carving Workshop in Mas Village', time: '10:00 AM', description: 'Learn traditional Balinese wood carving techniques from local artisans.' }
            ],
            'history': [
                { name: 'Tanah Lot Temple', time: '4:00 PM', description: 'Visit the iconic sea temple perched on a rocky outcrop, perfect for sunset viewing.' },
                { name: 'Besakih Temple Complex', time: '8:00 AM', description: 'Explore Bali\'s most important Hindu temple complex on the slopes of Mount Agung.' },
                { name: 'Uluwatu Temple', time: '5:00 PM', description: 'Clifftop temple with stunning ocean views and traditional Kecak fire dance performances.' }
            ],
            'food': [
                { name: 'Balinese Cooking Class', time: '9:00 AM', description: 'Learn to cook traditional dishes like nasi goreng and satay with local ingredients.' },
                { name: 'Jimbaran Seafood Dinner', time: '6:00 PM', description: 'Beachfront seafood barbecue dining with fresh catch and sunset views.' },
                { name: 'Traditional Warung Tour', time: '12:00 PM', description: 'Experience authentic local eateries and street food favorites.' }
            ],
            'nature': [
                { name: 'Tegallalang Rice Terraces', time: '7:00 AM', description: 'Walk through stunning emerald rice paddies and experience rural Balinese life.' },
                { name: 'Mount Batur Sunrise Trek', time: '2:00 AM', description: 'Challenging pre-dawn hike to watch sunrise over the volcanic crater lake.' },
                { name: 'Sekumpul Waterfall', time: '9:00 AM', description: 'Trek through jungle to reach one of Bali\'s most spectacular multi-tiered waterfalls.' }
            ],
            'adventure': [
                { name: 'White Water Rafting Ayung River', time: '8:00 AM', description: 'Navigate rapids through tropical jungle with stunning scenery and wildlife.' },
                { name: 'ATV Quad Biking', time: '10:00 AM', description: 'Off-road adventure through rice fields, villages, and jungle terrain.' },
                { name: 'Volcano and Hot Springs Tour', time: '6:00 AM', description: 'Active volcano exploration followed by relaxing natural hot springs.' }
            ],
            'shopping': [
                { name: 'Sukawati Art Market', time: '9:00 AM', description: 'Traditional market for authentic Balinese crafts, sarongs, and souvenirs.' },
                { name: 'Seminyak Boutiques', time: '2:00 PM', description: 'High-end shopping district with designer fashion and unique local brands.' },
                { name: 'Ubud Central Market', time: '8:00 AM', description: 'Bustling local market with spices, textiles, and handmade goods.' }
            ],
            'nightlife': [
                { name: 'Beach Club Hopping in Seminyak', time: '6:00 PM', description: 'Sunset cocktails and beachfront dining at trendy beach clubs.' },
                { name: 'Kuta Nightlife District', time: '9:00 PM', description: 'Vibrant bars, clubs, and live music venues in the party capital.' },
                { name: 'Traditional Dance Performance', time: '7:00 PM', description: 'Cultural evening with Balinese dance, music, and dinner.' }
            ],
            'relaxation': [
                { name: 'Traditional Balinese Spa', time: '10:00 AM', description: 'Full-body massage and treatment using traditional herbs and techniques.' },
                { name: 'Yoga Retreat in Ubud', time: '7:00 AM', description: 'Morning yoga session surrounded by rice fields and jungle sounds.' },
                { name: 'Beach Day at Nusa Dua', time: '9:00 AM', description: 'Pristine white sand beaches with calm waters perfect for swimming and relaxation.' }
            ]
        }
    },

    // Dubai Templates
    'dubai': {
        name: 'Dubai, UAE',
        description: 'City of Gold and Innovation',
        activities: {
            'art': [
                { name: 'Dubai Museum of the Future', time: '10:00 AM', description: 'Explore cutting-edge exhibitions showcasing technology, innovation, and future possibilities.' },
                { name: 'Alserkal Avenue Arts District', time: '2:00 PM', description: 'Contemporary art galleries, studios, and cultural spaces in converted warehouses.' },
                { name: 'Dubai Opera House', time: '7:00 PM', description: 'World-class performances in stunning architectural masterpiece.' }
            ],
            'history': [
                { name: 'Al Fahidi Historical District', time: '9:00 AM', description: 'Explore Dubai\'s oldest neighborhood with traditional wind-tower architecture.' },
                { name: 'Dubai Museum', time: '10:00 AM', description: 'Learn about Dubai\'s transformation from fishing village to global metropolis.' },
                { name: 'Heritage Village', time: '11:00 AM', description: 'Experience traditional Emirati culture, crafts, and lifestyle.' }
            ],
            'food': [
                { name: 'Emirati Cuisine Experience', time: '7:00 PM', description: 'Traditional Arabic dishes like machboos, luqaimat, and camel meat specialties.' },
                { name: 'Spice Souk Food Tour', time: '11:00 AM', description: 'Explore aromatic spices, dates, nuts, and Middle Eastern delicacies.' },
                { name: 'High-End Dining at Burj Al Arab', time: '8:00 PM', description: 'World-class fine dining experience in the iconic sail-shaped hotel.' }
            ],
            'nature': [
                { name: 'Dubai Desert Safari', time: '3:00 PM', description: 'Dune bashing, camel riding, and Bedouin camp dinner under the stars.' },
                { name: 'Dubai Miracle Garden', time: '9:00 AM', description: 'World\'s largest flower garden with stunning displays and artistic arrangements.' },
                { name: 'Ras Al Khor Wildlife Sanctuary', time: '10:00 AM', description: 'Observe flamingos and other birds in their natural wetland habitat.' }
            ],
            'adventure': [
                { name: 'Burj Khalifa Sky Deck', time: '6:00 PM', description: 'Visit the world\'s tallest building and enjoy panoramic city views from the 148th floor.' },
                { name: 'Skydiving over Palm Jumeirah', time: '8:00 AM', description: 'Tandem skydive with breathtaking aerial views of Dubai\'s coastline.' },
                { name: 'Indoor Skiing at Ski Dubai', time: '2:00 PM', description: 'Ski and snowboard in the desert at this massive indoor winter wonderland.' }
            ],
            'shopping': [
                { name: 'Dubai Mall', time: '10:00 AM', description: 'World\'s largest shopping mall with luxury brands, entertainment, and dining.' },
                { name: 'Gold Souk', time: '4:00 PM', description: 'Traditional market with hundreds of gold jewelry shops and precious stones.' },
                { name: 'Mall of the Emirates', time: '11:00 AM', description: 'Luxury shopping with international brands and unique Middle Eastern finds.' }
            ],
            'nightlife': [
                { name: 'Rooftop Bars with Skyline Views', time: '7:00 PM', description: 'Cocktails with spectacular views of Dubai Marina and Burj Khalifa.' },
                { name: 'Beach Clubs at JBR', time: '6:00 PM', description: 'Beachfront nightlife with international DJs and waterfront dining.' },
                { name: 'Traditional Shisha Lounge', time: '8:00 PM', description: 'Experience Middle Eastern nightlife culture with flavored tobacco and tea.' }
            ],
            'relaxation': [
                { name: 'Luxury Spa at Atlantis', time: '10:00 AM', description: 'World-class spa treatments with ocean views and Arabian-inspired therapies.' },
                { name: 'Private Beach Day', time: '9:00 AM', description: 'Exclusive beach access with pristine sand and crystal-clear waters.' },
                { name: 'Yacht Charter in Dubai Marina', time: '2:00 PM', description: 'Private yacht experience with skyline views and onboard dining.' }
            ]
        }
    },

    // Bangkok Templates
    'thailand': {
        name: 'Bangkok, Thailand',
        description: 'The City of Angels',
        activities: {
            'art': [
                { name: 'Grand Palace and Wat Phra Kaew', time: '8:00 AM', description: 'Explore the stunning royal palace complex and Temple of the Emerald Buddha.' },
                { name: 'Bangkok Art and Culture Centre', time: '2:00 PM', description: 'Contemporary art exhibitions and cultural performances in modern gallery space.' },
                { name: 'Jim Thompson House', time: '10:00 AM', description: 'Traditional Thai architecture museum showcasing silk merchant\'s art collection.' }
            ],
            'history': [
                { name: 'Wat Pho Temple', time: '9:00 AM', description: 'Home to the famous Reclining Buddha and birthplace of traditional Thai massage.' },
                { name: 'Wat Arun (Temple of Dawn)', time: '4:00 PM', description: 'Iconic riverside temple with intricate porcelain decorations, perfect for sunset.' },
                { name: 'Ancient City (Muang Boran)', time: '9:00 AM', description: 'Open-air museum with replicas of Thailand\'s most important historical sites.' }
            ],
            'food': [
                { name: 'Street Food Tour in Chinatown', time: '6:00 PM', description: 'Explore Bangkok\'s vibrant street food scene with local favorites and hidden gems.' },
                { name: 'Thai Cooking Class', time: '10:00 AM', description: 'Learn to prepare authentic dishes like pad thai, green curry, and som tam.' },
                { name: 'Floating Market Visit', time: '7:00 AM', description: 'Traditional market boat tour with fresh tropical fruits and local delicacies.' }
            ],
            'nature': [
                { name: 'Lumpini Park', time: '6:00 AM', description: 'Early morning exercise and wildlife watching in Bangkok\'s green lung.' },
                { name: 'Chao Phraya River Cruise', time: '5:00 PM', description: 'Scenic boat ride along the river of kings with temple views and sunset.' },
                { name: 'Chatuchak Weekend Market', time: '9:00 AM', description: 'Massive outdoor market with plants, crafts, and local produce.' }
            ],
            'adventure': [
                { name: 'Tuk-tuk City Tour', time: '2:00 PM', description: 'Navigate Bangkok\'s chaotic streets in iconic three-wheeled vehicles.' },
                { name: 'Muay Thai Boxing Match', time: '7:00 PM', description: 'Experience Thailand\'s national sport at Rajadamnern or Lumpinee Stadium.' },
                { name: 'Khlong Toei Market Adventure', time: '5:00 AM', description: 'Early morning exploration of Bangkok\'s largest fresh market.' }
            ],
            'shopping': [
                { name: 'MBK Center', time: '11:00 AM', description: 'Multi-level shopping mall with electronics, fashion, and local handicrafts.' },
                { name: 'Platinum Fashion Mall', time: '1:00 PM', description: 'Wholesale fashion center with trendy clothes at bargain prices.' },
                { name: 'Siam Paragon', time: '10:00 AM', description: 'Luxury shopping destination with international brands and gourmet food court.' }
            ],
            'nightlife': [
                { name: 'Khao San Road', time: '8:00 PM', description: 'Backpacker haven with bars, street food, and vibrant nightlife scene.' },
                { name: 'Rooftop Bars with City Views', time: '6:00 PM', description: 'Sky-high cocktails with panoramic views of Bangkok\'s skyline.' },
                { name: 'RCA Nightlife District', time: '10:00 PM', description: 'Club scene with local and international DJs and young crowd.' }
            ],
            'relaxation': [
                { name: 'Traditional Thai Massage', time: '2:00 PM', description: 'Authentic healing massage therapy at famous Wat Pho massage school.' },
                { name: 'Spa Day at Luxury Hotel', time: '10:00 AM', description: 'Five-star spa treatments with traditional Thai herbs and modern techniques.' },
                { name: 'Sunset River Dinner Cruise', time: '6:00 PM', description: 'Romantic dining experience on the Chao Phraya with live entertainment.' }
            ]
        }
    },

    // New York Templates
    'newyork': {
        name: 'New York, USA',
        description: 'The City That Never Sleeps',
        activities: {
            'art': [
                { name: 'Metropolitan Museum of Art', time: '9:00 AM', description: 'World-renowned museum with vast collections spanning 5,000 years of art.' },
                { name: 'Museum of Modern Art (MoMA)', time: '2:00 PM', description: 'Premier modern and contemporary art collection including Van Gogh and Picasso.' },
                { name: 'Guggenheim Museum', time: '11:00 AM', description: 'Iconic spiral-designed museum featuring impressive modern art collections.' }
            ],
            'history': [
                { name: 'Statue of Liberty & Ellis Island', time: '9:00 AM', description: 'Symbol of freedom and immigration museum showcasing American history.' },
                { name: '9/11 Memorial & Museum', time: '10:00 AM', description: 'Moving tribute to September 11th victims with powerful exhibits and memorial pools.' },
                { name: 'Brooklyn Bridge Walk', time: '8:00 AM', description: 'Historic bridge offering spectacular views of Manhattan skyline and harbor.' }
            ],
            'food': [
                { name: 'New York Pizza Tour', time: '12:00 PM', description: 'Taste authentic NY-style pizza at legendary pizzerias across different neighborhoods.' },
                { name: 'Food Truck Experience', time: '1:00 PM', description: 'Sample diverse street food from halal carts, hot dogs, and international vendors.' },
                { name: 'Fine Dining in Manhattan', time: '7:00 PM', description: 'World-class restaurants with celebrity chefs and innovative cuisine.' }
            ],
            'nature': [
                { name: 'Central Park', time: '10:00 AM', description: 'Urban oasis with lakes, meadows, and recreational activities in the heart of Manhattan.' },
                { name: 'High Line Park', time: '2:00 PM', description: 'Elevated park built on former railway tracks with gardens and city views.' },
                { name: 'Brooklyn Bridge Park', time: '4:00 PM', description: 'Waterfront park with stunning views of Manhattan skyline and recreation areas.' }
            ],
            'adventure': [
                { name: 'Empire State Building', time: '6:00 PM', description: 'Iconic Art Deco skyscraper with observation decks and panoramic city views.' },
                { name: 'Times Square Experience', time: '8:00 PM', description: 'Bright lights, Broadway theaters, and electric energy of the crossroads of the world.' },
                { name: 'Helicopter Tour', time: '11:00 AM', description: 'Aerial views of Manhattan landmarks including Central Park and Statue of Liberty.' }
            ],
            'shopping': [
                { name: 'Fifth Avenue Shopping', time: '10:00 AM', description: 'Luxury shopping street with flagship stores, Tiffany & Co., and Apple Store.' },
                { name: 'SoHo Boutiques', time: '1:00 PM', description: 'Trendy neighborhood with designer boutiques, art galleries, and unique finds.' },
                { name: 'Brooklyn Flea Markets', time: '11:00 AM', description: 'Vintage treasures, antiques, and handmade goods in hip Brooklyn markets.' }
            ],
            'nightlife': [
                { name: 'Broadway Show', time: '8:00 PM', description: 'World-class theater productions in the heart of Times Square theater district.' },
                { name: 'Rooftop Bars', time: '7:00 PM', description: 'Cocktails with stunning views of the city skyline from trendy rooftop venues.' },
                { name: 'Jazz Clubs in Village', time: '9:00 PM', description: 'Live music in intimate venues where jazz legends once performed.' }
            ],
            'relaxation': [
                { name: 'Day Spa in Manhattan', time: '10:00 AM', description: 'Urban retreat with luxury treatments and wellness services.' },
                { name: 'Staten Island Ferry Ride', time: '3:00 PM', description: 'Free scenic ferry ride with views of Statue of Liberty and Manhattan skyline.' },
                { name: 'Yoga in Central Park', time: '7:00 AM', description: 'Outdoor yoga classes in peaceful park settings with city backdrop.' }
            ]
        }
    },

    // London Templates
    'london': {
        name: 'London, UK',
        description: 'Where History Meets Modernity',
        activities: {
            'art': [
                { name: 'British Museum', time: '9:00 AM', description: 'World-famous museum with artifacts from ancient civilizations including Egyptian mummies.' },
                { name: 'Tate Modern', time: '2:00 PM', description: 'Contemporary art in former power station with views across Thames to St. Paul\'s.' },
                { name: 'National Gallery', time: '10:00 AM', description: 'Masterpieces by Van Gogh, Leonardo da Vinci, and other European masters.' }
            ],
            'history': [
                { name: 'Tower of London', time: '9:00 AM', description: 'Historic castle housing Crown Jewels with fascinating stories of royalty and imprisonment.' },
                { name: 'Westminster Abbey', time: '11:00 AM', description: 'Gothic abbey where monarchs are crowned and many famous figures are buried.' },
                { name: 'St. Paul\'s Cathedral', time: '10:00 AM', description: 'Iconic dome cathedral with breathtaking architecture and panoramic city views.' }
            ],
            'food': [
                { name: 'Traditional Fish and Chips', time: '12:00 PM', description: 'Classic British comfort food at authentic pubs and traditional chippies.' },
                { name: 'Borough Market Food Tour', time: '10:00 AM', description: 'Historic food market with artisanal products, international cuisine, and local specialties.' },
                { name: 'Afternoon Tea Experience', time: '3:00 PM', description: 'Traditional British tea service with scones, finger sandwiches, and pastries.' }
            ],
            'nature': [
                { name: 'Hyde Park', time: '9:00 AM', description: 'Royal park with Serpentine Lake, Speaker\'s Corner, and beautiful gardens.' },
                { name: 'Hampstead Heath', time: '10:00 AM', description: 'Wild parkland with swimming ponds and panoramic views over London.' },
                { name: 'Thames River Walk', time: '2:00 PM', description: 'Scenic riverside walk from Westminster to Tower Bridge with iconic landmarks.' }
            ],
            'adventure': [
                { name: 'London Eye', time: '4:00 PM', description: 'Giant observation wheel offering spectacular 360-degree views of the capital.' },
                { name: 'Jack the Ripper Walking Tour', time: '7:00 PM', description: 'Mysterious evening tour through Victorian London\'s dark history.' },
                { name: 'Thames River Cruise', time: '11:00 AM', description: 'Boat journey along the Thames with commentary on London\'s riverside landmarks.' }
            ],
            'shopping': [
                { name: 'Oxford Street Shopping', time: '10:00 AM', description: 'Major shopping street with department stores, flagship shops, and international brands.' },
                { name: 'Camden Market', time: '11:00 AM', description: 'Alternative market with vintage clothes, street food, and unique crafts.' },
                { name: 'Covent Garden', time: '2:00 PM', description: 'Historic market area with boutiques, street performers, and charming cobblestone streets.' }
            ],
            'nightlife': [
                { name: 'Traditional English Pub', time: '6:00 PM', description: 'Authentic pub experience with real ales, pub food, and local atmosphere.' },
                { name: 'West End Theater Show', time: '7:30 PM', description: 'World-class musical or play in London\'s famous theater district.' },
                { name: 'Shoreditch Nightlife', time: '9:00 PM', description: 'Trendy bars, clubs, and late-night venues in East London\'s hip district.' }
            ],
            'relaxation': [
                { name: 'Kew Gardens', time: '10:00 AM', description: 'Royal Botanic Gardens with exotic plants, treetop walkway, and peaceful greenhouse collections.' },
                { name: 'Luxury Spa in Mayfair', time: '2:00 PM', description: 'High-end spa treatments in elegant London setting with traditional and modern therapies.' },
                { name: 'Regent\'s Park Rose Garden', time: '11:00 AM', description: 'Beautiful formal gardens perfect for peaceful strolls and picnics.' }
            ]
        }
    },

    // Singapore Templates
    'singapore': {
        name: 'Singapore',
        description: 'The Lion City - Where East Meets West',
        activities: {
            'art': [
                { name: 'National Gallery Singapore', time: '10:00 AM', description: 'Southeast Asia\'s largest visual arts museum with contemporary and historical works.' },
                { name: 'ArtScience Museum', time: '2:00 PM', description: 'Innovative exhibitions blending art, science, and technology in lotus-shaped building.' },
                { name: 'Chinatown Heritage Centre', time: '11:00 AM', description: 'Cultural museum showcasing Chinese immigrant history and traditional crafts.' }
            ],
            'history': [
                { name: 'Raffles Hotel', time: '3:00 PM', description: 'Colonial-era luxury hotel where the Singapore Sling cocktail was invented.' },
                { name: 'Merlion Park', time: '9:00 AM', description: 'Iconic Singapore symbol with city skyline views and Marina Bay backdrop.' },
                { name: 'Fort Canning Park', time: '10:00 AM', description: 'Historic hilltop park with archaeological discoveries and colonial history.' }
            ],
            'food': [
                { name: 'Hawker Centre Food Tour', time: '12:00 PM', description: 'Sample Singapore\'s famous street food including Hainanese chicken rice and laksa.' },
                { name: 'Peranakan Cuisine Experience', time: '7:00 PM', description: 'Unique Straits Chinese fusion cuisine with spicy and flavorful dishes.' },
                { name: 'Michelin Street Food', time: '6:00 PM', description: 'Visit hawker stalls that have earned Michelin stars for exceptional local cuisine.' }
            ],
            'nature': [
                { name: 'Gardens by the Bay', time: '9:00 AM', description: 'Futuristic garden with Supertree Grove, Cloud Forest, and Flower Dome.' },
                { name: 'Singapore Botanic Gardens', time: '8:00 AM', description: 'UNESCO World Heritage site with tropical plants and National Orchid Garden.' },
                { name: 'MacRitchie Reservoir Treetop Walk', time: '7:00 AM', description: 'Elevated walkway through rainforest canopy with wildlife spotting opportunities.' }
            ],
            'adventure': [
                { name: 'Marina Bay Sands SkyPark', time: '6:00 PM', description: 'Infinity pool and observation deck with spectacular city and harbor views.' },
                { name: 'Universal Studios Singapore', time: '9:00 AM', description: 'Theme park with movie-themed rides and attractions on Sentosa Island.' },
                { name: 'Singapore Flyer', time: '7:00 PM', description: 'Giant observation wheel offering panoramic views of the city and Malaysia.' }
            ],
            'shopping': [
                { name: 'Orchard Road Shopping', time: '10:00 AM', description: 'Premier shopping street with luxury malls, international brands, and local boutiques.' },
                { name: 'Bugis Street Market', time: '2:00 PM', description: 'Vibrant street market with fashion, accessories, and local handicrafts.' },
                { name: 'Haji Lane Boutiques', time: '11:00 AM', description: 'Hip shopping street in Arab Quarter with independent designers and vintage stores.' }
            ],
            'nightlife': [
                { name: 'Clarke Quay Riverside Dining', time: '7:00 PM', description: 'Historic riverside district with restaurants, bars, and evening entertainment.' },
                { name: 'Marina Bay Light Show', time: '8:00 PM', description: 'Spectacular light and water show at Marina Bay Sands with music and projections.' },
                { name: 'Rooftop Bars with Skyline Views', time: '6:00 PM', description: 'Elevated cocktail venues with stunning views of Singapore\'s modern architecture.' }
            ],
            'relaxation': [
                { name: 'Sentosa Beach Day', time: '9:00 AM', description: 'Resort island with pristine beaches, luxury spas, and recreational activities.' },
                { name: 'Traditional Chinese Spa', time: '2:00 PM', description: 'Holistic treatments combining traditional Chinese medicine with modern techniques.' },
                { name: 'East Coast Park Cycling', time: '7:00 AM', description: 'Scenic coastal park perfect for cycling, jogging, and beachside relaxation.' }
            ]
        }
    }
};

// Helper functions for itinerary generation
const getRandomActivities = (activities, count = 3) => {
    const allActivities = Object.values(activities).flat();
    const shuffled = allActivities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const getActivitiesByInterest = (destination, interests) => {
    const destinationData = itineraryTemplates[destination];
    if (!destinationData) return [];
    
    let selectedActivities = [];
    interests.forEach(interest => {
        if (destinationData.activities[interest]) {
            selectedActivities = selectedActivities.concat(destinationData.activities[interest]);
        }
    });
    
    return selectedActivities.length > 0 ? selectedActivities : getRandomActivities(destinationData.activities);
};

const generateDayItinerary = (destination, interests, day = 1) => {
    const activities = getActivitiesByInterest(destination, interests);
    const dayActivities = activities.slice(0, 4); // 4 activities per day
    
    return {
        day: day,
        activities: dayActivities
    };
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        itineraryTemplates,
        getRandomActivities,
        getActivitiesByInterest,
        generateDayItinerary
    };
}