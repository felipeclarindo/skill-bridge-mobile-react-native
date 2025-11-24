🌍 [Leia em Português](README.pt-BR.md)

# Mottu Mapping App

Mobile Application to get reports and can make the stock using a vision computational to identify motos in a patio.

## Technologies Used

- **React Native** - Framework for building cross-platform mobile applications.
- **Expo** - Development environment and tools for React Native apps.
- **TypeScript** - JavaScript superset with static typing.
- **React Navigation** - Navigation between app screens.
- **AsyncStorage** - Local storage for data persistence.
- **react-native-chart-kit** - Library for displaying charts and graphs.
- **Computer Vision Backend** - API for identifying motorcycles in images.

## Features

- Interactive dashboard with charts showing number of motos per sector
- Real-time patio monitoring with images.
- Generate reports based on collected data.
- Bilingual support (Portuguese and Spanish)
- Smooth navigation between Home, Patio, and Report screens.
- Dark and Light theme support

## Directory Structure

```
│   App.tsx
│
├───assets # images, etc
│       favicon.png
│       logo.png
│       moto.png
│       patio.png
│       profile-generic.jpg
│
├───components # reusable components
│       Footer.tsx
│       Header.tsx
│       ImageModal.tsx
│       MotoCard.tsx
│       MotoModal.tsx
│       Separator.tsx
│
├───context 
│       AuthContext.tsx
│       ThemeContext.tsx
│
├───control 
│       modelControl.ts
│       motoControl.ts
│       sectorControl.ts
│       userControl.ts
│
├───fetcher
│       api.ts
│       modelFetcher.ts
│       motoFetcher.ts
│       sectorFetcher.ts
│       userFetcher.ts
│
├───i18n # bilingual support
│       es.ts
│       i18n.ts
│       pt.ts
│
├───model
│       ModelModel.ts
│       MotoModel.ts
│       navigation.ts
│       SectorModel.ts
│       UserModel.ts
│
├───navigation 
│       AuthStack.tsx
│       CustomDrawerContent.tsx
│       DrawerNavigator.tsx
│       MainNavigator.tsx
│
├───service
│       authService.ts
│       modelService.ts
│       motoService.ts
│       sectorService.ts
│       userService.ts
│
├───theme
│       colors.ts
│       styles.ts
│
├───utils # report
│       index.tsx
│
└───view 
        AboutView.tsx
        AccountView.tsx
        HomeView.tsx
        LoginView.tsx
        PatioView.tsx
        ReportView.tsx
        SettingsView.tsx
```

## Steps to install and run

1. Clone the api repository:

```bash
git clone https://github.com/felipeclarindo/skill-bridge-api-rest-dotnet.git
```

2. Follow the instructions in the api `Readme.md` to run the api.

3. Clone the Repository:

```bash
git clone https://github.com/felipeclarindo/skill-bridge-mobile-react-native.git
```

4. Enter directory:

```bash
cd skill-bridge-mobile-react-native
```

5. Install dependencies :

```bash
npm install
```

6. Make sure you have an android device to view the app(emulator or via debugging).

7. Run the app

```bash
npx expo start
```

8. Press `A` to open the application in android.

**OBS: YOU NEED HAVE AN EMULATOR IN YOU COMPUTER OR CONNECT THE PHONE IN THE COMPUTER!**

## Contribution

Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

## Team

RM: 554547 -> Felipe Gabriel Lopes Pinheiro Clarindo (2TDSPF)
RM: 558482 -> Humberto de Souza Silva (2TDSPX)
RM: 554914 -> Vinicius Beda de Oliveira (2TDSPX)

## License

This project is licensed under the [GNU Affero License](https://www.gnu.org/licenses/agpl-3.0.html).
