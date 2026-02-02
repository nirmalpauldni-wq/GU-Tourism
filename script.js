// Firebase SDK - load in HTML file with <script> tags
// This JavaScript file should contain only JS code, not HTML

// Firebase will be initialized later after SDKs are loaded

// Data
        // Data
        const destinations = [
            {
                name: "Kamakhya Temple (Nilachal Hill)",
                tagline: "The Sacred Heart of Assam",
                story: "Kamakhya Temple is not just a place of worship. It is one of the most powerful shakti Peethas in India",
                image: "https://thumbs.dreamstime.com/b/view-kamakhya-temple-one-most-revered-shrines-shakti-nilachal-hill-guwahati-indian-state-assam-india-111764364.jpg?w=992",
                color: "linear-gradient(135deg, #059669, #065f46)",
                highlights: ["Shakti Peetha", "Tantric Worship", "Festivals", "Pilgrimage"]
            },
            {
                name: "Umananda Island",
                tagline: "An island where culture breathes",
                story: "Umananda Temple, located on Peacock Island in the Brahmaputra, offers a rare island-based spiritual experience. Our platform enables safe ferry access, guided visits, and structured time slots for a peaceful pilgrimage.",
                image: "https://www.shutterstock.com/shutterstock/photos/1479054077/display_1500/stock-photo-umananda-island-or-peacock-island-on-brahmaputra-river-during-sunset-1479054077.jpg",
                color: "linear-gradient(135deg, #2563eb, #1e40af)",
                highlights: ["Island Temple", "Brahmaputra Views", "Ferry Access", "Spiritual Retreat"]
            },
            {
                name: "National Science Centre",
                tagline: "Where curiosity meets discovery",
                story: "Interactive exhibits and hands-on experiences make science come alive for visitors of all ages.",
                image: "https://www.rscguwahati.gov.in/uploads/slider/1746610753.jpg",
                color: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                highlights: ["Interactive Exhibits", "Planetarium", "Educational", "Family-Friendly"]
            },
            {
                name: "Kalakhastra",
                tagline: "Cultural treasure of Assam",
                story: "A sprawling cultural complex celebrating Assamese art, music, dance, and heritage through museums and performances.",
                image: "https://s7ap1.scene7.com/is/image/incredibleindia/srimanta-sankardeva-kalakshetra-guwahati-dispur-assam-1-attr-hero?qlt=82&ts=1746758506997",
                color: "linear-gradient(135deg, #ea580c, #c2410c)",
                highlights: ["Cultural Hub", "Art & Craft", "Performing Arts", "Museums"]
            },
            {
                name: "Assam State Museum",
                tagline: "Gateway to Assam's past",
                story: "Discover ancient artifacts, tribal art, and historical treasures that tell the story of Assam's rich heritage.",
                image: "https://s7ap1.scene7.com/is/image/incredibleindia/assam-state-meseum-dispur-assam-hero-2?qlt=82&ts=1742172821697",
                color: "linear-gradient(135deg, #10b981, #047857)",
                highlights: ["Historical Artifacts", "Tribal Art", "Manuscripts", "Sculptures"]
            },
            {
                name: "Deepor Beel",
                tagline: "Nature's sanctuary",
                story: "A Ramsar wetland site teeming with migratory birds, aquatic life, and lush biodiversity.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRargbLnQTSSEtWnQMJdow3loc22sNCVyssxA&s",
                color: "linear-gradient(135deg, #db2777, #be185d)",
                highlights: ["Wetland Ecosystem", "Bird Watching", "Conservation", "Nature Reserve"]
            }
        ];

        const foods = [
            { name: "Khar", story: "An alkaline dish that cleanses both body and soul", color: "linear-gradient(135deg, #d97706, #b45309)" },
            { name: "Masor Tenga", story: "Sour fish curry that tells tales of the Brahmaputra", color: "linear-gradient(135deg, #ea580c, #dc2626)" },
            { name: "Pitha", story: "Rice cakes that carry the warmth of Assamese homes", color: "linear-gradient(135deg, #059669, #0d9488)" },
            { name: "Duck Curry", story: "A tribal delicacy passed down through generations", color: "linear-gradient(135deg, #7c3aed, #ec4899)" }
        ];

        const tribes = [
            { name: "Bodo", culture: "Masters of silk weaving and vibrant festivals" },
            { name: "Mising", culture: "River children who build homes on stilts" },
            { name: "Karbi", culture: "Hill dwellers with rich musical traditions" },
            { name: "Rabha", culture: "Guardians of ancient dance forms" }
        ];

        const heritage = [
            { year: "1228 AD", event: "Ahom Dynasty Begins", detail: "600 years of unbroken rule starts" },
            { year: "15th Century", event: "Satra Culture", detail: "Vaishnavite monasteries flourish" },
            { year: "Medieval Era", event: "Silk & Weaving", detail: "Muga silk becomes legendary" },
            { year: "Today", event: "Bihu Festival", detail: "Spring celebrations unite all" }
        ];

        // Micro-Itinerary Data
        const microItineraries = [
            {
                id: 1,
                name: "Spiritual Trail",
                duration: "2-3 hours",
                stops: ["Kamakhya Temple", "Umananda Island"],
                description: "Sacred temples and spiritual experiences",
                basePrice: 1500
            },
            {
                id: 2,
                name: "Heritage Explorer",
                duration: "3-4 hours",
                stops: ["Assam State Museum", "Kalakhastra", "Local Craft Demo"],
                description: "Dive into Assam's rich cultural heritage",
                basePrice: 1800
            },
            {
                id: 3,
                name: "Nature & Science",
                duration: "2.5-3 hours",
                stops: ["Deepor Beel", "Science Centre"],
                description: "Wildlife and interactive learning",
                basePrice: 1400
            },
            {
                id: 4,
                name: "Foodie Adventure",
                duration: "2-3 hours",
                stops: ["Tea Estate Visit", "Local Food Market", "Assamese Thali"],
                description: "Taste authentic Assamese flavors",
                basePrice: 1600
            }
        ];

        const vendors = [
            {
                id: 1,
                name: "Rajesh Kumar",
                rating: 4.9,
                reviews: 127,
                bio: "10+ years guiding tourists through Guwahati's spiritual sites",
                languages: ["English", "Hindi", "Assamese"],
                price: 500,
                specialties: ["Spiritual Trail", "Heritage Explorer"]
            },
            {
                id: 2,
                name: "Anita Sharma",
                rating: 4.8,
                reviews: 93,
                bio: "Cultural expert with deep knowledge of Assamese traditions",
                languages: ["English", "Assamese", "Bengali"],
                price: 450,
                specialties: ["Heritage Explorer", "Foodie Adventure"]
            },
            {
                id: 3,
                name: "Bikash Deka",
                rating: 4.7,
                reviews: 84,
                bio: "Nature enthusiast and wildlife photography guide",
                languages: ["English", "Hindi", "Assamese"],
                price: 400,
                specialties: ["Nature & Science"]
            }
        ];

        const localPhrases = [
            { assamese: "নমস্কাৰ (Nomoskar)", english: "Hello/Greetings" },
            { assamese: "ধন্যবাদ (Dhanyabad)", english: "Thank you" },
            { assamese: "অসমীয়া (Oxomiya)", english: "Assamese language" },
            { assamese: "কিমান? (Kiman?)", english: "How much?" },
            { assamese: "সুন্দৰ (Xundor)", english: "Beautiful" }
        ];

        let isVoicePlaying = false;
        let selectedItinerary = null;
        let selectedVendor = null;
        let bookingStep = 1;

        // Render destinations
        function renderDestinations() {
            const grid = document.getElementById('destinationsGrid');
            grid.innerHTML = destinations.map((dest, idx) => `
                <div class="destination-card" onclick="showDestination(${idx})">
                    <div class="destination-image" style="background-image: url('${dest.image}'); background-size: cover; background-position: center;">
                        <div class="destination-overlay"></div>
                        <div class="destination-header">
                            <h3>${dest.name}</h3>
                            <p class="destination-tagline">${dest.tagline}</p>
                        </div>
                    </div>
                    <div class="destination-content">
                        <p class="destination-story">${dest.story}</p>
                        <div class="highlights">
                            ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderHeritage() {
            const container = document.getElementById('timelineContainer');
            container.innerHTML = heritage.map(item => `
                <div class="timeline-item">
                    <div class="timeline-year">${item.year}</div>
                    <h3 class="timeline-event">${item.event}</h3>
                    <p style="font-size: 0.875rem; opacity: 0.7;">${item.detail}</p>
                </div>
            `).join('');
        }

        function renderFood() {
            const grid = document.getElementById('foodGrid');
            grid.innerHTML = foods.map(food => `
                <div class="food-card" style="background: ${food.color};">
                    <div>
                        <h3>${food.name}</h3>
                        <p>${food.story}</p>
                    </div>
                </div>
            `).join('');
        }

        function renderTribes() {
            const grid = document.getElementById('tribesGrid');
            grid.innerHTML = tribes.map(tribe => `
                <div class="tribe-card">
                    <svg class="tribe-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    <h3>${tribe.name}</h3>
                    <p>${tribe.culture}</p>
                </div>
            `).join('');
        }

        function showDestination(idx) {
            const dest = destinations[idx];
            const modal = document.getElementById('destinationModal');
            const content = document.getElementById('destinationModalContent');
            
            content.innerHTML = `
                <h3 style="font-size: 2rem; margin-bottom: 0.5rem;">${dest.name}</h3>
                <p style="color: #10b981; font-style: italic; margin-bottom: 2rem;">${dest.tagline}</p>
                <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 2rem;">
                    <div style="height: 16rem; border-radius: 1rem; background-image: url('${dest.image}'); background-size: cover; background-position: center;">
                    </div>
                    <div>
                        <p style="line-height: 1.6; margin-bottom: 1.5rem;">${dest.story}</p>
                        <h4 style="font-weight: 600; margin-bottom: 1rem;">Highlights:</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            ${dest.highlights.map(h => `
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="color: #10b981;">✓</span>
                                    <span>${h}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button class="btn-primary" onclick="closeDestinationModal(); openMicroItinerary();">Book Micro-Tour</button>
                    <button class="btn-secondary" onclick="closeDestinationModal();" style="color: #10b981; border-color: #10b981;">Close</button>
                </div>
            `;
            
            modal.classList.add('active');
        }

        function closeDestinationModal() {
            document.getElementById('destinationModal').classList.remove('active');
        }

        // Micro-Itinerary Functions
        function openMicroItinerary() {
            bookingStep = 1;
            selectedItinerary = null;
            selectedVendor = null;
            document.getElementById('microItineraryModal').classList.add('active');
            renderMicroItineraryStep();
        }

        function closeMicroItinerary() {
            document.getElementById('microItineraryModal').classList.remove('active');
        }

        function renderMicroItineraryStep() {
            const content = document.getElementById('microItineraryContent');
            
            if (bookingStep === 1) {
                content.innerHTML = `
                    <div class="progress-steps">
                        <div class="progress-step">
                            <div class="step-circle active">1</div>
                            <span class="step-label active">Choose Tour</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">2</div>
                            <span class="step-label">Select Guide</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">3</div>
                            <span class="step-label">Book</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">4</div>
                            <span class="step-label">Confirm</span>
                        </div>
                    </div>
                    
                    <h2 style="font-family: serif; margin-bottom: 1rem;">Choose Your Micro-Itinerary</h2>
                    <p style="opacity: 0.7; margin-bottom: 2rem;">Select a 2-4 hour curated experience</p>
                    
                    <div class="itinerary-grid">
                        ${microItineraries.map(itinerary => `
                            <div class="itinerary-option" onclick="selectItinerary(${itinerary.id})">
                                <span class="itinerary-duration">${itinerary.duration}</span>
                                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${itinerary.name}</h3>
                                <p style="font-size: 0.875rem; opacity: 0.7; margin-bottom: 1rem;">${itinerary.description}</p>
                                <div class="itinerary-stops">
                                    ${itinerary.stops.map(stop => `
                                        <div class="itinerary-stop">
                                            <span>📍</span>
                                            <span>${stop}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); font-weight: 600; color: #10b981;">
                                    From ₹${itinerary.basePrice}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (bookingStep === 2) {
                const itinerary = microItineraries.find(i => i.id === selectedItinerary);
                const availableVendors = vendors.filter(v => 
                    v.specialties.includes(itinerary.name)
                );
                
                content.innerHTML = `
                    <div class="progress-steps">
                        <div class="progress-step">
                            <div class="step-circle completed">✓</div>
                            <span class="step-label">Choose Tour</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle active">2</div>
                            <span class="step-label active">Select Guide</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">3</div>
                            <span class="step-label">Book</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">4</div>
                            <span class="step-label">Confirm</span>
                        </div>
                    </div>
                    
                    <h2 style="font-family: serif; margin-bottom: 1rem;">Select Your Local Guide</h2>
                    <p style="opacity: 0.7; margin-bottom: 2rem;">Choose a verified guide for ${itinerary.name}</p>
                    
                    <div class="vendor-grid">
                        ${availableVendors.map(vendor => `
                            <div class="vendor-card" onclick="selectVendor(${vendor.id})">
                                <div class="vendor-header">
                                    <div>
                                        <h3 style="font-size: 1.125rem; margin-bottom: 0.25rem;">${vendor.name}</h3>
                                        <div class="vendor-rating">
                                            <span>⭐</span>
                                            <span>${vendor.rating} (${vendor.reviews} reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="vendor-price">₹${vendor.price}</div>
                                <p class="vendor-bio">${vendor.bio}</p>
                                <div class="vendor-languages">
                                    ${vendor.languages.map(lang => `
                                        <span class="language-tag">${lang}</span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <button class="btn-secondary" style="width: 100%; padding: 0.75rem; margin-top: 1rem; color: #10b981; border-color: #10b981;" onclick="bookingStep = 1; renderMicroItineraryStep();">← Back to Itineraries</button>
                `;
            } else if (bookingStep === 3) {
                const itinerary = microItineraries.find(i => i.id === selectedItinerary);
                const vendor = vendors.find(v => v.id === selectedVendor);
                const totalPrice = itinerary.basePrice + vendor.price;
                
                // Show translation popup
                showRandomTranslation();
                
                content.innerHTML = `
                    <div class="progress-steps">
                        <div class="progress-step">
                            <div class="step-circle completed">✓</div>
                            <span class="step-label">Choose Tour</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle completed">✓</div>
                            <span class="step-label">Select Guide</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle active">3</div>
                            <span class="step-label active">Book</span>
                        </div>
                        <div class="progress-step">
                            <div class="step-circle">4</div>
                            <span class="step-label">Confirm</span>
                        </div>
                    </div>
                    
                    <h2 style="font-family: serif; margin-bottom: 2rem;">Complete Your Booking</h2>
                    
                    <div class="booking-summary">
                        <h3 style="margin-bottom: 1rem;">Booking Summary</h3>
                        <div class="summary-row">
                            <span>Tour:</span>
                            <span>${itinerary.name}</span>
                        </div>
                        <div class="summary-row">
                            <span>Duration:</span>
                            <span>${itinerary.duration}</span>
                        </div>
                        <div class="summary-row">
                            <span>Guide:</span>
                            <span>${vendor.name}</span>
                        </div>
                        <div class="summary-row">
                            <span>Base Price:</span>
                            <span>₹${itinerary.basePrice}</span>
                        </div>
                        <div class="summary-row">
                            <span>Guide Fee:</span>
                            <span>₹${vendor.price}</span>
                        </div>
                        <div class="summary-row">
                            <span>Total:</span>
                            <span>₹${totalPrice}</span>
                        </div>
                    </div>
                    
                   <form onsubmit="confirmBooking(event)">

    <div class="form-group">
        <label>Full Name</label>
        <input type="text" name="name" required>
    </div>

    <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" required>
    </div>

    <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" required>
    </div>

    <div class="form-group">
        <label>Preferred Date</label>
        <input type="date" name="date" required>
    </div>

    <div class="form-group">
        <label>Preferred Time</label>
        <select name="time" required>
            <option value="">Select time</option>
            <option value="morning">Morning (8:00 AM - 11:00 AM)</option>
            <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
            <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
        </select>
    </div>

    <div class="form-group">
        <label>Number of Guests</label>
        <input type="number" name="guests" min="1" max="10" required>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <button type="submit" class="btn-primary" style="flex: 1; padding: 1rem;">
            Confirm Booking (₹${totalPrice})
        </button>

        <button type="button" class="btn-secondary"
            style="color: #10b981; border-color: #10b981; padding: 1rem;"
            onclick="bookingStep = 2; renderMicroItineraryStep();">
            ← Back
        </button>
    </div>

</form>

                `;
            } else if (bookingStep === 4) {
                const itinerary = microItineraries.find(i => i.id === selectedItinerary);
                const vendor = vendors.find(v => v.id === selectedVendor);
                const bookingId = 'GWT' + Date.now().toString().slice(-8);
                
                content.innerHTML = `
                    <div class="confirmation-success">
                        <svg class="success-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h2 style="font-family: serif; font-size: 2rem; margin-bottom: 1rem; color: #10b981;">Booking Confirmed!</h2>
                        <p style="font-size: 1.125rem; opacity: 0.9;">Your micro-tour has been successfully booked</p>
                        
                        <div class="confirmation-details">
                            <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">Booking Details</h3>
                            <div class="summary-row">
                                <span>Booking ID:</span>
                                <span style="font-family: monospace; color: #10b981;">${bookingId}</span>
                            </div>
                            <div class="summary-row">
                                <span>Tour:</span>
                                <span>${itinerary.name}</span>
                            </div>
                            <div class="summary-row">
                                <span>Guide:</span>
                                <span>${vendor.name}</span>
                            </div>
                            <div class="summary-row">
                                <span>Meeting Point:</span>
                                <span>${itinerary.stops[0]}</span>
                            </div>
                            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 0.5rem; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <p style="font-size: 0.875rem; margin: 0;">
                                    ✉️ Confirmation email sent with complete itinerary, meeting instructions, and local language guide
                                </p>
                            </div>
                        </div>
                        
                        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                            <button class="btn-primary" onclick="closeMicroItinerary(); scrollToSection('destinations');" style="flex: 1;">Explore More</button>
                            <button class="btn-secondary" onclick="openMicroItinerary();" style="color: #10b981; border-color: #10b981;">Book Another Tour</button>
                        </div>
                    </div>
                `;
            }
        }

        function selectItinerary(id) {
            selectedItinerary = id;
            bookingStep = 2;
            renderMicroItineraryStep();
        }

        function selectVendor(id) {
            selectedVendor = id;
            bookingStep = 3;
            renderMicroItineraryStep();
        }
async function confirmBooking(event) {
    event.preventDefault();

    const user = getCurrentFirebaseUser();

    if (!user) {
        alert("Please login first to book.");
        return;
    }

    const form = event.target;
    const data = new FormData(form);

    const itinerary = microItineraries.find(i => i.id === selectedItinerary);
    const vendor = vendors.find(v => v.id === selectedVendor);

    const bookingData = {
        userId: user.uid,
        userEmail: user.email,

        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),

        itinerary: itinerary.name,
        vendor: vendor.name,

        date: data.get("date"),
        time: data.get("time"),
        guests: Number(data.get("guests")),

        totalPrice: itinerary.basePrice + vendor.price,

        status: "pending",

        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        await db.collection("bookings").add(bookingData);

        console.log("✅ Booking Saved:", bookingData);

        bookingStep = 4;
        renderMicroItineraryStep();

    } catch (error) {
        console.error("❌ Booking Error:", error);
        alert("Booking failed. Try again.");
    }
}


        function showRandomTranslation() {
            const phrase = localPhrases[Math.floor(Math.random() * localPhrases.length)];
            const popup = document.getElementById('translatePopup');
            const text = document.getElementById('translationText');
            
            text.innerHTML = `<strong>${phrase.assamese}</strong><br>${phrase.english}`;
            popup.classList.add('active');
            
            setTimeout(() => {
                popup.classList.remove('active');
            }, 5000);
        }

        // Voice Narration
        function speakNarration() {
            const btn = document.getElementById('voiceBtn');
            
            if ('speechSynthesis' in window) {
                if (isVoicePlaying) {
                    window.speechSynthesis.cancel();
                    isVoicePlaying = false;
                    btn.textContent = '🔊 Start Voice Guide';
                } else {
                    const text = "Welcome to Guwahati, the gateway to Northeast India. Experience spiritual temples, vibrant culture, and natural wonders in compact 2 to 4 hour micro-tours designed for modern travelers.";
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.rate = 0.9;
                    utterance.pitch = 1;
                    
                    utterance.onstart = () => {
                        isVoicePlaying = true;
                        btn.textContent = '🔇 Stop Voice Guide';
                    };
                    
                    utterance.onend = () => {
                        isVoicePlaying = false;
                        btn.textContent = '🔊 Start Voice Guide';
                    };
                    
                    window.speechSynthesis.speak(utterance);
                }
            } else {
                alert('Voice narration is not supported in your browser.');
            }
        }

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
        }

        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
        }

        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Initialize
        window.addEventListener('DOMContentLoaded', () => {
            renderDestinations();
            renderHeritage();
            renderFood();
            renderTribes();
        });

        // Close modals on outside click
        document.getElementById('destinationModal').addEventListener('click', (e) => {
            if (e.target.id === 'destinationModal') {
                closeDestinationModal();
            }
        });

document.getElementById('microItineraryModal').addEventListener('click', (e) => {
    if (e.target.id === 'microItineraryModal') {
        closeMicroItinerary();
    }
});

// ================= FIREBASE INIT =================

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDY6BiCWk6rnO5FzV8HgtlZ3z7j3dEd-w4",
  authDomain: "guwahati-tourism-375ba.firebaseapp.com",
  projectId: "guwahati-tourism-375ba",
  storageBucket: "guwahati-tourism-375ba.appspot.com",
  messagingSenderId: "802099336103",
  appId: "1:802099336103:web:e1c39df2b360e1d050dc82"
};

// Initialize Firebase FIRST
firebase.initializeApp(firebaseConfig);

// Initialize services AFTER
const auth = firebase.auth();
const db = firebase.firestore();

// Test log
console.log("🔥 Firebase Connected Successfully");

// Get current user
function getCurrentFirebaseUser() {
  return auth.currentUser;
}
