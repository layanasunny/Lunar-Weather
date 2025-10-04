  // Create enhanced galaxy background with stars and shooting stars
        function createGalaxyBackground() {
            const galaxyBg = document.getElementById('galaxyBg');
            
            // Create regular stars
            const starCount = 200;
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                
                // Random star size
                const sizes = ['small', 'medium', 'large'];
                const size = sizes[Math.floor(Math.random() * sizes.length)];
                star.classList.add('star', size);
                
                // Random position
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Random animation delay
                star.style.animationDelay = `${Math.random() * 10}s`;
                
                galaxyBg.appendChild(star);
            }
            
            // Create shooting stars
            function createShootingStar() {
                const shootingStar = document.createElement('div');
                shootingStar.classList.add('shooting-star');
                
                // Random starting position
                shootingStar.style.left = `${Math.random() * 20}%`;
                shootingStar.style.top = `${Math.random() * 20}%`;
                
                // Random animation delay
                shootingStar.style.animationDelay = `${Math.random() * 15}s`;
                
                galaxyBg.appendChild(shootingStar);
                
                // Remove shooting star after animation completes
                setTimeout(() => {
                    shootingStar.remove();
                }, 3000);
            }
            
            // Create shooting stars periodically
            setInterval(createShootingStar, 2000);
            
            // Create initial shooting stars
            for (let i = 0; i < 3; i++) {
                setTimeout(createShootingStar, i * 500);
            }
        }

        // Available locations with their weather data
        const availableLocations = {
            // Kerala Districts
            'thiruvananthapuram': { city: 'Thiruvananthapuram', country: 'IN', temp: 32, description: 'Partly Cloudy', icon: 'fa-cloud-sun', humidity: 78, windSpeed: 2.5, feelsLike: 36, pressure: 1008, airQuality: 45, uvIndex: 8.2, visibility: 8, sunIntensity: 75 },
            'kollam': { city: 'Kollam', country: 'IN', temp: 31, description: 'Light Rain', icon: 'fa-cloud-rain', humidity: 82, windSpeed: 3.1, feelsLike: 35, pressure: 1009, airQuality: 38, uvIndex: 7.8, visibility: 7, sunIntensity: 65 },
            'pathanamthitta': { city: 'Pathanamthitta', country: 'IN', temp: 29, description: 'Cloudy', icon: 'fa-cloud', humidity: 85, windSpeed: 2.2, feelsLike: 33, pressure: 1010, airQuality: 32, uvIndex: 6.5, visibility: 6, sunIntensity: 55 },
            'alappuzha': { city: 'Alappuzha', country: 'IN', temp: 30, description: 'Humid', icon: 'fa-smog', humidity: 88, windSpeed: 2.8, feelsLike: 35, pressure: 1007, airQuality: 42, uvIndex: 7.2, visibility: 9, sunIntensity: 68 },
            'kottayam': { city: 'Kottayam', country: 'IN', temp: 31, description: 'Partly Cloudy', icon: 'fa-cloud-sun', humidity: 80, windSpeed: 2.4, feelsLike: 35, pressure: 1009, airQuality: 36, uvIndex: 7.9, visibility: 8, sunIntensity: 72 },
            'idukki': { city: 'Idukki', country: 'IN', temp: 26, description: 'Misty', icon: 'fa-smog', humidity: 92, windSpeed: 1.8, feelsLike: 28, pressure: 1012, airQuality: 28, uvIndex: 5.8, visibility: 4, sunIntensity: 45 },
            'ernakulam': { city: 'Ernakulam', country: 'IN', temp: 33, description: 'Sunny', icon: 'fa-sun', humidity: 75, windSpeed: 3.5, feelsLike: 37, pressure: 1006, airQuality: 52, uvIndex: 8.8, visibility: 10, sunIntensity: 82 },
            'thrissur': { city: 'Thrissur', country: 'IN', temp: 32, description: 'Partly Cloudy', icon: 'fa-cloud-sun', humidity: 78, windSpeed: 3.2, feelsLike: 36, pressure: 1008, airQuality: 44, uvIndex: 8.1, visibility: 9, sunIntensity: 76 },
            'palakkad': { city: 'Palakkad', country: 'IN', temp: 34, description: 'Hot', icon: 'fa-sun', humidity: 68, windSpeed: 3.8, feelsLike: 38, pressure: 1005, airQuality: 58, uvIndex: 9.2, visibility: 12, sunIntensity: 88 },
            'malappuram': { city: 'Malappuram', country: 'IN', temp: 33, description: 'Sunny', icon: 'fa-sun', humidity: 72, windSpeed: 3.4, feelsLike: 37, pressure: 1007, airQuality: 49, uvIndex: 8.7, visibility: 11, sunIntensity: 84 },
            'kozhikode': { city: 'Kozhikode', country: 'IN', temp: 31, description: 'Humid', icon: 'fa-smog', humidity: 84, windSpeed: 3.0, feelsLike: 35, pressure: 1008, airQuality: 41, uvIndex: 7.5, visibility: 8, sunIntensity: 70 },
            'wayanad': { city: 'Wayanad', country: 'IN', temp: 25, description: 'Cool', icon: 'fa-cloud', humidity: 90, windSpeed: 2.0, feelsLike: 27, pressure: 1013, airQuality: 26, uvIndex: 5.2, visibility: 5, sunIntensity: 42 },
            'kannur': { city: 'Kannur', country: 'IN', temp: 32, description: 'Partly Cloudy', icon: 'fa-cloud-sun', humidity: 79, windSpeed: 3.3, feelsLike: 36, pressure: 1007, airQuality: 47, uvIndex: 8.4, visibility: 10, sunIntensity: 79 },
            'kasaragod': { city: 'Kasaragod', country: 'IN', temp: 33, description: 'Sunny', icon: 'fa-sun', humidity: 76, windSpeed: 3.6, feelsLike: 37, pressure: 1006, airQuality: 51, uvIndex: 8.9, visibility: 11, sunIntensity: 85 },

            // Indian States
            'kerala': { city: 'Kerala', country: 'IN', temp: 31, description: 'Tropical', icon: 'fa-cloud-sun', humidity: 80, windSpeed: 3.0, feelsLike: 35, pressure: 1008, airQuality: 42, uvIndex: 7.8, visibility: 8, sunIntensity: 72 },
            'tamil nadu': { city: 'Tamil Nadu', country: 'IN', temp: 35, description: 'Hot', icon: 'fa-sun', humidity: 65, windSpeed: 4.2, feelsLike: 39, pressure: 1005, airQuality: 68, uvIndex: 9.5, visibility: 12, sunIntensity: 90 },
            'karnataka': { city: 'Karnataka', country: 'IN', temp: 33, description: 'Warm', icon: 'fa-sun', humidity: 70, windSpeed: 3.8, feelsLike: 37, pressure: 1006, airQuality: 55, uvIndex: 8.7, visibility: 11, sunIntensity: 82 },
            'maharashtra': { city: 'Maharashtra', country: 'IN', temp: 34, description: 'Hot', icon: 'fa-sun', humidity: 62, windSpeed: 4.5, feelsLike: 38, pressure: 1004, airQuality: 72, uvIndex: 9.8, visibility: 13, sunIntensity: 92 },
            'delhi': { city: 'Delhi', country: 'IN', temp: 38, description: 'Smoggy', icon: 'fa-smog', humidity: 45, windSpeed: 2.8, feelsLike: 41, pressure: 1002, airQuality: 156, uvIndex: 8.9, visibility: 3, sunIntensity: 78 },
            'mumbai': { city: 'Mumbai', country: 'IN', temp: 32, description: 'Humid', icon: 'fa-smog', humidity: 85, windSpeed: 3.2, feelsLike: 38, pressure: 1008, airQuality: 120, uvIndex: 7.5, visibility: 5, sunIntensity: 65 },

            // American States
            'california': { city: 'California', country: 'US', temp: 28, description: 'Sunny', icon: 'fa-sun', humidity: 45, windSpeed: 5.2, feelsLike: 29, pressure: 1015, airQuality: 35, uvIndex: 8.2, visibility: 15, sunIntensity: 88 },
            'texas': { city: 'Texas', country: 'US', temp: 32, description: 'Hot', icon: 'fa-sun', humidity: 55, windSpeed: 4.8, feelsLike: 35, pressure: 1012, airQuality: 42, uvIndex: 9.1, visibility: 12, sunIntensity: 92 },
            'florida': { city: 'Florida', country: 'US', temp: 30, description: 'Humid', icon: 'fa-cloud-sun', humidity: 75, windSpeed: 3.5, feelsLike: 35, pressure: 1013, airQuality: 38, uvIndex: 7.8, visibility: 10, sunIntensity: 80 },
            'new york': { city: 'New York', country: 'US', temp: 24, description: 'Clear Sky', icon: 'fa-sun', humidity: 65, windSpeed: 5.2, feelsLike: 26, pressure: 1015, airQuality: 42, uvIndex: 5.2, visibility: 10, sunIntensity: 78 },
            'washington': { city: 'Washington', country: 'US', temp: 18, description: 'Rainy', icon: 'fa-cloud-rain', humidity: 80, windSpeed: 4.2, feelsLike: 16, pressure: 1008, airQuality: 25, uvIndex: 3.1, visibility: 6, sunIntensity: 35 },

            // Major International Cities
            'london': { city: 'London', country: 'UK', temp: 18, description: 'Partly Cloudy', icon: 'fa-cloud-sun', humidity: 72, windSpeed: 3.8, feelsLike: 17, pressure: 1008, airQuality: 28, uvIndex: 3.1, visibility: 8, sunIntensity: 45 },
            'tokyo': { city: 'Tokyo', country: 'JP', temp: 28, description: 'Light Rain', icon: 'fa-cloud-rain', humidity: 80, windSpeed: 2.5, feelsLike: 30, pressure: 1012, airQuality: 55, uvIndex: 6.8, visibility: 6, sunIntensity: 35 },
            'paris': { city: 'Paris', country: 'FR', temp: 20, description: 'Cloudy', icon: 'fa-cloud', humidity: 68, windSpeed: 3.2, feelsLike: 19, pressure: 1013, airQuality: 35, uvIndex: 4.1, visibility: 9, sunIntensity: 52 },
            'sydney': { city: 'Sydney', country: 'AU', temp: 22, description: 'Sunny', icon: 'fa-sun', humidity: 60, windSpeed: 4.2, feelsLike: 23, pressure: 1018, airQuality: 20, uvIndex: 8.5, visibility: 12, sunIntensity: 85 },
            'dubai': { city: 'Dubai', country: 'AE', temp: 35, description: 'Sunny', icon: 'fa-sun', humidity: 45, windSpeed: 2.1, feelsLike: 37, pressure: 1009, airQuality: 65, uvIndex: 9.8, visibility: 15, sunIntensity: 95 },
            'toronto': { city: 'Toronto', country: 'CA', temp: 20, description: 'Cloudy', icon: 'fa-cloud', humidity: 65, windSpeed: 4.5, feelsLike: 18, pressure: 1014, airQuality: 25, uvIndex: 4.5, visibility: 11, sunIntensity: 48 }
        };

        // Function to get weather icon
        function getWeatherIcon(icon) {
            return icon;
        }

        // Function to get air quality status
        function getAirQualityStatus(aqi) {
            if (aqi <= 50) return { level: 'Good', color: '#4caf50' };
            if (aqi <= 100) return { level: 'Moderate', color: '#ff9800' };
            if (aqi <= 150) return { level: 'Unhealthy for Sensitive Groups', color: '#ff5722' };
            if (aqi <= 200) return { level: 'Unhealthy', color: '#f44336' };
            if (aqi <= 300) return { level: 'Very Unhealthy', color: '#9c27b0' };
            return { level: 'Hazardous', color: '#795548' };
        }

        // Function to get UV index status
        function getUVIndexStatus(uv) {
            if (uv <= 2) return { level: 'Low', color: '#4caf50' };
            if (uv <= 5) return { level: 'Moderate', color: '#ffeb3b' };
            if (uv <= 7) return { level: 'High', color: '#ff9800' };
            if (uv <= 10) return { level: 'Very High', color: '#f44336' };
            return { level: 'Extreme', color: '#9c27b0' };
        }

        // Function to display weather data
        function displayWeatherData(data) {
            document.getElementById('cityName').textContent = data.city;
            document.getElementById('country').textContent = data.country;
            document.getElementById('temperature').textContent = `${data.temp}°C`;
            document.getElementById('weatherDescription').textContent = data.description;
            document.getElementById('weatherIcon').className = `fas ${data.icon}`;
            document.getElementById('humidity').textContent = `${data.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.windSpeed} m/s`;
            document.getElementById('feelsLike').textContent = `${data.feelsLike}°C`;
            document.getElementById('pressure').textContent = `${data.pressure} hPa`;
            
            // NASA Data Section
            document.getElementById('airQuality').textContent = data.airQuality;
            document.getElementById('uvIndex').textContent = data.uvIndex;
            document.getElementById('visibility').textContent = `${data.visibility} km`;
            document.getElementById('sunIntensity').textContent = `${data.sunIntensity}%`;
            
            // Update status labels with colors
            const airQualityStatus = getAirQualityStatus(data.airQuality);
            document.getElementById('airQuality').nextElementSibling.textContent = airQualityStatus.level;
            document.getElementById('airQuality').nextElementSibling.style.color = airQualityStatus.color;
            
            const uvStatus = getUVIndexStatus(parseFloat(data.uvIndex));
            document.getElementById('uvIndex').nextElementSibling.textContent = uvStatus.level;
            document.getElementById('uvIndex').nextElementSibling.style.color = uvStatus.color;
            
            weatherCard.style.display = 'block';
        }

        // Function to show suggestions
        function showSuggestions(query) {
            const suggestions = document.getElementById('suggestions');
            suggestions.innerHTML = '';
            
            if (query.length < 2) {
                suggestions.style.display = 'none';
                return;
            }
            
            const filteredLocations = Object.keys(availableLocations)
                .filter(key => {
                    const location = availableLocations[key];
                    return location.city.toLowerCase().includes(query.toLowerCase()) || 
                           key.toLowerCase().includes(query.toLowerCase());
                })
                .slice(0, 8); // Limit to 8 suggestions
            
            if (filteredLocations.length > 0) {
                filteredLocations.forEach(key => {
                    const location = availableLocations[key];
                    const suggestionItem = document.createElement('div');
                    suggestionItem.className = 'suggestion-item';
                    suggestionItem.textContent = `${location.city}, ${location.country}`;
                    suggestionItem.addEventListener('click', () => {
                        document.getElementById('cityInput').value = location.city;
                        suggestions.style.display = 'none';
                        searchWeather(location.city);
                    });
                    suggestions.appendChild(suggestionItem);
                });
                suggestions.style.display = 'block';
            } else {
                suggestions.style.display = 'none';
            }
        }

        // Function to search weather
        function searchWeather(query) {
            const normalizedQuery = query.toLowerCase().trim();
            const loading = document.querySelector('.loading');
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            const weatherCard = document.getElementById('weatherCard');
            
            loading.style.display = 'block';
            weatherCard.style.display = 'none';
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';
            
            // Simulate API call delay
            setTimeout(() => {
                loading.style.display = 'none';
                
                // Try exact match first
                if (availableLocations[normalizedQuery]) {
                    displayWeatherData(availableLocations[normalizedQuery]);
                    successMessage.style.display = 'block';
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 2000);
                    return;
                }
                
                // Try partial match
                const matchedKey = Object.keys(availableLocations).find(key => 
                    availableLocations[key].city.toLowerCase().includes(normalizedQuery) ||
                    key.toLowerCase().includes(normalizedQuery)
                );
                
                if (matchedKey) {
                    displayWeatherData(availableLocations[matchedKey]);
                    successMessage.style.display = 'block';
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 2000);
                } else {
                    errorMessage.style.display = 'block';
                }
            }, 1000);
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            const cityInput = document.getElementById('cityInput');
            const searchBtn = document.getElementById('searchBtn');
            const suggestions = document.getElementById('suggestions');
            
            // Create enhanced galaxy background
            createGalaxyBackground();
            
            // Event listener for search input
            cityInput.addEventListener('input', function() {
                showSuggestions(this.value);
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (!cityInput.contains(e.target) && !suggestions.contains(e.target)) {
                    suggestions.style.display = 'none';
                }
            });
            
            // Event listener for search button
            searchBtn.addEventListener('click', function() {
                const city = cityInput.value;
                if (city.trim() === '') return;
                searchWeather(city);
            });

            // Event listener for Enter key
            cityInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchBtn.click();
                }
            });

            // Display default city on load
            displayWeatherData(availableLocations['new york']);
        });