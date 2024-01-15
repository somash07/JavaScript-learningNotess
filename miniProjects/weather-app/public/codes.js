const weatherData = [
    { code: '00', description: 'Thunderstorm with Light Rain', icon: '11d' },
    { code: '201', description: 'Thunderstorm with Rain', icon: '11d' },
    { code: '202', description: 'Thunderstorm with Heavy Rain', icon: '11d' },
    { code: '210', description: 'Light Thunderstorm', icon: '11d' },
    { code: '211', description: 'Thunderstorm', icon: '11d' },
    { code: '212', description: 'Heavy Thunderstorm', icon: '11d' },
    { code: '221', description: 'Ragged Thunderstorm', icon: '11d' },
    { code: '230', description: 'Thunderstorm with Light Drizzle', icon: '11d' },
    { code: '231', description: 'Thunderstorm with Drizzle', icon: '11d' },
    { code: '232', description: 'Thunderstorm with Heavy Drizzle', icon: '11d' },
    

    { code: '300', description: 'Light intensity drizzle', icon: '09d' },
    { code: '301', description: 'Drizzle', icon: '09d' },
    { code: '302', description: 'Heavy intensity drizzle', icon: '09d' },
    { code: '310', description: 'Light intensity drizzle rain', icon: '09d' },
    { code: '311', description: 'Drizzle rain', icon: '09d' },
    { code: '312', description: 'Heavy intensity drizzle rain', icon: '09d' },
    { code: '313', description: 'Shower rain and drizzle', icon: '09d' },
    { code: '314', description: 'Heavy shower rain and drizzle', icon: '09d' },
    { code: '321', description: 'Shower drizzle', icon: '09d' },


    { code: '500', description: 'Light rain', icon: '10d' },
    { code: '501', description: 'Moderate rain', icon: '10d' },
    { code: '502', description: 'Heavy intensity rain', icon: '10d' },
    { code: '503', description: 'Very heavy rain', icon: '10d' },
    { code: '504', description: 'Extreme rain', icon: '10d' },
    { code: '511', description: 'Freezing rain', icon: '13d' },
    { code: '520', description: 'Light intensity shower rain', icon: '09d' },
    { code: '521', description: 'Shower rain', icon: '09d' },
    { code: '522', description: 'Heavy intensity shower rain', icon: '09d' },
    { code: '531', description: 'Ragged shower rain', icon: '09d' },


    { code: '600', description: 'Light snow', icon: '13d' },
    { code: '601', description: 'Snow', icon: '13d' },
    { code: '602', description: 'Heavy snow', icon: '13d' },
    { code: '611', description: 'Sleet', icon: '13d' },
    { code: '612', description: 'Light shower sleet', icon: '13d' },
    { code: '613', description: 'Shower sleet', icon: '13d' },
    { code: '615', description: 'Light rain and snow', icon: '13d' },
    { code: '616', description: 'Rain and snow', icon: '13d' },
    { code: '620', description: 'Light shower snow', icon: '13d' },
    { code: '621', description: 'Shower snow', icon: '13d' },
    { code: '622', description: 'Heavy shower snow', icon: '13d' },


    { code: '701', description: 'Mist', icon: '50d' },
    { code: '711', description: 'Smoke', icon: '50d' },
    { code: '721', description: 'Haze', icon: '50d' },
    { code: '731', description: 'Sand/dust whirls', icon: '50d' },
    { code: '741', description: 'Fog', icon: '50d' },
    { code: '751', description: 'Sand', icon: '50d' },
    { code: '761', description: 'Dust', icon: '50d' },
    { code: '762', description: 'Volcanic ash', icon: '50d' },
    { code: '771', description: 'Squalls', icon: '50d' },
    { code: '781', description: 'Tornado', icon: '50d' },

    
    { code: '801', description: 'Few clouds: 11-25%', icon: '02d' },
    { code: '801', description: 'Few clouds: 11-25%', icon: '02n' },
    { code: '802', description: 'Scattered clouds: 25-50%', icon: '03d' },
    { code: '802', description: 'Scattered clouds: 25-50%', icon: '03n' },
    { code: '803', description: 'Broken clouds: 51-84%', icon: '04d' },
    { code: '803', description: 'Broken clouds: 51-84%', icon: '04n' },
    { code: '804', description: 'Overcast clouds: 85-100%', icon: '04d' },
    { code: '804', description: 'Overcast clouds: 85-100%', icon: '04n' },

    { code: '800', description: 'Clear sky', icon: '01d' },
    { code: '800', description: 'Clear sky', icon: '01n' }
];
