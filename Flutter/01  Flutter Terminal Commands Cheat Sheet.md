
# 📘 Flutter Terminal Commands Cheat Sheet

This document lists **commonly used Flutter CLI commands** for project setup, running, building, debugging, and testing.
Use this as a quick reference when working on Flutter apps.

---

## 🚀 Project Setup

```bash
flutter create my_app          # Create a new Flutter project
flutter doctor                 # Check Flutter setup
flutter --version              # Show Flutter version
flutter upgrade                # Upgrade Flutter
flutter downgrade              # Downgrade Flutter
flutter channel                # List available channels
flutter channel stable         # Switch to stable channel
```

---

## ▶️ Running the App

```bash
flutter run                    # Run app on connected device/emulator
flutter run -d chrome          # Run app on web
flutter run -d emulator-5554   # Run on specific device
flutter devices                # List connected devices
flutter emulators              # List available emulators
flutter emulators --launch <id> # Start emulator
```

---

## 📦 Dependencies & Packages

```bash
flutter pub get                # Install dependencies
flutter pub add http           # Add a package (example: http)
flutter pub remove http        # Remove a package
flutter pub upgrade            # Upgrade all dependencies
flutter pub outdated           # Show outdated packages
flutter pub cache repair       # Repair corrupted cache
```

---

## 🏗️ Build Commands

```bash
flutter build apk              # Build release APK
flutter build apk --split-per-abi  # Build APK per architecture
flutter build appbundle        # Build Android App Bundle (.aab)
flutter build ios              # Build iOS release app
flutter build web              # Build web app
flutter build windows          # Build Windows app
flutter build macos            # Build macOS app
flutter build linux            # Build Linux app
```

---

## 🧹 Clean & Fix

```bash
flutter clean                  # Clear build/ and cache
flutter pub cache clean        # Clear pub cache
flutter pub outdated           # Show outdated dependencies
flutter pub upgrade --major-versions # Upgrade to latest versions
```

---

## 🛠️ Debugging & Performance

```bash
flutter analyze                # Analyze code for issues
flutter format .               # Format all Dart files
flutter doctor -v              # Detailed setup check
flutter logs                   # Show real-time device logs
flutter attach                 # Attach debugger to a running app
flutter run --profile          # Run in profile mode
flutter run --release          # Run in release mode
```

---

## 🧪 Testing

```bash
flutter test                   # Run all unit & widget tests
flutter test test/my_test.dart # Run specific test file
flutter drive                  # Run integration tests
```

---

## 🌐 Internationalization

```bash
flutter gen-l10n               # Generate localization files
```

---

## 📋 Extra Useful Dart Commands

```bash
dart migrate                   # Run null-safety migration
dart format .                  # Format all Dart files
dart pub outdated              # Check outdated packages
dart analyze                   # Analyze Dart code
```

---

## ⚡ Pro Tips

* Use `flutter help` to see all commands.
* Use `flutter <command> --help` for detailed options.

### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)
