# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```





my project folder structur

---------------------------------------------------

src/
│
├── app/
│   ├── store/
│   ├── routes/
│   ├── hooks/
│   ├── constants/
│   ├── utils/
│   ├── types/                        #  Global types for app-wide usage
│   │   ├── global.d.ts
│   │   ├── common.ts
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── profile.ts
│   └── App.tsx
│
├── features/
│   ├── auth/
│   │   ├── common/
│   │   │   ├── components/
│   │   │   ├── slices/
│   │   │   ├── services/
│   │   │   └── types/                #  Feature-specific types
│   │   │       └── auth.types.ts
│   │   ├── user/
│   │   ├── vendor/
│   │   └── admin/
│
│   ├── account/
│   │   ├── common/
│   │   │   ├── components/
│   │   │   ├── slices/
│   │   │   ├── services/
│   │   │   └── types/
│   │   │       └── profile.types.ts
│   │   ├── user/
│   │   ├── vendor/
│   │   └── admin/
│
│   ├── rental/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   │       └── rental.types.ts
│
│   ├── books/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   │       └── book.types.ts
│
│   ├── dashboard/
│   ├── orders/
│   ├── chat/
│   ├── payment/
│   └── notification/
│
├── shared-ui/                         #  Reusable components (also typed)
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Spinner.tsx
│   └── types/                         #  UI-related prop types
│       ├── button.types.ts
│       ├── input.types.ts
│       ├── modal.types.ts
│       └── index.ts
│
└── main.tsx
