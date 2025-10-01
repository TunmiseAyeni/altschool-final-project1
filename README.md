# Stopwatch Application

A clean and responsive stopwatch web application built with vanilla JavaScript, HTML, and CSS.

## 🚀 Features

- **Start/Stop Functionality**: Toggle the stopwatch with a single button
- **Reset Function**: Reset the timer back to zero at any time
- **Precise Timing**: Tracks time down to centiseconds (1/100th of a second)
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens
- **Modern UI**: Clean interface with smooth animations and hover effects

## 📋 Time Format

The stopwatch displays time in the format: `HH:MM:SS:MS`
- **HH**: Hours (00-99)
- **MM**: Minutes (00-59)
- **SS**: Seconds (00-59)
- **MS**: Centiseconds (00-99)

## 🎨 Design Features

- **Color Scheme**: Red background (#c93737) with golden yellow buttons (#f4d47c)
- **Circular Buttons**: Large, easy-to-click circular buttons for better UX
- **Hover Effects**: Interactive button animations with shadow effects
- **Mobile-First**: Buttons stack vertically on screens smaller than 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox and media queries
- **JavaScript (ES5)**: Vanilla JavaScript for stopwatch logic

## 📁 Project Structure

```
final-project/
│
├── index.html          # Main HTML file
├── script.js           # Stopwatch logic and functionality
├── assets/
│   └── style.css      # Styling and responsive design
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TunmiseAyeni/altschool-final-project1.git
```

2. Navigate to the project directory:
```bash
cd altschool-final-project1
```

3. Open `index.html` in your web browser:
```bash
open index.html
```
Or simply double-click the `index.html` file.

## 💻 Usage

1. **Start the Stopwatch**: Click the "start/stop" button to begin timing
2. **Pause the Stopwatch**: Click the "start/stop" button again to pause
3. **Reset the Timer**: Click the "reset" button to set the timer back to 00:00:00:00

## 📱 Responsive Breakpoints

- **Desktop**: Buttons displayed horizontally (>768px)
- **Mobile/Tablet**: Buttons stacked vertically (≤768px)

## 🎯 Key Functions

### `startTimer()`
Toggles the stopwatch between running and paused states.

### `updateTime()`
Increments the time values and handles overflow (milliseconds → seconds → minutes → hours).

### `displayTime()`
Formats and updates the time display with leading zeros.

### `resetTimer()`
Stops the timer and resets all values to zero.

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Tunmise Ayeni**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
