
# StudyPortal Bihar - Interactive MCQ Quiz Website

This project is a complete, production-ready interactive MCQ quiz website for B.Tech Computer Science students. Built with pure HTML, CSS, and JavaScript, it features a modern, responsive design inspired by the rich cultural heritage of Bihar, particularly the famous Madhubani art.

## Features

### Homepage Features
- **Beautiful Landing Page:** Stunning homepage with Bihar cultural theme and Madhubani-inspired design elements
- **Custom Logo:** Unique logo featuring Madhubani art patterns with an educational theme
- **Interactive Hero Section:** Animated floating cards showcasing different CS topics
- **Feature Showcase:** Comprehensive overview of all platform capabilities
- **Topic Cards:** Visual representation of all covered Computer Science subjects
- **Feedback Modal:** Interactive feedback form with star rating system
- **Social Media Links:** Connect through Facebook, Twitter, LinkedIn, Instagram, and GitHub
- **Developer Credits:** Prominently displayed developer information in the footer
- **Smooth Animations:** Parallax effects, scroll animations, and interactive hover effects

### Quiz Features
- **10 Questions per Quiz:** Each quiz session consists of 10 questions
- **B.Tech Computer Science Syllabus:** Questions based on the IIT Kanpur syllabus for Computer Science
- **Multiple Topics:** Programming (C/C++/Python), Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Computer Architecture, Theory of Computation, Digital Logic, and Discrete Mathematics
- **Difficulty Progression:** Questions progress from easy to hard
- **Randomization:** Questions and answer options randomized in each session
- **Bihar Cultural Theme:** Vibrant orange, golden yellow, and traditional brown color palette
- **Modern UI Design:** Beautiful gradients, smooth animations, and interactive elements
- **Responsive Design:** Fully responsive and works on both mobile and desktop devices
- **Progress Indicator:** Visual progress bar showing current question number
- **Timer:** Real-time timer tracking elapsed time
- **Visual Feedback:** Selected answers highlighted with smooth transitions
- **Detailed Results:** Score, percentage, grade, time taken, and answer explanations
- **Social Media Sharing:** Share your score on Facebook, Twitter, LinkedIn, and WhatsApp
- **Copy Link Feature:** Quick copy-to-clipboard functionality
- **Quiz History:** Quiz history stored in browser's localStorage
- **Best Score Tracking:** Animated best score display with trophy icon
- **Navigation Header:** Quick access to home page from quiz

## Getting Started

### For Users
1. **Visit Homepage:** Open `home.html` to explore the platform and learn about features
2. **Start Quiz:** Click "Start Quiz" button or directly open `index.html`
3. **Take Quiz:** Answer 10 randomized Computer Science questions
4. **View Results:** Check your score, grade, and detailed explanations
5. **Share Achievement:** Share your score on social media platforms
6. **Provide Feedback:** Use the feedback form on the homepage to share your experience

## How to Add More Questions

To add more questions to the quiz, open the `questions.js` file and add a new question object to the `questions` array. Each question object should have the following properties:

- `id`: A unique ID for the question.
- `difficulty`: The difficulty of the question ("easy", "medium", or "hard").
- `question`: The question text.
- `options`: An array of answer options.
- `correct`: The index of the correct answer in the `options` array.
- `explanation`: A brief explanation of the correct answer.

## How the Randomization Works

The randomization of questions and answer options is done using the Fisher-Yates shuffle algorithm. This algorithm is implemented in the `script.js` file and is used to shuffle the `questions` array before each quiz session. The answer options are also shuffled before being displayed to the user.

## Design Philosophy

### Bihar Cultural Inspiration
The design draws inspiration from Bihar's rich cultural heritage:
- **Madhubani Art:** Traditional art form reflected in the logo and decorative patterns
- **Color Palette:** Vibrant orange, golden yellow, and earthy brown tones
- **Patterns:** Geometric patterns reminiscent of traditional Bihar textiles
- **Pride:** Celebrating Bihar's intellectual legacy and educational excellence

### User Experience
- **Intuitive Navigation:** Easy-to-use interface with clear call-to-action buttons
- **Visual Hierarchy:** Important elements emphasized through size, color, and animation
- **Feedback:** Immediate visual feedback for all user interactions
- **Accessibility:** High contrast ratios and readable fonts for better accessibility

## File Structure

```
Studyportal/
├── home.html              # Homepage with full feature showcase
├── home-style.css         # Styles for homepage
├── home-script.js         # JavaScript for homepage interactivity
├── index.html             # Quiz application page
├── style.css              # Styles for quiz application
├── script.js              # Quiz logic and functionality
├── questions.js           # Question bank
├── logo.svg               # Custom Madhubani-inspired logo
├── README.md              # Project documentation
└── CLAUDE.MD              # Technical documentation
```

## Technologies Used

- **HTML5:** Semantic markup for better structure
- **CSS3:** Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (ES6+):** Interactive functionality and quiz logic
- **Font Awesome:** Icons for enhanced visual appeal
- **LocalStorage API:** Persistent data storage
- **Web Share API:** Native social sharing capabilities

## Social Media Integration

The platform includes comprehensive social media sharing:
- **Facebook:** Share directly to timeline
- **Twitter:** Tweet your achievements
- **LinkedIn:** Post to professional network
- **WhatsApp:** Share with friends and groups
- **Copy Link:** Quick clipboard copy functionality

## Developer

**Developed with ❤️ by Prabhat Kumar**

Inspired by Bihar's cultural richness and commitment to quality education.

## Future Enhancements

- User authentication system
- Leaderboard for competitive learning
- Topic-specific quiz modes
- Practice mode with unlimited questions
- PDF export of results
- Dark mode toggle
- Multilingual support (Hindi/English)
- Mobile app version

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

© 2025 StudyPortal Bihar. All rights reserved.
