# CLAUDE.MD

## Project Overview

**Studyportal** is an interactive MCQ quiz website designed for B.Tech Computer Science students. It provides a modern, responsive learning platform with randomized questions covering the IIT Kanpur Computer Science syllabus.

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **Storage:** Browser localStorage for quiz history and best scores
- **Design:** Responsive design supporting both mobile and desktop

## Project Structure

```
Studyportal/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Quiz logic and user interactions
├── questions.js        # Question bank with 100+ CS questions
└── README.md          # Project documentation
```

## Key Features

### Quiz Functionality
- 10 randomly selected questions per quiz session
- Questions cover: Programming (C/C++/Python), Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Computer Architecture, Theory of Computation, Digital Logic, and Discrete Mathematics
- Progressive difficulty (easy → medium → hard)
- Fisher-Yates shuffle algorithm for randomization
- Answer option shuffling for each question

### User Interface
- Progress indicator showing current question number
- Real-time timer tracking elapsed time
- Visual feedback for selected answers
- Smooth animations and transitions
- Responsive design for all screen sizes

### Results & Analytics
- Detailed result page with score, percentage, and grade
- List of correct and incorrect answers with explanations
- Quiz history stored in localStorage
- Best score tracking across sessions
- Share score functionality

## Core Components

### questions.js
Contains the question bank with the following structure:
```javascript
{
  id: number,
  difficulty: "easy" | "medium" | "hard",
  question: string,
  options: string[],
  correct: number,  // Index of correct answer
  explanation: string
}
```

### script.js
Handles:
- Question randomization and selection
- User answer tracking
- Timer functionality
- Score calculation
- localStorage management
- Result display

### style.css
Implements:
- Modern gradient backgrounds
- Card-based layout
- Button hover effects and animations
- Responsive breakpoints
- Progress bar styling

## Development Guidelines

### Adding New Questions
1. Open `questions.js`
2. Add question object to the `questions` array
3. Ensure unique `id` values
4. Include proper `difficulty` level
5. Provide clear `explanation` for learning

### Code Style
- Use semantic HTML5 elements
- Follow BEM-like naming conventions for CSS
- Use ES6+ JavaScript features (const/let, arrow functions)
- Keep functions small and focused
- Comment complex logic

### Testing Checklist
- [ ] Test on mobile devices (various screen sizes)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify question randomization works correctly
- [ ] Check timer accuracy
- [ ] Validate score calculation
- [ ] Test localStorage persistence
- [ ] Verify answer shuffling maintains correctness

## Common Tasks

### Reset Quiz History
```javascript
localStorage.removeItem('quizHistory');
localStorage.removeItem('bestScore');
```

### Debug Mode
Open browser console to see:
- Selected answers
- Correct answers
- Score calculations

### Customize Quiz Length
In `script.js`, modify the constant:
```javascript
const QUESTIONS_PER_QUIZ = 10; // Change to desired number
```

## Future Enhancement Ideas

- [ ] Add user authentication
- [ ] Implement topic-specific quizzes
- [ ] Add leaderboard functionality
- [ ] Export results as PDF
- [ ] Add detailed analytics dashboard
- [ ] Implement timed quiz mode
- [ ] Add hint system
- [ ] Create practice mode with unlimited questions
- [ ] Add social sharing features
- [ ] Implement dark mode toggle

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- Minimal external dependencies (no frameworks)
- Lightweight (~30KB total)
- Fast load times
- Efficient localStorage usage
- CSS animations use GPU acceleration

## Known Limitations

- Requires JavaScript enabled
- LocalStorage limited to ~5-10MB
- No backend/server integration
- No user account system
- Questions stored client-side (visible in source)

## Deployment

Simply host the files on any static web server:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

No build process or dependencies required.

## Support & Contribution

For issues or feature requests, please use the GitHub issue tracker.

## License

[Add your license information here]

---

*Last updated: December 2025*
