# Flutter BLoC State Management – Beginner Guide

## 🚀 Introduction

When you start Flutter, you usually use `setState` to update the UI.
That’s fine for small apps, but for bigger apps it becomes messy:

* Logic is mixed with UI.
* Hard to manage data across multiple screens.
* Difficult to handle loading/error states.

👉 That’s why we use **BLoC (Business Logic Component)**.
It separates **UI** from **Logic**, making apps clean and scalable.

---

## 🧠 What is BLoC?

BLoC is built around **3 things**:

1. **Event** → Something happens (user taps a button, API request).
2. **Bloc** → The brain. Takes the event, runs logic, produces a result.
3. **State** → The current data shown in the UI.

---

## 🍔 Real-Life Analogy (Cafeteria)

* **Student (UI)** → Wants food.
* **Order slip (Event)** → "One burger, please."
* **Kitchen (Bloc)** → Cooks the burger.
* **Meal (State)** → The burger is ready.
* **Notice board (UI)** → Shows "Order ready!"

👉 The classroom (UI) doesn’t cook. The kitchen (Bloc) does the work.

---

## ✅ Benefits of BLoC

* Separation of **UI** and **business logic**.
* Reusable and testable logic.
* Clean structure for small & big apps.
* Easy handling of **loading, error, success** states.

---

## ⚙️ How BLoC Works (Flow)

```
User Action (Event) → Bloc (Logic) → New State → UI updates
```

---

## 📂 Project Folder Structure

For a **Counter App** using BLoC, you can structure it like this:

```
lib/
│
├── main.dart                # App entry point
│
└── counter/                 # Feature folder (Counter feature)
    ├── counter_bloc.dart    # Bloc file (handles logic)
    ├── counter_event.dart   # Event file (user actions)
    ├── counter_state.dart   # State file (UI data)
    └── counter_page.dart    # UI for counter screen
```

👉 This way, everything related to the **Counter feature** is kept in **one folder**.
As your app grows, you can add more feature folders (e.g., `auth/`, `profile/`, `todo/`).

---

## 🛠 Example: Counter App with BLoC

### Step 1: Add dependency

```bash
flutter pub add flutter_bloc equatable
```

---

### Step 2: Create Event

📂 `lib/counter/counter_event.dart`

```dart
import 'package:equatable/equatable.dart';

abstract class CounterEvent extends Equatable {
  const CounterEvent();
  @override
  List<Object?> get props => [];
}

class Increment extends CounterEvent {}
class Decrement extends CounterEvent {}
class Reset extends CounterEvent {}
```

---

### Step 3: Create State

📂 `lib/counter/counter_state.dart`

```dart
import 'package:equatable/equatable.dart';

class CounterState extends Equatable {
  final int value;
  const CounterState(this.value);

  @override
  List<Object?> get props => [value];
}
```

---

### Step 4: Create Bloc

📂 `lib/counter/counter_bloc.dart`

```dart
import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter_event.dart';
import 'counter_state.dart';

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(const CounterState(0)) {
    on<Increment>((event, emit) => emit(CounterState(state.value + 1)));
    on<Decrement>((event, emit) => emit(CounterState(state.value - 1)));
    on<Reset>((event, emit) => emit(const CounterState(0)));
  }
}
```

---

### Step 5: UI with Bloc

📂 `lib/counter/counter_page.dart`

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter_bloc.dart';
import 'counter_event.dart';
import 'counter_state.dart';

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final bloc = context.read<CounterBloc>();

    return Scaffold(
      appBar: AppBar(title: const Text('BLoC Counter')),
      body: Center(
        child: BlocBuilder<CounterBloc, CounterState>(
          builder: (context, state) {
            return Text(
              'Count: ${state.value}',
              style: const TextStyle(fontSize: 32),
            );
          },
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            heroTag: 'inc',
            onPressed: () => bloc.add(Increment()),
            child: const Icon(Icons.add),
          ),
          const SizedBox(height: 12),
          FloatingActionButton(
            heroTag: 'dec',
            onPressed: () => bloc.add(Decrement()),
            child: const Icon(Icons.remove),
          ),
          const SizedBox(height: 12),
          FloatingActionButton.extended(
            heroTag: 'reset',
            onPressed: () => bloc.add(Reset()),
            label: const Text('Reset'),
          ),
        ],
      ),
    );
  }
}
```

---

### Step 6: Connect Bloc in Main

📂 `lib/main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'counter/counter_bloc.dart';
import 'counter/counter_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BLoC Counter',
      home: BlocProvider(
        create: (_) => CounterBloc(),
        child: const CounterPage(),
      ),
    );
  }
}
```

---

## 🎯 What Happened Here?

1. User taps **+ button** → sends `Increment` **Event**.
2. **Bloc** receives it, runs logic (`value + 1`), and emits a new **State**.
3. **UI** listens with `BlocBuilder` → shows the new count.

---

## 🔑 Rule of Thumb

* Use **BLoC** when your app has multiple screens, shared logic, or async operations (like API calls).
* Always remember the cycle:
  **Event → Bloc → State → UI**

---

Instead of putting everything inside one folder like `counter/`, we split into **layers**:

* **Presentation layer** → Widgets, UI, Screens (what user sees).
* **Business logic layer** → Bloc (handles events, states, logic).
* **Data layer** → Repository (fetches/saves data, maybe from API/DB).

This makes apps clean, testable, and scalable.

---

## 📂 Example Folder Structure

Here’s a **3-layer structure** for a typical feature (e.g., `counter`):

```
lib/
│
├── main.dart
│
└── features/
    └── counter/
        ├── presentation/                # UI Layer
        │   └── counter_page.dart
        │
        ├── business_logic/              # Bloc Layer
        │   ├── counter_bloc.dart
        │   ├── counter_event.dart
        │   └── counter_state.dart
        │
        └── data/                        # Repository/Data Layer
            ├── counter_repository.dart
            └── counter_api_provider.dart   (optional, if API/DB)
```

---

## 🔎 Explanation

### 1. **Presentation Layer (UI)**

* Only displays data.
* Doesn’t know where data comes from.
* Talks to the **Bloc**.

👉 Example: `counter_page.dart`

```dart
class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final bloc = context.read<CounterBloc>();

    return Scaffold(
      appBar: AppBar(title: const Text('BLoC Counter')),
      body: Center(
        child: BlocBuilder<CounterBloc, CounterState>(
          builder: (context, state) => Text(
            'Count: ${state.value}',
            style: const TextStyle(fontSize: 32),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => bloc.add(Increment()),
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

---

### 2. **Business Logic Layer (Bloc)**

* Receives **events** (e.g., `Increment`).
* Talks to the **repository** if data is needed.
* Emits **states**.

👉 Example: `counter_bloc.dart`

```dart
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  final CounterRepository repository;

  CounterBloc(this.repository) : super(const CounterState(0)) {
    on<Increment>((event, emit) {
      final newValue = repository.increment(state.value);
      emit(CounterState(newValue));
    });
  }
}
```

---

### 3. **Data Layer (Repository)**

* Responsible for **fetching/saving data**.
* Could be API, database, or local storage.
* Bloc only knows it’s asking a repository, not *how* data is fetched.

👉 Example: `counter_repository.dart`

```dart
class CounterRepository {
  int increment(int currentValue) {
    // In a real app, this could be an API or DB call
    return currentValue + 1;
  }

  int decrement(int currentValue) {
    return currentValue - 1;
  }

  int reset() {
    return 0;
  }
}
```

---

## 🧩 Benefits of Splitting into Layers

✅ **Clean separation** → UI, logic, and data don’t mix.
✅ **Scalable** → Easy to add new features without breaking old ones.
✅ **Testable** → You can test repository, bloc, and UI separately.
✅ **Reusable** → The same repository can be used in multiple blocs.

---

## 📘 Bigger App Folder Example

In a real-world app with multiple features:

```
lib/
├── core/                     # Shared code (themes, widgets, utils, constants)
├── features/
│   ├── auth/                 # Login / Signup
│   │   ├── presentation/
│   │   ├── business_logic/
│   │   └── data/
│   │
│   ├── counter/              # Counter feature
│   │   ├── presentation/
│   │   ├── business_logic/
│   │   └── data/
│   │
│   └── profile/              # User Profile
│       ├── presentation/
│       ├── business_logic/
│       └── data/
│
└── main.dart
```

## 📚 Resources

* [flutter\_bloc package](https://pub.dev/packages/flutter_bloc)
* [Bloc Documentation](https://bloclibrary.dev)
* [Bloc Examples GitHub](https://github.com/felangel/bloc)

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



