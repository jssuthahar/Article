# 🏆 Flutter Best Practices Cheat Sheet

This guide contains **best practices** for writing clean, maintainable, and scalable Flutter applications.  

---

## 📂 1. Project Structure
Organize your project for scalability:
```

lib/
├── main.dart
├── core/          # constants, utils, themes, routing
├── data/          # APIs, repositories, models
├── domain/        # business logic, entities
├── presentation/  # UI: screens, widgets, state mgmt
└── l10n/          # localization (if needed)

````

---

## ⚡ 2. Use `const` Wherever Possible
```dart
// ✅ Good
const Text("Hello");

// ❌ Bad (unnecessary rebuilds)
Text("Hello");
````

Improves **performance** by avoiding unnecessary rebuilds.

---

## 🔄 3. State Management

* Small apps → `Provider` / `Riverpod`
* Medium → `flutter_bloc`
* Large → `Bloc` + Repository Pattern

```dart
BlocProvider(
  create: (_) => CounterCubit(),
  child: CounterView(),
);
```

---

## 🎨 4. Centralize Theme & Styles

```dart
ThemeData(
  primaryColor: AppColors.primary,
  textTheme: AppTextTheme.light,
);
```

Keeps design **consistent** across the app.

---

## 🧩 5. Split Large Widgets

```dart
// ❌ Bad
Widget build(BuildContext context) {
  return Column(
    children: [
      Text("Profile"),
      ElevatedButton(onPressed: ..., child: Text("Save")),
    ],
  );
}

// ✅ Good
Widget build(BuildContext context) {
  return const Column(
    children: [
      ProfileHeader(),
      ProfileActions(),
    ],
  );
}
```

---

## 🚨 6. Error Handling

Always catch exceptions (API, DB, inputs):

```dart
try {
  final user = await api.getUser();
} catch (e) {
  debugPrint("Error: $e");
}
```

---

## 📏 7. Use Lints

Add to `pubspec.yaml`:

```yaml
dev_dependencies:
  flutter_lints: ^3.0.0
```

Ensures **clean & consistent code**.

---

## ⚙️ 8. Performance Tips

* Use `ListView.builder` for large lists
* Use `const` constructors
* Use `RepaintBoundary` for expensive widgets
* Dispose controllers properly:

```dart
@override
void dispose() {
  _controller.dispose();
  super.dispose();
}
```

---

## 🏗 9. Code Organization

* Follow **SOLID principles**
* Use **Repository Pattern** for data handling
* Write clean, **readable** code

---

## ✅ 10. Testing

* **Unit Tests** → Business logic
* **Widget Tests** → UI behavior
* **Integration Tests** → End-to-end flows

```bash
flutter test
```

---

## 🌍 11. Localization & Accessibility

* Use **Flutter Intl** for multi-language apps
* Add **`Semantics`** for accessibility

```dart
Semantics(
  label: 'Save Button',
  child: ElevatedButton(
    onPressed: () {},
    child: const Text("Save"),
  ),
);
```

---

## 🔗 12. Version Control & CI/CD

* Use **Git** with branching strategy
* Automate builds & tests with **GitHub Actions / Codemagic**

---

## 🎯 Conclusion

By following these practices, you ensure:

* ✅ **Maintainable & scalable** code
* ✅ Better **performance & UX**
* ✅ Easier **team collaboration**

Happy coding! 🚀
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



