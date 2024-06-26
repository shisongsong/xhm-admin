// [Return type problem](https://github.com/i18next/react-i18next/issues/1587)
// [Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz](https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz)
import 'i18next';

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
        // ...
    }
}
