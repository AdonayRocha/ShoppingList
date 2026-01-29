# ShoppingList

ShoppingList is a cross-platform mobile application built with React Native and Expo that helps users organize and manage their shopping lists efficiently and collaboratively.

## Overview

ShoppingList enables users to:
- Create, edit, and delete shopping lists and items.
- Share and collaborate on lists in real time (via Firebase).
- Access their lists from Android, iOS, and the web.

## Business Impact

By streamlining the process of list management, ShoppingList reduces forgotten items, avoids duplicates, and simplifies group coordination—ideal for families, friends, and roommates who shop together.

## Technical Details

- **Language**: TypeScript
- **Framework**: React Native with Expo
- **Dependencies**:
  - `@react-navigation/native` for smooth app navigation
  - `firebase` for real-time backend and sync
  - `react-native-safe-area-context`, `react-native-screens` for improved UI on mobile devices

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/AdonayRocha/ShoppingList.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app locally (Expo required):
   ```bash
   npx expo start
   ```
4. Run on your preferred platform (Android/iOS/Web).

## Folder Structure

- `App.tsx`: Main entry point of the application.
- `src/`: Contains components, screens, and Firebase logic.
- `assets/`: Assets such as images and app icons.

## Customization

Configure your Firebase credentials before running to enable real-time list collaboration.

## Contributing

Pull requests and suggestions are welcome!

---

> For more details, see the code at [github.com/AdonayRocha/ShoppingList](https://github.com/AdonayRocha/ShoppingList)
