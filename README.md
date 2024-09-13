# React Native Chat App

A fully functional and customizable chat application built using [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat). This app supports essential chat features, including message sending, image attachments, typing indicators, custom message bubbles, and more.

## Features

- **Real-time messaging**: Send and receive messages in real-time with customizable message bubbles.
- **Image Attachments**: Send images as messages using the media picker.
- **Typing Indicator**: Displays a "User is typing..." message when typing is detected.
- **Customizable Input Toolbar**: Custom input toolbar with support for adding images or other actions.
- **Custom Send Button**: Replace the default send button with custom icons.
- **Scroll-to-Bottom**: Automatically scrolls to the most recent message.
- **Welcome Messages**: Displays a system message when a user enters a chat room.

## Installation

Follow these steps to install and set up the project locally.

### Prerequisites

Ensure you have the following tools installed on your development machine:

- [Node.js](https://nodejs.org/) (v14.x or above)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) or [Expo CLI](https://docs.expo.dev/)
- Android Studio/Xcode for emulating mobile devices or a physical mobile device.

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-native-chat-app.git
   cd react-native-chat-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the application**:

   For Expo:
   ```bash
   expo start
   ```

   For React Native CLI:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios     # For iOS
   ```

## Usage

This application has a basic chat interface where users can send text and images. Here's a breakdown of how to use the app:

### Adding a Chat Room

- Navigate to the chat screen by selecting a room.
- A system-generated welcome message will greet you upon entry.

### Sending a Message

- Type in the input field at the bottom of the screen and press the send button (a custom icon).
- Messages will appear in real-time as you type and send.

### Sending Images

- Click the attachment icon in the input toolbar to open the image picker.
- Select an image, and it will be sent in the chat.

### Customizing

The app is built with customization in mind. You can easily change:

- **Message Bubble Styles**: Change the colors, fonts, and alignment of messages.
- **Input Toolbar**: Customize the toolbar with additional buttons or icons.
- **Send Button**: Replace the default send icon with any custom icon.
- **Add Additional Features**: Easily integrate features like voice messages, GIFs, or file sharing.

## Code Structure

The primary chat functionality is located in the `ChatScreen` component. Here's a brief overview of the core files:

- **`ChatScreen.js`**: The main screen where users can chat and send messages.
- **`components/`**: Reusable components for the input toolbar, send button, and actions (attachments).
- **`assets/`**: Local assets (icons, images) used in the chat.

## Customization

You can easily customize the app to suit your needs. Below are some ways to modify the app:

1. **Change Message Bubble Styles**:
   Update the `renderBubble` method in `ChatScreen.js` to modify the appearance of message bubbles.
   
   ```js
   const renderBubble = (props) => (
     <Bubble
       {...props}
       wrapperStyle={{
         right: { backgroundColor: '#0078fe' },
         left: { backgroundColor: '#f0f0f0' },
       }}
     />
   );
   ```

2. **Change Input Toolbar**:
   Update `renderInputToolbar` to customize the chat input toolbar.

3. **Add New Features**:
   - Add voice messages.
   - Add file sharing or video calls.

## Dependencies

This project relies on the following key libraries:

- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat) for chat functionalities.
- [uuid](https://github.com/uuidjs/uuid) for generating unique message IDs.
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) for selecting images from the gallery.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons.

To install these dependencies, run:

```bash
npm install react-native-gifted-chat uuid expo-image-picker react-native-vector-icons
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow the standard GitHub fork-and-pull request workflow.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m 'Add awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a pull request.
