# FrontEnd-SwiftBuy

This project is the frontend for the **SwiftBuy** platform, built using Angular, HTML, and CSS. The application is designed to provide a seamless user experience with features such as asynchronous data management, real-time data updates, and smooth interactions without page reloads. The project follows best practices of Angular, including service-based architecture, dependency injection, and reusable components.

## Features

- **Asynchronous Data Handling**: Data is stored and updated without reloading the page, using Angular's built-in asynchronous features and JavaScript.
- **Real-time Data Updates**: The application makes use of Angular’s `BehaviorSubject` to enable real-time data updates across components.
- **Component Communication**: Utilizes Angular’s `@Input` and `@Output` decorators for effective parent-child component interaction.
- **Service-Based Architecture**: Services are implemented for managing shared data and logic across components using Angular’s dependency injection.
- **Interface & Class Usage**: The project uses interfaces and classes to define and manage data structures efficiently.

## Technologies Used

- **Angular**: Framework for building the frontend application with TypeScript.
- **HTML**: Markup language for structuring the content.
- **CSS**: Styling language to design the frontend interface.
- **BehaviorSubject**: Used for state management and sharing data among different parts of the application.
- **Input/Output Decorators**: For component communication and data binding.
- **Dependency Injection**: For injecting services and sharing functionality between components.


## Installation

1. **Clone the Repository:**

   ```bash
      git clone https://github.com/Emon-Khan/FrontEnd-SwiftBuy.git
   ```


2. **Navigate to the Project Directory:**

   ```bash
   cd FrontEnd-SwiftBuy
   ```
3. **Install the required dependencies:** 

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   ng serve
   ```

5. **Open your browser and navigate to:**

   ```bash
   http://localhost:4200
   ```

## Key Concepts

1. **Asynchronous Data Handling**
- Angular and JavaScript's asynchronous features are used to manage data without reloading the page. Services manage the data flow between components, and BehaviorSubject is used to monitor and update the data in real time.

2. **Component Communication**
- The project implements Angular’s @Input and @Output decorators to communicate between parent and child components efficiently.

3. **Services and Dependency Injection**
- Services play a crucial role in the architecture of the application, managing shared data and logic. Angular’s dependency injection system is used to inject these services where needed.efficiently.

4. **BehaviorSubject for State Management**
- BehaviorSubject from RxJS is used for state management, enabling components to subscribe to the latest data and automatically receive updates when the data changes.

5. **Interface and Class Usage**
- Interfaces and classes are used to define data models, ensuring type safety and reusability throughout the application.

## Folder Structure
```bash
src/
|-- app/
|   |-- components/          # Reusable components
|   |-- components/services/ # Angular services for data management
|   |-- shared/models/       # Interfaces and classes for data models
|-- assets/                  # Static assets (images, icons, etc.)
|-- styles/                  # Global styles
|-- environment/             # Environment-specific configuration (API URLs, page size, etc.)
```

### Screenshots
![image](https://github.com/user-attachments/assets/77f30af7-bf94-41be-942f-ee792c21aff6)
![image](https://github.com/user-attachments/assets/c6285a87-2a77-4cf5-a27c-64d565ee1d97)
![image](https://github.com/user-attachments/assets/f7bbfc70-7e94-4e06-b783-309f2da9f670)


## Conclusion

The **FrontEnd-SwiftBuy** project demonstrates a dynamic and responsive frontend built using Angular, HTML, and CSS. By leveraging Angular's asynchronous behavior, `BehaviorSubject` for state management, and efficient component communication with `@Input` and `@Output` decorators, this project provides a seamless user experience. It also emphasizes the use of best practices such as service-based architecture, dependency injection, and well-defined interfaces and classes.


