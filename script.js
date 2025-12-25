// Lion of Judah - Language Toggle Functionality
// Honoring the godmother with icy lion majesty

document.addEventListener('DOMContentLoaded', function() {
    // Audio Context for sound effects
    let audioContext = null;

    function initAudio() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }

    // Create lion roar sound using Web Audio API
    function playLionRoar() {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Create a roar-like sound with frequency sweep
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    // Create icy wind sound
    function playIcyWind() {
        if (!audioContext) return;

        const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        // Generate white noise
        for (let i = 0; i < output.length; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioContext.createBufferSource();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, audioContext.currentTime);
        filter.Q.setValueAtTime(1, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);

        whiteNoise.start(audioContext.currentTime);
        whiteNoise.stop(audioContext.currentTime + 1);
    }

    // Create Christmas bell sound
    function playChristmasBell() {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Create bell-like sound with harmonics
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }

    // Create Christmas carol-like melody
    function playChristmasCarol() {
        if (!audioContext) return;

        const notes = [523.25, 587.33, 659.25, 698.46, 783.99]; // C, D, E, F, G
        let time = audioContext.currentTime;

        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }, index * 200);
        });
    }

    // Create sacred hymn-like melody for Bible section
    function playSacredHymn() {
        if (!audioContext) return;

        // Simple hymn-like melody: Amazing Grace style
        const melody = [
            { note: 523.25, duration: 0.4 }, // C
            { note: 659.25, duration: 0.4 }, // E
            { note: 587.33, duration: 0.4 }, // D
            { note: 523.25, duration: 0.4 }, // C
            { note: 392.00, duration: 0.4 }, // G (lower)
            { note: 440.00, duration: 0.4 }, // A
            { note: 493.88, duration: 0.4 }, // B
            { note: 523.25, duration: 0.8 }  // C (longer)
        ];

        let time = audioContext.currentTime;

        melody.forEach((note, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.frequency.setValueAtTime(note.note, audioContext.currentTime);
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.duration);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + note.duration);
            }, index * 300);
        });
    }

    // Create gentle prayer bell sound
    function playPrayerBell() {
        if (!audioContext) return;

        const notes = [800, 600, 400]; // Descending bell tones

        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 1);
            }, index * 200);
        });
    }

    // Initialize audio on first user interaction
    function initAudioOnInteraction() {
        initAudio();
        document.removeEventListener('click', initAudioOnInteraction);
        document.removeEventListener('keydown', initAudioOnInteraction);
    }

    document.addEventListener('click', initAudioOnInteraction);
    document.addEventListener('keydown', initAudioOnInteraction);
    const langToggle = document.getElementById('lang-toggle');
    let isEnglish = false;

    // Language toggle functionality
    langToggle.addEventListener('click', function() {
        isEnglish = !isEnglish;
        toggleLanguage(isEnglish);
        updateButtonText(isEnglish);

        // Add a majestic roar effect when switching languages
        createRoarEffect();
    });

    function toggleLanguage(showEnglish) {
        const finnishElements = document.querySelectorAll('.fi');
        const englishElements = document.querySelectorAll('.en');

        if (showEnglish) {
            finnishElements.forEach(el => el.classList.add('hidden'));
            englishElements.forEach(el => el.classList.remove('hidden'));
        } else {
            englishElements.forEach(el => el.classList.add('hidden'));
            finnishElements.forEach(el => el.classList.remove('hidden'));
        }
    }

    function updateButtonText(isEnglish) {
        langToggle.textContent = isEnglish ? 'FI' : 'EN';

        // Add a glowing effect to the button
        langToggle.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        setTimeout(() => {
            langToggle.style.boxShadow = '';
        }, 500);
    }

    // Create a majestic roar effect with sound
    function createRoarEffect() {
        playLionRoar();

        const roar = document.createElement('div');
        roar.textContent = '🦁';
        roar.style.position = 'fixed';
        roar.style.top = '50%';
        roar.style.left = '50%';
        roar.style.transform = 'translate(-50%, -50%)';
        roar.style.fontSize = '5rem';
        roar.style.zIndex = '1000';
        roar.style.pointerEvents = 'none';
        roar.style.animation = 'roarEffect 1s ease-out forwards';

        document.body.appendChild(roar);

        setTimeout(() => {
            document.body.removeChild(roar);
        }, 1000);
    }

    // Add CSS animation for roar effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes roarEffect {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
                text-shadow: 0 0 10px #ffd700;
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.5);
                text-shadow: 0 0 30px #ffd700, 0 0 40px #ffd700;
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(2);
                text-shadow: 0 0 50px #ffd700, 0 0 60px #ffd700, 0 0 70px #ffd700;
            }
        }
    `;
    document.head.appendChild(style);

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations and sounds
    let lastScrollTime = 0;
    let christmasPlayed = false;
    let biblePlayed = false;

    document.querySelectorAll('.ice-section, .christmas-section, .bible-section').forEach(section => {
        observer.observe(section);

        // Special handling for Christmas section
        if (section.id === 'christmas') {
            const christmasObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !christmasPlayed) {
                        // Play Christmas carol when Christmas section comes into view
                        setTimeout(() => {
                            playChristmasCarol();
                            christmasPlayed = true; // Only play once per page load
                        }, 1000);
                    }
                });
            }, { threshold: 0.3 });
            christmasObserver.observe(section);
        }

        // Special handling for Bible section
        if (section.id === 'bible') {
            const bibleObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !biblePlayed) {
                        // Play sacred hymn when Bible section comes into view
                        setTimeout(() => {
                            playSacredHymn();
                            biblePlayed = true; // Only play once per page load
                        }, 1500);
                    }
                });
            }, { threshold: 0.3 });
            bibleObserver.observe(section);
        }
    });

    // Add scroll-triggered wind sounds and Christmas effects (throttled)
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastScrollTime > 2000) { // Only play every 2 seconds max
            if (Math.random() > 0.8) { // 20% chance when scrolling
                playIcyWind();
                lastScrollTime = now;
            }
            if (Math.random() > 0.95) { // 5% chance for Christmas bell when scrolling
                playChristmasBell();
            }
        }
    });

    // Add Christmas ornament interactions
    document.querySelectorAll('.ornament').forEach(ornament => {
        ornament.addEventListener('click', function(e) {
            e.stopPropagation();
            playChristmasBell();
            createChristmasSparkle(e.clientX, e.clientY);
            showChristmasMessage();
        });
    });

    // Add Bible verse interactions
    document.querySelectorAll('.bible-verse').forEach(verse => {
        verse.addEventListener('click', function(e) {
            e.stopPropagation();
            playPrayerBell();
            createHolySparkle(e.clientX, e.clientY);
            showBibleMessage();
        });
    });

    // Add ice crystal click effects with occasional wind sounds and Christmas elements
    document.addEventListener('click', function(e) {
        // Don't trigger on ornament clicks (already handled above)
        if (e.target.classList.contains('ornament')) return;

        if (Math.random() > 0.7) { // 30% chance for sparkle effect
            createSparkle(e.clientX, e.clientY);
        }
        if (Math.random() > 0.9) { // 10% chance for wind sound
            playIcyWind();
        }
        if (Math.random() > 0.95) { // 5% chance for Christmas bell
            playChristmasBell();
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '❄️';
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '2rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.style.animation = 'sparkleFade 1s ease-out forwards';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 1000);
    }

    function createChristmasSparkle(x, y) {
        const emojis = ['🎄', '❄️', '⭐', '🎅', '🦌', '🔔'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        const sparkle = document.createElement('div');
        sparkle.textContent = emoji;
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '3rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.style.animation = 'christmasSparkle 1.5s ease-out forwards';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 1500);
    }

    function createHolySparkle(x, y) {
        const symbols = ['✝️', '🙏', '📿', '🕊️', '💙', '✨'];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];

        const sparkle = document.createElement('div');
        sparkle.textContent = symbol;
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '3rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.style.animation = 'holySparkle 2s ease-out forwards';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 2000);
    }

    function showChristmasMessage() {
        const messages = [
            { fi: '🎄 Hyvää Joulua!', en: '🎄 Merry Christmas!' },
            { fi: '⭐ Rauha maan päällä!', en: '⭐ Peace on Earth!' },
            { fi: '🦁 Leijona suojelee jouluna!', en: '🦁 The Lion protects at Christmas!' },
            { fi: '❤️ Rakkaus ja voima!', en: '❤️ Love and Strength!' },
            { fi: '❄️ Jääleijona tervehtii!', en: '❄️ Ice Lion greets you!' }
        ];

        const message = messages[Math.floor(Math.random() * messages.length)];
        const isEnglish = document.querySelector('.en:not(.hidden)') !== null;

        const toast = document.createElement('div');
        toast.textContent = isEnglish ? message.en : message.fi;
        toast.style.position = 'fixed';
        toast.style.top = '20%';
        toast.style.left = '50%';
        toast.style.transform = 'translate(-50%, -50%)';
        toast.style.background = 'linear-gradient(135deg, #dc143c, #228b22)';
        toast.style.color = 'white';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '25px';
        toast.style.fontSize = '1.2rem';
        toast.style.fontWeight = 'bold';
        toast.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        toast.style.zIndex = '1000';
        toast.style.animation = 'toastFade 3s ease-out forwards';

        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }

    function showBibleMessage() {
        const messages = [
            { fi: '🙏 Jumalan sana elää ikuisesti!', en: '🙏 God\'s word lives forever!' },
            { fi: '✝️ Leijona on voittanut!', en: '✝️ The Lion has conquered!' },
            { fi: '📖 Pyhä Raamattu johdattaa meitä!', en: '📖 Holy Bible guides us!' },
            { fi: '🦁 Jumalan voima suojelee!', en: '🦁 God\'s power protects!' },
            { fi: '💙 Rakkaus ja armo!', en: '💙 Love and mercy!' }
        ];

        const message = messages[Math.floor(Math.random() * messages.length)];
        const isEnglish = document.querySelector('.en:not(.hidden)') !== null;

        const toast = document.createElement('div');
        toast.textContent = isEnglish ? message.en : message.fi;
        toast.style.position = 'fixed';
        toast.style.top = '20%';
        toast.style.left = '50%';
        toast.style.transform = 'translate(-50%, -50%)';
        toast.style.background = 'linear-gradient(135deg, #daa520, #8b4513)';
        toast.style.color = 'white';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '25px';
        toast.style.fontSize = '1.2rem';
        toast.style.fontWeight = 'bold';
        toast.style.boxShadow = '0 4px 20px rgba(218, 165, 32, 0.4)';
        toast.style.zIndex = '1000';
        toast.style.animation = 'toastFade 3s ease-out forwards';

        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }

    // Add sparkle and Christmas animations
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleFade {
            0% {
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.2) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }

        @keyframes christmasSparkle {
            0% {
                opacity: 1;
                transform: scale(0.5) rotate(0deg);
                text-shadow: 0 0 10px currentColor;
            }
            50% {
                opacity: 1;
                transform: scale(1.5) rotate(180deg);
                text-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
            }
            100% {
                opacity: 0;
                transform: scale(2) rotate(360deg);
                text-shadow: 0 0 40px currentColor, 0 0 50px currentColor;
            }
        }

        @keyframes holySparkle {
            0% {
                opacity: 1;
                transform: scale(0.3) rotate(0deg);
                text-shadow: 0 0 15px #daa520, 0 0 25px #daa520;
            }
            50% {
                opacity: 1;
                transform: scale(1.2) rotate(180deg);
                text-shadow: 0 0 25px #daa520, 0 0 35px #daa520, 0 0 45px #daa520;
            }
            100% {
                opacity: 0;
                transform: scale(1.8) rotate(360deg);
                text-shadow: 0 0 35px #daa520, 0 0 45px #daa520, 0 0 55px #daa520;
            }
        }

        @keyframes toastFade {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
            10%, 90% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Add keyboard shortcut for language toggle (Ctrl/Cmd + L)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            langToggle.click();
        }
    });

    // Create Christmas snow
    function createChristmasSnow() {
        const container = document.getElementById('christmas-snow-container');
        const emojis = ['🎄', '❄️', '⭐', '🎅', '🦌', '🔔', '🎁'];

        for (let i = 0; i < 10; i++) {
            const snow = document.createElement('div');
            snow.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            snow.className = 'christmas-snow';
            snow.style.left = Math.random() * 100 + '%';
            snow.style.animationDelay = Math.random() * 5 + 's';
            snow.style.animationDuration = (Math.random() * 10 + 10) + 's';
            container.appendChild(snow);
        }
    }

    // Initialize with Finnish (default)
    toggleLanguage(false);

    // Add a welcome roar on page load
    setTimeout(() => {
        createRoarEffect();
    }, 1000);

    // Add Christmas snow after a delay
    setTimeout(() => {
        createChristmasSnow();
    }, 2000);
});
