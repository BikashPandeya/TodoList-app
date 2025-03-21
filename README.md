# Todo Lists Manager

A modern, responsive Todo Lists Manager built with React that allows users to create and manage multiple todo lists with a clean and intuitive interface.

## Features

- **Multiple Todo Lists**: Create and manage multiple independent todo lists
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Minimizable Lists**: Each todo list can be minimized/maximized for better organization
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean and intuitive user interface with smooth animations

### Todo List Features
- Add new todos with a simple interface
- Mark todos as complete/incomplete
- Edit existing todos
- Delete individual todos
- Clear all completed todos
- Organize todos into separate named lists

### UI/UX Features
- Smooth transitions and animations
- Hover effects for better interactivity
- Clear visual hierarchy
- Compact and efficient layout
- Consistent styling across components

## Technical Details

### Built With
- React.js
- CSS3 with modern features
- Font Awesome icons
- UUID for unique identifiers

### Key Components
- `App.jsx`: Main application component managing todo lists
- `Todo.jsx`: Individual todo list component
- `AddTodo.jsx`: Component for adding new todos
- `EditTodos.jsx`: Component for editing existing todos
- `DisplayTodos.jsx`: Component for displaying active todos
- `DisplayCompletedTodos.jsx`: Component for showing completed todos
- `CompletedTodos.jsx`: Component managing completed todos section
- `DeleteTodos.jsx`: Component handling todo deletion

### Styling
- Modular CSS with component-specific styles
- Dark mode support with smooth transitions
- Responsive grid layout
- Custom button and input styling
- Shadow effects for depth

## Usage

1. **Creating a New List**
   - Click the "Create" button
   - Enter a name for your new todo list
   - Click "Create" to add the list

2. **Managing Todos**
   - Click the "+" button to add a new todo
   - Click the edit icon to modify a todo
   - Click the check icon to mark as complete
   - Click the trash icon to delete a todo

3. **List Management**
   - Use the chevron icon to minimize/maximize lists
   - Clear completed todos using the "Clear" button
   - Toggle dark mode using the sun/moon icon

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Dependencies
- React
- Font Awesome (for icons)
- UUID (for generating unique IDs)

## Contributing
Feel free to submit issues and enhancement requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
